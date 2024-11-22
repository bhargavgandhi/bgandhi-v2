import { Box, Flex, Link, Spacer, Button, useColorMode } from '@chakra-ui/react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" bg={colorMode === 'light' ? 'brand.100' : 'brand.700'} p={4}>
      <Flex alignItems="center">
        <Link href="/" fontSize="2xl" fontWeight="bold" color="brand.500">
          Bhargav Gandhi
        </Link>
        <Spacer />
        <Flex gap={4}>
          <Link href="/skills" fontSize="lg" color="accent.400">
            Skills
          </Link>
          <Link href="/portfolio" fontSize="lg" color="accent.400">
            Portfolio
          </Link>
          <Link href="/contact" fontSize="lg" color="accent.400">
            Contact
          </Link>
          <Button onClick={toggleColorMode} variant="outline" size="sm">
            {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
