export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  type: "Full-Time" | "Internship" | "Traineeship";
  location: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  highlight?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "data-analyst-trainee",
    role: "Data & BI Analytics Trainee",
    company: "Dlithe",
    companyUrl: "https://dlithe.com",
    period: "06/2026 – 08/2026",
    type: "Traineeship",
    location: "Bengaluru / Remote, India",
    description:
      "Intensive analytics traineeship focused on business intelligence architectures, SQL database performance, ETL pipelines, and predictive modeling.",
    responsibilities: [
      "Extracted, cleansed, and analyzed 100k+ row enterprise transactional datasets using SQL window functions, CTEs, and PostgreSQL.",
      "Engineered interactive multi-page Power BI and Tableau dashboards with dynamic DAX measures, KPI scorecards, and row-level security.",
      "Conducted exploratory data analysis (EDA) and feature engineering in Python (Pandas, NumPy) to evaluate customer retention drivers.",
      "Formulated hypothesis tests (Chi-Square, T-tests) and regression models to deliver statistical evidence for executive stakeholders.",
      "Automated weekly reporting pipelines in Python, eliminating 8+ hours of manual spreadsheet compilation per cycle.",
    ],
    techStack: [
      "SQL (PostgreSQL)",
      "Power BI & DAX",
      "Python (Pandas, NumPy)",
      "Tableau",
      "Statistical Modeling",
      "Git",
      "Excel",
    ],
    highlight: "Business Intelligence & SQL Pipeline Optimization",
  },
  {
    id: "analytics-intern",
    role: "Junior Data Analyst Intern",
    company: "2StarIT Solutions",
    period: "2023",
    type: "Internship",
    location: "Karnataka, India",
    description:
      "Data analytics internship focused on digital product analytics, conversion funnel tracking, and automated client performance reporting.",
    responsibilities: [
      "Analyzed web and mobile user behavior telemetry to map multi-step conversion funnels and identify high-dropoff friction points.",
      "Designed and automated weekly KPI dashboards in Google Looker Studio and Excel for 10+ client stakeholders.",
      "Wrote structured SQL queries to reconcile transactional payment data with CRM records, uncovering reporting discrepancies.",
      "Collaborated with product teams to design A/B test parameters and verify statistical significance on new feature rollouts.",
      "Documented data dictionary schemas and established data validation checks for incoming client datasets.",
    ],
    techStack: [
      "SQL",
      "Looker Studio",
      "Python",
      "Advanced Excel",
      "A/B Testing",
      "Data Cleaning",
      "Git",
    ],
    highlight: "Product Analytics & Automated Reporting Dashboards",
  },
];
