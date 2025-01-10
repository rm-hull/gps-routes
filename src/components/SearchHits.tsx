import { useEffect } from "react";
import { Box, Container } from "@chakra-ui/react";
import { ResultCard } from "./search/ResultCard";
import { Pagination } from "./search/Pagination";
import { useSearch } from "@/hooks/useSearch";

export function SearchHits() {
  const { store, resetBoundingBox } = useSearch();

  useEffect(() => {
    resetBoundingBox();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box display="flex" flexWrap="wrap" gap={4}>
        {store?.response?.hits?.map((summary) => (
          <ResultCard key={summary.objectID} hit={summary} />
        ))}
      </Box>
      <Container centerContent>
        <Pagination />
      </Container>
    </>
  );
}
