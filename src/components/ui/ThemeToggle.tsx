"use client";

import { useState, useRef, useEffect } from "react";
import { Sun, Moon, Monitor, Check, Sparkles } from "lucide-react";
import { useTheme, Theme, ThemeCoordinates } from "@/context/ThemeContext";
import { playClick } from "@/lib/sound";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, resolvedTheme, setTheme, toggleTheme, mounted } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on click outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const getButtonCenterCoords = (): ThemeCoordinates | undefined => {
    if (!buttonRef.current) return undefined;
    const rect = buttonRef.current.getBoundingClientRect();
    return {
      x: Math.round(rect.left + rect.width / 2),
      y: Math.round(rect.top + rect.height / 2),
    };
  };

  // Primary toggle: click to trigger the expanding radial ripple wave
  const handlePrimaryClick = () => {
    const coords = getButtonCenterCoords();
    toggleTheme(coords);
  };

  const handleSelectTheme = (t: Theme, e: React.MouseEvent) => {
    const coords = { x: e.clientX, y: e.clientY };
    setTheme(t, coords);
    setMenuOpen(false);
  };

  if (!mounted) {
    return (
      <div
        className={`w-8 h-8 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div ref={containerRef} className={`relative inline-flex items-center ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={handlePrimaryClick}
        onContextMenu={(e) => {
          e.preventDefault();
          playClick(600, 0.02);
          setMenuOpen((prev) => !prev);
        }}
        aria-label={`Current theme is ${theme}. Click for radial ripple transition to ${
          isDark ? "light" : "dark"
        } mode, or right-click for options`}
        title={`Click for ripple transition to ${isDark ? "light" : "dark"} mode (Right-click for options)`}
        className="relative p-2 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-black/20 dark:hover:border-white/25 hover:shadow-[0_0_18px_rgba(245,158,11,0.22)] dark:hover:shadow-[0_0_18px_rgba(56,189,248,0.25)] active:scale-90 transition-all duration-200 group overflow-hidden"
      >
        <span className="sr-only">Toggle theme with radial ripple</span>
        <div className="relative w-4 h-4 flex items-center justify-center pointer-events-none">
          {/* Sun icon with celestial spring rotation */}
          <Sun
            className={`w-4 h-4 absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
              isDark
                ? "rotate-[140deg] scale-0 opacity-0 text-amber-400"
                : "rotate-0 scale-100 opacity-100 text-amber-500 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]"
            }`}
          />
          {/* Moon icon with eclipse spring rotation */}
          <Moon
            className={`w-4 h-4 absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
              isDark
                ? "rotate-0 scale-100 opacity-100 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]"
                : "-rotate-[140deg] scale-0 opacity-0 text-sky-300"
            }`}
          />
        </div>
      </button>

      {/* Floating Theme Selection Menu */}
      {menuOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 rounded-xl bg-white dark:bg-[#121214] border border-black/10 dark:border-white/15 shadow-2xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 font-mono text-xs">
          <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-neutral-400 font-semibold border-b border-black/5 dark:border-white/5 mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-emerald-500 dark:text-[#4ade80]" />
            <span>Theme Mode</span>
          </div>
          <button
            type="button"
            onClick={(e) => handleSelectTheme("light", e)}
            className="w-full flex items-center justify-between px-3 py-1.5 text-left text-neutral-700 dark:text-neutral-300 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] transition-colors"
          >
            <span className="flex items-center gap-2">
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Light Wave</span>
            </span>
            {theme === "light" && <Check className="w-3 h-3 text-emerald-600 dark:text-[#4ade80]" />}
          </button>
          <button
            type="button"
            onClick={(e) => handleSelectTheme("dark", e)}
            className="w-full flex items-center justify-between px-3 py-1.5 text-left text-neutral-700 dark:text-neutral-300 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] transition-colors"
          >
            <span className="flex items-center gap-2">
              <Moon className="w-3.5 h-3.5 text-sky-400" />
              <span>Dark Wave</span>
            </span>
            {theme === "dark" && <Check className="w-3 h-3 text-emerald-600 dark:text-[#4ade80]" />}
          </button>
          <button
            type="button"
            onClick={(e) => handleSelectTheme("system", e)}
            className="w-full flex items-center justify-between px-3 py-1.5 text-left text-neutral-700 dark:text-neutral-300 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] transition-colors"
          >
            <span className="flex items-center gap-2">
              <Monitor className="w-3.5 h-3.5 text-neutral-400" />
              <span>System Sync</span>
            </span>
            {theme === "system" && <Check className="w-3 h-3 text-emerald-600 dark:text-[#4ade80]" />}
          </button>
        </div>
      )}
    </div>
  );
}
