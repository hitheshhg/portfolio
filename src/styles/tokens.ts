/**
 * Design Tokens for Hithesh HG - Data Analyst & BI Portfolio
 * Master-crafted color system for crisp Light and Obsidian Dark modes
 */

export const tokens = {
  colors: {
    canvas: {
      dark: "#09090b", // Deep obsidian canvas
      light: "#f8fafc", // Clean Nordic slate canvas
    },
    card: {
      dark: "#111113", // Sleek matte bento surface
      light: "#ffffff", // Pure white card surface
    },
    border: {
      dark: "rgba(255, 255, 255, 0.08)",
      darkHover: "rgba(255, 255, 255, 0.18)",
      light: "rgba(15, 23, 42, 0.08)",
      lightHover: "rgba(15, 23, 42, 0.18)",
    },
    text: {
      primaryDark: "#ffffff",
      secondaryDark: "#d4d4d8",
      mutedDark: "#a1a1aa",
      subtleDark: "#71717a",
      primaryLight: "#09090b",
      secondaryLight: "#475569",
      mutedLight: "#64748b",
      subtleLight: "#94a3b8",
    },
    accent: {
      emeraldDark: "#10b981",
      emeraldLight: "#059669",
      sky: "#38bdf8",
      amber: "#f59e0b",
    },
  },
  typography: {
    fontFamily: {
      sans: "var(--font-grotesk), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "var(--font-mono), 'JetBrains Mono', monospace",
    },
  },
  radii: {
    bento: "20px",
    cardSubtle: "16px",
    pill: "9999px",
    sm: "8px",
    md: "12px",
  },
} as const;

export type DesignTokens = typeof tokens;
