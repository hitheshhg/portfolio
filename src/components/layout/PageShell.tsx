import React from "react";
import { BentoHeader, BentoHeaderProps } from "@/components/layout/BentoHeader";
import { Footer } from "@/components/layout/Footer";
import { QuickConnectCard } from "@/components/ui/QuickConnectCard";
import { cn } from "@/lib/utils";

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
    <div className="min-h-screen bg-transparent pt-4 sm:pt-10 pb-12 sm:pb-24 px-3 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className={cn("w-full max-w-6xl mx-auto flex flex-col gap-3.5 sm:gap-5 min-w-0", className)}>
        <BentoHeader {...headerProps} />
        {children}
        {showConnectCard && <QuickConnectCard />}
        <Footer />
      </div>
    </div>
  );
}

