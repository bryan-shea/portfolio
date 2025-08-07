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
  Card,
} from "@chakra-ui/react";
import { LuCalendar, LuGraduationCap, LuCode, LuTrophy } from "react-icons/lu";

// Journey milestones data
const journeyMilestones = [
  {
    id: "foundations",
    year: "2022",
    title: "CS50x - Computer Science Foundations",
    category: "Harvard University",
    description:
      "Introduction to computer science and programming with C, Python, SQL, and web development fundamentals.",
    skills: ["C Programming", "Python", "SQL", "Data Structures", "Algorithms"],
    achievement: "CS50x Certificate",
    certificate: "/src/assets/certs/CS50x_certtt.png",
    color: "blue",
  },
  {
    id: "ux-foundations",
    year: "2023",
    title: "UX Design Foundations",
    category: "Google via Coursera",
    description:
      "User experience design principles, user research, prototyping, and design thinking methodologies.",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Thinking",
      "Accessibility",
    ],
    achievement: "UX Design Certificate",
    certificate:
      "/src/assets/certs/Foundations of User Experience_Coursera 2HVCVN2N5YLC.pdf",
    color: "purple",
  },
  {
    id: "ux-process",
    year: "2023",
    title: "UX Design Process",
    category: "Google via Coursera",
    description:
      "Advanced UX design process including user journey mapping, information architecture, and usability testing.",
    skills: [
      "Journey Mapping",
      "Information Architecture",
      "Usability Testing",
      "Design Systems",
    ],
    achievement: "UX Process Certificate",
    certificate:
      "/src/assets/certs/UX Design Process_Coursera Z6WPAH6J2HNC.pdf",
    color: "purple",
  },
  {
    id: "dsa",
    year: "2023",
    title: "Data Structures & Algorithms",
    category: "Self-Study",
    description:
      "Deep dive into algorithmic thinking, problem-solving patterns, and optimization techniques.",
    skills: [
      "Big O Notation",
      "Sorting Algorithms",
      "Graph Theory",
      "Dynamic Programming",
      "Binary Trees",
    ],
    achievement: "DSA Mastery",
    certificate: "/src/assets/certs/DSA_IMG.jpg",
    color: "green",
  },
  {
    id: "apollo-graph",
    year: "2024",
    title: "Apollo Graph Associate",
    category: "Apollo GraphQL",
    description:
      "GraphQL fundamentals, schema design, resolver implementation, and Apollo Server configuration.",
    skills: [
      "GraphQL",
      "Apollo Server",
      "Schema Design",
      "Type Definitions",
      "Resolvers",
    ],
    achievement: "Apollo Graph Associate",
    certificate: "/src/assets/certs/pdf-apollo-graph-associate-cert-a4.pdf",
    color: "indigo",
  },
  {
    id: "apollo-api",
    year: "2024",
    title: "Apollo API Orchestration Associate",
    category: "Apollo GraphQL",
    description:
      "Advanced GraphQL concepts including federation, supergraph architecture, and API orchestration.",
    skills: [
      "GraphQL Federation",
      "Supergraph",
      "API Gateway",
      "Microservices",
      "Schema Stitching",
    ],
    achievement: "API Orchestration Associate",
    certificate:
      "/src/assets/certs/pdf-apollo-api-archestration-associate-cert.pdf",
    color: "indigo",
  },
];

const techCategories = [
  {
    name: "Frontend",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Chakra UI",
      "Vite",
      "HTML5",
      "CSS3",
    ],
    color: "blue",
  },
  {
    name: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "GraphQL",
      "Apollo Server",
      "PostgreSQL",
      "MongoDB",
    ],
    color: "green",
  },
  {
    name: "DevOps & Cloud",
    technologies: ["AWS", "Docker", "CI/CD", "Git", "Linux", "Deployment"],
    color: "orange",
  },
  {
    name: "Design & UX",
    technologies: [
      "Figma",
      "User Research",
      "Prototyping",
      "Design Systems",
      "Accessibility",
    ],
    color: "purple",
  },
];

