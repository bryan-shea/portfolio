import { createContext, useContext, useState, useEffect, useMemo } from "react";
import type { ReactNode } from "react";

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
 * Color scheme interface for the selected palette
 */
export interface ColorScheme {
  palette: ColorPalette;
}

/**
 * Default color palette (Ocean Blue)
 */
const DEFAULT_PALETTE: ColorPalette = {
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
};

const DEFAULT_COLOR_SCHEME: ColorScheme = {
  palette: DEFAULT_PALETTE,
};

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
          // Check if it's the new palette format
          if (parsed.palette?.primary && parsed.palette?.name) {
            return parsed;
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
   */
  const updateTheme = (colors: ColorScheme) => {
    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-color-scheme", JSON.stringify(colors));
    }

    // Update CSS custom properties for dynamic theming
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      const { palette } = colors;

      // Primary palette - main brand colors
      Object.entries(palette.primary).forEach(([shade, color]) => {
        root.style.setProperty(`--chakra-colors-primary-${shade}`, color);
      });

      // Map primary palette to colorPalette tokens for consistent theming
      Object.entries(palette.primary).forEach(([shade, color]) => {
        root.style.setProperty(`--chakra-colors-colorPalette-${shade}`, color);
      });

      // Blue as the main interactive color (mapped to primary)
      Object.entries(palette.primary).forEach(([shade, color]) => {
        root.style.setProperty(`--chakra-colors-blue-${shade}`, color);
      });

      // Special glow effect color
      root.style.setProperty("--glow-color", palette.primary[500]);

      // Personalized colors for custom components
      root.style.setProperty(
        "--chakra-colors-personalized-primary",
        palette.primary[500]
      );
      root.style.setProperty(
        "--chakra-colors-personalized-primaryHover",
        palette.primary[600]
      );
      root.style.setProperty(
        "--chakra-colors-personalized-primaryActive",
        palette.primary[700]
      );
      root.style.setProperty(
        "--chakra-colors-personalized-accent",
        palette.accent.light
      );
      root.style.setProperty(
        "--chakra-colors-personalized-accentDark",
        palette.accent.dark
      );
    }
  };

  const handleSetColorScheme = (colors: ColorScheme) => {
    setColorScheme(colors);
    updateTheme(colors);
  };

  // Apply initial theme
  useEffect(() => {
    updateTheme(colorScheme);
  }, []);

  const contextValue: ColorContextType = useMemo(
    () => ({
      colorScheme,
      setColorScheme: handleSetColorScheme,
      updateTheme,
    }),
    [colorScheme]
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
export const useColors = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColors must be used within a ColorProvider");
  }
  return context;
};
