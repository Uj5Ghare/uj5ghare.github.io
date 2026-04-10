export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  logo?: string;
  type: 'full-time' | 'internship' | 'training';
}

export const experiences: Experience[] = [
  {
    id: 'digiflux-ase',
    company: 'Digiflux Technologies Pvt Ltd',
    role: 'Associate Software Engineer',
    location: 'Vadodara, Gujarat',
    duration: 'January 2025 – Present',
    startDate: '2025-01',
    endDate: 'Present',
    type: 'full-time',
    description: [
      'Led AWS cost-optimization initiatives by conducting in-depth usage analysis and implementing strategic improvements, achieving consistent monthly savings of $500+ while enhancing overall resource efficiency.',
      'Architected and currently oversee Kubernetes environments for two production projects using Kops and Helm, establishing GitOps-driven deployment workflows with ArgoCD to ensure reliability, scalability, and operational consistency.',
      'Designed and implemented an observability stack leveraging Grafana, Prometheus, Loki, AlertManager, CAdvisor, FluentBit, and AWS CloudWatch, significantly improving system visibility, incident response, and performance monitoring.',
      'Own SRE functions for microservice-based platforms, driving reliability, performance tuning, and operational excellence across Kubernetes, monitoring, and logging ecosystems.',
    ],
    technologies: ['AWS', 'Kubernetes', 'Helm', 'GitLab CI/CD', 'Bash', 'Python', 'Grafana', 'Prometheus', 'Loki', 'Kops', 'ArgoCD', 'AlertManager', 'CAdvisor', 'FluentBit', 'AWS CloudWatch', 'ELK Stack'],
  },
  {
    id: 'vegastack-devops',
    company: 'VegaStack (PeerXP Services Pvt Ltd)',
    role: 'DevOps Associate',
    location: 'Bangalore',
    duration: 'March 2024 – September 2024',
    startDate: '2024-03',
    endDate: '2024-09',
    type: 'full-time',
    description: [
      'Migrated client GitLab CI/CD pipelines to GitHub Workflows.',
      'Conducted R&D on different workflow strategies and developed custom composite actions and reusable GitHub workflows for client and internal projects.',
      'Automated deployment of complex web apps (Django, Next.js, React.js) with Nginx as load balancer using GitLab CI/CD.',
      'Created Terraform manifests with AWS S3 as backend to automatically spin up spot instances and run Ansible playbooks on them.',
      'Created Dockerfiles and docker-compose files for frontend, backend, databases, and RabbitMQ.',
      'Implemented proactive monitoring of servers with Zabbix Server 7.0 and Zabbix Agent 2.',
    ],
    technologies: ['AWS', 'GitLab CI/CD', 'GitHub Actions', 'Docker', 'Docker-Compose', 'Terraform', 'Ansible', 'Zabbix', 'Nginx'],
  },
  {
    id: 'extion-cloud',
    company: 'Extion Infotech Technologies',
    role: 'Cloud Computing Intern',
    location: 'Remote',
    duration: 'January 2024 – February 2024',
    startDate: '2024-01',
    endDate: '2024-02',
    type: 'internship',
    description: [
      'Achieved 99.9% uptime with auto-scaling by deploying web applications using Serverless Amazon Elastic Beanstalk.',
      'Developed a serverless app that uses API Gateway and AWS Lambda to reduce operating costs.',
      'Managed data across various Amazon S3 buckets, applying lifecycle policies that lowered storage costs while ensuring 99.99% durability.',
      'Chosen as one of the top 5 outstanding performers.',
    ],
    technologies: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'API Gateway', 'Elastic Beanstalk', 'IAM', 'VPC'],
  },
];

export const education = {
  degree: '',
  university: '',
  location: '',
  duration: '',
  cgpa: '',
  highlights: [],
};

export const highSchool = {
  school: '',
  board: '',
  location: '',
  duration: '',
  percentage: '',
};
