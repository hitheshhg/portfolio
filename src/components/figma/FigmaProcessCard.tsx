import { Database, SearchCheck, BarChart3 } from "lucide-react";

export function FigmaProcessCard() {
  const steps = [
    {
      title: "ingest & clean",
      subtitle: "ETL pipelines & schema hygiene",
      icon: <Database className="w-8 h-8 text-[var(--accent-sky)] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "explore & model",
      subtitle: "statistics & predictive ML",
      icon: <SearchCheck className="w-8 h-8 text-[var(--accent-emerald)] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "visualize & impact",
      subtitle: "BI dashboards & decisions",
      icon: <BarChart3 className="w-8 h-8 text-[var(--accent-amber)] group-hover:scale-110 transition-transform duration-300" />,
    },
  ];

  return (
    <div className="bento-card p-6 sm:p-10 flex flex-col justify-between h-full min-h-[380px]">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-[var(--text-primary)] tracking-wide uppercase">
            analytics lifecycle
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-sans leading-relaxed max-w-md">
          A rigorous analytical methodology: from raw pipeline ingestion and data validation to statistical modeling and executive BI storytelling.
        </p>
      </div>

      {/* 3 Process Steps */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 my-auto pt-6 pb-2">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex flex-col items-center text-center group p-2 rounded-xl hover:bg-[var(--surface-subtle)] transition-colors"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-2.5 rounded-2xl bg-[var(--surface-subtle)] border border-[var(--surface-border)] group-hover:border-[var(--bento-border-hover)] group-hover:bg-[var(--surface-hover)] transition-all shadow-xs">
              {step.icon}
            </div>
            <span className="text-xs font-mono font-medium text-[var(--text-primary)] transition-colors">
              {step.title}
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5 line-clamp-1">
              {step.subtitle}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom tag */}
      <div className="pt-4 border-t border-[var(--bento-border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
        <span>methodology</span>
        <span className="text-[var(--accent-emerald)] font-medium">evidence-based &amp; verified</span>
      </div>
    </div>
  );
}
