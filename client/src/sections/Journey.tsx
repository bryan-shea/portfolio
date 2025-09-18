import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  Timeline,
} from "@chakra-ui/react";
import { LuGraduationCap, LuTrophy, LuEye } from "react-icons/lu";
import { motion } from "framer-motion";
import { useState } from "react";
import { journeyMilestones } from "../config";
import { useColors } from "../contexts";
import { CertificateModal } from "../wrappers";

export const Journey = () => {
  const { colorScheme } = useColors();
  const [selectedCert, setSelectedCert] = useState<{
    image: string;
    title: string;
  } | null>(null);

  const openCertModal = (image: string, title: string) => {
    setSelectedCert({ image, title });
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };
  return (
    <Container
      maxW="6xl"
      py={{ base: "6", md: "12", lg: "16" }}
      px={{ base: "4", md: "6", lg: "8" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <VStack gap="1" textAlign="center" mb="12">
          <Badge
            px="4"
            py="2"
            borderRadius="full"
            colorPalette={colorScheme.palette}
            variant="solid"
            fontSize="sm"
            fontWeight="semibold"
            letterSpacing="wide"
            textTransform="uppercase"
          >
            Developer Journey
          </Badge>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            maxW="3xl"
            lineHeight="relaxed"
          >
            From self-directed learning to enterprise-ready solutions—discover
            how I transformed curiosity into expertise through strategic
            skill-building, real-world projects, and industry certifications
            that deliver measurable results.
          </Text>
        </VStack>
      </motion.div>

      <VStack gap="2" mt="12" py={2} px={{ base: "4", md: "6", lg: "8" }}>
        <Timeline.Root
          size={{ base: "md", md: "xl" }}
          variant="solid"
          colorPalette={colorScheme.palette}
          maxW="6xl"
          w="full"
          mx="auto"
        >
          {journeyMilestones.map((milestone, index) => {
            console.log(
              `Milestone ${milestone.id} certImage:`,
              milestone.certImage
            );

            return (
              <Timeline.Item key={milestone.id} py={{ base: "4", md: "8" }}>
                {/* Year Display - Left for even, Right for odd */}
                <Timeline.Content w="auto" minW={{ base: "20", md: "24" }}>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <VStack gap="1" align={"end"}>
                      <Text fontSize="md" fontWeight="bold" color="bg.inverted">
                        {milestone.year}
                      </Text>
                    </VStack>
                  </motion.div>
                </Timeline.Content>

                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator>
                    <Icon as={LuGraduationCap} boxSize="4" />
                  </Timeline.Indicator>
                </Timeline.Connector>

                {/* Main Content - Clean Professional Design */}
                <Timeline.Content
                  bg="bg.surface"
                  border="1px solid"
                  borderColor="border.subtle"
                  borderRadius="lg"
                  p={{ base: "4", md: "6" }}
                  position="relative"
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    borderColor: "primary.500",
                    shadow: "md",
                    transform: "translateY(-1px)",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <VStack gap="4" align="start" w="full">
                      {/* Header with optional certificate thumbnail */}
                      <HStack gap="3" align="start" w="full">
                        <VStack gap="2" align="start" flex="1">
                          <Timeline.Title
                            fontSize={{ base: "lg", md: "xl" }}
                            fontWeight="bold"
                            color="fg"
                            lineHeight="short"
                          >
                            {milestone.title}
                          </Timeline.Title>
                          <Timeline.Description
                            color="fg.muted"
                            fontSize={{ base: "sm", md: "md" }}
                            lineHeight="relaxed"
                          >
                            {milestone.description}
                          </Timeline.Description>
                        </VStack>

                        {/* Certificate thumbnail with view overlay */}
                        {milestone.certImage && (
                          <VStack gap="1" align="center">
                            <Box
                              w={{ base: "12", md: "16" }}
                              h={{ base: "9", md: "12" }}
                              borderRadius="md"
                              overflow="hidden"
                              border="1px solid"
                              borderColor="border.subtle"
                              bg="bg.muted"
                              flexShrink={0}
                              position="relative"
                              cursor="pointer"
                              transition="all 0.2s ease-in-out"
                              _hover={{
                                transform: "scale(1.02)",
                                borderColor: "primary.500",
                              }}
                              onClick={() =>
                                openCertModal(
                                  milestone.certImage!,
                                  milestone.title
                                )
                              }
                            >
                              <img
                                src={milestone.certImage}
                                alt={`${milestone.title} certificate`}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                              {/* View overlay */}
                              <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bg="blackAlpha.600"
                                opacity="0"
                                transition="opacity 0.2s ease-in-out"
                                _hover={{ opacity: "1" }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <VStack gap="1" color="white">
                                  <Icon as={LuEye} boxSize="4" />
                                  <Text fontSize="xs" fontWeight="medium">
                                    View
                                  </Text>
                                </VStack>
                              </Box>
                            </Box>
                            <Text
                              fontSize="xs"
                              color="fg.muted"
                              textAlign="center"
                              lineHeight="tight"
                            >
                              Certificate
                            </Text>
                          </VStack>
                        )}
                      </HStack>

                      {/* Skills section */}
                      <VStack gap="2" align="start" w="full">
                        <Text fontSize="sm" fontWeight="semibold" color="fg">
                          Skills Acquired:
                        </Text>
                        <HStack wrap="wrap" gap="1">
                          {milestone.skills.map(skill => (
                            <Badge
                              key={skill}
                              size="sm"
                              variant="outline"
                              colorPalette="primary"
                              fontSize="xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </HStack>
                      </VStack>

                      {/* Achievement section */}
                      <HStack gap="2" align="center" w="full">
                        <Icon as={LuTrophy} boxSize="4" color="primary.500" />
                        <Text fontSize="sm" fontWeight="medium" color="fg">
                          {milestone.achievement}
                        </Text>
                      </HStack>
                    </VStack>
                  </motion.div>
                </Timeline.Content>
              </Timeline.Item>
            );
          })}
        </Timeline.Root>
      </VStack>

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          isOpen={!!selectedCert}
          onClose={closeCertModal}
          imageUrl={selectedCert.image}
          title={selectedCert.title}
        />
      )}
    </Container>
  );
};
