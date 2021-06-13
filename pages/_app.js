import '../styles/globals.css';
import { ProvideAuth } from '../lib/auth';
import {
  ChakraProvider,
  ColorModeScript,
  Stack,
  Heading,
  Text
} from '@chakra-ui/react';
import { ThemeProvider } from '@emotion/react';

import '@fontsource/montserrat/400.css';

import theme from '@/styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ProvideAuth>
        <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Component {...pageProps} />
        </ChakraProvider>
      </ProvideAuth>
    </ThemeProvider>
  );
}

export default MyApp;
