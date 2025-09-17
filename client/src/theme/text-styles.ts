import { defineTextStyles } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
  "2xs": {
    value: {
      fontSize: "2xs",
      lineHeight: "0.75rem",
    },
  },
  xs: {
    value: {
      fontSize: "xs",
      lineHeight: "1rem",
    },
  },
  sm: {
    value: {
      fontSize: "sm",
      lineHeight: "1.25rem",
    },
  },
  md: {
    value: {
      fontSize: "md",
      lineHeight: "1.5rem",
    },
  },
  lg: {
    value: {
      fontSize: "lg",
      lineHeight: "1.75rem",
    },
  },
  xl: {
    value: {
      fontSize: "xl",
      lineHeight: "1.875rem",
    },
  },
  "2xl": {
    value: {
      fontSize: "2xl",
      lineHeight: "2rem",
    },
  },
  "3xl": {
    value: {
      fontSize: "3xl",
      lineHeight: "2.375rem",
    },
  },
  "4xl": {
    value: {
      fontSize: "4xl",
      lineHeight: "2.75rem",
      letterSpacing: "-0.025em",
    },
  },
  "5xl": {
    value: {
      fontSize: "5xl",
      lineHeight: "3.75rem",
      letterSpacing: "-0.025em",
    },
  },
  "6xl": {
    value: {
      fontSize: "6xl",
      lineHeight: "4.5rem",
      letterSpacing: "-0.025em",
    },
  },
  "7xl": {
    value: {
      fontSize: "7xl",
      lineHeight: "5.75rem",
      letterSpacing: "-0.025em",
    },
  },
  none: {
    value: {},
  },
  label: {
    value: {
      fontSize: { base: "xl", md: "4xl", lg: "6xl" },
      lineHeight: "1.25rem",
      fontWeight: "medium",
    },
  },
  heading: {
    h1: {
      value: {
        fontWeight: "bold",
        fontSize: { base: "3xl", md: "4xl", lg: "5xl" },
        lineHeight: "heading.h1",
        letterSpacing: "base",
      },
    },
    h2: {
      value: {
        fontWeight: "bold",
        fontSize: { base: "xl", sm: "4xl", md: "4xl", lg: "5xl" },
        lineHeight: "heading.h2",
        letterSpacing: "base",
      },
    },
    h3: {
      value: {
        fontWeight: "bold",
        fontSize: { base: "lg", sm: "xl", md: "2xl", lg: "4xl" },
        lineHeight: "heading.h3",
        letterSpacing: "base",
      },
    },
    h4: {
      value: {
        fontWeight: "bold",
        fontSize: { base: "md", sm: "lg", md: "2xl", lg: "3xl" },
        lineHeight: "heading.h4",
        letterSpacing: "base",
      },
    },
  },
  subheading: {
    sh1: {
      value: {
        fontSize: { base: "md", sm: "lg", md: "2xl", lg: "3xl" },
        lineHeight: "base",
        letterSpacing: "base",
      },
    },
    sh2: {
      value: {
        fontWeight: "bold",
        fontSize: { base: "md", sm: "lg", md: "2xl", lg: "3xl" },
        lineHeight: "base",
        letterSpacing: "base",
      },
    },
    sh3: {
      value: {
        fontSize: { base: "md", sm: "lg", md: "xl", lg: "2xl" },
        lineHeight: "base",
        letterSpacing: "base",
      },
    },
  },
  body: {
    title: {
      value: {
        fontWeight: "bold",
        fontSize: { base: "md", md: "lg", lg: "xl" },
        lineHeight: "body.title-text",
        letterSpacing: "base",
      },
    },
    text: {
      value: {
        fontWeight: "medium",
        fontSize: { base: "md", md: "lg", lg: "xl" },
        lineHeight: "body.title-text",
        letterSpacing: "base",
      },
    },
    paragraph: {
      value: {
        fontWeight: "normal",
        fontSize: { base: "md", md: "lg", lg: "xl" },
        lineHeight: "body.paragraph",
        letterSpacing: "base",
      },
    },
    description: {
      value: {
        fontWeight: "bold",
        fontSize: { base: "md", md: "lg", lg: "xl" },
        lineHeight: "body.description",
        letterSpacing: "base",
      },
    },
  },
  footnote: {
    link: {
      value: {
        fontWeight: "bold",
        fontSize: "sm",
        lineHeight: "base",
        letterSpacing: "base",
      },
    },
    text: {
      value: {
        fontWeight: "normal",
        fontSize: "sm",
        lineHeight: "base",
        letterSpacing: "base",
      },
    },
    group: {
      title: {
        value: {
          fontWeight: "bold",
          fontSize: "sm",
          lineHeight: "base",
          letterSpacing: "base",
        },
      },
      colored: {
        value: {
          fontWeight: "bold",
          fontSize: "5xl",
          lineHeight: "base",
          letterSpacing: "base",
        },
      },
    },
  },
});
