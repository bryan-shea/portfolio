import {
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { LuArrowRight, LuCode, LuPalette } from "react-icons/lu";
import { ProfilePicture } from "../components/common";

export const Hero = () => {
  return (
    <Container
      maxW="7xl"
      py={{ base: "20", md: "32" }}
      px={{ base: "6", md: "8" }}
    >
      <Stack
        gap={{ base: "12", md: "16" }}
        align={{ sm: "center" }}
        textAlign="center"
      >
        <Stack gap={{ base: "8", md: "12" }} maxW={{ md: "3xl" }}>
          <HStack
            textStyle="sm"
            fontWeight="medium"
            justifyContent="center"
            gap="3"
            color="fg.info"
          >
            <LuCode /> Full-Stack Developer & Designer <LuPalette />
          </HStack>

          <Stack gap={{ base: "6", md: "8" }}>
			<ProfilePicture />
            <Heading
              size={{ base: "4xl", md: "6xl" }}
              lineHeight="shorter"
              letterSpacing="tight"
              color="fg"
            >
              Crafting Digital Experiences That Matter
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              maxW="2xl"
              mx="auto"
            >
              I build modern web applications with cutting-edge technologies and
              thoughtful design.
            </Text>
          </Stack>
        </Stack>

        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "4", sm: "6" }}
          align={{ md: "center" }}
          pt={{ base: "4", md: "8" }}
        >
          <Button
            size="lg"
            px="8"
            py="6"
            colorPalette="blue"
            boxShadow="lg"
            _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
            transition="all 0.2s"
          >
            View My Work <LuArrowRight />
          </Button>
          <Button
            size="lg"
            px="8"
            py="6"
            variant="outline"
            borderWidth="2px"
            _hover={{ bg: "bg.subtle", transform: "translateY(-2px)" }}
            transition="all 0.2s"
          >
            Get In Touch
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
};
