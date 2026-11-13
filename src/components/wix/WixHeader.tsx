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
          const isScrolled = window.scrollY > 15;
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
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    playClick(700, 0.02);
  };

  const handleContact = () => {
    setMobileMenuOpen(false);
    if (onOpenContact) {
      onOpenContact();
    } else {
      scrollToSection("contact");
    }
    playClick(750, 0.02);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-200 py-3.5 sm:py-4 ${
        scrolled
          ? "bg-[#f5f5f7]/85 dark:bg-[#0b0c10]/85 border-b border-neutral-200/80 dark:border-white/10 shadow-xs"
          : "bg-[#f5f5f7]/65 dark:bg-[#0b0c10]/65 border-b border-neutral-200/40 dark:border-white/5"
      }`}
    >
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
          className="wix-pill bg-white/90 dark:bg-[#14161f]/90 backdrop-blur-xs text-neutral-900 dark:text-neutral-100 border-neutral-300 dark:border-white/15 shadow-2xs hover:shadow-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-[11px] sm:text-xs shrink min-w-0"
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
            className="wix-pill bg-white/90 dark:bg-[#14161f]/90 backdrop-blur-xs text-neutral-900 dark:text-neutral-100 border-neutral-300 dark:border-white/15 hover:bg-neutral-50 dark:hover:bg-[#1e202d] shadow-2xs"
          >
            PORTFOLIO
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="wix-pill bg-white/90 dark:bg-[#14161f]/90 backdrop-blur-xs text-neutral-900 dark:text-neutral-100 border-neutral-300 dark:border-white/15 hover:bg-neutral-50 dark:hover:bg-[#1e202d] shadow-2xs"
          >
            ABOUT
          </button>

          <button
            type="button"
            onClick={handleContact}
            className="wix-pill bg-white/90 dark:bg-[#14161f]/90 backdrop-blur-xs text-neutral-900 dark:text-neutral-100 border-neutral-300 dark:border-white/15 hover:bg-neutral-50 dark:hover:bg-[#1e202d] shadow-2xs"
          >
            CONTACT
          </button>

          {/* Audio & Theme Micro-controls */}
          <div className="flex items-center gap-1.5 ml-2 pl-3 border-l border-neutral-200 dark:border-white/10">
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
            className="p-2 sm:p-2.5 rounded-full border border-neutral-300 dark:border-white/15 bg-white/90 dark:bg-[#14161f]/90 backdrop-blur-xs text-neutral-800 dark:text-neutral-200"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-3 sm:inset-x-4 top-16 sm:top-20 z-50 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#14161f]/95 backdrop-blur-xl border border-neutral-200 dark:border-white/10 shadow-2xl flex flex-col gap-2.5 sm:gap-3 md:hidden animate-in fade-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <button
            type="button"
            onClick={() => scrollToSection("portfolio")}
            className="w-full text-left py-3.5 px-4 rounded-xl text-sm font-sans uppercase tracking-wider font-semibold hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-900 dark:text-neutral-100"
          >
            PORTFOLIO
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="w-full text-left py-3.5 px-4 rounded-xl text-sm font-sans uppercase tracking-wider font-semibold hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-900 dark:text-neutral-100"
          >
            ABOUT
          </button>
          <button
            type="button"
            onClick={handleContact}
            className="w-full text-left py-3.5 px-4 rounded-xl text-sm font-sans uppercase tracking-wider font-semibold hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-900 dark:text-neutral-100"
          >
            CONTACT
          </button>
          <div className="pt-3 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between">
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
