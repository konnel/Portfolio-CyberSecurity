
import { ReactNode } from 'react';

export interface NavLink {
  id: string;
  title: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number; // Percentage 0-100
  icon?: ReactNode; // Optional: SVG icon component
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string; // Using picsum for placeholders
  liveUrl?: string;
  repoUrl?: string;
  category: 'Infrastructure Hardening' | 'Incident Response' | 'SIEM Dashboards' | 'Security Automation';
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  slug: string; // For routing to a full post if implemented
  imageUrl?: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// For simplified Acerternity UI / Magic UI components
export interface BentoGridItemProps {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
  id: string;
}
