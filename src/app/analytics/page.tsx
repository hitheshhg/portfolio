"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Search, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { playClick } from "@/lib/sound";

export default function AnalyticsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Predictive Analytics", "Business Intelligence", "Healthcare Analytics"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.summary.toLowerCase().includes(query) ||
      project.tagline.toLowerCase().includes(query) ||
      project.stack.some((tech) => tech.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <PageShell
      activeTab="analytics"
      tagLineThrough="data"
      tagHighlight="analytics"
      title="analytics case studies & insights"
      subtitle="Production data pipelines, predictive attrition models, cohort retention analyses, and interactive executive dashboards."
      headerAction={
        <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300">
          {projects.length} featured studies
        </span>
      }
      showConnectCard={true}
    >
      {/* Search and Category Filter Card */}
      <div className="bento-card p-4 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tool, metric, or keyword (e.g. SQL, Power BI, Churn)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs font-mono bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 focus:outline-hidden focus:border-black/30 dark:focus:border-white/30 text-neutral-900 dark:text-white placeholder:text-neutral-400 transition-colors"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  playClick(700, 0.02);
                  setSelectedCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  isActive
                    ? "bg-white dark:bg-black text-neutral-900 dark:text-white font-semibold shadow-xs border border-black/10 dark:border-white/10"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Studies Grid */}
      {filteredProjects.length === 0 ? (
        <div className="bento-card p-12 text-center space-y-3">
          <p className="font-mono text-sm text-neutral-500">
            No case studies found matching &quot;{searchQuery}&quot;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="px-4 py-2 rounded-xl text-xs font-mono bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bento-card p-4 sm:p-6 flex flex-col justify-between h-full group hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
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
                  onClick={() => playClick(700, 0.02)}
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
                  onClick={() => playClick(700, 0.02)}
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

                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Key Metric Pill */}
                {project.outcome.metrics[0] && (
                  <div className="p-2.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 mb-4 text-[11px] font-mono text-emerald-600 dark:text-[#4ade80] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="line-clamp-1">{project.outcome.metrics[0]}</span>
                  </div>
                )}
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
                    onClick={() => playClick(700, 0.02)}
                    className="text-neutral-900 dark:text-white hover:underline underline-offset-4 flex items-center gap-1 font-semibold"
                  >
                    <span>read case study</span>
                    <span>→</span>
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        onClick={() => playClick(600, 0.02)}
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
                        onClick={() => playClick(600, 0.02)}
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
      )}
    </PageShell>
  );
}

