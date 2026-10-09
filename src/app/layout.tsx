import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://hitheshhg.duckdns.org");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
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
      suppressHydrationWarning
      className={`${fontGrotesk.variable} ${fontMono.variable} dark`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('portfolio-theme');
                  var mql = window.matchMedia('(prefers-color-scheme: dark)');
                  var theme = stored === 'light' || stored === 'dark' ? stored : (mql.matches ? 'dark' : 'light');
                  var root = document.documentElement;
                  if (theme === 'dark') {
                    root.classList.add('dark');
                    root.setAttribute('data-theme', 'dark');
                    root.style.colorScheme = 'dark';
                  } else {
                    root.classList.remove('dark');
                    root.setAttribute('data-theme', 'light');
                    root.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--canvas-bg)] text-[var(--text-main)] antialiased transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
