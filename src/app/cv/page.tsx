import { Download, Calendar } from "lucide-react";
import { BentoHeader } from "@/components/layout/BentoHeader";
import { Footer } from "@/components/layout/Footer";
import { experiences } from "@/data/experience";
import { educationList } from "@/data/education";
import { skillCategories } from "@/data/skills";

export default function CvPage() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 sm:gap-5">
        {/* Unified Top Navigation with Banner & Download Action */}
        <BentoHeader
          activeTab="cv"
          tagLineThrough="resume"
          tagHighlight="cv"
          title="curriculum vitae"
          subtitle="Comprehensive record of professional experience, academic foundations, and engineering competencies."
          headerAction={
            <a
              href="/resume.pdf"
              download="Hithesh_HG_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-medium text-xs font-mono hover:bg-neutral-200 transition-colors shadow-sm shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>download official pdf</span>
            </a>
          }
        />

        {/* Experience & Education Balanced 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-start">
          {/* Column 1: Experience (7 cols) */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 bg-black text-white border border-white/[0.08] space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
                <span className="text-[#4ade80]">{"//"}</span>
                <span>work &amp; leadership experience</span>
              </span>
              <span className="text-[11px] font-mono text-neutral-500">
                {experiences.length} positions
              </span>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.id}
                  className={`space-y-3 ${
                    idx !== experiences.length - 1 ? "pb-8 border-b border-white/5" : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h2 className="text-base font-bold font-sans text-white">
                      {exp.role}
                    </h2>
                    <span className="text-[11px] font-mono text-neutral-400 shrink-0 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#4ade80]" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-300">
                    <span className="font-semibold text-white">{exp.company}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-400">{exp.location}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-white/[0.04] text-neutral-300 border border-white/5">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* Key Contributions */}
                  <ul className="space-y-1.5 pt-1">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-xs text-neutral-300 flex items-start gap-2">
                        <span className="text-[#4ade80] font-mono">›</span>
                        <span className="font-sans leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-neutral-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education & Technical Matrix (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {/* Education Bento Card */}
            <div className="bento-card p-6 sm:p-8 bg-black text-white border border-white/[0.08] space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
                  <span className="text-[#4ade80]">{"//"}</span>
                  <span>academic foundation</span>
                </span>
                <span className="text-[11px] font-mono text-neutral-500">engineering</span>
              </div>

              <div className="space-y-6">
                {educationList.map((edu) => (
                  <div key={edu.id} className="space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h2 className="text-base font-bold font-sans text-white">
                        {edu.degree}
                      </h2>
                      <span className="text-[11px] font-mono text-neutral-400 shrink-0">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-[#4ade80]">
                      {edu.field}
                    </p>

                    <p className="text-xs text-neutral-400 flex items-center gap-1.5 font-mono">
                      <span>{edu.institution}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </p>

                    <p className="text-xs text-neutral-400 leading-relaxed font-sans pt-1">
                      {edu.description}
                    </p>

                    {/* Coursework Pills */}
                    <div className="pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1.5">
                        relevant coursework
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((c) => (
                          <span
                            key={c}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-neutral-300 border border-white/5"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Competencies Matrix Card */}
            <div className="bento-card p-6 sm:p-8 bg-black text-white border border-white/[0.08] space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
                  <span className="text-[#4ade80]">{"//"}</span>
                  <span>technical competencies</span>
                </span>
                <span className="text-[11px] font-mono text-[#4ade80]">production</span>
              </div>

              <div className="space-y-4">
                {skillCategories.map((cat) => (
                  <div key={cat.category} className="space-y-1.5">
                    <span className="text-xs font-mono font-semibold text-neutral-300 block">
                      {cat.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-neutral-300 border border-white/5 hover:border-white/20 transition-colors"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Unified Footer */}
        <Footer />
      </div>
    </div>
  );
}
