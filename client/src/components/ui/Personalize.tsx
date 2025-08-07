import {
  Box,
  Button,
  HStack,
  VStack,
  Text,
  Portal,
  ColorPicker,
  parseColor,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { LuPalette, LuCheck } from "react-icons/lu";

/**
 * Color palette presets for quick selection
 */
const COLOR_PRESETS = [
  {
    name: "Ocean Blue",
    primary: "#0090d3",
    secondary: "#007ab3",
    accent: "#b6eaff",
  },
  {
    name: "Forest Green",
    primary: "#22c55e",
    secondary: "#16a34a",
    accent: "#bbf7d0",
  },
  {
    name: "Sunset Orange",
    primary: "#f97316",
    secondary: "#ea580c",
    accent: "#fed7aa",
  },
  {
    name: "Purple Magic",
    primary: "#a855f7",
    secondary: "#9333ea",
    accent: "#e9d5ff",
  },
  {
    name: "Rose Pink",
    primary: "#ec4899",
    secondary: "#db2777",
    accent: "#fce7f3",
  },
  {
    name: "Emerald Teal",
    primary: "#14b8a6",
    secondary: "#0d9488",
    accent: "#ccfbf1",
  },
];

/**
 * Color scheme interface
 */
interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
}

/**
 * Props for Personalize component
 */
interface PersonalizeProps {
  /** Current color scheme */
  currentColors: ColorScheme;
  /** Callback when colors change */
  onColorsChange: (colors: ColorScheme) => void;
  /** Whether the personalize panel is open */
  isOpen: boolean;
  /** Callback to close the panel */
  onClose: () => void;
}

/**
 * Personalize component for color customization
 * Allows users to select colors that change the entire main color palette
 * Uses Chakra UI's ColorPicker for professional color selection
 */
export const Personalize: React.FC<PersonalizeProps> = ({
  currentColors,
  onColorsChange,
  isOpen,
  onClose,
}) => {
  const [tempColors, setTempColors] = useState(currentColors);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTempColors(currentColors);
  }, [currentColors]);

  const handleColorChange = (colorType: keyof ColorScheme, color: string) => {
    setTempColors((prev) => ({
      ...prev,
      [colorType]: color,
    }));
  };

  const handlePresetSelect = (preset: ColorScheme) => {
    setTempColors(preset);
  };

  const handleApply = () => {
    onColorsChange(tempColors);
    onClose();
  };

  const handleReset = () => {
    const defaultColors = COLOR_PRESETS[0]; // Ocean Blue as default
    setTempColors(defaultColors);
    onColorsChange(defaultColors);
  };

  if (!isOpen) return null;

  return (
    <Portal>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="bg.default/80"
        backdropFilter="blur(10px)"
        zIndex="1001"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="4"
        onClick={onClose}
      >
        <Box
          maxW="md"
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
          borderRadius="xl"
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
        >
          <Box p="6">
            <VStack gap="6" align="stretch">
              {/* Header */}
              <HStack justify="space-between" align="center">
                <HStack gap="2">
                  <LuPalette />
                  <Heading size="lg">Personalize Colors</Heading>
                </HStack>
                <Button size="sm" variant="ghost" onClick={onClose}>
                  ✕
                </Button>
              </HStack>

              {/* Color Presets */}
              <VStack gap="3" align="stretch">
                <Text fontWeight="semibold" fontSize="sm" color="fg.muted">
                  Quick Presets
                </Text>
                <Stack direction="row" wrap="wrap" gap="2">
                  {COLOR_PRESETS.map((preset) => (
                    <Button
                      key={preset.name}
                      size="sm"
                      variant="outline"
                      onClick={() => handlePresetSelect(preset)}
                    >
                      <HStack gap="2">
                        <Box
                          w="3"
                          h="3"
                          borderRadius="full"
                          bg={preset.primary}
                        />
                        <Text>{preset.name}</Text>
                      </HStack>
                    </Button>
                  ))}
                </Stack>
              </VStack>

              {/* Custom Color Pickers */}
              <VStack gap="4" align="stretch">
                <Text fontWeight="semibold" fontSize="sm" color="fg.muted">
                  Custom Colors
                </Text>

                {/* Primary Color */}
                <ColorPickerItem
                  label="Primary Color"
                  description="Main brand color used for buttons and highlights"
                  value={tempColors.primary}
                  onChange={(color) => handleColorChange("primary", color)}
                  portalContainer={modalRef}
                />

                {/* Secondary Color */}
                <ColorPickerItem
                  label="Secondary Color"
                  description="Supporting color for hover states and accents"
                  value={tempColors.secondary}
                  onChange={(color) => handleColorChange("secondary", color)}
                  portalContainer={modalRef}
                />

                {/* Accent Color */}
                <ColorPickerItem
                  label="Accent Color"
                  description="Light accent color for backgrounds and highlights"
                  value={tempColors.accent}
                  onChange={(color) => handleColorChange("accent", color)}
                  portalContainer={modalRef}
                />
              </VStack>

              {/* Action Buttons */}
              <HStack justify="space-between" pt="2">
                <Button variant="outline" onClick={handleReset}>
                  Reset to Default
                </Button>
                <HStack gap="2">
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="primary" onClick={handleApply}>
                    Apply Changes
                  </Button>
                </HStack>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Portal>
  );
};

