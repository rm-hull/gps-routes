import { createFileRoute } from "@tanstack/react-router";
import { Hits, Pagination } from "react-instantsearch";
import { SearchResult } from "../../SearchResult";
import { GlassPane } from "../../GlassPane";
import { Container } from "@chakra-ui/react";

export const Route = createFileRoute("/gps-routes/")({
  component: Index,
});

function Index() {
  return (
    <GlassPane gap={2}>
      <Hits hitComponent={SearchResult} />
      <Container centerContent>
        <Pagination />
      </Container>
    </GlassPane>
  );
}
