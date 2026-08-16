// Central export point for all data

export { personalInfo } from './personal';
export { experiences } from './experience';
export type { Experience } from './experience';
export { skillCategories } from './skills';
export type { SkillCategory, Skill } from './skills';
export { projects, projectCategories } from './projects';
export type { Project } from './projects';
export {
  achievements,
  achievementsByCategory
} from './achievements';
export type { Achievement } from './achievements';

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
