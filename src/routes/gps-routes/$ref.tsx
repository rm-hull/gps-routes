import { Nearby, Result } from "../../types";
import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import {
  Badge,
  Box,
  Heading,
  HStack,
  Link,
  List,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Md5 } from "ts-md5";
import { indexName, searchClient } from "../../services/algolia";
import { Route as refRoute } from "./$ref.tsx";
import { GlassPane } from "../../components/GlassPane.tsx";
import { Carousel } from "../../components/Carousel.tsx";
import { MapView } from "../../components/map/MapView.tsx";
import {
  fetchGeoJSON,
  SupportedMimeTypes,
  GeoJSONCollection,
} from "../../services/geojson.ts";

export const Route = createFileRoute("/gps-routes/$ref")({
  loader: async ({ params }) => fetchResult(params.ref),
  component: DetailPage,
});

function DetailPage() {
  const [result, route] = Route.useLoaderData();

  return (
    <GlassPane>
      <HStack alignItems="start" gap={4}>
        <Box flex={2} spaceY={2}>
          <Heading size="lg">
            {result.title} ({result.distance_km} km)
          </Heading>

          <Text>{result.description}</Text>
          <HStack spaceX={1}>
            {result.district && (
              <Badge colorPalette="blue">{result.district}</Badge>
            )}
            {result.county && (
              <Badge colorPalette="blue">{result.county}</Badge>
            )}
            {result.country && (
              <Badge colorPalette="blue">{result.country}</Badge>
            )}
          </HStack>
        </Box>
        <Box width="60vw" flex={3}>
          <Tabs.Root defaultValue="route">
            <Tabs.List>
              <Tabs.Trigger value="route">Route</Tabs.Trigger>
              {result.nearby && (
                <Tabs.Trigger value="nearby">Nearby</Tabs.Trigger>
              )}
              {result.images && (
                <Tabs.Trigger value="images">Images</Tabs.Trigger>
              )}
              {result.video_url && (
                <Tabs.Trigger value="video">Video</Tabs.Trigger>
              )}
              <Tabs.Trigger value="raw">Raw JSON</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="route">
              <MapView route={route} />
            </Tabs.Content>
            <Tabs.Content value="nearby">
              <NearbySection nearby={result.nearby} />
            </Tabs.Content>
            <Tabs.Content value="images">
              <Carousel images={result.images} />
            </Tabs.Content>
            <Tabs.Content value="video">
              <iframe
                loading="lazy"
                id="video"
                width={800}
                height={600}
                src={result.video_url}
                allow="fullscreen"
              ></iframe>
            </Tabs.Content>
            <Tabs.Content value="raw">
              <Box width="50vw" overflowX="auto">
                <pre>{JSON.stringify(result, null, 2)}</pre>
              </Box>
            </Tabs.Content>
          </Tabs.Root>
        </Box>
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
  );
}

async function fetchResult(
  ref: string
): Promise<[Result, GeoJSONCollection, Error | undefined]> {
  const objectID = Md5.hashStr(ref);
  const result = (await searchClient.getObject({
    indexName,
    objectID,
  })) as Result;

  try {
    const route = await fetchGeoJSON(result.gpx_url, SupportedMimeTypes.GPX);
    return [result, route, undefined];
  } catch (error: unknown) {
    console.error({ error });
    return [result, undefined, error as Error];
  }
}
