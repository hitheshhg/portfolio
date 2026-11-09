import React from "react";
import { BentoHeader, BentoHeaderProps } from "@/components/layout/BentoHeader";
import { Footer } from "@/components/layout/Footer";
import { QuickConnectCard } from "@/components/ui/QuickConnectCard";

export interface PageShellProps extends BentoHeaderProps {
  children: React.ReactNode;
  showConnectCard?: boolean;
  className?: string;
}

export function PageShell({
  children,
  showConnectCard = false,
  className = "",
  ...headerProps
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-transparent pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className={`w-full max-w-6xl mx-auto flex flex-col gap-4 sm:gap-5 ${className}`}>
        <BentoHeader {...headerProps} />
        {children}
        {showConnectCard && <QuickConnectCard />}
        <Footer />
      </div>
    </div>
  );
}

