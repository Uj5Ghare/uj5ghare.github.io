'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, stats } from '@/data';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { useScrollAnimation } from '@/lib/hooks';

export function About() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 });

  const highlights = [
    { label: 'Years of Experience', value: '2+', color: 'text-blue-400' },
    { label: 'Projects Shipped', value: stats.projects, color: 'text-cyan-400' },
    { label: 'Client Projects', value: stats.usersServed, color: 'text-purple-400' },
    { label: 'AWS Cost Savings/yr', value: stats.cgpa, color: 'text-green-400' },
  ];

  const domains = [
    { icon: '⎈', title: 'Cloud Infrastructure', desc: 'AWS · Kubernetes · Kops · Helm · ArgoCD · GitOps' },
    { icon: '🔭', title: 'Observability', desc: 'Grafana · Prometheus · Loki · AlertManager · FluentBit' },
    { icon: '⚡', title: 'CI/CD Automation', desc: 'GitHub Actions · GitLab CI/CD · Jenkins · Argo Workflows' },
    { icon: '💡', title: 'Cost Optimization', desc: '$500+/mo savings through usage analysis & resource tuning' },
  ];

  return (
    <section id="about" className="py-24 lg:py-36 bg-[#0a0a0a]">
      <motion.div
        ref={ref}
        className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        {/* Small section label */}
        <motion.p
          variants={fadeInUp}
          className="text-xs font-semibold text-[#555] tracking-[0.3em] uppercase mb-4"
        >
          / About Me
        </motion.p>

        {/* Large headline */}
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-16 max-w-4xl"
        >
          DevOps Engineer. <span className="text-blue-400">Cloud Builder.</span>{' '}
          Infrastructure{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Automator.
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — terminal + stats + CTAs */}
          <motion.div variants={staggerItem} className="space-y-8">
            {/* Terminal card */}
            <div className="bg-[#0e0e0e] border border-[#2a2a2a] rounded-2xl overflow-hidden font-mono text-sm">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-[#2a2a2a]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-[#444] select-none">ujwal@devops ~ zsh</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 space-y-3 text-[13px] leading-relaxed">
                <div>
                  <span className="text-green-400">ujwal@devops</span>
                  <span className="text-[#555]">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-[#555]">$ </span>
                  <span className="text-white">cat about.yml</span>
                </div>
                <div className="pl-2 space-y-1 text-[#888]">
                  <div><span className="text-cyan-400">name</span><span className="text-[#555]">:</span> <span className="text-yellow-300">Ujwal Pachghare</span></div>
                  <div><span className="text-cyan-400">role</span><span className="text-[#555]">:</span> <span className="text-yellow-300">DevOps &amp; Cloud Engineer</span></div>
                  <div><span className="text-cyan-400">company</span><span className="text-[#555]">:</span> <span className="text-yellow-300">Digiflux Technologies</span></div>
                  <div><span className="text-cyan-400">location</span><span className="text-[#555]">:</span> <span className="text-yellow-300">Vadodara, India</span></div>
                  <div><span className="text-cyan-400">experience</span><span className="text-[#555]">:</span> <span className="text-green-300">2+ years</span></div>
                  <div><span className="text-cyan-400">focus</span><span className="text-[#555]">:</span> <span className="text-[#888]">[</span><span className="text-orange-300">K8s, AWS, CI/CD, SRE</span><span className="text-[#888]">]</span></div>
                </div>
                <div className="pt-1">
                  <span className="text-green-400">ujwal@devops</span>
                  <span className="text-[#555]">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-[#555]">$ </span>
                  <span className="text-white">kubectl get nodes</span>
                </div>
                <div className="pl-2 space-y-1">
                  <div className="text-[#555] text-xs">NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS&nbsp;&nbsp;&nbsp;ROLES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AGE</div>
                  <div className="text-[#888] text-xs">prod-cluster-1&nbsp;&nbsp;<span className="text-green-400">Ready</span>&nbsp;&nbsp;&nbsp;control-plane&nbsp;&nbsp;14m</div>
                  <div className="text-[#888] text-xs">prod-cluster-2&nbsp;&nbsp;<span className="text-green-400">Ready</span>&nbsp;&nbsp;&nbsp;control-plane&nbsp;&nbsp;9m</div>
                </div>
                <div className="pt-1">
                  <span className="text-green-400">ujwal@devops</span>
                  <span className="text-[#555]">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-[#555]">$ </span>
                  <motion.span
                    className="inline-block w-2 h-4 bg-white align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                  />
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5">
                  <div className={`text-3xl font-black mb-1 ${h.color}`}>{h.value}</div>
                  <div className="text-xs text-[#666] font-medium uppercase tracking-wider">{h.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:ujwal5ghare@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
              <a
                href="https://canva.link/xf0iomrlfurnyq4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#333] hover:border-[#555] text-[#888] hover:text-white text-sm font-medium rounded-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right — story */}
          <motion.div variants={staggerItem} className="space-y-10">
            <div className="space-y-5 text-[#888] leading-relaxed">
              <p className="text-lg text-[#aaa]">
                I have over{' '}
                <strong className="text-white">2+ years of experience</strong> working with
                software companies, focusing on software delivery, maintenance, and production
                environments. My work involves continuous improvement and automating the entire
                SDLC using the latest DevOps tools and techniques.
              </p>
              <p>
                I help organizations{' '}
                <strong className="text-[#ccc]">improve the quality of their SDLC</strong>, reduce
                software development and operational costs, and enhance feedback and monitoring
                — all backed by real project implementation.
              </p>
              <blockquote className="border-l-2 border-blue-500 pl-5 italic text-[#666]">
                &quot;Automate everything, monitor everything, and always be improving. Reliability
                is not a feature — it&apos;s the foundation.&quot;
              </blockquote>
            </div>

            {/* Domain expertise */}
            <div>
              <h3 className="text-xs font-semibold text-[#555] tracking-[0.3em] uppercase mb-6">
                / Domain Expertise
              </h3>
              <div className="space-y-4">
                {domains.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-[#111] border border-[#2a2a2a] rounded-xl hover:border-[#3a3a3a] transition-colors"
                  >
                    <span className="text-2xl flex-shrink-0">{d.icon}</span>
                    <div>
                      <p className="font-semibold text-white text-sm mb-0.5">{d.title}</p>
                      <p className="text-xs text-[#666]">{d.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current role */}
            <div className="flex items-start gap-4 p-5 bg-blue-950/20 border border-blue-500/20 rounded-xl">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">Currently at Digiflux Technologies</p>
                <p className="text-sm text-[#666] leading-relaxed">
                  Working as <strong className="text-[#888]">Associate Software Engineer</strong>,
                  overseeing Kubernetes environments for two production projects, driving SRE
                  functions, and implementing cost-saving AWS optimizations.
                </p>
              </div>
            </div>

            <a
              href="#experience"
              onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
            >
              View full experience
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
