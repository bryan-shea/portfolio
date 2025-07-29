import { Box } from "@chakra-ui/react";

/**
 * Props for WaveAnimation component
 */
interface WaveAnimationProps {
  /** Number of wave layers */
  layers?: number;
  /** Wave height as percentage of container */
  height?: number;
  /** Base animation speed in seconds */
  speed?: number;
}

/**
 * Wave animation background
 * Creates flowing wave patterns with layered SVG animations
 * Adapts colors and opacity for light and dark modes
 */
export const WaveAnimation: React.FC<WaveAnimationProps> = ({
  layers = 3,
  height = 25,
  speed = 20,
}) => {
  return (
    <Box
      position="absolute"
      inset="0"
      overflow="hidden"
      pointerEvents="none"
      zIndex={-1}
    >
      {Array.from({ length: layers }, (_, i) => (
        <Box
          key={i}
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          height={`${height + i * 5}%`}
          opacity={0.6 - i * 0.1}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
            style={{
              animation: `wave ${speed + i * 5}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`,
            }}
          >
            <defs>
              <linearGradient
                id={`waveGradient${i}`}
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="var(--chakra-colors-blue-400)"
                  stopOpacity="0"
                />
                <stop
                  offset="100%"
                  stopColor="var(--chakra-colors-blue-400)"
                  stopOpacity={0.2 - i * 0.03}
                />
              </linearGradient>
            </defs>
            <path
              d={`M0,150 C300,${100 + i * 20} 900,${200 - i * 20} 1200,150 L1200,300 L0,300 Z`}
              fill={`url(#waveGradient${i})`}
              style={{
                transform: i % 2 === 0 ? "scaleX(-1)" : "scaleX(1)",
              }}
            />
          </svg>
        </Box>
      ))}

      {/* Additional flowing elements */}
      <Box
        position="absolute"
        top="20%"
        left="-10%"
        width="120%"
        height="2px"
        bg={{
          _light:
            "linear-gradient(90deg, transparent, blue.400/50, transparent)",
          _dark:
            "linear-gradient(90deg, transparent, blue.400/15, transparent)",
        }}
        animation="wave 15s linear infinite"
        transform="rotate(-2deg)"
      />

      <Box
        position="absolute"
        top="70%"
        left="-10%"
        width="120%"
        height="1px"
        bg={{
          _light:
            "linear-gradient(90deg, transparent, purple.400/40, transparent)",
          _dark:
            "linear-gradient(90deg, transparent, purple.400/10, transparent)",
        }}
        animation="wave 18s linear infinite reverse"
        transform="rotate(1deg)"
        animationDelay="3s"
      />
    </Box>
  );
};
