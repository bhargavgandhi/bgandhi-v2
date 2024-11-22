import { Box, Heading, Text, VStack, Button, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const MotionBox = motion(Box);

  return (
    <Layout>
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        p={8}
        textAlign="center"
        bg={colorMode === 'light' ? 'background.light' : 'background.dark'}
        color={colorMode === 'light' ? 'text.light' : 'text.dark'}
      >
        <Heading as="h1" size="2xl" mb={4} color="brand.500">
          Bhargav Gandhi
        </Heading>
        <Text fontSize="xl" mb={4}>
          Senior Frontend Engineer
        </Text>
        <Text fontSize="md" mb={6}>
          Expertise in React, UI Development, and Fullstack Applications.
        </Text>
        <VStack spacing={4}>
          <Button variant="solid" onClick={toggleColorMode}>
            Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </VStack>
      </MotionBox>
    </Layout>
  );
};

export default Home;
