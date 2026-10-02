/**
 * Design Tokens for Hithesh HG Portfolio
 * Faithfully extracted from Figma Bento Theme with full Light & Dark mode support
 */

export const tokens = {
  colors: {
    canvas: {
      dark: "#09090b", // Deep matte charcoal/obsidian canvas
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
    borderHover: {
      dark: "rgba(255, 255, 255, 0.22)",
      light: "rgba(0, 0, 0, 0.2)",
    },
    text: {
      primaryDark: "#ffffff",
      secondaryDark: "#a1a1aa",
      mutedDark: "#71717a",
      primaryLight: "#09090b",
      secondaryLight: "#52525b",
      mutedLight: "#71717a",
    },
    accent: {
      brandDark: "#ffffff",
      brandLight: "#09090b",
      codeDark: "#4ade80", // Subtle terminal green for <engineer/>
      codeLight: "#16a34a", // High contrast green for light mode
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
    subcard: "16px",
    pill: "9999px",
    sm: "8px",
    md: "12px",
  },
} as const;

export type DesignTokens = typeof tokens;
