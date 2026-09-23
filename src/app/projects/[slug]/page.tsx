import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Clock,
  User,
  Layers,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { BentoHeader } from "@/components/layout/BentoHeader";
import { Footer } from "@/components/layout/Footer";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Hithesh HG",
    };
  }

  return {
    title: `${project.title} — Case Study | Hithesh HG`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study | Hithesh HG`,
      description: project.tagline,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-transparent text-[var(--text-primary)] pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 sm:gap-5">
        {/* Unified Top Navigation */}
        <BentoHeader activeTab="development" />

        {/* Back Link Breadcrumb Card */}
        <div className="flex items-center justify-between text-xs font-mono px-2">
          <Link
            href="/development"
            className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[var(--accent-emerald)]" />
            <span>back to all projects</span>
          </Link>
          <span className="text-[var(--text-subtle)]">case study // {project.category.toLowerCase()}</span>
        </div>

        {/* Main Project Case Study Bento Card */}
        <article className="bento-card p-6 sm:p-10 space-y-10">
          {/* Header Info */}
          <header>
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-[var(--surface-border)] bg-[var(--surface-subtle)] text-[var(--text-secondary)]">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[var(--text-subtle)]">•</span>
              <span className="text-xs font-mono text-[var(--text-muted)]">{project.year}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-sans font-bold text-[var(--text-primary)] mb-3 tracking-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base font-mono text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl">
              {project.tagline}
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[var(--surface-subtle)] border border-[var(--surface-border)] text-xs font-mono shadow-xs">
              <div>
                <span className="text-[var(--text-muted)] block mb-1 flex items-center gap-1">
                  <User className="w-3 h-3 text-[var(--accent-emerald)]" /> role
                </span>
                <span className="text-[var(--text-primary)] font-sans text-xs font-medium">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[var(--accent-emerald)]" /> duration
                </span>
                <span className="text-[var(--text-primary)] font-medium">{project.duration}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[var(--accent-emerald)]" /> year
                </span>
                <span className="text-[var(--text-primary)] font-medium">{project.year}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block mb-1 flex items-center gap-1">
                  <Layers className="w-3 h-3 text-[var(--accent-emerald)]" /> primary stack
                </span>
                <span className="text-[var(--text-primary)] font-medium">{project.stack[0]}</span>
              </div>
            </div>
          </header>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 pb-6 border-b border-[var(--surface-border)]">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] text-xs font-mono hover:opacity-90 transition-opacity shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github repo</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--bento-border)] bg-[var(--surface-subtle)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)] text-xs font-mono transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
                <span>live demo</span>
              </a>
            )}
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Problem */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-[var(--text-subtle)]">[01]</span>
                <h2 className="text-lg sm:text-xl font-sans font-bold text-[var(--text-primary)]">
                  the problem
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                {project.problem}
              </p>
            </section>

            {/* Approach & Architecture */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-[var(--text-subtle)]">[02]</span>
                <h2 className="text-lg sm:text-xl font-sans font-bold text-[var(--text-primary)]">
                  approach &amp; architecture
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4 font-sans">
                {project.approach}
              </p>

              <div className="p-5 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-subtle)] space-y-2.5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                  system highlights
                </h3>
                {project.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-emerald)] shrink-0 mt-0.5" />
                    <span className="font-sans leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs text-[var(--text-subtle)]">[03]</span>
                <h2 className="text-lg sm:text-xl font-sans font-bold text-[var(--text-primary)]">
                  key features
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-subtle)]"
                  >
                    <span className="font-mono text-[11px] text-[var(--accent-emerald)] font-semibold block mb-1">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-sm text-[var(--text-primary)] mb-1.5 font-sans">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-[var(--text-subtle)]">[04]</span>
                <h2 className="text-lg sm:text-xl font-sans font-bold text-[var(--text-primary)]">
                  technologies
                </h2>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--surface-subtle)] text-[var(--text-secondary)] border border-[var(--surface-border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Outcomes */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-[var(--text-subtle)]">[05]</span>
                <h2 className="text-lg sm:text-xl font-sans font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span>outcomes &amp; metrics</span>
                  <TrendingUp className="w-4 h-4 text-[var(--accent-emerald)]" />
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4 font-sans">
                {project.outcome.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.outcome.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[var(--accent-emerald-border)] bg-[var(--accent-emerald-bg)]"
                  >
                    <span className="font-mono text-xs text-[var(--accent-emerald)] font-semibold block mb-1">
                      ✓ outcome
                    </span>
                    <p className="text-xs text-[var(--text-primary)] font-medium">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer Nav */}
          <div className="pt-8 border-t border-[var(--surface-border)] flex items-center justify-between text-xs font-mono">
            <Link
              href="/development"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              ← all projects
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-[var(--text-primary)] hover:text-[var(--accent-emerald)] hover:underline underline-offset-4 inline-flex items-center gap-1.5 font-medium"
            >
              <span>next: {nextProject.title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
            </Link>
          </div>
        </article>

        {/* Unified Footer */}
        <Footer />
      </div>
    </div>
  );
}
