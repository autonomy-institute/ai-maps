import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme';
import '@fontsource/inter/variable.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
