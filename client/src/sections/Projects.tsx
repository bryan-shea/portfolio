import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
  Icon,
  Flex,
  Container,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { projects } from "../config/projects.data";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <Box
      position="relative"
      p={{ base: "20", md: "18" }}
	  w="full"
      bgGradient="linear(to-br, gray.50, blue.50, purple.50)"
      _dark={{ bgGradient: "linear(to-br, gray.900, blue.900, purple.900)" }}
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.05"
        bgImage="radial-gradient(circle at 25% 25%, #3182ce 1px, transparent 2px), radial-gradient(circle at 75% 75%, #805ad5 1px, transparent 2px)"
        bgSize="60px 60px"
        animation="floatUpDown 20s ease-in-out infinite"
      />

      <Container maxW="full" position="relative" zIndex="1">
        {/* Header Section */}
        <VStack
          gap={{ base: "6", md: "10" }}
          textAlign="center"
          mb={{ base: "16", md: "12" }}
        >
          <VStack gap={{ base: "4", md: "6" }}>
            <Badge
              px="4"
              py="2"
              borderRadius="full"
              bg="blue.500"
              color="white"
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              Portfolio Showcase
            </Badge>
            <Heading
              as="h2"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              color="fg"
              letterSpacing="tight"
              bgGradient="linear(to-r, blue.500, purple.500)"
              bgClip="text"
              fontWeight="bold"
            >
              Enterprise Solutions
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              maxW="4xl"
              lineHeight="tall"
              fontWeight="medium"
            >
              Production-ready applications serving millions of users with
              enterprise-grade architecture, scalability, and reliability
              standards.
            </Text>
          </VStack>
        </VStack>

        {/* Projects Grid */}
        <SimpleGrid
          columns={{ base: 1, lg: 2, xl: 3 }}
          gap={{ base: "8", md: "10" }}
          w="full"
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              position="relative"
              p="0"
              borderRadius="2xl"
              bg="bg.panel"
              shadow="2xl"
              borderWidth="1px"
              borderColor="border"
              overflow="hidden"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              cursor="pointer"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              _hover={{
                transform: "translateY(-8px) scale(1.02)",
                shadow: "3xl",
                borderColor: "blue.400",
              }}
              _active={{
                transform: "translateY(-4px) scale(1.01)",
              }}
            >
              {/* Gradient Overlay */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                height="4px"
                bgGradient="linear(to-r, blue.500, purple.500, pink.500)"
              />

              {/* Project Card Content */}
              <VStack align="stretch" gap="0" h="full">
                {/* Header */}
                <Box p={{ base: "6", md: "8" }} pb="4">
                  <HStack justify="space-between" align="start" mb="4">
                    <HStack gap="3">
                      <Box
                        p="3"
                        borderRadius="xl"
                        bg="blue.50"
                        color="blue.600"
                        _dark={{ bg: "blue.900", color: "blue.300" }}
                      >
                        <Icon as={project.icon} boxSize="6" />
                      </Box>
                      <VStack align="start" gap="1">
                        <Badge
                          size="sm"
                          colorPalette="green"
                          variant="subtle"
                          borderRadius="md"
                        >
                          {project.status}
                        </Badge>
                        <Text
                          fontSize="xs"
                          color="fg.subtle"
                          fontWeight="medium"
                        >
                          {project.category}
                        </Text>
                      </VStack>
                    </HStack>
                  </HStack>

                  <VStack align="start" gap="3">
                    <Heading
                      as="h3"
                      size={{ base: "lg", md: "xl" }}
                      color="fg"
                      lineHeight="shorter"
                      fontWeight="bold"
                    >
                      {project.title}
                    </Heading>
                    <Text
                      fontSize="md"
                      color="blue.600"
                      fontWeight="semibold"
                      _dark={{ color: "blue.300" }}
                    >
                      {project.subtitle}
                    </Text>
                  </VStack>
                </Box>

                {/* Description */}
                <Box px={{ base: "6", md: "8" }} pb="4">
                  <Text
                    color="fg.muted"
                    fontSize={{ base: "sm", md: "md" }}
                    lineHeight="tall"
                  >
                    {project.description}
                  </Text>
                </Box>

                {/* Key Metrics */}
                {/* <Box px={{ base: "6", md: "8" }} pb="4">
                  <Text fontSize="sm" fontWeight="semibold" color="fg" mb="3">
                    Key Metrics
                  </Text>
                  <HStack wrap="wrap" gap="2">
                    {project.metrics.map((metric) => (
                      <Badge
                        key={metric}
                        px="3"
                        py="1"
                        borderRadius="full"
                        bg="green.50"
                        color="green.700"
                        fontSize="xs"
                        fontWeight="medium"
                        _dark={{ bg: "green.900", color: "green.300" }}
                      >
                        {metric}
                      </Badge>
                    ))}
                  </HStack>
                </Box> */}

                {/* Technologies */}
                <Box px={{ base: "6", md: "8" }} pb="6" flex="1">
                  <Text fontSize="sm" fontWeight="semibold" color="fg" mb="3">
                    Technology Stack
                  </Text>
                  <Flex wrap="wrap" gap="2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        px="3"
                        py="1"
                        borderRadius="md"
                        colorPalette="purple"
                        fontSize="xs"
                        fontWeight="medium"
                        border="1px solid"
						variant="outline"
                        _dark={{
                          colorPalette: "yellow",
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Box>

                {/* Project Details */}
                <Box
                  px={{ base: "6", md: "8" }}
                  py="4"
                  bg="gray.50"
                  _dark={{ bg: "gray.800" }}
                  borderBottomRadius="2xl"
                >
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    justify="space-between"
                    align={{ base: "start", sm: "center" }}
                    gap="4"
                  >
                    <VStack align="start" gap="1">
                      <Text fontSize="xs" color="fg.subtle" fontWeight="medium">
                        Timeline: {project.timeline} • Role: {project.team}
                      </Text>
                    </VStack>
                    <HStack gap="3">
                      <Button
                        size="sm"
                        colorPalette="blue"
                        variant="outline"
                        borderWidth="2px"
                        _hover={{
                          bg: "blue.50",
                          transform: "translateY(-1px)",
                          shadow: "md",
                        }}
                        transition="all 0.2s"
                      >
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        colorPalette="blue"
                        _hover={{
                          transform: "translateY(-1px)",
                          shadow: "md",
                        }}
                        transition="all 0.2s"
                      >
                        Live Demo
                      </Button>
                    </HStack>
                  </Stack>
                </Box>
              </VStack>

              {/* Hover Effect Overlay */}
              {activeProject === project.id && (
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bgGradient="linear(to-br, blue.500/5, purple.500/5)"
                  borderRadius="2xl"
                  pointerEvents="none"
                />
              )}
            </Box>
          ))}
        </SimpleGrid>

        {/* Call to Action */}
      </Container>
    </Box>
  );
};
