"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { playClick } from "@/lib/sound";

export function WixProjectShowcase() {
  return (
    <section id="portfolio" className="w-full max-w-[1360px] mx-auto px-3 sm:px-8 py-6 sm:py-12 space-y-8 sm:space-y-12 scroll-mt-24">
      
      {/* ==============================================================
          SHOWCASE 1: SIKURA (Screenshot 2 - Vibrant Fiery Orange Canvas)
          ============================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
        {/* Left Column: White Info Card (Screenshot 2) */}
        <div className="lg:col-span-4 wix-card bg-white dark:bg-[#14161f] p-5 sm:p-9 flex flex-col justify-between">
          <div>
            {/* Orange Rounded Logo Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#ff5733] to-[#ff3b14] text-white flex items-center justify-center shadow-md mb-5 sm:mb-6 p-2.5 sm:p-3">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <path
                  d="M14 10C8.477 10 4 14.477 4 20s4.477 10 10 10V10zM26 10v20c5.523 0 10-4.477 10-10s-4.477-10-10-10z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <h2 className="text-xl sm:text-3xl font-sans font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              SIKURA
            </h2>
            <p className="text-xs sm:text-sm font-sans text-neutral-500 mb-4 sm:mb-6">
              Cybersecurity Telemetry &amp; Attrition Analytics
            </p>

            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed mb-6 sm:mb-8">
              Enterprise-grade telemetry pipeline and customer churn detection platform. Unifying cloud threat telemetry and subscriber behavioral data into actionable retention intelligence.
            </p>

            {/* Metadata Two-Column Table */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4 border-y border-neutral-100 dark:border-white/10 text-xs font-mono mb-6 sm:mb-8">
              <div>
                <span className="text-neutral-400 block mb-1">Year</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold">2025</span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-1">URL</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold truncate block">
                  hitheshhg.vercel.app
                </span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <Link
              href="/projects/churn-analytics"
              onClick={() => playClick(750, 0.02)}
              className="wix-pill border-neutral-300 dark:border-white/15 bg-white dark:bg-[#1e202d] text-neutral-900 dark:text-neutral-100 text-xs font-semibold justify-between w-full hover:bg-neutral-50 dark:hover:bg-[#272a3a] transition-colors shadow-2xs"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: Massive Fiery Orange Canvas (#ff4820 - Screenshot 2) */}
        <div
          style={{ backgroundColor: "#ff4820", borderColor: "#ff4820" }}
          className="lg:col-span-8 wix-card !bg-[#ff4820] !border-[#ff4820] p-4 sm:p-12 flex items-center justify-center relative overflow-hidden min-h-[380px] sm:min-h-[540px]"
        >
          {/* Dark Cybersecurity UI App Frame */}
          <div className="w-full max-w-xl bg-[#0c0d12] rounded-2xl border border-white/10 p-4 sm:p-8 text-white shadow-2xl relative z-10 space-y-4 sm:space-y-6">
            {/* Top Navigation inside App */}
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-3 border-b border-white/10 gap-2">
              <span className="flex items-center gap-1.5 text-white font-bold text-xs sm:text-sm tracking-wider shrink-0">
                SIKURA
              </span>
              <div className="hidden sm:flex items-center gap-3 text-[11px] text-neutral-400">
                <span>Product</span>
                <span>Company</span>
                <span>Careers</span>
                <span>Knowledge</span>
              </div>
              <span className="px-2.5 sm:px-3 py-1 rounded bg-[#ff4820] text-white text-[10px] sm:text-[11px] font-bold shrink-0">
                Book a Demo
              </span>
            </div>

            {/* Headline Banner */}
            <div className="space-y-1.5 text-center py-1 sm:py-2">
              <h3 className="text-base sm:text-2xl font-sans font-bold tracking-tight text-white leading-tight break-words">
                SIKURA KEEPS YOUR BUSINESS &amp; CUSTOMERS SAFE
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-400 font-sans max-w-sm mx-auto">
                Trusted by top firms around the world, we prevent phishing, BEC and other attacks well before they reach you.
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded bg-[#ff4820] text-white text-[11px] sm:text-xs font-semibold">
                  Try for Free
                </span>
              </div>
            </div>

            {/* Visual Waveform Dashboard Card Matching Screenshot 2 */}
            <div className="p-3 sm:p-5 rounded-xl bg-black/60 border border-white/5 relative overflow-hidden space-y-3 sm:space-y-4">
              {/* Telemetry Nodes & Waveform */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3 items-center">
                {/* Left Node: Cloud Security */}
                <div className="sm:col-span-3 p-2 rounded-lg bg-white/5 border border-white/5 text-[10px] space-y-1">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="font-mono">Cloud Security</span>
                  </div>
                  <span className="font-bold text-white block">Active Guard</span>
                </div>

                {/* Center: Waveform Graph */}
                <div className="sm:col-span-6 h-16 sm:h-20 w-full flex items-center justify-center relative">
                  <svg viewBox="0 0 300 70" className="w-full h-full overflow-visible">
                    <path
                      d="M 0,55 Q 60,10 120,40 T 240,25 T 300,10"
                      fill="none"
                      stroke="#ff4820"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 0,20 Q 60,60 120,30 T 240,45 T 300,60"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      opacity="0.8"
                    />
                  </svg>
                </div>

                {/* Right Node: Endpoint Protection */}
                <div className="sm:col-span-3 p-2 rounded-lg bg-white/5 border border-white/5 text-[10px] space-y-1">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <span className="w-2 h-2 rounded-full bg-[#ff4820]" />
                    <span className="font-mono">Endpoint Prot.</span>
                  </div>
                  <span className="font-bold text-white block">Zero Breach</span>
                </div>
              </div>

              {/* Memory Security Tag Node */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[9px] sm:text-[10px] font-mono text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="truncate">Memory Security: Protected Kernel</span>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center text-xs font-sans text-neutral-400 pt-1">
              <span className="uppercase tracking-widest text-[9px] sm:text-[10px] text-neutral-500 block mb-0.5 sm:mb-1">
                Featured Customers
              </span>
              <p className="text-[10px] sm:text-[11px] text-neutral-400">
                Join the Global Leaders Working With Us.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==============================================================
          SHOWCASE 2: CONVERZA TECHNOLOGIES (Screenshot 3 - Vibrant Blue/Purple Gradient)
          ============================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
        {/* Left Column: White Info Card (Screenshot 3) */}
        <div className="lg:col-span-4 wix-card bg-white dark:bg-[#14161f] p-5 sm:p-9 flex flex-col justify-between">
          <div>
            {/* Lavender Rounded Logo Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#ede9fe] text-[#7c3aed] flex items-center justify-center shadow-md mb-5 sm:mb-6 p-2.5 sm:p-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-4 border-[#7c3aed] flex items-center justify-center">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#7c3aed]" />
              </div>
            </div>

            <h2 className="text-xl sm:text-3xl font-sans font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Converza Technologies
            </h2>
            <p className="text-xs sm:text-sm font-sans text-neutral-500 mb-4 sm:mb-6">
              AI-Powered Cohort Retention &amp; NLP
            </p>

            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed mb-6 sm:mb-8">
              Conversational intelligence platform that translates raw customer dialogue transcripts and event logs into structured cohort retention matrices and lifetime value forecasts.
            </p>

            {/* Metadata Two-Column Table */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4 border-y border-neutral-100 dark:border-white/10 text-xs font-mono mb-6 sm:mb-8">
              <div>
                <span className="text-neutral-400 block mb-1">Year</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold">2025</span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-1">URL</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold truncate block">
                  hitheshhg.vercel.app
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons (Screenshot 3 has BOTH View Case Study & Full Case Studies) */}
          <div className="space-y-2.5 sm:space-y-3">
            <Link
              href="/projects/cohort-revenue"
              onClick={() => playClick(750, 0.02)}
              className="wix-pill border-neutral-300 dark:border-white/15 bg-white dark:bg-[#1e202d] text-neutral-900 dark:text-neutral-100 text-xs font-semibold justify-between w-full hover:bg-neutral-50 dark:hover:bg-[#272a3a] transition-colors shadow-2xs"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>

            <Link
              href="/analytics"
              onClick={() => playClick(700, 0.02)}
              className="wix-pill bg-black text-white dark:bg-white dark:text-black border-transparent text-xs font-semibold justify-between w-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm"
            >
              <span>Full Case Studies</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: Royal Blue to Purple to Rose Pink Canvas (Screenshot 3) */}
        <div
          style={{ borderColor: "transparent" }}
          className="lg:col-span-8 wix-card bg-gradient-to-br from-[#3b82f6] via-[#8b5cf6] to-[#f472b6] p-4 sm:p-12 flex items-center justify-center relative overflow-hidden min-h-[380px] sm:min-h-[540px]"
        >
          {/* 3 Cascading Stacked White Cards Exactly as in Screenshot 3 */}
          <div className="relative w-full max-w-lg space-y-2.5 sm:space-y-3">
            {/* Card 1 (Back): Language Translation */}
            <div className="bg-white/95 dark:bg-[#14161f]/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/50 dark:border-white/10 shadow-lg translate-x-1.5 sm:translate-x-10">
              <h3 className="text-base sm:text-xl font-sans font-bold text-neutral-900 dark:text-neutral-100">
                Language Translation
              </h3>
            </div>

            {/* Card 2 (Middle): Chatbots */}
            <div className="bg-white/95 dark:bg-[#14161f]/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/60 dark:border-white/10 shadow-xl translate-x-0.5 sm:translate-x-5">
              <h3 className="text-base sm:text-xl font-sans font-bold text-neutral-900 dark:text-neutral-100">
                Chatbots
              </h3>
            </div>

            {/* Card 3 (Front): Sentiment Analysis with Circular Graphic on Left & Text on Right */}
            <div className="bg-white dark:bg-[#10111a] rounded-2xl p-4 sm:p-8 border border-black/10 dark:border-white/15 shadow-2xl relative z-10">
              <h3 className="text-lg sm:text-2xl font-sans font-bold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4">
                Sentiment Analysis
              </h3>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-5">
                {/* Abstract overlapping blurred circles (from Screenshot 3) */}
                <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center p-2 relative overflow-hidden">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-400/80 blur-[2px] absolute -left-1" />
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-600/80 blur-[2px] absolute -right-1" />
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black/70 z-10" />
                </div>

                <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==============================================================
          SHOWCASE 3: MALKOW & BREID (Screenshot 4 - Soft Lavender Canvas)
          ============================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
        {/* Left Column: White Info Card (Screenshot 4) */}
        <div className="lg:col-span-4 wix-card bg-white dark:bg-[#14161f] p-5 sm:p-9 flex flex-col justify-between">
          <div>
            {/* Lime Green Rounded Logo Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#d9f99d] text-neutral-900 flex items-center justify-center shadow-md mb-5 sm:mb-6 p-2.5 sm:p-3">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-black" />
                ))}
              </div>
            </div>

            <h2 className="text-xl sm:text-3xl font-sans font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Malkow &amp; Breid
            </h2>
            <p className="text-xs sm:text-sm font-sans text-neutral-500 mb-4 sm:mb-6">
              Predictive Clinical Risk &amp; Readmission Modeling
            </p>

            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed mb-6 sm:mb-8">
              Clinical decision-support model identifying high-risk diabetic patient cohorts to prevent 30-day readmissions and optimize hospital resource allocation.
            </p>

            {/* Metadata Two-Column Table */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4 border-y border-neutral-100 dark:border-white/10 text-xs font-mono mb-6 sm:mb-8">
              <div>
                <span className="text-neutral-400 block mb-1">Year</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold">2024</span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-1">URL</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold truncate block">
                  hitheshhg.vercel.app
                </span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <Link
              href="/projects/healthcare-readmission"
              onClick={() => playClick(750, 0.02)}
              className="wix-pill border-neutral-300 dark:border-white/15 bg-white dark:bg-[#1e202d] text-neutral-900 dark:text-neutral-100 text-xs font-semibold justify-between w-full hover:bg-neutral-50 dark:hover:bg-[#272a3a] transition-colors shadow-2xs"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: Soft Muted Lavender Canvas (#e6e5f8 - Screenshot 4) */}
        <div
          style={{ borderColor: "transparent" }}
          className="lg:col-span-8 wix-card bg-[#e6e5f8] dark:bg-[#181926] p-4 sm:p-12 flex items-center justify-center relative overflow-hidden min-h-[380px] sm:min-h-[540px]"
        >
          {/* Black Frame with Electric Neon Green Matrix Barcode Screen */}
          <div className="w-full max-w-xl bg-black rounded-2xl border border-white/10 p-4 sm:p-8 text-white shadow-2xl relative z-10 space-y-4 sm:space-y-6">
            {/* Nav Header inside screen */}
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-3 border-b border-white/10 gap-2">
              <span className="text-white font-bold tracking-wider text-xs sm:text-sm shrink-0">Malkow &amp; Breid</span>
              <div className="hidden sm:flex items-center gap-3 text-[11px] text-neutral-400">
                <span>Services</span>
                <span>Benefits</span>
                <span>About</span>
              </div>
              <span className="px-2.5 sm:px-3 py-1 rounded bg-[#38bdf8] text-black text-[10px] sm:text-[11px] font-bold shrink-0">
                Book a Meeting
              </span>
            </div>

            {/* Center Neon Green Vertical Matrix Visual */}
            <div className="h-32 sm:h-44 rounded-xl bg-black border border-white/10 relative overflow-hidden flex flex-col items-center justify-center p-2.5 sm:p-4">
              {/* Neon Green Barcode Matrix Graphic */}
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  backgroundImage: "repeating-linear-gradient(90deg, #4ade80 0px, #4ade80 4px, transparent 4px, transparent 10px)",
                }}
              />
              <div className="relative z-10 bg-black/90 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#4ade80]/50 backdrop-blur-md flex items-center gap-2 sm:gap-3 shadow-lg max-w-full">
                {/* Two Avatar Headshots (Direct from Screenshot 4) */}
                <div className="flex -space-x-1.5 shrink-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-amber-600 to-amber-800 border-2 border-black flex items-center justify-center overflow-hidden">
                    <span className="text-[8px] sm:text-[9px] font-bold text-white">HE</span>
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 border-2 border-black flex items-center justify-center overflow-hidden">
                    <span className="text-[8px] sm:text-[9px] font-bold text-white">AI</span>
                  </div>
                </div>
                <span className="text-xs sm:text-base font-sans font-bold text-white tracking-tight truncate">
                  Human Experts, Powered by AI
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-neutral-300 font-sans text-center max-w-md mx-auto">
              Smart technology in the hands of seasoned professionals for better, clearer financial advice.
            </p>

            <div className="text-center pt-1">
              <span className="inline-block px-3 py-1 rounded bg-white text-black text-[11px] font-semibold">
                Book a Meeting
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
