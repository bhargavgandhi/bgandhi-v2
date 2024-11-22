// pages/_app.tsx
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme'; // Import your custom theme

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
