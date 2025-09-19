import { useMemo } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import type { ResponsiveValue } from "../utils/types";

/**
 * Hook for consistent responsive value management
 * Provides a clean interface for handling responsive props across components
 *
 * @param values - Responsive value object or single value
 * @returns Resolved value for current breakpoint
 *
 * @example
 * const fontSize = useResponsiveValue({ base: 'md', md: 'lg', xl: '2xl' });
 * const spacing = useResponsiveValue(4); // single value for all breakpoints
 */
export function useResponsiveValue<T>(values: ResponsiveValue<T>): T {
  const resolvedValue = useBreakpointValue(
    typeof values === "object" && values !== null && !Array.isArray(values)
      ? (values as Record<string, T>)
      : { base: values }
  );

  return useMemo(() => {
    // Return the resolved value or fall back to base/original value
    if (resolvedValue !== undefined) {
      return resolvedValue;
    }

    // Fallback logic for edge cases
    if (
      typeof values === "object" &&
      values !== null &&
      !Array.isArray(values)
    ) {
      const objectValues = values as Record<string, T>;
      return objectValues.base || Object.values(objectValues)[0];
    }

    return values;
  }, [resolvedValue, values]);
}

/**
 * Hook for responsive boolean values
 * Useful for show/hide logic based on screen size
 *
 * @param values - Responsive boolean configuration
 * @returns Boolean value for current breakpoint
 *
 * @example
 * const isMobile = useResponsiveBoolean({ base: true, md: false });
 * const showSidebar = useResponsiveBoolean({ base: false, lg: true });
 */
export function useResponsiveBoolean(
  values: ResponsiveValue<boolean>
): boolean {
  return useResponsiveValue(values);
}

/**
 * Hook for responsive numeric values with fallbacks
 * Includes common patterns for spacing, sizing, etc.
 *
 * @param values - Responsive numeric configuration
 * @param fallback - Fallback value if resolution fails
 * @returns Numeric value for current breakpoint
 *
 * @example
 * const columns = useResponsiveNumber({ base: 1, md: 2, lg: 3 }, 1);
 * const padding = useResponsiveNumber({ base: 4, md: 6, lg: 8 }, 4);
 */
export function useResponsiveNumber(
  values: ResponsiveValue<number>,
  fallback: number = 0
): number {
  const resolved = useResponsiveValue(values);
  return typeof resolved === "number" ? resolved : fallback;
}

/**
 * Hook for responsive string values
 * Useful for variant names, size props, etc.
 *
 * @param values - Responsive string configuration
 * @param fallback - Fallback string value
 * @returns String value for current breakpoint
 *
 * @example
 * const buttonSize = useResponsiveString({ base: 'sm', md: 'md', lg: 'lg' }, 'md');
 * const variant = useResponsiveString({ base: 'outline', md: 'solid' }, 'outline');
 */
export function useResponsiveString(
  values: ResponsiveValue<string>,
  fallback: string = ""
): string {
  const resolved = useResponsiveValue(values);
  return typeof resolved === "string" ? resolved : fallback;
}
