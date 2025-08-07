import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Grid,
  Card,
} from "@chakra-ui/react";
import {
  FloatingParticles,
  DotPattern,
  FadeLines,
  GradientOrbs,
  NetworkNodes,
  type BackgroundType,
} from "../backgrounds";

/**
 * Background showcase configuration
 */
interface ShowcaseSection {
  /** Background type to display */
  background: BackgroundType;
  /** Section title */
  title: string;
  /** Section description */
  description: string;
  /** Background component */
  component: React.ComponentType;
}

/**
 * Showcase sections with different backgrounds
 */
const SHOWCASE_SECTIONS: ShowcaseSection[] = [
  {
    background: "particles",
    title: "Floating Particles",
    description:
      "Gentle floating particles that drift across the screen with subtle fade effects. Perfect for creating a dreamy, ethereal atmosphere.",
    component: FloatingParticles,
  },
  {
    background: "dots",
    title: "Dot Pattern",
    description:
      "Simple dot pattern with varying opacity for a clean, minimalist aesthetic. Subtle and unobtrusive while adding visual texture.",
    component: DotPattern,
  },
  {
    background: "lines",
    title: "Fade Lines",
    description:
      "Minimal vertical lines with gradient fade effects. Perfect for creating structured layouts with subtle visual depth.",
    component: FadeLines,
  },
  {
    background: "orbs",
    title: "Gradient Orbs",
    description:
      "Soft gradient spheres that float and pulse with beautiful color transitions. Adds depth and visual interest without distraction.",
    component: GradientOrbs,
  },
  {
    background: "network",
    title: "Network Nodes",
    description:
      "Interconnected nodes with animated connections. Perfect for technology-focused portfolios or data visualization themes.",
    component: NetworkNodes,
  },
];

/**
 * Background showcase component
 * Demonstrates all available background options in individual sections
 * Allows for easy comparison and selection of preferred background styles
 */
export const BackgroundShowcase: React.FC = () => {
  return (
    <Box minH="100vh" bg="bg.default">
      {/* Header Section */}
      <Container maxW="7xl" py="20">
        <VStack gap="6" textAlign="center" mb="16">
          <Heading
            size="2xl"
            fontWeight="bold"
            bgGradient="linear-gradient(135deg, primary.500, purple.400)"
            bgClip="text"
          >
            Background Options
          </Heading>
          <Text maxW="2xl" fontSize="lg" color="fg.muted" lineHeight="1.6">
            Choose from custom background animations that enhance your
            experience while viewing my portfolio. Each background was designed
            and implemented from scratch and adapts beautifully to both light
            and dark modes.
          </Text>
        </VStack>

        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap="8"
          alignItems="start"
        >
          {SHOWCASE_SECTIONS.map((section) => (
            <Card.Root
              key={section.background}
              position="relative"
              overflow="hidden"
              minH="400px"
              bg="bg.subtle/20"
              border="1px solid"
              borderColor="border.subtle"
              _hover={{
                borderColor: "primary.500/50",
                transform: "translateY(-2px)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Background Component */}
              <section.component />

              {/* Content Overlay */}
              <Card.Body
                position="relative"
                zIndex={1}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                p="8"
                minH="400px"
              >
                <VStack gap="4" maxW="sm">
                  <Heading size="lg" color="fg.emphasized">
                    {section.title}
                  </Heading>
                  <Text fontSize="md" color="fg.muted" lineHeight="1.6">
                    {section.description}
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
