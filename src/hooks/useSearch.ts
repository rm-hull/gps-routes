import { atom, useAtom } from "jotai";
import { useDebouncedCallback } from "use-debounce";
import { SearchRequest, SearchResponse } from "@/types";
import { search } from "@/services/gps-routes-api";

type Store = {
  request: SearchRequest;
  response?: SearchResponse;
  transitTime?: number;
};

const INIT_REQUEST: SearchRequest = { query: "", offset: 0, limit: 20 };

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
    refetch({ ...store.request, query: query.trim(), offset: 0 });
  }, 500);

  const goto = (offset: number) => {
    refetch({ ...store.request, offset });
  };

  return {
    query: store.request?.query,
    refine,
    goto,
    store, // FIXME: for debugging only
  };
}
