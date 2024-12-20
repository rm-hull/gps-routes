import { PropsWithChildren } from "react";
import { Card } from "@chakra-ui/react";

type GlassPaneProps = {
  opacity?: string;
};

export function GlassPane({
  children,
  opacity = "30%",
}: PropsWithChildren<GlassPaneProps>) {
  return (
    <Card.Root
      flex={1}
      width="calc(100% - 40px)"
      margin="20px auto"
      background={`color-mix(in srgb, var(--chakra-colors-bg-panel) ${opacity}, transparent)`}
      backdropFilter="blur(5px)"
      borderRadius={10}
      border={0}
      overflowY="auto"
    >
      <Card.Body>{children}</Card.Body>
    </Card.Root>
  );
}
