import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Badge,
  Image,
  Container,
} from "@chakra-ui/react";
import { projects } from "../config/projects.data";
import { motion } from "framer-motion";
import { useColors } from "../contexts";

export const Projects = () => {
  const { colorScheme } = useColors();
  return (
    <Container
      maxW="6xl"
      py={{ base: "6", md: "12", lg: "16" }}
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
            colorPalette={colorScheme.palette}
            variant="solid"
            fontSize="sm"
            fontWeight="semibold"
            letterSpacing="wide"
            textTransform="uppercase"
          >
            Project Showcase
          </Badge>

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
              scale: 1.01,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            style={{ height: "100%" }}
          >
            <Box
              bg="bg.surface"
              border="2px solid"
              borderColor="border.darkmode"
              borderRadius="xl"
              overflow="hidden"
              transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              _hover={{
                borderColor: "primary.500",
                boxShadow:
                  "0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.06)",
                _dark: {
                  boxShadow:
                    "0 20px 40px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
              height="100%"
              display="flex"
              flexDirection="column"
              cursor="pointer"
              onClick={() =>
                window.open(
                  `https://${project.title}`,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              {/* Project Header */}
              <Box p="6" pb="4" flex="1" display="flex" flexDirection="column">
                <HStack gap="2" mb="4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box
                      p="1"
                      borderRadius="lg"
                      bg="bg.surface"
                      _dark={{ bg: "bg.dark", color: "primary.300" }}
                    >
                      <Image
                        src={project.icon}
                        alt={`${project.title} logo`}
                        boxSize="11"
                        objectFit="contain"
                      />
                    </Box>
                  </motion.div>
                  <VStack align="start" gap="1" flex="1">
                    <Heading size="md" color="fg" truncate lineClamp={1}>
                      {project.title}
                    </Heading>
                  </VStack>
                </HStack>

                <Text
                  color="fg.muted"
                  fontSize="sm"
                  lineHeight="relaxed"
                  mb={{ base: "4", md: "1" }}
                  flex="1"
                >
                  {project.description}
                </Text>
              </Box>

              {/* Project Highlights */}
              <Box p="6" pt="0" mt="auto">
                <VStack gap="3" align="stretch">
                  <Text
                    fontSize="xs"
                    fontWeight="semibold"
                    color="fg.muted"
                    textTransform="uppercase"
                  >
                    Highlights
                  </Text>
                  <VStack gap="2" align="stretch">
                    {project.highlights.slice(0, 3).map(highlight => (
                      <HStack key={highlight} gap="2">
                        <Box
                          w="1.5"
                          h="1.5"
                          borderRadius="full"
                          bg="primary.500"
                          flexShrink={0}
                          mt="1"
                        />
                        <Text
                          fontSize="sm"
                          color="fg.muted"
                          lineHeight="relaxed"
                        >
                          {highlight}
                        </Text>
                      </HStack>
                    ))}
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
