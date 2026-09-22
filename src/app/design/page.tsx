import { BentoHeader } from "@/components/layout/BentoHeader";
import { Footer } from "@/components/layout/Footer";
import { Palette, CheckCircle2 } from "lucide-react";

export default function DesignPage() {
  const designProjects = [
    {
      title: "Design System & UI Kit",
      category: "Design System",
      description:
        "Comprehensive tokenized design library built from Figma primitives. Features strict 8pt spacing, WCAG AAA dark mode contrast tokens, and composable compound components.",
      deliverables: ["40+ Reusable Tokens", "Auto Layout 5.0", "WCAG AAA Compliant"],
      tags: ["Figma", "Auto Layout", "Design Tokens", "Accessibility"],
      visual: (
        <div className="w-full h-36 rounded-xl bg-white/[0.03] border border-white/10 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-white/20 transition-colors">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-[#4ade80]" /> tokens.tokenset
            </span>
            <span className="text-[#4ade80]">v2.4</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="h-10 rounded-lg bg-[#121214] border border-white/15 flex flex-col items-center justify-center">
              <span className="text-[9px] font-mono text-neutral-400">canvas</span>
            </div>
            <div className="h-10 rounded-lg bg-[#000000] border border-white/15 flex flex-col items-center justify-center">
              <span className="text-[9px] font-mono text-neutral-400">card</span>
            </div>
            <div className="h-10 rounded-lg bg-[#4ade80]/15 border border-[#4ade80]/30 flex flex-col items-center justify-center">
              <span className="text-[9px] font-mono text-[#4ade80]">brand</span>
            </div>
            <div className="h-10 rounded-lg bg-white/10 border border-white/20 flex flex-col items-center justify-center">
              <span className="text-[9px] font-mono text-white">border</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white text-black font-semibold">
              button:primary
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-white/20 text-neutral-300">
              badge:ghost
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Mobile App Wireframing & UX",
      category: "Product Design",
      description:
        "Information architecture, user flow mapping, and low-fidelity prototypes for rapid usability validation across iOS and Android form factors.",
      deliverables: ["18 Interactive Flows", "Heuristic Evaluation", "Clickable Prototypes"],
      tags: ["UX Research", "Wireframing", "User Journeys", "Information Arch"],
      visual: (
        <div className="w-full h-36 rounded-xl bg-white/[0.03] border border-white/10 p-3.5 flex items-center justify-center gap-3 overflow-hidden relative group-hover:border-white/20 transition-colors">
          <div className="w-20 h-28 rounded-xl bg-black border border-white/20 p-1.5 flex flex-col justify-between shadow-lg">
            <div className="h-2 w-8 bg-white/20 rounded-full mx-auto" />
            <div className="space-y-1">
              <div className="h-2 w-full bg-white/10 rounded" />
              <div className="h-2 w-3/4 bg-white/10 rounded" />
            </div>
            <div className="h-4 w-full bg-[#4ade80]/20 border border-[#4ade80]/40 rounded flex items-center justify-center">
              <span className="text-[8px] font-mono text-[#4ade80]">submit</span>
            </div>
          </div>
          <div className="w-20 h-28 rounded-xl bg-black border border-white/10 p-1.5 flex flex-col justify-between opacity-70">
            <div className="h-2 w-8 bg-white/20 rounded-full mx-auto" />
            <div className="grid grid-cols-2 gap-1 my-auto">
              <div className="h-6 bg-white/10 rounded" />
              <div className="h-6 bg-white/10 rounded" />
            </div>
            <div className="h-2 w-full bg-white/20 rounded" />
          </div>
        </div>
      ),
    },
    {
      title: "Editorial & Digital Identity",
      category: "Branding",
      description:
        "Modular typography hierarchies, rhythmic baseline grids, and visual art direction designed for engineering publications and developer docs.",
      deliverables: ["Type Specimen Sheet", "Grid Alignments", "Asset Guidelines"],
      tags: ["Typography", "Grid Systems", "Identity", "Design Craft"],
      visual: (
        <div className="w-full h-36 rounded-xl bg-white/[0.03] border border-white/10 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-white/20 transition-colors">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span>type / grotesque</span>
            <span className="text-neutral-500">800 • 500 • 400</span>
          </div>

          <div className="flex items-baseline justify-between px-2">
            <span className="text-3xl font-sans font-bold text-white tracking-tighter">
              Aa
            </span>
            <span className="text-2xl font-serif italic text-neutral-400">
              Gg
            </span>
            <span className="text-2xl font-mono text-[#4ade80]">
              &lt;01&gt;
            </span>
            <span className="text-xl font-mono text-neutral-500">
              8pt
            </span>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-white/40 via-[#4ade80]/40 to-transparent rounded-full" />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 sm:gap-5">
        {/* Unified Top Navigation with Banner */}
        <BentoHeader
          activeTab="design"
          tagLineThrough="portfolio"
          tagHighlight="design"
          title="design work & case studies"
          subtitle="From user research and low-fidelity wireframing to tokenized design systems and interactive high-fidelity interfaces."
          headerAction={
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300">
              {designProjects.length} core studies
            </span>
          }
        />

        {/* Design Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {designProjects.map((item, idx) => (
            <div
              key={idx}
              className="bento-card p-6 bg-black text-white border border-white/[0.08] flex flex-col justify-between h-full group hover:border-white/20 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-neutral-500">
                    0{idx + 1}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-white/10 text-neutral-300">
                    {item.category}
                  </span>
                </div>

                {/* Visual Preview Canvas */}
                <div className="mb-5">{item.visual}</div>

                <h2 className="text-lg font-bold font-sans text-white mb-2 group-hover:underline underline-offset-4">
                  {item.title}
                </h2>

                <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  {item.deliverables.map((deliv) => (
                    <div
                      key={deliv}
                      className="flex items-center gap-2 text-[11px] font-mono text-neutral-300"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#4ade80] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-neutral-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Unified Footer */}
        <Footer />
      </div>
    </div>
  );
}
