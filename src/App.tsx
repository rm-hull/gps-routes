import { Box, Container } from "@chakra-ui/react";
import { Hits, Pagination } from "react-instantsearch";
import { SearchResult } from "./SearchResult";
import { CustomSearchBox } from "./CustomSearchBox";

function App() {
  return (
    <>
      <Container margin={20} centerContent>
        <CustomSearchBox />
      </Container>
      <Box
        flex={1}
        width="calc(100% - 40px)"
        margin="20px auto"
        padding={5}
        background="rgba(255, 255, 255, 0.4)"
        backdropFilter="blur(5px)"
        borderRadius={10}
        overflowY="auto"
        boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
      >
        <Box>
          <Hits hitComponent={SearchResult} />
          <Pagination />
        
        </Box>
      </Box>
    </>
  );
}

export default App;
