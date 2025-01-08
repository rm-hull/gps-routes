import { Box, Container } from "@chakra-ui/react";
import { ResultCard } from "./search/ResultCard";
import { useSearch } from "@/hooks/useSearch";
import { Pagination } from "./search/Pagination";

export function SearchHits() {
  const { store } = useSearch();

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
