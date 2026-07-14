import { useEffect, useState } from "react";

export type Viewport = { width: number; height: number };

/**
 * Live inner viewport size, updated on resize. Returns `null` until mounted
 * so the caller can render a stable SSR placeholder.
 */
export function useViewportDimensions(): Viewport | null {
  const [viewport, setViewport] = useState<Viewport | null>(null);

  useEffect(() => {
    const update = () =>
      setViewport({ width: window.innerWidth, height: window.innerHeight });

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return viewport;
}
