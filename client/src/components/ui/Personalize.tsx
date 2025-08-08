import {
  Box,
  Button,
  HStack,
  VStack,
  Text,
  Portal,
  Heading,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { LuPalette, LuCheck } from "react-icons/lu";

/**
 * Comprehensive color palette interface
 */
interface ColorPalette {
  name: string;
  description: string;
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  accent: {
    light: string;
    dark: string;
  };
  preview: {
    light: string;
    dark: string;
  };
}

/**
 * Curated color palettes optimized for both light and dark modes
 * Each palette has been carefully tested for accessibility and readability
 */
const COLOR_PALETTES: ColorPalette[] = [
  {
    name: "Ocean Blue",
    description: "Cool and professional with excellent contrast",
    primary: {
      50: "#eff8ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554",
    },
    accent: {
      light: "#dbeafe",
      dark: "#1e40af",
    },
    preview: {
      light: "#3b82f6",
      dark: "#60a5fa",
    },
  },
  {
    name: "Forest Green",
    description: "Natural and calming with organic feel",
    primary: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16",
    },
    accent: {
      light: "#bbf7d0",
      dark: "#166534",
    },
    preview: {
      light: "#22c55e",
      dark: "#4ade80",
    },
  },
  {
    name: "Sunset Orange",
    description: "Warm and energetic with vibrant appeal",
    primary: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407",
    },
    accent: {
      light: "#fed7aa",
      dark: "#9a3412",
    },
    preview: {
      light: "#f97316",
      dark: "#fb923c",
    },
  },
  {
    name: "Purple Magic",
    description: "Creative and innovative with mystical charm",
    primary: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7c3aed",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764",
    },
    accent: {
      light: "#e9d5ff",
      dark: "#6b21a8",
    },
    preview: {
      light: "#a855f7",
      dark: "#c084fc",
    },
  },
  {
    name: "Rose Pink",
    description: "Elegant and sophisticated with modern touch",
    primary: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724",
    },
    accent: {
      light: "#fce7f3",
      dark: "#9d174d",
    },
    preview: {
      light: "#ec4899",
      dark: "#f472b6",
    },
  },
  {
    name: "Emerald Teal",
    description: "Fresh and modern with tech-savvy vibe",
    primary: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e",
    },
    accent: {
      light: "#ccfbf1",
      dark: "#115e59",
    },
    preview: {
      light: "#14b8a6",
      dark: "#2dd4bf",
    },
  },
  {
    name: "Steel Gray",
    description: "Professional and timeless with subtle elegance",
    primary: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617",
    },
    accent: {
      light: "#e2e8f0",
      dark: "#334155",
    },
    preview: {
      light: "#64748b",
      dark: "#94a3b8",
    },
  },
  {
    name: "Crimson Red",
    description: "Bold and powerful with striking presence",
    primary: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a",
    },
    accent: {
      light: "#fee2e2",
      dark: "#991b1b",
    },
    preview: {
      light: "#ef4444",
      dark: "#f87171",
    },
  },
];

/**
 * Color scheme interface for the selected palette
 */
