export interface Studio {
  name: string;
  tagline: string;
  mission: string;
  email: string;
  phone?: string;
  yearsOfExperience?: string;
  presentationModes?: PresentationMode[];
}

export interface PresentationMode {
  key: string;
  label: string;
  imageUrl?: string;
  caption?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  liveLink?: string;
  repoLink?: string;
  category: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioData {
  studio: Studio;
  socialLinks: SocialLink[];
  founders: Founder[];
  projects: Project[];
  services: Service[];
}
