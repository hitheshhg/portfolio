import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { BentoHeader } from "@/components/layout/BentoHeader";
import { FigmaHeroCard } from "@/components/figma/FigmaHeroCard";
import { FigmaProcessCard } from "@/components/figma/FigmaProcessCard";
import { FigmaToolsCard } from "@/components/figma/FigmaToolsCard";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
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
        <div className="bento-card p-6 sm:p-8 bg-black text-white border border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-[#10b981] tracking-wide uppercase">
                  selected work
                </span>
                <span className="text-neutral-600 text-xs font-mono">•</span>
                <span className="font-mono text-xs text-neutral-400">
                  real-world business impact
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                predictive models &amp; executive dashboards
              </h2>
            </div>
            <Link
              href="/development"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors group"
            >
              <span>view all case studies</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] text-neutral-500">
                      0{idx + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-white/10 text-neutral-300">
                      {project.category}
                    </span>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-950 border border-white/10 mb-4 block group-hover:border-white/20 transition-all"
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
                    <h3 className="text-base font-bold font-sans text-white group-hover/link:underline underline-offset-4">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover/link:text-white" />
                  </Link>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500">{project.year}</span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    case study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4: Quick Connect Bento Card */}
        <div className="bento-card p-6 sm:p-8 bg-black text-white border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#10b981] tracking-wide uppercase">
                connect
              </span>
              <span className="text-neutral-600 text-xs font-mono">•</span>
              <span className="font-mono text-xs text-neutral-400">
                collaborate
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
              have a data challenge or analytics role in mind?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Open to Data Analyst, Business Intelligence, and Analytics Engineering opportunities. Let&apos;s turn your data into strategic clarity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="mailto:hitheshhg@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs font-mono hover:bg-neutral-200 transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>hitheshhg@gmail.com</span>
            </a>
            <Link
              href="/cv"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 text-white font-medium text-xs font-mono hover:border-white/30 hover:bg-white/[0.04] transition-all"
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
