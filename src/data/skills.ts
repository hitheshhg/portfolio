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
    category: "Languages",
    description: "Core programming languages for algorithmic problem solving and robust software engineering.",
    skills: [
      {
        name: "Java",
        level: "Advanced",
        iconName: "Coffee",
        description: "Object-oriented design, collections, concurrency, enterprise architectures.",
      },
      {
        name: "TypeScript",
        level: "Advanced",
        iconName: "FileCode2",
        description: "Strict typing, generics, modern ECMAScript, full-stack application development.",
      },
      {
        name: "Python",
        level: "Proficient",
        iconName: "Terminal",
        description: "Scripting, data structures, automation, and API integrations.",
      },
      {
        name: "C++",
        level: "Proficient",
        iconName: "Cpu",
        description: "Competitive programming, memory management, algorithmic efficiency.",
      },
    ],
  },
  {
    category: "Frontend",
    description: "Modern component-driven web frameworks with focus on UX, accessibility, and high performance.",
    skills: [
      {
        name: "Next.js",
        level: "Advanced",
        iconName: "Globe",
        description: "App Router, Server Components, SSR/SSG, API route handlers, SEO optimization.",
      },
      {
        name: "React.js",
        level: "Advanced",
        iconName: "Layers",
        description: "Custom hooks, state management, compound components, performant UI rendering.",
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        iconName: "Palette",
        description: "Design tokens, fluid typography, dark mode systems, custom animation utilities.",
      },
      {
        name: "Framer Motion",
        level: "Proficient",
        iconName: "Sparkles",
        description: "Orchestrated scroll reveals, layout animations, gesture interactions.",
      },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Scalable server architectures, microservices, and secure API gateways.",
    skills: [
      {
        name: "Node.js & Express",
        level: "Advanced",
        iconName: "Server",
        description: "Event-driven RESTful APIs, middleware pipelines, authentication, webhooks.",
      },
      {
        name: "Spring Boot",
        level: "Proficient",
        iconName: "Boxes",
        description: "Enterprise Java microservices, Spring Security, JPA/Hibernate, dependency injection.",
      },
      {
        name: "PostgreSQL",
        level: "Advanced",
        iconName: "Database",
        description: "Relational modeling, indexing strategies, complex joins, ACID compliance.",
      },
      {
        name: "Prisma ORM",
        level: "Advanced",
        iconName: "Code",
        description: "Schema migrations, type-safe queries, relation mapping, multi-table transactions.",
      },
    ],
  },
  {
    category: "Tools & DevOps",
    description: "Deployment workflows, version control, and developer tooling.",
    skills: [
      {
        name: "Git & GitHub",
        level: "Advanced",
        iconName: "GitBranch",
        description: "Branching strategies, collaborative pull requests, code reviews, semantic commits.",
      },
      {
        name: "Docker",
        level: "Proficient",
        iconName: "Box",
        description: "Containerization, multi-stage Dockerfiles, local microservice orchestration.",
      },
      {
        name: "Vercel & Cloud",
        level: "Advanced",
        iconName: "Cloud",
        description: "Edge functions, continuous deployment, environment config, analytics.",
      },
      {
        name: "REST & Postman",
        level: "Advanced",
        iconName: "Send",
        description: "API design, automated integration testing, OpenAPI documentation.",
      },
    ],
  },
];
