import {
  AspectRatio,
  Carousel as ChakraCarousel,
  Em,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
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
            <AspectRatio ratio={16 / 10}>
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

      <ChakraCarousel.Control justifyContent="center" width="full" gap={2}>
        <ChakraCarousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost" aria-label="Previous image">
            <LuChevronLeft />
          </IconButton>
        </ChakraCarousel.PrevTrigger>

        <ChakraCarousel.Indicators />

        <ChakraCarousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronRight />
          </IconButton>
        </ChakraCarousel.NextTrigger>
      </ChakraCarousel.Control>
    </ChakraCarousel.Root>
  );
}
