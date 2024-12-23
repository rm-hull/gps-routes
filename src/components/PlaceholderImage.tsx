import { useState } from "react";
import { Box, Image, Spinner, Center } from "@chakra-ui/react";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  height?: number;
};

const PlaceholderImage = ({
  src,
  alt,
  height,
  ...rest
}: PlaceholderImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box position="relative" w="full" h={height} {...rest}>
      {!isLoaded && (
        <Center position="absolute" top="0" left="0" w="100%" h="100%">
          <Spinner size="lg" />
        </Center>
      )}
      <Image
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        w="full"
        h="full"
        objectFit="cover"
        display={isLoaded ? "block" : "none"}
        // transition="opacity 0.1s ease-in-out"
        // opacity={isLoaded ? 1 : 0}
      />
    </Box>
  );
};

export default PlaceholderImage;
