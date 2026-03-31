export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveDemoUrl?: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

export interface NavItem {
  label: string;
  href: string;
}export interface PersonalInfo {
  name: string;
  emails: string[];
  phones: string[];
  location: string;
  role: string;
  github: string;
  linkedin: string;
  twitter?: string;
  profileImage?: string;
}
