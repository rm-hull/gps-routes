import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  Box,
  IconButton,
  Input,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LuSearch, LuSettings2 } from "react-icons/lu";
import { Link as RouterLink, useNavigate } from "@tanstack/react-router";
import { Stats } from "./Stats";
import { InputGroup } from "../ui/input-group";
import { SearchDrawer } from "../SearchDrawer";
import { Route as settingsRoute } from "@/routes/gps-routes/settings";
import { Route as homeRoute } from "@/routes/gps-routes/index";
import { useSearch } from "@/hooks/useSearch";

export function SearchBox() {
  const { query, refine } = useSearch();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);
  const desktopMode = useBreakpointValue({ base: false, md: true });

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.currentTarget.value;
    setInputValue(newQuery);
    refine(newQuery);
    navigate({ to: homeRoute.to });
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
          {desktopMode && <Stats />}
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
        type="text"
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
      />
    </InputGroup>
  );
}
