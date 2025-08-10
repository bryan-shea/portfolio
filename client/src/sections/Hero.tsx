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
  Highlight,
} from "@chakra-ui/react";
import { LuArrowRight, LuCode, LuPalette, LuMail } from "react-icons/lu";
import { ProfilePicture } from "../components/common";
import { useRandomizedStyles, useScrollTo } from "../hooks";
import { MotionWrapper } from "../wrappers";
import { heroConfig } from "../config";
import { type BadgeVariant } from "../utils";

export const Hero = () => {
  const scrollTo = useScrollTo();

  // Use configuration data instead of hardcoded values
  const { personal, technologies, colorPalettes, badgeVariants, cta } =
    heroConfig;

  // Use the new randomized styles hook with config data
  const badgeStyles = useRandomizedStyles([...technologies], {
    colors: colorPalettes,
    variants: badgeVariants,
    shuffle: true,
  });

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
      maxW="6xl"
      py={{ base: "32", md: "12", lg: "40" }}
      px={{ base: "4", md: "6", lg: "8" }}
      mb={{ base: "8", md: "12", lg: "16" }}
    >
      <Stack
        gap={{ base: "8", md: "10", lg: "12" }}
        align="center"
        textAlign="center"
        w="full"
      >
        {/* Profile Header - Grouped for better alignment */}
        <Stack gap={{ base: "2", md: "4" }} align="center">
          {/* Profile Picture */}
          <MotionWrapper variant="scale" timing="bounce">
            <ProfilePicture />
          </MotionWrapper>

          {/* Name and Title */}
          <MotionWrapper variant="slideUp" timing="smooth">
            <VStack gap={{ base: "1", md: "2" }}>
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
        <MotionWrapper
          variant="fadeIn"
          timing="smooth"
          style={{ maxWidth: "2xl" }}
        >
          <Text
            fontSize={{ base: "md", md: "xl" }}
            color={{
				_light: "fg.subtle",
				_dark: "fg.muted",
			}}
            lineHeight="relaxed"
            textAlign="center"
			w="3xl"
          >
            {personal.bio}
          </Text>
        </MotionWrapper>

        {/* Technology Stack */}
        <MotionWrapper variant="slideUp" timing="smooth">
          <VStack gap={{ base: "3", md: "4" }}>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="fg.muted"
              fontWeight="medium"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Technologies I Work With
            </Text>
            <Flex
              wrap="wrap"
              gap={{ base: "2", md: "3" }}
              justify="center"
              align="center"
            >
              {technologies.map((tech: string, index: number) => (
                <MotionWrapper
                  key={tech}
                  variant="scale"
                  timing="bounce"
                  animation={{
                    initial: { opacity: 0, scale: 0.8 },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      transition: { delay: index * 0.1 },
                    },
                  }}
                >
                  <Badge
                    size={{ base: "md", md: "lg" }}
                    colorPalette={badgeStyles[index]?.colorPalette}
                    variant={badgeStyles[index]?.variant as BadgeVariant}
                    px={{ base: "3", md: "4" }}
                    py={{ base: "1", md: "2" }}
                    borderRadius="full"
                    fontWeight="medium"
                    fontSize={{ base: "xs", md: "sm" }}
                  >
                    {tech}
                  </Badge>
                </MotionWrapper>
              ))}
            </Flex>
          </VStack>
        </MotionWrapper>

        {/* Call to Action Buttons */}
        <MotionWrapper variant="slideUp" timing="smooth">
          <HStack
            gap={{ base: "3", md: "4" }}
            flexDir={{ base: "column", sm: "row" }}
            w={{ base: "full", sm: "auto" }}
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
              colorPalette="gray"
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
    </Container>
  );
};
