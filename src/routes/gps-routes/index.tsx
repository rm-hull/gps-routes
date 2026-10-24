import { AspectRatio } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { GlassPane } from "@/components/GlassPane";
import { MapView } from "@/components/map/MapView";
import { SearchHits } from "@/components/SearchHits";
import { useGeneralSettings } from "@/hooks/useGeneralSettings";
import { useRef } from "react";

export const Route = createFileRoute("/gps-routes/")({
  component: Index,
});

function Index() {
  const { settings } = useGeneralSettings();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (settings?.searchView === "map") {
    return (
      <AspectRatio width="100%" height="100%">
        <MapView />
      </AspectRatio>
    );
  }

  return (
    <>
      <GlassPane gap={2} onSetScrollContainer={(el) => (scrollRef.current = el)}>
        <SearchHits />
      </GlassPane>
      <Footer scrollToTop={scrollToTop} />
    </>
  );
}
