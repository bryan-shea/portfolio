import { useContext } from "react";
import {
  BackgroundContext,
  type BackgroundContextType,
} from "../contexts/background.context";

/**
 * Hook to use background context
 * Provides access to background state and controls
 */
export const useBackgrounds = (): BackgroundContextType => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackgrounds must be used within a BackgroundProvider");
  }
  return context;
};
