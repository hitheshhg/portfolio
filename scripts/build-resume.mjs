import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function buildDataAnalystResumePdf() {
  const streamOps = [];

  const esc = (str) =>
    str.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

  const drawLine = (y, r = 0.8, g = 0.8, b = 0.8, width = 0.75) => {
    streamOps.push(`${r} ${g} ${b} RG`);
    streamOps.push(`${width} w`);
    streamOps.push(`45 ${y} m 567 ${y} l S`);
  };

  const addText = (text, font, size, x, y, r = 0, g = 0, b = 0) => {
    streamOps.push(`BT`);
    streamOps.push(`/${font} ${size} Tf`);
    streamOps.push(`${r} ${g} ${b} rg`);
    streamOps.push(`${x} ${y} Td`);
    streamOps.push(`(${esc(text)}) Tj`);
    streamOps.push(`ET`);
  };

  const addSectionHeader = (title, y) => {
    addText(title.toUpperCase(), "F2", 10.5, 45, y, 0.06, 0.72, 0.51); // #10b981
    drawLine(y - 4, 0.15, 0.15, 0.18, 1);
  };

  // 1. Header
  addText("HITHESH HG", "F2", 22, 45, 742, 0.08, 0.08, 0.1);
  addText("DATA ANALYST & BUSINESS INTELLIGENCE SPECIALIST", "F2", 10, 45, 725, 0.2, 0.25, 0.3);
  addText(
    "Bengaluru, India  |  hitheshhg@gmail.com  |  hitheshhg.qd.je  |  github.com/hitheshhg  |  linkedin.com/in/hitheshhg",
    "F1",
    8.5,
    45,
    710,
    0.4,
    0.42,
    0.45
  );

  drawLine(698, 0.85, 0.85, 0.88, 1.2);

  // 2. Executive Summary
  let curY = 680;
  addSectionHeader("Executive Summary", curY);
  curY -= 16;
  addText(
    "Results-driven Data Analyst with a rigorous Computer Science foundation, specializing in translating complex relational",
    "F1",
    8.5,
    45,
    curY,
    0.2,
    0.2,
    0.22
  );
  curY -= 12;
  addText(
    "datasets into actionable business intelligence, predictive classification models, and executive dashboards. Expert in advanced",
    "F1",
    8.5,
    45,
    curY,
    0.2,
    0.2,
    0.22
  );
  curY -= 12;
  addText(
    "SQL (CTEs, Window Functions), Python (Pandas, Scikit-learn), Power BI (DAX, Star Schema), and statistical experimentation.",
    "F1",
    8.5,
    45,
    curY,
    0.2,
    0.2,
    0.22
  );

  // 3. Technical Core Competencies
  curY -= 20;
  addSectionHeader("Technical Competencies", curY);
  curY -= 16;

  const skills = [
    { cat: "Querying & Relational Databases:", items: "Advanced SQL (PostgreSQL, MySQL, Google BigQuery, Snowflake), CTEs, Window Functions" },
    { cat: "Programming & Data Science:", items: "Python (Pandas, NumPy, Scikit-learn, Statsmodels, SciPy), R, Jupyter Notebooks, Git / GitHub" },
    { cat: "BI, Visualization & Reporting:", items: "Power BI (DAX, Power Query, Data Modeling), Tableau Desktop/Server, Looker Studio, Advanced Excel" },
    { cat: "Analytics & Statistical Modeling:", items: "Exploratory Data Analysis (EDA), Cohort Analysis, RFM Segmentation, A/B Hypothesis Testing, ETL Pipelines" },
  ];

  for (const s of skills) {
    addText(`*  ${s.cat}`, "F2", 8.5, 45, curY, 0.1, 0.1, 0.12);
    addText(s.items, "F1", 8.5, 215, curY, 0.25, 0.25, 0.28);
    curY -= 12;
  }

  // 4. Professional Experience
  curY -= 10;
  addSectionHeader("Professional Experience", curY);

  // Job 1
  curY -= 16;
  addText("Data & Business Intelligence Analytics Trainee", "F2", 9.5, 45, curY, 0.1, 0.1, 0.12);
  addText("06/2026 - 08/2026", "F2", 8.5, 480, curY, 0.3, 0.3, 0.3);
  curY -= 12;
  addText("Dlithe  |  Bengaluru, India", "F3", 8.5, 45, curY, 0.35, 0.38, 0.42);
  curY -= 12;
  const job1Bullets = [
    "Extracted, cleansed, and analyzed 100k+ row enterprise transactional datasets using PostgreSQL window functions and CTEs.",
    "Engineered interactive multi-page Power BI & Tableau dashboards with complex DAX measures and row-level security (RLS).",
    "Conducted exploratory data analysis (EDA) and feature engineering in Python (Pandas, NumPy) to pinpoint customer churn drivers.",
    "Formulated hypothesis tests (Chi-Square, T-tests) and regression models to deliver data-backed insights for executive decisions.",
    "Automated weekly reporting pipelines via Python scripts, eliminating 8+ hours of manual spreadsheet compilation per cycle.",
  ];
  for (const b of job1Bullets) {
    addText(">", "F2", 8.5, 52, curY, 0.06, 0.72, 0.51);
    addText(b, "F1", 8.2, 62, curY, 0.22, 0.22, 0.25);
    curY -= 11.5;
  }

  // Job 2
  curY -= 4;
  addText("Junior Data Analyst Intern", "F2", 9.5, 45, curY, 0.1, 0.1, 0.12);
  addText("2023", "F2", 8.5, 538, curY, 0.3, 0.3, 0.3);
  curY -= 12;
  addText("2StarIT Solutions  |  Karnataka, India", "F3", 8.5, 45, curY, 0.35, 0.38, 0.42);
  curY -= 12;
  const job2Bullets = [
    "Analyzed web and mobile user engagement telemetry to identify conversion drop-offs across multi-step product funnels.",
    "Designed and automated executive KPI dashboards in Google Looker Studio and Excel for 10+ business stakeholders.",
    "Wrote structured SQL queries reconciling transactional payments with CRM records, resolving revenue reporting discrepancies.",
    "Assisted product team in evaluating A/B test parameters and verifying statistical significance on feature rollouts.",
  ];
  for (const b of job2Bullets) {
    addText(">", "F2", 8.5, 52, curY, 0.06, 0.72, 0.51);
    addText(b, "F1", 8.2, 62, curY, 0.22, 0.22, 0.25);
    curY -= 11.5;
  }

  // 5. Featured Analytical Case Studies
  curY -= 8;
  addSectionHeader("Featured Analytics Projects", curY);

  const projectsList = [
    {
      title: "Customer Churn & Retention Intelligence (Python, PostgreSQL, Power BI, XGBoost)",
      bullets: [
        "Constructed predictive attrition model on 70,000+ subscription accounts achieving 0.88 ROC-AUC and 86% recall.",
        "Deployed an executive Power BI dashboard with what-if parameter modeling; contributed to 18% churn reduction and $280K ARR saved.",
      ],
    },
    {
      title: "E-Commerce Cohort & Revenue Analytics (SQL Window Functions, Tableau, RFM Analysis)",
      bullets: [
        "Analyzed 500k+ transactions using PostgreSQL window functions (DENSE_RANK, LAG) to construct dynamic cohort retention heatmaps.",
        "Developed RFM customer segmentation in Python, driving 24% repeat purchase lift and automating 15 hrs/week of reporting.",
      ],
    },
    {
      title: "Clinical Readmission & Risk Stratification (Python, Statsmodels, Looker Studio, BigQuery)",
      bullets: [
        "Evaluated 100k+ hospital admissions using multivariate logistic regression and odds ratio estimation to identify readmission risk factors.",
        "Delivered Looker Studio scorecard identifying 4 key clinical drivers (p < 0.01) with projected $350K penalty reduction.",
      ],
    },
  ];

  for (const p of projectsList) {
    curY -= 14;
    addText(p.title, "F2", 8.8, 45, curY, 0.1, 0.1, 0.12);
    curY -= 11;
    for (const b of p.bullets) {
      addText(">", "F2", 8.5, 52, curY, 0.06, 0.72, 0.51);
      addText(b, "F1", 8.2, 62, curY, 0.22, 0.22, 0.25);
      curY -= 11;
    }
  }

  // 6. Education & Certifications
  curY -= 8;
  addSectionHeader("Education & Academic Background", curY);
  curY -= 14;
  addText("Bachelor of Technology (B.Tech) - Computer Science & Engineering", "F2", 9.5, 45, curY, 0.1, 0.1, 0.12);
  addText("2023 - Present", "F2", 8.5, 495, curY, 0.3, 0.3, 0.3);
  curY -= 12;
  addText("NMAM Institute of Technology (NMAMIT), Nitte  |  CGPA: 8.7 / 10.0", "F3", 8.5, 45, curY, 0.35, 0.38, 0.42);
  curY -= 11;
  addText(
    "Relevant Coursework: Database Management Systems, Probability & Statistics, Data Mining & Business Analytics, Operating Systems",
    "F1",
    8.0,
    45,
    curY,
    0.3,
    0.3,
    0.32
  );

  const streamContent = streamOps.join("\n");
  const streamLength = Buffer.byteLength(streamContent, "utf-8");

  const objects = [];
  objects.push(`%PDF-1.4\n`);

  const obj1 = `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`;
  const obj2 = `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`;
  const obj3 = `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R /F3 7 0 R >> >> >>\nendobj\n`;
  const obj4 = `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj\n`;
  const obj5 = `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`;
  const obj6 = `6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`;
  const obj7 = `7 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>\nendobj\n`;

  const bodyParts = [obj1, obj2, obj3, obj4, obj5, obj6, obj7];

  let currentOffset = Buffer.byteLength(objects[0], "utf-8");
  const xrefOffsets = [0];

  let fullPdf = objects[0];
  for (let i = 0; i < bodyParts.length; i++) {
    xrefOffsets.push(currentOffset);
    fullPdf += bodyParts[i];
    currentOffset += Buffer.byteLength(bodyParts[i], "utf-8");
  }

  const startXref = currentOffset;

  let xref = `xref\n0 ${xrefOffsets.length}\n`;
  xref += `0000000000 65535 f \n`;
  for (let i = 1; i < xrefOffsets.length; i++) {
    xref += String(xrefOffsets[i]).padStart(10, "0") + " 00000 n \n";
  }

  const trailer = `trailer\n<< /Size ${xrefOffsets.length} /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF\n`;

  fullPdf += xref + trailer;

  const outputPath = path.join(__dirname, "../public/resume.pdf");
  fs.writeFileSync(outputPath, fullPdf, "utf-8");
  console.log("Successfully generated:", outputPath, "Size:", fullPdf.length, "bytes");
}

buildDataAnalystResumePdf();
