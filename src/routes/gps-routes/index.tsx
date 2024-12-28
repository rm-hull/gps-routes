import { createFileRoute } from "@tanstack/react-router";
import { AspectRatio } from "@chakra-ui/react";
import { GlassPane } from "@/components/GlassPane";
import { useGeneralSettings } from "@/hooks/useGeneralSettings";
import { MapView } from "@/components/map/MapView";
import { SearchHits } from "@/components/SearchHits";

export const Route = createFileRoute("/gps-routes/")({
  component: Index,
});

function Index() {
  const [settings] = useGeneralSettings();

  if (settings?.searchView === "grid") {
    return (
      <GlassPane gap={2}>
        <SearchHits />
      </GlassPane>
    );
  }

  return (
    <AspectRatio width="100%" height="100%">
      <MapView />
    </AspectRatio>
  );
}
