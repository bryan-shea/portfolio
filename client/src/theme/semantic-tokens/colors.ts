import { defineSemanticTokens } from "@chakra-ui/react";

export const colors = defineSemanticTokens.colors({
  bg: {
    DEFAULT: {
      value: {
        _light: "#fafafa",
        _dark: "{colors.surface.bg}",
      },
    },
    emphasized: {
      value: {
        _light: "gray.50",
        _dark: "{colors.dp.emphasized}",
      },
    },
    error: {
      value: {
        _light: "red.50",
        _dark: "{colors.red.900}",
      },
    },
    info: {
      value: {
        _light: "blue.50",
        _dark: "{colors.primary.900}",
      },
    },
    inverted: {
      value: {
        _light: "{colors.surface.bg}",
        _dark: "white",
      },
    },
    muted: {
      value: {
        _light: "gray.100",
        _dark: "{colors.dp.muted}",
      },
    },
    surface: {
      value: {
        _light: "rgba(255, 255, 255, 0.9)",
        _dark: "{colors.surface.blue}",
      },
    },
    darkmode: {
      value: {
        _light: "rgba(255, 255, 255, 0.9)",
        _dark: "{colors.surface.dark}",
      },
    },
    panel: {
      value: {
        _light: "#fafafa",
        _dark: "{colors.gray.950}",
      },
    },
    overlay: {
      value: {
        _light: "rgba(255, 255, 255, 0.9)",
        _dark: "{colors.overlay.surface}",
      },
    },
    subtle: {
      value: {
        _light: "gray.50",
        _dark: "{colors.dp.subtle}",
      },
    },
    success: {
      value: {
        _light: "green.50",
        _dark: "{colors.green.950}",
      },
    },
    warning: {
      value: {
        _light: "orange.50",
        _dark: "{colors.orange.950}",
      },
    },
  },
  border: {
    DEFAULT: {
      value: {
        _light: "gray.200",
        _dark: "{colors.overlay.blue.dp03}",
      },
    },
    darkmode: {
      value: {
        _light: "gray.200",
        _dark: "{colors.surface.light}",
      },
    },
    emphasized: {
      value: {
        _light: "gray.300",
        _dark: "{colors.overlay.blue.dp06}",
      },
    },
    error: {
      value: {
        _light: "red.300",
        _dark: "{colors.red.500}",
      },
    },
    info: {
      value: {
        _light: "blue.300",
        _dark: "{colors.primary.500}",
      },
    },
    inverted: {
      value: {
        _light: "gray.800",
        _dark: "{colors.overlay.blue.dp02}",
      },
    },
    muted: {
      value: {
        _light: "gray.100",
        _dark: "{colors.gray.900}",
      },
    },
    subtle: {
      value: {
        _light: "gray.100",
        _dark: "{colors.gray.950}",
      },
    },
    success: {
      value: {
        _light: "green.300",
        _dark: "{colors.green.400}",
      },
    },
    warning: {
      value: {
        _light: "orange.300",
        _dark: "{colors.orange.400}",
      },
    },
  },
  fg: {
    DEFAULT: {
      value: {
        _light: "gray.900",
        _dark: "{colors.gray.50}",
      },
    },
    error: {
      value: {
        _light: "red.600",
        _dark: "{colors.red.400}",
      },
    },
    info: {
      value: {
        _light: "blue.600",
        _dark: "{colors.primary.300}",
      },
    },
    inverted: {
      value: {
        _light: "{colors.gray.50}",
        _dark: "{colors.surface.bg}",
      },
    },
    muted: {
      value: {
        _light: "gray.600",
        _dark: "{colors.gray.400}",
      },
    },
    subtle: {
      value: {
        _light: "gray.500",
        _dark: "{colors.gray.500}",
      },
    },
    success: {
      value: {
        _light: "green.600",
        _dark: "{colors.green.300}",
      },
    },
    warning: {
      value: {
        _light: "orange.600",
        _dark: "{colors.orange.300}",
      },
    },
  },
  dp: {
    DEFAULT: {
      value: {
        _light: "rgba(0, 0, 0, 0.05)",
        _dark: "{colors.overlay.blue.dp02}",
      },
    },
    emphasized: {
      value: {
        _light: "rgba(0, 0, 0, 0.1)",
        _dark: "{colors.overlay.blue.dp08}",
      },
    },
    muted: {
      value: {
        _light: "rgba(0, 0, 0, 0.08)",
        _dark: "{colors.overlay.blue.dp06}",
      },
    },
    subtle: {
      value: {
        _light: "rgba(0, 0, 0, 0.03)",
        _dark: "{colors.overlay.blue.dp08}",
      },
    },
    surface: {
      value: {
        _light: "rgba(255, 255, 255, 0.9)",
        _dark: "{colors.overlay.surface}",
      },
    },
  },
});
