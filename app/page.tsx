import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import LowerStack from "@/components/LowerStack";

export default function Home() {
  return (
    <div
      data-screen-label="Industry portfolio"
      className="h-screen box-border flex flex-col justify-between bg-bg relative overflow-x-hidden overflow-y-auto px-[56px] pt-[40px] pb-[44px] hshort:px-[32px] hshort:pt-[20px] hshort:pb-[22px] compact-short:px-[20px] compact-short:pt-[14px] compact-short:pb-[16px] phone:h-[100dvh] phone:px-[18px] phone:pt-[16px] phone:pb-[18px]"
    >
      {/* Accessible, indexable summary — read by screen readers and crawlers,
          visually hidden so the single-viewport design is unchanged. */}
      <p className="sr-only">
        Hadeed Shahid is a front-end software engineer based in Lahore, Pakistan,
        available for hire for remote and on-site roles. He builds fast,
        accessible web applications with React, Next.js, and TypeScript, with
        work spanning Hatla2ee, OLX, Bayut, and Dubizzle. Available to hire a
        front-end developer or software engineer in Pakistan or remotely.
      </p>
      <TopBar />
      <Hero />
      <LowerStack />
    </div>
  );
}
