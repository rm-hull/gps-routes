import { Heading, Text, VStack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { GlassPane } from "@/components/GlassPane";

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
