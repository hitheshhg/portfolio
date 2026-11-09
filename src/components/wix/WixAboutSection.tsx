"use client";

import Link from "next/link";
import { ArrowUpRight, Download, Send } from "lucide-react";
import { playClick } from "@/lib/sound";

interface WixAboutSectionProps {
  onOpenContact?: () => void;
}

export function WixAboutSection({ onOpenContact }: WixAboutSectionProps) {
  return (
    <section id="about" className="w-full max-w-[1360px] mx-auto px-4 sm:px-8 my-6 sm:my-10 scroll-mt-24">
      {/* Contained High-Contrast Dark Feature Section (Screenshot 1) */}
      <div className="w-full bg-black text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-16 border border-neutral-800/90 shadow-2xl">
        {/* Pill Badge */}
        <div className="wix-pill border-neutral-700 bg-neutral-950 text-white uppercase text-xs tracking-wider mb-8">
          ABOUT
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Big Headline from Screenshot 1 */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white leading-[1.1]">
              Where Human Behavior Meets Digital Innovation
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl font-sans">
              I bridge the gap between heavy technical systems and human-centered design. With a foundation in Computer Science and hands-on data analytics and interface design experience, I build digital experiences and analytical environments that don&apos;t just solve problems, but create delight and drive enduring business growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                type="button"
                onClick={() => {
                  playClick(750, 0.02);
                  if (onOpenContact) onOpenContact();
                }}
                className="wix-pill bg-white text-black border-transparent uppercase font-sans text-xs tracking-wider font-semibold hover:bg-neutral-200 transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5 mr-2 text-emerald-600" />
                <span>Start a Conversation</span>
              </button>

              <a
                href="/resume.pdf"
                download="Hithesh_HG_Resume.pdf"
                onClick={() => playClick(850, 0.03)}
                className="wix-pill bg-transparent border-neutral-700 text-white uppercase font-sans text-xs tracking-wider hover:border-neutral-400 transition-colors"
              >
                <Download className="w-3.5 h-3.5 mr-2" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Mini Interactive Preview Frame Matching Screenshot 1 */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-[22px] border border-neutral-800 bg-[#09090b] relative overflow-hidden flex flex-col justify-between min-h-[360px]">
            {/* Dot Matrix Pattern */}
            <div
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />

            {/* Mini Browser Frame Preview */}
            <div className="relative z-10 bg-[#121214] rounded-xl border border-neutral-800 shadow-xl overflow-hidden">
              {/* Browser Titlebar */}
              <div className="px-3.5 py-2.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[10px] font-mono text-neutral-400">hithesh.design</span>
                <div className="w-8" />
              </div>

              {/* Browser Content Thumbnail */}
              <div className="p-3 bg-[#0a0a0c] space-y-2">
                <div className="grid grid-cols-12 gap-1.5">
                  <div className="col-span-5 h-16 rounded-md bg-neutral-800/80 p-1.5 flex flex-col justify-between">
                    <div className="w-full h-5 rounded bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-blue-400/40" />
                    <div className="w-3/4 h-1.5 rounded bg-neutral-700" />
                  </div>
                  <div className="col-span-4 h-16 rounded-md bg-neutral-800/80 p-1.5 flex flex-col justify-between">
                    <div className="w-1/2 h-1.5 rounded bg-neutral-600" />
                    <div className="w-full h-4 rounded bg-white/10" />
                  </div>
                  <div className="col-span-3 h-16 rounded-md bg-[#ff5733] p-1.5 flex flex-col justify-center items-center">
                    <div className="flex items-center gap-0.5">
                      <span className="w-0.5 h-2 bg-white rounded-full" />
                      <span className="w-0.5 h-4 bg-white rounded-full" />
                      <span className="w-0.5 h-3 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="h-10 rounded-md bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/5 flex items-center px-2.5 justify-between">
                  <div className="w-16 h-1.5 rounded bg-white/40" />
                  <div className="w-6 h-4 rounded bg-white/20" />
                </div>
              </div>
            </div>

            {/* Meta & CV Links */}
            <div className="relative z-10 pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for New Roles</span>
              </span>
              <Link
                href="/cv"
                onClick={() => playClick(700, 0.02)}
                className="text-white hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Full CV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
