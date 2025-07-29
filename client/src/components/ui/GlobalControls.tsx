import { Box, HStack, Select, createListCollection } from "@chakra-ui/react";
import { ColorModeButton } from "./color-mode";
import { type BackgroundType } from "../backgrounds";

/**
 * Available background options for the global selector
 */
const backgroundCollection = createListCollection({
  items: [
    { value: "particles", label: "✨ Floating Particles" },
    { value: "grid", label: "⚡ Geometric Grid" },
    { value: "waves", label: "🌊 Wave Animation" },
    { value: "orbs", label: "🟡 Gradient Orbs" },
    { value: "network", label: "🔗 Network Nodes" },
  ],
});

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
 * Global controls component
 * Combines color mode toggle with background selector
 * Positioned as a fixed overlay for easy access
 */
export const GlobalControls: React.FC<GlobalControlsProps> = ({
  currentBackground,
  onBackgroundChange,
}) => {
  const handleValueChange = (details: any) => {
    console.log("Select value changed:", details);
    const newBackground = details.value[0] as BackgroundType;
    console.log("New background:", newBackground);
    onBackgroundChange(newBackground);
  };

  console.log("GlobalControls current background:", currentBackground);

  return (
    <Box
      position="fixed"
      top="4"
      right="4"
      zIndex="1000"
      bg={{
        _light: "white/80",
        _dark: "gray.900/80",
      }}
      backdropFilter="blur(10px)"
      borderRadius="lg"
      p="3"
      border="1px solid"
      borderColor={{
        _light: "gray.200",
        _dark: "gray.700",
      }}
      boxShadow="lg"
    >
      <HStack gap="3" align="center">
        {/* Background Selector */}
        <Select.Root
          collection={backgroundCollection}
          size="sm"
          width="200px"
          value={[currentBackground]}
          onValueChange={handleValueChange}
          defaultValue={["particles"]}
        >
          <Select.HiddenSelect />
          <Select.Control
            bg="bg.panel"
            borderColor={{
              _light: "gray.300",
              _dark: "gray.600",
            }}
            _hover={{
              borderColor: {
                _light: "gray.400",
                _dark: "gray.500",
              },
            }}
            _focus={{
              borderColor: "primary.500",
              boxShadow: "0 0 0 1px var(--chakra-colors-primary-500)",
            }}
          >
            <Select.Trigger>
              <Select.ValueText placeholder="Select background" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Select.Positioner>
            <Select.Content>
              {backgroundCollection.items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  {item.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Select.Root>

        {/* Color Mode Toggle */}
        <Box bg="bg.panel" borderRadius="md" p="1">
          <ColorModeButton />
        </Box>
      </HStack>
    </Box>
  );
};
