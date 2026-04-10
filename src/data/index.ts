// Central export point for all data

export { personalInfo } from './personal';
export { experiences, education, highSchool } from './experience';
export type { Experience } from './experience';
export { skillCategories, topSkills } from './skills';
export type { SkillCategory, Skill } from './skills';
export { projects, featuredProjects, projectCategories } from './projects';
export type { Project } from './projects';
export {
  achievements,
  achievementsByCategory,
  highlightedAchievements
} from './achievements';
export type { Achievement } from './achievements';
export { testimonials, quotes, milestones } from './testimonials';
export type { Testimonial } from './testimonials';

// Statistics for hero/about section
export const stats = {
  experience: '2+ Years',
  projects: '15+',
  publications: '3',
  cgpa: '$6000+/yr',
  certifications: '3+',
  hackathons: '3',
  // Impact metrics
  usersServed: '4+',
  accuracy: 'GitOps',
  technologiesUsed: '30+',
  customersSupported: '5+',
};

// Contact information
export const contact = {
  email: 'ujwal5ghare@gmail.com',
  phone: '',
  location: 'Vadodara, Gujarat, India',
  availability: 'Open to opportunities',
};

// Social links
export const social = {
  github: {
    url: 'https://github.com/Uj5Ghare',
    username: '@Uj5Ghare',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/ujwal-pachghare',
    username: 'ujwal-pachghare',
  },
  leetcode: {
    url: 'https://www.medium.com/@ujwal5ghare',
    username: '@ujwal5ghare',
  },
  twitter: {
    url: '#',
    username: '',
  },
  email: {
    url: 'mailto:ujwal5ghare@gmail.com',
    display: 'ujwal5ghare@gmail.com',
  },
};

// SEO metadata
export const seo = {
  title: 'Ujwal Pachghare | DevOps & Cloud Engineer',
  description: 'DevOps & Cloud Engineer with 2+ years of experience in AWS, Kubernetes, CI/CD automation, and SRE. Building reliable, scalable, and cost-efficient infrastructure.',
  keywords: [
    'Ujwal Pachghare',
    'DevOps Engineer',
    'Cloud Engineer',
    'AWS',
    'Kubernetes',
    'SRE',
    'Site Reliability Engineer',
    'Terraform',
    'Ansible',
    'ArgoCD',
    'Helm',
    'GitOps',
    'CI/CD',
    'Infrastructure',
    'Digiflux Technologies',
  ],
  og: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ujwal Pachghare Portfolio',
  },
};
