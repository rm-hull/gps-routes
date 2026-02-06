import { createFileRoute } from "@tanstack/react-router";
import {
  AspectRatio,
  Badge,
  Box,
  Group,
  Heading,
  Tabs,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Md5 } from "ts-md5";
import { Helmet } from "react-helmet";
import { Result, Summary } from "@/types";
import {
  fetchGeoJSON,
  GeoJSONCollection,
  SupportedMimeTypes,
} from "@/services/geojson.ts";
import { GlassPane } from "@/components/GlassPane.tsx";
import { Carousel } from "@/components/Carousel.tsx";
import { MapView } from "@/components/map/MapView.tsx";
import { getByObjectId } from "@/services/api-backend.ts";
import { ResultCard } from "@/components/search/ResultCard.tsx";
import { JsonCodeBlock } from "@/components/JsonCodeBlock";

export const Route = createFileRoute("/gps-routes/$ref")({
  loader: async ({ params }) => fetchResult(params.ref),
  component: DetailPage,
});

function truncateText(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) {
    return text;
  }

  const truncated = text.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  if (lastSpaceIndex !== -1) {
    return truncated.slice(0, lastSpaceIndex).trim() + "…";
  }

  return truncated.trim() + "…";
}

function DetailPage() {
  const [result, route] = Route.useLoaderData();
  const desktopMode = useBreakpointValue({ base: false, lg: true });

  return (
    <GlassPane>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="title" content={result.title} />
        <meta name="description" content={result.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={result.title} />
        <meta
          property="og:description"
          content={truncateText(result.description)}
        />
        <meta property="og:image" content={result.headline_image_url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:title" content={result.title} />
        <meta
          name="twitter:description"
          content={truncateText(result.description)}
        />
        <meta name="twitter:image" content={result.headline_image_url} />
      </Helmet>
      <Box
        display="flex"
        flexDirection={desktopMode ? "row" : "column"}
        alignItems="start"
        gap={4}
      >
        <Box spaceY={2}>
          <Heading size="lg">
            {result.title} ({result.distance_km} km)
          </Heading>
          <Text
            textStyle="xs"
            fontWeight="semibold"
            textTransform="uppercase"
            color="var(--chakra-colors-gray-fg)"
          >
            {result.display_address}
          </Text>

          <Text>{result.description}</Text>

          {result.details?.map(({ subtitle, content }) => (
            <Box key={subtitle} spaceY={1}>
              <Heading size="sm">{subtitle}</Heading>
              <Text>{content}</Text>
            </Box>
          ))}
          <Group flexWrap="wrap">
            {result.district && (
              <Badge colorPalette="blue">{result.district}</Badge>
            )}
            {result.region && (
              <Badge colorPalette="blue">{result.region}</Badge>
            )}
            {result.county && (
              <Badge colorPalette="blue">{result.county}</Badge>
            )}
            {result.state && <Badge colorPalette="blue">{result.state}</Badge>}
            {result.country && (
              <Badge colorPalette="blue">{result.country}</Badge>
            )}
          </Group>
        </Box>

        <Box width={desktopMode ? "60vw" : "full"} position="sticky" top={6}>
          <Tabs.Root
            defaultValue="images"
            width={desktopMode ? "50vw" : undefined}
          >
            <Tabs.List>
              <Tabs.Trigger value="images" disabled={!result.images}>
                Images
              </Tabs.Trigger>
              <Tabs.Trigger value="route">Route</Tabs.Trigger>
              <Tabs.Trigger value="video" disabled={!result.video_url}>
                Video
              </Tabs.Trigger>
              <Tabs.Trigger value="nearby" disabled={!result.nearby}>
                Nearby
              </Tabs.Trigger>
              <Tabs.Trigger value="raw">Raw JSON</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="images">
              <Carousel images={result.images} />
            </Tabs.Content>
            <Tabs.Content value="route">
              <AspectRatio ratio={3 / 2} shadow="md">
                <MapView route={route} />
              </AspectRatio>
            </Tabs.Content>
            <Tabs.Content value="video">
              <AspectRatio ratio={3 / 2} shadow="md">
                <iframe
                  loading="lazy"
                  id="video"
                  allowFullScreen
                  src={result.video_url}
                  allow="fullscreen"
                ></iframe>
              </AspectRatio>
            </Tabs.Content>
            <Tabs.Content value="nearby">
              <NearbySection nearby={result.nearby} />
            </Tabs.Content>
            <Tabs.Content value="raw">
              <JsonCodeBlock data={result} />
            </Tabs.Content>
          </Tabs.Root>
        </Box>
      </Box>
    </GlassPane>
  );
}

type NearbySectionProps = {
  nearby?: Summary[];
};

function byTitle(a: Summary, b: Summary): number {
  return a.title.localeCompare(b.title);
}

function NearbySection({ nearby }: NearbySectionProps) {
  if (!nearby) {
    return undefined;
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))"
      gap={6}
      justifyItems="center"
      mx={4}
    >
      {nearby.toSorted(byTitle).map((summary) => (
        <ResultCard key={summary.objectID} hit={summary} />
      ))}
    </Box>
  );
}

async function fetchResult(
  ref: string,
): Promise<[Result, GeoJSONCollection, Error | undefined]> {
  const objectID = Md5.hashStr(ref);
  const result = await getByObjectId(objectID);

  try {
    const route = await fetchGeoJSON(result.gpx_url, SupportedMimeTypes.GPX);
    return [result, route, undefined];
  } catch (error: unknown) {
    console.error({ error });
    return [result, undefined, error as Error];
  }
}
