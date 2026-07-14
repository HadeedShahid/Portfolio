import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import LowerStack from "@/components/LowerStack";
import Crosshair from "@/components/Crosshair";
import DraftingIntro from "@/components/DraftingIntro";

export default function Home() {
  return (
    <div
      data-screen-label="Industry portfolio"
      className="h-screen box-border flex flex-col justify-between bg-bg relative overflow-x-hidden overflow-y-auto px-[56px] pt-[40px] pb-[44px] hshort:px-[32px] hshort:pt-[20px] hshort:pb-[22px] compact-short:px-[20px] compact-short:pt-[14px] compact-short:pb-[16px] phone:h-[100dvh] phone:px-[18px] phone:pt-[16px] phone:pb-[18px]"
    >
      <TopBar />
      <Hero />
      <LowerStack />
      <Crosshair />
      <DraftingIntro />
    </div>
  );
}
