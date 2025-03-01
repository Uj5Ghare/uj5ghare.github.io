import React from "react";
import "./../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experienceSection sectionHead">
      <div className="experienceContainer">
        <h1>Experience</h1>
        <div className="expContainer">

          <div className="expBox">
            <div className="expAlign">
              <h4>Associate Software Engineer</h4>
              <h5>
                <a
                  href="https://www.linkedin.com/company/digiflux-technologies-pvt-ltd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Digiflux Technologies Pvt Ltd
                </a>
              </h5>
            </div>
            <div className="dateLocation">
              <p className="jobLocation">Vadodara, Gujrat</p>
              <p>January 2025 - Present</p>
            </div>
            <ul>
              <li>
                Worked on AWS cost optimization and found cost saving opportunities that helps us saving $400+ dollers per month on 1 project only.
              </li>
              <li>
                Managing 2 Projects of Kubernetes with Kops and Helm as package manager.
              </li>
              <li>
                Setup and configured Monitoring with Grafana, Prometheus and Loki.
              </li>
              <li>
                Handling SRE part of microservice applications with K8s, Grafana, Prometheus and Loki.
              </li>
              <li>
                <b>Tech Stack:</b> - AWS, Kubernetes, Helm, GitLab CI/CD, Docker-Compose, Terraform, Ansible, Bash, Python, Grafana, Prometheus, Loki
              </li>
            </ul>
          </div>

          <div className="expBox">
            <div className="expAlign">
              <h4>DevOps Associate</h4>
              <h5>
                <a
                  href="https://www.linkedin.com/company/vegastack/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @VegaStack (PeerXP Services Pvt Ltd)
                </a>
              </h5>
            </div>
            <div className="dateLocation">
              <p className="jobLocation">Bangalore</p>
              <p>March 2024 - Sept 2024</p>
            </div>
            <ul>
              <li>
                Migrated Client's <b>GitLab CI/CD</b> pipelines to <b>GitHub Workflows.</b>
              </li>
              <li>
                Conducted R&D on different workflows stratagies and Developed <b>custom composite actions</b> and <b>reuseable GitHub workflows</b> for client's and internal projects.
              </li>
              <li>
                Automated deployment of complex web apps <b>(Django, NextJS, ReactJS)</b> with <b>Nginx</b> as load balancer using <b>GitLab CI/CD</b>
              </li>
              <li>
                Created Terraform manifests with aws s3 as backend to automatically spin up spot instances and run Ansible playbooks on it. <b>(Ansible playbooks for testing blog tutorials)</b>
              </li>
              <li>
                Created <b>Dockerfiles and docker-compose files</b> for frontend, backend, databases and rabbitmq.
              </li>
              <li>
                Implemented proactive monitoring of servers with <b>Zabbix server 7.0</b> and <b>Zabbix agent 2</b>
              </li>
              <li>
                <b>Tech Stack:</b> - AWS, GitLab CI/CD, GitHub Actions, Docker, Docker-Compose, Terraform, Ansible, Zabbix, Nginx
              </li>
            </ul>
          </div>

          <div className="expBox">
            <div className="expAlign">
              <h4>Cloud Computing</h4>
              <h5>
                <a href="https://in.linkedin.com/company/extion-infotech" target="_blank" rel="noreferrer">
                  @Extion Infotech Technologies
                </a>
              </h5>
            </div>
            <div className="dateLocation">
              <p className="jobLocation"> Remote</p>
              <p>Jan 2024 - Feb 2024</p>
            </div>
            <ul>
              <li>
                Achieved <b>99.9%</b> uptime with auto-scaling by deploying web applications using Serverless Amazon Elastic Beanstalk.
              </li>
              <li>
                Developed a serverless app that uses <b>API Gateway and AWS Lambda</b> to reduce operating costs.
              </li>
              <li>
                Managed data across various <b>Amazon S3</b> buckets, applying lifecycle policies that lowered storage costs while ensuring <b>99.99%</b> durability.
              </li>
              <li>
                <b>Achievement:</b> Chosen as one of the top 5 outstanding performers.
              </li>
              <li>
                <b>Tech Stack:</b> AWS EC2, AWS S3, Amazon Elastic Beanstalk, AWS Lambda, AWS API Gateway
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
