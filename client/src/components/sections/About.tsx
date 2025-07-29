import { Box, Heading, Text, SimpleGrid, VStack } from "@chakra-ui/react";

export const About = () => {
  return (
    <Box py={20} px={8} bg="white">
      <VStack gap={8} maxW="4xl" mx="auto">
        <Heading as="h2" size="2xl" textAlign="center" color="gray.800">
          About Me
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="3xl">
          I'm a passionate full-stack developer with experience in modern web
          technologies. I love creating efficient, scalable solutions and
          turning ideas into reality through code.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
          <Box>
            <Heading as="h3" size="lg" mb={4} color="blue.600">
              Frontend
            </Heading>
            <Text color="gray.600">
              React, TypeScript, Next.js, Chakra UI, Tailwind CSS, and more
              modern frontend technologies.
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4} color="blue.600">
              Backend
            </Heading>
            <Text color="gray.600">
              Node.js, Express, GraphQL, MongoDB, PostgreSQL, and cloud services
              like AWS.
            </Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
