import { Box, Flex } from "@chakra-ui/react";
import { type ComponentType, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero, Skills, Projects, Journey } from "./sections";
import { BackgroundsPage } from "./pages";
import { AnimatedSection } from "./components/common";
import { GlobalControls } from "./components/ui";
import { useColors, type ColorScheme } from "./contexts";
import {
  BackgroundManager,
  type BackgroundType,
} from "./components/backgrounds";

/**
 * Configuration interface for portfolio sections
 */
interface SectionConfig {
  /** Unique identifier for the section */
  id: string;
  /** React component to render */
  component: ComponentType;
  /** Default background type for this section */
  defaultBackground: BackgroundType;
}

/**
 * Portfolio sections configuration
 * Centralizes section management for better maintainability
 */
const PORTFOLIO_SECTIONS: SectionConfig[] = [
  { id: "hero", component: Hero, defaultBackground: "particles" },
  { id: "skills", component: Skills, defaultBackground: "lines" },
  { id: "projects", component: Projects, defaultBackground: "orbs" },
  { id: "journey", component: Journey, defaultBackground: "dots" },
];

/**
 * Main portfolio component
 * Renders all portfolio sections with background options and consistent animations
 */
const Portfolio = () => {
  const [globalBackground, setGlobalBackground] =
    useState<BackgroundType>("none");
  const { colorScheme, setColorScheme } = useColors();

  const handleBackgroundChange = (newBackground: BackgroundType) => {
    setGlobalBackground(newBackground);
  };

  const handleColorsChange = (colors: ColorScheme) => {
    setColorScheme(colors);
  };

  return (
    <Box
      as="main"
      minH="100vh"
      minW="99vw"
      bg="bg.default"
      overflow="hidden"
      position="relative"
    >
      {/* Global Background - positioned first so it appears behind content */}
      <BackgroundManager
        key={globalBackground} // Force re-render when background changes
        initialBackground={globalBackground}
        showSelector={false}
      />

      {/* Global Controls - Color Mode + Background Selector + Personalization */}
      <GlobalControls
        currentBackground={globalBackground}
        onBackgroundChange={handleBackgroundChange}
        currentColors={colorScheme}
        onColorsChange={handleColorsChange}
      />

      {PORTFOLIO_SECTIONS.map(({ id, component: Component }) => (
        <Flex
          key={id}
          id={id}
          w="full"
          minW="100vw"
          mt={20}
          justifyContent="center"
          position="relative"
        >
          <AnimatedSection key={id}>
            <Component />
          </AnimatedSection>
        </Flex>
      ))}
    </Box>
  );
};

/**
 * Main application component with routing
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/backgrounds" element={<BackgroundsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
