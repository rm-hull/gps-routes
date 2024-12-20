import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@chakra-ui/react";
import { Hits, Pagination } from "react-instantsearch";
import { SearchResult } from "../../SearchResult";
import { CustomSearchBox } from "../../CustomSearchBox";
import { GlassPane } from "../../GlassPane";

export const Route = createFileRoute("/gps-routes/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Container margin={20} centerContent>
        <CustomSearchBox />
        <Pagination />
      </Container>

      <GlassPane>
        <Hits hitComponent={SearchResult} />
      </GlassPane>
    </>
  );
}
