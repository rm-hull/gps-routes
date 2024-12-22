import { VStack, Heading, Text } from "@chakra-ui/react";
import { GlassPane } from "../../GlassPane";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gps-routes/settings")({
  component: Settings,
});

function Settings() {
  return (
    <GlassPane>
      <VStack align="left">
        <Heading size="lg">Settings</Heading>
        <Text>TODO</Text>
      </VStack>
    </GlassPane>
  );
}
