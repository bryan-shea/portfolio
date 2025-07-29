import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Box
      pt={{ base: "20", md: "32" }}
      pb={{ base: "6", md: "12" }}
      px={{ base: "6", md: "8" }}
      bg="bg.subtle"
    >
      <VStack gap={{ base: "12", md: "16" }} maxW="5xl" mx="auto">
        <VStack gap={{ base: "4", md: "6" }} textAlign="center">
          <Heading
            as="h2"
            size={{ base: "xl", md: "2xl" }}
            color="fg"
            letterSpacing="tight"
          >
            Get In Touch
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="fg.muted"
            maxW="3xl"
            lineHeight="tall"
          >
            I'm always interested in new opportunities and interesting projects.
            Let's connect and discuss how we can work together!
          </Text>
        </VStack>

        <Box w="full" maxW="2xl" pt={{ base: "4", md: "8" }}>
          <VStack gap={{ base: "4", md: "6" }}>
            <HStack gap={{ base: "3", md: "4" }} w="full">
              <Input
                placeholder="Your Name"
                borderColor="border"
                borderWidth="2px"
                borderRadius="lg"
                py={{ base: "3", md: "4" }}
                fontSize={{ base: "sm", md: "md" }}
                bg="bg.panel"
                _hover={{ borderColor: "border.info" }}
                _focus={{
                  borderColor: "border.info",
                  boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.1)",
                }}
                transition="all 0.2s"
              />
              <Input
                placeholder="Your Email"
                type="email"
                borderColor="border"
                borderWidth="2px"
                borderRadius="lg"
                py={{ base: "3", md: "4" }}
                fontSize={{ base: "sm", md: "md" }}
                bg="bg.panel"
                _hover={{ borderColor: "border.info" }}
                _focus={{
                  borderColor: "border.info",
                  boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.1)",
                }}
                transition="all 0.2s"
              />
            </HStack>
            <Input
              placeholder="Subject"
              borderColor="border"
              borderWidth="2px"
              borderRadius="lg"
              py={{ base: "3", md: "4" }}
              fontSize={{ base: "sm", md: "md" }}
              bg="bg.panel"
              _hover={{ borderColor: "border.info" }}
              _focus={{
                borderColor: "border.info",
                boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.1)",
              }}
              transition="all 0.2s"
            />
            <Textarea
              placeholder="Your Message"
              rows={6}
              borderColor="border"
              borderWidth="2px"
              borderRadius="lg"
              py={{ base: "4", md: "5" }}
              fontSize={{ base: "sm", md: "md" }}
              resize="vertical"
              bg="bg.panel"
              _hover={{ borderColor: "border.info" }}
              _focus={{
                borderColor: "border.info",
                boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.1)",
              }}
              transition="all 0.2s"
            />
            <Button
              size="lg"
              w="full"
              py="6"
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="semibold"
              borderRadius="lg"
              boxShadow="lg"
              colorPalette="blue"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "xl",
              }}
              transition="all 0.2s"
            >
              Send Message
            </Button>
          </VStack>
        </Box>

        <VStack gap={{ base: "6", md: "8" }} pt={{ base: "8", md: "12" }}>
          <Text
            fontSize="md"
            color="fg.muted"
            textAlign="center"
            fontWeight="medium"
          >
            Or connect with me on
          </Text>
          <HStack gap={{ base: "4", md: "8" }}>
            <Button
              variant="ghost"
              colorPalette="blue"
              size="lg"
              px="6"
              py="4"
              borderRadius="lg"
              _hover={{
                bg: "bg.emphasized",
                transform: "translateY(-2px)",
              }}
              transition="all 0.2s"
            >
              LinkedIn
            </Button>
            <Button
              variant="ghost"
              colorPalette="blue"
              size="lg"
              px="6"
              py="4"
              borderRadius="lg"
              _hover={{
                bg: "bg.emphasized",
                transform: "translateY(-2px)",
              }}
              transition="all 0.2s"
            >
              GitHub
            </Button>
            <Button
              variant="ghost"
              colorPalette="blue"
              size="lg"
              px="6"
              py="4"
              borderRadius="lg"
              _hover={{
                bg: "bg.emphasized",
                transform: "translateY(-2px)",
              }}
              transition="all 0.2s"
            >
              Email
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
