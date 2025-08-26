import { Box } from "@chakra-ui/react";
import { useMemo } from "react";

/**
 * Configuration for individual gradient orbs
 */
interface Orb {
  /** Unique identifier for the orb */
  id: number;
  /** X position as percentage */
  x: number;
  /** Y position as percentage */
  y: number;
  /** Orb size in pixels */
  size: number;
  /** Animation duration in seconds */
  duration: number;
  /** Animation delay in seconds */
  delay: number;
  /** Color variation (0-2) */
  colorVariant: number;
}

/**
 * Props for GradientOrbs component
 */
interface GradientOrbsProps {
  /** Number of orbs to render */
  count?: number;
  /** Minimum orb size in pixels */
  minSize?: number;
  /** Maximum orb size in pixels */
  maxSize?: number;
  /** Base animation duration in seconds */
  baseDuration?: number;
}

/**
 * Gradient orbs background animation
 * Creates floating gradient spheres with subtle movement
 * Features multiple color variants that adapt to light/dark modes
 */
export const GradientOrbs: React.FC<GradientOrbsProps> = ({
  count = 8,
  minSize = 100,
  maxSize = 300,
  baseDuration = 20,
}) => {
  const orbs = useMemo<Orb[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      duration: baseDuration + Math.random() * 10,
      delay: Math.random() * 8,
      colorVariant: Math.floor(Math.random() * 3),
    }));
  }, [count, minSize, maxSize, baseDuration]);

  const getOrbBackground = (variant: number) => {
    const lightColors = ["slate.500", "slate.600", "slate.700"];
    const darkColors = ["blue.400", "purple.400", "pink.400"];

    return {
      _light: `radial-gradient(circle, rgba(71, 85, 105, 0.25) 0%, transparent 60%)`, // slate equivalent
      _dark:
        variant === 0
          ? `radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 60%)` // blue.400
          : variant === 1
            ? `radial-gradient(circle, rgba(196, 181, 253, 0.15) 0%, transparent 60%)` // purple.400
            : `radial-gradient(circle, rgba(251, 182, 206, 0.15) 0%, transparent 60%)`, // pink.400
    };
  };

  return (
    <Box
      position="absolute"
      inset="0"
      overflow="hidden"
      pointerEvents="none"
      zIndex={-1}
    >
      {orbs.map((orb) => {
        const mainBackground = getOrbBackground(orb.colorVariant);
        const innerBackground = getOrbBackground((orb.colorVariant + 1) % 3);

        return (
          <Box
            key={orb.id}
            position="absolute"
            left={`${orb.x}%`}
            top={`${orb.y}%`}
            width={`${orb.size}px`}
            height={`${orb.size}px`}
            borderRadius="full"
            background={mainBackground}
            animation={`orbFloat ${orb.duration}s ease-in-out infinite`}
            animationDelay={`${orb.delay}s`}
            filter={{
              _light: "blur(2px)",
              _dark: "blur(1px)",
            }}
            transform="translate(-50%, -50%)"
            _after={{
              content: '""',
              position: "absolute",
              inset: "20%",
              borderRadius: "full",
              background: innerBackground,
              animation: `orbFloat ${orb.duration * 0.8}s ease-in-out infinite reverse`,
              animationDelay: `${orb.delay + 2}s`,
              filter: "blur(2px)",
            }}
          />
        );
      })}

      {/* Additional ambient glow effects */}
      <Box
        position="absolute"
        top="10%"
        left="20%"
        width="60%"
        height="80%"
        background={{
          _light:
            "radial-gradient(circle, rgba(71, 85, 105, 0.08) 0%, transparent 60%)", // slate.600/8
          _dark:
            "radial-gradient(circle, rgba(96, 165, 250, 0.02) 0%, transparent 60%)", // blue.400/2
        }}
        animation="orbFloat 25s ease-in-out infinite"
        animationDelay="5s"
      />

      <Box
        position="absolute"
        top="30%"
        right="15%"
        width="40%"
        height="60%"
        background={{
          _light:
            "radial-gradient(circle, rgba(51, 65, 85, 0.08) 0%, transparent 60%)", // slate.700/8
          _dark:
            "radial-gradient(circle, rgba(196, 181, 253, 0.02) 0%, transparent 60%)", // purple.400/2
        }}
        animation="orbFloat 30s ease-in-out infinite reverse"
        animationDelay="8s"
      />
    </Box>
  );
};
