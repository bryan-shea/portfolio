import { Box, Heading, Text, SimpleGrid, VStack } from "@chakra-ui/react";

export const About = () => {
  return (
    <Box py={{ base: "20", md: "32" }} px={{ base: "6", md: "8" }}>
      <VStack gap={{ base: "12", md: "16" }} maxW="6xl" mx="auto">
        <VStack gap={{ base: "4", md: "6" }} textAlign="center">
          <Heading
            as="h2"
            size={{ base: "xl", md: "2xl" }}
            color="fg"
            letterSpacing="tight"
          >
            About Me
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="fg.muted"
            maxW="3xl"
            lineHeight="tall"
          >
            I'm a passionate full-stack developer with experience in modern web
            technologies. I love creating efficient, scalable solutions and
            turning ideas into reality through code.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: "8", md: "12" }}
          w="full"
          pt={{ base: "4", md: "8" }}
        >
          <Box
            p={{ base: "6", md: "8" }}
            bg="bg.panel"
            borderRadius="xl"
            borderLeft="4px solid"
            borderColor="border.info"
            transition="all 0.2s"
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
          >
            <Heading
              as="h3"
              size={{ base: "md", md: "lg" }}
              mb={{ base: "3", md: "4" }}
              color="fg.info"
            >
              Frontend
            </Heading>
            <Text color="fg.muted" lineHeight="tall">
              React, TypeScript, Next.js, Chakra UI, Tailwind CSS, and more
              modern frontend technologies.
            </Text>
          </Box>
          <Box
            p={{ base: "6", md: "8" }}
            bg="bg.panel"
            borderRadius="xl"
            borderLeft="4px solid"
            borderColor="border.success"
            transition="all 0.2s"
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
          >
            <Heading
              as="h3"
              size={{ base: "md", md: "lg" }}
              mb={{ base: "3", md: "4" }}
              color="fg.success"
            >
              Backend
            </Heading>
            <Text color="fg.muted" lineHeight="tall">
              Node.js, Express, GraphQL, MongoDB, PostgreSQL, and cloud services
              like AWS.
            </Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
