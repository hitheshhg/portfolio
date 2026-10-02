import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { BentoHeader } from "@/components/layout/BentoHeader";
import { Footer } from "@/components/layout/Footer";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-transparent pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 sm:gap-5">
        {/* Unified Top Navigation with Banner */}
        <BentoHeader
          activeTab="development"
          tagLineThrough="software"
          tagHighlight="development"
          title="engineering projects & systems"
          subtitle="Production-grade web apps, native mobile systems, and backend microservices built with Next.js, Java, TypeScript, and PostgreSQL."
          headerAction={
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300">
              {projects.length} featured systems
            </span>
          }
        />

        {/* Development Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="bento-card p-6 flex flex-col justify-between h-full group hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-neutral-500">
                    [{`0${idx + 1}`}]
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 bg-black/[0.02] dark:bg-white/[0.03]">
                    {project.category}
                  </span>
                </div>

                {/* Preview Thumbnail */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-950 border border-black/10 dark:border-white/10 mb-4 block group-hover:border-black/20 dark:group-hover:border-white/20 transition-all"
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 group/link mb-1.5"
                >
                  <h2 className="text-lg font-bold font-sans text-neutral-900 dark:text-white group-hover/link:underline underline-offset-4">
                    {project.title}
                  </h2>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover/link:text-neutral-900 dark:text-neutral-500 dark:group-hover/link:text-white transition-colors" />
                </Link>

                <p className="text-xs font-mono text-emerald-600 dark:text-[#4ade80] mb-2.5">
                  {project.tagline}
                </p>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Tech stack pills */}
                <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/[0.03] dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-300 border border-black/5 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card footer action links */}
                <div className="flex items-center justify-between text-xs font-mono pt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-neutral-900 dark:text-white hover:underline underline-offset-4 flex items-center gap-1"
                  >
                    <span>case study</span>
                    <span>→</span>
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
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
