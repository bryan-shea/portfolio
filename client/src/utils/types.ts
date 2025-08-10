/**
 * Type definitions for commonly used types across the application
 */

/**
 * Available background types
 */
export type BackgroundType =
  | "none"
  | "particles"
  | "dots"
  | "shapes"
  | "grid"
  | "orbs"
  | "network";

/**
 * Available color palette names
 */
export type ColorPaletteName =
  | "gray"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "purple"
  | "pink";

/**
 * Badge variant types
 */
export type BadgeVariant = "surface" | "outline" | "solid" | "subtle";

/**
 * Common responsive breakpoint values
 */
export type ResponsiveValue<T> = T | { base?: T; sm?: T; md?: T; lg?: T; xl?: T; "2xl"?: T };

/**
 * Animation timing types
 */
export type AnimationTiming = "smooth" | "quick" | "slow" | "bounce";

/**
 * Scroll behavior types
 */
export type ScrollBehavior = "smooth" | "auto";

/**
 * Theme mode types
 */
export type ThemeMode = "light" | "dark" | "system";

/**
 * Navigation section IDs
 */
export type SectionId = "hero" | "skills" | "projects" | "journey";

/**
 * Contact method types
 */
export type ContactMethod = "email" | "linkedin" | "github" | "phone";

/**
 * Project technology categories
 */
export type TechCategory = "frontend" | "backend" | "database" | "devops" | "mobile" | "other";

/**
 * Skill proficiency levels
 */
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

/**
 * File extension types for downloads
 */
export type FileExtension = "pdf" | "docx" | "txt" | "json";

/**
 * Utility type for making all properties optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Utility type for making specific properties required
 */
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>;
