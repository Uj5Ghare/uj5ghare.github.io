'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { useScrollAnimation } from '@/lib/hooks';

const services = [
  {
    number: '01',
    title: 'CI/CD Automation',
    tag: 'Pipeline Engineering',
    desc: 'Building and migrating robust pipelines that automate the entire software delivery lifecycle from commit to production.',
    tools: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'ArgoCD', 'Argo Workflows', 'Helm'],
  },
  {
    number: '02',
    title: 'Kubernetes & Containers',
    tag: 'Container Orchestration',
    desc: 'Managing production-grade Kubernetes clusters with high availability, auto-scaling, and GitOps workflows.',
    tools: ['Kubernetes', 'Docker', 'Kops', 'Helm', 'Karpenter', 'Cert-Manager', 'Istio'],
  },
  {
    number: '03',
    title: 'AWS Cloud Infrastructure',
    tag: 'Cloud Engineering',
    desc: 'Designing and managing scalable, cost-optimized cloud infrastructure with a focus on security and reliability.',
    tools: ['EC2', 'EKS', 'S3', 'RDS', 'VPC', 'Route53', 'CloudWatch', 'IAM', 'Lambda'],
  },
  {
    number: '04',
    title: 'Infrastructure as Code',
    tag: 'IaC & Automation',
    desc: 'Automating infrastructure provisioning and configuration management to ensure repeatability and compliance.',
    tools: ['Terraform', 'Ansible', 'Bash', 'Python', 'CloudFormation'],
  },
  {
    number: '05',
    title: 'Observability & Monitoring',
    tag: 'SRE & Reliability',
    desc: 'Full-stack observability with metrics, logs, traces, and proactive alerting for production environments.',
    tools: ['Prometheus', 'Grafana', 'Loki', 'AlertManager', 'FluentBit', 'CloudWatch'],
  },
  {
    number: '06',
    title: 'DevSecOps',
    tag: 'Security Engineering',
    desc: 'Integrating security scanning and compliance checks into CI/CD pipelines as a first-class citizen.',
    tools: ['SonarQube', 'Trivy', 'OWASP', 'Vault', 'Cert-Manager', 'Snyk'],
  },
];

export function Skills() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 });
  const [activeTab, setActiveTab] = useState<'services' | 'stack'>('services');

  return (
    <section id="skills" className="py-24 lg:py-36 bg-[#060606]">
      <motion.div
        ref={ref}
        className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.p
          variants={fadeInUp}
          className="text-xs font-semibold text-[#555] tracking-[0.3em] uppercase mb-4"
        >
          / Services, Skills, Abilities
        </motion.p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            What I do <span className="text-blue-400">best?</span>
          </motion.h2>
          {/* Toggle */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-1 p-1 bg-[#111] border border-[#2a2a2a] rounded-lg self-start sm:self-auto"
          >
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'services' ? 'bg-blue-600 text-white' : 'text-[#666] hover:text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'stack' ? 'bg-blue-600 text-white' : 'text-[#666] hover:text-white'
              }`}
            >
              Tech Stack
            </button>
          </motion.div>
        </div>

        {/* Services view */}
        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]"
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#060606] p-8 hover:bg-[#0e0e0e] transition-colors group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-black text-[#1a1a1a] group-hover:text-[#222] transition-colors leading-none">
                    {s.number}
                  </span>
                  <span className="text-xs font-medium text-[#555] border border-[#2a2a2a] px-2.5 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs text-[#555] border border-[#222] rounded px-2 py-0.5 hover:border-blue-500/40 hover:text-[#888] transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Stack view */}
        {activeTab === 'stack' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#3a3a3a] transition-colors"
              >
                <h3 className="font-bold text-white text-sm mb-4 flex items-center gap-2">
                  <span className="text-lg">{getCategoryIcon(category.category)}</span>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${getSkillStyle(skill.proficiency)}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Legend (stack view only) */}
        {activeTab === 'stack' && (
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-[#555]">
            {[
              { color: 'bg-green-500/20 border-green-500/40 text-green-400', label: 'Expert (90%+)' },
              { color: 'bg-blue-500/20 border-blue-500/40 text-blue-400', label: 'Advanced (80–89%)' },
              { color: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400', label: 'Intermediate (70–79%)' },
              { color: 'bg-[#222] border-[#333] text-[#666]', label: 'Developing' },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded-full border text-xs ${l.color}`}>example</span>
                <span>{l.label}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'Languages': '🔤',
    'Frameworks & Libraries': '⚛️',
    'AI/ML & Data Science': '🤖',
    'Cloud & DevOps': '☁️',
    'Databases': '💾',
    'Tools & Platforms': '🛠️',
  };
  return icons[category] || '💻';
}

function getSkillStyle(proficiency?: number): string {
  if (!proficiency) return 'bg-[#1a1a1a] border-[#2a2a2a] text-[#666]';
  if (proficiency >= 90) return 'bg-green-500/10 border-green-500/30 text-green-400';
  if (proficiency >= 80) return 'bg-blue-500/10 border-blue-500/30 text-blue-400';
  if (proficiency >= 70) return 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400';
  return 'bg-[#1a1a1a] border-[#2a2a2a] text-[#666]';
}
