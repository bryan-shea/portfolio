import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  Container,
} from "@chakra-ui/react";
import { projects } from "../config/projects.data";

export const Projects = () => {
  return (
    <Container maxW="7xl" py={{ base: "20", md: "32" }}>
      {/* Header Section */}
      <VStack gap="8" textAlign="center" mb="16">
        <Badge
          px="4"
          py="2"
          borderRadius="full"
          bg="primary.500"
          color="white"
          fontSize="sm"
          fontWeight="semibold"
          letterSpacing="wide"
          textTransform="uppercase"
        >
          Portfolio Showcase
        </Badge>

        <Heading
          size={{ base: "2xl", md: "4xl" }}
          color="fg"
          letterSpacing="tight"
          bgGradient="linear(to-r, primary.500, purple.500)"
          bgClip="text"
          fontWeight="bold"
        >
          Featured Projects
        </Heading>

        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color="fg.muted"
          maxW="3xl"
          lineHeight="relaxed"
        >
          A collection of production-ready applications built with modern
          technologies and best practices, serving real users and solving real
          problems.
        </Text>
      </VStack>

      {/* Projects Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="8" w="full">
        {projects.map((project) => (
          <Box
            key={project.id}
            bg={{
              _light: "white",
              _dark: "gray.800",
            }}
            border="1px solid"
            borderColor={{
              _light: "gray.200",
              _dark: "gray.700",
            }}
            borderRadius="xl"
            overflow="hidden"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-4px)",
              borderColor: "primary.500",
              boxShadow: "xl",
            }}
          >
            {/* Project Header */}
            <Box p="6" pb="4">
              <HStack gap="3" mb="4">
                <Box
                  p="2"
                  borderRadius="lg"
                  bg="primary.50"
                  color="primary.600"
                  _dark={{ bg: "primary.900/50", color: "primary.300" }}
                >
                  <Icon as={project.icon} boxSize="5" />
                </Box>
                <VStack align="start" gap="1" flex="1">
                  <Heading size="md" color="fg">
                    {project.title}
                  </Heading>
                  <Badge size="sm" colorPalette="green" variant="subtle">
                    {project.status}
                  </Badge>
                </VStack>
              </HStack>

              <Text color="fg.muted" fontSize="sm" lineHeight="relaxed" mb="4">
                {project.description}
              </Text>

              {/* Tech Stack */}
              <VStack gap="3" align="stretch">
                <Text
                  fontSize="xs"
                  fontWeight="semibold"
                  color="fg.muted"
                  textTransform="uppercase"
                >
                  Technologies
                </Text>
                <HStack wrap="wrap" gap="1">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      size="sm"
                      variant="outline"
                      colorPalette="gray"
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </VStack>
            </Box>

            {/* Project Actions */}
            <Box p="6" pt="0">
              <VStack gap="3" align="stretch">
                <Text
                  fontSize="xs"
                  fontWeight="semibold"
                  color="fg.muted"
                  textTransform="uppercase"
                >
                  Details
                </Text>
                <VStack gap="2" align="stretch">
                  <HStack justify="space-between">
                    <Text fontSize="sm" color="fg.muted">
                      Category:
                    </Text>
                    <Text fontSize="sm" fontWeight="medium">
                      {project.category}
                    </Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text fontSize="sm" color="fg.muted">
                      Timeline:
                    </Text>
                    <Text fontSize="sm" fontWeight="medium">
                      {project.timeline}
                    </Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text fontSize="sm" color="fg.muted">
                      Role:
                    </Text>
                    <Text fontSize="sm" fontWeight="medium">
                      {project.team}
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};
