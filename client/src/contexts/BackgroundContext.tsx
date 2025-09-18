import { useMemo } from "react";
import type { ReactNode } from "react";
import { useBackgroundManager } from "../hooks";
import { type BackgroundType } from "../components/backgrounds";
import {
  BackgroundContext,
  type BackgroundContextType,
} from "./background.context";

/**
 * Background provider props
 */
interface BackgroundProviderProps {
  children: ReactNode;
}

/**
 * Background provider component
 * Manages global background state throughout the application
 */
export const BackgroundProvider: React.FC<BackgroundProviderProps> = ({
  children,
}) => {
  const [currentBackground, setCurrentBackground] =
    useBackgroundManager<BackgroundType>("grid");

  const contextValue: BackgroundContextType = useMemo(
    () => ({
      currentBackground,
      setCurrentBackground,
    }),
    [currentBackground, setCurrentBackground]
  );

  return (
    <BackgroundContext.Provider value={contextValue}>
      {children}
    </BackgroundContext.Provider>
  );
};
