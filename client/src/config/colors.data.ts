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
