import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BentoHeader } from "@/components/layout/BentoHeader";
import { FigmaHeroCard } from "@/components/figma/FigmaHeroCard";
import { FigmaProcessCard } from "@/components/figma/FigmaProcessCard";
import { FigmaToolsCard } from "@/components/figma/FigmaToolsCard";
import { QuickConnectCard } from "@/components/ui/QuickConnectCard";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
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

        {/* Row 2: Development Tools Card */}
        <FigmaToolsCard />

        {/* Row 3: Featured Work Bento Grid */}
        <div className="bento-card p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-neutral-500 line-through">
                  featured
                </span>
                <span className="font-mono text-xs font-semibold text-neutral-900 dark:text-white tracking-wide">
                  selected work
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-sans font-bold text-neutral-900 dark:text-white tracking-tight">
                production systems &amp; apps
              </h2>
            </div>
            <Link
              href="/development"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors group"
            >
              <span>view all projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex flex-col justify-between group hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] text-neutral-500">
                      0{idx + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 bg-black/[0.02] dark:bg-white/[0.03]">
                      {project.category}
                    </span>
                  </div>

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
                    <h3 className="text-base font-bold font-sans text-neutral-900 dark:text-white group-hover/link:underline underline-offset-4">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/link:text-neutral-900 dark:text-neutral-500 dark:group-hover/link:text-white" />
                  </Link>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500">{project.year}</span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors"
                  >
                    case study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4: Quick Connect Bento Card with Interactive Contact Modal */}
        <QuickConnectCard />

        {/* Shared Unified Footer */}
        <Footer />
      </div>
    </div>
  );
}
