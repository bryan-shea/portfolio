/**
 * Navigation configuration
 * Defines all navigation structure including footer links, pages, and sections
 */

// ============================================================================
// NAVIGATION TYPES
// ============================================================================

/**
 * Interface for navigation link
 */
export interface NavigationLink {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
  readonly ariaLabel?: string;
}

/**
 * Interface for navigation group (for footer columns)
 */
export interface NavigationGroup {
  readonly title: string;
  readonly links: readonly NavigationLink[];
}

/**
 * Interface for page navigation
 */
export interface PageNavigation {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
  readonly isActive?: boolean;
}

// ============================================================================
// FOOTER NAVIGATION CONFIGURATION
// ============================================================================

/**
 * Footer navigation groups configuration
 * Defines the navigation columns shown in the footer
 */
export const footerNavigationGroups: readonly NavigationGroup[] = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/#projects" },
      { label: "Journey", href: "/#journey" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      {
        label: "Resume",
        href: "/resume.pdf",
        isExternal: true,
        ariaLabel: "Download Resume (PDF)",
      },
      { label: "Code Samples", href: "/samples" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bryan-shea",
        isExternal: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/bryan-shea-79882631b/",
        isExternal: true,
      },
      {
        label: "Email",
        href: "mailto:bryanshea88@gmail.com",
        ariaLabel: "Send email to Bryan",
      },
      {
        label: "Schedule Call",
        href: "/schedule",
        ariaLabel: "Schedule a call with Bryan",
      },
    ],
  },
];

/**
 * Legal/policy links for footer bottom
 */
export const footerLegalLinks: readonly NavigationLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

// ============================================================================
// MAIN NAVIGATION CONFIGURATION
// ============================================================================

/**
 * Main page navigation configuration
 * For future use when adding proper routing
 */
export const mainNavigation: readonly PageNavigation[] = [
  {
    label: "Home",
    href: "/",
    description: "Welcome & introduction",
  },
  {
    label: "Projects",
    href: "/projects",
    description: "Featured work & portfolio",
  },
  {
    label: "Journey",
    href: "/journey",
    description: "Education & experience",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Thoughts & tutorials",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch",
  },
];

// ============================================================================
// BREADCRUMB CONFIGURATION
// ============================================================================

/**
 * Interface for breadcrumb item
 */
export interface BreadcrumbItem {
  readonly label: string;
  readonly href?: string;
  readonly isCurrentPage?: boolean;
}

/**
 * Breadcrumb configuration for different pages
 * For future use with proper routing
 */
export const breadcrumbConfig: Record<string, readonly BreadcrumbItem[]> = {
  "/": [{ label: "Home", isCurrentPage: true }],
  "/projects": [
    { label: "Home", href: "/" },
    { label: "Projects", isCurrentPage: true },
  ],
  "/journey": [
    { label: "Home", href: "/" },
    { label: "Journey", isCurrentPage: true },
  ],
  "/blog": [
    { label: "Home", href: "/" },
    { label: "Blog", isCurrentPage: true },
  ],
  "/contact": [
    { label: "Home", href: "/" },
    { label: "Contact", isCurrentPage: true },
  ],
};
