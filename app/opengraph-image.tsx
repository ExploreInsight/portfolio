import { ImageResponse } from "next/og";
import { profile } from "../content";

export const alt = "Chirag Chandel, full-stack developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      display: "flex", width: "100%", height: "100%", background: "#f6f5ef", color: "#191822",
      flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "76px",
    }}>
      <div style={{ color: "#4538c7", fontSize: 29 }}>{profile.title}</div>
      <div style={{ display: "flex", fontSize: 111, letterSpacing: -8, fontWeight: 700 }}>
        {profile.name}<span style={{ color: "#4538c7" }}>.</span>
      </div>
      <div style={{ fontSize: 30, color: "#504d5b" }}>Selected projects · Experience · Résumé</div>
    </div>,
    size,
  );
}
