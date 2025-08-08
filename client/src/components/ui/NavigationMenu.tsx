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
} from "@chakra-ui/react";
import { useState } from "react";
import {
  LuCheck,
  LuChevronsUpDown,
  LuUser,
  LuCode,
  LuFolderOpen,
  LuMapPin,
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
 */
export const NavigationMenu = () => {
  const [selectedSectionId, setSelectedSectionId] = useState<string>(
    portfolioSections[0].id
  );
  const selectedSection =
    portfolioSections.find((section) => section.id === selectedSectionId) ||
    portfolioSections[0];

  /**
   * Scroll to a specific section
   */
  const scrollToSection = (sectionId: string) => {
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
        <Menu.Root positioning={{ placement: "bottom-start", sameWidth: true }}>
          <Menu.Trigger asChild>
            <SelectedSectionButton section={selectedSection} />
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
              >
                {portfolioSections.map((section) => (
                  <SectionMenuItem
                    key={section.id}
                    section={section}
                    selectedId={selectedSectionId}
                    onSelect={() => scrollToSection(section.id)}
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
        _light: "blue.50",
        _dark: "blue.900/30",
      }}
      color={{
        _light: "blue.600",
        _dark: "blue.400",
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
}

/**
 * Section menu item component
 */
const SectionMenuItem = (props: SectionMenuItemProps) => {
  const { section, selectedId, onSelect, ...rest } = props;

  return (
    <Menu.Item
      {...rest}
      value={section.id}
      onClick={onSelect}
      _hover={{
        bg: {
          _light: "blue.50",
          _dark: "blue.900/30",
        },
      }}
    >
      <HStack gap="3" flex="1">
        <SectionIcon>
          <Icon boxSize="4">{section.icon}</Icon>
        </SectionIcon>
        <VStack gap="0" align="start" flex="1">
          <Text fontWeight="medium" textStyle="sm">
            {section.name}
          </Text>
          <Text textStyle="xs" color="fg.muted">
            {section.description}
          </Text>
        </VStack>
      </HStack>
      {selectedId === section.id && (
        <Icon color="blue.500">
          <LuCheck />
        </Icon>
      )}
    </Menu.Item>
  );
};

/**
 * Props for selected section button
 */
interface SelectedSectionButtonProps extends ButtonProps {
  section: NavigationSection;
}

/**
 * Selected section button component
 */
const SelectedSectionButton = (props: SelectedSectionButtonProps) => {
  const { section, ...rest } = props;

  return (
    <Button
      variant="outline"
      colorPalette="blue"
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
              colorPalette="blue"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Section
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
