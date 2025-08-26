import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  SimpleGrid,
  Timeline,
} from "@chakra-ui/react";
import { LuGraduationCap, LuCode, LuTrophy } from "react-icons/lu";
import { motion } from "framer-motion";
import { journeyMilestones, techCategories } from "../config";

export const Journey = () => {
  return (
    <Container
      maxW="6xl"
      py={{ base: "6", md: "12", lg: "16" }}
      px={{ base: "4", md: "6", lg: "8" }}
    >
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
            Developer Journey
          </Badge>

          <Heading
            size={{ base: "2xl", md: "4xl" }}
            color="fg"
            letterSpacing="tight"
            bgGradient="linear(to-r, primary.500, purple.500)"
            bgClip="text"
            fontWeight="bold"
          >
            Self-Taught Tech Stack Evolution
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            maxW="3xl"
            lineHeight="relaxed"
          >
            From computer science fundamentals to full-stack development
            mastery—a timeline of continuous learning, hands-on projects, and
            professional certifications that shaped my technical expertise.
          </Text>
        </VStack>
      </motion.div>

      <VStack gap="12" mb="12" py={2} px={{ base: "4", md: "6", lg: "8" }}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          gap="20"
          w="fit-content"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ height: "100%" }}
            >
              <Box
                bg="bg.surface"
                border="2px solid"
                borderColor="border.darkmode"
                borderRadius="xl"
                p={4}
                textAlign="center"
                transition="all 0.3s ease"
                height="100%"
                display="flex"
                flexDirection="column"
                _hover={{
                  transform: "translateY(-4px)",
                  borderColor: "primary.500",
                  boxShadow: "lg",
                }}
              >
                <VStack gap="4" flex="1">
                  <Badge
                    size="lg"
                    variant="solid"
                    colorPalette="primary"
                    px="4"
                    py="2"
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="semibold"
                    display="flex"
                    alignItems="center"
                    gap="2"
                  >
                    <Icon as={LuCode} boxSize="4" />
                    {category.name}
                  </Badge>

                  <VStack gap="2" align="stretch" flex="1" justify="flex-start">
                    {category.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        size="md"
                        variant="surface"
                        colorPalette="primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </VStack>

      <VStack gap="2" mt="12" py={2} px={{ base: "4", md: "6", lg: "8" }}>
        <Timeline.Root
          size={{ base: "md", md: "xl" }}
          variant="solid"
          colorPalette="primary"
          maxW="5xl"
          w="full"
        >
          {journeyMilestones.map((milestone, index) => {
            console.log(
              `Milestone ${milestone.id} certImage:`,
              milestone.certImage
            );
            return (
              <Timeline.Item key={milestone.id} py={{ base: "4", md: "8" }}>
                <Timeline.Content w="auto" minW={{ base: "20", md: "24" }}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <VStack gap="1" align="end">
                      <Text fontSize="md" fontWeight="bold" color="bg.inverted">
                        {milestone.year}
                      </Text>
                    </VStack>
                  </motion.div>
                </Timeline.Content>

                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator>
                    <Icon as={LuGraduationCap} boxSize="4" />
                  </Timeline.Indicator>
                </Timeline.Connector>

                <Timeline.Content
                  bg="bg.surface"
                  border="2px solid"
                  borderColor="border.darkmode"
                  borderRadius="xl"
                  p="6"
                  position="relative"
                  overflow="hidden"
                  transition="all 0.3s ease"
                  _hover={
                    milestone.certImage
                      ? {
                          borderColor: "primary.500",
                          transform: "translateY(-2px)",
                          boxShadow: "lg",
                        }
                      : {}
                  }
                  _before={
                    milestone.certImage
                      ? {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundImage: `url(${milestone.certImage})`,
                          backgroundSize: "contain",
                          backgroundPosition: "right center",
                          backgroundRepeat: "no-repeat",
                          opacity: 0.1,
                          zIndex: 0,
                          transition: "opacity 0.3s ease",
                        }
                      : {}
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <VStack gap="4" align="start" w="full">
                      <VStack gap="4" align="start">
                        <Timeline.Title
                          fontSize={{ base: "md", lg: "lg" }}
                          fontWeight="bold"
                          color="fg"
                        >
                          {milestone.title}
                        </Timeline.Title>
                        <Timeline.Description
                          color="fg.muted"
                          fontSize={{ base: "sm", md: "md" }}
                          truncate
                          lineClamp={2}
                          maxW="58%"
                          py={2}
                        >
                          {milestone.description}
                        </Timeline.Description>
                      </VStack>

                      <VStack gap="3" align="start" w="full">
                        <Text fontSize="sm" fontWeight="semibold" color="fg">
                          Skills Acquired:
                        </Text>
                        <HStack wrap="wrap" gap="1">
                          {milestone.skills.map((skill) => (
                            <Badge
                              key={skill}
                              size="sm"
                              variant="outline"
                              colorPalette="gray"
                              fontSize="xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </HStack>
                      </VStack>

                      <HStack gap="2" align="center">
                        <Icon as={LuTrophy} boxSize="4" />
                        <Text fontSize="md" fontWeight="semibold">
                          {milestone.achievement}
                        </Text>
                      </HStack>
                    </VStack>
                  </motion.div>
                </Timeline.Content>
              </Timeline.Item>
            );
          })}
        </Timeline.Root>
      </VStack>
    </Container>
  );
};
