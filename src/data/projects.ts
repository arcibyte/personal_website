export interface Project {
  title: string;
  description: string;
  projectUrl: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Proyecto 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    projectUrl: "https://proyecto1.com",
    githubUrl: "https://github.com/"
  },
  {
    title: "Proyecto 2",
    description: "Adaptación de equipos",
    projectUrl: "https://proyecto2.com",
    githubUrl: "https://github.com/"
  },
  {
    title: "Proyecto 3",
    description: "Sincronización y coordinación del equipo.",
    projectUrl: "https://proyecto3.com",
    githubUrl: "https://github.com/"
  },
  {
    title: "Proyecto 4",
    description: "Descripción breve.",
    projectUrl: "https://proyecto4.com",
    githubUrl: "https://github.com/"


  }
];
