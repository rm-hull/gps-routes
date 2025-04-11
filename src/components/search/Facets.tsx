import { Box } from "@chakra-ui/react";
import { RefinementList } from "./RefinementList";
import { Separator } from "@chakra-ui/react";

export function Facets() {
  return (
    <Box spaceY={2}>
      <RefinementList header="Route Type" attribute="route_type" />
      {/* <RefinementList
        header="Estimated Duration"
        attribute="estimated_duration"
      /> */}
      <RefinementList header="Difficulty" attribute="difficulty" />
      <RefinementList header="Terrain" attribute="terrain" showMore />
      <RefinementList header="Activities" attribute="activities" showMore />
      <RefinementList header="Facilities" attribute="facilities" showMore />
      <RefinementList
        header="Points of Interest"
        attribute="points_of_interest"
        showMore
      />
      <Separator variant="dashed" />
      <RefinementList header="Country" attribute="country" />
      <RefinementList header="State" attribute="state" />
      <RefinementList header="Region" attribute="region" showMore />
      <RefinementList header="County" attribute="county" showMore />
      <RefinementList header="District" attribute="district" showMore />
    </Box>
  );
}
