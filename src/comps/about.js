import React from "react";
import "./../styles/about.css";

const About = () => {
  const skills = [
    "AWS",
    "Kubernetes",
    "Kops",
    "Helm",
    "ArgoCD",
    "Prometheus",
    "Grafana",
    "Loki",
    "ELK Stack",
    "GitHub Actions",
    "GitLab CI/CD",
    "Docker",
    "Docker-Compose",
    "Terraform",
    "Ansible",
    "Nginx",
    "SonarQube",
    "Trivy",
    "Zabbix",
    "Bash",
    "Git",
    "PM2",
    "Linux",
    "Notion",
    "ClickUp",
    "Loom",
  ];
  const basics = [
    "Azure",
    "Python",
    "HTML",
    "CSS",
    "MongoDB",
    "Cloudflare",
    "MCP",
    "N8N",
    "VPN",
    "MLOps"

  ];
  return (
    <section id="about" className="aboutSection sectionHead">
      <div className="aboutContainer">
        <h1>About Me</h1>
        <div className="aboutContent">
          <div className="aboutMe">
            <p>
              <br />
              <br />
              I have over 1.8+ years of experience working with more than two software companies, focusing on software delivery, maintena
              nce, and production environments. My work has involved continuous improvement and automating the entire SDLC using the
              latest DevOps tools and techniques from design and architecture through implementation, deployment, and successful operations.
              <br />
              <br />
              I help software organizations improve the quality of their SDLC, reduce software development and operational costs, and enhance feedback and monitoring. I have in-depth experience in the following domains, supported by real project implementation.
            </p>
          </div>

          <div className="skillsContent">
            <div>
              <h3>My Skills</h3>
              <div className="allSkill">
                {skills.map((skill, index) => {
                  return (
                    <li key={index} className="skill">
                      {skill}
                    </li>
                  );
                })}
              </div>
            </div>
            <div>
              <h3>Fundamentals in,</h3>
              <div className="allSkill">
                {basics.map((basic, index) => {
                  return (
                    <li key={index} className="skill">
                      {basic}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
