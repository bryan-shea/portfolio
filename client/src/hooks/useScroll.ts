import { useEffect, useState } from "react";

/**
 * Custom hook for smooth scrolling to elements
 * @param behavior - Scroll behavior ('smooth' | 'auto')
 * @returns Function to scroll to element by ID
 */
export function useScrollTo(behavior: ScrollBehavior = "smooth") {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior });
    }
  };

  return scrollToElement;
}

/**
 * Custom hook for tracking scroll position
 * @returns Current scroll position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}

/**
 * Custom hook for detecting if an element is in viewport
 * @param elementId - ID of the element to observe
 * @param threshold - Intersection threshold (0-1)
 * @returns Boolean indicating if element is in viewport
 */
export function useInViewport(elementId: string, threshold = 0.1) {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [elementId, threshold]);

  return isInViewport;
}

/**
 * Custom hook for tracking the currently active section
 * @param sectionIds - Array of section IDs to track
 * @returns ID of the currently active section
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] || ""
  );

  useEffect(() => {
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        // Get all visible sections with their data
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => ({
            id: entry.target.id,
            ratio: entry.intersectionRatio,
            top: entry.boundingClientRect.top,
          }))
          .sort((a, b) => b.ratio - a.ratio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].id);
        }
      },
      {
        threshold: [0, 0.1, 0.25], // Multiple thresholds for better detection
        rootMargin: "-80px 0px -20% 0px", // Less restrictive bottom margin
      }
    );

    // Also add a scroll listener to catch the last section when at page bottom
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom = scrollPosition >= documentHeight - 100;

      if (isNearBottom && sectionIds.length > 0) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
      }
    };

    elements.forEach(element => {
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
