import { BentoHeader } from "@/components/layout/BentoHeader";
import { Footer } from "@/components/layout/Footer";
import { BarChart2, CheckCircle2 } from "lucide-react";

export default function DesignPage() {
  const designProjects = [
    {
      title: "Executive BI Design System & Color Scales",
      category: "BI Design System",
      description:
        "Comprehensive visual design language for business intelligence dashboards. Features colorblind-safe categorical palettes, sequential gradients for heatmaps, and high-contrast dark themes.",
      deliverables: ["Colorblind-Safe Palettes", "Standardized KPI Cards", "WCAG AAA Compliant"],
      tags: ["Power BI", "Tableau", "Data Viz", "Accessibility"],
      visual: (
        <div className="w-full h-36 rounded-xl bg-[var(--surface-subtle)] border border-[var(--surface-border)] p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-[var(--bento-border-hover)] transition-colors">
          <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <BarChart2 className="w-3.5 h-3.5 text-[var(--accent-emerald)]" /> dataviz.palette
            </span>
            <span className="text-[var(--accent-emerald)] font-semibold">v3.0</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="h-10 rounded-lg bg-[#10b981] flex flex-col items-center justify-center shadow-xs">
              <span className="text-[9px] font-mono text-black font-bold">positive</span>
            </div>
            <div className="h-10 rounded-lg bg-[#38bdf8] flex flex-col items-center justify-center shadow-xs">
              <span className="text-[9px] font-mono text-black font-bold">neutral</span>
            </div>
            <div className="h-10 rounded-lg bg-[#f59e0b] flex flex-col items-center justify-center shadow-xs">
              <span className="text-[9px] font-mono text-black font-bold">warning</span>
            </div>
            <div className="h-10 rounded-lg bg-[#f43f5e] flex flex-col items-center justify-center shadow-xs">
              <span className="text-[9px] font-mono text-white font-bold">critical</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-semibold shadow-xs">
              kpi:scorecard
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-[var(--surface-border)] text-[var(--text-secondary)]">
              sparkline:trend
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Dashboard Wireframing & Information Architecture",
      category: "Information Design",
      description:
        "Figma wireframes and user flow mapping for complex multi-page operational reports. Optimizes filter placement, drill-through paths, and visual scannability.",
      deliverables: ["12 Interactive Layouts", "Executive Drill-Downs", "Low-Fidelity Mocks"],
      tags: ["Information Arch", "Wireframing", "Cognitive Load", "UX Research"],
      visual: (
        <div className="w-full h-36 rounded-xl bg-[var(--surface-subtle)] border border-[var(--surface-border)] p-3.5 flex items-center justify-center gap-3 overflow-hidden relative group-hover:border-[var(--bento-border-hover)] transition-colors">
          <div className="w-24 h-28 rounded-xl bg-[var(--bento-bg)] border border-[var(--bento-border)] p-2 flex flex-col justify-between shadow-md">
            <div className="h-2 w-12 bg-[var(--surface-border)] rounded-full" />
            <div className="space-y-1">
              <div className="h-3 w-full bg-[var(--accent-emerald-bg)] rounded border border-[var(--accent-emerald-border)]" />
              <div className="h-6 w-full bg-[var(--surface-subtle)] rounded" />
            </div>
            <div className="h-3 w-full bg-[var(--surface-subtle)] rounded" />
          </div>
          <div className="w-24 h-28 rounded-xl bg-[var(--bento-bg)] border border-[var(--bento-border)] p-2 flex flex-col justify-between opacity-70 shadow-sm">
            <div className="h-2 w-10 bg-[var(--surface-border)] rounded-full" />
            <div className="grid grid-cols-2 gap-1 my-auto">
              <div className="h-8 bg-[var(--surface-subtle)] rounded" />
              <div className="h-8 bg-[var(--surface-subtle)] rounded" />
            </div>
            <div className="h-2 w-full bg-[var(--surface-border)] rounded" />
          </div>
        </div>
      ),
    },
    {
      title: "Tabular Layouts & Financial Typography",
      category: "Data Typography",
      description:
        "Monospaced numeric alignments, baseline rhythms, and tabular figures ensuring accurate scanning of large accounting and transactional data tables.",
      deliverables: ["Tabular Figure Rules", "Grid Rhythm Spec", "Density Standards"],
      tags: ["Typography", "Tabular Figures", "Financial BI", "Grid Rhythms"],
      visual: (
        <div className="w-full h-36 rounded-xl bg-[var(--surface-subtle)] border border-[var(--surface-border)] p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-[var(--bento-border-hover)] transition-colors">
          <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
            <span>tabular / figures</span>
            <span className="text-[var(--text-subtle)]">tnum • zero</span>
          </div>

          <div className="space-y-1 px-1 font-mono text-xs">
            <div className="flex justify-between border-b border-[var(--surface-border)] pb-1">
              <span className="text-[var(--text-muted)]">Q3 ARR</span>
              <span className="text-[var(--text-primary)] font-bold">$1,420,500.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Variance</span>
              <span className="text-[var(--accent-emerald)] font-bold">+18.4%</span>
            </div>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-[var(--text-subtle)] via-[var(--accent-emerald)] to-transparent rounded-full" />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-[var(--text-primary)] pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 sm:gap-5">
        {/* Unified Top Navigation with Banner */}
        <BentoHeader
          activeTab="design"
          tagHighlight="dashboard &amp; viz design"
          title="data visualization &amp; dashboard systems"
          subtitle="Architecting intuitive executive dashboard systems, accessible color scales, and human-centered business intelligence interfaces."
          headerAction={
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--surface-subtle)] border border-[var(--bento-border)] text-[var(--text-secondary)]">
              {designProjects.length} design studies
            </span>
          }
        />

        {/* Design Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {designProjects.map((item, idx) => (
            <div
              key={idx}
              className="bento-card p-6 flex flex-col justify-between h-full group hover:border-[var(--bento-border-hover)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-[var(--text-subtle)]">
                    0{idx + 1}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-[var(--surface-border)] bg-[var(--surface-subtle)] text-[var(--text-secondary)]">
                    {item.category}
                  </span>
                </div>

                {/* Visual Preview Canvas */}
                <div className="mb-5">{item.visual}</div>

                <h2 className="text-lg font-bold font-sans text-[var(--text-primary)] mb-2 group-hover:underline underline-offset-4">
                  {item.title}
                </h2>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--surface-border)]">
                  {item.deliverables.map((deliv) => (
                    <div
                      key={deliv}
                      className="flex items-center gap-2 text-[11px] font-mono text-[var(--text-secondary)]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[var(--accent-emerald)] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--surface-border)]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--surface-subtle)] text-[var(--text-secondary)] border border-[var(--surface-border)]"
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
