import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Badge,
} from "@chakra-ui/react";

export const Skills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST APIs",
    "AWS",
    "Docker",
    "Git",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ];

  return (
    <Box py={20} px={8} bg="gray.50">
      <VStack gap={8} maxW="4xl" mx="auto">
        <Heading as="h2" size="2xl" textAlign="center" color="gray.800">
          Skills & Technologies
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="3xl">
          Here are some of the technologies I work with regularly
        </Text>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} gap={4} w="full">
          {skills.map((skill) => (
            <Badge
              key={skill}
              p={3}
              borderRadius="md"
              colorScheme="blue"
              variant="subtle"
              textAlign="center"
              fontSize="sm"
            >
              {skill}
            </Badge>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
