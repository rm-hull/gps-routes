import { createFileRoute } from "@tanstack/react-router";
import { Code, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
import { License } from "@/components/License";
import { GlassPane } from "@/components/GlassPane";

export const Route = createFileRoute("/gps-routes/about")({
  component: About,
});

function About() {
  return (
    <GlassPane>
      <VStack align="left">
        <Heading size="lg">About</Heading>
        <Text>
          GPS routes is a small web-app that ... Please read the{" "}
          <Link color="blue" href="/gps-routes/privacy_policy.txt">
            privacy policy <LuExternalLink />
          </Link>{" "}
          and the{" "}
          <Link color="blue" href="/gps-routes/terms_of_service.txt">
            terms of service <LuExternalLink />
          </Link>
          .
        </Text>

        <Text>
          <Link color="blue" href="https://github.com/rm-hull/gps-routes">
            https://github.com/rm-hull/gps-routes <LuExternalLink />
          </Link>
        </Text>
        <Text>
          Build info: <Code>{import.meta.env.VITE_GIT_COMMIT_HASH}</Code>,{" "}
          {import.meta.env.VITE_GIT_COMMIT_DATE}
        </Text>

        <License />
      </VStack>
    </GlassPane>
  );
}
