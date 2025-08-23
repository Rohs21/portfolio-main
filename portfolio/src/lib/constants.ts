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
    company_name: "Akash Dayal Groups",
    additional_info: "",
    duration: "December 2024 - June 2025",
    job_title: "Web Developer and Design Intern",
    description:
      "Designed, optimized, and tested 8+ responsive, reusable web pages, enhancing cross-device performance, accessibility, and UI/UX consistency to improve user engagement.",
  },
];

export const projects = [
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
    link: "https://github.com/Rohs21/Books-app",
    code: "https://github.com/Rohs21/Books-app",
    imageSrc: "/projects/Books-hub.png",
  }
];
