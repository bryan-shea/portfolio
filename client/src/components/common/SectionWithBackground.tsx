import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { BackgroundManager, type BackgroundType } from "../backgrounds";

/**
 * Props for SectionWithBackground component
 */
interface SectionWithBackgroundProps {
  /** Display name for the section */
  sectionName: string;
  /** Default background type */
  defaultBackground?: BackgroundType;
  /** Whether to show background controls */
  showControls?: boolean;
  /** Child components to render */
  children: React.ReactNode;
}

/**
 * Available background options for quick selection
 */
const QUICK_BACKGROUNDS: Array<{
  type: BackgroundType;
  name: string;
  emoji: string;
}> = [
  { type: "none", name: "None", emoji: "🚫" },
  { type: "particles", name: "Particles", emoji: "✨" },
  { type: "grid", name: "Grid", emoji: "⚡" },
  { type: "grid", name: "Grid", emoji: "▦" },
  { type: "orbs", name: "Orbs", emoji: "🟡" },
  { type: "network", name: "Network", emoji: "🔗" },
];

/**
 * Section wrapper with background management
 * Provides per-section background control with an elegant UI
 */
export const SectionWithBackground: React.FC<SectionWithBackgroundProps> = ({
  sectionName,
  defaultBackground = "none",
  showControls = false,
  children,
}) => {
  const [currentBackground, setCurrentBackground] =
    useState<BackgroundType>(defaultBackground);
  const [showBackgroundPanel, setShowBackgroundPanel] = useState(false);

  return (
    <Box position="relative" width="100%" minH="100vh">
      {/* Background Layer */}
      <BackgroundManager
        initialBackground={currentBackground}
        onBackgroundChange={setCurrentBackground}
        showSelector={false}
      />

      {/* Background Controls */}
      {showControls && (
        <Box position="absolute" top="4" right="4" zIndex={100}>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowBackgroundPanel(!showBackgroundPanel)}
            bg={{
              _light: "white/80",
              _dark: "gray.900/80",
            }}
            backdropFilter="blur(10px)"
            borderColor={{
              _light: "gray.300",
              _dark: "gray.700",
            }}
          >
            🎨 {sectionName} BG
          </Button>

          {showBackgroundPanel && (
            <Box
              position="absolute"
              top="12"
              right="0"
              bg={{
                _light: "white/90",
                _dark: "gray.900/90",
              }}
              backdropFilter="blur(20px)"
              borderRadius="lg"
              p="4"
              border="1px solid"
              borderColor={{
                _light: "gray.200",
                _dark: "gray.700",
              }}
              boxShadow="lg"
              minW="200px"
            >
              <VStack gap="3" align="stretch">
                <Text fontSize="sm" fontWeight="medium" color="fg.subtle">
                  Background for {sectionName}
                </Text>

                <VStack gap="2" align="stretch">
                  {QUICK_BACKGROUNDS.map((bg) => (
                    <Button
                      key={bg.type}
                      size="sm"
                      variant={
                        currentBackground === bg.type ? "solid" : "ghost"
                      }
                      onClick={() => setCurrentBackground(bg.type)}
                      justifyContent="flex-start"
                      colorScheme={
                        currentBackground === bg.type ? "primary" : "gray"
                      }
                      fontSize="xs"
                    >
                      <span style={{ marginRight: "8px" }}>{bg.emoji}</span>
                      {bg.name}
                    </Button>
                  ))}
                </VStack>

                <Text fontSize="xs" color="fg.muted" mt="2">
                  Current:{" "}
                  {
                    QUICK_BACKGROUNDS.find(
                      (bg) => bg.type === currentBackground
                    )?.name
                  }
                </Text>
              </VStack>
            </Box>
          )}
        </Box>
      )}

      {/* Content Layer */}
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
};
