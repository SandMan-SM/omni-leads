import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Omni Leads LLC — À La Carte Marketing Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #10b981, #34d399, #10b981)", display: "flex" }} />

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
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", display: "flex" }} />
          <span style={{ color: "#10b981", fontSize: 16, fontWeight: 700 }}>À La Carte Marketing</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 56,
            fontWeight: 800,
            background: "linear-gradient(135deg, #10b981, #34d399, #6ee7b7)",
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
        <p style={{ color: "#9ca3af", fontSize: 22, textAlign: "center", maxWidth: 650, marginTop: 16, lineHeight: 1.4 }}>
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
                color: "#d1d5db",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "flex" }} />
              {label}
            </div>
          ))}
        </div>

        {/* Bottom branding */}
        <div style={{ position: "absolute", bottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#6b7280", fontSize: 14 }}>Omni Leads LLC</span>
          <span style={{ color: "#374151" }}>•</span>
          <span style={{ color: "#6b7280", fontSize: 14 }}>omnileads.shop</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
