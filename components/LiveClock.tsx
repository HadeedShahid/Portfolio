"use client";

import { useClock } from "@/hooks/useClock";

/** The ticking time inside the top bar's `LT … PKT` readout. */
export default function LiveClock() {
  const time = useClock();
  return (
    <span suppressHydrationWarning className="text-text font-medium tabular-nums">
      {time}
    </span>
  );
}
