import { Box } from "@chakra-ui/react";
import { useMemo } from "react";

/**
 * Configuration for individual network nodes
 */
interface Node {
  /** Unique identifier for the node */
  id: number;
  /** X position as percentage */
  x: number;
  /** Y position as percentage */
  y: number;
  /** Node size in pixels */
  size: number;
  /** Connected node IDs */
  connections: number[];
}

/**
 * Props for NetworkNodes component
 */
interface NetworkNodesProps {
  /** Number of nodes to render */
  nodeCount?: number;
  /** Minimum node size in pixels */
  minNodeSize?: number;
  /** Maximum node size in pixels */
  maxNodeSize?: number;
  /** Maximum distance for connections */
  connectionDistance?: number;
}

/**
 * Network nodes background animation
 * Creates an interconnected network of nodes with animated connections
 * Adapts colors and opacity for light and dark modes
 */
export const NetworkNodes: React.FC<NetworkNodesProps> = ({
  nodeCount = 15,
  minNodeSize = 3,
  maxNodeSize = 6,
  connectionDistance = 25,
}) => {
  const { nodes, connections } = useMemo(() => {
    // Generate nodes
    const generatedNodes: Node[] = Array.from(
      { length: nodeCount },
      (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minNodeSize + Math.random() * (maxNodeSize - minNodeSize),
        connections: [],
      })
    );

    // Calculate connections based on distance
    const generatedConnections: Array<{ from: Node; to: Node }> = [];

    for (let i = 0; i < generatedNodes.length; i++) {
      for (let j = i + 1; j < generatedNodes.length; j++) {
        const nodeA = generatedNodes[i];
        const nodeB = generatedNodes[j];

        const distance = Math.sqrt(
          Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
        );

        if (distance < connectionDistance && Math.random() > 0.6) {
          nodeA.connections.push(nodeB.id);
          nodeB.connections.push(nodeA.id);
          generatedConnections.push({ from: nodeA, to: nodeB });
        }
      }
    }

    return { nodes: generatedNodes, connections: generatedConnections };
  }, [nodeCount, minNodeSize, maxNodeSize, connectionDistance]);

  return (
    <Box
      position="absolute"
      inset="0"
      overflow="hidden"
      pointerEvents="none"
      zIndex={-1}
    >
      {/* SVG for connections */}
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--chakra-colors-blue-400)"
              stopOpacity="0.2"
            />
            <stop
              offset="50%"
              stopColor="var(--chakra-colors-purple-400)"
              stopOpacity="0.4"
            />
            <stop
              offset="100%"
              stopColor="var(--chakra-colors-blue-400)"
              stopOpacity="0.2"
            />
          </linearGradient>
        </defs>

        {connections.map((connection, index) => (
          <line
            key={`connection-${connection.from.id}-${connection.to.id}`}
            x1={`${connection.from.x}%`}
            y1={`${connection.from.y}%`}
            x2={`${connection.to.x}%`}
            y2={`${connection.to.y}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            strokeDasharray="2 4"
            style={{
              animation: `nodeConnect 4s ease-in-out infinite`,
              animationDelay: `${index * 0.3}s`,
            }}
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <Box
          key={node.id}
          position="absolute"
          left={`${node.x}%`}
          top={`${node.y}%`}
          width={`${node.size}px`}
          height={`${node.size}px`}
          borderRadius="full"
          bg={{
            _light: "blue.500/70",
            _dark: "blue.500/30",
          }}
          transform="translate(-50%, -50%)"
          animation="gridPulse 2s ease-in-out infinite"
          animationDelay={`${index * 0.2}s`}
          boxShadow={{
            _light: "0 0 12px rgba(59, 130, 246, 0.5)",
            _dark: "0 0 8px rgba(59, 130, 246, 0.2)",
          }}
          _before={{
            content: '""',
            position: "absolute",
            inset: "-2px",
            borderRadius: "full",
            bg: {
              _light: "purple.500/40",
              _dark: "purple.500/15",
            },
            animation: "gridPulse 2s ease-in-out infinite reverse",
            animationDelay: `${index * 0.2 + 1}s`,
          }}
        />
      ))}

      {/* Additional ambient elements */}
      <Box
        position="absolute"
        top="15%"
        left="10%"
        width="80%"
        height="70%"
        background={{
          _light:
            "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.05) 0%, transparent 60%)",
          _dark:
            "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.015) 0%, transparent 60%)",
        }}
        animation="gridPulse 8s ease-in-out infinite"
        animationDelay="2s"
      />
    </Box>
  );
};
