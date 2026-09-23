import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Hithesh HG — Data Analyst & Business Intelligence Specialist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Top Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#10b981",
              fontSize: "18px",
              fontFamily: "monospace",
            }}
          >
            [hhg] • Data Analyst &amp; BI Specialist
          </div>
        </div>

        {/* Center Typography */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            Hithesh HG
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "#d4d4d8",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Transforming complex data into actionable business intelligence, predictive models, and decision-ready dashboards.
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "24px",
            color: "#a1a1aa",
            fontSize: "18px",
            fontFamily: "monospace",
          }}
        >
          <div>SQL • Python • Power BI • Tableau • PostgreSQL</div>
          <div>hitheshhg.qd.je</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
