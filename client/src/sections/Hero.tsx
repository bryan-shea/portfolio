import {
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  Button,
  Badge,
  VStack,
  Box,
} from "@chakra-ui/react";
import {
  LuArrowRight,
  LuCode,
  LuPalette,
  LuDownload,
  LuMail,
} from "react-icons/lu";
import { ProfilePicture } from "../components/common";
import { motion } from "framer-motion";

export const Hero = () => {
  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    window.open("mailto:your.email@example.com", "_blank");
  };

  const handleDownloadResume = () => {
    // You can replace this with your actual resume download link
    window.open("#", "_blank");
  };

  return (
    <Container
      maxW="6xl"
      py={{ base: "20", md: "24", lg: "32" }}
      px={{ base: "4", md: "6", lg: "8" }}
    >
      <Stack
        gap={{ base: "12", md: "16", lg: "20" }}
        align="center"
        textAlign="center"
        w="full"
      >
        {/* Profile Picture - Primary Focus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ProfilePicture />
        </motion.div>

        <Stack gap={{ base: "8", md: "6" }} maxW={{ md: "4xl" }}>
          {/* Professional Title with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <HStack
              textStyle="sm"
              fontWeight="medium"
              justifyContent="center"
              gap="3"
              color="fg.info"
            >
              <LuCode /> Full-Stack Developer & Designer <LuPalette />
            </HStack>
          </motion.div>

          <Stack gap={{ base: "6", md: "8" }}>
            {/* Name and Key Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Heading
                size={{ base: "4xl", md: "6xl" }}
                lineHeight="shorter"
                letterSpacing="tight"
                color="fg"
              >
                Bryan Shea
              </Heading>
            </motion.div>

            {/* Hireability-focused Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="fg.muted"
                maxW="3xl"
                mx="auto"
                lineHeight="relaxed"
              >
                5+ years building scalable web applications with{" "}
                <Text as="span" fontWeight="semibold" color="fg">
                  React, Node.js, and modern cloud infrastructure
                </Text>
                . I create intuitive user experiences backed by robust,
                performant systems.
              </Text>
            </motion.div>

            {/* Key Skills/Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <HStack justify="center" wrap="wrap" gap="2" mt="4">
                {[
                  "TypeScript",
                  "React",
                  "Node.js",
                  "AWS",
                  "MongoDB",
                  "GraphQL",
                ].map((tech, index) => {
                  const colors = [
                    "blue",
                    "green",
                    "orange",
                    "purple",
                    "teal",
                    "red",
                  ];
                  return (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.9 + index * 0.1,
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge colorPalette={colors[index]} size="md">
                        {tech}
                      </Badge>
                    </motion.div>
                  );
                })}
              </HStack>
            </motion.div>
          </Stack>
        </Stack>

        {/* Call-to-Action Buttons - Recruiter Focused */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        >
          <VStack
            gap={{ base: "4", sm: "4" }}
            align="center"
            pt={{ base: "4", md: "8" }}
            width="full"
          >
            <Flex
              direction={{ base: "column", sm: "row" }}
              gap={{ base: "4", sm: "6" }}
              align="center"
              justify="center"
              width="full"
              maxW="md"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  px="8"
                  py="6"
                  colorPalette="blue"
                  boxShadow="lg"
                  onClick={handleViewWork}
                  _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
                  transition="all 0.2s"
                >
                  View My Work <LuArrowRight />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  px="8"
                  py="6"
                  variant="outline"
                  borderWidth="2px"
                  onClick={handleContact}
                  _hover={{ bg: "bg.subtle", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <LuMail /> Get In Touch
                </Button>
              </motion.div>
            </Flex>

            {/* Resume Download - Secondary Action */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="md"
                variant="ghost"
                onClick={handleDownloadResume}
                color="fg.muted"
                _hover={{ color: "fg" }}
              >
                <LuDownload /> Download Resume
              </Button>
            </motion.div>
          </VStack>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
        >
          <HStack
            justify="center"
            gap="2"
            pt="4"
            fontSize="sm"
            color="fg.muted"
          >
            <Box
              w="2"
              h="2"
              bg="green.500"
              borderRadius="full"
              animation="pulse 2s infinite"
            />
            <Text>Available for new opportunities</Text>
          </HStack>
        </motion.div>
      </Stack>
    </Container>
  );
};
