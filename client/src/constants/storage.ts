/**
 * LocalStorage key constants
 * Centralized storage keys to prevent typos and ensure consistency
 */
export const STORAGE_KEYS = {
  /** User's selected background theme */
  BACKGROUND: "portfolio-background",
  /** User's selected color scheme */
  COLOR_SCHEME: "portfolio-color-scheme",
  /** User's theme mode preference (light/dark) */
  THEME_MODE: "portfolio-theme-mode",
  /** General user preferences object */
  USER_PREFERENCES: "portfolio-preferences",
  /** Animation preferences */
  ANIMATION_PREFS: "portfolio-animation-prefs",
  /** Accessibility preferences */
  A11Y_PREFS: "portfolio-a11y-prefs",
};

/**
 * Storage key type for type safety
 */
export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

/**
 * Storage utility functions
 * Type-safe localStorage operations
 */
export const storageUtils = {
  /**
   * Get item from localStorage with type safety
   */
  getItem: (key: StorageKey): string | null => {
    if (typeof window === "undefined") return null;
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn(`Failed to read from localStorage key: ${key}`, error);
      return null;
    }
  },

  /**
   * Set item in localStorage with type safety
   */
  setItem: (key: StorageKey, value: string): boolean => {
    if (typeof window === "undefined") return false;
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn(`Failed to write to localStorage key: ${key}`, error);
      return false;
    }
  },

  /**
   * Get parsed JSON from localStorage
   */
  getJSON: <T>(key: StorageKey, defaultValue: T): T => {
    const item = storageUtils.getItem(key);
    if (!item) return defaultValue;
    try {
      return JSON.parse(item);
    } catch (error) {
      console.warn(`Failed to parse JSON from localStorage key: ${key}`, error);
      return defaultValue;
    }
  },

  /**
   * Set JSON in localStorage
   */
  setJSON: (key: StorageKey, value: unknown): boolean => {
    try {
      return storageUtils.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(
        `Failed to stringify JSON for localStorage key: ${key}`,
        error
      );
      return false;
    }
  },

  /**
   * Remove item from localStorage
   */
  removeItem: (key: StorageKey): boolean => {
    if (typeof window === "undefined") return false;
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Failed to remove from localStorage key: ${key}`, error);
      return false;
    }
  },

  /**
   * Clear all portfolio-related localStorage items
   */
  clearAll: (): void => {
    Object.values(STORAGE_KEYS).forEach(key => {
      storageUtils.removeItem(key);
    });
  },
};
