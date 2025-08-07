import { Box, Button, VStack, Collapsible, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { LuPalette, LuSettings, LuX, LuImage } from "react-icons/lu";
import { ColorModeIcon, useColorMode } from "./color-mode";
import { Tooltip } from "./tooltip";
import { Personalize } from "./Personalize";
import { BackgroundSelector } from "./BackgroundSelector";
import { type BackgroundType } from "../backgrounds";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
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
          <Collapsible.Root
            open={!isCollapsed}
            onOpenChange={(details) => setIsCollapsed(!details.open)}
          >
            {/* Toggle Button - Always visible */}
            <Box p="2">
              <Tooltip
                content={isCollapsed ? "Open controls" : "Close controls"}
                positioning={{ placement: "left" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  <Collapsible.Trigger asChild>
                    <IconButton
                      size="sm"
                      variant="ghost"
                      aria-label={
                        isCollapsed ? "Open controls" : "Close controls"
                      }
                    >
                      <motion.div
                        animate={{ rotate: isCollapsed ? 0 : 45 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        {isCollapsed ? <LuSettings /> : <LuX />}
                      </motion.div>
                    </IconButton>
                  </Collapsible.Trigger>
                </motion.div>
              </Tooltip>
            </Box>

            {/* Collapsible Content */}
            <Collapsible.Content>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isCollapsed ? 0 : 1,
                  height: isCollapsed ? 0 : "auto",
                }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
              >
                <Box p="3" pt="0">
                  <VStack gap="2" align="stretch">
                    {/* Personalize Colors Button */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                    >
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
                    </motion.div>

                    {/* Background Selector Button */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                    >
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
                    </motion.div>

                    {/* Color Mode Toggle */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                    >
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
                    </motion.div>
                  </VStack>
                </Box>
              </motion.div>
            </Collapsible.Content>
          </Collapsible.Root>
        </Box>
      </motion.div>

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
