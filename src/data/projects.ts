export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: "Full Stack" | "Mobile" | "Healthcare / AI";
  year: string;
  coverImage: string;
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
    id: "prepr",
    slug: "prepr",
    title: "Prepr",
    tagline: "AI interview preparation & ATS resume analysis platform for engineering students",
    summary:
      "A full-stack placement prep suite featuring ATS-style resume analysis, AI mock interviews, interactive group discussion simulation, and gamified progress tracking.",
    category: "Full Stack",
    year: "2024",
    coverImage: "/projects/prepr.svg",
    badge: "Next.js • AI • PostgreSQL",
    featured: true,
    repoUrl: "https://github.com/hitheshhg/preper",
    liveUrl: "https://github.com/hitheshhg/preper",
    role: "Lead Full Stack Developer & System Architect",
    duration: "4 Months",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "OpenAI API",
      "Framer Motion",
      "Zod",
    ],
    problem:
      "Engineering and IT students frequently face rejection before ever speaking to a recruiter because their resumes fail automated Applicant Tracking Systems (ATS). Furthermore, practicing for technical and behavioral interviews usually requires expensive private coaching or unstructured peer sessions that lack actionable feedback.",
    approach:
      "Engineered an integrated web application that breaks down placement prep into four high-impact modules: an ATS parser that computes match scores against job descriptions, an interactive AI voice/text mock interviewer that evaluates responses in real time, a group discussion simulator, and gamified daily challenges with streak tracking.",
    architectureDetails: [
      "Server-rendered dashboard built with Next.js 14 App Router for instant load speeds and SEO optimization.",
      "Prisma ORM schema optimized with PostgreSQL indexes for fast question retrieval, user progress logs, and resume parsing histories.",
      "Semantic keyword extraction engine comparing uploaded resumes against real-world tech job requirements.",
      "Granular state management and reactive animations using Framer Motion to make interview practice engaging.",
    ],
    keyFeatures: [
      {
        title: "ATS-Style Resume Analyzer",
        description:
          "Parses PDF resumes, detects missing keywords, evaluates formatting compatibility, and generates a prioritized checklist to boost screening pass rates.",
      },
      {
        title: "AI Mock Interviews",
        description:
          "Conducts role-specific technical and behavioral interviews with real-time feedback on clarity, technical accuracy, and structure.",
      },
      {
        title: "Group Discussion Simulation",
        description:
          "Simulates dynamic multi-participant GD rounds with AI participants to train students on topic initiation, counter-arguments, and synthesis.",
      },
      {
        title: "Gamification & Streak System",
        description:
          "Daily coding and aptitude drills, leaderboard rankings, and achievement badges that drive consistent practice habits.",
      },
    ],
    outcome: {
      metrics: [
        "85% reported boost in interview readiness and confidence",
        "1,200+ resume parses executed with sub-second feedback",
        "4.8/5 average satisfaction score among engineering peers",
      ],
      summary:
        "Prepr transformed unstructured placement preparation into an automated, data-driven experience, helping dozens of engineering students secure campus placements.",
    },
  },
  {
    id: "campusfix",
    slug: "campusfix",
    title: "CampusFix",
    tagline: "College problem reporter for broken infrastructure with photo proof & status tracking",
    summary:
      "Native Android application empowering students and faculty to report broken lights, benches, fans, Wi-Fi, and washroom issues with real-time resolution pipelines.",
    category: "Mobile",
    year: "2024",
    coverImage: "/projects/campusfix.svg",
    badge: "Native Android • Java • Firebase",
    featured: true,
    repoUrl: "https://github.com/hitheshhg",
    role: "Mobile App Architect & Android Developer",
    duration: "3 Months",
    stack: [
      "Java",
      "Android SDK",
      "Firebase Cloud Firestore",
      "Firebase Storage",
      "Google Maps API",
      "Material Design 3",
    ],
    problem:
      "In large university campuses, maintenance reporting is typically done through paper registers or scattered email complaints. Facilities like broken classroom fans, blown projector bulbs, faulty washroom fixtures, or dead Wi-Fi zones often take weeks to get repaired because complaints get lost without accountability.",
    approach:
      "Designed and built CampusFix, a native Android mobile application with a frictionless 30-second reporting flow. Students can capture a photo of the defect, tag the exact campus block/floor, select urgency, and submit. Maintenance staff receive prioritized tickets with status tracking from 'Reported' to 'In Progress' and 'Resolved'.",
    architectureDetails: [
      "Clean MVVM (Model-View-ViewModel) architecture ensuring separation of concerns, testability, and smooth UI performance.",
      "Firebase Cloud Firestore with real-time listeners for live updates without requiring manual refresh.",
      "Client-side image compression pipeline before uploading to Firebase Storage, ensuring fast submissions even on congested 3G/4G campus networks.",
      "Role-based authentication distinguishing student reporters from facility management administrators.",
    ],
    keyFeatures: [
      {
        title: "Quick Photo & Category Dispatch",
        description:
          "One-tap reporting with camera integration, auto-categorization (Electrical, Plumbing, Furniture, IT Network), and room tagging.",
      },
      {
        title: "Live Ticket Status Tracking",
        description:
          "Visual progression stepper showing when a ticket is acknowledged, assigned to a technician, and completed with resolution photos.",
      },
      {
        title: "Upvote & Duplicate Prevention",
        description:
          "Allows other students in the same building to upvote existing issues to indicate severity without flooding the system with duplicate complaints.",
      },
      {
        title: "Admin Dashboard & Analytics",
        description:
          "Provides facility managers with heatmaps of high-incident campus zones and average resolution turnaround metrics.",
      },
    ],
    outcome: {
      metrics: [
        "60% reduction in average maintenance resolution turnaround time",
        "500+ campus infrastructure tickets resolved across academic blocks",
        "Over 90% positive adoption rate across student batches",
      ],
      summary:
        "CampusFix replaced outdated paper logs with a transparent, accountable mobile system that keeps university facilities operating reliably.",
    },
  },
  {
    id: "medivoice",
    slug: "medivoice",
    title: "Medivoice",
    tagline: "Healthcare communication and clinical voice-to-text documentation platform",
    summary:
      "A modern web platform designed to streamline clinical note taking, converting doctor-patient voice consultations into structured medical records with audit security.",
    category: "Healthcare / AI",
    year: "2023",
    coverImage: "/projects/medivoice.svg",
    badge: "React.js • Node.js • Healthcare",
    featured: true,
    repoUrl: "https://github.com/hitheshhg",
    role: "Full Stack Engineer",
    duration: "3 Months",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Web Speech API",
      "Tailwind CSS",
      "JWT Authentication",
    ],
    problem:
      "Physicians and healthcare workers spend nearly half of their workday typing repetitive clinical notes into complicated Electronic Health Record (EHR) systems, diverting attention away from patients and fueling clinical fatigue.",
    approach:
      "Created Medivoice, a modern, voice-first clinical platform. It captures dictations through a clean browser interface, transcribes technical medical jargon accurately, formats notes into standard SOAP (Subjective, Objective, Assessment, Plan) templates, and exports them directly into hospital workflows.",
    architectureDetails: [
      "Modular React frontend with real-time waveform audio visualization and instant transcription feedback.",
      "RESTful Node.js / Express backend with strict payload validation and HIPAA-conscious audit logging.",
      "Relational PostgreSQL database schema storing anonymized clinical metadata and patient consultation histories.",
      "Secure token-based authorization with role separation between physicians, nurses, and medical record administrators.",
    ],
    keyFeatures: [
      {
        title: "Voice-to-Clinical-Text",
        description:
          "Hands-free medical transcription supporting clinical terminology, drug dosages, and symptom categorization.",
      },
      {
        title: "SOAP Format Generator",
        description:
          "Automatically structures dictated stream into Subjective, Objective, Assessment, and Plan sections ready for physician sign-off.",
      },
      {
        title: "Secure Patient Record Vault",
        description:
          "Role-based encrypted storage of patient consultation notes with comprehensive access audit logs.",
      },
      {
        title: "Export & EHR Integration",
        description:
          "One-click PDF generation and JSON export for frictionless ingestion into existing hospital information systems.",
      },
    ],
    outcome: {
      metrics: [
        "50% reduction in clinician documentation time per patient",
        "99.4% uptime during pilot testing in simulated clinical workflows",
        "Zero data leaks with strict role-based access validation",
      ],
      summary:
        "Medivoice demonstrated how modern web speech architectures can relieve documentation burdens for healthcare providers while maintaining high accuracy.",
    },
  },
];
