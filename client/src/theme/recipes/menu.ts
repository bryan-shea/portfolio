import { defineRecipe } from "@chakra-ui/react";

/**
 * Menu recipe customized for the portfolio's personalized color system
 * Integrates with the blue-focused primary palette and semantic tokens
 */
export const menuRecipe = defineRecipe({
  className: "chakra-menu",
  base: {
    // Menu container styles
    bg: "bg.panel",
    boxShadow: {
      _light: "lg",
      _dark: "0 10px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)"
    },
    color: "fg",
    borderRadius: "md",
    border: "1px solid",
    borderColor: "border.muted",
    overflow: "hidden",
    backdropFilter: "blur(8px)",
    minW: "200px",
    py: "2",

    // Menu items
    "& .chakra-menu__item": {
      display: "flex",
      alignItems: "center",
      width: "100%",
      px: "3",
      py: "2",
      fontSize: "sm",
      fontWeight: "medium",
      color: "fg",
      cursor: "pointer",
      transition: "all 0.15s ease",
      borderRadius: "sm",
      mx: "1",

      _hover: {
        bg: {
          _light: "primary.50",
          _dark: "primary.900/20"
        },
        color: {
          _light: "primary.700",
          _dark: "primary.200"
        }
      },

      _active: {
        bg: {
          _light: "primary.100",
          _dark: "primary.800/30"
        },
        color: {
          _light: "primary.800",
          _dark: "primary.100"
        }
      },

      _focus: {
        bg: {
          _light: "primary.50",
          _dark: "primary.900/20"
        },
        boxShadow: "0 0 0 2px var(--chakra-colors-primary-500)",
        outline: "none"
      },

      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
        _hover: {
          bg: "transparent",
          color: "fg.muted"
        }
      }
    },

    // Menu item text
    "& .chakra-menu__item-text": {
      flex: "1",
    },

    // Menu item icon
    "& .chakra-menu__item-icon": {
      mr: "2",
      color: "primary.500",
    },

    // Menu item command
    "& .chakra-menu__item-command": {
      opacity: 0.7,
      fontSize: "xs",
      ml: "auto",
      pl: "3",
      letterSpacing: "wide",
      fontFamily: "mono",
      color: "fg.subtle",
      bg: {
        _light: "gray.100",
        _dark: "gray.800"
      },
      px: "1.5",
      py: "0.5",
      borderRadius: "xs",
    },

    // Menu group label
    "& .chakra-menu__group-label": {
      px: "3",
      py: "2",
      fontSize: "xs",
      fontWeight: "semibold",
      color: "fg.muted",
      textTransform: "uppercase",
      letterSpacing: "wider",
      borderBottom: "1px solid",
      borderColor: "border.muted",
      bg: {
        _light: "gray.50",
        _dark: "gray.900/50"
      }
    },

    // Menu separator
    "& .chakra-menu__separator": {
      height: "1px",
      bg: "border.muted",
      my: "1",
    },

    // Menu indicator (for checkboxes/radio)
    "& .chakra-menu__indicator": {
      mr: "2",
      color: "primary.500",
      fontSize: "sm"
    }
  },

  variants: {
    variant: {
      subtle: {
        "& .chakra-menu__item": {
          _highlighted: {
            bg: {
              _light: "primary.50",
              _dark: "primary.900/25"
            },
            color: {
              _light: "primary.700",
              _dark: "primary.200"
            }
          },
        },
      },
      solid: {
        "& .chakra-menu__item": {
          _highlighted: {
            bg: "primary.500",
            color: "white",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          },
        },
      },
      ghost: {
        "& .chakra-menu__item": {
          _highlighted: {
            bg: "transparent",
            color: "primary.500",
            boxShadow: "inset 3px 0 0 var(--chakra-colors-primary-500)",
          },
        },
      },
    },

    size: {
      sm: {
        minW: "160px",
        py: "1",

        "& .chakra-menu__item": {
          px: "2",
          py: "1",
          fontSize: "xs",
        },

        "& .chakra-menu__group-label": {
          px: "2",
          py: "1",
          fontSize: "2xs",
        }
      },
      md: {
        minW: "200px",
        py: "2",

        "& .chakra-menu__item": {
          px: "3",
          py: "2",
          fontSize: "sm",
        },

        "& .chakra-menu__group-label": {
          px: "3",
          py: "2",
          fontSize: "xs",
        }
      },
      lg: {
        minW: "240px",
        py: "3",

        "& .chakra-menu__item": {
          px: "4",
          py: "2.5",
          fontSize: "md",
        },

        "& .chakra-menu__group-label": {
          px: "4",
          py: "2.5",
          fontSize: "sm",
        }
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "subtle",
  },
});