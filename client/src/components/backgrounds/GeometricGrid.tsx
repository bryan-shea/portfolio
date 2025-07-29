import { Box } from "@chakra-ui/react";
import { useMemo } from "react";

/**
 * Configuration for individual grid cells
 */
interface GridCell {
  /** Unique identifier for the cell */
  id: number;
  /** Row position */
  row: number;
  /** Column position */
  col: number;
  /** Animation delay in seconds */
  delay: number;
}

/**
 * Props for GeometricGrid component
 */
interface GeometricGridProps {
  /** Number of rows in the grid */
  rows?: number;
  /** Number of columns in the grid */
  cols?: number;
  /** Size of each grid cell in pixels */
  cellSize?: number;
  /** Gap between cells in pixels */
  gap?: number;
}

/**
 * Geometric grid background animation
 * Creates a subtle grid pattern with pulsing elements
 * Adapts opacity and colors for light and dark modes
 */
export const GeometricGrid: React.FC<GeometricGridProps> = ({
  rows = 12,
  cols = 20,
  cellSize = 8,
  gap = 40,
}) => {
  const cells = useMemo<GridCell[]>(() => {
    const allCells: GridCell[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Only create cells for a sparse pattern
        if (Math.random() > 0.85) {
          allCells.push({
            id: row * cols + col,
            row,
            col,
            delay: Math.random() * 4,
          });
        }
      }
    }
    return allCells;
  }, [rows, cols]);

  return (
    <Box
      position="absolute"
      inset="0"
      overflow="hidden"
      pointerEvents="none"
      zIndex={-1}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        position="relative"
        width={`${cols * gap}px`}
        height={`${rows * gap}px`}
      >
        {cells.map((cell) => (
          <Box
            key={cell.id}
            position="absolute"
            left={`${cell.col * gap}px`}
            top={`${cell.row * gap}px`}
            width={`${cellSize}px`}
            height={`${cellSize}px`}
            bg={{
              _light: "gray.400/60",
              _dark: "gray.600/20",
            }}
            borderRadius="sm"
            animation={`gridPulse 3s ease-in-out infinite`}
            animationDelay={`${cell.delay}s`}
            _hover={{
              bg: {
                _light: "blue.500/70",
                _dark: "blue.500/30",
              },
            }}
          />
        ))}

        {/* Add some geometric lines */}
        <Box
          position="absolute"
          top="20%"
          left="10%"
          width="80%"
          height="1px"
          bg={{
            _light:
              "linear-gradient(90deg, transparent, gray.500/70, transparent)",
            _dark:
              "linear-gradient(90deg, transparent, gray.600/30, transparent)",
          }}
          animation="gridPulse 4s ease-in-out infinite"
          animationDelay="1s"
        />

        <Box
          position="absolute"
          top="60%"
          left="15%"
          width="70%"
          height="1px"
          bg={{
            _light:
              "linear-gradient(90deg, transparent, gray.500/70, transparent)",
            _dark:
              "linear-gradient(90deg, transparent, gray.600/30, transparent)",
          }}
          animation="gridPulse 4s ease-in-out infinite"
          animationDelay="2s"
        />

        <Box
          position="absolute"
          top="10%"
          left="30%"
          width="1px"
          height="80%"
          bg={{
            _light:
              "linear-gradient(180deg, transparent, gray.500/70, transparent)",
            _dark:
              "linear-gradient(180deg, transparent, gray.600/30, transparent)",
          }}
          animation="gridPulse 4s ease-in-out infinite"
          animationDelay="1.5s"
        />

        <Box
          position="absolute"
          top="10%"
          left="70%"
          width="1px"
          height="80%"
          bg={{
            _light:
              "linear-gradient(180deg, transparent, gray.500/70, transparent)",
            _dark:
              "linear-gradient(180deg, transparent, gray.600/30, transparent)",
          }}
          animation="gridPulse 4s ease-in-out infinite"
          animationDelay="2.5s"
        />
      </Box>
    </Box>
  );
};
