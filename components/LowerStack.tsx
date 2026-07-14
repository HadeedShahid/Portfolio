import ResumeCard from "./ResumeCard";
import ContactCard from "./ContactCard";
import WorkRow from "./WorkRow";
import MobileWork from "./MobileWork";
import { contacts } from "@/lib/data";

/** Bottom block: the CTA row (resume + contacts), the work row, and the mobile work sheet. */
export default function LowerStack() {
  return (
    <div
      id="lowerStack"
      className="flex flex-col gap-[34px] hshort:gap-4 compact:gap-5 compact-short:gap-3 phone:gap-3"
    >
      <div
        id="ctaRow"
        className="flex items-stretch gap-[18px] h-[92px] compact:grid compact:grid-cols-2 compact:h-auto compact:gap-3 compact-short:gap-[10px] phone:flex phone:flex-col phone:gap-2"
      >
        <ResumeCard />
        {contacts.map((contact) => (
          <ContactCard key={contact.label} contact={contact} />
        ))}
      </div>
      <WorkRow />
      <MobileWork />
    </div>
  );
}
