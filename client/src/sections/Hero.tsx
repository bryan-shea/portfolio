import {
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  Button,
  VStack,
  Highlight,
} from "@chakra-ui/react";
import { LuArrowRight, LuCode, LuPalette, LuMail } from "react-icons/lu";
import { ProfilePicture, TechStackGrid } from "../components/common";
import { useScrollTo } from "../hooks";
import { MotionWrapper } from "../wrappers";
import { heroConfig } from "../config";

export const Hero = () => {
  const scrollTo = useScrollTo();

  // Use configuration data for personal info and CTA
  const { personal, cta } = heroConfig;

  const handleViewWork = () => {
    scrollTo(cta.primary.target);
  };

  const handleContact = () => {
    if (cta.secondary.action === "external") {
      window.open(cta.secondary.target, "_blank");
    }
  };

  return (
    <Container
      maxW="8xl"
      py={{ base: "16", md: "20", lg: "32" }}
      px={{ base: "4", md: "6", lg: "8" }}
      mt={{ base: "8", md: "12", lg: "28" }}
      mb={{ base: "8", md: "12", lg: "16" }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "flex-start" }}
        gap={{ base: "12", lg: "16" }}
        w="full"
        minH={{ lg: "600px" }}
      >
        {/* Left Column - Personal Content */}
        <Stack
          gap={{ base: "8", md: "10", lg: "12" }}
          align={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          flex="1"
          maxW={{ base: "full", lg: "2xl" }}
          justify="center"
        >
          {/* Profile Header */}
          <Stack
            gap={{ base: "4", md: "6" }}
            align={{ base: "center", lg: "flex-start" }}
          >
            {/* Profile Picture */}
            <MotionWrapper variant="scale" timing="bounce">
              <ProfilePicture />
            </MotionWrapper>

            {/* Name and Title */}
            <MotionWrapper variant="slideUp" timing="smooth">
              <VStack
                gap={{ base: "2", md: "3" }}
                align={{ base: "center", lg: "flex-start" }}
              >
                <Heading
                  size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                  fontWeight="bold"
                  letterSpacing={{ base: "-0.02em", lg: "-0.025em" }}
                  lineHeight={{ base: "1.1", md: "1.05" }}
                >
                  <Highlight
                    query={personal.name.split(" ")}
                    styles={{
                      bgGradient: "to-r",
                      gradientFrom: "primary.400",
                      gradientTo: "primary.700",
                      bgClip: "text",
                    }}
                  >
                    {personal.name}
                  </Highlight>
                </Heading>
                <Text
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  color="fg.muted"
                  fontWeight="medium"
                >
                  {personal.title}
                </Text>
              </VStack>
            </MotionWrapper>
          </Stack>

          {/* Bio Section */}
          <MotionWrapper variant="fadeIn" timing="smooth">
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              color={{
                _light: "fg.subtle",
                _dark: "fg.muted",
              }}
              lineHeight="relaxed"
              maxW="xl"
            >
              {personal.bio}
            </Text>
          </MotionWrapper>

          {/* Call to Action Buttons */}
          <MotionWrapper variant="slideUp" timing="smooth">
            <HStack
              gap={{ base: "3", md: "4" }}
              flexDir={{ base: "column", sm: "row" }}
              w={{ base: "full", sm: "auto" }}
              justify={{ base: "center", lg: "flex-start" }}
            >
              <Button
                size={{ base: "lg", md: "xl" }}
                colorPalette="blue"
                onClick={handleViewWork}
                px={{ base: "6", md: "8" }}
                py={{ base: "3", md: "4" }}
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="semibold"
                borderRadius="full"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "lg",
                }}
                transition="all 0.2s"
                w={{ base: "full", sm: "auto" }}
              >
                <HStack>
                  <LuCode />
                  <Text>View My Work</Text>
                  <LuArrowRight />
                </HStack>
              </Button>

              <Button
                size={{ base: "lg", md: "xl" }}
                variant="outline"
                colorPalette="blue"
                borderColor="blue.500"
                onClick={handleContact}
                px={{ base: "6", md: "8" }}
                py={{ base: "3", md: "4" }}
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="semibold"
                borderRadius="full"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "md",
                  bg: "bg.subtle",
                }}
                transition="all 0.2s"
                w={{ base: "full", sm: "auto" }}
              >
                <HStack>
                  <LuPalette />
                  <Text>Get In Touch</Text>
                  <LuMail />
                </HStack>
              </Button>
            </HStack>
          </MotionWrapper>
        </Stack>

        {/* Right Column - Tech Stack Grid */}
        <Flex
          flex="1"
          justify={{ base: "center", lg: "flex-end" }}
          align="center"
          minH={{ lg: "600px" }}
          display={{ base: "none", lg: "flex" }}
        >
          <MotionWrapper variant="slideUp" timing="smooth">
            <TechStackGrid />
          </MotionWrapper>
        </Flex>
      </Flex>
    </Container>
  );
};
