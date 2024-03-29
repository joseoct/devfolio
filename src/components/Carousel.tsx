import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface CarouselProps {
  appImages: string[];
}

export default function Carousel({ appImages }: CarouselProps) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });

  return (
    <Box position={'relative'} height={'xl'} width="sm" overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left="8%"
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        bg="whiteAlpha.500"
        onClick={() => slider?.slickPrev()}
      >
        <ArrowLeftIcon />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right="8%"
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        bg="whiteAlpha.500"
        onClick={() => slider?.slickNext()}
      >
        <ArrowRightIcon />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {appImages.map((url, index) => (
          <Box
            key={index}
            height={'xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={url}
          />
        ))}
      </Slider>
    </Box>
  );
}
