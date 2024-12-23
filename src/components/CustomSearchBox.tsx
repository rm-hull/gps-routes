import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch";
import { IconButton, Input, Link } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { LuSearch, LuSettings2 } from "react-icons/lu";
import { Route as settingsRoute } from "../routes/gps-routes/settings";
import { Link as RouterLink, useNavigate } from "@tanstack/react-router";
import { Route as homeRoute } from "../routes/gps-routes/index";

export function CustomSearchBox(props: UseSearchBoxProps) {
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
    console.log({ event });
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
      startElement={<LuSearch />}
      endElement={
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
      }
      borderRadius={20}
      marginRight={2}
    >
      <Input
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
