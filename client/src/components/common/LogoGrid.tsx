import * as techLogos from "./tech-logos";
import {
  AspectRatio,
  Center,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Tooltip } from "../ui";

export const LogoGrid = () => (
  <Container py="12" px={{ base: "6", md: "8" }} maxW="9xl" mx="auto">
    <Stack
      gap="12"
      align={{ lg: "center" }}
      direction={{ base: "column", lg: "row" }}
      justify="space-between"
      w="full"
      flex="1"
    >
      <Stack gap="8" flex="1" maxW="full" align="flex-start">
        <Heading size="3xl" fontWeight="medium">
          Skills & Technologies
        </Heading>
        <Text fontSize="lg" color="fg.muted">
          Building modern web applications with cutting-edge tools and
          frameworks
        </Text>
      </Stack>
      <SimpleGrid
        columns={{ base: 2, md: 3 }}
        gap={{ base: "6", md: "4" }}
        flex="1"
      >
        {Object.entries(techLogos).map(([name, Logo]) => (
          <AspectRatio
            ratio={1}
            key={name}
          >
            <Center>
              <Tooltip showArrow content={name} positioning={{ placement: "bottom" }}>
                <Icon
                  boxSize="28"
                  color={name === "TypeScript" ? "#3178C6" : "current"}
                  p="6"
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <Logo monochrome />
                </Icon>
              </Tooltip>
            </Center>
          </AspectRatio>
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
);
