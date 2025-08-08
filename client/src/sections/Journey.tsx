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

      <VStack gap="8" mb="12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Heading size="xl" color="fg" textAlign="center">
            Technical Expertise Areas
          </Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="8" w="full">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                bg="bg.panel"
                border="1px solid"
                borderColor="border.muted"
                borderRadius="xl"
                p={{ base: "4", md: "6" }}
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  borderColor: `${category.color}.500`,
                  boxShadow: "lg",
                }}
              >
                <VStack gap="4">
                  <Box
                    p="3"
                    borderRadius="lg"
                    bg={`${category.color}.50`}
                    color={`${category.color}.600`}
                    _dark={{
                      bg: `${category.color}.900/50`,
                      color: `${category.color}.300`,
                    }}
                  >
                    <Icon as={LuCode} boxSize="6" />
                  </Box>

                  <Heading size="md" color="fg">
                    {category.name}
                  </Heading>

                  <VStack gap="2" align="stretch">
                    {category.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        size="sm"
                        variant="outline"
                        colorPalette={category.color}
                        fontSize="xs"
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

      <VStack gap="16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Heading size="xl" color="fg" textAlign="center">
            Learning & Certification Timeline
          </Heading>
        </motion.div>

        <Timeline.Root
          size={{ base: "md", lg: "lg" }}
          variant="outline"
          maxW="4xl"
          w="full"
        >
          {journeyMilestones.map((milestone, index) => (
            <Timeline.Item key={milestone.id} py={{ base: "4", md: "8" }}>
              <Timeline.Content w="auto" minW={{ base: "20", md: "24" }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VStack gap="1" align="start">
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                      color={`${milestone.color}.500`}
                    >
                      {milestone.year}
                    </Text>
                    <Badge
                      size="xs"
                      colorPalette={milestone.color}
                      variant="subtle"
                    >
                      {milestone.category}
                    </Badge>
                  </VStack>
                </motion.div>
              </Timeline.Content>

              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator colorPalette={milestone.color}>
                  <Icon as={LuGraduationCap} boxSize="4" />
                </Timeline.Indicator>
              </Timeline.Connector>

              <Timeline.Content>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VStack gap="4" align="start" w="full">
                    <VStack gap="2" align="start">
                      <Timeline.Title
                        fontSize={{ base: "md", lg: "lg" }}
                        fontWeight="bold"
                        color="fg"
                      >
                        {milestone.title}
                      </Timeline.Title>
                      <Timeline.Description
                        color="fg.muted"
                        lineHeight="relaxed"
                        fontSize={{ base: "sm", md: "md" }}
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
                      <Icon
                        as={LuTrophy}
                        color={`${milestone.color}.500`}
                        boxSize="4"
                      />
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color={`${milestone.color}.500`}
                      >
                        {milestone.achievement}
                      </Text>
                    </HStack>
                  </VStack>
                </motion.div>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline.Root>
      </VStack>
    </Container>
  );
};
