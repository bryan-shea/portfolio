import { Box, type BoxProps } from "@chakra-ui/react";
import { type ReactNode } from "react";
import { type ResponsiveValue } from "../utils";

/**
 * Props for the ResponsiveWrapper component
 */
interface ResponsiveWrapperProps extends Omit<BoxProps, "children"> {
  /** Content to render */
  children: ReactNode;
  /** Maximum width configuration */
  maxWidth?: ResponsiveValue<string>;
  /** Padding configuration */
  padding?: ResponsiveValue<string | number>;
  /** Whether to center the content */
  centered?: boolean;
  /** Whether to apply full height */
  fullHeight?: boolean;
}

/**
 * Wrapper component for consistent responsive spacing and layout
 * Provides common patterns for containers, sections, and content areas
 */
export const ResponsiveWrapper = ({
  children,
  maxWidth = {
    base: "100%",
    md: "container.md",
    lg: "container.lg",
    xl: "container.xl",
  },
  padding = { base: 4, md: 6, lg: 8 },
  centered = true,
  fullHeight = false,
  ...props
}: ResponsiveWrapperProps) => {
  return (
    <Box
      maxW={maxWidth}
      px={padding}
      py={padding}
      mx={centered ? "auto" : undefined}
      h={fullHeight ? "100vh" : undefined}
      minH={fullHeight ? "100vh" : undefined}
      {...props}
    >
      {children}
    </Box>
  );
};
