import { Box } from "@chakra-ui/react";
import { type ComponentType } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Hero, Projects, Journey } from "./sections";
import { AnimatedSection, Navbar, Footer } from "./components/common";
import {
  BackgroundManager,
  type BackgroundType,
} from "./components/backgrounds";
import { useActiveSection, useBackgrounds } from "./hooks";

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
  { id: "projects", component: Projects, defaultBackground: "orbs" },
  { id: "journey", component: Journey, defaultBackground: "dots" },
];

/**
 * Main portfolio component
 * Renders all portfolio sections with background options and consistent animations
 */
const Portfolio = () => {
  const { currentBackground } = useBackgrounds();

  // Track which section is currently active based on scroll position
  const sectionIds = PORTFOLIO_SECTIONS.map(section => section.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <Box as="main" minH="100vh" w="full" bg="bg.default" position="relative">
      {/* Global Background - positioned first so it appears behind content */}
      <BackgroundManager
        initialBackground={currentBackground}
        showSelector={false}
      />

      {/* Navbar - Fixed position navigation with all controls */}
      <Navbar activeSection={activeSection} />

      {PORTFOLIO_SECTIONS.map(({ id, component: Component }, index) => (
        <Box
          key={id}
          id={id}
          w="full"
          py={
            index === 0
              ? { base: "0", md: "0" }
              : { base: "6", md: "12", lg: "24" }
          }
          position="relative"
        >
          <AnimatedSection key={id}>
            <Component />
          </AnimatedSection>
        </Box>
      ))}

      {/* Footer - Positioned at the bottom of all sections */}
      <Footer />
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
      </Routes>
    </Router>
  );
}

export default App;
