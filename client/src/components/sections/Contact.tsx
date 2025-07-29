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
    <Box py={20} px={8} bg="gray.50">
      <VStack gap={8} maxW="4xl" mx="auto">
        <Heading as="h2" size="2xl" textAlign="center" color="gray.800">
          Get In Touch
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="3xl">
          I'm always interested in new opportunities and interesting projects.
          Let's connect and discuss how we can work together!
        </Text>

        <Box w="full" maxW="2xl">
          <VStack gap={4}>
            <HStack gap={4} w="full">
              <Input
                placeholder="Your Name"
                bg="white"
                borderColor="gray.300"
                _hover={{ borderColor: "blue.400" }}
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 1px #3182ce",
                }}
              />
              <Input
                placeholder="Your Email"
                type="email"
                bg="white"
                borderColor="gray.300"
                _hover={{ borderColor: "blue.400" }}
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 1px #3182ce",
                }}
              />
            </HStack>
            <Input
              placeholder="Subject"
              bg="white"
              borderColor="gray.300"
              _hover={{ borderColor: "blue.400" }}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px #3182ce",
              }}
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              bg="white"
              borderColor="gray.300"
              _hover={{ borderColor: "blue.400" }}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px #3182ce",
              }}
            />
            <Button colorScheme="blue" size="lg" w="full">
              Send Message
            </Button>
          </VStack>
        </Box>

        <HStack gap={6} pt={8}>
          <Button variant="ghost" colorScheme="blue">
            LinkedIn
          </Button>
          <Button variant="ghost" colorScheme="blue">
            GitHub
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Email
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
