import {
  Box,
  Button,
  Card,
  Grid,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import {
  FloatingParticles,
  DotPattern,
  GeometricShapes,
  SubtleGrid,
  GradientOrbs,
  NetworkNodes,
  type BackgroundType,
} from "../backgrounds";

/**
 * Background option configuration
 */
interface BackgroundOption {
  /** Background type identifier */
  type: BackgroundType;
  /** Display name */
  name: string;
  /** Emoji icon */
  icon: string;
  /** Background component */
  component: React.ComponentType;
}

/**
 * Available background options
 */
const BACKGROUND_OPTIONS: BackgroundOption[] = [
  {
    type: "particles",
    name: "Floating Particles",
    icon: "✨",
    component: FloatingParticles,
  },
  {
    type: "dots",
    name: "Dot Pattern",
    icon: "⚫",
    component: DotPattern,
  },
  {
    type: "shapes",
    name: "Geometric Shapes",
    icon: "🔸",
    component: GeometricShapes,
  },
  {
    type: "grid",
    name: "Subtle Grid",
    icon: "▦",
    component: SubtleGrid,
  },
  {
    type: "orbs",
    name: "Gradient Orbs",
    icon: "🟡",
    component: GradientOrbs,
  },
  {
    type: "network",
    name: "Network Nodes",
    icon: "🔗",
    component: NetworkNodes,
  },
];

/**
 * Props for BackgroundSelector component
 */
interface BackgroundSelectorProps {
  /** Current selected background */
  currentBackground: BackgroundType;
  /** Callback when background changes */
  onBackgroundChange: (background: BackgroundType) => void;
  /** Whether the selector is open */
  isOpen: boolean;
  /** Callback to close the selector */
  onClose: () => void;
}

/**
 * Background selector component
 * Provides visual preview cards for background selection
 */
export const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({
  currentBackground,
  onBackgroundChange,
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleBackgroundSelect = (background: BackgroundType) => {
    onBackgroundChange(background);
    onClose();
  };

  const handleLearnMore = () => {
    navigate("/backgrounds");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="bg.default/80"
      backdropFilter="blur(10px)"
      zIndex="1002"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="4"
    >
      <Card.Root
        maxW="4xl"
        w="full"
        maxH="90vh"
        overflow="auto"
        bg={{
          _light: "white",
          _dark: "gray.800",
        }}
        border="1px solid"
        borderColor={{
          _light: "gray.200",
          _dark: "gray.700",
        }}
        boxShadow="2xl"
      >
        <Card.Header>
          <VStack gap="2" textAlign="center">
            <Heading size="lg">Choose Background</Heading>
            <Text color="fg.muted" fontSize="sm">
              Select a background animation for your portfolio experience
            </Text>
          </VStack>
        </Card.Header>

        <Card.Body>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap="4"
            mb="6"
          >
            {BACKGROUND_OPTIONS.map((option) => (
              <Card.Root
                key={option.type}
                position="relative"
                overflow="hidden"
                cursor="pointer"
                onClick={() => handleBackgroundSelect(option.type)}
                border="2px solid"
                borderColor={
                  currentBackground === option.type
                    ? "primary.500"
                    : "border.subtle"
                }
                _hover={{
                  borderColor: "primary.400",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s ease",
                }}
                bg="bg.subtle/20"
                h="120px"
              >
                {/* Background Preview */}
                <option.component />

                {/* Content Overlay */}
                <Card.Body
                  position="absolute"
                  inset="0"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  bg={
                    currentBackground === option.type
                      ? "primary.500/20"
                      : "transparent"
                  }
                  backdropFilter="blur(1px)"
                  zIndex={1}
                >
                  <VStack gap="1">
                    <Text fontSize="lg">{option.icon}</Text>
                    <Text
                      fontSize="xs"
                      fontWeight="medium"
                      color="fg.emphasized"
                    >
                      {option.name}
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>

          {/* Actions */}
          <HStack
            justify="space-between"
            pt="4"
            borderTop="1px solid"
            borderColor="border.subtle"
          >
            <Button
              variant="ghost"
              onClick={handleLearnMore}
              color="fg.muted"
              _hover={{ color: "fg" }}
            >
              <LuExternalLink />
              Learn More
            </Button>
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          </HStack>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};
