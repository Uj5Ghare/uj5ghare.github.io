'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '@/data';
import { fadeInUp, staggerContainer, easeEntrance, durIn } from '@/lib/animations';
import {
  Workflow, Boxes, Cloud, Code2, LineChart, ShieldCheck,
} from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Workflow,
    title: 'CI/CD Automation',
    tag: 'Pipeline Engineering',
    desc: 'Building and migrating robust pipelines that automate the entire software delivery lifecycle from commit to production.',
    tools: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'ArgoCD', 'Argo Workflows', 'Helm'],
  },
  {
    number: '02',
    icon: Boxes,
    title: 'Kubernetes & Containers',
    tag: 'Container Orchestration',
    desc: 'Managing production-grade Kubernetes clusters with high availability, auto-scaling, and GitOps workflows.',
    tools: ['Kubernetes', 'Docker', 'Kops', 'Helm', 'Karpenter', 'Cert-Manager', 'Istio'],
  },
  {
    number: '03',
    icon: Cloud,
    title: 'AWS Cloud Infrastructure',
    tag: 'Cloud Engineering',
    desc: 'Designing and managing scalable, cost-optimized cloud infrastructure with a focus on security and reliability.',
    tools: ['EC2', 'EKS', 'S3', 'RDS', 'VPC', 'Route53', 'CloudWatch', 'IAM', 'Lambda'],
  },
  {
    number: '04',
    icon: Code2,
    title: 'Infrastructure as Code',
    tag: 'IaC & Automation',
    desc: 'Automating infrastructure provisioning and configuration management to ensure repeatability and compliance.',
    tools: ['Terraform', 'Ansible', 'Bash', 'Python', 'CloudFormation'],
  },
  {
    number: '05',
    icon: LineChart,
    title: 'Observability & Monitoring',
    tag: 'SRE & Reliability',
    desc: 'Full-stack observability with metrics, logs, traces, and proactive alerting for production environments.',
    tools: ['Prometheus', 'Grafana', 'Loki', 'AlertManager', 'FluentBit', 'CloudWatch'],
  },
  {
    number: '06',
    icon: ShieldCheck,
    title: 'DevSecOps',
    tag: 'Security Engineering',
    desc: 'Integrating security scanning and compliance checks into CI/CD pipelines as a first-class citizen.',
    tools: ['SonarQube', 'Trivy', 'OWASP', 'Vault', 'Cert-Manager', 'Snyk'],
  },
];

export function Skills() {
  const [activeTab, setActiveTab] = useState<'services' | 'stack'>('services');

  return (
    <section id="skills" className="py-24 lg:py-36 bg-white relative overflow-hidden">
      <div className="blob top-20 right-[10%] w-72 h-72 opacity-40 animate-blob-pulse" style={{ background: '#EFEDFB' }} />
      <div className="blob bottom-10 left-[6%] w-64 h-64 opacity-30 animate-blob-pulse" style={{ background: '#FCE3D5', animationDelay: '1.5s' }} />

      <motion.div
        className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.p variants={fadeInUp} className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 tracking-[0.3em] uppercase mb-4">
          <span className="w-8 h-px bg-indigo-400" /> / Services, Skills, Abilities
        </motion.p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-tight"
          >
            What I do <span className="text-gradient-indigo">best?</span>
          </motion.h2>

          {/* Toggle pill */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-1 p-1 bg-cream-light border border-ink/10 rounded-full self-start sm:self-auto shadow-sm"
          >
            {(['services', 'stack'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeTab === tab ? 'text-white' : 'text-ink-body hover:text-ink'
                }`}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="skills-pill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full shadow-md shadow-indigo-500/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10 capitalize">{tab === 'services' ? 'Services' : 'Tech Stack'}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {/* Services view */}
          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: durIn, ease: easeEntrance }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {services.map((s, i) => (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08, duration: durIn, ease: easeEntrance }}
                  whileHover={{ y: -6, boxShadow: '0 24px 48px -20px rgba(88,58,203,0.35)' }}
                  className="group bg-cream-light border border-ink/10 rounded-2xl p-5 sm:p-8 shadow-sm hover:border-indigo-200 transition-all duration-300 relative overflow-hidden"
                >
                  {/* hover gradient wash */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-violet-50/0 group-hover:from-indigo-50 group-hover:to-violet-50/70 transition-all duration-500 pointer-events-none" />

                  <div className="relative flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.12 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="p-3 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 text-white shadow-lg shadow-indigo-500/30"
                    >
                      <s.icon className="w-6 h-6" />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.3 }}
                      className="text-xs font-bold text-ink-muted border border-ink/10 bg-white px-3 py-1 rounded-full"
                    >
                      {s.tag}
                    </motion.span>
                  </div>

                  <div className="relative text-5xl font-black text-ink/5 group-hover:text-indigo-200/60 absolute top-8 right-6 transition-colors duration-500">
                    {s.number}
                  </div>

                  <h3 className="relative text-xl font-bold text-ink mb-3 group-hover:text-indigo-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="relative text-sm text-ink-body leading-relaxed mb-6">{s.desc}</p>
                  <div className="relative flex flex-wrap gap-2">
                    {s.tools.map((tool, j) => (
                      <motion.span
                        key={tool}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + j * 0.04 }}
                        className="text-xs text-ink-muted border border-ink/10 bg-white rounded-full px-2.5 py-1 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Stack view */}
          {activeTab === 'stack' && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: durIn, ease: easeEntrance }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {skillCategories.map((category, i) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.07, duration: durIn, ease: easeEntrance }}
                  whileHover={{ y: -4, borderColor: '#A3A3EA' }}
                  className="bg-cream-light border border-ink/10 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all"
                >
                  <h3 className="font-bold text-ink text-sm mb-4 flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">{getCategoryIcon(category.category)}</span>
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 + 0.2 }}
                        whileHover={{ scale: 1.06, y: -2 }}
                        className={`text-xs px-2.5 py-1 rounded-full border cursor-default transition-colors ${getSkillStyle(skill.proficiency)}`}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        {activeTab === 'stack' && (
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-ink-muted">
            {[
              { color: 'bg-emerald-50 border-emerald-300 text-emerald-700', label: 'Expert (90%+)' },
              { color: 'bg-indigo-50 border-indigo-300 text-indigo-700', label: 'Advanced (80–89%)' },
              { color: 'bg-violet-50 border-violet-300 text-violet-700', label: 'Intermediate (70–79%)' },
              { color: 'bg-cream-light border-ink/15 text-ink-muted', label: 'Developing' },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded-full border text-xs ${l.color}`}>sample</span>
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
    'Cloud & Infrastructure': '☁️',
    'CI/CD & Automation': '⚙️',
    'Containers & Orchestration': '🐳',
    'Monitoring & Observability': '📊',
    'Security & Code Quality': '🛡️',
    'Tools & Fundamentals': '🛠️',
  };
  return icons[category] || '💻';
}

function getSkillStyle(proficiency?: number): string {
  if (!proficiency) return 'bg-white border-ink/15 text-ink-muted';
  if (proficiency >= 90) return 'bg-emerald-50 border-emerald-300 text-emerald-700';
  if (proficiency >= 80) return 'bg-indigo-50 border-indigo-300 text-indigo-700';
  if (proficiency >= 70) return 'bg-violet-50 border-violet-300 text-violet-700';
  return 'bg-white border-ink/15 text-ink-muted';
}
