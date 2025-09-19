import {
  Box,
  VStack,
  Text,
  Badge,
  HStack,
  Icon,
  Image,
  Progress,
  Flex,
} from "@chakra-ui/react";
import { LuCalendar, LuTrophy, LuGraduationCap, LuEye } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import type { JourneyProgress } from "../../hooks";

/**
 * Props for the JourneyProgressPanel component
 */
interface JourneyProgressPanelProps {
  /** Current journey progress information */
  progress: JourneyProgress;
  /** Color scheme palette for styling */
  colorScheme: { palette: string };
  /** Callback when certificate is clicked */
  onCertificateClick?: (image: string, title: string) => void;
}

/**
 * Progressive content reveal panel that shows information about the current journey step
 * Animates content changes as the user scrolls through the timeline
 */
export const JourneyProgressPanel = ({
  progress,
  colorScheme,
  onCertificateClick,
}: JourneyProgressPanelProps) => {
  const { currentStep, currentIndex, stepProgress, overallProgress } = progress;

  if (!currentStep) {
    return (
      <Box
        width={{ base: "100%", lg: "400px" }}
        minHeight="300px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        opacity={0.5}
      >
        <Text color="fg.muted" textAlign="center">
          Loading journey...
        </Text>
      </Box>
    );
  }

  return (
    <Box
      width={{ base: "100%", lg: "400px" }}
      position="relative"
      height="fit-content"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`step-${currentStep.id}`}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          <VStack
            gap="6"
            align="stretch"
            p={{ base: "4", md: "6" }}
            bg="bg.surface"
            borderRadius="xl"
            border="1px solid"
            borderColor="border.subtle"
            shadow="lg"
            position="relative"
            overflow="hidden"
          >
            {/* Progress indicator */}
            <Box position="absolute" top="0" left="0" right="0">
              <Progress.Root
                value={stepProgress * 100}
                colorPalette={colorScheme.palette}
                size="xs"
                rounded="none"
              >
                <Progress.Track bg="transparent">
                  <Progress.Range />
                </Progress.Track>
              </Progress.Root>
            </Box>

            {/* Header section */}
            <VStack gap="4" align="stretch" pt="2">
              <Flex justify="space-between" align="flex-start" gap="3">
                <VStack gap="2" align="start" flex="1">
                  <HStack gap="2" align="center">
                    <Badge
                      px="3"
                      py="1"
                      borderRadius="full"
                      colorPalette={colorScheme.palette}
                      variant="solid"
                      fontSize="xs"
                      fontWeight="semibold"
                      textTransform="uppercase"
                    >
                      Step {currentIndex + 1} of{" "}
                      {progress.currentStep
                        ? Object.keys({ length: currentIndex + 1 }).length
                        : 0}
                    </Badge>
                    <Text fontSize="sm" color="fg.muted" fontWeight="medium">
                      {Math.round(stepProgress * 100)}% Complete
                    </Text>
                  </HStack>

                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    color="fg"
                    lineHeight="short"
                  >
                    {currentStep.title}
                  </Text>

                  <HStack gap="3" align="center">
                    <HStack gap="1" color="fg.muted">
                      <Icon as={LuCalendar} boxSize="4" />
                      <Text fontSize="sm" fontWeight="medium">
                        {currentStep.year}
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color="fg.muted">
                      {currentStep.organization}
                    </Text>
                  </HStack>
                </VStack>

                {/* Certificate thumbnail */}
                {currentStep.certImage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <VStack gap="2" align="center">
                      <Box
                        w="20"
                        h="15"
                        borderRadius="lg"
                        overflow="hidden"
                        border="2px solid"
                        borderColor="border.subtle"
                        bg="bg.muted"
                        flexShrink={0}
                        position="relative"
                        cursor="pointer"
                        transition="all 0.2s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                          borderColor: "primary.500",
                          shadow: "md",
                        }}
                        onClick={() =>
                          onCertificateClick?.(
                            currentStep.certImage!,
                            currentStep.title
                          )
                        }
                      >
                        <Image
                          src={currentStep.certImage}
                          alt={`${currentStep.title} certificate`}
                          width="100%"
                          height="100%"
                          objectFit="cover"
                        />

                        {/* Hover overlay */}
                        <Box
                          position="absolute"
                          top="0"
                          left="0"
                          right="0"
                          bottom="0"
                          bg="blackAlpha.700"
                          opacity="0"
                          transition="opacity 0.2s ease-in-out"
                          _hover={{ opacity: "1" }}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <VStack gap="1" color="white">
                            <Icon as={LuEye} boxSize="5" />
                            <Text fontSize="xs" fontWeight="semibold">
                              View
                            </Text>
                          </VStack>
                        </Box>
                      </Box>
                      <Text
                        fontSize="xs"
                        color="fg.muted"
                        textAlign="center"
                        fontWeight="medium"
                      >
                        Certificate
                      </Text>
                    </VStack>
                  </motion.div>
                )}
              </Flex>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="fg.muted"
                  lineHeight="relaxed"
                >
                  {currentStep.description}
                </Text>
              </motion.div>
            </VStack>

            {/* Skills section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <VStack gap="3" align="stretch">
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  color="fg"
                  display="flex"
                  alignItems="center"
                  gap="2"
                >
                  <Icon as={LuGraduationCap} boxSize="5" />
                  Skills Acquired
                </Text>
                <Flex wrap="wrap" gap="2">
                  {currentStep.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.3 + index * 0.05,
                        duration: 0.2,
                      }}
                    >
                      <Badge
                        size="md"
                        variant="outline"
                        colorPalette="primary"
                        fontSize="sm"
                        px="3"
                        py="1"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </Flex>
              </VStack>
            </motion.div>

            {/* Achievement section */}
            {currentStep.achievement && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <HStack
                  gap="3"
                  align="flex-start"
                  p="4"
                  bg="primary.50"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="primary.200"
                >
                  <Icon
                    as={LuTrophy}
                    boxSize="5"
                    color="primary.500"
                    mt="1"
                    flexShrink={0}
                  />
                  <VStack gap="1" align="start">
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                      color="primary.700"
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      Achievement
                    </Text>
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      color="primary.800"
                      lineHeight="snug"
                    >
                      {currentStep.achievement}
                    </Text>
                  </VStack>
                </HStack>
              </motion.div>
            )}

            {/* Overall progress indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <VStack
                gap="2"
                pt="2"
                borderTop="1px solid"
                borderColor="border.subtle"
              >
                <HStack justify="space-between" w="full">
                  <Text fontSize="sm" fontWeight="medium" color="fg.muted">
                    Journey Progress
                  </Text>
                  <Text fontSize="sm" fontWeight="bold" color="fg">
                    {Math.round(overallProgress * 100)}%
                  </Text>
                </HStack>
                <Progress.Root
                  value={overallProgress * 100}
                  colorPalette={colorScheme.palette}
                  size="sm"
                  w="full"
                  borderRadius="full"
                >
                  <Progress.Track>
                    <Progress.Range />
                  </Progress.Track>
                </Progress.Root>
              </VStack>
            </motion.div>
          </VStack>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};
