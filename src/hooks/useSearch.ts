import { atom, useAtom } from "jotai";
import { useDebouncedCallback } from "use-debounce";
import { LatLng } from "leaflet";
import { SearchRequest, SearchResponse } from "@/types";
import { search } from "@/services/api-backend";

type Store = {
  request: SearchRequest;
  response?: SearchResponse;
  transitTime?: number;
};

const INIT_REQUEST: SearchRequest = { query: "", offset: 0, limit: 24 };

const root = atom<Store>({
  request: { ...INIT_REQUEST },
  response: undefined,
  transitTime: 0,
});

export function useSearch() {
  const [store, setStore] = useAtom(root);

  const refetch = (newReq: SearchRequest) => {
    const startTime = Date.now();

    search(newReq).then((response) => {
      const transitTime = Date.now() - startTime;

      setStore((prev) => ({
        ...prev,
        request: newReq,
        response,
        transitTime,
      }));
    });
  };

  const refine = useDebouncedCallback((query) => {
    refetch({ ...INIT_REQUEST, query: query.trim() });
  }, 300);

  const goto = (offset: number) => {
    refetch({ ...store.request, offset });
  };

  const addFacetValue = (attribute: string, value: string) => {
    const current = store.request?.facets?.[attribute] || [];
    const newValues = new Set([...current, value]);

    refetch({
      ...store.request,
      offset: 0,
      facets: {
        ...store.request.facets,
        [attribute]: newValues.size === 0 ? undefined : [...newValues],
      },
    });
  };

  const removeFacetValue = (attribute: string, value: string) => {
    // debugger;
    const current = store.request?.facets?.[attribute] || [];
    const newValues = current.filter((v) => v != value);

    refetch({
      ...store.request,
      offset: 0,
      facets: {
        ...store.request.facets,
        [attribute]: newValues.length === 0 ? undefined : [...newValues],
      },
    });
  };

  const resetFacets = () => {
    refetch({
      ...store.request,
      offset: 0,
      facets: undefined,
    });
  };

  const boundingBox = useDebouncedCallback(
    (bbox: { northEast: LatLng; southWest: LatLng }) => {
      refetch({
        ...store.request,
        offset: 0,
        limit: 100,
        boundingBox: [
          bbox.southWest.lng,
          bbox.southWest.lat,
          bbox.northEast.lng,
          bbox.northEast.lat,
        ],
      });
    },
    300
  );

  const resetBoundingBox = useDebouncedCallback(() => {
    refetch({
      ...store.request,
      limit: INIT_REQUEST.limit,
      boundingBox: undefined,
    });
  }, 10);

  return {
    query: store.request?.query,
    refine,
    addFacetValue,
    removeFacetValue,
    resetFacets,
    goto,
    boundingBox,
    resetBoundingBox,
    store, // FIXME: for debugging only
  };
}
