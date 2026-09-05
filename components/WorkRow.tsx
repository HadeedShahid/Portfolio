import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

/** Desktop "selected work" row: a fixed legend + four project cards. Hidden on phones. */
export default function WorkRow() {
  return (
    <div
      id="workRow"
      className="flex items-stretch gap-[18px] h-[128px] phone:hidden compact:grid compact:grid-cols-2 compact:h-auto compact:gap-3 compact-short:gap-[10px]"
    >
      <div className="w-[158px] flex-none flex flex-col justify-center gap-[5px] compact:col-span-full compact:w-auto compact:flex-row compact:justify-between">
        <span className="text-[11px] tracking-[0.2em] text-neutral-600">
          SELECTED WORK
        </span>
        <span className="text-[11px] tracking-[0.2em] text-neutral-600">
          P-01 — P-04
        </span>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
