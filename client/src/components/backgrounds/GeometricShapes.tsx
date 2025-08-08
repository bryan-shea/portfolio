import { Box } from "@chakra-ui/react";
import { useMemo } from "react";

/**
 * Configuration for individual geometric shapes
 */
interface Shape {
  /** Unique identifier for the shape */
  id: number;
  /** X position as percentage */
  x: number;
  /** Y position as percentage */
  y: number;
  /** Shape size in pixels */
  size: number;
  /** Shape type */
  type: "circle" | "triangle" | "square" | "diamond";
  /** Animation duration in seconds */
  duration: number;
  /** Animation delay in seconds */
  delay: number;
  /** Rotation angle in degrees */
  rotation: number;
}

/**
 * Props for GeometricShapes component
 */
interface GeometricShapesProps {
  /** Number of shapes to render */
  count?: number;
  /** Minimum shape size in pixels */
  minSize?: number;
  /** Maximum shape size in pixels */
  maxSize?: number;
  /** Base animation duration in seconds */
  baseDuration?: number;
}

/**
 * Geometric shapes background animation
 * Creates elegant floating geometric shapes with subtle animations
 * Adapts to light and dark modes with appropriate opacity and colors
 */
export const GeometricShapes: React.FC<GeometricShapesProps> = ({
  count = 12,
  minSize = 20,
  maxSize = 80,
  baseDuration = 20,
}) => {
  /**
   * Generate random shapes with varied properties
   */
  const shapes = useMemo<Shape[]>(() => {
    const shapeTypes: Shape["type"][] = [
      "circle",
      "triangle",
      "square",
      "diamond",
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      duration: baseDuration + Math.random() * 10,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
    }));
  }, [count, minSize, maxSize, baseDuration]);

  /**
   * Render individual shape based on type
   */
  const renderShape = (shape: Shape) => {
    const commonStyles = {
      position: "absolute" as const,
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: { base: 0.25, _dark: 0.15 },
      transform: `rotate(${shape.rotation}deg)`,
      animation: `geometricFloat-${shape.id} ${shape.duration}s ease-in-out infinite`,
      animationDelay: `${shape.delay}s`,
    };

    const shapeContent = () => {
      switch (shape.type) {
        case "circle":
          return (
            <Box
              {...commonStyles}
              borderRadius="50%"
              bg={{
                base: "token(colors.blue.200)",
                _dark: "token(colors.gray.500)",
              }}
              boxShadow={{
                base: "0 2px 8px rgba(59, 130, 246, 0.2)",
                _dark: "none",
              }}
            />
          );
        case "triangle":
          return (
            <Box
              {...commonStyles}
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid`,
                borderBottomColor: {
                  base: "token(colors.purple.200)",
                  _dark: "token(colors.gray.500)",
                },
                filter: {
                  base: "drop-shadow(0 2px 4px rgba(147, 51, 234, 0.3))",
                  _dark: "none",
                },
              }}
            />
          );
        case "square":
          return (
            <Box
              {...commonStyles}
              bg={{
                base: "token(colors.teal.200)",
                _dark: "token(colors.gray.500)",
              }}
              boxShadow={{
                base: "0 2px 8px rgba(20, 184, 166, 0.25)",
                _dark: "none",
              }}
            />
          );
        case "diamond":
          return (
            <Box
              {...commonStyles}
              bg={{
                base: "token(colors.pink.200)",
                _dark: "token(colors.gray.500)",
              }}
              transform={`rotate(${shape.rotation + 45}deg)`}
              boxShadow={{
                base: "0 2px 8px rgba(236, 72, 153, 0.25)",
                _dark: "none",
              }}
            />
          );
        default:
          return null;
      }
    };

    return (
      <Box key={shape.id}>
        <style>
          {`
            @keyframes geometricFloat-${shape.id} {
              0%, 100% {
                transform: rotate(${shape.rotation}deg) translateY(0px) scale(1);
                opacity: 0.2;
              }
              25% {
                transform: rotate(${shape.rotation + 10}deg) translateY(-${shape.size * 0.3}px) scale(1.1);
                opacity: 0.35;
              }
              50% {
                transform: rotate(${shape.rotation + 5}deg) translateY(-${shape.size * 0.5}px) scale(1);
                opacity: 0.25;
              }
              75% {
                transform: rotate(${shape.rotation - 5}deg) translateY(-${shape.size * 0.2}px) scale(0.9);
                opacity: 0.4;
              }
            }
          `}
        </style>
        {shapeContent()}
      </Box>
    );
  };

  return (
    <Box
      position="absolute"
      inset="0"
      overflow="hidden"
      pointerEvents="none"
      zIndex={-1}
    >
      {shapes.map(renderShape)}
    </Box>
  );
};
