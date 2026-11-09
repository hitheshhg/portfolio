"use client";

import { useState } from "react";
import { Send, CheckCircle2, Copy, Check, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { playClick } from "@/lib/sound";

export function WixContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    playClick(800, 0.02);
    navigator.clipboard.writeText("hitheshhg@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playClick(750, 0.03);
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: "Portfolio Inquiry",
          message: message.trim(),
          website_honeypot: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          const firstField = Object.keys(data.errors)[0];
          setErrorMessage(data.errors[firstField]?.[0] || "Validation failed.");
        } else {
          setErrorMessage(data.message || "Something went wrong. Please try again.");
        }
        setStatus("error");
        playClick(300, 0.04);
      } else {
        setStatus("success");
        playClick(900, 0.04);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
      playClick(300, 0.04);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-[1360px] mx-auto px-4 sm:px-8 my-8 sm:my-14 scroll-mt-24">
      <div className="wix-card bg-white dark:bg-[#121214] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        
        {/* Subtle decorative mesh gradient in top-right corner */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#fed7aa]/20 via-[#fbcfe8]/20 to-[#bfdbfe]/20 dark:from-[#312e81]/15 dark:via-[#4c1d95]/15 dark:to-[#1e3a8a]/15 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10 items-start">
          
          {/* ==============================================================
              LEFT COLUMN: Header, Availability, Direct Email & Socials
              ============================================================== */}
          <div className="lg:col-span-5 space-y-7">
            {/* Outline Pill Badge */}
            <div className="wix-pill border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white uppercase text-xs tracking-wider">
              CONTACT
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-sans font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
                Let&apos;s build something memorable together.
              </h2>
              <p className="text-sm sm:text-[15px] text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                Have a project in mind, an opportunity to discuss, or just want to explore a potential collaboration? Send a message or reach out directly.
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-white/[0.02] flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Mail className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href="mailto:hitheshhg@gmail.com"
                    onClick={() => playClick(600, 0.02)}
                    className="font-sans font-semibold text-xs sm:text-sm text-neutral-900 dark:text-white truncate block hover:underline"
                  >
                    hitheshhg@gmail.com
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="wix-pill py-2 px-3.5 text-xs bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 shrink-0 shadow-2xs hover:bg-neutral-100 dark:hover:bg-neutral-700"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 mr-1" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & Social Connections */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>Bengaluru, Karnataka, India • IST (UTC+5:30)</span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://linkedin.com/in/hitheshhg"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick(600, 0.02)}
                  className="wix-pill py-2 px-4 text-xs bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-black dark:hover:border-white shadow-2xs gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href="https://github.com/hitheshhg"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick(600, 0.02)}
                  className="wix-pill py-2 px-4 text-xs bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-black dark:hover:border-white shadow-2xs gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>
          </div>

          {/* ==============================================================
              RIGHT COLUMN: Interactive Sleek Contact Form
              ============================================================== */}
          <div className="lg:col-span-7 bg-neutral-50/70 dark:bg-[#0c0d10] p-6 sm:p-9 lg:p-10 rounded-[24px] border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
            
            {status === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-[#4ade80] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-sans text-neutral-900 dark:text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed font-sans">
                  Thank you for reaching out. Your message has been delivered directly to my inbox, and I will get back to you shortly.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      playClick(500, 0.02);
                      setStatus("idle");
                    }}
                    className="wix-pill bg-black text-white dark:bg-white dark:text-black border-transparent text-xs font-semibold py-2.5 px-6 shadow-sm hover:opacity-90"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error Banner */}
                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-sans flex items-center gap-2">
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Anti-spam honeypot (visually hidden) */}
                <input
                  type="text"
                  name="website_honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-sans font-medium text-neutral-700 dark:text-neutral-300">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={80}
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-xs sm:text-sm font-sans focus:outline-none focus:border-black dark:focus:border-white transition-colors shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-sans font-medium text-neutral-700 dark:text-neutral-300">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-xs sm:text-sm font-sans focus:outline-none focus:border-black dark:focus:border-white transition-colors shadow-2xs"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-sans font-medium text-neutral-700 dark:text-neutral-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    minLength={10}
                    maxLength={2000}
                    placeholder="Tell me about your project, timeline, or what you'd like to achieve..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-xs sm:text-sm font-sans focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none shadow-2xs"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="wix-pill w-full sm:w-auto py-3 px-8 bg-black text-white dark:bg-white dark:text-black border-transparent text-xs font-semibold shadow-md hover:opacity-90 disabled:opacity-50 transition-all gap-2 justify-center"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

