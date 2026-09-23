"use client";

import Link from "next/link";
import { ArrowUpRight, Download, Database, BarChart2 } from "lucide-react";

interface FigmaHeroCardProps {
  name?: string;
}

export function FigmaHeroCard({ name = "Hithesh HG" }: FigmaHeroCardProps) {
  return (
    <div className="bento-card p-6 sm:p-10 flex flex-col justify-between h-full min-h-[380px]">
      {/* Top Meta Tag & Location */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
          <span className="font-mono text-xs font-semibold text-[var(--text-primary)] tracking-wide uppercase">
            Data Analyst &amp; BI
          </span>
        </div>
        <span className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-subtle)]" />
          <span>bengaluru, in</span>
        </span>
      </div>

      {/* Hero Typography */}
      <div className="space-y-2.5 sm:space-y-3.5 my-auto">
        <p className="text-sm font-mono text-[var(--text-muted)] tracking-wider">
          Hello, I&apos;m
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-[var(--text-primary)]">
          {name}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-sans text-[var(--text-secondary)] tracking-tight">
          turning raw data into{" "}
          <span className="font-mono font-medium text-[var(--accent-emerald)] bg-[var(--accent-emerald-bg)] px-2.5 py-0.5 rounded-lg border border-[var(--accent-emerald-border)] inline-block">
            actionable insights
          </span>
        </p>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-sans leading-relaxed max-w-xl pt-1">
          Specializing in exploratory data analysis (EDA), predictive modeling, and executive BI dashboards. Leveraging SQL, Python, Power BI, and Tableau to uncover business drivers, optimize retention, and guide decision-making.
        </p>

        {/* Core Capabilities Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[var(--surface-subtle)] border border-[var(--surface-border)] text-[var(--text-primary)] shadow-xs">
            <Database className="w-3 h-3 text-[var(--accent-sky)]" />
            <span>Advanced SQL</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[var(--surface-subtle)] border border-[var(--surface-border)] text-[var(--text-primary)] shadow-xs">
            <span className="text-[var(--accent-emerald)] font-bold">Py</span>
            <span>Python &amp; Pandas</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[var(--surface-subtle)] border border-[var(--surface-border)] text-[var(--text-primary)] shadow-xs">
            <BarChart2 className="w-3 h-3 text-[var(--accent-amber)]" />
            <span>Power BI &amp; Tableau</span>
          </span>
        </div>
      </div>

      {/* Action CTAs */}
      <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[var(--bento-border)] mt-6">
        <Link
          href="/development"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-semibold text-xs font-mono hover:opacity-90 transition-opacity shadow-xs"
        >
          <span>explore case studies</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href="/resume.pdf"
          download="Hithesh_HG_Resume.pdf"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[var(--bento-border)] bg-[var(--surface-subtle)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)] font-medium text-xs font-mono transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>download cv</span>
        </a>
      </div>
    </div>
  );
}
