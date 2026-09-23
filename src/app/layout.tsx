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

export const metadata: Metadata = {
  metadataBase: new URL("https://hithesh.dev"),
  title: "Hithesh HG — Data Analyst & Business Intelligence Specialist",
  description:
    "Portfolio of Hithesh HG — Data Analyst specializing in SQL, Python, Power BI, Tableau, predictive modeling, and statistical business intelligence.",
  keywords: [
    "Hithesh HG",
    "Data Analyst",
    "Business Intelligence",
    "SQL",
    "PostgreSQL",
    "Python",
    "Pandas",
    "Power BI",
    "Tableau",
    "Predictive Modeling",
    "ETL",
  ],
  authors: [{ name: "Hithesh HG", url: "https://github.com/hitheshhg" }],
  openGraph: {
    title: "Hithesh HG — Data Analyst & Business Intelligence Specialist",
    description:
      "Transforming complex datasets into actionable business intelligence, predictive models, and decision-ready dashboards.",
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
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--canvas-bg)] text-[var(--text-primary)] antialiased selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)] transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
