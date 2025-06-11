interface Technology {
  name: string;
  color?: string;
}

export interface ProjectCardProps {
  thumbnail: string;
  url?: string;
  githubUrl?: string;
  title: string;
  description: string;
  technologies: Technology[];
  classname?: string;
}
