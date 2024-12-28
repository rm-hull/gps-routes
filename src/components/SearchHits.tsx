import { Container } from "@chakra-ui/react";
import { Hits, Pagination } from "react-instantsearch";
import { SearchResult } from "./SearchResult";

export function SearchHits() {
  return (
    <>
      <Hits hitComponent={SearchResult} />
      <Container centerContent>
        <Pagination />
      </Container>
    </>
  );
}
