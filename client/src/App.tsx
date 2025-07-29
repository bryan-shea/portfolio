import { Box, Flex, Button } from "@chakra-ui/react";
import { type ComponentType, useState } from "react";
import { Hero, About, Skills, Projects, Contact, CallToAction } from "./sections";
import { AnimatedSection } from "./components/common";
import { GlobalControls } from "./components/ui";
import {
  BackgroundManager,
  BackgroundShowcase,
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
  { id: "about", component: About, defaultBackground: "grid" },
  { id: "skills", component: Skills, defaultBackground: "waves" },
  { id: "projects", component: Projects, defaultBackground: "orbs" },
  { id: "cta", component: CallToAction, defaultBackground: "network" },
  { id: "contact", component: Contact, defaultBackground: "network" },
];

/**
 * Main portfolio application component
 * Renders all portfolio sections with background options and consistent animations
 */
function App() {
  const [showShowcase, setShowShowcase] = useState(false);
  const [globalBackground, setGlobalBackground] =
    useState<BackgroundType>("none");

  const handleBackgroundChange = (newBackground: BackgroundType) => {
    setGlobalBackground(newBackground);
  };

  if (showShowcase) {
    return (
      <Box as="main" minH="100vh" minW="99vw" bg="bg.default" overflow="hidden">
        <GlobalControls
          currentBackground={globalBackground}
          onBackgroundChange={handleBackgroundChange}
        />
        <Button
          position="fixed"
          top="4"
          left="4"
          onClick={() => setShowShowcase(false)}
          size="sm"
          variant="outline"
          zIndex={1001}
        >
          Back to Portfolio
        </Button>
        <BackgroundShowcase />
      </Box>
    );
  }

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

      {/* Global Controls - Color Mode + Background Selector */}
      <GlobalControls
        currentBackground={globalBackground}
        onBackgroundChange={handleBackgroundChange}
      />

      {/* Showcase Toggle */}
      <Button
        position="fixed"
        top="4"
        left="4"
        onClick={() => setShowShowcase(true)}
        size="sm"
        variant="outline"
        zIndex={1001}
      >
        View All Backgrounds
      </Button>

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
}
export default App;
