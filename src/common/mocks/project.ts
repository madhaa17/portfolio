import { ProjectCardProps } from "../types/project";

export const sampleProjects: ProjectCardProps[] = [
  {
    thumbnail: "/images/chat-ai.png",
    githubUrl: "https://github.com/madhaa17/chatbot-ai",
    title: "Chatbot Assistant - With Google Gemini API",
    description:
      "A chatbot application that utilizes Google Gemini API to provide intelligent responses and interactions.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Google Gemini API" },
      { name: "Github OAuth" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    thumbnail: "/images/eventeer-cv.png",
    url: "https://eventeer.id",
    title: "Eventeer Event Management Platform",
    description:
      "Eventer is a unified platform that helps event organizers manage events, engage communities, and foster shared growth.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "JavaScript" },
      { name: "Docker" },
      { name: "Bootstrap" },
      { name: "Sass" },
    ],
  },
  {
    thumbnail: "/images/jtt-cv.png",
    url: "https://jtt-tennis.id",
    title: "JTT - Jakarta Tennis Tournament",
    description:
      "JTT is a platform for managing tennis tournaments in Jakarta, providing features like registration, scheduling, and results tracking.",
    technologies: [
      { name: "Laravel" },
      { name: "MySQL" },
      { name: "Flowbite" },
    ],
  },
  {
    thumbnail: "/images/iconplus-cv.png",
    title: "Dashboard IconPlus VR Content Management",
    description:
      "IconPlus is a VR content management dashboard that allows users to create, manage, and distribute virtual reality content efficiently.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "React Leaflet" },
      { name: "Shadcn UI" },
    ],
  },
  {
    thumbnail: "/images/wakafmu-cv.png",
    title: "Dashboard WakafMu - Wakaf Management System Muhammadiyah",
    description:
      "WakafMu is a comprehensive wakaf management system for Muhammadiyah, providing features for managing wakaf assets, donations, and community engagement.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Shadcn UI" },
    ],
  },
  {
    thumbnail: "/images/ssa-cv.png",
    title: "Subaga Social Media Analytics",
    description:
      "Subaga Social Media Analytics is platform to track audience engagement, analyze sentiment, and monitor content performance across multiple social media platforms in real-time.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Shadcn UI" },
      { name: "React Leaflet" },
    ],
  },
  {
    thumbnail: "/images/lms-cv.png",
    title: "LMS - Learning Management System by Unilever Indonesia",
    description:
      "LMS is a comprehensive learning management system developed for Unilever Indonesia, designed to facilitate online learning and training for organizations.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "Docker" },
      { name: "Prisma" },
      { name: "Shadcn UI" },
    ],
  },
];
