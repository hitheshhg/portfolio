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
      "Comprehensive computer science curriculum with strong emphasis on algorithmic rigor, systems engineering, distributed architectures, and full-stack software development.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java / C++)",
      "Database Management Systems (SQL / Relational Design)",
      "Operating Systems & Systems Architecture",
      "Computer Networks & Protocols",
      "Software Engineering & Agile Methodologies",
      "Web Technologies & Cloud Computing",
    ],
    highlights: [
      "Active participant in technical hackathons and competitive programming challenges.",
      "Developed high-impact campus tools including CampusFix and Prepr.",
      "Collaborative contributor to peer coding workshops and open-source projects.",
    ],
  },
];
