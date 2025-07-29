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
    <Box py={{ base: "20", md: "32" }} px={{ base: "6", md: "8" }}>
      <VStack gap={{ base: "12", md: "16" }} maxW="7xl" mx="auto">
        <VStack gap={{ base: "4", md: "6" }} textAlign="center">
          <Heading
            as="h2"
            size={{ base: "xl", md: "2xl" }}
            color="fg"
            letterSpacing="tight"
          >
            Featured Projects
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="fg.muted"
            maxW="3xl"
            lineHeight="tall"
          >
            Here are some of my recent projects that showcase my skills and
            experience
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: "8", md: "10" }}
          w="full"
          pt={{ base: "4", md: "8" }}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              p={{ base: "6", md: "8" }}
              shadow="md"
              borderRadius="xl"
              bg="bg.panel"
              borderWidth="1px"
              borderColor="border"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-4px)",
                shadow: "xl",
                borderColor: "border.info",
              }}
            >
              <VStack align="start" gap={{ base: "4", md: "6" }} h="full">
                <Heading
                  as="h3"
                  size={{ base: "md", md: "lg" }}
                  color="fg.info"
                  lineHeight="shorter"
                >
                  {project.title}
                </Heading>
                <Text
                  color="fg.muted"
                  fontSize={{ base: "sm", md: "md" }}
                  lineHeight="tall"
                  flex="1"
                >
                  {project.description}
                </Text>
                <Box w="full">
                  <Text fontWeight="semibold" mb="3" color="fg" fontSize="sm">
                    Technologies:
                  </Text>
                  <Text fontSize="sm" color="fg.subtle" lineHeight="relaxed">
                    {project.tech.join(", ")}
                  </Text>
                </Box>
                <Button
                  colorPalette="blue"
                  variant="outline"
                  size="md"
                  w="full"
                  borderWidth="2px"
                  _hover={{ bg: "bg.subtle", transform: "translateY(-1px)" }}
                  transition="all 0.2s"
                >
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
