import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import { useBackgroundManager } from "../hooks/useStyleManagement";
import { type BackgroundType } from "../components/backgrounds";

/**
 * Background state context interface - for read-only background data
 */
interface BackgroundStateContextType {
  currentBackground: BackgroundType;
}

/**
 * Background actions context interface - for background-related actions
 */
interface BackgroundActionsContextType {
  setCurrentBackground: (background: BackgroundType) => void;
}

/**
 * Separate contexts for state and actions to prevent unnecessary re-renders
 */
const BackgroundStateContext = createContext<
  BackgroundStateContextType | undefined
>(undefined);
const BackgroundActionsContext = createContext<
  BackgroundActionsContextType | undefined
>(undefined);

/**
 * Background provider props
 */
interface BackgroundProviderProps {
  children: ReactNode;
}

/**
 * Optimized background provider component
 * Uses separate contexts for state and actions to minimize re-renders
 */
export const BackgroundProvider: React.FC<BackgroundProviderProps> = ({
  children,
}) => {
  const [currentBackground, setCurrentBackground] =
    useBackgroundManager<BackgroundType>("grid");

  // Separate context values for state and actions
  const stateValue: BackgroundStateContextType = useMemo(
    () => ({
      currentBackground,
    }),
    [currentBackground]
  );

  const actionsValue: BackgroundActionsContextType = useMemo(
    () => ({
      setCurrentBackground,
    }),
    [setCurrentBackground]
  );

  return (
    <BackgroundStateContext.Provider value={stateValue}>
      <BackgroundActionsContext.Provider value={actionsValue}>
        {children}
      </BackgroundActionsContext.Provider>
    </BackgroundStateContext.Provider>
  );
};

/**
 * Hook to use current background (read-only)
 * Only causes re-renders when background changes
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useCurrentBackground = (): BackgroundType => {
  const context = useContext(BackgroundStateContext);
  if (!context) {
    throw new Error(
      "useCurrentBackground must be used within a BackgroundProvider"
    );
  }
  return context.currentBackground;
};

/**
 * Hook to use background actions
 * Doesn't cause re-renders when background changes
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useBackgroundActions = (): BackgroundActionsContextType => {
  const context = useContext(BackgroundActionsContext);
  if (!context) {
    throw new Error(
      "useBackgroundActions must be used within a BackgroundProvider"
    );
  }
  return context;
};

/**
 * Hook to use both background state and actions (backward compatibility)
 * Use useCurrentBackground() and useBackgroundActions() for better performance
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useBackgrounds = (): BackgroundStateContextType &
  BackgroundActionsContextType => {
  const state = useCurrentBackground();
  const actions = useBackgroundActions();
  return useMemo(
    () => ({
      currentBackground: state,
      ...actions,
    }),
    [state, actions]
  );
};
