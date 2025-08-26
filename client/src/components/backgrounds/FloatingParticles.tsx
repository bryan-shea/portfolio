import { Box } from "@chakra-ui/react";
import { useMemo } from "react";

/**
 * Configuration for individual floating particles
 */
interface Particle {
  /** Unique identifier for the particle */
  id: number;
  /** Initial X position (percentage) */
  x: number;
  /** Initial Y position (percentage) */
  y: number;
  /** Particle size in pixels */
  size: number;
  /** Animation duration in seconds */
  duration: number;
  /** Animation delay in seconds */
  delay: number;
}

/**
 * Props for FloatingParticles component
 */
interface FloatingParticlesProps {
  /** Number of particles to render */
  count?: number;
  /** Minimum particle size in pixels */
  minSize?: number;
  /** Maximum particle size in pixels */
  maxSize?: number;
  /** Minimum animation duration in seconds */
  minDuration?: number;
  /** Maximum animation duration in seconds */
  maxDuration?: number;
}

/**
 * Floating particles background animation
 * Creates subtle, slowly moving particles that fade in and out
 * Adapts colors for light and dark modes
 */
export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 15,
  minSize = 2,
  maxSize = 8,
  minDuration = 15,
  maxDuration = 25,
}) => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      duration: minDuration + Math.random() * (maxDuration - minDuration),
      delay: Math.random() * 5,
    }));
  }, [count, minSize, maxSize, minDuration, maxDuration]);

  return (
    <Box
      position="absolute"
      inset="0"
      overflow="hidden"
      pointerEvents="none"
      zIndex={-1}
    >
      {particles.map((particle) => (
        <Box
          key={particle.id}
          position="absolute"
          left={`${particle.x}%`}
          top={`${particle.y}%`}
          width={`${particle.size}px`}
          height={`${particle.size}px`}
          borderRadius="full"
          bg={{
            _light: "blue.100/40",
            _dark: "blue.400/20",
          }}
          boxShadow={{
            _light: "0 1px 6px rgba(59, 130, 246, 0.15)",
            _dark: "none",
          }}
          animation={`floatUpDown ${particle.duration}s ease-in-out infinite`}
          animationDelay={`${particle.delay}s`}
          _before={{
            content: '""',
            position: "absolute",
            inset: "0",
            borderRadius: "full",
            bg: {
              _light: "purple.100/30",
              _dark: "purple.400/15",
            },
            animation: `fadeInOut ${particle.duration * 0.7}s ease-in-out infinite`,
            animationDelay: `${particle.delay + 1}s`,
            boxShadow: {
              _light: "0 0 4px rgba(147, 51, 234, 0.1)",
              _dark: "none",
            },
          }}
        />
      ))}
    </Box>
  );
};
