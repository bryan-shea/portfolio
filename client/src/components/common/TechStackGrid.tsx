import { Box, Card, Flex, Stack, Text, type FlexProps } from "@chakra-ui/react";
import {
  MongoDB,
  React,
  Vite,
  GraphQL,
  TypeScript,
  ChakraUI,
  AWS,
  FramerMotion,
  Vitest,
  Playwright,
} from "./tech-logos";

/**
 * Tech stack configuration with proper component mapping
 */
const techStack = [
  { name: "React", component: React },
  { name: "TypeScript", component: TypeScript },
  { name: "Vite", component: Vite },
  { name: "Chakra UI", component: ChakraUI },
  { name: "GraphQL", component: GraphQL },
  { name: "MongoDB", component: MongoDB },
  { name: "AWS", component: AWS },
  { name: "Playwright", component: Playwright },
  { name: "Vitest", component: Vitest },
  { name: "Framer Motion", component: FramerMotion },
];

/**
 * Split tech stack into two sets for the conveyor belts
 */
const logoSetA = techStack.slice(0, Math.ceil(techStack.length / 2));
const logoSetB = techStack.slice(Math.ceil(techStack.length / 2));

/**
 * Props interface for the vertical marquee component
 */
interface VerticalMarqueeProps extends FlexProps {
  /** Array of items with unique identifiers */
  items: Array<{ id: string; content: React.ReactNode }>;
  /** Gap between items */
  gutter?: string;
  /** Animation speed */
  speed?: string;
  /** Direction of animation: 'up' or 'down' */
  direction?: "up" | "down";
}

/**
 * Vertical marquee component for continuous scrolling animation
 */
const VerticalMarquee = (props: VerticalMarqueeProps) => {
  const {
    items,
    gutter = "4",
    speed = "20s",
    direction = "up",
    ...rest
  } = props;

  const animationName =
    direction === "up" ? "slide-up-full" : "slide-down-full";
  const animation = `${animationName} ${speed} linear infinite`;

  return (
    <Flex
      {...rest}
      direction="column"
      overflow="hidden"
      h="600px"
      maskImage="linear-gradient(to bottom, #0000, #000 10%, #000 90%, #0000)"
      _hover={{
        "& > div": {
          animationPlayState: "paused",
        },
      }}
    >
      <Flex direction="column" animation={animation}>
        {/* First set of items */}
        {items.map(item => (
          <Box marginBottom={gutter} key={item.id}>
            {item.content}
          </Box>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map(item => (
          <Box marginBottom={gutter} key={`${item.id}-duplicate`}>
            {item.content}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

/**
 * Tech stack grid component with vertical conveyor belts
 * Left column moves up, right column moves down
 */
export const TechStackGrid = () => {
  return (
    <Flex
      gap={{ base: "8", md: "12", lg: "16" }}
      justify="center"
      align="flex-start"
      minW="0"
    >
      {/* Left Column - Moving Up */}
      <VerticalMarquee
        direction="up"
        speed="25s"
        gutter="6"
        items={logoSetA.map(({ name, component: Logo }) => ({
          id: `left-${name}`,
          content: (
            <Card.Root
              size="sm"
              minW="160px"
              w="160px"
              bg="bg.surface"
              _hover={{
                shadow: "md",
                borderColor: "primary.500",
              }}
              transition="all 0.2s ease"
            >
              <Card.Body
                display="flex"
                alignItems="center"
                justifyContent="center"
                p="4"
              >
                <Stack gap="3" align="center">
                  <Box color="fg" fontSize="4xl">
                    <Logo />
                  </Box>
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color="fg"
                    textAlign="center"
                  >
                    {name}
                  </Text>
                </Stack>
              </Card.Body>
            </Card.Root>
          ),
        }))}
      />

      {/* Right Column - Moving Down */}
      <VerticalMarquee
        direction="down"
        speed="25s"
        gutter="6"
        items={logoSetB.map(({ name, component: Logo }) => ({
          id: `right-${name}`,
          content: (
            <Card.Root
              size="sm"
              minW="160px"
              w="160px"
              bg="bg.surface"
              _hover={{
                shadow: "md",
                borderColor: "primary.500",
              }}
              transition="all 0.2s ease"
            >
              <Card.Body
                display="flex"
                alignItems="center"
                justifyContent="center"
                p="4"
              >
                <Stack gap="3" align="center">
                  <Box color="fg" fontSize="4xl">
                    <Logo />
                  </Box>
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color="fg"
                    textAlign="center"
                  >
                    {name}
                  </Text>
                </Stack>
              </Card.Body>
            </Card.Root>
          ),
        }))}
      />
    </Flex>
  );
};
