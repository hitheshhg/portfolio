"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();

  // If not mounted yet, render a skeleton placeholder with matching dimensions to prevent hydration layout shift
  if (!mounted) {
    return (
      <div
        className={`w-8 h-8 rounded-lg border border-[var(--bento-border)] bg-[var(--surface-subtle)] ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[var(--bento-border)] bg-[var(--surface-subtle)] hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 cursor-pointer group ${className}`}
    >
      <Sun
        className={`w-4 h-4 text-amber-500 transition-all duration-300 absolute ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />
      <Moon
        className={`w-4 h-4 text-sky-600 transition-all duration-300 absolute ${
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
}
