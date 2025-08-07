import { Box } from "@chakra-ui/react";

/**
 * Props for FadeLines component
 */
interface FadeLinesProps {
  /** Number of lines to render */
  lineCount?: number;
  /** Width of each line in pixels */
  lineWidth?: number;
  /** Base opacity for lines */
  baseOpacity?: number;
}

/**
 * Simple fade lines background
 * Creates subtle vertical lines with gradient fade effect
 * Minimal and clean design that adapts to light and dark modes
 */
export const FadeLines: React.FC<FadeLinesProps> = ({
  lineCount = 6,
  lineWidth = 1,
  baseOpacity = 0.2,
}) => {
  return (
    <Box
      position="absolute"
      inset="0"
      overflow="hidden"
      pointerEvents="none"
      zIndex={-1}
    >
      {Array.from({ length: lineCount }, (_, i) => (
        <Box
          key={i}
          position="absolute"
          left={`${(100 / (lineCount + 1)) * (i + 1)}%`}
          top="0"
          width={`${lineWidth}px`}
          height="100%"
          bg="linear-gradient(to bottom, transparent, fg.muted, transparent)"
          opacity={baseOpacity * (0.7 + Math.random() * 0.3)}
          transform="translateX(-50%)"
        />
      ))}
    </Box>
  );
};
