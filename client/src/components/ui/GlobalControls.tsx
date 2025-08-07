import { Box, Button, VStack, Collapsible, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { LuPalette, LuSettings, LuX, LuImage } from "react-icons/lu";
import { ColorModeIcon, useColorMode } from "./color-mode";
import { Tooltip } from "./tooltip";
import { Personalize } from "./Personalize";
import { BackgroundSelector } from "./BackgroundSelector";
import { type BackgroundType } from "../backgrounds";

/**
 * Color scheme interface
 */
interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
}

/**
 * Props for GlobalControls component
 */
interface GlobalControlsProps {
  /** Current background type */
  currentBackground: BackgroundType;
  /** Callback when background changes */
  onBackgroundChange: (background: BackgroundType) => void;
  /** Current color scheme */
  currentColors?: ColorScheme;
  /** Callback when colors change */
  onColorsChange?: (colors: ColorScheme) => void;
}

/**
 * Global controls component
 * Combines color mode toggle with background selector and personalization options
 * Positioned as a fixed overlay for easy access
 */
export const GlobalControls: React.FC<GlobalControlsProps> = ({
  currentBackground,
  onBackgroundChange,
  currentColors = {
    primary: "#0090d3",
    secondary: "#007ab3",
    accent: "#b6eaff",
  },
  onColorsChange,
}) => {
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);
  const [isBackgroundSelectorOpen, setIsBackgroundSelectorOpen] =
    useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); // Start collapsed
  const { toggleColorMode } = useColorMode();

  const handleColorsChange = (colors: ColorScheme) => {
    if (onColorsChange) {
      onColorsChange(colors);
    }
  };

  console.log("GlobalControls current background:", currentBackground);

  return (
    <>
      <Box
        position="fixed"
        top="4"
        right="4"
        zIndex="1000"
        bg={{
          _light: "white/80",
          _dark: "gray.900/80",
        }}
        backdropFilter="blur(10px)"
        borderRadius="lg"
        border="1px solid"
        borderColor={{
          _light: "gray.200",
          _dark: "gray.700",
        }}
        boxShadow="lg"
        overflow="hidden"
      >
        <Collapsible.Root open={!isCollapsed}>
          {/* Toggle Button - Always visible */}
          <Box p="2">
            <Collapsible.Trigger asChild>
              <Tooltip
                content={isCollapsed ? "Open controls" : "Close controls"}
                positioning={{ placement: "left" }}
              >
                <IconButton
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  aria-label={isCollapsed ? "Open controls" : "Close controls"}
                >
                  {isCollapsed ? <LuSettings /> : <LuX />}
                </IconButton>
              </Tooltip>
            </Collapsible.Trigger>
          </Box>

          {/* Collapsible Content */}
          <Collapsible.Content>
            <Box p="3" pt="0">
              <VStack gap="2" align="stretch">
                {/* Personalize Colors Button */}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsPersonalizeOpen(true)}
                  width="full"
                  justifyContent="flex-start"
                >
                  <LuPalette />
                  Personalize Colors
                </Button>

                {/* Background Selector Button */}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsBackgroundSelectorOpen(true)}
                  width="full"
                  justifyContent="flex-start"
                >
                  <LuImage />
                  Choose Background
                </Button>

                {/* Color Mode Toggle */}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={toggleColorMode}
                  width="full"
                  justifyContent="flex-start"
                >
                  <ColorModeIcon />
                  Toggle Theme
                </Button>
              </VStack>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>

      {/* Background Selector Modal */}
      <BackgroundSelector
        currentBackground={currentBackground}
        onBackgroundChange={onBackgroundChange}
        isOpen={isBackgroundSelectorOpen}
        onClose={() => setIsBackgroundSelectorOpen(false)}
      />

      {/* Personalize Panel */}
      <Personalize
        currentColors={currentColors}
        onColorsChange={handleColorsChange}
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
      />
    </>
  );
};
