import Corners from "./Corners";
import EyeIcon from "@/components/icons/eye.svg";
import DownloadIcon from "@/components/icons/download.svg";

const action =
  "hover-ground flex-1 flex items-center gap-2 px-[20px] no-underline text-inherit text-[17px] compact-short:text-[14px] compact-short:px-[14px] compact-short:py-[8px] phone:text-[14px] phone:px-[14px] phone:py-[10px]";

/** Solid-accent RESUME card: a VIEW | SAVE split split by a hairline divider. */
export default function ResumeCard() {
  return (
    <div
      data-draft=""
      className="blueprint flex flex-col flex-[1.15] bg-accent text-bg compact:col-span-full"
    >
      <Corners />
      <span className="text-[11px] tracking-[0.2em] opacity-75 px-[20px] pt-[12px] compact-short:px-[14px] compact-short:pt-[8px] phone:px-[14px] phone:pt-[9px]">
        RESUME
      </span>
      <span className="flex-1 flex items-stretch">
        <a
          className={action}
          href="/assets/Hadeed_Resume.pdf"
          target="_blank"
          rel="noopener"
        >
          VIEW <EyeIcon aria-hidden="true" />
        </a>
        <span
          aria-hidden="true"
          className="w-px my-2 bg-[color-mix(in_srgb,var(--color-bg)_35%,transparent)]"
        />
        <a
          className={action}
          href="/assets/Hadeed_Resume.pdf"
          download="Hadeed Shahid — Resume.pdf"
        >
          SAVE <DownloadIcon aria-hidden="true" />
        </a>
      </span>
      <span className="h-[12px]" />
    </div>
  );
}
