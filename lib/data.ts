import type { FC, SVGProps } from "react";
import Hatla2eeLogo from "@/components/logos/hatla2ee.svg";
import OlxLogo from "@/components/logos/olx.svg";
import BayutLogo from "@/components/logos/bayut.svg";
import DubizzleLogo from "@/components/logos/dubizzle.svg";
import XLogo from "@/components/logos/x.svg";

export type Contact = {
  label: string;
  value: string;
  href: string;
  /** Opens in a new tab (external link) and shows a trailing arrow. */
  external?: boolean;
  /** flex-grow of the card in the desktop CTA row. */
  flex: number;
  /** Optional brand mark shown beside the value. */
  Logo?: FC<SVGProps<SVGSVGElement>>;
};

export const contacts: Contact[] = [
  {
    label: "EMAIL",
    value: "hadeed.shahid08@gmail.com",
    href: "mailto:hadeed.shahid08@gmail.com",
    flex: 1.3,
  },
  {
    label: "LINKEDIN",
    value: "/in/hadeedshahid",
    href: "https://www.linkedin.com/in/hadeedshahid",
    external: true,
    flex: 1,
  },
  {
    label: "GITHUB",
    value: "@HadeedShahid",
    href: "https://github.com/HadeedShahid",
    external: true,
    flex: 1,
  },
  {
    label: "X.COM",
    value: "@hadeedshahid",
    href: "https://x.com/hadeedshahid",
    external: true,
    flex: 1,
    Logo: XLogo,
  },
];

export type Project = {
  name: string;
  /** Live site domain, shown as the card subtitle. */
  domain: string;
  url: string;
  /** Brand mark, rendered through the `.duotone` accent wash. */
  Logo: FC<SVGProps<SVGSVGElement>>;
};

export const projects: Project[] = [
  {
    name: "Hatla2ee",
    domain: "eg.hatla2ee.com",
    url: "https://eg.hatla2ee.com",
    Logo: Hatla2eeLogo,
  },
  {
    name: "OLX",
    domain: "olx.com.pk",
    url: "https://www.olx.com.pk",
    Logo: OlxLogo,
  },
  {
    name: "Bayut",
    domain: "bayut.sa",
    url: "https://www.bayut.sa",
    Logo: BayutLogo,
  },
  {
    name: "Dubizzle",
    domain: "dubizzle.com.eg",
    url: "https://www.dubizzle.com.eg",
    Logo: DubizzleLogo,
  },
];
