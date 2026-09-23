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
    slug: "sql-window-functions-cohort-analysis",
    title: "Advanced SQL Window Functions for Cohort Retention Analysis",
    date: "Sep 2026",
    readTime: "5 min read",
    summary:
      "How to formulate month-over-month cohort retention matrices directly in PostgreSQL using Common Table Expressions (CTEs), DENSE_RANK, and LAG functions.",
    tag: "SQL & Relational",
    fullContent: {
      intro:
        "Retention cohort analysis is the gold standard for measuring customer stickiness. Instead of writing inefficient client-side grouping scripts, executing cohort logic directly in SQL unlocks lightning-fast aggregation over millions of transactional rows.",
      points: [
        {
          heading: "1. Defining the Initial Acquisition Cohort",
          body: "Utilize a Common Table Expression (CTE) with the MIN() window function partitioned by customer ID to stamp every user with their acquisition month (`cohort_month`).",
        },
        {
          heading: "2. Calculating Month Interval Offsets",
          body: "Compute the integer difference between the order date month and the cohort month using EXTRACT(YEAR FROM ...) * 12 + EXTRACT(MONTH FROM ...). This establishes normalized Month 0, Month 1, Month 2 columns.",
        },
        {
          heading: "3. Pivoting with Conditional Aggregations",
          body: "Aggregate active user counts by cohort and period offset, then compute percentage retention relative to Month 0 base volume to power downstream Tableau and Power BI heatmaps.",
        },
      ],
      codeSnippet: `WITH user_cohorts AS (
  SELECT 
    user_id,
    DATE_TRUNC('month', MIN(order_date)) AS cohort_month
  FROM orders
  GROUP BY user_id
),
monthly_activity AS (
  SELECT 
    o.user_id,
    uc.cohort_month,
    (EXTRACT(YEAR FROM o.order_date) - EXTRACT(YEAR FROM uc.cohort_month)) * 12 +
    (EXTRACT(MONTH FROM o.order_date) - EXTRACT(MONTH FROM uc.cohort_month)) AS period_offset
  FROM orders o
  JOIN user_cohorts uc ON o.user_id = uc.user_id
)
SELECT 
  cohort_month,
  period_offset,
  COUNT(DISTINCT user_id) AS active_users,
  ROUND(COUNT(DISTINCT user_id)::NUMERIC / FIRST_VALUE(COUNT(DISTINCT user_id)) 
    OVER (PARTITION BY cohort_month ORDER BY period_offset) * 100, 2) AS retention_rate
FROM monthly_activity
GROUP BY cohort_month, period_offset
ORDER BY cohort_month, period_offset;`,
      conclusion:
        "Leveraging native database window operations keeps data transformation pipelines reproducible, deterministic, and optimized for sub-second business intelligence feeds.",
    },
  },
  {
    slug: "executive-bi-dashboards-powerbi-tableau",
    title: "Designing Decision-Ready Executive Dashboards in Power BI & Tableau",
    date: "Aug 2026",
    readTime: "6 min read",
    summary:
      "Core principles for reducing cognitive load, architecting robust star schemas, and formulating reusable DAX time-intelligence calculations.",
    tag: "Business Intelligence",
    fullContent: {
      intro:
        "Many business intelligence dashboards fail because they dump 30 disparate charts on a page without a narrative hierarchy. An effective dashboard immediately answers three questions: What happened? Why did it happen? What action should be taken next?",
      points: [
        {
          heading: "1. Enforce Star Schema Modeling (Kimball Methodology)",
          body: "Never build BI reports directly against flat, de-normalized 100-column tables. Structuring fact tables (transactions, events) and shared dimension tables (Date, Customer, Product) with 1-to-many relationships optimizes in-memory VertiPaq engine performance.",
        },
        {
          heading: "2. The 5-Second Executive Rule",
          body: "Place top-level KPI scorecards (Revenue, Churn Rate, LTV, CAC) with clear target variance benchmarks in the top-left quadrant where eye-tracking naturally initiates.",
        },
        {
          heading: "3. Reusable DAX Time-Intelligence Measures",
          body: "Decouple calendar logic into a dedicated Date dimension table and use CALCULATE with DATEADD or DATESYTD to ensure dynamic period-over-period comparisons remain accurate across leap years and fiscal boundaries.",
        },
      ],
      codeSnippet: `// DAX Measure: Year-over-Year Revenue Growth %
YoY Revenue % = 
VAR CurrentRevenue = [Total Revenue]
VAR PriorYearRevenue = 
    CALCULATE(
        [Total Revenue], 
        DATEADD('DimDate'[Date], -1, YEAR)
    )
RETURN 
    DIVIDE(CurrentRevenue - PriorYearRevenue, PriorYearRevenue, 0)`,
      conclusion:
        "Rigorous dimensional modeling combined with restrained visual design transforms static charts into strategic decision-support systems.",
    },
  },
  {
    slug: "ab-testing-statistical-significance",
    title: "Statistical Significance & Common Pitfalls in Product A/B Testing",
    date: "Jul 2026",
    readTime: "5 min read",
    summary:
      "Understanding p-values, Type I/II errors, sample size power calculations, and why 'peeking' at metrics ruins experimental validity.",
    tag: "Statistics & Experimentation",
    fullContent: {
      intro:
        "A/B testing is frequently misapplied in digital product analytics: experiments are stopped the moment p < 0.05 is observed, or variance is mistaken for genuine causal lift. Here is how to maintain mathematical rigor in hypothesis testing.",
      points: [
        {
          heading: "1. Pre-Experiment Power Analysis & Sample Sizing",
          body: "Never launch an experiment without calculating required sample size in advance based on baseline conversion, Minimum Detectable Effect (MDE), statistical power (1 - beta = 0.80), and alpha (0.05).",
        },
        {
          heading: "2. The Continuous Peeking Fallacy",
          body: "Repeatedly evaluating p-values daily inflates the False Positive rate from 5% to over 30% due to random walk fluctuations. Commit to running tests for full seasonal cycles (at least 2 full business weeks).",
        },
        {
          heading: "3. Two-Tailed vs One-Tailed T-Tests",
          body: "Always default to two-tailed tests unless there is definitive theoretical proof that a treatment could not possibly cause harm. Watch out for negative side effects on secondary guardrail metrics like refund rates or support ticket volume.",
        },
      ],
      codeSnippet: `import scipy.stats as stats
import numpy as np

# Two-sample Z-test for proportions
def ab_test_significance(conversions_a, sample_a, conversions_b, sample_b, alpha=0.05):
    p_a = conversions_a / sample_a
    p_b = conversions_b / sample_b
    pooled_p = (conversions_a + conversions_b) / (sample_a + sample_b)
    se = np.sqrt(pooled_p * (1 - pooled_p) * (1/sample_a + 1/sample_b))
    
    z_score = (p_b - p_a) / se
    p_value = 2 * (1 - stats.norm.cdf(abs(z_score)))
    
    is_significant = p_value < alpha
    return {"z_score": round(z_score, 4), "p_value": round(p_value, 5), "significant": is_significant}`,
      conclusion:
        "Controlled experiments require disciplined statistical patience; validating sample power upfront prevents costly false positives from reaching production.",
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
          tagHighlight="analytics insights"
          title="articles &amp; analytics notes"
          subtitle="Explorations in SQL optimization, business intelligence architecture, statistical experimentation, and data storytelling."
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
                    <Clock className="w-3 h-3 text-[#10b981]" />
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
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.05] border border-white/10 text-[#10b981]">
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
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
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
              <span className="font-mono text-[10px] text-[#10b981] uppercase tracking-wider block mb-1">
                Analytical Takeaway
              </span>
              {activeArticle.fullContent.conclusion}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
