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
    <Box
      py={{ base: "20", md: "32" }}
      px={{ base: "6", md: "8" }}
      bg="bg.subtle"
    >
      <VStack gap={{ base: "12", md: "16" }} maxW="6xl" mx="auto">
        <VStack gap={{ base: "4", md: "6" }} textAlign="center">
          <Heading
            as="h2"
            size={{ base: "xl", md: "2xl" }}
            color="fg"
            letterSpacing="tight"
          >
            Skills & Technologies
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="fg.muted"
            maxW="3xl"
            lineHeight="tall"
          >
            Here are some of the technologies I work with regularly
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
          gap={{ base: "4", md: "6" }}
          w="full"
          pt={{ base: "4", md: "8" }}
        >
          {skills.map((skill) => (
            <Badge
              key={skill}
              p={{ base: "3", md: "4" }}
              borderRadius="lg"
              colorPalette="blue"
              variant="subtle"
              textAlign="center"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="medium"
              transition="all 0.2s"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "md",
                bg: "bg.emphasized",
              }}
              cursor="default"
            >
              {skill}
            </Badge>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
