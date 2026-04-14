
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  paper?: string;
  image?: string;
  category: 'production' | 'devops' | 'web';
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'zikhara-ai',
    title: 'ZIKHARA AI SAAS',
    description: 'Migrated all environments from EC2 deployments to Kubernetes, managed staging, pre-prod, and production using GitOps with ArgoCD, implemented observability with Grafana, Prometheus, Loki, and CloudWatch, and built CI/CD pipelines with AWS DevOps Services.',
    technologies: ['AWS', 'Kubernetes', 'Kops', 'Helm', 'ArgoCD', 'Slack', 'Prometheus', 'Grafana', 'Loki'],
    demo: 'https://zikhara.ai',
    category: 'production',
    featured: true,
    metrics: [
      { label: 'Environments', value: '3' },
      { label: 'Strategy', value: 'GitOps' },
      { label: 'Observability', value: 'Full Stack' },
    ],
  },
  {
    id: 'preplex',
    title: 'PREPLEX',
    description: 'Deployed the project from scratch on AWS, including VPC setup and Docker container deployment on EC2, managed and monitored non-prod and production environments, handled database backups on S3 and S3 Glacier for cost savings, and oversaw the release process using GitLab CI/CD with Slack-based alerting.',
    technologies: ['AWS', 'GitLab CI/CD', 'Slack', 'Docker', 'Nginx', 'ELK Stack'],
    demo: 'https://preplex.app',
    category: 'production',
    featured: true,
    metrics: [
      { label: 'Infra', value: 'AWS VPC' },
      { label: 'Storage', value: 'S3 + Glacier' },
      { label: 'Alerting', value: 'Slack' },
    ],
  },
  {
    id: 'vegastack',
    title: 'Vegastack',
    description: 'Created Terraform manifests with AWS S3 backend to automatically provision spot instances and execute Ansible playbooks for testing blog tutorials on vegastack.com.',
    technologies: ['AWS', 'Terraform', 'Ansible', 'Git', 'GitHub Actions', 'Server-Hardening', 'Zabbix'],
    demo: 'https://vegastack.com',
    category: 'production',
    featured: true,
    metrics: [
      { label: 'IaC', value: 'Terraform' },
      { label: 'Config Mgmt', value: 'Ansible' },
      { label: 'Monitoring', value: 'Zabbix' },
    ],
  },
  {
    id: 'e2e-eks-devsecops',
    title: 'E2E EKS Three-Tier DevSecOps',
    description: 'End-to-end DevSecOps project covering everything from setting up tools to deploying a Three-Tier app on EKS, ensuring data persistence, and implementing full CI/CD pipelines with security scanning.',
    technologies: ['Git', 'Jenkins', 'Docker', 'EKS', 'ECR', 'Helm', 'ArgoCD', 'kubectl', 'Awscli', 'Terraform', 'SonarQube', 'Trivy', 'OWASP', 'Prometheus', 'Grafana'],
    github: 'https://github.com/Uj5Ghare/E2E-EKS-Three-Tier-DevSecOps-Project',
    category: 'devops',
    featured: true,
    metrics: [
      { label: 'Security Tools', value: '3' },
      { label: 'Architecture', value: '3-Tier' },
      { label: 'Platform', value: 'EKS' },
    ],
  },
  {
    id: 'shopstack-microservices',
    title: 'ShopStack-Microservices-Project',
    description: 'ShopStack: E-commerce microservices with GitOps, monitoring, and containerized CI/CD deployment with kubernetes on ArgoCD.',
    technologies: ['Git', 'kubernetes', 'docker-compose', 'kops', 'microservices-architecture', 'hadolint', 'trivy', 'github-workflows', 'ghcr-registry'],
    github: 'https://github.com/Uj5Ghare/ShopStack-Microservices-Project',
    category: 'devops',
    featured: true,
    metrics: [
      { label: 'CI/CD', value: 'GITHUB Actions' },
      { label: 'Registry', value: 'GHCR' },
      { label: 'Orchestration', value: 'Kubernetes' },
    ],
  },
  {
    id: 'grapl-observability-stack',
    title: 'GRAPL-Observability-Stack',
    description: 'A complete on-premises monitoring and observability stack. Collect metrics from your servers, visualize them in dashboards, store and search logs, and get alerts in Slack.',
    technologies: ['Grafana', 'Prometheus', 'Loki', 'Node-Exporter', 'Slack', 'docker-compose', 'Nginx', 'FluentBit'],
    github: 'https://github.com/Uj5Ghare/GRAPL-Observability-Stack',
    category: 'devops',
    featured: true,
    metrics: [
      { label: 'CI/CD', value: 'GITHUB Actions' },
      { label: 'Registry', value: 'GHCR' },
      { label: 'Orchestration', value: 'Kubernetes' },
    ],
  },
  {
    id: 'go-web-app',
    title: 'Go Web App CI/CD Pipeline',
    description: 'Implemented a full CI/CD pipeline and workflow to automate code quality checks, application builds, vulnerability scanning, cloud deployment, and monitoring for a Go web application.',
    technologies: ['Git', 'GitHub Actions', 'GitLab CI/CD', 'Docker', 'EKS', 'Helm', 'Terraform', 'PM2', 'Nginx', 'SonarQube', 'Trivy', 'Zabbix'],
    github: 'https://github.com/Uj5Ghare/Go-Web-App',
    category: 'devops',
    featured: false,
    metrics: [
      { label: 'Pipelines', value: '2' },
      { label: 'Scanning', value: 'Trivy + Sonar' },
      { label: 'Monitoring', value: 'Zabbix' },
    ],
  },

  {
    id: 'argocd-canary',
    title: 'ArgoCD Canary Deployment',
    description: 'Automated the Dockerization of a Go web app using GitHub Actions, deployed it with Argo CD, and managed delivery through a canary deployment strategy.',
    technologies: ['Git', 'GitHub Actions', 'Docker', 'Kubernetes', 'ArgoCD'],
    github: 'https://github.com/Uj5Ghare/ArgoCD-Canary-Deployment',
    category: 'devops',
    featured: false,
  },
  {
    id: 'diabetes-mlops',
    title: 'Diabetes Prediction MLOps',
    description: 'Built and deployed an ML model using a real-world use case: predicting whether a person is diabetic based on health metrics, with full MLOps pipeline on Kubernetes.',
    technologies: ['FastAPI', 'Docker', 'K8s', 'Helm', 'GitHub Actions', 'MLOps'],
    github: 'https://github.com/Uj5Ghare/Diabetes-Prediction-Mlops-Project',
    category: 'devops',
    featured: false,
  },
  {
    id: 'django-todo',
    title: 'Django ToDo App on EKS',
    description: 'Automates the deployment of a Django To-Do application on an EKS cluster, including Docker image creation and AWS Load Balancer setup.',
    technologies: ['Git', 'Jenkins', 'Docker', 'Docker-Compose', 'EKS', 'Helm'],
    github: 'https://github.com/Uj5Ghare/Django-ToDo-App',
    category: 'devops',
    featured: false,
  },
  {
    id: 'bash-scripting',
    title: 'Bash Scripting & Server Hardening',
    description: 'Automates system resource monitoring, security audits, and server hardening using Bash scripts, enhancing security and performance.',
    technologies: ['Bash', 'Ubuntu', 'Server-Hardening', 'Resource-Monitoring'],
    github: 'https://github.com/Uj5Ghare/Bash-Scripting-Project',
    category: 'devops',
    featured: false,
  },
  {
    id: 'mern-todo',
    title: 'MERN ToDo App',
    description: 'Three tier MERN stack application deployment with Docker and docker-compose.',
    technologies: ['MERN Stack', 'Multistage Docker', 'Docker-Compose', 'Nginx'],
    github: 'https://github.com/Uj5Ghare/MERN-ToDo-App',
    category: 'web',
    featured: false,
  },
  {
    id: 'react-portfolio',
    title: 'React Portfolio',
    description: 'A simple portfolio page developed with ReactJS and deployed on GitHub Pages.',
    technologies: ['HTML', 'CSS', 'ReactJS', 'GitHub Pages'],
    github: 'https://github.com/Uj5Ghare/React-Portfolio',
    category: 'web',
    featured: false,
  },
  {
    id: 'responsive-web',
    title: 'Responsive Web Design',
    description: 'Project for learning HTML and CSS with FreeCodeCamp Responsive Web Design Certification Course.',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/Uj5Ghare/Responsive-Web-Designing',
    category: 'web',
    featured: false,
  },
];

export const featuredProjects = projects.filter(p => p.featured);

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'production', label: 'Production' },
  { id: 'devops', label: 'DevOps / Cloud' },
  { id: 'web', label: 'Web Dev' },
];