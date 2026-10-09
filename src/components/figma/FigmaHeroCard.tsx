"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Download, Database, BarChart2 } from "lucide-react";
import { playClick } from "@/lib/sound";

interface FigmaHeroCardProps {
  name?: string;
}

export function FigmaHeroCard({
  name = "hithesh",
}: FigmaHeroCardProps) {
  return (
    <div className="bento-card p-6 sm:p-10 flex flex-col justify-between h-full min-h-[380px]">
      {/* Top Meta Tag & Location */}
      <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#4ade80] animate-pulse" />
          <span className="font-mono text-xs font-semibold text-neutral-900 dark:text-white tracking-wide uppercase">
            Data Analyst &amp; BI
          </span>
        </div>
        <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" />
          <span>bengaluru, in</span>
        </span>
      </div>

      {/* Main Content Area: Typography + Pixel Avatar */}
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 sm:gap-10 my-auto py-2">
        {/* Left Column: Hero Typography */}
        <div className="space-y-2.5 sm:space-y-3.5 max-w-2xl">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-neutral-900 dark:text-white">
            hi
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans text-neutral-600 dark:text-neutral-300 tracking-tight">
            my name is <span className="font-bold text-neutral-900 dark:text-white">{name}</span>
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-sans text-neutral-600 dark:text-neutral-300 tracking-tight pt-1">
            turning raw data into{" "}
            <span className="font-mono font-normal text-emerald-600 dark:text-[#4ade80] bg-emerald-500/10 dark:bg-white/[0.04] px-2 py-0.5 rounded border border-emerald-500/20 dark:border-white/10 text-xl sm:text-2xl lg:text-3xl inline-block">
              actionable insights
            </span>
          </p>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed max-w-xl pt-1">
            Specializing in exploratory data analysis (EDA), predictive modeling, and executive BI dashboards. Leveraging SQL, Python, Power BI, and Tableau to uncover business drivers, optimize retention, and guide decision-making.
          </p>

          {/* Core Capabilities Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300">
              <Database className="w-3 h-3 text-[#38bdf8]" />
              <span>Advanced SQL</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300">
              <span className="text-emerald-600 dark:text-[#4ade80] font-bold">Py</span>
              <span>Python &amp; Pandas</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300">
              <BarChart2 className="w-3 h-3 text-[#f59e0b]" />
              <span>Power BI &amp; Tableau</span>
            </span>
          </div>
        </div>

        {/* Right Column: Tactile Pixel Avatar Showcase */}
        <div className="shrink-0 relative group self-center md:self-auto">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl sm:rounded-3xl p-2 bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/25 transition-all shadow-sm relative flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-center">
              <Image
                src="/avatar.png"
                alt="Hithesh HG - Pixel Avatar"
                fill
                sizes="(max-width: 640px) 128px, 160px"
                priority
                className="object-contain p-1 select-none [image-rendering:pixelated] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-neutral-900 text-white dark:bg-white dark:text-black border border-black/10 dark:border-white/15 shadow-sm whitespace-nowrap">
            data analyst
          </div>
        </div>
      </div>

      {/* Action CTAs */}
      <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-black/[0.06] dark:border-white/[0.06] mt-6">
        <Link
          href="/development"
          onClick={() => playClick(750, 0.02)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black font-medium text-xs font-mono dark:hover:bg-neutral-200 transition-colors shadow-sm"
        >
          <span>explore case studies</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href="/resume.pdf"
          download="Hithesh_HG_Resume.pdf"
          onClick={() => playClick(850, 0.03)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-black/10 text-neutral-800 hover:border-black/30 hover:bg-black/[0.04] dark:border-white/10 dark:text-white font-medium text-xs font-mono dark:hover:border-white/30 dark:hover:bg-white/[0.04] transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>download cv</span>
        </a>
      </div>
    </div>
  );
}
