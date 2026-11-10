"use client";

import { useState } from "react";
import { WixHeader } from "@/components/wix/WixHeader";
import { WixHeroBento } from "@/components/wix/WixHeroBento";
import { WixProjectShowcase } from "@/components/wix/WixProjectShowcase";
import { WixAboutSection } from "@/components/wix/WixAboutSection";
import { WixContactSection } from "@/components/wix/WixContactSection";
import { WixFooter } from "@/components/wix/WixFooter";
import { ContactModal } from "@/components/ui/ContactModal";

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      setContactOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--canvas-bg)] text-[var(--text-main)] flex flex-col items-center">
      {/* 1. Sleek Top Pill Navigation Bar */}
      <WixHeader onOpenContact={scrollToContact} />

      {/* 2. Hero Bento Grid (6-Card Asymmetric Layout - Screenshot 5) */}
      <main className="w-full flex flex-col items-center">
        <WixHeroBento />

        {/* 3. Projects Showcase (SIKURA Orange, Converza Purple, Malkow & Breid Lavender - Screenshots 2, 3, 4) */}
        <WixProjectShowcase />

        {/* 4. High-Contrast Dark Section: "ABOUT" Narrative & Foundation (Screenshot 1) */}
        <WixAboutSection onOpenContact={scrollToContact} />

        {/* 5. Beautiful High-Converting Contact Bento Section */}
        <WixContactSection />
      </main>

      {/* 6. Minimalist Sleek Footer */}
      <WixFooter />

      {/* Interactive Contact Modal (Fallback / Direct) */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
