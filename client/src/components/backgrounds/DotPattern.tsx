import { Box } from "@chakra-ui/react";

/**
 * Props for DotPattern component
 */
interface DotPatternProps {
  /** Animation speed multiplier */
  animationSpeed?: number;
}

/**
 * Radial gradient circle pattern background
 * Creates the original sophisticated pattern from the Projects section
 * Features positioned radial gradient circles with subtle floating animation
 */
export const DotPattern: React.FC<DotPatternProps> = ({
  animationSpeed = 1,
}) => {
  return (
    <Box
      position="absolute"
      inset="0"
      overflow="hidden"
      pointerEvents="none"
      zIndex={-1}
    >
      {/* Main Background Pattern Layer */}
      <Box
        position="absolute"
        inset="0"
        opacity={{
          _light: "0.08",
          _dark: "0.05",
        }}
        bgImage={{
          _light: [
            "radial-gradient(circle at 25% 25%, #64748b 1px, transparent 1.5px)",
            "radial-gradient(circle at 75% 75%, #94a3b8 1px, transparent 1.5px)",
          ].join(", "),
          _dark: [
            "radial-gradient(circle at 25% 25%, #3182ce 1px, transparent 2px)",
            "radial-gradient(circle at 75% 75%, #805ad5 1px, transparent 2px)",
          ].join(", "),
        }}
        bgSize="60px 60px"
        animation={`floatUpDown ${20 / animationSpeed}s ease-in-out infinite`}
        filter={{
          _light: "none",
          _dark: "none",
        }}
      />
    </Box>
  );
};