export const Journey = () => {
  return (
    <Container maxW="7xl" py={{ base: "20", md: "32" }}>
      {/* Header Section */}
      <VStack gap="8" textAlign="center" mb="20">
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
          maxW="4xl"
          lineHeight="relaxed"
        >
          From computer science fundamentals to full-stack development mastery—a
          timeline of continuous learning, hands-on projects, and professional
          certifications that shaped my technical expertise.
        </Text>
      </VStack>

      {/* Tech Categories Overview */}
      <VStack gap="12" mb="20">
        <Heading size="xl" color="fg" textAlign="center">
          Technical Expertise Areas
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="6" w="full">
          {techCategories.map((category) => (
            <Card.Root
              key={category.name}
              variant="elevated"
              bg={{
                _light: "white",
                _dark: "gray.800",
              }}
              border="1px solid"
              borderColor={{
                _light: "gray.200",
                _dark: "gray.700",
              }}
              p="6"
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
            </Card.Root>
          ))}
        </SimpleGrid>
      </VStack>

      {/* Learning Timeline */}
      <VStack gap="12">
        <Heading size="xl" color="fg" textAlign="center">
          Learning & Certification Timeline
        </Heading>

        <VStack gap="8" w="full" align="stretch">
          {journeyMilestones.map((milestone, index) => (
            <Box key={milestone.id} position="relative" w="full">
              {/* Timeline Line */}
              {index < journeyMilestones.length - 1 && (
                <Box
                  position="absolute"
                  left="50%"
                  top="100%"
                  w="2px"
                  h="8"
                  bg="gray.300"
                  _dark={{ bg: "gray.600" }}
                  transform="translateX(-50%)"
                  zIndex="0"
                />
              )}

              {/* Timeline Node */}
              <Box
                position="absolute"
                left="50%"
                top="6"
                w="4"
                h="4"
                borderRadius="full"
                bg={`${milestone.color}.500`}
                transform="translateX(-50%)"
                zIndex="1"
              />

              {/* Milestone Card */}
              <Card.Root
                variant="elevated"
                bg={{
                  _light: "white",
                  _dark: "gray.800",
                }}
                border="1px solid"
                borderColor={{
                  _light: "gray.200",
                  _dark: "gray.700",
                }}
                p="8"
                borderRadius="xl"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-2px)",
                  borderColor: `${milestone.color}.500`,
                  boxShadow: "lg",
                }}
                mx={{ base: "0", md: index % 2 === 0 ? "0" : "auto" }}
                mr={{ base: "0", md: index % 2 === 0 ? "50%" : "0" }}
                ml={{ base: "0", md: index % 2 === 0 ? "0" : "50%" }}
                maxW={{ base: "full", md: "45%" }}
              >
                <VStack gap="6" align="start">
                  <HStack
                    gap="4"
                    w="full"
                    justify="space-between"
                    align="start"
                  >
                    <VStack gap="2" align="start" flex="1">
                      <HStack gap="3">
                        <Icon
                          as={LuCalendar}
                          color={`${milestone.color}.500`}
                        />
                        <Text
                          fontSize="sm"
                          fontWeight="semibold"
                          color={`${milestone.color}.500`}
                        >
                          {milestone.year}
                        </Text>
                        <Badge
                          size="sm"
                          colorPalette={milestone.color}
                          variant="subtle"
                        >
                          {milestone.category}
                        </Badge>
                      </HStack>

                      <Heading size="lg" color="fg" lineHeight="shorter">
                        {milestone.title}
                      </Heading>
                    </VStack>

                    <Box
                      p="2"
                      borderRadius="lg"
                      bg={`${milestone.color}.50`}
                      color={`${milestone.color}.600`}
                      _dark={{
                        bg: `${milestone.color}.900/50`,
                        color: `${milestone.color}.300`,
                      }}
                    >
                      <Icon as={LuGraduationCap} boxSize="5" />
                    </Box>
                  </HStack>

                  <Text color="fg.muted" lineHeight="relaxed">
                    {milestone.description}
                  </Text>

                  <VStack gap="4" align="start" w="full">
                    <VStack gap="2" align="start">
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

                    <HStack
                      gap="3"
                      w="full"
                      justify="space-between"
                      align="center"
                    >
                      <HStack gap="2">
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

                      <Badge
                        size="sm"
                        colorPalette={milestone.color}
                        variant="solid"
                        cursor="pointer"
                        _hover={{ transform: "scale(1.05)" }}
                        transition="transform 0.2s ease"
                      >
                        View Certificate
                      </Badge>
                    </HStack>
                  </VStack>
                </VStack>
              </Card.Root>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};
