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
        opacity="0.05"
        bgImage={{
          _light: [
            "radial-gradient(circle at 25% 25%, #3182ce 1px, transparent 2px)",
            "radial-gradient(circle at 75% 75%, #805ad5 1px, transparent 2px)",
          ].join(", "),
          _dark: [
            "radial-gradient(circle at 25% 25%, #3182ce 1px, transparent 2px)",
            "radial-gradient(circle at 75% 75%, #805ad5 1px, transparent 2px)",
          ].join(", "),
        }}
        bgSize="60px 60px"
        animation={`floatUpDown ${20 / animationSpeed}s ease-in-out infinite`}
      />
    </Box>
  );
};
