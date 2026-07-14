// SVGR: `.svg` imports resolve to React components (see next.config.ts).
declare module "*.svg" {
  import type { FC, SVGProps } from "react";
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
