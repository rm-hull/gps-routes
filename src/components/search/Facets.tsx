import { Box } from "@chakra-ui/react";
import { RefinementList } from "./RefinementList";

export function Facets() {
  return (
    <Box spaceY={2}>
      <RefinementList header="Country" attribute="country" />
      <RefinementList header="State" attribute="state" />
      <RefinementList header="Region" attribute="region" showMore />
      <RefinementList header="County" attribute="county" showMore />
      <RefinementList header="District" attribute="district" showMore />
    </Box>
  );
}
