import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { CommandPalette } from "@/components/ui/CommandPalette";
import "./globals.css";

const fontGrotesk = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hithesh.dev"),
  title: "Hithesh HG — Software Engineer & Full Stack Developer",
  description:
    "Portfolio of Hithesh HG — Full stack engineer specializing in Next.js, Java, Spring Boot, TypeScript, and high-performance system architectures.",
  keywords: [
    "Hithesh HG",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "PostgreSQL",
  ],
  authors: [{ name: "Hithesh HG", url: "https://github.com/hitheshhg" }],
  openGraph: {
    title: "Hithesh HG — Software Engineer & Full Stack Developer",
    description:
      "Crafting high-impact web apps, native mobile systems, and scalable backend microservices.",
    url: "https://hithesh.dev",
    siteName: "Hithesh HG Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontGrotesk.variable} ${fontMono.variable} dark`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-[#09090b] text-white antialiased selection:bg-white selection:text-black">
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}
