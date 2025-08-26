"use client";

import type { ButtonProps, SquareProps } from "@chakra-ui/react";
import {
  Badge,
  Button,
  HStack,
  Icon,
  Menu,
  Portal,
  Square,
  Text,
  VStack,
  Box,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  LuCheck,
  LuChevronsUpDown,
  LuUser,
  LuCode,
  LuFolderOpen,
  LuMapPin,
  LuMenu,
} from "react-icons/lu";
import { motion } from "framer-motion";

/**
 * Navigation section interface
 */
interface NavigationSection {
  /** Unique identifier for the section */
  id: string;
  /** Display name of the section */
  name: string;
  /** Icon component for the section */
  icon: React.ReactElement;
  /** Brief description of the section */
  description: string;
}

/**
 * Portfolio sections data for navigation
 */
const portfolioSections: NavigationSection[] = [
  {
    id: "navigation-placeholder",
    name: "Navigation",
    icon: <LuChevronsUpDown />,
    description: "Scroll to any section",
  },
  {
    id: "hero",
    name: "About Me",
    icon: <LuUser />,
    description: "Introduction & overview",
  },
  {
    id: "skills",
    name: "Skills",
    icon: <LuCode />,
    description: "Technical expertise",
  },
  {
    id: "projects",
    name: "Projects",
    icon: <LuFolderOpen />,
    description: "Featured work",
  },
  {
    id: "journey",
    name: "Journey",
    icon: <LuMapPin />,
    description: "Professional timeline",
  },
];

/**
 * Navigation menu component
 * Provides fixed navigation to different portfolio sections
 * Responsive design: full button on desktop, compact icon on mobile
 */
