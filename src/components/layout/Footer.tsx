"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
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
          second: "2-digit",
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer aria-label="Footer" className="w-full mt-2 sm:mt-4">
      <div className="bento-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-black text-white border border-white/[0.08]">
        {/* Brand, Location & Live Clock */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-center sm:text-left font-mono">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-white hover:text-[#10b981] transition-colors"
          >
            hithesh.dev
          </Link>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <span className="text-xs text-neutral-400 flex items-center justify-center sm:justify-start gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            <span>BLR {time ? `${time} IST` : "IST"}</span>
          </span>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Hithesh HG • Data Analyst
          </p>
        </div>

        {/* Shortcuts & Socials */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <a
            href="https://github.com/hitheshhg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/hitheshhg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-1.5 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-all ml-1 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
