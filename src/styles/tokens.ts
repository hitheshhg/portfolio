/**
 * Design Tokens for Hithesh HG Portfolio
 * Faithfully extracted from Figma Bento Theme (Portfolio Template Community)
 */

export const tokens = {
  colors: {
    canvas: {
      dark: "#121214", // Deep matte charcoal canvas
      light: "#f4f4f5", // Clean light grey canvas
    },
    card: {
      dark: "#000000", // Pitch black bento surface
      light: "#ffffff", // Pure white bento surface
    },
    border: {
      dark: "rgba(255, 255, 255, 0.08)",
      light: "rgba(0, 0, 0, 0.08)",
    },
    text: {
      primaryDark: "#ffffff",
      secondaryDark: "#a1a1aa",
      mutedDark: "#71717a",
      primaryLight: "#000000",
      secondaryLight: "#71717a",
      mutedLight: "#a1a1aa",
    },
    accent: {
      brand: "#ffffff",
      code: "#4ade80", // Subtle terminal green for <engineer/>
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
    pill: "9999px",
    sm: "8px",
    md: "12px",
  },
} as const;

export type DesignTokens = typeof tokens;
