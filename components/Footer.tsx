
import { Box, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';

const Footer = () => {
  return (
    <Box textAlign="center" p={4} bg="gray.800" color="white">
      <Text>© {dayjs().year()} Bhargav Gandhi. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
