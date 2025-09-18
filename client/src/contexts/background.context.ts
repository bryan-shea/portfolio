import { createContext } from "react";
import { type BackgroundType } from "../components/backgrounds";

/**
 * Background context interface
 */
export interface BackgroundContextType {
  currentBackground: BackgroundType;
  setCurrentBackground: (background: BackgroundType) => void;
}

/**
 * Background context
 */
export const BackgroundContext = createContext<
  BackgroundContextType | undefined
>(undefined);
