import { useCallback } from "react";
import type { ColorScheme } from "../contexts/ColorContext";

/**
 * Hook for manipulating CSS custom properties for theme changes
 * Extracts DOM manipulation logic from context for better separation of concerns
 *
 * This hook handles the low-level CSS custom property updates that make
 * theme changes visible in the UI. It's separate from the theme state management
 * to keep concerns properly separated.
 */
export function useThemeManipulation() {
  /**
   * Updates CSS custom properties to apply a new color theme
   * @param colors - The color scheme configuration to apply
   */
  const updateTheme = useCallback((colors: ColorScheme) => {
    // Skip if running on server (SSR safety)
    if (typeof document === "undefined") return;

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

    // Apply primary color variations
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

    // Apply secondary color variations
    root.style.setProperty(
      "--chakra-colors-personalized-secondary",
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

    // Apply additional theme variations that might be needed
    root.style.setProperty(
      "--chakra-colors-personalized-muted",
      `var(--chakra-colors-${palette}-200)`
    );

    root.style.setProperty(
      "--chakra-colors-personalized-subtle",
      `var(--chakra-colors-${palette}-50)`
    );

    // Update glow color for special effects
    root.style.setProperty(
      "--glow-color",
      `var(--chakra-colors-${palette}-500)`
    );
  }, []);

  /**
   * Resets theme to default values
   * Useful for clearing personalization or handling errors
   */
  const resetTheme = useCallback(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    const defaultPalette = "blue"; // Default fallback palette

    // Reset all custom properties to default
    root.style.setProperty(
      "--chakra-colors-personalized-primary",
      `var(--chakra-colors-${defaultPalette}-500)`
    );

    root.style.setProperty(
      "--chakra-colors-personalized-primaryDark",
      `var(--chakra-colors-${defaultPalette}-600)`
    );

    root.style.setProperty(
      "--chakra-colors-personalized-primaryLight",
      `var(--chakra-colors-${defaultPalette}-400)`
    );

    root.style.setProperty(
      "--chakra-colors-personalized-secondary",
      `var(--chakra-colors-${defaultPalette}-700)`
    );

    root.style.setProperty(
      "--chakra-colors-personalized-accent",
      `var(--chakra-colors-${defaultPalette}-100)`
    );

    root.style.setProperty(
      "--chakra-colors-personalized-accentDark",
      `var(--chakra-colors-${defaultPalette}-800)`
    );

    root.style.setProperty(
      "--chakra-colors-personalized-muted",
      `var(--chakra-colors-${defaultPalette}-200)`
    );

    root.style.setProperty(
      "--chakra-colors-personalized-subtle",
      `var(--chakra-colors-${defaultPalette}-50)`
    );

    root.style.setProperty(
      "--glow-color",
      `var(--chakra-colors-${defaultPalette}-500)`
    );
  }, []);

  /**
   * Gets the current value of a CSS custom property
   * @param property - The CSS custom property name
   * @returns The current value or empty string if not found
   */
  const getCustomProperty = useCallback((property: string): string => {
    if (typeof document === "undefined") return "";

    const root = document.documentElement;
    return getComputedStyle(root).getPropertyValue(property).trim();
  }, []);

  /**
   * Sets a custom CSS property value
   * @param property - The CSS custom property name
   * @param value - The value to set
   */
  const setCustomProperty = useCallback(
    (property: string, value: string): void => {
      if (typeof document === "undefined") return;

      const root = document.documentElement;
      root.style.setProperty(property, value);
    },
    []
  );

  return {
    updateTheme,
    resetTheme,
    getCustomProperty,
    setCustomProperty,
  };
}
