import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Stats, useSearchBox, UseSearchBoxProps } from "react-instantsearch";
import { Box, IconButton, Input, Link } from "@chakra-ui/react";
import { LuSearch, LuSettings2 } from "react-icons/lu";
import { Link as RouterLink, useNavigate } from "@tanstack/react-router";
import { InputGroup } from "./ui/input-group";
import { SearchDrawer } from "./SearchDrawer";
import { SearchFacets } from "./SearchFacets";
import { Route as settingsRoute } from "@/routes/gps-routes/settings";
import { Route as homeRoute } from "@/routes/gps-routes/index";

export function SearchBox(props: UseSearchBoxProps) {
  const { query, refine } = useSearchBox(props);
  // const { status } = useInstantSearch();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  // const isSearchStalled = status === "stalled";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.currentTarget.value;
    setInputValue(newQuery);
    refine(newQuery);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate({ to: homeRoute.to });
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <InputGroup
      flex="1"
      startElement={<SearchDrawer trigger={<LuSearch cursor="pointer" />} />}
      startElementProps={{ pointerEvents: "all" }}
      endElement={
        <Box display="flex" alignItems="center" gap={2}>
          <Stats />
          <Box display="none">
            <SearchFacets />
          </Box>
          <Link asChild>
            <RouterLink to={settingsRoute.to}>
              <IconButton
                aria-label="Settings"
                size="xs"
                rounded="full"
                variant="subtle"
                colorPalette="blue"
              >
                <LuSettings2 />
              </IconButton>
            </RouterLink>
          </Link>
        </Box>
      }
      borderRadius={20}
      marginRight={2}
    >
      <Input
        id="search"
        name="search"
        ref={inputRef}
        size="lg"
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
        backgroundColor="color-mix(in srgb, var(--chakra-colors-bg-panel) 60%, transparent)"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </InputGroup>
  );
}
