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
import { STORAGE_KEYS, storageUtils } from "../constants";
import { useThemeManipulation } from "../hooks/useThemeManipulation";

// Re-export types for backward compatibility
export type { ColorPaletteName, ColorPaletteConfig, ColorScheme };

/**
 * Color state context interface - for read-only color data
 */
interface ColorStateContextType {
  colorScheme: ColorScheme;
}

/**
 * Color actions context interface - for color-related actions
 */
interface ColorActionsContextType {
  setColorScheme: (colors: ColorScheme) => void;
  updateTheme: (colors: ColorScheme) => void;
}

/**
 * Separate contexts for state and actions to prevent unnecessary re-renders
 */
const ColorStateContext = createContext<ColorStateContextType | undefined>(
  undefined
);
const ColorActionsContext = createContext<ColorActionsContextType | undefined>(
  undefined
);

/**
 * Color provider props
 */
interface ColorProviderProps {
  children: ReactNode;
}

/**
 * Optimized color provider component
 * Uses separate contexts for state and actions to minimize re-renders
 */
export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const { updateTheme: updateThemeDOM } = useThemeManipulation();

  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    // Try to load from localStorage
    if (typeof window !== "undefined") {
      const saved = storageUtils.getItem(STORAGE_KEYS.COLOR_SCHEME);
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
   * Uses the theme manipulation hook for DOM updates
   */
  const updateTheme = useCallback(
    (colors: ColorScheme) => {
      // Save to localStorage
      if (typeof window !== "undefined") {
        storageUtils.setJSON(STORAGE_KEYS.COLOR_SCHEME, colors);
      }

      // Apply theme changes to DOM
      updateThemeDOM(colors);
    },
    [updateThemeDOM]
  );

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

  // Separate context values for state and actions
  const stateValue: ColorStateContextType = useMemo(
    () => ({
      colorScheme,
    }),
    [colorScheme]
  );

  const actionsValue: ColorActionsContextType = useMemo(
    () => ({
      setColorScheme: handleSetColorScheme,
      updateTheme,
    }),
    [handleSetColorScheme, updateTheme]
  );

  return (
    <ColorStateContext.Provider value={stateValue}>
      <ColorActionsContext.Provider value={actionsValue}>
        {children}
      </ColorActionsContext.Provider>
    </ColorStateContext.Provider>
  );
};

/**
 * Hook to use color state (read-only)
 * Only causes re-renders when color scheme changes
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useColorScheme = (): ColorScheme => {
  const context = useContext(ColorStateContext);
  if (!context) {
    throw new Error("useColorScheme must be used within a ColorProvider");
  }
  return context.colorScheme;
};

/**
 * Hook to use color actions
 * Doesn't cause re-renders when color scheme changes
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useColorActions = (): ColorActionsContextType => {
  const context = useContext(ColorActionsContext);
  if (!context) {
    throw new Error("useColorActions must be used within a ColorProvider");
  }
  return context;
};

/**
 * Hook to use both color state and actions (backward compatibility)
 * Use useColorScheme() and useColorActions() for better performance
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useColors = (): ColorStateContextType &
  ColorActionsContextType => {
  const state = useColorScheme();
  const actions = useColorActions();
  return useMemo(
    () => ({
      colorScheme: state,
      ...actions,
    }),
    [state, actions]
  );
};
