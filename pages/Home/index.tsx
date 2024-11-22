import { Box, Heading, Text, Button, useColorMode, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const MotionBox = motion(Box);

  return (
    <Layout>
      <MotionBox
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        p={8}
        textAlign="center"
        bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
        color={colorMode === 'light' ? 'gray.800' : 'white'}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Bhargav Gandhi
        </Heading>
        <Text fontSize="xl" mb={4}>
          Senior Frontend Engineer
        </Text>
        <Text fontSize="md" mb={6}>
          Expertise in React, UI Development, and Fullstack Applications.
        </Text>
        <VStack spacing={4}>
          <Button onClick={toggleColorMode}>
            Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </VStack>
      </MotionBox>
    </Layout>
  );
};

export default Home;
