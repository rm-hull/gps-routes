import { Nearby, Result } from "../../types";
import { GlassPane } from "../../GlassPane";
import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import { Box, Heading, HStack, Link, List, Tabs, Text } from "@chakra-ui/react";
import { Md5 } from "ts-md5";
import { indexName, searchClient } from "../../services/algolia";
import { Route as refRoute } from "./$ref.tsx";
import { Carousel } from "../../Carousel.tsx";

export const Route = createFileRoute("/gps-routes/$ref")({
  loader: async ({ params }) => fetchResult(params.ref),
  component: DetailPage,
});

function DetailPage() {
  const result = Route.useLoaderData();

  return (
    <GlassPane>
      <HStack alignItems="start" gap={4}>
        <Box flex={2}>
          <Heading size="lg">{result.title}</Heading>
          <Text>{result.description}</Text>

          <NearbySection nearby={result.nearby} />
        </Box>
        <Tabs.Root flex={3} defaultValue="images">
          <Tabs.List>
            <Tabs.Trigger value="map">Map</Tabs.Trigger>
            <Tabs.Trigger value="images">Images</Tabs.Trigger>
            <Tabs.Trigger value="video">Video</Tabs.Trigger>
            <Tabs.Trigger value="raw">Raw JSON</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="map">Map - TODO</Tabs.Content>
          <Tabs.Content value="images">
            <Carousel images={result.images} />
          </Tabs.Content>
          <Tabs.Content value="video">Video - TODO</Tabs.Content>
          <Tabs.Content value="raw">
            <Box overflowX="auto" maxW={800}>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
      </HStack>
    </GlassPane>
  );
}

type NearbySectionProps = {
  nearby?: Nearby[];
};

function NearbySection({ nearby }: NearbySectionProps) {
  if (!nearby) {
    return undefined;
  }

  function byDescription(a: Nearby, b: Nearby): number {
    return a.description.localeCompare(b.description);
  }

  return (
    <>
      <Heading size="md">Nearby</Heading>
      <List.Root>
        {nearby.sort(byDescription).map(({ ref, description }) => (
          <List.Item key={ref}>
            <Link asChild>
              <RouterLink to={refRoute.to} params={{ ref }}>
                {description}
              </RouterLink>
            </Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}

async function fetchResult(ref: string): Promise<Result> {
  const objectID = Md5.hashStr(ref);
  return searchClient.getObject({ indexName, objectID }) as Promise<Result>;
}
