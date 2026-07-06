import { AspectRatio } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { GlassPane } from "@/components/GlassPane";
import { MapView } from "@/components/map/MapView";
import { SearchHits } from "@/components/SearchHits";
import { useGeneralSettings } from "@/hooks/useGeneralSettings";

export const Route = createFileRoute("/gps-routes/")({
  component: Index,
});

function Index() {
  const { settings } = useGeneralSettings();

  if (settings?.searchView === "map") {
    return (
      <AspectRatio width="100%" height="100%">
        <MapView />
      </AspectRatio>
    );
  }

  return (
    <>
      <GlassPane gap={2}>
        <SearchHits />
      </GlassPane>
      <Footer />
    </>
  );
}
