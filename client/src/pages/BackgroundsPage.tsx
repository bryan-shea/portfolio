import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BackgroundShowcase } from "../components/backgrounds";

/**
 * Dedicated page for showcasing all available backgrounds
 * Provides a focused view for users to explore background options
 */
export const BackgroundsPage = () => {
  const navigate = useNavigate();

  const handleBackToPortfolio = () => {
    navigate("/");
  };

  return (
    <Box as="main" minH="100vh" minW="99vw" bg="bg.default" overflow="hidden">
      <Button
        position="fixed"
        top="4"
        left="4"
        onClick={handleBackToPortfolio}
        size="sm"
        variant="outline"
        zIndex={1001}
      >
        Back to Portfolio
      </Button>
      <BackgroundShowcase />
    </Box>
  );
};
