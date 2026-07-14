import { useEffect } from "react";
import { DRAFT_EASE, prefersReducedMotion } from "@/lib/motion";

/**
 * One-shot "drafting" intro played on mount: the title condenses into
 * register, framed blocks fade up in a stagger, the dimension line draws
 * outward, and every corner mark pops in. Pure Web Animations API — no
 * library, no re-renders. No-op under reduced motion.
 *
 * It enhances server-rendered markup, so it selects the animated nodes by
 * their `data-*` / id hooks rather than holding refs to each one.
 */
export function useDraftingIntro(): void {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const all = (selector: string) =>
      Array.from(document.querySelectorAll(selector));

    document.getElementById("heroTitle")?.animate(
      [
        { opacity: 0, letterSpacing: "0.14em" },
        { opacity: 1, letterSpacing: "0.005em" },
      ],
      { duration: 1100, delay: 100, easing: DRAFT_EASE, fill: "backwards" }
    );

    all("[data-draft]").forEach((el, i) => {
      el.animate(
        [
          { opacity: 0, transform: "translateY(10px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 600,
          delay: 300 + i * 70,
          easing: "ease-out",
          fill: "backwards",
        }
      );
    });

    all("[data-dimline]").forEach((el) => {
      const line = el as HTMLElement;
      line.style.transformOrigin =
        line.dataset.dimline === "l" ? "right" : "left";
      line.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], {
        duration: 900,
        delay: 700,
        easing: DRAFT_EASE,
        fill: "backwards",
      });
    });

    all(".blueprint > .corner").forEach((el, i) => {
      el.animate(
        [
          { transform: "scale(0)" },
          { transform: "scale(1.6)", offset: 0.7 },
          { transform: "scale(1)" },
        ],
        {
          duration: 480,
          delay: 600 + i * 22,
          easing: "ease-out",
          fill: "backwards",
        }
      );
    });
  }, []);
}
