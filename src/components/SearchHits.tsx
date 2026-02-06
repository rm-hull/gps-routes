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
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))"
      gap={6}
      justifyItems="center"
      mx={4}
    >
      {store?.response?.hits?.map((summary) => (
        <ResultCard key={summary.objectID} hit={summary} />
      ))}
    </Box>
  );
}
