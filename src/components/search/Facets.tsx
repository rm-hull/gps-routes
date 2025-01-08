import { Box, Heading } from "@chakra-ui/react";
import { RefinementList } from "./RefinementList";
// import { RefinementList } from "react-instantsearch";

export function Facets() {
  return (
    <>
      <Box>
        <Heading size="sm">Country</Heading>
        <RefinementList attribute="country" />
      </Box>
      <Box>
        <Heading size="sm">State</Heading>
        <RefinementList attribute="state" />
      </Box>
      <Box>
        <Heading size="sm">Region</Heading>
        <RefinementList attribute="region" showMore />
      </Box>
      <Box>
        <Heading size="sm">County</Heading>
        <RefinementList attribute="county" showMore showMoreLimit={50} />
      </Box>
      <Box>
        <Heading size="sm">District</Heading>
        <RefinementList attribute="district" showMore showMoreLimit={100} />
      </Box>
    </>
  );
}
