import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  FloatingParticles,
  DotPattern,
  GeometricShapes,
  SubtleGrid,
  GradientOrbs,
  NetworkNodes,
} from "./index";

/**
 * Available background options
 */
export type BackgroundType =
  | "none"
  | "particles"
  | "dots"
  | "shapes"
  | "grid"
  | "orbs"
  | "network";

/**
 * Background option configuration
 */
interface BackgroundOption {
  /** Unique identifier for the background */
  type: BackgroundType;
  /** Display name for the background */
  name: string;
  /** Description of the background effect */
  description: string;
  /** React component to render */
  component: React.ComponentType;
}

/**
 * Props for BackgroundManager component
 */
interface BackgroundManagerProps {
  /** Initial background type to display */
  initialBackground?: BackgroundType;
  /** Whether to show the background selector */
  showSelector?: boolean;
  /** Callback when background changes */
  onBackgroundChange?: (type: BackgroundType) => void;
}

/**
 * Available background options with their configurations
 */
const BACKGROUND_OPTIONS: BackgroundOption[] = [
  {
    type: "none",
    name: "None",
    description: "Clean background without animations",
    component: () => null,
  },
  {
    type: "particles",
    name: "Floating Particles",
    description: "Subtle floating particles with gentle movement",
    component: FloatingParticles,
  },
  {
    type: "dots",
    name: "Dot Pattern",
    description: "Simple dot pattern with varying opacity",
    component: DotPattern,
  },
  {
    type: "shapes",
    name: "Geometric Shapes",
    description: "Elegant floating geometric forms with smooth animations",
    component: GeometricShapes,
  },
  {
    type: "grid",
    name: "Subtle Grid",
    description: "Minimal grid pattern with gentle floating animation",
    component: SubtleGrid,
  },
  {
    type: "orbs",
    name: "Gradient Orbs",
    description: "Soft gradient spheres with floating animation",
    component: GradientOrbs,
  },
  {
    type: "network",
    name: "Network Nodes",
    description: "Interconnected nodes with dynamic connections",
    component: NetworkNodes,
  },
];

/**
 * Background manager component
 * Provides a unified interface for managing and switching between background animations
 * Includes optional UI controls for background selection
 */
export const BackgroundManager: React.FC<BackgroundManagerProps> = ({
  initialBackground = "none",
  showSelector = false,
  onBackgroundChange,
}) => {
  const [currentBackground, setCurrentBackground] =
    useState<BackgroundType>(initialBackground);

  // Update internal state when initialBackground prop changes
  useEffect(() => {
    setCurrentBackground(initialBackground);
  }, [initialBackground]);

  const handleBackgroundChange = (type: BackgroundType) => {
    setCurrentBackground(type);
    onBackgroundChange?.(type);
  };

  const currentOption = BACKGROUND_OPTIONS.find(
    option => option.type === currentBackground
  );
  const BackgroundComponent = currentOption?.component;

  return (
    <Box position="fixed" inset="0" width="100vw" height="100vh" zIndex={-1}>
      {/* Background component */}
      {BackgroundComponent && <BackgroundComponent />}

      {/* Optional background selector */}
      {showSelector && (
        <Box
          position="fixed"
          top="4"
          right="4"
          bg={{
            _light: "white/80",
            _dark: "gray.900/80",
          }}
          backdropFilter="blur(10px)"
          borderRadius="lg"
          p="4"
          border="1px solid"
          borderColor={{
            _light: "gray.200",
            _dark: "gray.700",
          }}
          boxShadow="lg"
          zIndex={1000}
          maxW="sm"
        >
          <Text fontSize="sm" fontWeight="medium" mb="3" color="fg.subtle">
            Background Style
          </Text>

          <HStack wrap="wrap" gap="2">
            {BACKGROUND_OPTIONS.map(option => (
              <Button
                key={option.type}
                size="sm"
                variant={
                  currentBackground === option.type ? "solid" : "outline"
                }
                colorScheme={
                  currentBackground === option.type ? "primary" : "gray"
                }
                onClick={() => handleBackgroundChange(option.type)}
                fontSize="xs"
              >
                {option.name}
              </Button>
            ))}
          </HStack>

          {currentOption && (
            <Text fontSize="xs" color="fg.muted" mt="2" lineHeight="1.4">
              {currentOption.description}
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};
