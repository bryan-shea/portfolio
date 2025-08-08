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
  Highlight,
	AbsoluteCenter
} from "@chakra-ui/react";
import { LuArrowRight, LuCode, LuPalette, LuMail } from "react-icons/lu";
import { ProfilePicture } from "../components/common";
import { motion } from "framer-motion";
import { useMemo } from "react";

export const Hero = () => {
  // Available color palettes and variants for badges
  const colorPalettes = [
    "gray",
    "orange",
    "yellow",
    "green",
	"teal",
    "blue",
    "purple",
    "pink",
  ] as const;
  const variants = ["surface"] as const;

  // Technologies to display
  const technologies = [
    "TypeScript",
    "React",
	"Node.js",
    "GraphQL",
	"MongoDB",
	"AWS",
    "Docker",
  ];

  // Generate random styling for each tech badge on component mount
  const badgeStyles = useMemo(() => {
    // Shuffle the color palettes array to ensure no repeats
    const shuffledColors = [...colorPalettes].sort(() => Math.random() - 0.5);

    return technologies.map((_, index) => ({
      colorPalette: shuffledColors[index], // Use each color exactly once
      variant: variants[Math.floor(Math.random() * variants.length)],
    }));
  }, []); // Empty dependency array ensures this only runs once on mount

  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    window.open("mailto:your.email@example.com", "_blank");
  };

  return (
    <Container
      maxW="6xl"
      py={{ base: "6", md: "12", lg: "40" }}
      px={{ base: "4", md: "6", lg: "8" }}
      mb={{ base: "8", md: "12", lg: "16" }}
    >
      <Stack
        gap={{ base: "8", md: "10", lg: "12" }}
        align="center"
        textAlign="center"
        w="full"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: { _light: "white/80", _dark: "gray.900/10" },
          backdropFilter: "blur(3px)",
          borderRadius: "xl",
          zIndex: -1,
        }}
      >
        {/* Profile Header - Grouped for better alignment */}
        <Stack gap={{ base: "2", md: "4" }} align="center">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProfilePicture />
          </motion.div>

          {/* Name Heading */}
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
              <LuCode /> Senior Full-Stack Engineer • Product Builder{" "}
              <LuPalette />
            </HStack>
          </motion.div>
        </Stack>

        {/* Content Section */}
        <Stack gap={{ base: "2", md: "4" }} maxW={{ md: "6xl" }}>
		  {/* Hireability-focused Description */}
		  <motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
		  >
			<Text
			  fontSize={{ base: "lg", md: "xl" }}
			  color="fg.muted"
			  maxW="4xl"
			  mx="auto"
			  lineHeight="relaxed"
			>
			  Experienced full-stack engineer specializing in{" "}
			  <Highlight
				query={["modern web applications", "cloud-native solutions", "scalable products"]}
				styles={{
				  fontWeight: "medium",
				  color: "fg",
				  bg: { _light: "blue.100/60", _dark: "blue.900/40" },
				  px: "1.5",
				  py: "0.5",
				  rounded: "md",
				}}
			  >
				modern web applications and cloud-native solutions
			  </Highlight>
			  . Focused on building scalable products that drive business growth and deliver exceptional user experiences.
			</Text>
		  </motion.div>

          {/* Key Skills/Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <HStack justify="center" wrap="wrap" gap="2" mt="4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.9 + index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    colorPalette={badgeStyles[index].colorPalette}
                    variant={badgeStyles[index].variant}
                    size="md"
                    fontWeight="semibold"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </HStack>
          </motion.div>
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
                  _hover={{ transform: "translateY(-1px)", boxShadow: "xl" }}
                  transition="all 0.2s"
                >
                  View Portfolio <LuArrowRight />
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
				  colorPalette="blue"
                  borderWidth="2px"
				  borderColor="primary.400"
                  onClick={handleContact}
                  _hover={{ borderColor: "primary.700", bg: "transparent", transform: "translateY(-1px)" }}
                  transition="all 0.2s"
                >
                  <LuMail /> Let's Connect
                </Button>
              </motion.div>
            </Flex>
          </VStack>
        </motion.div>
      </Stack>
    </Container>
  );
};
