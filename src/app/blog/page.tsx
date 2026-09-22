"use client";

import { useState } from "react";
import { BentoHeader } from "@/components/layout/BentoHeader";
import { Footer } from "@/components/layout/Footer";
import { Clock, X, CheckCircle2 } from "lucide-react";

interface Article {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tag: string;
  fullContent: {
    intro: string;
    points: { heading: string; body: string }[];
    codeSnippet?: string;
    conclusion: string;
  };
}

const articles: Article[] = [
  {
    slug: "bento-interfaces-nextjs",
    title: "Building Pixel-Faithful Bento Interfaces with Next.js",
    date: "Sep 2026",
    readTime: "4 min read",
    summary:
      "How to extract design tokens from Figma primitives and translate them into strict, responsive bento grids using Next.js 15, Tailwind CSS, and CSS Grid.",
    tag: "Frontend",
    fullContent: {
      intro:
        "The Bento Grid trend has taken over modern web design because it offers structured density without sacrificing visual breathing room. Here is our architectural playbook for translating Figma tokens directly into React components.",
      points: [
        {
          heading: "1. Defining the Token Hierarchy",
          body: "Rather than arbitrary Tailwind classes, isolate canvas, surface, border, and glow tokens into CSS custom properties. This ensures seamless light/dark mode transitions without re-rendering component trees.",
        },
        {
          heading: "2. Rigid Subgrid vs Nested Flexbox",
          body: "Bento cards shine when paired with CSS Subgrid or 12-column responsive flex structures (`grid-cols-1 md:grid-cols-3` or `lg:grid-cols-12`). Ensure each card stretches with `h-full flex flex-col justify-between` to avoid ragged grid baselines.",
        },
        {
          heading: "3. Micro-Interaction Polish",
          body: "Subtle borders (`rgba(255,255,255,0.08)`) with hovering scale transformations (`scale-[1.01]`) give bento cards physical presence on the canvas without causing layout recalculation.",
        },
      ],
      codeSnippet: `// tokens.ts - Canonical Token Declaration
export const tokens = {
  colors: {
    canvas: { dark: "#121214", light: "#f4f4f5" },
    card: { dark: "#000000", light: "#ffffff" },
    border: { dark: "rgba(255, 255, 255, 0.08)" }
  },
  radii: { bento: "20px" }
} as const;`,
      conclusion:
        "By enforcing strict token boundaries and equal-height flex children, your bento interfaces remain solid across all viewport sizes.",
    },
  },
  {
    slug: "postgresql-schema-indexes",
    title: "Optimizing PostgreSQL Schema & Indexes for Sub-Second Queries",
    date: "Aug 2026",
    readTime: "6 min read",
    summary:
      "Architectural techniques for relational database performance, B-tree vs GIN indexing strategies, and connection pooling in high-throughput workloads.",
    tag: "Database",
    fullContent: {
      intro:
        "In production full-stack systems, 90% of latency bottlenecks originate from unindexed foreign keys or N+1 query patterns. Here is how we tune PostgreSQL for high concurrent throughput.",
      points: [
        {
          heading: "1. Indexing What Matters: Compound & Partial Indexes",
          body: "Don't blindly index every column. Compound indexes must adhere to the left-most prefix rule. For soft-deleted records (`WHERE deleted_at IS NULL`), partial indexes reduce index tree size by up to 80%.",
        },
        {
          heading: "2. GIN Indexes for JSONB & Full-Text Search",
          body: "When storing unstructured metadata in JSONB columns, standard B-Trees cannot search inner keys efficiently. Generalized Inverted Indexes (GIN) provide sub-10ms lookup times even over millions of rows.",
        },
        {
          heading: "3. Connection Pooling with PgBouncer",
          body: "Serverless functions spawn hundreds of ephemeral connections that exhaust PostgreSQL max_connections. Running a transaction-mode connection pooler prevents cold-start starvation.",
        },
      ],
      codeSnippet: `-- Partial index for active users
CREATE INDEX idx_users_active_email 
ON users (email) 
WHERE status = 'ACTIVE' AND deleted_at IS NULL;

-- GIN index for metadata JSONB search
CREATE INDEX idx_resumes_skills_gin 
ON resumes USING GIN ((metadata->'extracted_skills'));`,
      conclusion:
        "Index deliberately, inspect EXPLAIN ANALYZE traces, and pool connections to keep p99 query latencies below 20 milliseconds.",
    },
  },
  {
    slug: "clean-architecture-spring-boot",
    title: "Clean Architecture in Enterprise Java & Spring Boot",
    date: "Jul 2026",
    readTime: "5 min read",
    summary:
      "Structuring microservices for testability, separation of concerns, and resilient RESTful API design using Hexagonal architecture principles.",
    tag: "Backend",
    fullContent: {
      intro:
        "Enterprise Java backends frequently devolve into anemic domain models with 2,000-line service classes. Adopting Hexagonal / Ports & Adapters architecture guarantees maintainability over multi-year lifecycles.",
      points: [
        {
          heading: "1. Domain Isolation (Entities & Value Objects)",
          body: "Domain logic must remain agnostic of Spring Framework annotations, JPA entities, and HTTP controllers. Pure Java POJOs execute business rules with 100% unit-test coverage without mocking databases.",
        },
        {
          heading: "2. Ports and Adapters (Inbound & Outbound)",
          body: "Inbound ports expose use cases to REST controllers or gRPC handlers. Outbound ports declare persistence interfaces that JPA repositories implement behind decoupled adapters.",
        },
        {
          heading: "3. Resilient Error Handling & Result Types",
          body: "Instead of throwing generic RuntimeExceptions across layer boundaries, return explicit Result / Either monads or custom typed domain exceptions with global ControllerAdvices.",
        },
      ],
      codeSnippet: `// Inbound Port definition
public interface ProcessApplicationUseCase {
    ApplicationResult execute(ApplicationCommand command);
}

// Domain Entity with invariants
public record Candidate(CandidateId id, Email email, ReadinessScore score) {
    public Candidate {
        Objects.requireNonNull(email, "Candidate email cannot be null");
    }
}`,
      conclusion:
        "Strict boundary enforcement separates transport mechanics from business logic, making systems resilient to framework shifts and upgrades.",
    },
  },
];

