"use client";

import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  Portal,
  Button,
  Icon,
  Text,
} from "@chakra-ui/react";
import { LuGithub, LuMenu, LuPalette, LuChevronDown } from "react-icons/lu";
import { ColorModeButton } from "../../ui";
import { navigationSections } from "../../../config/navigation.data";
import { type BackgroundType } from "../../backgrounds";

/**
 * Props for Navbar component
 */
interface NavbarProps {
  /** Current background type */
  currentBackground?: BackgroundType;
  /** Callback when background changes */
  onBackgroundChange?: (background: BackgroundType) => void;
  /** Currently active section ID */
  activeSection?: string;
}

export const Navbar = ({
  currentBackground = "none",
  onBackgroundChange,
  activeSection,
}: NavbarProps) => {
  /**
   * Available background options for the dropdown
   */
  const backgroundOptions = [
    { type: "particles" as BackgroundType, name: "Particles", icon: "" },
    { type: "dots" as BackgroundType, name: "Dots", icon: "" },
    { type: "shapes" as BackgroundType, name: "Shapes", icon: "" },
    { type: "grid" as BackgroundType, name: "Grid", icon: "" },
    { type: "orbs" as BackgroundType, name: "Orbs", icon: "" },
    { type: "network" as BackgroundType, name: "Network", icon: "" },
  ];

  const currentOption =
    backgroundOptions.find(option => option.type === currentBackground) ||
    backgroundOptions[0];

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
            <Menu.Root
              positioning={{
                placement: "bottom-end",
                sameWidth: false,
                offset: { mainAxis: 4 },
              }}
            >
              <Menu.Trigger asChild>
                <Button size="sm" variant="outline" colorPalette="gray">
                  <Icon as={LuPalette} />
                  <Text fontSize="sm">
                    {currentOption.icon} {currentOption.name}
                  </Text>
                  <Icon as={LuChevronDown} />
                </Button>
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
                    minW="160px"
                  >
                    {backgroundOptions.map(option => (
                      <Menu.Item
                        key={option.type}
                        value={option.type}
                        onClick={() => onBackgroundChange?.(option.type)}
                        cursor="pointer"
                        _hover={{ bg: "bg.muted" }}
                      >
                        <HStack>
                          <Text fontSize="sm">{option.icon}</Text>
                          <Text fontSize="sm">{option.name}</Text>
                        </HStack>
                      </Menu.Item>
                    ))}
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <GitHubButton />
            <ColorModeButton size="xs" />
          </HStack>
          <MobileNav
            scrollToSection={scrollToSection}
            onBackgroundChange={onBackgroundChange}
            backgroundOptions={backgroundOptions}
            activeSection={activeSection}
          />
        </Flex>
      </Container>
    </Box>
  );
};

interface MobileNavProps {
  scrollToSection: (sectionId: string) => void;
  onBackgroundChange?: (background: BackgroundType) => void;
  backgroundOptions: Array<{
    type: BackgroundType;
    name: string;
    icon: string;
  }>;
  activeSection?: string;
}

const MobileNav = ({
  scrollToSection,
  onBackgroundChange,
  backgroundOptions,
  activeSection,
}: MobileNavProps) => {
  return (
    <HStack as="nav" hideFrom="lg">
      <Menu.Root
        positioning={{
          placement: "bottom-end",
          sameWidth: false,
          offset: { mainAxis: 4 },
        }}
      >
        <Menu.Trigger asChild>
          <IconButton
            size="xs"
            variant="ghost"
            aria-label="Background"
            colorPalette="gray"
          >
            <Icon as={LuPalette} />
          </IconButton>
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
              minW="160px"
            >
              {backgroundOptions.map(option => (
                <Menu.Item
                  key={option.type}
                  value={option.type}
                  onClick={() => onBackgroundChange?.(option.type)}
                  cursor="pointer"
                  _hover={{ bg: "bg.muted" }}
                >
                  <HStack>
                    <Text fontSize="sm">{option.icon}</Text>
                    <Text fontSize="sm">{option.name}</Text>
                  </HStack>
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
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
