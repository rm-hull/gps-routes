import { createFileRoute } from "@tanstack/react-router";
import { Hits, Pagination } from "react-instantsearch";
import { Container } from "@chakra-ui/react";
import { SearchResult } from "@/components/SearchResult";
import { GlassPane } from "@/components/GlassPane";

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
