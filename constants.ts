
import { NavLink, Skill, Project, BlogPost } from './types';
import { ShieldCheckIcon, ServerIcon, CodeBracketSquareIcon, BugAntIcon, CommandLineIcon, ChartBarIcon, CpuChipIcon, CloudIcon } from '@heroicons/react/24/outline';
import React from 'react';

export const NAV_LINKS: NavLink[] = [
  { id: 'home', title: 'Home', href: '#/' },
  { id: 'about', title: 'About', href: '#/about' },
  { id: 'work', title: 'Work', href: '#/work' },
  { id: 'blog', title: 'Blog', href: '#/blog' },
  { id: 'contact', title: 'Contact', href: '#/contact' },
];

export const SKILLS_DATA: Skill[] = [
  { name: 'Network Security', level: 90, icon: React.createElement(ShieldCheckIcon, { className: "w-6 h-6 text-cyber-primary" }) },
  { name: 'System Hardening', level: 85, icon: React.createElement(ServerIcon, { className: "w-6 h-6 text-cyber-primary" }) },
  { name: 'Incident Response', level: 80, icon: React.createElement(BugAntIcon, { className: "w-6 h-6 text-cyber-primary" }) },
  { name: 'SIEM (Splunk, ELK)', level: 75, icon: React.createElement(ChartBarIcon, { className: "w-6 h-6 text-cyber-primary" }) },
  { name: 'Python Scripting', level: 70, icon: React.createElement(CodeBracketSquareIcon, { className: "w-6 h-6 text-cyber-primary" }) },
  { name: 'Linux/Windows Admin', level: 90, icon: React.createElement(CommandLineIcon, { className: "w-6 h-6 text-cyber-primary" }) },
  { name: 'Cloud Security (AWS/Azure)', level: 70, icon: React.createElement(CloudIcon, { className: "w-6 h-6 text-cyber-primary" }) },
  { name: 'IT Support', level: 95, icon: React.createElement(CpuChipIcon, { className: "w-6 h-6 text-cyber-primary" }) },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-1',
    title: 'Enterprise Infrastructure Hardening',
    description: 'Comprehensive security audit and hardening of critical infrastructure for a Fortune 500 client.',
    longDescription: 'Led a team to perform vulnerability assessments, implement security controls (CIS Benchmarks), configure firewalls, and establish IAM policies across a hybrid cloud environment. Reduced attack surface by 40% and improved compliance scores.',
    technologies: ['CIS Benchmarks', 'Nessus', 'Qualys', 'Firewalls', 'IAM', 'AWS', 'Azure'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    category: 'Infrastructure Hardening',
    repoUrl: 'https://github.com/your-username/project-1-details' // Replace with actual link
  },
  {
    id: 'project-2',
    title: 'SIEM Dashboard Implementation',
    description: 'Developed custom SIEM dashboards for real-time threat monitoring and incident analysis.',
    longDescription: 'Integrated various log sources into Splunk, created correlation searches, and designed intuitive dashboards for the SOC team. This improved mean time to detect (MTTD) by 25%.',
    technologies: ['Splunk', 'Syslog-ng', 'Logstash', 'Regex', 'Data Visualization'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    category: 'SIEM Dashboards',
    liveUrl: '#/work' // Replace with actual link or remove
  },
  {
    id: 'project-3',
    title: 'Automated Incident Response Playbook',
    description: 'Automated key steps in the incident response lifecycle using Python and SOAR principles.',
    longDescription: 'Developed scripts to automate containment of common malware infections and phishing attacks, significantly reducing manual effort for the IR team.',
    technologies: ['Python', 'SOAR', 'API Integration', 'Security Onion'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    category: 'Security Automation',
    repoUrl: 'https://github.com/your-username/project-3-details' // Replace with actual link
  },
   {
    id: 'project-4',
    title: 'Phishing Simulation & Training',
    description: 'Designed and executed a company-wide phishing simulation campaign to improve security awareness.',
    longDescription: 'Created realistic phishing templates, tracked metrics on click rates, and provided targeted training to employees. Reduced susceptibility to phishing by 30% over 6 months.',
    technologies: ['GoPhish', 'Email Security', 'User Training', 'Metrics Analysis'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    category: 'Incident Response', // Could also be a new category like 'Security Awareness'
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Real Cost of a Data Breach: A Small Business Guide',
    summary: 'Beyond the fines, data breaches impact reputation, customer trust, and operational stability. An overview of hidden costs.',
    date: '2024-07-15',
    slug: 'real-cost-data-breach',
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
    tags: ['Data Breach', 'SMB', 'Cybersecurity Costs']
  },
  {
    id: 'blog-2',
    title: 'My First CTF: Lessons from a Security Newbie',
    summary: 'Diving into Capture The Flag competitions can be daunting but incredibly rewarding. Here’s what I learned.',
    date: '2024-06-28',
    slug: 'first-ctf-lessons',
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    tags: ['CTF', 'Learning', 'Offensive Security']
  },
  {
    id: 'blog-3',
    title: 'Hardening Your Home Network: A Practical Guide',
    summary: 'Basic steps anyone can take to improve the security of their home Wi-Fi and connected devices.',
    date: '2024-05-10',
    slug: 'home-network-hardening',
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
    tags: ['Home Security', 'Networking', 'Tutorial']
  }
];

// Placeholder for EmailJS configuration
// Replace with your actual EmailJS Service ID, Template ID, and Public Key
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', 
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
};
