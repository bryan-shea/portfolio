import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  type FlexProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
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
  console.log("TechStackGrid rendering with logoSetA:", logoSetA);
  console.log("TechStackGrid rendering with logoSetB:", logoSetB);

  return (
    <Container
      py={{ base: "6", md: "12", lg: "16" }}
      px={{ base: "4", md: "6", lg: "8" }}
      mt={{ base: "8", md: "12", lg: "20" }}
      maxW="6xl"
      mx="auto"
    >
      <Stack gap={{ base: "12", md: "16" }} align="stretch" w="full">
        {/* Content Layout - Header and Animation Side by Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={{ base: "center", lg: "flex-start" }}
            gap={{ base: "8", lg: "16" }}
            w="full"
          >
            {/* Header Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Stack
                gap="4"
                align={{ base: "center", lg: "start" }}
                textAlign={{ base: "center", lg: "left" }}
                maxW={{ base: "full", lg: "md" }}
                flex="0 0 auto"
                mt={{ base: "8", md: "24" }}
              >
                <Heading
                  size={{ base: "2xl", md: "3xl" }}
                  fontWeight="medium"
                  color="fg"
                >
                  Current Tech Stack
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="fg.muted"
                  lineHeight="relaxed"
                >
                  These are the technologies I actively work with in my current
                  role and personal projects. Each tool shown represents skills
                  I use regularly and can contribute with immediately.
                </Text>
              </Stack>
            </motion.div>

            {/* Conveyor Belt Section - Right Side */}
            <Flex
              gap={{ base: "8", md: "12", lg: "16" }}
              justify="center"
              align="flex-start"
              flex="1"
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
          </Flex>
        </motion.div>
      </Stack>
    </Container>
  );
};
