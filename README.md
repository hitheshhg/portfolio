# Hithesh HG — Data Analyst & Business Intelligence Portfolio

> A high-performance, minimalist, and beautifully engineered portfolio showcasing real-world business intelligence dashboards, exploratory data analysis (EDA), predictive models, and SQL data architectures.

[![Live Site](https://img.shields.io/badge/Live_Site-hithesh.dev-10b981?style=flat-square)](https://hithesh.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📊 Portfolio Overview

This portfolio is custom-architected for **Hithesh HG**, a **Data Analyst & Business Intelligence Specialist** based in Bengaluru, India. It highlights end-to-end data workflows from raw pipeline ingestion and data validation to statistical modeling and executive BI storytelling.

### Key Sections:
- **Overview (`/`)**: Bento grid showcasing the analytics lifecycle, core technical stack, featured case studies, and live contact points.
- **Projects & Case Studies (`/development`)**: Detailed breakdowns of real-world analytical problems, architectures, code implementations, and quantified business outcomes:
  - *Customer Churn & Retention Intelligence* (Python, PostgreSQL, Power BI, XGBoost)
  - *E-Commerce Cohort & Revenue Analytics* (Advanced SQL Window Functions, Tableau, RFM Segmentation)
  - *Clinical Readmission & Risk Stratification* (Multivariate Logistic Regression, Looker Studio, BigQuery)
- **Insights & Notes (`/blog`)**: Technical deep-dives covering SQL window functions, dimensional star schema modeling in Power BI, and statistical power in A/B testing with full interactive modal reading views.
- **Curriculum Vitae (`/cv`)**: Comprehensive professional trajectory, academic coursework, technical competencies matrix, and one-click PDF resume download (`/resume.pdf`).
- **Dashboard Design Systems (`/design`)**: Accessible color palettes (WCAG AAA compliant), executive KPI scorecards, and tabular typography standards.

---

## 🛠️ Core Analytical Stack

- **Relational Databases & Querying**: PostgreSQL, Google BigQuery, Snowflake, MySQL, Advanced SQL (CTEs, Window Functions, Performance Tuning).
- **Programming & Data Science**: Python (Pandas, NumPy, Scikit-learn, Statsmodels, SciPy), R, Jupyter Notebooks.
- **Business Intelligence & Reporting**: Power BI & DAX, Tableau Desktop/Server, Google Looker Studio, Advanced Excel (Power Query, Pivot Tables).
- **Architecture & Pipelines**: ETL Pipeline Design, Data Hygiene & Schema Normalization, Star Schema Dimensional Modeling.

---

## ⚡ Technical Architecture

- **Framework**: Next.js 16 (App Router & Turbopack)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS v4 + GPU hardware-accelerated CSS transitions
- **Typography**: Plus Jakarta Sans (Headings/Body) + JetBrains Mono (Metrics/Code)
- **SEO & Social**: Automated dynamic OpenGraph (`/opengraph-image`), robots.txt (`/robots.ts`), and XML sitemaps (`/sitemap.ts`)
- **API & Contact**: Edge-ready contact endpoint with Zod validation, honeypot anti-spam, and Resend email dispatch

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.17+ or 20+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/hitheshhg/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Deployment

### Local Production Build
To test the production build locally:

```bash
npm run build
npm run start
```

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Next.js is automatically detected; click **Deploy**.
4. *(Optional)* Add environment variables for contact form integration:
   - `RESEND_API_KEY`: Your Resend API key
   - `CONTACT_EMAIL`: Recipient email (default: `hitheshhg@gmail.com`)

### Deploying to Docker / Node Server
```bash
npm run build
NODE_ENV=production node_modules/.bin/next start -p 3000
```

---

## 📄 License

MIT © [Hithesh HG](https://github.com/hitheshhg)
