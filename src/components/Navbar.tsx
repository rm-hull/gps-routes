import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { SearchBox } from "./search/SearchBox";
import { ViewSelector } from "./ViewSelector";
// @ts-expect-error: not sure why this errors...
import Logo from "@/assets/logo.svg?react";
import { Route as homeRoute } from "@/routes/gps-routes/index";

type NavbarProps = {
  opacity?: string;
};

export function Navbar({ opacity = "40%" }: NavbarProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100vw"
      background={`color-mix(in srgb, var(--chakra-colors-bg-panel) ${opacity}, transparent)`}
      backdropFilter="blur(5px)"
      borderBottom="1px solid color-mix(in srgb, var(--chakra-colors-bg-panel) 20%, transparent)"
      padding={1}
    >
      <Link asChild margin={2} tabIndex={-1} style={{ outline: 0 }}>
        <RouterLink to={homeRoute.to}>
          <Logo width={48} height={48} />
        </RouterLink>
      </Link>
      <SearchBox />
      <ViewSelector />
    </Box>
  );
}
