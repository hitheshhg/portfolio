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
          backgroundColor: "#0a0000",
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
            background: "radial-gradient(circle, rgba(79, 109, 75, 0.4) 0%, rgba(0,0,0,0) 70%)",
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
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#a3c49e",
              fontSize: "18px",
              fontFamily: "monospace",
            }}
          >
            [hhg] • Data Analyst & BI
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
              fontWeight: "normal",
              color: "#f8f8f7",
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            Hithesh HG
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "#bcbab9",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Turning raw data into actionable insights through SQL, Python, Power BI, and statistical modeling.
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
            color: "#75757a",
            fontSize: "18px",
            fontFamily: "monospace",
          }}
        >
          <div>Next.js • TypeScript • Java • PostgreSQL</div>
          <div>github.com/hitheshhg</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
