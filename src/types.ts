export type ThemeMode = 'dark' | 'light';

export interface TopBarInfo {
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  facebook: string;
  instagram: string;
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  id: string;
  name: string;
  category: 'React' | 'Bootstrap' | 'JavaScript';
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface PricePlan {
  id: string;
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  badge?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'tools' | 'backend';
  icon: string;
  color: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  details: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ToastNotification {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}
