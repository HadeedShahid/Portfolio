import Corners from "./Corners";
import type { Project } from "@/lib/data";
import ArrowUpRight from "@/components/icons/arrow-up-right.svg";

/** A single selected-work card in the desktop work row. */
export default function ProjectCard({ project }: { project: Project }) {
  const { Logo } = project;
  return (
    <a
      data-draft=""
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="blueprint hover-accent flex-1 flex flex-col justify-between py-[16px] px-[20px] no-underline text-text compact:py-[12px] compact:px-[16px] compact-short:py-[9px] compact-short:px-[12px] compact-short:gap-2"
    >
      <Corners />
      <span className="flex justify-between items-start gap-2">
        <span className="inline-flex items-center h-[34px] max-w-[70%] overflow-hidden compact-short:h-[20px]">
          <Logo aria-hidden="true" className="block h-full w-auto" />
        </span>
        <ArrowUpRight aria-hidden="true" className="flex-none" />
      </span>
      <span className="flex flex-col gap-[2px]">
        <span className="font-heading text-[20px] tracking-[0.04em] uppercase compact-short:text-[16px]">
          {project.name}
        </span>
        <span className="text-[11px] tracking-[0.16em] text-neutral-600 compact-short:hidden">
          {project.domain}
        </span>
      </span>
    </a>
  );
}
