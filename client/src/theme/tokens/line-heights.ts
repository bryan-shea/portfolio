import { defineTokens } from "@chakra-ui/react";

export const lineHeights = defineTokens.lineHeights({
  shorter: {
    value: 1.25,
  },
  short: {
    value: 1.375,
  },
  moderate: {
    value: 1.5,
  },
  base: {
    value: 1.5,
  },
  tall: {
    value: 1.625,
  },
  taller: {
    value: 2,
  },
  heading: {
    h1: {
      value: 1.1,
    },
    h2: {
      value: 1.2,
    },
    h3: {
      value: 1.3,
    },
    h4: {
      value: 1.4,
    },
  },
  body: {
    "title-text": {
      value: 1.5,
    },
    paragraph: {
      value: 1.4,
    },
    description: {
      value: 1.25,
    },
  },
});
