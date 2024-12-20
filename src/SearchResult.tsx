import { Hit } from "algoliasearch/lite";
import { Card, Image, Badge } from "@chakra-ui/react";

type Nearby = {
  objectID: string;
  ref: string;
  description: string;
};

type Image = {
  src: string;
  title: string;
  caption: string;
};

interface Result extends Hit {
  ref: string;
  created_at: string;
  title: string;
  description: string;
  headline_image_url: string;
  video_url?: string;
  distance_km: string;
  country?: string;
  county?: string;
  region?: string;
  district?: string;
  postcode?: string;
  _geocode: {
    lat: number;
    lng: number;
  };
  nearby: Nearby[];
  images: Image[];
}

type SearchResulProps = {
  hit: Result;
};

export function SearchResult({ hit }: SearchResulProps) {
  return (
    <Card.Root width="xs" overflow="hidden" border={0} shadow="md">
      <Image
        src={hit.headline_image_url}
        alt={hit.title}
        height={60}
        fit="cover"
      />
      <Badge colorPalette="blue" position="absolute" top={1} right={1}>{hit.distance_km} km</Badge>
      <Card.Body padding={2}>
        <Card.Title truncate>{hit.title}</Card.Title>
        <Card.Description lineClamp={3}>{hit.description}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
