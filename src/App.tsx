import { Container, Card } from "@chakra-ui/react";
import { Hits, Pagination } from "react-instantsearch";
import { SearchResult } from "./SearchResult";
import { CustomSearchBox } from "./CustomSearchBox";

function App() {
  return (
    <>
      <Container margin={20} centerContent>
        <CustomSearchBox />
      </Container>
      <Card.Root
        flex={1}
        width="calc(100% - 40px)"
        margin="20px auto"
        background="color-mix(in srgb, var(--chakra-colors-bg-panel) 30%, transparent)"
        backdropFilter="blur(5px)"
        borderRadius={10}
        border={0}
        overflowY="auto"
      >
        <Card.Body>
          <Hits hitComponent={SearchResult} />
          <Pagination />
        </Card.Body>

      </Card.Root>
    </>
  );
}

export default App;
