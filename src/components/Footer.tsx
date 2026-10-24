import { Box, Container, Flex } from "@chakra-ui/react";
import { Pagination } from "./search/Pagination";
import { SortControl } from "./search/SortControl";

type NavbarProps = {
  opacity?: string;
};

export function Footer({ opacity = "40%" }: NavbarProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100vw"
      background={`color-mix(in srgb, var(--chakra-colors-bg-panel) ${opacity}, transparent)`}
      backdropFilter="blur(5px)"
      borderTop="1px solid color-mix(in srgb, var(--chakra-colors-bg-panel) 20%, transparent)"
      padding={1}
    >
      <Container>
        <Flex alignItems="center">
          <Box flex="1" display="flex" justifyContent="center">
            <Pagination />
          </Box>
          <SortControl />
        </Flex>
      </Container>
    </Box>
  );
}
