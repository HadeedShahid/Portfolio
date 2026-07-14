import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Karachi",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

// Client snapshot is a string (value-compared), so re-renders only happen
// when the second actually changes.
const getSnapshot = () => formatter.format(new Date());

// Empty on the server / during hydration to avoid a mismatch.
const getServerSnapshot = () => "";

/** Live Lahore (Asia/Karachi) clock, ticking every second. */
export function useClock(): string {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
