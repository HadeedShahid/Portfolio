import { RefObject, useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Cursor-following crosshair instrument: two hairline rules that lerp toward
 * the pointer plus a zero-padded coordinate readout. Mutates the given nodes
 * imperatively inside a rAF loop (never re-renders). No-op under reduced motion.
 */
export function useCrosshair(
  vRef: RefObject<HTMLDivElement | null>,
  hRef: RefObject<HTMLDivElement | null>,
  rRef: RefObject<HTMLDivElement | null>
): void {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const v = vRef.current;
    const h = hRef.current;
    const r = rRef.current;
    if (!v || !h || !r) return;

    let mx = -100;
    let my = -100;
    let cx = -100;
    let cy = -100;
    let seen = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      seen = true;
    };
    const onLeave = () => {
      seen = false;
    };

    const pad = (n: number) =>
      String(Math.max(0, Math.round(n))).padStart(4, "0");

    const tick = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      const opacity = seen ? "1" : "0";
      v.style.opacity = opacity;
      h.style.opacity = opacity;
      r.style.opacity = opacity;
      v.style.transform = `translateX(${cx.toFixed(1)}px)`;
      h.style.transform = `translateY(${cy.toFixed(1)}px)`;
      const flipX = cx > window.innerWidth - 170;
      const flipY = cy > window.innerHeight - 50;
      r.style.transform = `translate(${(cx + (flipX ? -158 : 14)).toFixed(
        1
      )}px, ${(cy + (flipY ? -34 : 12)).toFixed(1)}px)`;
      r.textContent = `X ${pad(cx)} · Y ${pad(cy)}`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [vRef, hRef, rRef]);
}
