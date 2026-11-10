"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { playClick, playInterviewAudio } from "@/lib/sound";

export function WixHeroBento() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const scrollToPortfolio = () => {
    playClick(750, 0.02);
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const expertiseTags = [
    "Interaction Design",
    "Responsive Design",
    "SQL & Pipelines",
    "Power BI & DAX",
    "Predictive ML",
    "Cohort Analytics",
    "Design Systems",
  ];

  return (
    <section className="w-full max-w-[1360px] mx-auto px-3 sm:px-8 py-2 sm:py-4">
      {/* 4-Column Asymmetric Bento Grid (Screenshot 5) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
        
        {/* ==============================================================
            CARD 1: Left Tall Profile Card (Cols 1-4, Spans 2 Rows on LG)
            ============================================================== */}
        <div className="lg:col-span-4 wix-card flex flex-col justify-between h-full bg-white dark:bg-[#121214]">
          <div>
            {/* Top Mesh Pastel Gradient Banner with Avatar Overlap */}
            <div className="relative h-40 sm:h-52 w-full bg-gradient-to-tr from-[#fed7aa] via-[#fbcfe8] to-[#bfdbfe] dark:from-[#312e81] dark:via-[#4c1d95] dark:to-[#1e3a8a] overflow-hidden">
              {/* Subtle stipple / dot grain */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(#000 1.2px, transparent 1.2px)",
                  backgroundSize: "14px 14px",
                }}
              />
            </div>

            {/* Overlapping Circular Avatar Frame */}
            <div className="-mt-12 sm:-mt-14 ml-5 sm:ml-8 relative z-10">
              <div className="w-22 h-22 sm:w-28 sm:h-28 rounded-full border-[4px] sm:border-[5px] border-white dark:border-[#222228] overflow-hidden bg-gradient-to-b from-neutral-100 to-neutral-200/90 dark:from-[#24242c] dark:to-[#16161b] shadow-md ring-1 ring-black/5 dark:ring-white/15 flex items-center justify-center relative group">
                <Image
                  src="/avatar.png"
                  alt="Hithesh HG - Avatar"
                  fill
                  sizes="(max-width: 640px) 88px, 112px"
                  priority
                  className="object-contain select-none [image-rendering:pixelated] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Main Headline */}
            <div className="px-5 sm:px-8 pt-4 sm:pt-5 pb-5 sm:pb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-sans font-bold text-neutral-900 dark:text-white leading-[1.2] tracking-tight break-words">
                Crafting Digital Experiences That Feel Effortless
              </h1>
            </div>
          </div>

          {/* Expertise Pill Badges (Wix Screenshot 5) */}
          <div className="px-5 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
            <span className="text-xs font-sans font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-3 block">
              Expertise
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {expertiseTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-[11px] sm:text-xs font-sans font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-50/50 dark:bg-white/[0.02] hover:border-black dark:hover:border-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ==============================================================
            MIDDLE COLUMN (Cols 5-8): About Card (Top) + Cascading Cards (Bottom)
            ============================================================== */}
        <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6 justify-between">
          
          {/* Card 2: Center Top "About" Card */}
          <div className="wix-card p-5 sm:p-8 flex flex-col justify-between bg-white dark:bg-[#121214] h-full min-h-[240px] sm:min-h-[280px]">
            <div>
              <span className="text-xs font-sans font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-3">
                About
              </span>
              <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed">
                Hi, I&apos;m Hithesh. I transform complex data pipelines and raw signals into intuitive, decision-ready intelligence and high-impact digital experiences. With a foundation in Computer Science, SQL, and predictive modeling, my mission is to bridge the gap between heavy technical systems and clear human decisions.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToPortfolio}
              className="mt-5 sm:mt-6 inline-flex items-center justify-between w-full px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-sans text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-xs group"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Card 3: Center Bottom Cascading E-Commerce Floating Cards (Direct from Screenshot 5) */}
          <div className="wix-card p-4 sm:p-6 rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-[#dbeafe] via-[#ede9fe] to-[#fce7f3] dark:from-[#1e1b4b] dark:via-[#2e1065] dark:to-[#3b0764] flex items-center justify-center relative overflow-hidden min-h-[230px] sm:min-h-[250px]">
            <div className="w-full max-w-[320px] space-y-2 relative">
              {/* Back Card: Blush Lumbar */}
              <div className="bg-white/85 dark:bg-black/60 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-white/60 dark:border-white/10 shadow-xs translate-x-2 sm:translate-x-4 scale-95 opacity-80">
                <div className="flex items-center justify-between text-[11px] font-sans font-bold text-neutral-800 dark:text-neutral-200">
                  <span>Blush Lumbar</span>
                  <span className="text-neutral-500 font-normal">Blush Pink</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-neutral-400 font-sans mt-0.5">
                  <span>Cozy Linens</span>
                  <span>Limited Edition</span>
                </div>
              </div>

              {/* Middle Card: Woven Square Pillow */}
              <div className="bg-white/95 dark:bg-black/75 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-white/70 dark:border-white/10 shadow-sm translate-x-1 sm:translate-x-2 scale-100 z-10">
                <div className="flex items-center justify-between text-xs font-sans font-bold text-neutral-900 dark:text-white">
                  <span>Woven Square Pillow</span>
                  <span className="text-neutral-600 dark:text-neutral-300 font-normal">Mist Grey</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-neutral-500 font-sans mt-0.5">
                  <span>Linen Blend</span>
                  <span>2 size options</span>
                </div>
              </div>

              {/* Front Card: Plush Knot Pillow (Main visible card with 3D Knotted Cushion graphic) */}
              <div className="bg-white dark:bg-[#18181b] rounded-2xl p-3.5 sm:p-4 border border-black/5 dark:border-white/10 shadow-xl z-20 flex items-center gap-2.5 sm:gap-3.5">
                {/* 3D Knotted Green Cushion Graphic */}
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 flex items-center justify-center shadow-md relative overflow-hidden">
                  <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 text-white">
                    <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
                    <circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
                    <circle cx="28" cy="20" r="8" stroke="#bef264" strokeWidth="3" opacity="0.8" />
                    <circle cx="20" cy="28" r="8" stroke="#15803d" strokeWidth="3" opacity="0.8" />
                  </svg>
                </div>

                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-1">
                    <h3 className="font-sans font-bold text-xs text-neutral-900 dark:text-white truncate">
                      Plush Knot Pillow
                    </h3>
                    <span className="text-[10px] sm:text-[11px] font-sans text-neutral-500 truncate">Forest Green</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 font-sans">
                    <span>Home Goods</span>
                    <span>3 more colors</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-sans pt-0.5 gap-1">
                    <span className="font-bold text-neutral-900 dark:text-white shrink-0">$48.99</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium truncate">In Stock • Ships 1-2d</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            RIGHT COLUMN (Cols 9-12): Sound Card + Giant CV (Top) & Dashboard (Bottom)
            ============================================================== */}
        <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6 justify-between">
          
          {/* Top Row: Coral Sound Card & Giant CV Card (Screenshot 5) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            
            {/* Card 4: Vibrant Solid Coral Sound Card (Screenshot 5) */}
            <div
              onClick={() => {
                const nextState = !isPlayingAudio;
                setIsPlayingAudio(nextState);
                playInterviewAudio(nextState);
              }}
              style={{ backgroundColor: "#ff5733", borderColor: "#ff5733" }}
              className="wix-card p-4 sm:p-6 !bg-[#ff5733] text-white flex flex-col justify-between min-h-[175px] sm:min-h-[195px] shadow-sm cursor-pointer group hover:scale-[1.01] transition-transform !border-[#ff5733]"
              role="button"
              aria-label="Listen to interview"
            >
              {/* Symmetrical Sound Waveform Graphic Matching Screenshot 5 */}
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 py-4 sm:py-6 my-auto">
                {[
                  { h: "h-3", delay: "0.1s" },
                  { h: "h-6", delay: "0.25s" },
                  { h: "h-11", delay: "0.4s" },
                  { h: "h-16", delay: "0.55s" },
                  { h: "h-10", delay: "0.7s" },
                  { h: "h-14", delay: "0.85s" },
                  { h: "h-8", delay: "1.0s" },
                  { h: "h-5", delay: "1.15s" },
                  { h: "h-2", delay: "1.3s" },
                ].map((bar, idx) => (
                  <span
                    key={idx}
                    style={{
                      animationDelay: isPlayingAudio ? bar.delay : "0s",
                    }}
                    className={`w-0.5 sm:w-1 bg-white rounded-full ${bar.h} ${
                      isPlayingAudio ? "animate-wave-pulse" : "group-hover:scale-y-110"
                    } transition-transform`}
                  />
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  {isPlayingAudio && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping shrink-0" />
                  )}
                  <p className="text-xs sm:text-sm font-sans font-bold leading-tight text-white">
                    Designing for Trust
                  </p>
                </div>
                <p className="text-[10px] sm:text-xs text-white/90 font-sans mt-0.5 truncate">
                  {isPlayingAudio ? "Playing audio..." : "Listen to my interview"}
                </p>
              </div>
            </div>

            {/* Card 5: Giant Bold "CV" Card (Screenshot 5) */}
            <div className="wix-card p-4 sm:p-6 bg-white dark:bg-[#121214] flex flex-col justify-between min-h-[175px] sm:min-h-[195px]">
              <span className="text-5xl sm:text-7xl lg:text-8xl font-sans font-black text-neutral-900 dark:text-white tracking-tighter leading-none">
                CV
              </span>

              <a
                href="/resume.pdf"
                download="Hithesh_HG_Resume.pdf"
                onClick={() => playClick(850, 0.03)}
                className="wix-pill border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#18181b] text-neutral-900 dark:text-white text-[11px] sm:text-xs font-semibold justify-between w-full hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors shadow-2xs px-2.5 sm:px-4 py-2 sm:py-2.5"
              >
                <span>Download</span>
                <ArrowDown className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Card 6: Chartreuse / Yellow Active Pipeline Dashboard (Direct from Screenshot 5) */}
          <div className="wix-card p-4 sm:p-7 bg-[#f6fee7] dark:bg-[#141b0e] border-[#d9f99d] dark:border-[#365314] flex flex-col justify-between min-h-[230px] sm:min-h-[250px] relative overflow-hidden">
            {/* Diagonal Tilted White Action Pills on Left (Screenshot 5: Projection, Pricing, Forum) */}
            <div className="absolute -left-6 top-6 space-y-2 opacity-85 pointer-events-none transform -rotate-12 hidden sm:block">
              <div className="bg-white dark:bg-[#1c2414] px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm text-[11px] font-sans font-semibold text-neutral-700 dark:text-neutral-300">
                Projection
              </div>
              <div className="bg-white dark:bg-[#1c2414] px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm text-[11px] font-sans font-semibold text-neutral-700 dark:text-neutral-300 translate-x-2">
                Pricing
              </div>
              <div className="bg-white dark:bg-[#1c2414] px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm text-[11px] font-sans font-semibold text-neutral-700 dark:text-neutral-300 translate-x-4">
                Forum
              </div>
            </div>

            {/* Right Top: Dana M Avatar Badge */}
            <div className="flex justify-end mb-3">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white dark:bg-[#1c2414] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700/80 shadow-xs">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 text-white flex items-center justify-center font-bold text-[8.5px] shadow-inner select-none shrink-0">
                  <span>DM</span>
                </div>
                <div className="text-[10px] font-sans leading-tight">
                  <span className="font-bold text-neutral-900 dark:text-white block">Dana M.</span>
                  <span className="text-neutral-400 text-[9px]">Senior Product</span>
                </div>
              </div>
            </div>

            {/* Center: Active Pipeline Steps & Circular Dial (Direct from Screenshot 5) */}
            <div className="grid grid-cols-12 gap-2 sm:gap-3 items-center z-10 my-auto">
              {/* Pipeline List */}
              <div className="col-span-7 space-y-1.5 sm:space-y-2 pl-1 sm:pl-4">
                <span className="text-[10px] sm:text-[11px] font-sans font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider block">
                  Active Pipeline
                </span>
                <div className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-[11px] font-sans text-neutral-700 dark:text-neutral-300">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16] shrink-0" />
                    <span className="truncate">Applied</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 font-semibold text-neutral-900 dark:text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16] shrink-0" />
                    <span className="truncate">Team Interview</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0" />
                    <span className="truncate">AI Screen</span>
                  </div>
                </div>
              </div>

              {/* Large Circular Gauge Dial */}
              <div className="col-span-5 flex items-center justify-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      className="text-neutral-200 dark:text-neutral-800"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      fill="none"
                      stroke="#84cc16"
                      strokeWidth="6"
                      strokeDasharray="201"
                      strokeDashoffset="45"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-sm sm:text-base font-sans font-black text-neutral-900 dark:text-white">
                      84%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="pt-2 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 flex items-center justify-between border-t border-neutral-200/60 dark:border-neutral-800/60 z-10">
              <span>Sprint 14</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">On Track</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
