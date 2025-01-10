import { Badge, Card, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { FadeInImage } from "../FadeInImage";
import { Summary } from "@/types.ts";
import { Route as refRoute } from "@/routes/gps-routes/$ref.tsx";

type ResultCardProps = {
  hit: Summary;
  shadow?: boolean;
};

export function ResultCard({ hit, shadow = true }: ResultCardProps) {
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
          <FadeInImage
            src={hit.headline_image_url}
            alt={hit.title}
            height={60}
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
