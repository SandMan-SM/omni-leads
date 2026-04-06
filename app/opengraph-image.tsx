import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Omni Leads LLC — À La Carte Marketing Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* OG images render as edge functions — can't use CSS variables.
   Keep these synced with globals.css :root vars. */
const OL_NAVY = "#0f172a";
const OL_NAVY_LIGHT = "#1e293b";
const OL_EMERALD = "#10b981";
const OL_EMERALD_LIGHT = "#34d399";
const OL_EMERALD_PALE = "#6ee7b7";
const OL_GRAY_400 = "#9ca3af";
const OL_GRAY_300 = "#d1d5db";
const OL_GRAY_600 = "#4b5563";
const OL_GRAY_700 = "#374151";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${OL_NAVY} 0%, ${OL_NAVY_LIGHT} 50%, ${OL_NAVY} 100%)`,
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${OL_EMERALD}, ${OL_EMERALD_LIGHT}, ${OL_EMERALD})`, display: "flex" }} />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            background: "rgba(16, 185, 129, 0.15)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: 50,
            marginBottom: 24,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: OL_EMERALD, display: "flex" }} />
          <span style={{ color: OL_EMERALD, fontSize: 16, fontWeight: 700 }}>À La Carte Marketing</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 56,
            fontWeight: 800,
            background: `linear-gradient(135deg, ${OL_EMERALD}, ${OL_EMERALD_LIGHT}, ${OL_EMERALD_PALE})`,
            backgroundClip: "text",
            color: "transparent",
            textAlign: "center",
            lineHeight: 1.1,
            margin: 0,
            maxWidth: 800,
          }}
        >
          Omni Leads LLC
        </h1>

        {/* Subtitle */}
        <p style={{ color: OL_GRAY_400, fontSize: 22, textAlign: "center", maxWidth: 650, marginTop: 16, lineHeight: 1.4 }}>
          Pick the marketing services you need. Pay only for what you use.
        </p>

        {/* Service pills */}
        <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
          {["SEO", "GMB", "Content", "Citations", "Press", "Backlinks"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 16px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 50,
                color: OL_GRAY_300,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: OL_EMERALD, display: "flex" }} />
              {label}
            </div>
          ))}
        </div>

        {/* Bottom branding */}
        <div style={{ position: "absolute", bottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: OL_GRAY_600, fontSize: 14 }}>Omni Leads LLC</span>
          <span style={{ color: OL_GRAY_700 }}>•</span>
          <span style={{ color: OL_GRAY_600, fontSize: 14 }}>omnileads.shop</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
