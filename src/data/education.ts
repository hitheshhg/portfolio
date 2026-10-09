export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  coursework: string[];
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    id: "nmamit-btech",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "NMAM Institute of Technology (NMAMIT), Nitte",
    location: "Nitte, Karnataka, India",
    period: "2023 – Present",
    status: "In Progress (Undergraduate)",
    description:
      "Rigorous computer science and analytical foundation with deep emphasis on database architectures, statistical modeling, algorithmic optimization, and data-driven systems.",
    coursework: [
      "Database Management Systems (SQL & Relational Schema Design)",
      "Probability, Statistics & Linear Algebra",
      "Data Structures & Algorithms",
      "Data Mining & Business Analytics",
      "Operating Systems & Systems Architecture",
      "Object-Oriented Programming (Python / Java / C++)",
      "Cloud Computing & Distributed Systems",
    ],
    highlights: [
      "Active researcher in data mining techniques and statistical pattern recognition.",
      "Engineered data pipelines and analytics dashboards for academic and campus projects.",
      "Peer mentor conducting hands-on SQL and Python data wrangling study sessions.",
    ],
  },
];
