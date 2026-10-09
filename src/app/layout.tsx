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
  title: "Hithesh HG — Data Analyst & Business Intelligence Specialist",
  description:
    "Portfolio of Hithesh HG — Data Analyst specializing in SQL, Python, Power BI, Tableau, cohort retention modeling, and executive BI dashboards.",
  keywords: [
    "Hithesh HG",
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "Tableau",
    "SQL",
    "PostgreSQL",
    "Python",
    "Pandas",
    "Data Science",
    "Cohort Analysis",
    "Predictive Modeling",
  ],
  authors: [{ name: "Hithesh HG", url: "https://github.com/hitheshhg" }],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Hithesh HG — Data Analyst & Business Intelligence Specialist",
    description:
      "Turning raw data into actionable insights with SQL, Python, Power BI, Tableau, and predictive analytics.",
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
      <body className="min-h-screen bg-[var(--canvas-bg)] text-[var(--text-main)] antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
