import { createContext, useContext, useState, useEffect, useMemo } from "react";
import type { ReactNode } from "react";

/**
 * Color scheme interface
 */
export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
}

/**
 * Default color scheme (Ocean Blue)
 */
const DEFAULT_COLOR_SCHEME: ColorScheme = {
  primary: "#0090d3",
  secondary: "#007ab3",
  accent: "#b6eaff",
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
 * Simple color manipulation utilities
 */
const hexToHsl = (hex: string): [number, number, number] => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number, s: number;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
};

const hslToHex = (h: number, s: number, l: number): string => {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
  } else if (120 <= h && h < 180) {
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

const lighten = (hex: string, amount: number): string => {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, s, Math.min(100, l + amount * 100));
};

const darken = (hex: string, amount: number): string => {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, s, Math.max(0, l - amount * 100));
};

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
          return JSON.parse(saved);
        } catch {
          return DEFAULT_COLOR_SCHEME;
        }
      }
    }
    return DEFAULT_COLOR_SCHEME;
  });

  const updateTheme = (colors: ColorScheme) => {
    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-color-scheme", JSON.stringify(colors));
    }

    // Update CSS custom properties for dynamic theming
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.style.setProperty("--chakra-colors-primary-500", colors.primary);
      root.style.setProperty("--chakra-colors-primary-600", colors.secondary);
      root.style.setProperty("--chakra-colors-primary-300", colors.accent);
      root.style.setProperty("--glow-color", colors.primary);
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
