import {
  MongoDB,
  React,
  Vite,
  GraphQL,
  TypeScript,
  ChakraUI,
  AWS,
} from "./tech-logos";
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Tooltip } from "../ui";
import { motion } from "framer-motion";

// Tech stack configuration with proper component mapping
const techStack = [
  { name: "React", component: React },
  { name: "TypeScript", component: TypeScript },
  { name: "Vite", component: Vite },
  { name: "Chakra UI", component: ChakraUI },
  { name: "GraphQL", component: GraphQL },
  { name: "MongoDB", component: MongoDB },
  { name: "AWS", component: AWS },
];

export const LogoGrid = () => {
  console.log("LogoGrid rendering with techStack:", techStack);

  return (
    <Container
      py={{ base: "16", md: "20", lg: "24" }}
      px={{ base: "4", md: "6", lg: "8" }}
      maxW="6xl"
      mx="auto"
    >
      <Stack gap={{ base: "12", md: "16" }} align="center" w="full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Stack gap="4" align="center" textAlign="center">
            <Heading
              size={{ base: "2xl", md: "3xl" }}
              fontWeight="medium"
              color="fg"
            >
              Skills & Technologies
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              maxW="2xl"
            >
              Building modern web applications with cutting-edge tools and
              frameworks
            </Text>
          </Stack>
        </motion.div>
        <SimpleGrid
          columns={{ base: 4, sm: 5, md: 6, lg: 8 }}
          gap={{ base: "4", sm: "6", md: "8" }}
          w="full"
          maxW="5xl"
          justifyItems="center"
        >
          {techStack.map(({ name, component: Logo }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <AspectRatio
                ratio={1}
                w="full"
                maxW={{ base: "12", md: "16", lg: "20" }}
              >
                <Center
                  bg="gray.100"
                  borderRadius="md"
                  p="2"
                  _dark={{ bg: "gray.700" }}
                >
                  <Tooltip
                    showArrow
                    content={name}
                    positioning={{ placement: "top" }}
                  >
                    <Box w="8" h="8">
                      <Logo />
                    </Box>
                  </Tooltip>
                </Center>
              </AspectRatio>
            </motion.div>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};
