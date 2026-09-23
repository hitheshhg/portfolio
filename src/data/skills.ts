export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Familiar";
    iconName: string;
    description: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Querying",
    description: "Core analytical programming and relational query languages for robust data extraction and transformation.",
    skills: [
      {
        name: "SQL (PostgreSQL / MySQL / BigQuery)",
        level: "Advanced",
        iconName: "Database",
        description: "Complex CTEs, window functions (RANK, LAG, NTILE), indexing, query optimization, and relational modeling.",
      },
      {
        name: "Python",
        level: "Advanced",
        iconName: "Terminal",
        description: "Data wrangling, statistical scripting, feature engineering, and automated analysis pipelines.",
      },
      {
        name: "R",
        level: "Proficient",
        iconName: "FileCode2",
        description: "Hypothesis testing, exploratory data analysis, and statistical distributions.",
      },
      {
        name: "DAX (Data Analysis Expressions)",
        level: "Advanced",
        iconName: "Calculator",
        description: "Calculated measures, time-intelligence functions, iterator formulas, and dynamic filter contexts.",
      },
    ],
  },
  {
    category: "Analysis & Data Science Libraries",
    description: "Data manipulation, numerical computation, and machine learning toolkits.",
    skills: [
      {
        name: "Pandas & NumPy",
        level: "Advanced",
        iconName: "Table",
        description: "Vectorized computations, aggregation matrices, schema transformations, and timeseries alignment.",
      },
      {
        name: "Scikit-Learn",
        level: "Proficient",
        iconName: "Cpu",
        description: "Supervised classification, regression, clustering, model evaluation (ROC-AUC, F1), and cross-validation.",
      },
      {
        name: "Statsmodels & SciPy",
        level: "Proficient",
        iconName: "TrendingUp",
        description: "Multivariate regression, ANOVA, Chi-square tests, p-value calculations, and confidence intervals.",
      },
      {
        name: "Matplotlib, Seaborn & Plotly",
        level: "Advanced",
        iconName: "LineChart",
        description: "Interactive visual exploratory analysis, distribution plots, heatmaps, and publication-ready charts.",
      },
    ],
  },
  {
    category: "Business Intelligence & Visualization",
    description: "Executive dashboards, reporting suites, and decision-support interfaces.",
    skills: [
      {
        name: "Power BI",
        level: "Advanced",
        iconName: "BarChart3",
        description: "Star schema data modeling, drill-down dashboards, row-level security (RLS), and KPI scorecards.",
      },
      {
        name: "Tableau",
        level: "Advanced",
        iconName: "PieChart",
        description: "Calculated fields, Level of Detail (LOD) expressions, parameters, and storytelling dashboards.",
      },
      {
        name: "Looker Studio",
        level: "Proficient",
        iconName: "Globe",
        description: "Google ecosystem reporting, real-time KPI monitoring, and cross-source data blending.",
      },
      {
        name: "Advanced Excel",
        level: "Advanced",
        iconName: "FileSpreadsheet",
        description: "Power Query, pivot tables, XLOOKUP, INDEX/MATCH, Monte Carlo simulation, and VBA automation.",
      },
    ],
  },
  {
    category: "Data Warehousing & Tooling",
    description: "Data architectures, pipeline workflows, and collaborative version control.",
    skills: [
      {
        name: "PostgreSQL & Database Design",
        level: "Advanced",
        iconName: "Layers",
        description: "Schema normalization, data mart creation, transaction isolation, and explain analyze tuning.",
      },
      {
        name: "Snowflake & Cloud Warehousing",
        level: "Proficient",
        iconName: "Cloud",
        description: "Virtual warehouses, zero-copy cloning, stage ingestion, and columnar analytics queries.",
      },
      {
        name: "ETL & Pipeline Automation",
        level: "Advanced",
        iconName: "RefreshCw",
        description: "Scheduled ingestion workflows, data validation rules, data cleaning, and automated report triggers.",
      },
      {
        name: "Git & GitHub",
        level: "Advanced",
        iconName: "GitBranch",
        description: "Reproducible analytics notebooks, collaborative review, semantic commits, and version control.",
      },
    ],
  },
];
