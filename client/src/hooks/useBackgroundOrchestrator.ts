import { useState, useCallback, useMemo } from "react";
import { useBackgroundManager } from "./useStyleManagement";
import { ANIMATION_DURATIONS } from "../constants";
import type { BackgroundType } from "../utils/types";
import type { ComponentType } from "react";

/**
 * Background option configuration
 */
export interface BackgroundOption {
  /** Unique identifier for the background */
  type: BackgroundType;
  /** Display name for the background */
  name: string;
  /** Description of the background effect */
  description: string;
  /** React component to render */
  component: ComponentType;
  /** Performance impact rating (1-6) */
  performanceImpact?: number;
  /** Whether this background supports theming */
  supportsTheming?: boolean;
}

/**
 * Background orchestrator hook
 * Manages background selection, transitions, and component resolution
 * Extracted from BackgroundManager for better reusability
 */
export function useBackgroundOrchestrator(
  backgroundOptions: BackgroundOption[],
  initialBackground: BackgroundType = "grid"
) {
  const [currentBackground, setCurrentBackground] =
    useBackgroundManager(initialBackground);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextBackground, setNextBackground] = useState<BackgroundType | null>(
    null
  );

  /**
   * Get the currently active background component
   */
  const backgroundComponent = useMemo(() => {
    const option = backgroundOptions.find(
      opt => opt.type === currentBackground
    );
    return option?.component || null;
  }, [currentBackground, backgroundOptions]);

  /**
   * Get metadata for the current background
   */
  const currentBackgroundInfo = useMemo(() => {
    return (
      backgroundOptions.find(opt => opt.type === currentBackground) || null
    );
  }, [currentBackground, backgroundOptions]);

  /**
   * Get all available background options
   */
  const availableBackgrounds = useMemo(() => {
    return backgroundOptions.map(
      ({ type, name, description, performanceImpact }) => ({
        type,
        name,
        description,
        performanceImpact: performanceImpact || 2,
      })
    );
  }, [backgroundOptions]);

  /**
   * Change background with smooth transition
   */
  const changeBackground = useCallback(
    async (newBackground: BackgroundType) => {
      if (newBackground === currentBackground || isTransitioning) {
        return;
      }

      setIsTransitioning(true);
      setNextBackground(newBackground);

      // Brief transition delay for smooth UX
      await new Promise(resolve =>
        setTimeout(resolve, ANIMATION_DURATIONS.BACKGROUND_TRANSITION * 1000)
      );

      setCurrentBackground(newBackground);
      setNextBackground(null);

      // Allow transition state to clear
      setTimeout(() => {
        setIsTransitioning(false);
      }, ANIMATION_DURATIONS.QUICK * 1000);
    },
    [currentBackground, isTransitioning, setCurrentBackground]
  );

  /**
   * Get next/previous backgrounds for navigation
   */
  const getAdjacentBackgrounds = useCallback(() => {
    const currentIndex = backgroundOptions.findIndex(
      opt => opt.type === currentBackground
    );
    const nextIndex = (currentIndex + 1) % backgroundOptions.length;
    const prevIndex =
      currentIndex === 0 ? backgroundOptions.length - 1 : currentIndex - 1;

    return {
      next: backgroundOptions[nextIndex]?.type || backgroundOptions[0]?.type,
      previous:
        backgroundOptions[prevIndex]?.type || backgroundOptions[0]?.type,
    };
  }, [currentBackground, backgroundOptions]);

  /**
   * Cycle to the next background
   */
  const cycleNext = useCallback(() => {
    const { next } = getAdjacentBackgrounds();
    if (next) {
      changeBackground(next);
    }
  }, [getAdjacentBackgrounds, changeBackground]);

  /**
   * Cycle to the previous background
   */
  const cyclePrevious = useCallback(() => {
    const { previous } = getAdjacentBackgrounds();
    if (previous) {
      changeBackground(previous);
    }
  }, [getAdjacentBackgrounds, changeBackground]);

  /**
   * Get backgrounds filtered by performance impact
   */
  const getBackgroundsByPerformance = useCallback(
    (maxImpact: number = 4) => {
      return backgroundOptions.filter(
        option => (option.performanceImpact || 2) <= maxImpact
      );
    },
    [backgroundOptions]
  );

  /**
   * Check if a background is available
   */
  const isBackgroundAvailable = useCallback(
    (type: BackgroundType) => {
      return backgroundOptions.some(option => option.type === type);
    },
    [backgroundOptions]
  );

  return {
    // Current state
    currentBackground,
    backgroundComponent,
    currentBackgroundInfo,
    isTransitioning,
    nextBackground,

    // Available options
    availableBackgrounds,
    backgroundOptions,

    // Actions
    changeBackground,
    cycleNext,
    cyclePrevious,

    // Utilities
    getAdjacentBackgrounds,
    getBackgroundsByPerformance,
    isBackgroundAvailable,
  };
}
