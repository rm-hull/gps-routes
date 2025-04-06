import { PropsWithChildren } from "react";
import { Card } from "@chakra-ui/react";

type GlassPaneProps = {
  opacity?: string;
  gap?: number;
};

export function GlassPane({
  children,
  gap,
  opacity = "30%",
}: PropsWithChildren<GlassPaneProps>) {
  return (
    <Card.Root
      flex={1}
      background={`color-mix(in srgb, var(--chakra-colors-bg-panel) ${opacity}, transparent)`}
      backdropFilter="blur(5px)"
      border={0}
      borderRadius={0}
      overflowY="auto"
    >
      <Card.Body gap={gap}>{children}</Card.Body>
    </Card.Root>
  );
}
