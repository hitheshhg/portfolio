"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { ContactModal } from "@/components/ui/ContactModal";
import { playClick } from "@/lib/sound";

export function QuickConnectCard() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bento-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-neutral-500 line-through">
              contact
            </span>
            <span className="font-mono text-xs font-semibold text-neutral-900 dark:text-white tracking-wide">
              collaborate
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-sans font-bold text-neutral-900 dark:text-white tracking-tight">
            have a project or role in mind?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Open to engineering opportunities, distributed systems challenges, and product collaborations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => {
              playClick(750, 0.02);
              setModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black font-medium text-xs font-mono dark:hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <Send className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
            <span>send message</span>
          </button>
          <a
            href="mailto:hitheshhg@gmail.com"
            onClick={() => playClick(650, 0.02)}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-black/10 text-neutral-800 hover:border-black/30 hover:bg-black/[0.04] dark:border-white/10 dark:text-neutral-200 font-medium text-xs font-mono dark:hover:border-white/30 dark:hover:bg-white/[0.04] transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">hitheshhg@gmail.com</span>
            <span className="sm:hidden">email</span>
          </a>
          <Link
            href="/cv"
            onClick={() => playClick(650, 0.02)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-black/10 text-neutral-800 hover:border-black/30 hover:bg-black/[0.04] dark:border-white/10 dark:text-neutral-200 font-medium text-xs font-mono dark:hover:border-white/30 dark:hover:bg-white/[0.04] transition-all"
          >
            <span>cv</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
