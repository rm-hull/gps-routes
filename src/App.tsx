import { SearchResults } from "./SearchResults";
import { Box, Input, Container } from "@chakra-ui/react";
import { InputGroup } from "./components/ui/input-group";
import { LuSearch } from "react-icons/lu";

function App() {
  return (
    <>
      <Container margin={20} centerContent>
        <InputGroup
          flex="1"
          startElement={<LuSearch />}
          backdropFilter="blur(5px)"
        >
          <Input
            size="lg"
            width={600}
            placeholder="Search"
            border={0}
            outline={0}
            borderRadius={20}
            backgroundColor="rgba(255, 255, 255, 0.6)"
          />
        </InputGroup>
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
          <SearchResults />
        </Box>
      </Box>
    </>
  );
}

export default App;
