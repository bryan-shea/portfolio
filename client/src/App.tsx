import { Box, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box p={8} maxW="md" mx="auto" textAlign="center">
      <VStack gap={6}>
        <HStack gap={4}>
          <img src={viteLogo} alt="Vite logo" height="40" />
          <img src={reactLogo} alt="React logo" height="40" />
        </HStack>

        <Heading as="h1" size="lg" color="blue.500">
          MERN Stack Monorepo
        </Heading>

        <Text fontSize="md" color="gray.600">
          React + Vite + TypeScript + Chakra UI v3
        </Text>

        <Box p={4} borderWidth={1} borderRadius="md" bg="gray.50">
          <Button
            colorScheme="blue"
            onClick={() => setCount((count) => count + 1)}
            mb={3}
          >
            Count is {count}
          </Button>
          <Text fontSize="sm" color="gray.500">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Text>
        </Box>

        <Text fontSize="sm" color="gray.400">
          Click on the Vite and React logos to learn more
        </Text>
      </VStack>
    </Box>
  );
}

export default App;
