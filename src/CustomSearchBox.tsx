import { ChangeEvent, useState } from "react";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "./components/ui/input-group";
import { LuSearch } from "react-icons/lu";

export function CustomSearchBox(props: UseSearchBoxProps) {
  const { query, refine } = useSearchBox(props);
  // const { status } = useInstantSearch();
  const [inputValue, setInputValue] = useState(query);
  // const inputRef = useRef<HTMLInputElement>(null);

  // const isSearchStalled = status === "stalled";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.currentTarget.value;
    setInputValue(newQuery);
    refine(newQuery);
  };

  return (
    <InputGroup
      flex="1"
      startElement={<LuSearch />}
      backdropFilter="blur(5px)"
      borderRadius={20}
    >
      <Input
        size="lg"
        width="xl"
        placeholder="Search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        autoFocus
        border={0}
        outline={0}
        borderRadius="inherit"
        color="var(--chakra-colors-fg)"
        backgroundColor="color-mix(in srgb, var(--chakra-colors-bg-panel) 50%, transparent)"
        value={inputValue}
        onChange={handleChange}
      />
    </InputGroup>
  );
}
