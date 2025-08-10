import { useState, useCallback } from 'react';

/**
 * Custom hook for managing background selection with persistence
 * @param initialBackground - Initial background type
 * @param storageKey - localStorage key for persistence
 * @returns [currentBackground, setBackground] - Current background and setter
 */
export function useBackgroundManager<T extends string>(
  initialBackground: T,
  storageKey = 'portfolio-background'
): [T, (background: T) => void] {
  const [background, setBackgroundState] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey);
      if (saved && saved !== 'none') {
        return saved as T;
      }
    }
    return initialBackground;
  });

  const setBackground = useCallback((newBackground: T) => {
    setBackgroundState(newBackground);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, newBackground);
    }
  }, [storageKey]);

  return [background, setBackground];
}

/**
 * Custom hook for managing randomized styles (useful for badges, animations, etc.)
 * @param items - Array of items to generate styles for
 * @param styleOptions - Available style options
 * @returns Array of randomized styles
 */
export function useRandomizedStyles<T, K>(
  items: T[],
  styleOptions: {
    colors?: readonly K[];
    variants?: readonly string[];
    shuffle?: boolean;
  }
): Array<{ colorPalette?: K; variant?: string }> {
  const [styles] = useState(() => {
    const { colors = [], variants = [], shuffle = true } = styleOptions;

    // Shuffle colors if requested to ensure variety
    const availableColors = shuffle
      ? [...colors].sort(() => Math.random() - 0.5)
      : [...colors];

    return items.map((_, index) => ({
      colorPalette: availableColors[index % availableColors.length],
      variant: variants[Math.floor(Math.random() * variants.length)],
    }));
  });

  return styles;
}
