import { Box } from "@chakra-ui/react";

/**
 * Props for SubtleGrid component
 */
interface SubtleGridProps {
  /** Grid cell size in pixels */
  cellSize?: number;
  /** Line thickness in pixels */
  lineWidth?: number;
  /** Animation speed multiplier */
  animationSpeed?: number;
}

/**
 * Subtle grid background
 * Creates a very minimal grid pattern with subtle animations
 * Designed to add texture without being distracting
 */
export const SubtleGrid: React.FC<SubtleGridProps> = ({
  cellSize = 80,
  lineWidth = 1,
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
      {/* Main grid pattern */}
      <Box
        position="absolute"
        inset="0"
        opacity={{
          _light: "0.08",
          _dark: "0.03",
        }}
        backgroundImage={{
          _light: `
            linear-gradient(to right, rgba(100, 116, 139, 0.2) ${lineWidth}px, transparent ${lineWidth}px),
            linear-gradient(to bottom, rgba(100, 116, 139, 0.2) ${lineWidth}px, transparent ${lineWidth}px)
          `,
          _dark: `
            linear-gradient(to right, rgba(148, 163, 184, 0.1) ${lineWidth}px, transparent ${lineWidth}px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.1) ${lineWidth}px, transparent ${lineWidth}px)
          `,
        }}
        backgroundSize={`${cellSize}px ${cellSize}px`}
        animation={`subtleFloat ${30 / animationSpeed}s ease-in-out infinite`}
      />

      {/* Overlay gradient for depth */}
      <Box
        position="absolute"
        inset="0"
        background={{
          _light:
            "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.02) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.015) 0%, transparent 50%)",
          _dark:
            "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.01) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.008) 0%, transparent 50%)",
        }}
        animation={`subtleFloat ${40 / animationSpeed}s ease-in-out infinite reverse`}
      />

      {/* Subtle corner accents */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="30%"
        height="30%"
        background={{
          _light:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, transparent 100%)",
          _dark:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.015) 0%, transparent 100%)",
        }}
        animation={`subtleFloat ${25 / animationSpeed}s ease-in-out infinite`}
      />

      <Box
        position="absolute"
        bottom="0"
        right="0"
        width="25%"
        height="25%"
        background={{
          _light:
            "linear-gradient(315deg, rgba(147, 51, 234, 0.025) 0%, transparent 100%)",
          _dark:
            "linear-gradient(315deg, rgba(147, 51, 234, 0.012) 0%, transparent 100%)",
        }}
        animation={`subtleFloat ${35 / animationSpeed}s ease-in-out infinite reverse`}
      />

      <style>
        {`
          @keyframes subtleFloat {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
              opacity: 1;
            }
            25% {
              transform: translateY(-2px) translateX(1px);
              opacity: 0.8;
            }
            50% {
              transform: translateY(0px) translateX(-1px);
              opacity: 1;
            }
            75% {
              transform: translateY(1px) translateX(0px);
              opacity: 0.9;
            }
          }
        `}
      </style>
    </Box>
  );
};
