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
