export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  videoUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  phone: string;
  location: string;
}
