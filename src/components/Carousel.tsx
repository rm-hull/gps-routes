import { AspectRatio, Badge, Box, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import { type Image as ImageType } from "@/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
  images?: ImageType[];
};

export function Carousel({ images = [] }: CarouselProps) {
  if (images.length === 0) {
    return undefined;
  }

  return (
    <Box width="50vw" marginX={6}>
      <Slider dots infinite speed={750} slidesToShow={1} slidesToScroll={1}>
        {images.map((img) => (
          <Box key={img.src} px={2}>
            <AspectRatio ratio={4 / 3}>
              <Image
                fit="cover"
                src={img.src}
                alt={img.caption}
                borderRadius={10}
                shadow="md"
              />
            </AspectRatio>
            <Badge
              colorPalette="blue"
              position="absolute"
              top={1}
              marginLeft={1}
            >
              <Text maxW={300} truncate>
                {img.title}
              </Text>
            </Badge>

            <Text width="50vw" pr={2} fontSize="sm">
              {img.caption}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
