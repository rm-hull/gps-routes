import {
  AspectRatio,
  Carousel as ChakraCarousel,
  Em,
  Image,
  Text,
} from "@chakra-ui/react";
import { type Image as ImageType } from "@/types";

type CarouselProps = {
  images?: ImageType[];
};

export function Carousel({ images = [] }: CarouselProps) {
  if (images.length === 0) {
    return undefined;
  }

  return (
    <ChakraCarousel.Root slideCount={images.length}>
      <ChakraCarousel.ItemGroup width="full">
        {images.map((img, index) => (
          <ChakraCarousel.Item key={img.src} index={index}>
            <AspectRatio ratio={4 / 3}>
              <Image
                fit="cover"
                src={img.src}
                alt={img.caption}
                borderRadius={10}
                shadow="md"
                loading="lazy"
              />
            </AspectRatio>

            <Text fontSize="sm">{img.caption}</Text>
            <Text fontSize="xs" maxW={500} truncate color="fg.muted">
              <Em>{img.title}</Em>
            </Text>
          </ChakraCarousel.Item>
        ))}
      </ChakraCarousel.ItemGroup>

      <ChakraCarousel.Control justifyContent="center" width="full">
        <ChakraCarousel.Indicators />
      </ChakraCarousel.Control>
    </ChakraCarousel.Root>
  );
}
