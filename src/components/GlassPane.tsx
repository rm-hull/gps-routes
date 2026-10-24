import { Card } from "@chakra-ui/react";
import { PropsWithChildren, useRef } from "react";

type GlassPaneProps = {
  opacity?: string;
  gap?: number;
  onSetScrollContainer?: (el: HTMLDivElement | null) => void;
};

export function GlassPane({ children, gap, opacity = "30%", onSetScrollContainer }: PropsWithChildren<GlassPaneProps>) {
  const ref = useRef<HTMLDivElement>(null);

  if (onSetScrollContainer && ref.current !== null) {
    onSetScrollContainer(ref.current);
  }

  return (
    <Card.Root
      ref={ref}
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
