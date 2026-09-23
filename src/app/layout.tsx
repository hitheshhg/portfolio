import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
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
      className={`${fontGrotesk.variable} ${fontMono.variable} dark`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-[#09090b] text-white antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
