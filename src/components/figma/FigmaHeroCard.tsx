"use client";

import Link from "next/link";
import { ArrowUpRight, Download, Database, BarChart2 } from "lucide-react";

interface FigmaHeroCardProps {
  name?: string;
}

export function FigmaHeroCard({ name = "Hithesh HG" }: FigmaHeroCardProps) {
  return (
    <div className="bento-card p-6 sm:p-10 flex flex-col justify-between h-full min-h-[380px] bg-black text-white border border-white/[0.08]">
      {/* Top Meta Tag & Location */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span className="font-mono text-xs font-semibold text-white tracking-wide uppercase">
            Data Analyst &amp; BI
          </span>
        </div>
        <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
          <span>bengaluru, in</span>
        </span>
      </div>

      {/* Hero Typography */}
      <div className="space-y-2.5 sm:space-y-3.5 my-auto">
        <p className="text-sm font-mono text-neutral-400 tracking-wider">
          Hello, I&apos;m
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-white">
          {name}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-sans text-neutral-200 tracking-tight">
          turning raw data into{" "}
          <span className="font-mono font-medium text-[#10b981] bg-white/[0.04] px-2 py-0.5 rounded border border-white/10 inline-block">
            actionable insights
          </span>
        </p>
        <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-xl pt-1">
          Specializing in exploratory data analysis (EDA), predictive modeling, and executive BI dashboards. Leveraging SQL, Python, Power BI, and Tableau to uncover business drivers, optimize retention, and guide decision-making.
        </p>

        {/* Core Capabilities Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/10 text-neutral-300">
            <Database className="w-3 h-3 text-[#38bdf8]" />
            <span>Advanced SQL</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/10 text-neutral-300">
            <span className="text-[#10b981] font-bold">Py</span>
            <span>Python &amp; Pandas</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/10 text-neutral-300">
            <BarChart2 className="w-3 h-3 text-[#f59e0b]" />
            <span>Power BI &amp; Tableau</span>
          </span>
        </div>
      </div>

      {/* Action CTAs */}
      <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.06] mt-6">
        <Link
          href="/development"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs font-mono hover:bg-neutral-200 transition-colors shadow-sm"
        >
          <span>explore case studies</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href="/resume.pdf"
          download="Hithesh_HG_Resume.pdf"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 text-white font-medium text-xs font-mono hover:border-white/30 hover:bg-white/[0.04] transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>download cv</span>
        </a>
      </div>
    </div>
  );
}
