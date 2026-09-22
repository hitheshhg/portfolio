"use client";

import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

interface FigmaHeroCardProps {
  name?: string;
}

export function FigmaHeroCard({
  name = "hithesh",
}: FigmaHeroCardProps) {
  return (
    <div className="bento-card p-6 sm:p-10 flex flex-col justify-between h-full min-h-[380px] bg-black text-white border border-white/[0.08]">
      {/* Top Meta Tag & Location */}
      <div className="flex items-center justify-between gap-3 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-neutral-500 line-through">
            designer
          </span>
          <span className="font-mono text-xs font-semibold text-white tracking-wide">
            engineer
          </span>
        </div>
        <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
          <span>bengaluru, in</span>
        </span>
      </div>

      {/* Hero Typography */}
      <div className="space-y-2 sm:space-y-3 my-auto">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-white">
          hi
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans text-neutral-300 tracking-tight">
          my name is <span className="font-bold text-white">{name}</span>
        </h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-sans text-neutral-300 tracking-tight pt-1">
          a <span className="font-bold text-white font-serif">designer</span> &amp;{" "}
          <span className="font-mono font-normal text-[#4ade80] bg-white/[0.04] px-2 py-0.5 rounded border border-white/10 text-xl sm:text-2xl lg:text-3xl inline-block">
            &lt;developer/&gt;
          </span>
        </p>
        <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-xl pt-2">
          Specializing in scalable web apps, distributed microservices, and human-centered design systems with Next.js, Java, TypeScript, and PostgreSQL.
        </p>
      </div>

      {/* Action CTAs */}
      <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.06] mt-6">
        <Link
          href="/development"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black font-medium text-xs font-mono hover:bg-neutral-200 transition-colors shadow-sm"
        >
          <span>explore projects</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href="/resume.pdf"
          download="Hithesh_HG_Resume.pdf"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/10 text-white font-medium text-xs font-mono hover:border-white/30 hover:bg-white/[0.04] transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>download cv</span>
        </a>
      </div>
    </div>
  );
}
