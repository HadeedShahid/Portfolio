import Corners from "./Corners";
import type { Contact } from "@/lib/data";
import ArrowUpRight from "@/components/icons/arrow-up-right.svg";

/** Transparent blueprint contact card: label over value, optional external arrow. */
export default function ContactCard({ contact }: { contact: Contact }) {
  const { Logo } = contact;
  const grow = contact.flex === 1.3 ? "flex-[1.3]" : "flex-[1]";
  const value =
    "text-[16px] font-medium compact-short:text-[13px] phone:text-[13px]";

  return (
    <a
      href={contact.href}
      {...(contact.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`blueprint hover-accent ${grow} flex flex-col justify-center gap-[5px] px-[20px] no-underline text-text compact:py-[14px] compact:px-[18px] compact-short:py-[9px] compact-short:px-[14px] phone:flex-row phone:items-center phone:justify-between phone:py-[11px] phone:px-[14px] phone:gap-[12px]`}
    >
      <Corners />
      <span className="text-[11px] tracking-[0.2em] text-accent-700 compact-short:text-[10px] phone:text-[10px]">
        {contact.label}
      </span>
      {contact.external ? (
        <span
          className={`${value} flex items-center justify-between w-full phone:w-auto phone:gap-2`}
        >
          <span className="flex items-center gap-2 leading-none">
            {Logo ? (
              <Logo aria-hidden="true" className="w-[14px] h-[14px] shrink-0" />
            ) : null}
            {contact.value}
          </span>
          <ArrowUpRight aria-hidden="true" />
        </span>
      ) : (
        <span className={value}>{contact.value}</span>
      )}
    </a>
  );
}
