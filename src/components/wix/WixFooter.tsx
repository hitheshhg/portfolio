"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { playClick } from "@/lib/sound";

export function WixFooter() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const istTime = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        });
        setTime(istTime);
      } catch {
        setTime("IST");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClick(900, 0.03);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[var(--canvas-bg)] text-[var(--text-main)] border-t border-neutral-200/80 dark:border-white/10 py-8 sm:py-12 px-3 sm:px-8 transition-colors">
      <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs font-sans">
        {/* Left: Brand & Time */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-neutral-600 dark:text-neutral-400 text-center sm:text-left">
          <Link
            href="/"
            onClick={() => playClick(600, 0.02)}
            className="text-neutral-900 dark:text-neutral-100 font-bold uppercase tracking-wider hover:opacity-80"
          >
            HITHESH HG
          </Link>
          <span>•</span>
          <span>Bengaluru, IN {time ? `(${time} IST)` : ""}</span>
          <span>•</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="wix-pill border-neutral-300 dark:border-white/15 bg-white dark:bg-[#14161f] text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white/40 text-xs py-1.5 sm:py-2 px-3.5 sm:px-4 shadow-2xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
