import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — a blueprint "HS" mark on the steel accent. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5980a6",
          color: "#f2f2f3",
          fontFamily: "sans-serif",
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        HS
      </div>
    ),
    { ...size }
  );
}
