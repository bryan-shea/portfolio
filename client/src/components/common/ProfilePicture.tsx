import { Image } from "@chakra-ui/react";
import { Headshot } from "../../assets";

/**
 * Profile picture component with optimized rendering for clarity
 * Uses higher resolution display and proper sizing for crisp appearance
 */
export const ProfilePicture = () => (
  <Image
    src={Headshot}
    boxSize={{ base: "120px", md: "140px", lg: "160px" }}
    borderRadius="full"
    fit="cover"
    alt="Bryan Shea - Full Stack Developer"
    loading="eager"
    // Enhanced rendering for crisp display
    style={{
      imageRendering: "auto",
      backfaceVisibility: "hidden",
      transform: "translateZ(0)", // Hardware acceleration
    }}
    // Add subtle shadow and border for professional appearance
    boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
    border="4px solid"
    borderColor="bg.emphasized"
    transition="all 0.3s ease"
    _hover={{
      transform: "scale(1.05)",
      boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
      borderColor: "primary.500",
    }}
  />
);
