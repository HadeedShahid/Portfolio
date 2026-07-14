"use client";

import { useState } from "react";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { projects } from "@/lib/data";
import Corners from "./Corners";
import ChevronUp from "@/components/icons/chevron-up.svg";
import XIcon from "@/components/icons/x.svg";
import ArrowUpRight from "@/components/icons/arrow-up-right.svg";

/** Phone-only "selected work" trigger + bottom sheet. Hidden on desktop. */
export default function MobileWork() {
  const [open, setOpen] = useState(false);
  useEscapeKey(() => setOpen(false));

  return (
    <>
      <button
        id="workTrigger"
        type="button"
        onClick={() => setOpen(true)}
        className="blueprint hover-accent-strong hidden phone:flex items-center justify-between gap-3 p-[12px] px-[14px] bg-transparent font-body text-text cursor-pointer w-full text-left"
      >
        <Corners />
        <span className="text-[10px] tracking-[0.2em] text-accent-700">
          SELECTED WORK
        </span>
        <span className="text-[13px] font-medium flex items-center gap-2">
          P-01 — P-04 <ChevronUp aria-hidden="true" />
        </span>
      </button>

      <div
        id="sheetBackdrop"
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`desk:hidden fixed inset-0 z-40 bg-[color-mix(in_srgb,var(--color-text)_45%,transparent)] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        id="workSheet"
        role="dialog"
        aria-label="Selected work"
        className={`blueprint desk:hidden fixed left-[10px] right-[10px] bottom-[10px] z-[41] bg-bg p-[16px] flex flex-col gap-[6px] transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-y-0" : "translate-y-[calc(100%+24px)]"
        }`}
      >
        <Corners />
        <div className="flex items-center justify-between pb-2">
          <span className="text-[11px] tracking-[0.2em] text-accent-700">
            SELECTED WORK — P-01 — P-04
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="flex p-[6px] -m-[6px] bg-transparent border-0 text-text cursor-pointer hover:text-accent-700 active:text-accent-700"
          >
            <XIcon aria-hidden="true" />
          </button>
        </div>
        {projects.map((project) => {
          const { Logo } = project;
          return (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-[13px] px-[2px] no-underline text-text border-t border-neutral-300"
            >
              <span className="inline-flex items-center h-[24px] max-w-[40%] overflow-hidden flex-none">
                <Logo aria-hidden="true" className="block h-full w-auto" />
              </span>
              <span className="font-heading text-[18px] tracking-[0.04em] uppercase flex-1">
                {project.name}
              </span>
              <ArrowUpRight aria-hidden="true" className="flex-none" />
            </a>
          );
        })}
      </div>
    </>
  );
}
