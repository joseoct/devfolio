import { extendTheme } from '@chakra-ui/react';
import '@fontsource/league-spartan';

export const theme = extendTheme({

  // components: {
  //   Select: {
  //     baseStyle: {
  //       field: {
  //         color: "purple.400"
  //       }
  //     }
  //   }
  // },
  components: {
    Menu: {
      baseStyle: {
        item: {
          bg: '#1e1d24',
          _hover: {
            bg: '#1b1a20',
          },
        },
        list: {
          bg: '#1e1d24',
        },
      },
    },
  },
  config: {
    initialColorMode: 'dark',
  },
  fonts: {
    heading: 'League Spartan',
    body: 'League Spartan',
  },
  styles: {
    global: {
      body: {
        // bgGradient: 'linear-gradient(to-r, #010004, #08081a)',
        bg: '#222129',
        color: 'gray.50',
      },
    },
  },
});
