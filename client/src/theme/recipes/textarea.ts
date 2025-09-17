import { defineRecipe } from "@chakra-ui/react";

export const textareaRecipe = defineRecipe({
  className: "chakra-textarea",
  base: {
    width: "100%",
    minWidth: "0",
    outline: "0",
    position: "relative",
    appearance: "none",
    textAlign: "start",
    borderRadius: "l2",
    _disabled: {
      layerStyle: "disabled",
    },
    "--focus-color": "colors.colorPalette.focusRing",
    "--error-color": "colors.border.error",
    _invalid: {
      focusRingColor: "var(--error-color)",
      borderColor: "var(--error-color)",
    },
  },
  variants: {
    size: {
      xs: {
        textStyle: "xs",
        px: "2",
        py: "1.5",
        scrollPaddingBottom: "1.5",
      },
      sm: {
        textStyle: "sm",
        px: "2.5",
        py: "2",
        scrollPaddingBottom: "2",
      },
      md: {
        textStyle: "sm",
        px: "3",
        py: "2",
        scrollPaddingBottom: "2",
      },
      lg: {
        textStyle: "md",
        px: "4",
        py: "3",
        scrollPaddingBottom: "3",
      },
      xl: {
        textStyle: "md",
        px: "4.5",
        py: "3.5",
        scrollPaddingBottom: "3.5",
      },
    },

    variant: {
      outline: {
        bg: "transparent",
        borderWidth: "1px",
        borderColor: "overlay.white.dp12",
        focusVisibleRing: "inside",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});
