import { Tabs } from "@chakra-ui/react";
import { LuGrid3X3, LuMap } from "react-icons/lu";
import { SearchView, useGeneralSettings } from "@/hooks/useGeneralSettings";

export function ViewSelector() {
  const [settings, updateSettings] = useGeneralSettings();

  const handleSearchViewChange = (value: SearchView) => {
    updateSettings({ ...settings, searchView: value });
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
          Grid
        </Tabs.Trigger>
        <Tabs.Trigger value="map">
          <LuMap />
          Map
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}
