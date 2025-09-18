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
  LuPalette,
  LuImage,
  LuSettings,
  LuCheck,
  LuChevronsUpDown,
  LuSun,
  LuMoon,
} from "react-icons/lu";
import { useColorMode } from "./color-mode";
import { PersonalizeDrawer } from "./PersonalizeDrawer";
import { BackgroundSelector } from "./BackgroundSelector";
import { type BackgroundType } from "../backgrounds";
import { motion } from "framer-motion";

/**
 * Props for GlobalControls component
 */
interface GlobalControlsProps {
  /** Current background type */
  currentBackground: BackgroundType;
  /** Callback when background changes */
  onBackgroundChange: (background: BackgroundType) => void;
}

/**
 * Control action interface
 */
interface ControlAction {
  /** Unique identifier for the action */
  id: string;
  /** Display name of the action */
  name: string;
  /** Icon component for the action */
  icon: React.ReactElement;
  /** Brief description of the action */
  description: string;
  /** Action to execute */
  action: () => void;
}

/**
 * Global controls component
 * Provides menu-based access to theme, background, and personalization controls
 * Responsive design: full button on desktop, compact icon on mobile
 */
export const GlobalControls: React.FC<GlobalControlsProps> = ({
  currentBackground,
  onBackgroundChange,
}) => {
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);
  const [isBackgroundSelectorOpen, setIsBackgroundSelectorOpen] =
    useState(false);
  const [selectedActionId, setSelectedActionId] = useState<string>("settings");
  const { toggleColorMode, colorMode } = useColorMode();

  // Responsive trigger: full button on md+, compact on mobile
  const isMobile = useBreakpointValue({ base: true, md: false });

  /**
   * Available control actions
   */
  const controlActions: ControlAction[] = [
    {
      id: "theme",
      name: "Toggle Theme",
      icon: colorMode === "light" ? <LuMoon /> : <LuSun />,
      description: `Switch to ${colorMode === "light" ? "dark" : "light"} mode`,
      action: () => {
        toggleColorMode();
        setSelectedActionId("theme");
      },
    },
    {
      id: "background",
      name: "Background",
      icon: <LuImage />,
      description: "Choose background style",
      action: () => {
        setIsBackgroundSelectorOpen(true);
        setSelectedActionId("background");
      },
    },
    {
      id: "personalize",
      name: "Personalize",
      icon: <LuPalette />,
      description: "Customize colors",
      action: () => {
        setIsPersonalizeOpen(true);
        setSelectedActionId("personalize");
      },
    },
  ];

  const selectedAction = controlActions.find(
    action => action.id === selectedActionId
  );

  // Always show Settings as the main action, but track which action was last used
  const displayAction = {
    id: "settings",
    name: "Settings",
    icon: <LuSettings />,
    description: "Global controls",
    action: () => {},
  };

  // Get the current action for badge display
  const currentAction = selectedAction;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <Box position="fixed" top="4" right="4" zIndex="1000">
          <Menu.Root
            positioning={{
              placement: "bottom-end",
              sameWidth: false,
              offset: { mainAxis: 4, crossAxis: -8 },
            }}
          >
            <Menu.Trigger asChild>
              {isMobile ? (
                <MobileControlsTrigger action={displayAction} />
              ) : (
                <SelectedActionButton
                  action={displayAction}
                  currentAction={currentAction}
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
                  minW={isMobile ? "260px" : "300px"}
                >
                  {controlActions.map(action => (
                    <ActionMenuItem
                      key={action.id}
                      action={action}
                      selectedId={selectedActionId}
                      onSelect={action.action}
                      isMobile={isMobile}
                    />
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Box>
      </motion.div>

      {/* Background Selector Modal */}
      <BackgroundSelector
        currentBackground={currentBackground}
        onBackgroundChange={onBackgroundChange}
        isOpen={isBackgroundSelectorOpen}
        onClose={() => setIsBackgroundSelectorOpen(false)}
      />

      {/* Personalize Panel */}
      <PersonalizeDrawer
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
      />
    </>
  );
};

/**
 * Action icon component
 */
const ActionIcon = (props: SquareProps & { children: React.ReactNode }) => {
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
 * Props for action menu item
 */
interface ActionMenuItemProps extends Omit<Menu.ItemProps, "value"> {
  action: ControlAction;
  selectedId: string;
  onSelect: () => void;
  isMobile?: boolean;
}

/**
 * Action menu item component
 */
const ActionMenuItem = (props: ActionMenuItemProps) => {
  const { action, selectedId, onSelect, isMobile, ...rest } = props;

  return (
    <Menu.Item
      {...rest}
      value={action.id}
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
        <ActionIcon size={isMobile ? "10" : "8"}>
          <Icon boxSize={isMobile ? "5" : "4"}>{action.icon}</Icon>
        </ActionIcon>
        <VStack gap="0" align="start" flex="1">
          <Text fontWeight="medium" textStyle={isMobile ? "md" : "sm"}>
            {action.name}
          </Text>
          {!isMobile && (
            <Text textStyle="xs" color="fg.muted">
              {action.description}
            </Text>
          )}
        </VStack>
      </HStack>
      {selectedId === action.id && (
        <Icon color="gray.500">
          <LuCheck />
        </Icon>
      )}
    </Menu.Item>
  );
};

/**
 * Props for mobile controls trigger
 */
interface MobileControlsTriggerProps extends ButtonProps {
  action: ControlAction;
}

/**
 * Mobile controls trigger component
 * Compact version for mobile devices - shows only settings icon
 */
const MobileControlsTrigger = (props: MobileControlsTriggerProps) => {
  const { action, ...rest } = props;

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
      <Icon boxSize="5">{action.icon}</Icon>
    </IconButton>
  );
};

/**
 * Props for selected action button
 */
interface SelectedActionButtonProps extends ButtonProps {
  action: ControlAction;
  currentAction?: ControlAction;
}

/**
 * Selected action button component
 */
const SelectedActionButton = (props: SelectedActionButtonProps) => {
  const { action, currentAction, ...rest } = props;

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
        <ActionIcon size="10">
          <Icon boxSize="5">{action.icon}</Icon>
        </ActionIcon>
        <VStack gap="0" align="start">
          <HStack gap="2">
            <Text fontWeight="semibold" textStyle="sm">
              {action.name}
            </Text>
            <Badge
              size="xs"
              variant="surface"
              colorPalette="gray"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              {currentAction?.name || "Control"}
            </Badge>
          </HStack>
          <Text textStyle="xs" color="fg.muted">
            {action.description}
          </Text>
        </VStack>
      </HStack>
      <Icon color="fg.subtle" ms="2" size="sm">
        <LuChevronsUpDown />
      </Icon>
    </Button>
  );
};