interface ColorScheme {
  palette: ColorPalette;
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
 * Allows users to select from curated color palettes optimized for both light and dark modes
 * Each palette provides a complete color system with proper contrast ratios
 */
export const Personalize: React.FC<PersonalizeProps> = ({
  currentColors,
  onColorsChange,
  isOpen,
  onClose,
}) => {
  const [selectedPalette, setSelectedPalette] = useState(currentColors.palette);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedPalette(currentColors.palette);
  }, [currentColors.palette]);

  const handlePaletteSelect = (palette: ColorPalette) => {
    setSelectedPalette(palette);
    onColorsChange({ palette });
  };

  const handleApplyColors = () => {
    onColorsChange({ palette: selectedPalette });
    onClose();
  };

  const handleResetToDefault = () => {
    const defaultPalette = COLOR_PALETTES[0]; // Ocean Blue as default
    setSelectedPalette(defaultPalette);
    onColorsChange({ palette: defaultPalette });
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <Box
        position="fixed"
        inset="0"
        bg="blackAlpha.600"
        backdropFilter="blur(4px)"
        zIndex="modal"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="4"
      >
        <Box
          ref={modalRef}
          bg="bg.panel"
          border="1px solid"
          borderColor="border.muted"
          borderRadius="xl"
          boxShadow="2xl"
          p="6"
          maxW="2xl"
          w="full"
          maxH="90vh"
          overflowY="auto"
        >
          <VStack gap="6" align="stretch">
            {/* Header */}
            <HStack justify="space-between" align="center">
              <HStack gap="3">
                <Box
                  p="2"
                  borderRadius="md"
                  bg="primary.100"
                  color="primary.700"
                  _dark={{ bg: "primary.900", color: "primary.200" }}
                >
                  <LuPalette size="20" />
                </Box>
                <VStack align="start" gap="0">
                  <Heading size="lg" color="fg">
                    Personalize Colors
                  </Heading>
                  <Text fontSize="sm" color="fg.muted">
                    Choose a color palette that matches your style
                  </Text>
                </VStack>
              </HStack>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                aria-label="Close personalization panel"
              >
                ✕
              </Button>
            </HStack>

            {/* Color Palette Options */}
            <VStack gap="2" align="stretch">
              <Text fontSize="sm" fontWeight="semibold" color="fg.muted">
                Available Palettes
              </Text>
              <Box
                display="grid"
                gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap="1"
              >
                {COLOR_PALETTES.map((palette) => (
                  <Box
                    key={palette.name}
                    p="4"
                    borderRadius="lg"
                    border="2px solid"
                    borderColor={
                      selectedPalette.name === palette.name
                        ? "primary.500"
                        : "border.muted"
                    }
                    bg={
                      selectedPalette.name === palette.name
                        ? "primary.50"
                        : "bg.panel"
                    }
                    _dark={{
                      bg:
                        selectedPalette.name === palette.name
                          ? "primary.900/20"
                          : "bg.panel",
                    }}
                    cursor="pointer"
                    transition="all 0.2s"
                    _hover={{
                      borderColor: "primary.400",
                      transform: "translateY(-1px)",
                      boxShadow: "md",
                    }}
                    onClick={() => handlePaletteSelect(palette)}
                  >
                    <VStack gap="3" align="start">
                      <HStack justify="space-between" w="full">
                        <Text fontSize="sm" fontWeight="semibold" color="fg">
                          {palette.name}
                        </Text>
                        {selectedPalette.name === palette.name && (
                          <Box color="primary.500">
                            <LuCheck size="16" />
                          </Box>
                        )}
                      </HStack>

                      <Text fontSize="xs" color="fg.muted" lineHeight="1.4">
                        {palette.description}
                      </Text>

                      {/* Color Preview */}
                      <HStack gap="1" w="full">
                        <Box
                          flex="1"
                          h="6"
                          borderRadius="sm"
                          bg={palette.preview.light}
                          border="1px solid"
                          borderColor="border.muted"
                        />
                        <Box
                          flex="1"
                          h="6"
                          borderRadius="sm"
                          bg={palette.preview.dark}
                          border="1px solid"
                          borderColor="border.muted"
                        />
                      </HStack>

                      {/* Palette Colors Preview */}
                      <HStack gap="1" w="full" justify="center">
                        {[
                          palette.primary[200],
                          palette.primary[400],
                          palette.primary[600],
                          palette.primary[800],
                        ].map((color) => (
                          <Box
                            key={color}
                            w="4"
                            h="4"
                            borderRadius="full"
                            bg={color}
                            border="1px solid"
                            borderColor="border.muted"
                          />
                        ))}
                      </HStack>
                    </VStack>
                  </Box>
                ))}
              </Box>
            </VStack>

            {/* Action Buttons */}
            <HStack justify="space-between" pt="4">
              <Button
                variant="outline"
                onClick={handleResetToDefault}
                size="sm"
              >
                Reset to Default
              </Button>
              <HStack gap="2">
                <Button variant="outline" onClick={onClose} size="sm">
                  Cancel
                </Button>
                <Button
                  bg="primary.500"
                  color="white"
                  _hover={{ bg: "primary.600" }}
                  _active={{ bg: "primary.700" }}
                  onClick={handleApplyColors}
                  size="sm"
                >
                  Apply Changes
                </Button>
              </HStack>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Portal>
  );
};
