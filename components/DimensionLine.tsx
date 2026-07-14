"use client";

import { useViewportDimensions } from "@/hooks/useViewportDimensions";

/** Decorative dimension line under the hero, with a live viewport readout. */
export default function DimensionLine() {
  const viewport = useViewportDimensions();
  const readout = viewport
    ? `DIM ${viewport.width} × ${viewport.height} — SINGLE VIEWPORT`
    : "DIM 1440 × 900 — SINGLE VIEWPORT";

  return (
    <div
      id="dimWrap"
      data-draft=""
      aria-hidden="true"
      className="flex items-center gap-[10px] text-accent-700 w-[min(880px,100%)]"
    >
      <div className="w-px h-[10px] bg-current" />
      <div data-dimline="l" className="flex-1 h-px bg-current" />
      <div
        id="dimText"
        suppressHydrationWarning
        className="text-[12px] tracking-[0.2em] whitespace-nowrap compact-short:text-[10px] phone:text-[10px] phone:tracking-[0.14em]"
      >
        {readout}
      </div>
      <div data-dimline="r" className="flex-1 h-px bg-current" />
      <div className="w-px h-[10px] bg-current" />
    </div>
  );
}
