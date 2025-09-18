"use client";

import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Button,
  Icon,
  Text,
  Menu,
  Portal,
} from "@chakra-ui/react";
import { LuGithub, LuMenu, LuSettings2 } from "react-icons/lu";
import { ColorModeButton } from "../../ui";
import { PersonalizeDrawer } from "../../ui/PersonalizeDrawer";
import { navigationSections } from "../../../config/navigation.data";
import { useState } from "react";

/**
 * Props for Navbar component
 */
interface NavbarProps {
  /** Currently active section ID */
  activeSection?: string;
}

export const Navbar = ({ activeSection }: NavbarProps) => {
  // State for PersonalizeDrawer
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);

  /**
   * Scroll to a specific section smoothly
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      top="0"
      width="full"
      zIndex="30"
      position="fixed"
      borderBottomWidth="1px"
      borderColor="border.muted"
      bg={{
        _light: "white/90",
        _dark: "gray.900/90",
      }}
      backdropFilter="blur(10px)"
    >
      <Container maxW="8xl">
        <Flex height="16" align="center" gap="4" minW={0}>
          <HStack as="nav" flex="1" gap="8">
            <HStack hideBelow="lg" gap="8">
              {navigationSections.map(section => {
                const isActive = section.id === activeSection;
                return (
                  <Link
                    key={section.id}
                    textStyle="sm"
                    color={isActive ? "fg" : "fg.muted"}
                    fontWeight={isActive ? "semibold" : "normal"}
                    cursor="pointer"
                    onClick={() => scrollToSection(section.id)}
                    _hover={{ color: "fg", textDecoration: "none" }}
                    transition="all 0.4s ease-out"
                  >
                    {section.name}
                  </Link>
                );
              })}
            </HStack>
          </HStack>

          <HStack hideBelow="lg" align="center" justify="flex-end">
            <Button
              size="sm"
              variant="outline"
              colorPalette="gray"
              onClick={() => setIsPersonalizeOpen(true)}
            >
              <Icon as={LuSettings2} />
              <Text fontSize="sm">Personalize</Text>
            </Button>
            <GitHubButton />
            <ColorModeButton size="xs" />
          </HStack>
          <MobileNav
            scrollToSection={scrollToSection}
            activeSection={activeSection}
            onPersonalizeOpen={() => setIsPersonalizeOpen(true)}
          />
        </Flex>
      </Container>

      {/* PersonalizeDrawer */}
      <PersonalizeDrawer
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
      />
    </Box>
  );
};

interface MobileNavProps {
  scrollToSection: (sectionId: string) => void;
  activeSection?: string;
  onPersonalizeOpen: () => void;
}

const MobileNav = ({
  scrollToSection,
  activeSection,
  onPersonalizeOpen,
}: MobileNavProps) => {
  return (
    <HStack as="nav" hideFrom="lg">
      <IconButton
        size="xs"
        variant="ghost"
        aria-label="Personalize"
        colorPalette="gray"
        onClick={onPersonalizeOpen}
      >
        <Icon as={LuSettings2} />
      </IconButton>
      <GitHubButton />
      <ColorModeButton size="xs" />
      <Menu.Root
        positioning={{
          placement: "bottom",
          overflowPadding: 0,
          offset: { mainAxis: 17 },
        }}
      >
        <Menu.Trigger asChild>
          <IconButton
            aria-label="Navigation menu"
            variant="ghost"
            size="xs"
            colorPalette="gray"
          >
            <LuMenu />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content
              _open={{ animation: "backdrop-in" }}
              _closed={{ animation: "backdrop-out" }}
              boxShadow="none"
              borderRadius="none"
              bg="bg.canvas"
              maxW="unset"
              px={{ base: "4", md: "6" }}
              width="var(--available-width)"
              height="var(--available-height)"
              alignItems="center"
              py="6"
            >
              {navigationSections.map(section => {
                const isActive = section.id === activeSection;
                return (
                  <Menu.Item
                    key={section.id}
                    value={section.id}
                    onClick={() => scrollToSection(section.id)}
                    color={isActive ? "fg" : "fg.muted"}
                    fontWeight={isActive ? "semibold" : "normal"}
                    _hover={{ color: "fg" }}
                    transition="all 0.4s ease-out"
                  >
                    {section.name}
                  </Menu.Item>
                );
              })}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </HStack>
  );
};

const GitHubButton = () => {
  return (
    <IconButton
      asChild
      variant="ghost"
      size="xs"
      aria-label="GitHub"
      colorPalette="gray"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/bryan-shea/portfolio"
      >
        <LuGithub />
      </a>
    </IconButton>
  );
};
