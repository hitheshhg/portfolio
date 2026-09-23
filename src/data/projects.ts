export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: "Business Intelligence" | "Predictive Analytics" | "Healthcare Analytics";
  year: string;
  badge: string;
  featured: boolean;
  repoUrl?: string;
  liveUrl?: string;
  role: string;
  duration: string;
  stack: string[];
  problem: string;
  approach: string;
  architectureDetails: string[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  outcome: {
    metrics: string[];
    summary: string;
  };
}

export const projects: ProjectCaseStudy[] = [
  {
    id: "churn-analytics",
    slug: "churn-analytics",
    title: "Customer Churn & Retention Intelligence",
    tagline: "Predictive subscriber attrition modeling and interactive Power BI executive dashboard",
    summary:
      "End-to-end data analytics workflow on 70,000+ subscription records. Uncovered primary drivers of customer attrition using SQL and Python, built an ensemble classification model, and deployed an executive Power BI dashboard enabling targeted retention campaigns that lowered churn by 18%.",
    category: "Predictive Analytics",
    year: "2024",
    badge: "Python • SQL • Power BI • Machine Learning",
    featured: true,
    repoUrl: "https://github.com/hitheshhg/customer-churn-analytics",
    role: "Lead Data Analyst",
    duration: "3 Months",
    stack: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "PostgreSQL",
      "Power BI & DAX",
      "Seaborn & Matplotlib",
      "Jupyter Notebooks",
      "Feature Engineering",
    ],
    problem:
      "A subscription SaaS service was experiencing an annualized churn rate exceeding 24%, with customer success teams unable to pinpoint why customers cancelled until exit surveys were submitted. The leadership team lacked visibility into leading indicators of churn and needed an automated early-warning framework.",
    approach:
      "Engineered an automated data extraction and cleaning pipeline from PostgreSQL transactional and behavioral logs. Conducted in-depth exploratory data analysis (EDA) across contract types, payment channels, and monthly usage metrics. Trained and validated classification algorithms (Random Forest & XGBoost) to generate churn probability scores, and built a dynamic Power BI report with customer risk tiers for intervention.",
    architectureDetails: [
      "Cleaned, normalized, and transformed 70k+ row raw customer dataset handling missing values, categorical encoding, and outlier capping.",
      "Engineered high-signal behavioral features: tenure-to-spend ratio, customer support ticket frequency, and 90-day engagement drop-offs.",
      "Achieved an ROC-AUC of 0.88 with XGBoost, prioritizing recall to capture 86% of at-risk customers before contract expiration.",
      "Constructed a multi-page interactive Power BI dashboard with complex DAX measures, what-if retention parameter scenarios, and monthly trend forecasting.",
    ],
    keyFeatures: [
      {
        title: "Early-Warning Risk Scoring",
        description:
          "Segments the active customer base into High, Medium, and Low risk tiers based on real-time activity and contract age.",
      },
      {
        title: "Driver Attribution Analysis",
        description:
          "Feature importance analysis revealed month-to-month contracts and electronic check billing had 3.2x higher churn rates than annual plans.",
      },
      {
        title: "Interactive What-If Scenario Modeling",
        description:
          "Power BI parameter sliders allowing finance and marketing leaders to model revenue preservation based on incentive discounts.",
      },
      {
        title: "Automated Data Hygiene & ETL",
        description:
          "Standardized Python scripts that validate incoming data schemas and output pre-calculated metrics for downstream reporting.",
      },
    ],
    outcome: {
      metrics: [
        "18% reduction in customer churn within 6 months of campaign launch",
        "$280K+ in annualized recurring revenue saved through proactive renewals",
        "86% recall rate on identifying at-risk accounts 30 days prior to contract renewal",
      ],
      summary:
        "Transformed reactive customer cancellation into a proactive retention engine, equipping decision-makers with quantified customer health scores and actionable intervention playbooks.",
    },
  },
  {
    id: "cohort-revenue",
    slug: "cohort-revenue",
    title: "E-Commerce Cohort & Revenue Analytics",
    tagline: "Customer Lifetime Value (LTV), RFM segmentation & basket affinity analysis across 500k+ transactions",
    summary:
      "Comprehensive retail transactional analytics using advanced PostgreSQL window functions and Tableau. Delivered granular cohort retention heatmaps, Recency-Frequency-Monetary (RFM) customer segmentation, and product affinity models to optimize promotional spend and inventory allocation.",
    category: "Business Intelligence",
    year: "2024",
    badge: "Advanced SQL • Tableau • RFM Modeling • Python",
    featured: true,
    repoUrl: "https://github.com/hitheshhg/ecommerce-cohort-analysis",
    role: "Data & BI Analyst",
    duration: "4 Months",
    stack: [
      "PostgreSQL (Window Functions, CTEs)",
      "Tableau Desktop & Server",
      "Python (Pandas, Plotly)",
      "RFM Customer Segmentation",
      "Market Basket Analysis",
      "Advanced Excel",
    ],
    problem:
      "An omnichannel retailer had rapid customer acquisition numbers but struggled with declining repeat purchase rates. Executive leadership had conflicting reports regarding customer acquisition cost (CAC) payback periods and could not determine which product bundles produced long-term brand loyalty.",
    approach:
      "Wrote complex PostgreSQL queries utilizing Common Table Expressions (CTEs) and window functions (`DENSE_RANK`, `LAG`, `NTILE`) to calculate monthly retention cohorts across 500,000+ orders. Applied statistical clustering and RFM segmentation in Python to categorize users into 11 distinct personas. Built an interactive Tableau dashboard suite displaying lifetime value curves and cross-sell affinities.",
    architectureDetails: [
      "Constructed relational data marts in PostgreSQL with optimized indexes on customer IDs, order dates, and SKU categories for sub-second query performance.",
      "Formulated monthly cohort retention matrices calculating retention decay from Month 0 to Month 12.",
      "Executed RFM (Recency, Frequency, Monetary) quintile scoring to isolate 'Champions', 'Potential Loyalists', 'At Risk', and 'Hibernating' buyer personas.",
      "Identified cross-sell opportunities using association rule mining (Apriori algorithm) to discover high-margin product bundle pairs.",
    ],
    keyFeatures: [
      {
        title: "Dynamic Cohort Retention Heatmap",
        description:
          "Visualizes month-over-month customer retention decay by acquisition channel and seasonal campaign.",
      },
      {
        title: "RFM Persona Matrix",
        description:
          "Segmented customer database enabling targeted email marketing campaigns customized for high-value VIPs versus re-engagement candidates.",
      },
      {
        title: "Customer Lifetime Value (LTV) Trajectory",
        description:
          "Projects cumulative revenue per cohort to calculate true payback windows and customer acquisition spend efficiency.",
      },
      {
        title: "Cross-Selling Basket Affinities",
        description:
          "Interactive scatter plots illustrating item co-purchase frequencies and lift ratios for merchandising teams.",
      },
    ],
    outcome: {
      metrics: [
        "24% increase in repeat purchase rate following RFM campaign segmentation",
        "32% higher average order value (AOV) on algorithmic bundle recommendations",
        "Automated 15 hours/week of manual Excel reporting into an instant Tableau dashboard",
      ],
      summary:
        "Delivered deep, actionable visibility into post-acquisition customer behavior, directly influencing inventory strategy and increasing high-margin repeat order frequency.",
    },
  },
  {
    id: "healthcare-readmission",
    slug: "healthcare-readmission",
    title: "Clinical Readmission & Risk Stratification",
    tagline: "Statistical analysis and risk factor modeling on 100k+ hospital encounter records",
    summary:
      "Statistical modeling and health analytics study examining 30-day inpatient readmissions. Performed multivariate logistic regression, hypothesis testing, and risk stratification to identify clinically significant predictors of preventable readmissions, presented in an interactive Looker Studio dashboard.",
    category: "Healthcare Analytics",
    year: "2023",
    badge: "Python • Statsmodels • Looker Studio • Biostatistics",
    featured: true,
    repoUrl: "https://github.com/hitheshhg/hospital-readmission-analytics",
    role: "Healthcare Data Analyst",
    duration: "3 Months",
    stack: [
      "Python (Statsmodels, SciPy, Pandas)",
      "Looker Studio",
      "SQL (BigQuery)",
      "Multivariate Logistic Regression",
      "Hypothesis Testing (Chi-Square, T-Tests)",
      "Data Governance & Anonymization",
    ],
    problem:
      "Hospitals face substantial financial penalties when 30-day patient readmission rates exceed benchmark thresholds. Clinical staff needed empirical evidence to determine which demographic variables, inpatient lab procedures, and medication adjustments directly correlated with unplanned return visits.",
    approach:
      "Analyzed an anonymized clinical dataset comprising 100,000+ hospital admissions. Conducted rigorous statistical hypothesis tests (two-sample t-tests, Mann-Whitney U, and Chi-square contingency tables) to isolate significant factors. Built multivariate logistic regression models in Statsmodels with odds ratios (OR) and 95% confidence intervals, compiling outcomes into an intuitive clinical decision dashboard.",
    architectureDetails: [
      "Processed high-dimensional clinical data with 50+ features, handling extreme class imbalances via stratified sampling and cost-sensitive weighting.",
      "Conducted multicollinearity diagnostics (Variance Inflation Factor < 2.5) to ensure statistical validity across comorbid diagnoses.",
      "Calculated Adjusted Odds Ratios: identified that changes in diabetic medication dosage during admission reduced readmission likelihood by 15% (p < 0.001).",
      "Built HIPAA-conscious aggregate BI dashboards in Looker Studio with dynamic filtering by admission type, diagnosis category, and age bracket.",
    ],
    keyFeatures: [
      {
        title: "Adjusted Odds Ratio Forest Plot",
        description:
          "Clear statistical visualization depicting the relative impact and 95% confidence intervals for each clinical indicator.",
      },
      {
        title: "Length-of-Stay vs Readmission Analysis",
        description:
          "Discovered nonlinear correlations between initial inpatient stay duration and subsequent 30-day revisit frequency.",
      },
      {
        title: "Demographic & Comorbidity Risk Heatmap",
        description:
          "Highlights patient subgroups requiring post-discharge telemedicine checkups and medication reconciliation.",
      },
      {
        title: "Automated Executive KPI Scorecard",
        description:
          "Monitors readmission rates against state and national benchmarks with automated outlier detection.",
      },
    ],
    outcome: {
      metrics: [
        "Identified top 4 statistically significant drivers of unplanned readmission (p < 0.01)",
        "Projected potential $350K penalty reduction through targeted discharge protocols",
        "Streamlined patient risk stratification from days of manual chart review to real-time queries",
      ],
      summary:
        "Bridged medical records and statistical modeling to provide clinical administrators with clear, data-backed insights that enhance patient care continuity while mitigating regulatory penalties.",
    },
  },
];
