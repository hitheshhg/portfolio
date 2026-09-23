import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { BentoHeader } from "@/components/layout/BentoHeader";
import { FigmaHeroCard } from "@/components/figma/FigmaHeroCard";
import { FigmaProcessCard } from "@/components/figma/FigmaProcessCard";
import { FigmaToolsCard } from "@/components/figma/FigmaToolsCard";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent text-[var(--text-primary)] pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 sm:gap-5">
        {/* Unified Top Navigation */}
        <BentoHeader activeTab="home" />

        {/* Row 1: Hero Card & Process Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          <div className="lg:col-span-7">
            <FigmaHeroCard />
          </div>
          <div className="lg:col-span-5">
            <FigmaProcessCard />
          </div>
        </div>

        {/* Row 2: Analytics Tools Card */}
        <FigmaToolsCard />

        {/* Row 3: Featured Analytics Case Studies */}
        <div className="bento-card p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-[var(--accent-emerald)] tracking-wide uppercase">
                  selected work
                </span>
                <span className="text-[var(--text-subtle)] text-xs font-mono">•</span>
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  real-world business impact
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-sans font-bold text-[var(--text-primary)] tracking-tight">
                predictive models &amp; executive dashboards
              </h2>
            </div>
            <Link
              href="/development"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors group"
            >
              <span>view all case studies</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-[var(--surface-subtle)] border border-[var(--surface-border)] flex flex-col justify-between group hover:border-[var(--bento-border-hover)] transition-all duration-300 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-[var(--text-subtle)]">
                      0{idx + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-[var(--surface-border)] bg-[var(--bento-bg)] text-[var(--text-secondary)] shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 group/link mb-2 block"
                  >
                    <h3 className="text-lg font-bold font-sans text-[var(--text-primary)] group-hover/link:underline underline-offset-4 leading-snug">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-subtle)] group-hover/link:text-[var(--text-primary)] shrink-0 transition-colors" />
                  </Link>

                  <p className="text-xs font-mono text-[var(--accent-emerald)] mb-3 font-medium">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Quantified Impact Pill */}
                  <div className="p-3 rounded-xl bg-[var(--accent-emerald-bg)] border border-[var(--accent-emerald-border)] mb-4">
                    <span className="font-mono text-[10px] text-[var(--accent-emerald)] font-semibold block uppercase tracking-wider mb-0.5">
                      Key Impact
                    </span>
                    <p className="text-xs text-[var(--text-primary)] font-medium line-clamp-2 leading-snug">
                      {project.outcome.metrics[0]}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="pt-3 border-t border-[var(--surface-border)] flex items-center justify-between text-xs font-mono">
                    <span className="text-[var(--text-muted)]">{project.year}</span>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-[var(--text-primary)] hover:text-[var(--accent-emerald)] transition-colors font-medium flex items-center gap-1"
                    >
                      <span>case study</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4: Quick Connect Bento Card */}
        <div className="bento-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[var(--accent-emerald)] tracking-wide uppercase">
                connect
              </span>
              <span className="text-[var(--text-subtle)] text-xs font-mono">•</span>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                collaborate
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-[var(--text-primary)] tracking-tight">
              have a data challenge or analytics role in mind?
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Open to Data Analyst, Business Intelligence, and Analytics Engineering opportunities. Let&apos;s turn your data into strategic clarity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="mailto:hitheshhg@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-semibold text-xs font-mono hover:opacity-90 transition-opacity shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>hitheshhg@gmail.com</span>
            </a>
            <Link
              href="/cv"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[var(--bento-border)] bg-[var(--surface-subtle)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)] font-medium text-xs font-mono transition-all"
            >
              <span>view cv</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Shared Unified Footer */}
        <Footer />
      </div>
    </div>
  );
}
