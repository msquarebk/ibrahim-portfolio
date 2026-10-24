export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Your project name",
    description: "One or two sentences on what it does and what you built.",
    tech: ["React", "TypeScript", "Node.js"],
    link: "https://link-to-your-project.com",
  },
];
