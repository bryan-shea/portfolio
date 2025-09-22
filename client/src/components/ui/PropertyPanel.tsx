import { Text, Box, Button, Container, Stack, HStack } from "@chakra-ui/react";
import { LuRotateCcw, LuSparkles } from "react-icons/lu";
import { useState, useEffect, useCallback } from "react";
import { PropertySection } from "./property-panel/property-section";
import { SelectField, ColorPaletteField } from "./property-panel/fields";
import { type BackgroundType } from "../backgrounds";
import {
  type ColorScheme,
  AVAILABLE_COLOR_PALETTES,
  DEFAULT_COLOR_SCHEME,
  COLOR_PALETTE_SWATCHES,
} from "../../config/colors.data";

// Re-export for backward compatibility
export type { ColorScheme } from "../../config/colors.data";

/**
 * Background option configuration
 */
interface BackgroundOption {
  type: BackgroundType;
  name: string;
  icon: string;
  description: string;
}

/**
 * Props for PropertyPanelPro component
 */
export interface PropertyPanelProProps {
  /** Current color scheme */
  currentColors: ColorScheme;
  /** Callback when colors change */
  onColorsChange: (colors: ColorScheme) => void;
  /** Current background type */
  currentBackground: BackgroundType;
  /** Callback when background changes */
  onBackgroundChange: (background: BackgroundType) => void;
}

/**
 * Available background options with enhanced descriptions
 */
const BACKGROUND_OPTIONS: BackgroundOption[] = [
  {
    type: "none",
    name: "Clean",
    icon: "✨",
    description: "Minimal and distraction-free",
  },
  {
    type: "particles",
    name: "Particles",
    icon: "⚡",
    description: "Floating animated particles",
  },
  {
    type: "dots",
    name: "Dots",
    icon: "⚫",
    description: "Subtle dotted pattern",
  },
  {
    type: "shapes",
    name: "Shapes",
    icon: "🔸",
    description: "Geometric patterns",
  },
  {
    type: "grid",
    name: "Grid",
    icon: "▦",
    description: "Clean grid overlay",
  },
  {
    type: "orbs",
    name: "Orbs",
    icon: "🟡",
    description: "Soft gradient orbs",
  },
  {
    type: "network",
    name: "Network",
    icon: "🔗",
    description: "Connected node pattern",
  },
] as const;

/**
 * Professional Property Panel 01 component
 * Uses Chakra UI Pro property panel components for a polished experience
 * Features collapsible sections, professional field components, and extensible design
 */
export const PropertyPanelPro: React.FC<PropertyPanelProProps> = ({
  currentColors,
  onColorsChange,
  currentBackground,
  onBackgroundChange,
}) => {
  const [tempColors, setTempColors] = useState(currentColors);
  const [tempBackground, setTempBackground] = useState(currentBackground);

  // Sync with props when they change
  useEffect(() => {
    setTempColors(currentColors);
  }, [currentColors]);

  useEffect(() => {
    setTempBackground(currentBackground);
  }, [currentBackground]);

  /**
   * Handle color palette selection
   */
  const handleColorPaletteChange = useCallback(
    (paletteName: string) => {
      const selectedPalette = AVAILABLE_COLOR_PALETTES.find(
        p => p.name === paletteName
      );
      if (selectedPalette) {
        const newColors = { palette: selectedPalette.name };
        setTempColors(newColors);
        onColorsChange(newColors);
      }
    },
    [onColorsChange]
  );

  /**
   * Handle background selection
   */
  const handleBackgroundChange = useCallback(
    (backgroundType: string) => {
      const bgType = backgroundType as BackgroundType;
      setTempBackground(bgType);
      onBackgroundChange(bgType);
    },
    [onBackgroundChange]
  );

  /**
   * Reset to defaults
   */
  const handleReset = useCallback(() => {
    const defaultColors = DEFAULT_COLOR_SCHEME;
    const defaultBackground: BackgroundType = "none";

    setTempColors(defaultColors);
    setTempBackground(defaultBackground);
    onColorsChange(defaultColors);
    onBackgroundChange(defaultBackground);
  }, [onColorsChange, onBackgroundChange]);

  // Transform color palettes to options format
  // const colorPaletteOptions = AVAILABLE_COLOR_PALETTES.map(palette => ({
  //   label: palette.displayName,
  //   value: palette.name,
  // }));

  // Transform background options to options format
  const backgroundOptions = BACKGROUND_OPTIONS.map(option => ({
    label: `${option.icon} ${option.name}`,
    value: option.type,
  }));

  // Get current palette config for display
  const currentPaletteConfig = AVAILABLE_COLOR_PALETTES.find(
    p => p.name === tempColors.palette
  );

  return (
    <Container maxW="420px" py="6">
      <Stack
        boxShadow="inset"
        p="6"
        gap="6"
        rounded="l3"
        bg="bg.surface"
        borderWidth="1px"
        borderColor="border.muted"
      >
        {/* Header */}
        <Box>
          <HStack mb="2">
            <LuSparkles />
            <Text fontWeight="semibold" fontSize="lg" color="fg.default">
              Personalization
            </Text>
          </HStack>
		  <Text color="fg.muted" fontSize="sm">
			Personalize your viewing experience
		  </Text>
        </Box>

        {/* Color Palette Section */}
        <PropertySection
          title="Color Palette"
          info="Choose a color scheme for your portfolio"
        >
          <ColorPaletteField
            label="Theme"
            value={tempColors.palette}
            onChange={handleColorPaletteChange}
            swatches={COLOR_PALETTE_SWATCHES}
            orientation="vertical"
            helperText={
              currentPaletteConfig?.description ||
              "Select a pre-designed color palette"
            }
          />

          {/* Color Preview - Shows current palette's main color */}
          <Box
            p="4"
            rounded="md"
            bg="bg.subtle"
            borderWidth="1px"
            borderColor="border.muted"
          >
            <Text fontSize="sm" color="fg.default" fontWeight="medium">
              Preview: {currentPaletteConfig?.displayName || tempColors.palette}
            </Text>
            <Box mt="2" h="3" rounded="full" bg={`${tempColors.palette}.500`} />
          </Box>
        </PropertySection>

        {/* Background Section */}
        <PropertySection
          title="Background Style"
          info="Choose a background animation or pattern"
        >
          <SelectField
            label="Style"
            value={tempBackground}
            onChange={handleBackgroundChange}
            options={backgroundOptions}
            orientation="vertical"
            helperText="Select the background visual effect"
          />
        </PropertySection>

        {/* Reset Action */}
        <Box pt="4" borderTopWidth="1px" borderColor="border.muted">
          <Button
            variant="plain"
            size="sm"
            onClick={handleReset}
            alignSelf="flex-start"
            _hover={{
              color: "fg.muted",
            }}
          >
            <LuRotateCcw />
            Reset to Defaults
          </Button>
        </Box>

        {/* Coming Soon CTA */}
        <Box
          p="4"
          rounded="lg"
          bg="bg.subtle"
          borderWidth="1px"
          borderColor="border.muted"
          textAlign="left"
        >
          <Text fontSize="sm" fontWeight="medium" color="fg.default" mb="2">
            More Options Coming Soon!
          </Text>
          <Stack gap="1" fontSize="sm" color="fg.muted">
            <Text>• Typography settings</Text>
            <Text>• Animation preferences</Text>
            <Text>• Layout options</Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
