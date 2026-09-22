import { IdeationIcon, ResearchIcon, WireframesIcon } from "@/components/ui/FigmaIcons";

export function FigmaProcessCard() {
  const steps = [
    {
      title: "ideation",
      subtitle: "problem framing & requirements",
      icon: <IdeationIcon className="w-10 h-10 text-white stroke-[1.2] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "research",
      subtitle: "architecture & benchmarking",
      icon: <ResearchIcon className="w-10 h-10 text-white stroke-[1.2] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "wireframes",
      subtitle: "system design & hi-fi build",
      icon: <WireframesIcon className="w-10 h-10 text-white stroke-[1.2] group-hover:scale-110 transition-transform duration-300" />,
    },
  ];

  return (
    <div className="bento-card p-6 sm:p-10 flex flex-col justify-between h-full min-h-[380px] bg-black text-white border border-white/[0.08]">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-neutral-500 line-through">
            design
          </span>
          <span className="font-mono text-xs font-semibold text-white tracking-wide">
            process
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-md">
          A disciplined engineering workflow: from exploratory problem framing and rigorous benchmarking to clean architecture and responsive craft.
        </p>
      </div>

      {/* 3 Process Steps */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 my-auto pt-6 pb-2">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex flex-col items-center text-center group p-2 rounded-xl hover:bg-white/[0.02] transition-colors"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-2.5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-white/20 group-hover:bg-white/[0.06] transition-all">
              {step.icon}
            </div>
            <span className="text-xs font-mono font-medium text-neutral-200 group-hover:text-white transition-colors">
              {step.title}
            </span>
            <span className="text-[10px] font-mono text-neutral-500 mt-0.5 line-clamp-1">
              {step.subtitle}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom tag */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <span>methodology</span>
        <span className="text-[#4ade80]">iterative &amp; verified</span>
      </div>
    </div>
  );
}
