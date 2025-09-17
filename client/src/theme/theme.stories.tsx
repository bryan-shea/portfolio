import { Box, ChakraProvider, Text } from "@chakra-ui/react";

import { system } from "./theme";

export default {
  title: "Theme Showcase",
};

export const ColorsShowcase = () => {
  const colors = system.tokens.getCategoryValues("colors");

  console.log("colors", colors);

  return (
    <ChakraProvider value={system}>
      <Box p={4}>
        <Text mb={4} textStyle="body.text">
          Semantic Colors
        </Text>
        {Object.keys(colors).map(colorKey => (
          <Box key={colorKey} mb={2}>
            <Text textStyle="body.text">{colorKey}</Text>
            <Box bg={colors[colorKey]} p={4} borderRadius="md" mb={1}>
              <Text color="white" textStyle="body.text">
                {colors[colorKey]}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </ChakraProvider>
  );
};

export const TextStylesShowcase = () => {
  const textStyles = system._config!.theme!.textStyles;

  const extractTextStyleKeys = (styles: typeof textStyles) => {
    if (!styles) return [];
    const keys: string[] = []; // Specify the type of keys as string[]
    Object.keys(styles).forEach(key => {
      if (styles[key].value) {
        keys.push(key);
      } else {
        Object.keys(styles[key]).forEach(subKey => {
          if (styles[key][subKey].value) {
            keys.push(`${key}.${subKey}`);
          }
        });
      }
    });
    return keys;
  };

  const textStyleKeys = extractTextStyleKeys(textStyles);

  return (
    <ChakraProvider value={system}>
      <Box p={4}>
        <Text mb={4} textStyle="body.text">
          Text Styles
        </Text>
        {textStyleKeys.map(styleKey => (
          <Box key={styleKey} mb={2}>
            <Text textStyle={styleKey}>
              This is a sample text with the "{styleKey}" text style.
            </Text>
          </Box>
        ))}
      </Box>
    </ChakraProvider>
  );
};
