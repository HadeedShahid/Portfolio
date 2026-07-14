/** "STATUS: AVAILABLE" tag with a CSS-animated pulsing dot. */
export default function StatusTag() {
  return (
    <span className="inline-flex items-center gap-[7px] bg-accent-100 text-accent-800 text-[11px] tracking-[0.02em] px-[10px] py-[3px]">
      <span className="status-dot w-1.5 h-1.5 rounded-full bg-current" />
      STATUS: AVAILABLE
    </span>
  );
}
