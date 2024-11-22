import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light', // Default mode
  useSystemColorMode: false // Use user's system preferences if true
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#f0faff',
      100: '#d6ecf7',
      200: '#aed5ef',
      300: '#85bde6',
      400: '#5da5de',
      500: '#4F97BA', // Primary brand color
      600: '#3b7691',
      700: '#254E70', // Dark mode primary
      800: '#1a3852',
      900: '#0d1b27'
    },
    accent: {
      100: '#FFF8EE', // Light accent
      200: '#FFE4B5', // Golden tones
      300: '#D7AF70', // Muted gold
      400: '#1982C4' // Links
    },
    background: {
      light: '#fdfdfd', // Light theme background
      dark: '#121212' // Dark theme background
    },
    text: {
      light: '#1a202c', // Light mode text color
      dark: '#f5f5f5' // Dark mode text color
    }
  },
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Playfair Display', serif`
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'light' ? 'background.light' : 'background.dark',
        color: props.colorMode === 'light' ? 'text.light' : 'text.dark',
        transition: 'background-color 0.2s, color 0.2s'
      }
    })
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md'
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === 'light' ? 'brand.500' : 'brand.700',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'light' ? 'brand.600' : 'brand.800'
          }
        }),
        outline: (props: any) => ({
          borderColor: props.colorMode === 'light' ? 'brand.500' : 'brand.700',
          color: props.colorMode === 'light' ? 'brand.500' : 'brand.700',
          _hover: {
            bg: props.colorMode === 'light' ? 'brand.50' : 'brand.800'
          }
        })
      }
    },
    Link: {
      baseStyle: {
        color: 'accent.400',
        _hover: {
          textDecoration: 'underline'
        }
      }
    }
  }
});

export default theme;
