import { GlassPane } from "../../GlassPane";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/gps-routes/about")({
  component: About,
});

function About() {
  return <GlassPane>Hello from About!</GlassPane>;
}