/**
 * Individual color picker item component
 */
interface ColorPickerItemProps {
  label: string;
  description: string;
  value: string;
  onChange: (color: string) => void;
  portalContainer: React.RefObject<HTMLDivElement | null>;
}

const ColorPickerItem: React.FC<ColorPickerItemProps> = ({
  label,
  description,
  value,
  onChange,
  portalContainer,
}) => {
  return (
    <HStack gap="3" align="flex-start">
      <VStack gap="1" align="stretch" flex="1">
        <Text fontWeight="medium" fontSize="sm">
          {label}
        </Text>
        <Text fontSize="xs" color="fg.muted" lineHeight="1.3">
          {description}
        </Text>
      </VStack>
      <ColorPicker.Root
        value={parseColor(value)}
        onValueChange={(details) => onChange(details.valueAsString)}
        size="sm"
      >
        <ColorPicker.Control>
          <ColorPicker.Trigger>
            <ColorPicker.ValueSwatch boxSize="8" />
          </ColorPicker.Trigger>
        </ColorPicker.Control>

        <Portal container={portalContainer}>
          <ColorPicker.Positioner>
            <ColorPicker.Content
              bg={{
                _light: "white",
                _dark: "gray.800",
              }}
              border="1px solid"
              borderColor={{
                _light: "gray.200",
                _dark: "gray.600",
              }}
              boxShadow="2xl"
              borderRadius="lg"
              p="3"
            >
              <ColorPicker.Area />
              <HStack>
                <ColorPicker.EyeDropper size="xs" variant="outline" />
                <Stack gap="1" flex="1" px="1">
                  <ColorPicker.ChannelSlider channel="hue" />
                  <ColorPicker.ChannelSlider channel="alpha" />
                </Stack>
              </HStack>
              <ColorPicker.SwatchGroup>
                {[
                  "#ff0000",
                  "#00ff00",
                  "#0000ff",
                  "#ffff00",
                  "#ff00ff",
                  "#00ffff",
                ].map((color) => (
                  <ColorPicker.SwatchTrigger key={color} value={color}>
                    <ColorPicker.Swatch value={color} boxSize="4">
                      <ColorPicker.SwatchIndicator>
                        <LuCheck />
                      </ColorPicker.SwatchIndicator>
                    </ColorPicker.Swatch>
                  </ColorPicker.SwatchTrigger>
                ))}
              </ColorPicker.SwatchGroup>
            </ColorPicker.Content>
          </ColorPicker.Positioner>
        </Portal>
      </ColorPicker.Root>
    </HStack>
  );
};
