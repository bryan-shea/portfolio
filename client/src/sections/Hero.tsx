import {
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  Button,
  Badge,
  VStack,
  Box,
} from "@chakra-ui/react";
import {
  LuArrowRight,
  LuCode,
  LuPalette,
  LuDownload,
  LuMail,
} from "react-icons/lu";
import { ProfilePicture } from "../components/common";

export const Hero = () => {
  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    window.open("mailto:your.email@example.com", "_blank");
  };

  const handleDownloadResume = () => {
    // You can replace this with your actual resume download link
    window.open("#", "_blank");
  };

  return (
    <Container
      maxW="7xl"
      py={{ base: "20", md: "28" }}
      px={{ base: "6", md: "8" }}
    >
      <Stack
        gap={{ base: "12", md: "8" }}
        align={{ sm: "center" }}
        textAlign="center"
      >
        {/* Profile Picture - Primary Focus */}
        <ProfilePicture />

        <Stack gap={{ base: "8", md: "6" }} maxW={{ md: "4xl" }}>
          {/* Professional Title with Icons */}
          <HStack
            textStyle="sm"
            fontWeight="medium"
            justifyContent="center"
            gap="3"
            color="fg.info"
          >
            <LuCode /> Full-Stack Developer & Designer <LuPalette />
          </HStack>

          <Stack gap={{ base: "6", md: "8" }}>
            {/* Name and Key Value Proposition */}
            <Heading
              size={{ base: "4xl", md: "6xl" }}
              lineHeight="shorter"
              letterSpacing="tight"
              color="fg"
            >
              Bryan Shea
            </Heading>

            {/* Hireability-focused Description */}
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              maxW="3xl"
              mx="auto"
              lineHeight="relaxed"
            >
              5+ years building scalable web applications with{" "}
              <Text as="span" fontWeight="semibold" color="fg">
                React, Node.js, and modern cloud infrastructure
              </Text>
              . I create intuitive user experiences backed by robust, performant
              systems.
            </Text>

            {/* Key Skills/Technologies */}
            <HStack justify="center" wrap="wrap" gap="2" mt="4">
              <Badge colorPalette="blue" size="md">
                TypeScript
              </Badge>
              <Badge colorPalette="green" size="md">
                React
              </Badge>
              <Badge colorPalette="orange" size="md">
                Node.js
              </Badge>
              <Badge colorPalette="purple" size="md">
                AWS
              </Badge>
              <Badge colorPalette="teal" size="md">
                MongoDB
              </Badge>
              <Badge colorPalette="red" size="md">
                GraphQL
              </Badge>
            </HStack>
          </Stack>
        </Stack>

        {/* Call-to-Action Buttons - Recruiter Focused */}
        <VStack
          gap={{ base: "4", sm: "4" }}
          align="center"
          pt={{ base: "4", md: "8" }}
          width="full"
        >
          <Flex
            direction={{ base: "column", sm: "row" }}
            gap={{ base: "4", sm: "6" }}
            align="center"
            justify="center"
            width="full"
            maxW="md"
          >
            <Button
              size="lg"
              px="8"
              py="6"
              colorPalette="blue"
              boxShadow="lg"
              onClick={handleViewWork}
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
              transition="all 0.2s"
            >
              View My Work <LuArrowRight />
            </Button>
            <Button
              size="lg"
              px="8"
              py="6"
              variant="outline"
              borderWidth="2px"
              onClick={handleContact}
              _hover={{ bg: "bg.subtle", transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              <LuMail /> Get In Touch
            </Button>
          </Flex>

          {/* Resume Download - Secondary Action */}
          <Button
            size="md"
            variant="ghost"
            onClick={handleDownloadResume}
            color="fg.muted"
            _hover={{ color: "fg" }}
          >
            <LuDownload /> Download Resume
          </Button>
        </VStack>

        {/* Availability Status */}
        <HStack justify="center" gap="2" pt="4" fontSize="sm" color="fg.muted">
          <Box
            w="2"
            h="2"
            bg="green.500"
            borderRadius="full"
            animation="pulse 2s infinite"
          />
          <Text>Available for new opportunities</Text>
        </HStack>
      </Stack>
    </Container>
  );
};
