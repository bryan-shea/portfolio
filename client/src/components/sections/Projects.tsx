import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";

export const Projects = () => {
  const projects = [
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: "taskmanager",
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      tech: ["React", "GraphQL", "PostgreSQL", "Socket.io"],
    },
    {
      id: "weather",
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts",
      tech: ["React", "TypeScript", "Weather API", "Chakra UI"],
    },
  ];

  return (
    <Box py={20} px={8} bg="white">
      <VStack gap={8} maxW="6xl" mx="auto">
        <Heading as="h2" size="2xl" textAlign="center" color="gray.800">
          Featured Projects
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="3xl">
          Here are some of my recent projects that showcase my skills and
          experience
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
          {projects.map((project) => (
            <Box
              key={project.id}
              p={6}
              shadow="md"
              borderRadius="md"
              bg="gray.50"
            >
              <VStack align="start" gap={4}>
                <Heading as="h3" size="lg" color="blue.600">
                  {project.title}
                </Heading>
                <Text color="gray.600" fontSize="md">
                  {project.description}
                </Text>
                <Box>
                  <Text fontWeight="semibold" mb={2} color="gray.700">
                    Technologies:
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {project.tech.join(", ")}
                  </Text>
                </Box>
                <Button colorScheme="blue" variant="outline" size="sm">
                  View Project
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
