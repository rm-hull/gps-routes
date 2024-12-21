import { Box, Badge, Image, Text } from "@chakra-ui/react";
import { type Image as ImageType } from "./types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type CarouselProps = {
  images?: ImageType[];
};

export function Carousel({ images = [] }: CarouselProps) {
  if (images.length === 0) {
    return undefined;
  }

  return (
    <Box maxW="750px" marginX={4}>
      {/* @ts-expect-error: Slide types dont quite line up properly */}
      <Slider dots infinite speed={750} slidesToShow={1} slidesToScroll={1}>
        {images.map((img) => (
          <Box key={img.src} px={2}>
            <Image
              width="100%"
              fit="cover"
              src={img.src}
              alt={img.caption}
              borderRadius={10}
              aspectRatio="4/3"
              shadow="md"
            />
            <Badge
              colorPalette="blue"
              position="absolute"
              top={1}
              marginLeft={1}
            >
              <Text maxW={500} truncate>
                {img.title}
              </Text>
            </Badge>

            <Text>{img.caption}</Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