export default function BlogPage() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <div className="min-h-screen bg-transparent text-white pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 sm:gap-5">
        {/* Unified Top Navigation with Banner */}
        <BentoHeader
          activeTab="blog"
          tagLineThrough="thoughts"
          tagHighlight="blog"
          title="articles & engineering notes"
          subtitle="Deep dives into software architecture, relational database query optimization, design systems, and frontend craft."
          headerAction={
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300">
              {articles.length} published notes
            </span>
          }
        />

        {/* Articles Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {articles.map((art, idx) => (
            <article
              key={idx}
              onClick={() => setActiveArticle(art)}
              className="bento-card p-6 bg-black text-white border border-white/[0.08] flex flex-col justify-between h-full group cursor-pointer hover:border-white/20 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#4ade80]" />
                    {art.readTime}
                  </span>
                  <span>{art.date}</span>
                </div>

                <h2 className="text-base sm:text-lg font-bold font-sans text-white mb-2.5 group-hover:underline underline-offset-4 leading-snug">
                  {art.title}
                </h2>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-neutral-300 border border-white/5">
                  {art.tag}
                </span>
                <span className="text-xs font-mono text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all flex items-center gap-1">
                  <span>read note</span>
                  <span>→</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Unified Footer */}
        <Footer />
      </div>

      {/* Interactive Article Reading Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bento-card bg-black border border-white/20 p-6 sm:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto text-white shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.05] border border-white/10 text-[#4ade80]">
                  {activeArticle.tag}
                </span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Close reading view"
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white mb-4 tracking-tight leading-snug">
              {activeArticle.title}
            </h2>

            {/* Intro */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-sans">
              {activeArticle.fullContent.intro}
            </p>

            {/* Key Sections */}
            <div className="space-y-5 mb-6">
              {activeArticle.fullContent.points.map((point, pIdx) => (
                <div key={pIdx} className="space-y-1.5">
                  <h3 className="text-sm font-sans font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4ade80] shrink-0" />
                    <span>{point.heading}</span>
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed pl-5 font-sans">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Code Snippet if applicable */}
            {activeArticle.fullContent.codeSnippet && (
              <div className="mb-6 rounded-xl bg-neutral-950 border border-white/10 p-4 font-mono text-[11px] text-neutral-300 overflow-x-auto">
                <pre>{activeArticle.fullContent.codeSnippet}</pre>
              </div>
            )}

            {/* Conclusion */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300 font-sans leading-relaxed">
              <span className="font-mono text-[10px] text-[#4ade80] uppercase tracking-wider block mb-1">
                Takeaway
              </span>
              {activeArticle.fullContent.conclusion}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
