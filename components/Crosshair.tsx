"use client";

import { useRef } from "react";
import { useCrosshair } from "@/hooks/useCrosshair";

const line =
  "coarse:hidden fixed pointer-events-none opacity-0 bg-[color-mix(in_srgb,var(--color-accent)_40%,transparent)]";

/** Cursor-following crosshair instrument + coordinate readout. Hidden on touch. */
export default function Crosshair() {
  const vertical = useRef<HTMLDivElement>(null);
  const horizontal = useRef<HTMLDivElement>(null);
  const readout = useRef<HTMLDivElement>(null);
  useCrosshair(vertical, horizontal, readout);

  return (
    <>
      <div
        ref={vertical}
        id="chV"
        aria-hidden="true"
        className={`${line} top-0 bottom-0 left-0 w-px`}
      />
      <div
        ref={horizontal}
        id="chH"
        aria-hidden="true"
        className={`${line} left-0 right-0 top-0 h-px`}
      />
      <div
        ref={readout}
        id="chR"
        aria-hidden="true"
        className="coarse:hidden fixed left-0 top-0 py-[3px] px-[8px] text-[11px] tracking-[0.16em] text-accent-800 pointer-events-none whitespace-nowrap opacity-0 bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)]"
      >
        X 0000 · Y 0000
      </div>
    </>
  );
}
