import { PropsWithChildren } from "react";
import { Card, useBreakpointValue } from "@chakra-ui/react";

type GlassPaneProps = {
  opacity?: string;
  gap?: number;
};

export function GlassPane({
  children,
  gap,
  opacity = "30%",
}: PropsWithChildren<GlassPaneProps>) {
  const desktopMode = useBreakpointValue({ base: false, md: true });

  const additionalProps = desktopMode && {
    width: "calc(100% - 40px)",
    margin: "20px auto",
    borderRadius: 10,
  };

  return (
    <Card.Root
      flex={1}
      background={`color-mix(in srgb, var(--chakra-colors-bg-panel) ${opacity}, transparent)`}
      backdropFilter="blur(5px)"
      border={0}
      borderRadius={0}
      overflowY="auto"
      {...additionalProps}
    >
      <Card.Body gap={gap}>{children}</Card.Body>
    </Card.Root>
  );
}
