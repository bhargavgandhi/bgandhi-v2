import { Box, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';

const Footer = () => {
  return (
    <Box as="footer" textAlign="center" p={4} bg="brand.800" color="whiteAlpha.900">
      <Text fontSize="sm">© {dayjs().year()} Bhargav Gandhi. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
