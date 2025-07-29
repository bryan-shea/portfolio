import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      px={8}
    >
      <VStack gap={6} textAlign="center" maxW="2xl">
        <Heading as="h1" size="3xl" color="blue.600">
          Welcome to My Portfolio
        </Heading>
        <Text fontSize="xl" color="gray.600">
          I'm a full-stack developer passionate about creating amazing web
          experiences
        </Text>
        <Button colorScheme="blue" size="lg">
          View My Work
        </Button>
      </VStack>
    </Box>
  );
};
