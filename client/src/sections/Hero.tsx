import {
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  Highlight,
} from "@chakra-ui/react";
import { ProfilePicture, TechStackGrid } from "../components/common";
import { TypeBlock } from "../components/ui";
import { MotionWrapper } from "../wrappers";
import { heroConfig, contactCodeFiles } from "../config";

export const Hero = () => {
  // Use configuration data for personal info
  const { personal } = heroConfig;

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
          gap={{ base: "8", md: "4", lg: "6" }}
          align={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          flex="1"
          maxW={{ base: "full", lg: "4xl" }}
          justify="center"
        >
          {/* Profile Header */}
          <Stack gap={"4"} align={{ base: "center", lg: "flex-start" }}>
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

          {/* Contact Information Code Block */}
          <MotionWrapper variant="slideUp" timing="smooth">
            <TypeBlock
              codeFiles={contactCodeFiles}
              title="Get In Touch"
              defaultTab="email"
              size="sm"
              maxWidth={{ base: "sm", sm: "xl", md: "2xl" }}
            />
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