export const NavigationMenu = () => {
  // Filter out placeholder from selectable sections
  const selectableSections = portfolioSections.filter(
    (section) => section.id !== "navigation-placeholder"
  );

  const [selectedSectionId, setSelectedSectionId] = useState<string>(
    "navigation-placeholder"
  );

  // Always show Navigation as the main section, but track which section is in view
  const selectedSection = {
    id: "navigation",
    name: "Navigation",
    icon: <LuChevronsUpDown />,
    description: "Scroll to sections",
  };

  // Get the current section for badge display
  const currentSection = portfolioSections.find(
    (section) => section.id === selectedSectionId
  );

  // Responsive trigger: full button on md+, compact on mobile
  const isMobile = useBreakpointValue({ base: true, md: false });

  /**
   * Scroll to a specific section
   */
  const scrollToSection = (sectionId: string) => {
    // Skip scrolling for placeholder section
    if (sectionId === "navigation-placeholder") {
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setSelectedSectionId(sectionId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: -20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      <Box position="fixed" top="4" left="4" zIndex="1000">
        <Menu.Root
          positioning={{
            placement: "bottom-start",
            sameWidth: false,
            offset: { mainAxis: 4, crossAxis: 8 },
          }}
        >
          <Menu.Trigger asChild>
            {isMobile ? (
              <MobileNavigationTrigger section={selectedSection} />
            ) : (
              <SelectedSectionButton
                section={selectedSection}
                currentSection={currentSection}
              />
            )}
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content
                bg={{
                  _light: "white/95",
                  _dark: "gray.900/95",
                }}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor={{
                  _light: "gray.200",
                  _dark: "gray.700",
                }}
                boxShadow="lg"
                minW={isMobile ? "280px" : "320px"}
              >
                {selectableSections.map((section) => (
                  <SectionMenuItem
                    key={section.id}
                    section={section}
                    selectedId={selectedSectionId}
                    onSelect={() => scrollToSection(section.id)}
                    isMobile={isMobile}
                  />
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Box>
    </motion.div>
  );
};

/**
 * Section icon component
 */
const SectionIcon = (props: SquareProps & { children: React.ReactNode }) => {
  return (
    <Square
      bg={{
        _light: "gray.50",
        _dark: "gray.800",
      }}
      color={{
        _light: "gray.600",
        _dark: "gray.400",
      }}
      size="8"
      rounded="md"
      {...props}
    />
  );
};

/**
 * Props for section menu item
 */
interface SectionMenuItemProps extends Omit<Menu.ItemProps, "value"> {
  section: NavigationSection;
  selectedId: string;
  onSelect: () => void;
  isMobile?: boolean;
}

/**
 * Section menu item component
 */
const SectionMenuItem = (props: SectionMenuItemProps) => {
  const { section, selectedId, onSelect, isMobile, ...rest } = props;

  return (
    <Menu.Item
      {...rest}
      value={section.id}
      onClick={onSelect}
      _hover={{
        bg: {
          _light: "gray.50",
          _dark: "gray.800",
        },
      }}
      py={isMobile ? "3" : "2"}
    >
      <HStack gap="3" flex="1">
        <SectionIcon size={isMobile ? "10" : "8"}>
          <Icon boxSize={isMobile ? "5" : "4"}>{section.icon}</Icon>
        </SectionIcon>
        <VStack gap="0" align="start" flex="1">
          <Text fontWeight="medium" textStyle={isMobile ? "md" : "sm"}>
            {section.name}
          </Text>
          {!isMobile && (
            <Text textStyle="xs" color="fg.muted">
              {section.description}
            </Text>
          )}
        </VStack>
      </HStack>
      {selectedId === section.id && (
        <Icon color="gray.500">
          <LuCheck />
        </Icon>
      )}
    </Menu.Item>
  );
};

/**
 * Props for mobile navigation trigger
 */
interface MobileNavigationTriggerProps extends ButtonProps {
  section: NavigationSection;
}

/**
 * Mobile navigation trigger component
 * Compact version for mobile devices - shows only navigation icon
 */
const MobileNavigationTrigger = (props: MobileNavigationTriggerProps) => {
  const { section, ...rest } = props;

  return (
    <IconButton
      variant="outline"
      colorPalette="gray"
      size="lg"
      bg={{
        _light: "white/90",
        _dark: "gray.900/90",
      }}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={{
        _light: "gray.200",
        _dark: "gray.700",
      }}
      boxShadow="lg"
      _hover={{
        bg: {
          _light: "white",
          _dark: "gray.900",
        },
      }}
      {...rest}
    >
      <Icon boxSize="5">
        <LuMenu />
      </Icon>
    </IconButton>
  );
};

/**
 * Props for selected section button
 */
interface SelectedSectionButtonProps extends ButtonProps {
  section: NavigationSection;
  currentSection?: NavigationSection;
}

/**
 * Selected section button component
 */
const SelectedSectionButton = (props: SelectedSectionButtonProps) => {
  const { section, currentSection, ...rest } = props;

  return (
    <Button
      variant="outline"
      colorPalette="gray"
      h="14"
      ps="3"
      bg={{
        _light: "white/90",
        _dark: "gray.900/90",
      }}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={{
        _light: "gray.200",
        _dark: "gray.700",
      }}
      boxShadow="lg"
      _hover={{
        bg: {
          _light: "white",
          _dark: "gray.900",
        },
      }}
      {...rest}
    >
      <HStack gap="2">
        <SectionIcon size="10">
          <Icon boxSize="5">{section.icon}</Icon>
        </SectionIcon>
        <VStack gap="0" align="start">
          <HStack gap="2">
            <Text fontWeight="semibold" textStyle="sm">
              {section.name}
            </Text>
            <Badge
              size="xs"
              variant="surface"
              colorPalette="gray"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              {currentSection?.id === "navigation-placeholder"
                ? "Navigation"
                : currentSection?.name || "Navigation"}
            </Badge>
          </HStack>
          <Text textStyle="xs" color="fg.muted">
            {section.description}
          </Text>
        </VStack>
      </HStack>
      <Icon color="fg.subtle" ms="2" size="sm">
        <LuChevronsUpDown />
      </Icon>
    </Button>
  );
};
