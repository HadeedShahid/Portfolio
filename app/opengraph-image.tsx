import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#1d1f20";
const ground = "#f2f2f3";
const accent = "#5980a6";
const accent100 = "#eef6ff";
const accent700 = "#416180";
const accent800 = "#2c455d";
const neutral600 = "#7a7a7d";
const divider = "rgba(29,31,32,0.18)";

function CornerMark(style: React.CSSProperties) {
  return (
    <div
      style={{
        position: "absolute",
        color: accent,
        fontSize: 40,
        lineHeight: 1,
        ...style,
      }}
    >
      +
    </div>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: ground,
          color: ink,
          padding: 64,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Blueprint frame + registration marks */}
        <div
          style={{
            position: "absolute",
            inset: 30,
            border: `1px solid ${divider}`,
          }}
        />
        <CornerMark top={12} left={12} />
        <CornerMark top={12} right={12} />
        <CornerMark bottom={12} left={12} />
        <CornerMark bottom={12} right={12} />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              border: `1px solid ${accent}`,
              color: accent,
              padding: "6px 16px",
              fontSize: 22,
              letterSpacing: 2,
            }}
          >
            REV 2026.07
          </div>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, color: neutral600 }}>
            LOC 31.55°N 74.34°E — LAHORE, PK
          </div>
        </div>

        {/* Hero */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: 8,
              color: accent700,
              textTransform: "uppercase",
            }}
          >
            Software Engineer — Front End
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              fontWeight: 800,
              letterSpacing: -4,
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            Hadeed Shahid
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, width: 900, color: accent700 }}>
            <div style={{ width: 1, height: 14, background: accent700 }} />
            <div style={{ flex: 1, height: 1, background: accent700 }} />
            <div style={{ display: "flex", fontSize: 20, letterSpacing: 4, whiteSpace: "nowrap" }}>
              PORTFOLIO — SINGLE VIEWPORT
            </div>
            <div style={{ flex: 1, height: 1, background: accent700 }} />
            <div style={{ width: 1, height: 14, background: accent700 }} />
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: accent100,
              color: accent800,
              padding: "8px 16px",
              fontSize: 22,
              letterSpacing: 2,
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 12, background: accent800 }} />
            STATUS: AVAILABLE
          </div>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 2, fontWeight: 600 }}>
            HATLA2EE · OLX · BAYUT · DUBIZZLE
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
