import { ui } from "../i18n/ui";

export interface Project {
  titleKey: keyof (typeof ui)["es"];
  descriptionKey: keyof (typeof ui)["es"];
  projectUrl: string;
  githubUrl?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    titleKey: "projects.project1.title",
    descriptionKey: "projects.project1.description",
    projectUrl: "https://proyecto1.com",
    githubUrl: "https://github.com/",
    tags: ["Turborepo", "Next.js", "Tailwind CSS"],
  },
  {
    titleKey: "projects.project2.title",
    descriptionKey: "projects.project2.description",
    projectUrl: "https://proyecto2.com",
    githubUrl: "https://github.com/",
    tags: ["Svelte", "Hono", "Upstash", "shadcn/ui"],
  },
  {
    titleKey: "projects.project3.title",
    descriptionKey: "projects.project3.description",
    projectUrl: "https://proyecto3.com",
    githubUrl: "https://github.com/",
    tags: ["Turborepo", "Remix", "Tailwind CSS"],
  },
  {
    titleKey: "projects.project4.title",
    descriptionKey: "projects.project4.description",
    projectUrl: "https://proyecto4.com",
    githubUrl: "https://github.com/",
    tags: ["Next.js", "T3 Stack", "Prisma"],
  },
];
