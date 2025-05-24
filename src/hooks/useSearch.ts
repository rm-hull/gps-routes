import { atom, useAtom } from "jotai";
import { useDebouncedCallback } from "use-debounce";
import { LatLng } from "leaflet";
import { SearchRequest, SearchResponse } from "@/types";
import { search } from "@/services/api-backend";

type Store = {
  request: SearchRequest;
  response?: SearchResponse;
  transitTime?: number;
  error?: Error;
  loading: boolean;
};

const INIT_REQUEST: SearchRequest = {
  query: "",
  offset: 0,
  limit: 24,
  truncateText: true,
};

const root = atom<Store>({
  request: { ...INIT_REQUEST },
  response: undefined,
  transitTime: 0,
  loading: false,
});

export function useSearch() {
  const [store, setStore] = useAtom(root);

  const refetch = async (newReq: SearchRequest) => {
    setStore((prev) => ({ ...prev, loading: true }));
    const startTime = Date.now();

    try {
      const response = await search(newReq);
      const transitTime = Date.now() - startTime;
      setStore((prev) => ({
        ...prev,
        request: newReq,
        response,
        transitTime,
        error: undefined,
        loading: false,
      }));
    } catch (error) {
      const transitTime = Date.now() - startTime;
      setStore((prev) => ({
        ...prev,
        request: newReq,
        transitTime,
        error: error as Error,
        loading: false,
      }));
    }
  };

  const refine = useDebouncedCallback(
    async (query) => refetch({ ...INIT_REQUEST, query: query.trim() }),
    300
  );

  const goto = async (offset: number) => refetch({ ...store.request, offset });

  const addFacetValue = async (attribute: string, value: string) => {
    const current = store.request?.facets?.[attribute] || [];
    const newValues = new Set([...current, value]);

    return refetch({
      ...store.request,
      offset: 0,
      facets: {
        ...store.request.facets,
        [attribute]: newValues.size === 0 ? undefined : [...newValues],
      },
    });
  };

  const removeFacetValue = async (attribute: string, value: string) => {
    const current = store.request?.facets?.[attribute] || [];
    const newValues = current.filter((v) => v != value);

    return refetch({
      ...store.request,
      offset: 0,
      facets: {
        ...store.request.facets,
        [attribute]: newValues.length === 0 ? undefined : [...newValues],
      },
    });
  };

  const resetFacets = async () =>
    refetch({
      ...store.request,
      offset: 0,
      facets: undefined,
    });

  const boundingBox = useDebouncedCallback(
    async (bbox: { northEast: LatLng; southWest: LatLng }) =>
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
      }),
    300
  );

  const resetBoundingBox = useDebouncedCallback(
    async () =>
      refetch({
        ...store.request,
        limit: INIT_REQUEST.limit,
        boundingBox: undefined,
      }),
    10
  );

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
