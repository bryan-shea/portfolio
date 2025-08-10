import { Container, type ContainerProps } from "@chakra-ui/react";
import { type ReactNode } from "react";
import { MotionWrapper } from "./MotionWrapper";
import { type AnimationTiming } from "../utils";

/**
 * Props for the SectionWrapper component
 */
interface SectionWrapperProps extends Omit<ContainerProps, "children"> {
  /** Section content */
  children: ReactNode;
  /** Section ID for navigation */
  sectionId?: string;
  /** Whether to animate the section on entry */
  animated?: boolean;
  /** Animation variant to use */
  animationVariant?:
    | "fadeIn"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "scale";
  /** Animation timing */
  animationTiming?: AnimationTiming;
  /** Whether this is the first section (different padding) */
  isFirst?: boolean;
  /** Custom vertical padding */
  customPy?: ContainerProps["py"];
}

/**
 * Wrapper component for portfolio sections
 * Provides consistent spacing, animation, and layout for sections
 */
export const SectionWrapper = ({
  children,
  sectionId,
  animated = true,
  animationVariant = "fadeIn",
  animationTiming = "smooth",
  isFirst = false,
  customPy,
  ...props
}: SectionWrapperProps) => {
  const defaultPy = isFirst
    ? { base: "0", md: "0" }
    : { base: "6", md: "12", lg: "24" };

  const sectionContent = (
    <Container
      maxW="6xl"
      py={customPy || defaultPy}
      px={{ base: "4", md: "6", lg: "8" }}
      position="relative"
      w="full"
      {...props}
    >
      {children}
    </Container>
  );

  if (animated) {
    return (
      <MotionWrapper
        variant={animationVariant}
        timing={animationTiming}
        id={sectionId}
        style={{ width: "100%" }}
      >
        {sectionContent}
      </MotionWrapper>
    );
  }

  return (
    <div id={sectionId} style={{ width: "100%" }}>
      {sectionContent}
    </div>
  );
};
