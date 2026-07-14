import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inline the CSS into the HTML <head> instead of a render-blocking
    // external stylesheet. This is a single-viewport, one-visit page, so the
    // stylesheet cache is never reused — inlining removes a round-trip and
    // improves LCP/FCP.
    inlineCss: true,
  },
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
