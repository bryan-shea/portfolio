/**
 * Configuration interface for portfolio sections
 */
export interface SectionConfig {
  /** Unique identifier for the section */
  id: string;
  /** React component to render */
  component: React.ComponentType;
  /** Default background type for this section */
  defaultBackground: string;
}

/**
 * Configuration interface for background options
 */
export interface BackgroundOption {
  /** Unique identifier for the background */
  type: string;
  /** Display name for the background */
  name: string;
  /** Description of the background effect */
  description: string;
  /** React component to render */
  component: React.ComponentType;
}

/**
 * Portfolio sections configuration
 * Centralizes section management for better maintainability
 */
export const createPortfolioSections = (
  sections: SectionConfig[]
): SectionConfig[] => {
  return sections;
};

/**
 * Validates if a given background type is valid
 * @param background - Background type to validate
 * @param validBackgrounds - Array of valid background types
 * @returns Boolean indicating if background is valid
 */
export const isValidBackground = (
  background: string,
  validBackgrounds: string[]
): boolean => {
  return validBackgrounds.includes(background);
};

/**
 * Gets the next background in rotation
 * @param current - Current background type
 * @param backgrounds - Available background types
 * @returns Next background type in sequence
 */
export const getNextBackground = (
  current: string,
  backgrounds: string[]
): string => {
  const currentIndex = backgrounds.indexOf(current);
  return backgrounds[(currentIndex + 1) % backgrounds.length];
};

/**
 * Gets the previous background in rotation
 * @param current - Current background type
 * @param backgrounds - Available background types
 * @returns Previous background type in sequence
 */
export const getPreviousBackground = (
  current: string,
  backgrounds: string[]
): string => {
  const currentIndex = backgrounds.indexOf(current);
  return backgrounds[
    currentIndex === 0 ? backgrounds.length - 1 : currentIndex - 1
  ];
};
