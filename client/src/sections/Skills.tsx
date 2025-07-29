import {
  Box,
} from "@chakra-ui/react";
import { LogoGrid } from "../components/common";

export const Skills = () => {
  return (
    <Box
      py={{ base: "20", md: "32" }}
      px={{ base: "6", md: "8" }}
	  maxW="9xl"
    >
        {/* Technology Logos Grid */}
        <LogoGrid />
    </Box>
  );
};
