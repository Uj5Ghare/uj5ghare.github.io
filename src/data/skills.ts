export interface SkillCategory {
  category: string;
  icon?: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency?: number;
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS', proficiency: 90 },
      { name: 'Kubernetes', proficiency: 90 },
      { name: 'Kops', proficiency: 85 },
      { name: 'EKS', proficiency: 85 },
      { name: 'Helm', proficiency: 88 },
      { name: 'ArgoCD', proficiency: 88 },
      { name: 'Azure', proficiency: 65 },
    ],
  },
  {
    category: 'CI/CD & Automation',
    skills: [
      { name: 'GitHub Actions', proficiency: 90 },
      { name: 'GitLab CI/CD', proficiency: 90 },
      { name: 'Jenkins', proficiency: 80 },
      { name: 'Terraform', proficiency: 85 },
      { name: 'Ansible', proficiency: 82 },
      { name: 'Bash Scripting', proficiency: 88 },
    ],
  },
  {
    category: 'Containers & Orchestration',
    skills: [
      { name: 'Docker', proficiency: 92 },
      { name: 'Docker-Compose', proficiency: 90 },
      { name: 'Kubernetes', proficiency: 90 },
      { name: 'Helm', proficiency: 88 },
      { name: 'ECR', proficiency: 82 },
    ],
  },
  {
    category: 'Monitoring & Observability',
    skills: [
      { name: 'Prometheus', proficiency: 88 },
      { name: 'Grafana', proficiency: 88 },
      { name: 'Loki', proficiency: 85 },
      { name: 'AlertManager', proficiency: 82 },
      { name: 'ELK Stack', proficiency: 80 },
      { name: 'AWS CloudWatch', proficiency: 82 },
      { name: 'Zabbix', proficiency: 80 },
    ],
  },
  {
    category: 'Security & Code Quality',
    skills: [
      { name: 'SonarQube', proficiency: 80 },
      { name: 'Trivy', proficiency: 80 },
      { name: 'OWASP', proficiency: 75 },
      { name: 'Server-Hardening', proficiency: 80 },
    ],
  },
  {
    category: 'Tools & Fundamentals',
    skills: [
      { name: 'Git', proficiency: 92 },
      { name: 'Linux', proficiency: 90 },
      { name: 'Nginx', proficiency: 85 },
      { name: 'PM2', proficiency: 80 },
      { name: 'Python', proficiency: 70 },
      { name: 'MongoDB', proficiency: 68 },
      { name: 'Cloudflare', proficiency: 70 },
      { name: 'N8N', proficiency: 65 },
      { name: 'Notion', proficiency: 85 },
      { name: 'ClickUp', proficiency: 85 },
    ],
  },
];

export const topSkills = [
  'AWS',
  'Kubernetes',
  'Helm',
  'ArgoCD',
  'Terraform',
  'Ansible',
  'Docker',
  'GitHub Actions',
  'GitLab CI/CD',
  'Prometheus',
  'Grafana',
  'Bash',
  'Linux',
  'Nginx',
];
