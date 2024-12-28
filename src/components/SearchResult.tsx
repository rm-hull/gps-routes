import { Badge, Card, Image, Link } from "@chakra-ui/react";
// import PlaceholderImage from "./PlaceholderImage";
import { Link as RouterLink } from "@tanstack/react-router";
import { Result } from "@/types.ts";
import { Route as refRoute } from "@/routes/gps-routes/$ref.tsx";

type SearchResulProps = {
  hit: Result;
  shadow?: boolean;
};

export function SearchResult({ hit, shadow = true }: SearchResulProps) {
  return (
    <Link asChild outlineOffset={0}>
      <RouterLink to={refRoute.to} params={{ ref: hit.ref }}>
        <Card.Root
          width="xs"
          overflow="hidden"
          border={0}
          outline={0}
          shadow={shadow ? "md" : "none"}
        >
          <Image
            src={hit.headline_image_url}
            alt={hit.title}
            height={60}
            fit="cover"
          />
          <Badge colorPalette="blue" position="absolute" top={1} right={1}>
            {hit.distance_km} km
          </Badge>
          <Card.Body padding={2}>
            <Card.Title truncate>{hit.title}</Card.Title>
            <Card.Description lineClamp={3}>{hit.description}</Card.Description>
          </Card.Body>
        </Card.Root>
      </RouterLink>
    </Link>
  );
}
