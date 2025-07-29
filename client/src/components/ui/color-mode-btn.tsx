import { Box } from "@chakra-ui/react";
import { ColorModeButton } from "./color-mode";

/**
 * Toggle color mode component with fixed positioning
 * Provides easy access to switch between light and dark themes
 */
export const ToggleColorMode = () => {
  return (
    <Box
      position="fixed"
      top="4"
      right="4"
      zIndex="1000"
      bg="bg.panel"
      borderRadius="md"
      p="1"
      shadow="md"
    >
      <ColorModeButton />
    </Box>
  );
};
