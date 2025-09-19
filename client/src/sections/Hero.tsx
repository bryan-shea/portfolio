import {
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  Highlight,
} from "@chakra-ui/react";
import {
  ProfilePicture,
  TechStackGrid,
  ContactButtons,
} from "../components/common";
import { TypeBlock } from "../components/ui";
import { MotionWrapper } from "../wrappers";
import { heroConfig, contactCodeConfig } from "../config";

export const Hero = () => {
  return (
    <Container
      maxW="8xl"
      py={{ base: "16", md: "20", lg: "32" }}
      px={{ base: "4", md: "6", lg: "8" }}
      mt={{ base: "8", md: "12", lg: "22" }}
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
          gap={{ base: "8", md: "2" }}
          align={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          flex="1"
          maxW={{ base: "full", lg: "4xl" }}
          justify="center"
        >
          {/* Profile Header */}
          <Stack gap={"3"} align={{ base: "center", lg: "flex-start" }}>
            {/* Profile Picture */}
            <MotionWrapper variant="scale" timing="bounce">
              <ProfilePicture />
            </MotionWrapper>

            {/* Name and Title */}
            <MotionWrapper variant="slideUp" timing="smooth">
              <VStack
                gap={{ base: "2", md: "4" }}
                align={{ base: "center", lg: "flex-start" }}
              >
                <Heading
                  size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                  fontWeight="bold"
                  letterSpacing={{ base: "-0.02em", lg: "-0.025em" }}
                  lineHeight={{ base: "1.1", md: "1.05" }}
                  color="fg"
                >
                  <Highlight
                    query={heroConfig.name}
                    styles={{
                      bgGradient: "to-r",
                      gradientFrom: "primary.600",
                      gradientVia: "primary.500",
                      gradientTo: "primary.400",
                      bgClip: "text",
                      fontSize: { base: "xl", md: "2xl", lg: "3xl" },
                      fontWeight: "bold",
                    }}
                  >
                    {heroConfig.name}
                  </Highlight>
                </Heading>
                <Text
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  color="fg.muted"
                  fontWeight="medium"
                >
                  {heroConfig.title}
                </Text>
              </VStack>
            </MotionWrapper>
          </Stack>

          {/* Contact Information Code Block */}
          <MotionWrapper variant="slideUp" timing="smooth">
            <VStack align={{ base: "center", lg: "flex-start" }}>
              <TypeBlock
                codeFiles={contactCodeConfig.codeFiles}
                title="Get In Touch"
                defaultTab="contact"
                size="sm"
                maxWidth={{ base: "sm", sm: "xl", md: "2xl" }}
              />

              {/* Quick Contact Buttons */}
              <ContactButtons size="md" gap="0" variant="plain" />
            </VStack>
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
