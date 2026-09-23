import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { BentoHeader } from "@/components/layout/BentoHeader";
import { Footer } from "@/components/layout/Footer";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-transparent text-[var(--text-primary)] pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 sm:gap-5">
        {/* Unified Top Navigation with Banner */}
        <BentoHeader
          activeTab="development"
          tagHighlight="analytics &amp; bi"
          title="analytics projects &amp; case studies"
          subtitle="End-to-end data workflows, exploratory analysis, predictive modeling pipelines, and interactive BI dashboards built with Python, SQL, Power BI, and Tableau."
          headerAction={
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--surface-subtle)] border border-[var(--bento-border)] text-[var(--text-secondary)]">
              {projects.length} analytical case studies
            </span>
          }
        />

        {/* Development Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="bento-card p-6 flex flex-col justify-between h-full group hover:border-[var(--bento-border-hover)] transition-all duration-300 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-[var(--text-subtle)]">
                    [{`0${idx + 1}`}]
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-[var(--surface-border)] bg-[var(--bento-bg)] text-[var(--text-secondary)] shadow-xs">
                    {project.category}
                  </span>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 group/link mb-2 block"
                >
                  <h2 className="text-xl font-bold font-sans text-[var(--text-primary)] group-hover/link:underline underline-offset-4 leading-snug">
                    {project.title}
                  </h2>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-subtle)] group-hover/link:text-[var(--text-primary)] shrink-0 transition-colors" />
                </Link>

                <p className="text-xs font-mono text-[var(--accent-emerald)] mb-3 font-medium">
                  {project.tagline}
                </p>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Key Impact Metric Box */}
                <div className="p-3.5 rounded-xl bg-[var(--accent-emerald-bg)] border border-[var(--accent-emerald-border)] mb-4">
                  <span className="font-mono text-[10px] text-[var(--accent-emerald)] font-semibold block uppercase tracking-wider mb-1">
                    Quantified Outcome
                  </span>
                  <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                    {project.outcome.metrics[0]}
                  </p>
                </div>
              </div>

              <div>
                {/* Tech stack pills */}
                <div className="pt-4 border-t border-[var(--surface-border)] flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--surface-subtle)] text-[var(--text-secondary)] border border-[var(--surface-border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card footer action links */}
                <div className="flex items-center justify-between text-xs font-mono pt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-[var(--text-primary)] hover:underline underline-offset-4 flex items-center gap-1 font-medium hover:text-[var(--accent-emerald)] transition-colors"
                  >
                    <span>view case study</span>
                    <span>→</span>
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Analytics Repository"
                        className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Dashboard"
                        className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
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
