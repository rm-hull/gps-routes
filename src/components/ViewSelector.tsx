import { Tabs, useBreakpointValue } from "@chakra-ui/react";
import { LuGrid3X3, LuMap } from "react-icons/lu";
import { useNavigate } from "@tanstack/react-router";
import { SearchView, useGeneralSettings } from "@/hooks/useGeneralSettings";
import { Route as homeRoute } from "@/routes/gps-routes/index";

export function ViewSelector() {
  const navigate = useNavigate();
  const [settings, updateSettings] = useGeneralSettings();
  const desktopMode = useBreakpointValue({ base: false, md: true });

  const handleSearchViewChange = (value: SearchView) => {
    updateSettings({ ...settings, searchView: value });
    navigate({ to: homeRoute.to });
  };

  return (
    <Tabs.Root
      size="sm"
      value={settings?.searchView || "grid"}
      onValueChange={(e) => handleSearchViewChange(e.value as SearchView)}
      variant="subtle"
    >
      <Tabs.List rounded="l3" p="1">
        <Tabs.Trigger value="grid">
          <LuGrid3X3 />
          {desktopMode && "Grid"}
        </Tabs.Trigger>
        <Tabs.Trigger value="map">
          <LuMap />
          {desktopMode && "Map"}
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}
