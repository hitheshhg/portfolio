"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { playClick } from "@/lib/sound";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        playClick(450, 0.02);
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
          subject: subject.trim() || undefined,
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
        setSubject("");
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

  const handleClose = () => {
    playClick(500, 0.02);
    setStatus("idle");
    setErrorMessage("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="bento-card bg-white dark:bg-[#0d0d0f] border border-black/15 dark:border-white/20 p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto text-neutral-900 dark:text-white shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10 mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-neutral-500 line-through">
                contact
              </span>
              <span className="font-mono text-[11px] font-semibold text-neutral-900 dark:text-white tracking-wide">
                get in touch
              </span>
            </div>
            <h2
              id="contact-modal-title"
              className="text-lg sm:text-xl font-bold font-sans text-neutral-900 dark:text-white"
            >
              start a conversation
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {status === "success" ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-[#4ade80] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white font-sans">
              Message sent successfully!
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out. I have received your message and will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black font-medium text-xs font-mono hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            {/* Honeypot anti-spam (visually hidden) */}
            <input
              type="text"
              name="website_honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {status === "error" && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="font-sans text-xs">{errorMessage}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="block text-neutral-600 dark:text-neutral-400">
                name <span className="text-red-500">*</span>
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
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 font-sans transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="block text-neutral-600 dark:text-neutral-400">
                email <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="jane@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 font-sans transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-subject" className="block text-neutral-600 dark:text-neutral-400">
                subject <span className="text-neutral-400 text-[10px]">(optional)</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                maxLength={120}
                placeholder="Project inquiry / Full-time role"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 font-sans transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="block text-neutral-600 dark:text-neutral-400">
                message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                minLength={10}
                maxLength={2000}
                placeholder="Tell me about your project, timeline, or open role..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 font-sans transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[10px] text-neutral-500">
                powered by resend • direct inbox
              </span>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black font-medium text-xs font-mono hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-50 transition-colors shadow-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>send message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
