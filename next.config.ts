import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      // Import *.svg files as React components via SVGR (dev + build).
      // svgo disabled so authored attributes (currentColor, stroke-width)
      // survive verbatim; props (width/height/className) spread onto <svg>.
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: { svgo: false },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
