import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};
const theme = extendTheme({
  config,
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#1a202c'
    }
  }
});

export default theme;
