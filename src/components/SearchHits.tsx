import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { ResultCard } from "./search/ResultCard";
import { useSearch } from "@/hooks/useSearch";

export function SearchHits() {
  const { store, resetBoundingBox } = useSearch();

  useEffect(() => {
    resetBoundingBox();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (store.error) {
    throw store.error;
  }

  return (
    <Box display="flex" flexWrap="wrap" gap={6} justifyContent="center">
      {store?.response?.hits?.map((summary) => (
        <ResultCard key={summary.objectID} hit={summary} />
      ))}
    </Box>
  );
}
