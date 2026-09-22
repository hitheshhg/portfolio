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
    id: "dlithe-trainee",
    role: "Java Full Stack Trainee",
    company: "Dlithe",
    companyUrl: "https://dlithe.com",
    period: "06/2026 – 08/2026",
    type: "Traineeship",
    location: "Bengaluru / Remote, India",
    description:
      "Intensive software engineering traineeship focused on enterprise Java architectures, Spring Boot microservices, relational database design, and end-to-end full stack development.",
    responsibilities: [
      "Engineered RESTful microservices using Java 17, Spring Boot, Spring Security, and Hibernate/JPA.",
      "Constructed performant relational schemas and optimized SQL queries in PostgreSQL and MySQL.",
      "Integrated responsive client-side interfaces using React.js and modern JavaScript, connecting cleanly to backend REST endpoints.",
      "Practiced test-driven development (TDD) with JUnit and Mockito, ensuring reliable unit and integration test coverage.",
      "Collaborated in Agile sprints, conducting code reviews, CI/CD pipeline runs, and architectural discussions.",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "PostgreSQL",
      "React.js",
      "REST APIs",
      "Git",
      "Docker",
    ],
    highlight: "Enterprise Java & Microservices Architecture",
  },
  {
    id: "2starit-intern",
    role: "Web Developer Intern",
    company: "2StarIT Solutions",
    period: "2023",
    type: "Internship",
    location: "Karnataka, India",
    description:
      "Full stack web development internship building client websites, dynamic web portals, and RESTful service integrations with focus on performance and responsive design.",
    responsibilities: [
      "Developed and deployed dynamic, responsive web interfaces using HTML5, CSS3, JavaScript (ES6+), and React.js.",
      "Created backend API endpoints and middleware using Node.js and Express.js for client content management.",
      "Conducted cross-browser compatibility testing, performance audits, and mobile responsiveness optimizations.",
      "Collaborated with UI/UX designers to translate Figma mockups into clean, accessible web components.",
      "Maintained version control with Git and participated in weekly deployment cycles.",
    ],
    techStack: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "HTML5 / CSS3",
      "REST APIs",
      "Git",
    ],
    highlight: "Production Web Development & Client Solutions",
  },
];
