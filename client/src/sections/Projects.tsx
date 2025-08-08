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
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <Container
      maxW="6xl"
      py={{ base: "6", md: "12", lg: "24" }}
      px={{ base: "4", md: "6", lg: "8" }}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <VStack gap="1" textAlign="center" mb="12">
          <Badge
            px="4"
            py="2"
            borderRadius="full"
            colorPalette="primary"
            variant="solid"
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
      </motion.div>

      {/* Projects Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="8" w="full">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            style={{ height: "100%" }}
          >
            <Box
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
                borderColor: "primary.500",
                boxShadow: "xl",
              }}
              height="100%"
              display="flex"
              flexDirection="column"
            >
              {/* Project Header */}
              <Box p="6" pb="4" flex="1" display="flex" flexDirection="column">
                <HStack gap="3" mb="4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box
                      p="2"
                      borderRadius="lg"
                      bg="primary.50"
                      color="primary.600"
                      _dark={{ bg: "primary.900/50", color: "primary.300" }}
                    >
                      <Icon as={project.icon} boxSize="5" />
                    </Box>
                  </motion.div>
                  <VStack align="start" gap="1" flex="1">
                    <Heading size="md" color="fg" truncate lineClamp={1}>
                      {project.title}
                    </Heading>
                    <Badge size="sm" colorPalette="green" variant="subtle">
                      {project.status}
                    </Badge>
                  </VStack>
                </HStack>

                <Text
                  color="fg.muted"
                  fontSize="sm"
                  lineHeight="relaxed"
                  mb="4"
                  lineClamp={3}
                  flex="1"
                >
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
                  <Box minHeight="12">
                    <HStack wrap="wrap" gap="1">
                      {project.tech.slice(0, 6).map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + 0.3 + techIndex * 0.05,
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            size="sm"
                            variant="outline"
                            colorPalette="gray"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                      {project.tech.length > 6 && (
                        <Badge size="sm" variant="outline" colorPalette="gray">
                          +{project.tech.length - 6}
                        </Badge>
                      )}
                    </HStack>
                  </Box>
                </VStack>
              </Box>

              {/* Project Actions */}
              <Box p="6" pt="0" mt="auto">
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
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        truncate
                        maxWidth="50%"
                        textAlign="right"
                      >
                        {project.category}
                      </Text>
                    </HStack>
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="fg.muted">
                        Timeline:
                      </Text>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        truncate
                        maxWidth="50%"
                        textAlign="right"
                      >
                        {project.timeline}
                      </Text>
                    </HStack>
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="fg.muted">
                        Role:
                      </Text>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        truncate
                        maxWidth="50%"
                        textAlign="right"
                      >
                        {project.team}
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  );
};
