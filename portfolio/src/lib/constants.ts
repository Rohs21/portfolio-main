import { I_Experience } from "@/src/types/type";

export const words = [
  "Full-Stack Web Developer",
  "Open Source Contributor",
  "Software Developer",
  "DSA Problem Solver",
  "Ai Enthusiast",
];

export const experienceData: I_Experience[] = [
  {
    company_link: "https://wynoot.com/",
    company_logo: "/assets/wynoot.png",
    company_name: "Wynoot Labs",
    additional_info: ", Crafteak",
    duration: "June 2025 - Present",
    job_title: "Software Developer Intern",
    description:
      "Developed and deployed a scalable full-stack web application with Next.js and AWS serverless services, integrating a GenAI-powered, credit-based access system and collaborating cross-functionally to optimize architecture, performance, and user experience.",
  },
  {
    company_link: "https://akashdayalgroups.com",
    company_logo: "/assets/akash-dayal.png",
    company_name: "ADG Pvt. Ltd.",
    additional_info: "",
    duration: "December 2024 - June 2025",
    job_title: "Web Developer Intern",
    description:
      "Designed, optimized, and tested 12+ responsive, reusable web pages, enhancing cross-device performance, accessibility, and UI/UX consistency to improve user engagement.",
  },
];

export const projects = [
  
  {
    title: "SyncSketch",
    description: "Built a custom Excalidraw-like collaborative drawing app from scratch, implementing real-time collaboration with HTTP and WebSockets, and using Prisma ORM for efficient backend development.",
    tech: ["Next.js", "Typescript", "TurboRepo", "Prisma", "NeonDB", "WebSockets", "More.."],
    status: "Live",
    year: "2025",
    link: "https://syncsketch-rkwk.onrender.com/",
    code: "https://github.com/Rohs21/Draw-App",
    imageSrc: "/projects/SyncSketch.png",
  },
  {
    title: "Neuro-Learn Ai",
    description: "AI-powered NeuroLearn is a smart learning platform offering personalized content, real-time quizzes, automated summaries, and advanced interview prep with voice recording, video call integration, and performance analytics to boost learning and career readiness.",
    tech: ["Next.js", "Typescript", "Gemini-API", "Prisma", "NeonDB", "More.."],
    status: "Live",
    year: "2025",
    link: "https://github.com/Rohs21/NeuroLearn-Ai",
    code: "https://github.com/Rohs21/Neurolearn-Ai",
    imageSrc: "/projects/Neuro-learn.png",
  },
  {
    title: "Pro-Mock: Interview Mocker-Ai",
    description: "AI-powered Interview Mocker that generates real-time, job-specific interviews from the title and description, with voice and video integration for a true-to-life interview experience.",
    tech: ["Next.js", "javascript", "Tailwind CSS", "Gemini-API", "Drizzle ORM", "NeonDB","Clerk Auth.", "More.."],
    status: "Live",
    year: "2025",
    link: "https://Promock.vercel.app",
    code: "https://github.com/Rohs21/Promock",
    imageSrc: "/projects/promock.png",
  },
  {
    title: "Trip-Ally",
    description: "A secure and efficient trip booking platform with JWT authentication and password hashing for robust data protection.",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "Taiwind CSS", "More.."],
    status: "Live",
    year: "2025",
    link: "https://trip-ally.vercel.app/",
    code: "https://github.com/Rohs21/Trip-Ally",
    imageSrc: "/projects/Tripally.png",
  },
  {
    title: "Books-Hub",
    description: "An interactive React-based Book Hub web app featuring book search and trending titles with effective state management.",
    tech: ["React.js", "HTTP", "Tailwid CSS", "API", "More.."],
    status: "Live",
    year: "2025",
    link: "https://readvault.vercel.app/",
    code: "https://github.com/Rohs21/Books-app",
    imageSrc: "/projects/books-app.png",
  }
];