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
        bgGradient: 'linear-gradient(to-r, #010004, #08081a)',
        color: 'gray.50',
      },
    },
  },
});
