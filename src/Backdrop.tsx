import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import stoneRings from "./assets/backgrounds/stone-rings.webp";
import burnBridge from "./assets/backgrounds/burn-bridge.webp";
import burnhamDeepdale from "./assets/backgrounds/burnham-deepdale.webp";
import holtCountryPark from "./assets/backgrounds/holt-country-park.webp";
import garden from "./assets/backgrounds/garden.webp";
import regentsCanal from "./assets/backgrounds/regents-canal.webp";
import harrogateRingway from "./assets/backgrounds/harrogate-ringway.webp";

const backgrounds = [
  stoneRings,
  burnBridge,
  burnhamDeepdale,
  holtCountryPark,
  garden,
  regentsCanal,
  harrogateRingway,
];
const rnd = Math.floor(Math.random() * backgrounds.length);

export function Backdrop({ children }: PropsWithChildren) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      top={0}
      position="fixed"
      bgAttachment="fixed"
      backgroundImage={`url('${backgrounds[rnd]}')`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100vw"
      height="100vh"
    >
      {children}
    </Box>
  );
}
