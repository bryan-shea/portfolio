import {
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuChevronRight, LuUser, LuMail } from "react-icons/lu";

export const CallToAction = () => {
  return (
    <Container maxW="6xl" py="20" bg="bg.default">
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: "8", md: "20" }}
        justify="space-between"
      >
        {/* Left column: your pitch + primary action */}
        <Stack flex="1" maxW="2xl" align="flex-start">
          <Heading as="h2" size="4xl">
            Let’s build something great together
          </Heading>
          <Text color="fg.muted" textStyle="lg" mb="4">
            I’m a full-stack developer specializing in React, Node.js, and
            cloud-native architectures. Dive into my projects or reach out to
            discuss your next idea.
          </Text>
        </Stack>

        {/* Right column: ways to get in touch */}
        <Flex
          direction={{ base: "column", md: "row" }}
          flex="1"
          gap={{ base: "8", md: "4" }}
          align="flex-start"
        >
          {features.map((feature) => (
            <Stack
              direction={{ base: "row", md: "column" }}
              key={feature.title}
              gap="4"
            >
              <Square size="10" borderWidth="1px" rounded="l2">
                <Icon color="colorPalette.solid">{feature.icon}</Icon>
              </Square>
              <Stack flex="1">
                <Text fontWeight="medium">{feature.title}</Text>
                <Text color="fg.muted" textStyle="sm">
                  {feature.description}
                </Text>
                <Link
                  href={feature.url}
                  fontWeight="medium"
                  textStyle="sm"
                >
                  {feature.action} <Icon as={LuChevronRight} color="fg.muted" />
                </Link>
              </Stack>
            </Stack>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

const features = [
  {
    icon: <LuUser />,
    title: "Book a Chat",
    description: "Schedule a time via Calendly to discuss your project.",
    url: "https://calendly.com/your-name/demo",
    action: "Book now",
  },
  {
    icon: <LuMail />,
    title: "Email Me",
    description: "Prefer email? Send your questions directly to my inbox.",
    url: "mailto:youremail@example.com",
    action: "Say hello",
  },
];
