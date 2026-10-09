"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { playClick } from "@/lib/sound";

export interface BentoHeaderProps {
  activeTab?: "home" | "development" | "blog" | "cv";
  tagLineThrough?: string;
  tagHighlight?: string;
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
}

const NAV_LINKS = [
  { name: "home", href: "/", id: "home" },
  { name: "development", href: "/development", id: "development" },
  { name: "blog", href: "/blog", id: "blog" },
  { name: "cv", href: "/cv", id: "cv" },
] as const;

export function BentoHeader({
  activeTab = "home",
  tagLineThrough,
  tagHighlight,
  title,
  subtitle,
  headerAction,
}: BentoHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bento-card p-6 sm:p-8 w-full shadow-lg dark:shadow-2xl transition-all">
      {/* Top Bar: Brand, Status, Navigation & Actions */}
      <div className="flex items-center justify-between gap-4">
        {/* Brand & Live Status */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            onClick={() => playClick(750, 0.02)}
            className="font-mono text-xs sm:text-sm font-semibold tracking-tight text-neutral-900 dark:text-white hover:opacity-80 transition-opacity select-none"
          >
            hithesh.dev
          </Link>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-[#4ade80] border border-emerald-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#4ade80] animate-pulse" />
            <span>available for work</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 text-xs font-mono"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => playClick(700, 0.02)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? "text-neutral-950 dark:text-white bg-black/5 dark:bg-white/10 font-semibold shadow-xs border border-black/10 dark:border-white/10"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions & Socials */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">

          {/* Theme Toggle Button */}
          <ThemeToggle />

          <a
            href="https://github.com/hitheshhg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClick(600, 0.02)}
            aria-label="GitHub Profile"
            className="p-1.5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://linkedin.com/in/hitheshhg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClick(600, 0.02)}
            aria-label="LinkedIn Profile"
            className="p-1.5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href="/resume.pdf"
            download="Hithesh_HG_Resume.pdf"
            onClick={() => playClick(850, 0.03)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-black font-medium text-[11px] font-mono hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <Download className="w-3 h-3" />
            <span className="hidden sm:inline">download cv</span>
            <span className="sm:hidden">cv</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => {
              playClick(500, 0.02);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle mobile menu"
            className="md:hidden p-1.5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 mt-4 border-t border-black/10 dark:border-white/10 flex flex-col gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => {
                  playClick(700, 0.02);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 text-xs font-mono rounded-lg transition-colors ${
                  isActive
                    ? "text-neutral-950 dark:text-white bg-black/5 dark:bg-white/10 font-bold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}

      {/* Optional Subpage Banner */}
      {title && (
        <div className="pt-8 mt-6 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            {(tagLineThrough || tagHighlight) && (
              <div className="flex items-center gap-2">
                {tagLineThrough && (
                  <span className="font-mono text-xs text-neutral-500 line-through">
                    {tagLineThrough}
                  </span>
                )}
                {tagHighlight && (
                  <span className="font-mono text-xs font-semibold text-neutral-900 dark:text-white tracking-wide">
                    {tagHighlight}
                  </span>
                )}
              </div>
            )}
            <h1 className="text-2xl sm:text-4xl font-sans font-bold text-neutral-900 dark:text-white tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {headerAction && <div className="shrink-0">{headerAction}</div>}
        </div>
      )}
    </header>
  );
}
