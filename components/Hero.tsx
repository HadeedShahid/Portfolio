import DimensionLine from "./DimensionLine";

/** Centered hero: kicker, oversized name, and the dimension line. */
export default function Hero() {
  return (
    <div className="flex flex-col justify-center flex-1 gap-[26px]">
      <div
        id="kicker"
        className="text-[14px] tracking-[0.24em] text-accent-700 uppercase compact-short:text-[11px] phone:text-[11px]"
      >
        Software Engineer — Front End
      </div>
      <h1
        id="heroTitle"
        className="m-0 font-heading font-semibold uppercase leading-[0.88] tracking-[0.005em] text-[min(13.2vw,190px)] hshort:text-[min(13.2vw,20vh,150px)] compact-short:text-[min(13.2vw,17vh)] phone:text-[19vw] phone:leading-[0.88]"
      >
        Hadeed Shahid
      </h1>
      <DimensionLine />
    </div>
  );
}
