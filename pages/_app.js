import '../styles/globals.css';
import { ProvideAuth } from '../lib/auth';
import { ProvideSearch } from '../lib/search';
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
    <ProvideAuth>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <ProvideSearch>
            <Component {...pageProps} />
          </ProvideSearch>
        </ChakraProvider>
      </ThemeProvider>
    </ProvideAuth>
  );
}

export default MyApp;
