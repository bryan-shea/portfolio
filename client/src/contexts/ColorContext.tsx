import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import type { ReactNode } from "react";
import {
  type ColorPaletteName,
  type ColorPaletteConfig,
  type ColorScheme,
  AVAILABLE_COLOR_PALETTES,
  DEFAULT_COLOR_SCHEME,
} from "../config/colors.data";

// Re-export types for backward compatibility
export type { ColorPaletteName, ColorPaletteConfig, ColorScheme };

/**
 * Color context interface
 */
interface ColorContextType {
  colorScheme: ColorScheme;
  setColorScheme: (colors: ColorScheme) => void;
  updateTheme: (colors: ColorScheme) => void;
}

/**
 * Color context
 */
const ColorContext = createContext<ColorContextType | undefined>(undefined);

/**
 * Color provider props
 */
interface ColorProviderProps {
  children: ReactNode;
}

/**
 * Color provider component
 * Manages dynamic color themes throughout the application
 */
export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    // Try to load from localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-color-scheme");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          // Check if it's the new palette format with just a palette name
          if (
            typeof parsed.palette === "string" &&
            AVAILABLE_COLOR_PALETTES.some(p => p.name === parsed.palette)
          ) {
            return parsed;
          }
          // Handle legacy format - map to new format
          if (parsed.palette && typeof parsed.palette.name === "string") {
            const legacyName = parsed.palette.name.toLowerCase();
            // Map legacy names to new palette names
            const paletteMapping: Record<string, ColorPaletteName> = {
              "steel gray": "gray",
              "elegant gray": "gray",
              "ocean blue": "blue",
              "forest green": "green",
              "sunset orange": "orange",
              "purple magic": "purple",
              "rose pink": "pink",
              "emerald teal": "teal",
              "ruby red": "red",
            };
            const mappedPalette = paletteMapping[legacyName] || "blue";
            return { palette: mappedPalette };
          }
        } catch {
          // Fall back to default if parsing fails
        }
      }
    }
    return DEFAULT_COLOR_SCHEME;
  });

  /**
   * Update theme with the selected color palette
   * Uses Chakra UI's colorPalette system for consistent theming
   */
  const updateTheme = useCallback((colors: ColorScheme) => {
    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-color-scheme", JSON.stringify(colors));
    }

    // Update CSS custom properties for Chakra UI's colorPalette system
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      const { palette } = colors;

      // Set the global colorPalette for Chakra UI components
      // This enables components to use colorPalette prop effectively
      root.style.setProperty(
        "--chakra-colors-colorPalette",
        `var(--chakra-colors-${palette})`
      );

      // Map the selected palette to primary for custom styling
      // This maintains backward compatibility with existing custom styles
      for (let shade = 50; shade <= 950; shade += 50) {
        if (shade <= 900 || shade === 950) {
          root.style.setProperty(
            `--chakra-colors-primary-${shade}`,
            `var(--chakra-colors-${palette}-${shade})`
          );
        }
      }

      // Set glow effect color using semantic token
      root.style.setProperty(
        "--glow-color",
        `var(--chakra-colors-${palette}-500)`
      );

      // Update personalized color variables using semantic tokens
      root.style.setProperty(
        "--chakra-colors-personalized-primary",
        `var(--chakra-colors-${palette}-500)`
      );
      root.style.setProperty(
        "--chakra-colors-personalized-primaryHover",
        `var(--chakra-colors-${palette}-600)`
      );
      root.style.setProperty(
        "--chakra-colors-personalized-primaryActive",
        `var(--chakra-colors-${palette}-700)`
      );
      root.style.setProperty(
        "--chakra-colors-personalized-accent",
        `var(--chakra-colors-${palette}-100)`
      );
      root.style.setProperty(
        "--chakra-colors-personalized-accentDark",
        `var(--chakra-colors-${palette}-800)`
      );
    }
  }, []);

  const handleSetColorScheme = useCallback(
    (colors: ColorScheme) => {
      setColorScheme(colors);
      updateTheme(colors);
    },
    [updateTheme]
  );

  // Apply initial theme
  useEffect(() => {
    updateTheme(colorScheme);
  }, [updateTheme, colorScheme]);

  const contextValue: ColorContextType = useMemo(
    () => ({
      colorScheme,
      setColorScheme: handleSetColorScheme,
      updateTheme,
    }),
    [colorScheme, handleSetColorScheme, updateTheme]
  );

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};

/**
 * Hook to use color context
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useColors = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColors must be used within a ColorProvider");
  }
  return context;
};
