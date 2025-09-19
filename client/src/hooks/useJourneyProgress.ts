import { useEffect, useState, useRef } from "react";
import type { JourneyStep } from "../config";

/**
 * Interface for journey progress tracking
 */
export interface JourneyProgress {
  /** The currently active journey step */
  currentStep: JourneyStep | null;
  /** Index of the current step */
  currentIndex: number;
  /** Progress through the current step (0-1) */
  stepProgress: number;
  /** Overall progress through the journey (0-1) */
  overallProgress: number;
}

/**
 * Custom hook for tracking progress through the Journey section
 * Monitors which journey step is currently in view and provides smooth transitions
 *
 * @param steps - Array of journey steps to track
 * @param containerSelector - CSS selector for the journey container (defaults to '#journey')
 * @returns Journey progress information
 */
export function useJourneyProgress(
  steps: readonly JourneyStep[],
  containerSelector = "#journey"
): JourneyProgress {
  const [progress, setProgress] = useState<JourneyProgress>({
    currentStep: steps[0] || null,
    currentIndex: 0,
    stepProgress: 0,
    overallProgress: 0,
  });

  const observerRef = useRef<IntersectionObserver | null>(null);
  const timelineItemsRef = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Find all timeline items within the journey section
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // Clear previous timeline items
    timelineItemsRef.current.clear();

    // Capture the current map reference for cleanup
    const currentTimelineItems = timelineItemsRef.current;

    // Get timeline items based on the step IDs
    steps.forEach((step, index) => {
      // Look for timeline items or create a selector strategy
      const timelineItem =
        container.querySelector(`[data-step-id="${step.id}"]`) ||
        container.querySelectorAll("[data-timeline-item]")[index];

      if (timelineItem) {
        currentTimelineItems.set(step.id, timelineItem as HTMLElement);
      }
    });

    // Create intersection observer for timeline items
    observerRef.current = new IntersectionObserver(
      entries => {
        // Helper function to find step ID from element
        const findStepIdFromElement = (
          element: Element
        ): string | undefined => {
          const directId = element.getAttribute("data-step-id");
          if (directId) return directId;

          const entries = Array.from(currentTimelineItems.entries());
          for (const [stepId, el] of entries) {
            if (el === element) return stepId;
          }
          return undefined;
        };

        // Helper function to find step index by ID
        const findStepIndex = (stepId: string): number => {
          for (let i = 0; i < steps.length; i++) {
            if (steps[i].id === stepId) return i;
          }
          return -1;
        };

        // Helper function to create entry data
        const createEntryData = (entry: IntersectionObserverEntry) => {
          const stepId = findStepIdFromElement(entry.target);
          const stepIndex = stepId ? findStepIndex(stepId) : -1;

          return {
            stepId,
            stepIndex,
            intersectionRatio: entry.intersectionRatio,
            boundingRect: entry.boundingClientRect,
            step: stepIndex >= 0 ? steps[stepIndex] : null,
          };
        };

        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .map(createEntryData)
          .filter(item => item.stepId && item.stepIndex >= 0 && item.step)
          .sort((a, b) => {
            // Primary sort: by intersection ratio (higher is better)
            const ratioDiff = Math.abs(
              a.intersectionRatio - b.intersectionRatio
            );
            if (ratioDiff > 0.1) {
              return b.intersectionRatio - a.intersectionRatio;
            }
            // Secondary sort: by distance from center of screen
            const screenCenter = window.innerHeight / 2;
            const aDistance = Math.abs(
              a.boundingRect.top + a.boundingRect.height / 2 - screenCenter
            );
            const bDistance = Math.abs(
              b.boundingRect.top + b.boundingRect.height / 2 - screenCenter
            );
            return aDistance - bDistance;
          });

        if (visibleEntries.length > 0) {
          const currentEntry = visibleEntries[0];
          const { step, stepIndex, boundingRect } = currentEntry;

          // Calculate step progress based on scroll position within the item
          const itemHeight = boundingRect.height;
          const itemTop = boundingRect.top;
          const viewportHeight = window.innerHeight;
          const viewportCenter = viewportHeight / 2;

          // Calculate how far through this step we are
          let stepProgress = 0;
          if (itemHeight > 0) {
            if (
              itemTop <= viewportCenter &&
              itemTop + itemHeight >= viewportCenter
            ) {
              // Item spans the viewport center
              stepProgress = Math.min(
                1,
                Math.max(0, (viewportCenter - itemTop) / itemHeight)
              );
            } else if (itemTop <= viewportCenter) {
              // Item is above center - mostly or fully scrolled
              stepProgress = 1;
            }
            // If itemTop > viewportCenter, stepProgress remains 0 (just entering)
          }

          // Calculate overall progress through all steps
          const overallProgress =
            steps.length > 0 ? (stepIndex + stepProgress) / steps.length : 0;

          setProgress({
            currentStep: step,
            currentIndex: stepIndex,
            stepProgress,
            overallProgress: Math.min(1, Math.max(0, overallProgress)),
          });
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: "-10% 0px -10% 0px", // Focus on center area of viewport
      }
    );

    // Observe all timeline items
    currentTimelineItems.forEach(element => {
      observerRef.current?.observe(element);
    });

    // Also add scroll listener for fine-tuned progress tracking
    const handleScroll = () => {
      // This will be handled primarily by the intersection observer
      // but we can add additional logic here if needed for smooth animations
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handleScroll);
      // Clear the timeline items map on cleanup
      currentTimelineItems.clear();
    };
  }, [steps, containerSelector]);

  return progress;
}

/**
 * Alternative simpler hook that tracks journey progress based on scroll position
 * Useful as a fallback or for different animation strategies
 */
export function useJourneyScrollProgress(
  steps: readonly JourneyStep[],
  containerSelector = "#journey"
): JourneyProgress {
  const [progress, setProgress] = useState<JourneyProgress>({
    currentStep: steps[0] || null,
    currentIndex: 0,
    stepProgress: 0,
    overallProgress: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(containerSelector);
      if (!container || steps.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;

      // Calculate how far through the container we've scrolled
      let scrollProgress = 0;
      if (
        containerTop <= 0 &&
        containerTop + containerHeight >= viewportHeight
      ) {
        // Container spans beyond viewport
        scrollProgress =
          Math.abs(containerTop) / (containerHeight - viewportHeight);
      } else if (containerTop + containerHeight <= 0) {
        // Container has scrolled past
        scrollProgress = 1;
      }
      // If containerTop > 0, scrollProgress remains 0 (container hasn't reached the top yet)

      scrollProgress = Math.min(1, Math.max(0, scrollProgress));

      // Determine current step based on scroll progress
      const currentStepFloat = scrollProgress * (steps.length - 1);
      const currentIndex = Math.floor(currentStepFloat);
      const stepProgress = currentStepFloat - currentIndex;

      const currentStep = steps[Math.min(currentIndex, steps.length - 1)];

      setProgress({
        currentStep,
        currentIndex,
        stepProgress,
        overallProgress: scrollProgress,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [steps, containerSelector]);

  return progress;
}
