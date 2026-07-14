import { useEffect, useRef } from "react";

/** Calls `handler` whenever Escape is pressed, without re-binding on every render. */
export function useEscapeKey(handler: () => void): void {
  const handlerRef = useRef(handler);

  // Keep the ref current without touching it during render.
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handlerRef.current();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
}
