"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SoundToggle } from "@/components/ui/SoundToggle";
import { playClick } from "@/lib/sound";

interface WixHeaderProps {
  onOpenContact?: () => void;
}

export function WixHeader({ onOpenContact }: WixHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    playClick(700, 0.02);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    playClick(750, 0.02);
    setMobileMenuOpen(false);
    if (onOpenContact) {
      onOpenContact();
    } else {
      scrollToSection("contact");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full py-4 sm:py-5">
      {/* Hardware-accelerated frosted glass backdrop that smoothly fades in with zero layout shifts */}
      <div
        className={`absolute inset-0 transition-opacity duration-200 pointer-events-none ${
          scrolled
            ? "opacity-100 bg-[var(--canvas-bg)]/85 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.08] shadow-xs"
            : "opacity-0"
        }`}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-3 sm:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand Pill Badge (Screenshot 5) */}
        <Link
          href="/"
          onClick={(e) => {
            playClick(750, 0.02);
            if (typeof window !== "undefined" && window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="wix-pill bg-white/90 dark:bg-[#121214]/90 backdrop-blur-xs text-neutral-900 dark:text-white border-neutral-300 dark:border-neutral-700 shadow-2xs hover:shadow-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-[11px] sm:text-xs shrink min-w-0"
        >
          <span className="truncate">
            HITHESH HG <span className="hidden sm:inline">/ DATA ANALYST &amp; BI</span>
          </span>
        </Link>

        {/* Right: 3 Nav Action Pills (PORTFOLIO, ABOUT, CONTACT) + Utilities */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("portfolio")}
            className="wix-pill bg-white/90 dark:bg-[#121214]/90 backdrop-blur-xs text-neutral-900 dark:text-white border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-2xs"
          >
            PORTFOLIO
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="wix-pill bg-white/90 dark:bg-[#121214]/90 backdrop-blur-xs text-neutral-900 dark:text-white border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-2xs"
          >
            ABOUT
          </button>

          <button
            type="button"
            onClick={handleContact}
            className="wix-pill bg-white/90 dark:bg-[#121214]/90 backdrop-blur-xs text-neutral-900 dark:text-white border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-2xs"
          >
            CONTACT
          </button>

          {/* Audio & Theme Micro-controls */}
          <div className="flex items-center gap-1.5 ml-2 pl-3 border-l border-neutral-200 dark:border-neutral-800">
            <SoundToggle />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 md:hidden">
          <SoundToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => {
              playClick(500, 0.02);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle menu"
            className="p-2 sm:p-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-[#121214]/90 backdrop-blur-xs"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-3 sm:inset-x-4 top-16 sm:top-20 z-50 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#121214]/95 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col gap-2.5 sm:gap-3 md:hidden animate-in fade-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <button
            type="button"
            onClick={() => scrollToSection("portfolio")}
            className="w-full text-left py-3.5 px-4 rounded-xl text-sm font-sans uppercase tracking-wider font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            PORTFOLIO
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="w-full text-left py-3.5 px-4 rounded-xl text-sm font-sans uppercase tracking-wider font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            ABOUT
          </button>
          <button
            type="button"
            onClick={handleContact}
            className="w-full text-left py-3.5 px-4 rounded-xl text-sm font-sans uppercase tracking-wider font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            CONTACT
          </button>
          <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
            <a
              href="/resume.pdf"
              download="Hithesh_HG_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-400 font-medium"
            >
              <span>Download CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
