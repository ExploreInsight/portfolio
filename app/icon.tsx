import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%",
      background: "#1d1a29", color: "#ffffff", fontSize: 34, fontWeight: 700, borderRadius: 12,
    }}>
      cc<span style={{ color: "#a599ff" }}>.</span>
    </div>,
    size,
  );
}
