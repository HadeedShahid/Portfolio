import LiveClock from "./LiveClock";
import StatusTag from "./StatusTag";

/** Top instrument bar: revision + location on the left, clock + status on the right. */
export default function TopBar() {
  return (
    <div id="topBar" className="flex justify-between items-center">
      <div className="flex items-center gap-[26px] phone:hidden">
        <span className="inline-flex items-center border border-accent text-accent text-[11px] tracking-[0.02em] px-[10px] py-[3px]">
          REV 2026.07
        </span>
        <span className="text-[12px] tracking-[0.2em] text-neutral-600">
          LOC 31.55°N 74.34°E — LAHORE, PK
        </span>
      </div>
      <div className="flex items-center gap-[26px] phone:flex-1 phone:justify-between">
        <span className="text-[12px] tracking-[0.2em] text-neutral-600">
          LT <LiveClock /> PKT
        </span>
        <StatusTag />
      </div>
    </div>
  );
}
