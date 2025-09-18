/**
 * Color palette configurations for Chakra UI theme system
 * Using built-in Chakra UI color palettes with custom display names and descriptions
 */

/**
 * Available Chakra UI color palettes
 * These correspond to the built-in Chakra UI color system
 */
export type ColorPaletteName =
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "cyan"
  | "purple"
  | "pink";

/**
 * Color palette configuration
 */
export interface ColorPaletteConfig {
  name: ColorPaletteName;
  displayName: string;
  description: string;
}

/**
 * Available color palettes using Chakra UI's semantic token system
 */
export const AVAILABLE_COLOR_PALETTES: readonly ColorPaletteConfig[] = [
  {
    name: "gray",
    displayName: "Steel Gray",
    description: "Professional and timeless with subtle elegance",
  },
  {
    name: "blue",
    displayName: "Ocean Blue",
    description: "Cool and professional with excellent contrast",
  },
  {
    name: "green",
    displayName: "Forest Green",
    description: "Natural and calming with organic feel",
  },
  {
    name: "orange",
    displayName: "Sunset Orange",
    description: "Warm and energetic with vibrant appeal",
  },
  {
    name: "purple",
    displayName: "Purple Magic",
    description: "Creative and innovative with mystical charm",
  },
  {
    name: "pink",
    displayName: "Rose Pink",
    description: "Elegant and sophisticated with modern touch",
  },
  {
    name: "teal",
    displayName: "Emerald Teal",
    description: "Fresh and modern with tech-savvy vibe",
  },
  {
    name: "red",
    displayName: "Ruby Red",
    description: "Bold and powerful with strong presence",
  },
  {
    name: "yellow",
    displayName: "Golden Yellow",
    description: "Bright and cheerful with optimistic energy",
  },
  {
    name: "cyan",
    displayName: "Ocean Cyan",
    description: "Cool and refreshing with aquatic feel",
  },
] as const;

/**
 * Color scheme interface using Chakra UI color system
 */
export interface ColorScheme {
  palette: ColorPaletteName;
}

/**
 * Default color scheme
 */
export const DEFAULT_COLOR_SCHEME: ColorScheme = {
  palette: "blue", // Use the primary blue from our custom theme
};

/**
 * Color palette swatch configuration for color picker
 */
export interface ColorPaletteSwatch {
  readonly name: ColorPaletteName;
  readonly color: string;
  readonly displayName: string;
}

/**
 * Convert color palette configurations to swatch format for ColorPicker
 * Uses representative colors from each Chakra UI palette
 */
export const COLOR_PALETTE_SWATCHES: ReadonlyArray<ColorPaletteSwatch> =
  AVAILABLE_COLOR_PALETTES.map((palette): ColorPaletteSwatch => {
    // Use Chakra UI standard color values for each palette
    const colorMap: Record<ColorPaletteName, string> = {
      gray: "#6B7280", // gray.500
      blue: "#3B82F6", // blue.500
      green: "#10B981", // green.500
      orange: "#F59E0B", // orange.500
      purple: "#8B5CF6", // purple.500
      pink: "#EC4899", // pink.500
      teal: "#14B8A6", // teal.500
      red: "#EF4444", // red.500
      yellow: "#EAB308", // yellow.500
      cyan: "#06B6D4", // cyan.500
    };

    return {
      name: palette.name,
      color: colorMap[palette.name],
      displayName: palette.displayName,
    };
  });
