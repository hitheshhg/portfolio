import { notFound } from "next/navigation";
import Image from "next/image";
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
      images: [project.coverImage],
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
    <div className="min-h-screen bg-transparent pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 sm:gap-5">
        {/* Unified Top Navigation */}
        <BentoHeader activeTab="development" />

        {/* Back Link Breadcrumb Card */}
        <div className="flex items-center justify-between text-xs font-mono px-2">
          <Link
            href="/development"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-emerald-600 dark:text-[#4ade80]" />
            <span>back to all projects</span>
          </Link>
          <span className="text-neutral-500">case study // {project.category.toLowerCase()}</span>
        </div>

        {/* Main Project Case Study Bento Card */}
        <article className="bento-card p-6 sm:p-10 space-y-12">
          {/* Header Info */}
          <header>
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-300 dark:text-neutral-600">•</span>
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">{project.year}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-sans font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-2xl">
              {project.tagline}
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-xs font-mono">
              <div>
                <span className="text-neutral-500 block mb-1 flex items-center gap-1">
                  <User className="w-3 h-3 text-emerald-600 dark:text-[#4ade80]" /> role
                </span>
                <span className="text-neutral-800 dark:text-neutral-200 font-sans text-xs">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="text-neutral-500 block mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-600 dark:text-[#4ade80]" /> duration
                </span>
                <span className="text-neutral-800 dark:text-neutral-200">{project.duration}</span>
              </div>
              <div>
                <span className="text-neutral-500 block mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-emerald-600 dark:text-[#4ade80]" /> year
                </span>
                <span className="text-neutral-800 dark:text-neutral-200">{project.year}</span>
              </div>
              <div>
                <span className="text-neutral-500 block mb-1 flex items-center gap-1">
                  <Layers className="w-3 h-3 text-emerald-600 dark:text-[#4ade80]" /> primary stack
                </span>
                <span className="text-neutral-800 dark:text-neutral-200">{project.stack[0]}</span>
              </div>
            </div>
          </header>

          {/* Cover Visual */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-neutral-950">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 pb-6 border-b border-black/5 dark:border-white/5">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-black text-xs font-mono hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-black/10 text-neutral-800 hover:border-black/30 dark:border-white/10 dark:text-white text-xs font-mono dark:hover:border-white/30 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-600 dark:text-[#4ade80]" />
                <span>live demo</span>
              </a>
            )}
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Problem */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">[01]</span>
                <h2 className="text-lg sm:text-xl font-sans font-bold text-neutral-900 dark:text-white">
                  the problem
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                {project.problem}
              </p>
            </section>

            {/* Approach & Architecture */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">[02]</span>
                <h2 className="text-lg sm:text-xl font-sans font-bold text-neutral-900 dark:text-white">
                  approach &amp; architecture
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 font-sans">
                {project.approach}
              </p>

              <div className="p-5 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] space-y-2.5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold mb-2">
                  system highlights
                </h3>
                {project.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#4ade80] shrink-0 mt-0.5" />
                    <span className="font-sans leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">[03]</span>
                <h2 className="text-lg sm:text-xl font-sans font-bold text-neutral-900 dark:text-white">
                  key features
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]"
                  >
                    <span className="font-mono text-[11px] text-emerald-600 dark:text-[#4ade80] block mb-1">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-sm text-neutral-900 dark:text-white mb-1.5 font-sans">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">[04]</span>
                <h2 className="text-lg sm:text-xl font-sans font-bold text-neutral-900 dark:text-white">
                  technologies
                </h2>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-black/[0.03] dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Outcomes */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">[05]</span>
                <h2 className="text-lg sm:text-xl font-sans font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <span>outcomes &amp; metrics</span>
                  <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-[#4ade80]" />
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 font-sans">
                {project.outcome.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.outcome.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:border-[#4ade80]/20 dark:bg-[#4ade80]/5"
                  >
                    <span className="font-mono text-xs text-emerald-600 dark:text-[#4ade80] block mb-1">
                      ✓ outcome
                    </span>
                    <p className="text-xs text-neutral-800 dark:text-neutral-200 font-medium">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer Nav */}
          <div className="pt-8 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono">
            <Link
              href="/development"
              className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              ← all projects
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-neutral-900 dark:text-white hover:underline underline-offset-4 inline-flex items-center gap-1.5"
            >
              <span>next: {nextProject.title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600 dark:text-[#4ade80]" />
            </Link>
          </div>
        </article>

        {/* Unified Footer */}
        <Footer />
      </div>
    </div>
  );
}
