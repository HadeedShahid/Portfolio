/** True when the user has requested reduced motion. SSR-safe. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Drafting-motion easing used throughout the Industry system. */
export const DRAFT_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
