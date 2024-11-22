
import { Box, Flex, Link, Spacer, Button, useColorMode } from '@chakra-ui/react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.200' : 'gray.700'} p={4}>
      <Flex alignItems="center">
        <Link href="/" fontSize="xl" fontWeight="bold">
          Bhargav Gandhi
        </Link>
        <Spacer />
        <Flex gap={4}>
          <Link href="/skills">Skills</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
