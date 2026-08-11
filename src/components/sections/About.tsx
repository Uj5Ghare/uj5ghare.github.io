'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, stats } from '@/data';
import { Download, Mail, ArrowRight, Cloud, Activity, Zap, PiggyBank } from 'lucide-react';
import { fadeInUp, staggerContainer, easeEntrance } from '@/lib/animations';

function useCountUp(end: number, duration = 1800) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf: number;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * p); // easeOutExpo
      setValue(Math.round(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return { ref, value };
}

function StatCard({ value, label, suffix = '', delay }: { value: number; label: string; suffix?: string; delay: number }) {
  const { ref, value: count } = useCountUp(value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay, duration: 0.5, ease: easeEntrance }}
      whileHover={{ y: -4, boxShadow: '0 16px 32px -16px rgba(88,58,203,0.35)', borderColor: '#A3A3EA' }}
      className="card-surface p-5 text-center"
    >
      <div ref={ref} className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 mb-1">
        {count}{suffix}
      </div>
      <div className="text-[11px] text-ink-muted font-semibold uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

const domains = [
  { icon: Cloud, title: 'Cloud Infrastructure', desc: 'AWS · Kubernetes · Kops · Helm · ArgoCD · GitOps' },
  { icon: Activity, title: 'Observability', desc: 'Grafana · Prometheus · Loki · AlertManager · FluentBit' },
  { icon: Zap, title: 'CI/CD Automation', desc: 'GitHub Actions · GitLab CI/CD · Jenkins · Argo Workflows' },
  { icon: PiggyBank, title: 'Cost Optimization', desc: '$500+/mo savings through usage analysis & resource tuning' },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-36 bg-white relative overflow-hidden">
      {/* subtle blobs */}
      <div className="blob top-40 -left-20 w-72 h-72 opacity-40 animate-blob-pulse" style={{ background: '#EFEDFB' }} />
      <div className="blob bottom-24 -right-16 w-80 h-80 opacity-40 animate-blob-pulse" style={{ background: '#FCE3D5', animationDelay: '2s' }} />

      <motion.div
        className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        {/* Eyebrow */}
        <motion.p variants={fadeInUp} className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 tracking-[0.3em] uppercase mb-4">
          <span className="w-8 h-px bg-indigo-400" /> / About Me
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-[1.05] mb-16 max-w-4xl"
        >
          DevOps Engineer.{' '}
          <span className="text-gradient-indigo">Cloud Builder.</span> Infrastructure{' '}
          <span className="relative inline-block">
            <span className="text-gradient-warm">Automator.</span>
            <motion.span
              className="absolute left-0 -bottom-1 w-full h-2 rounded-full bg-gradient-to-r from-gold/40 to-peach-deep/40 -z-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7, ease: easeEntrance }}
            />
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ---- Left: terminal + stats + CTAs ---- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: easeEntrance }}
            className="space-y-8"
          >
            {/* Terminal card */}
            <motion.div
              whileHover={{ y: -4, rotate: -0.3 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="bg-cream-light border border-ink/10 rounded-2xl overflow-hidden font-mono text-sm shadow-lg shadow-indigo-500/5"
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-ink/10">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-ink-muted select-none">ujwal@devops ~ zsh</span>
              </div>
              <div className="p-5 space-y-3 text-[13px] leading-relaxed">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-green-600 font-semibold">ujwal@devops</span>
                  <span className="text-ink-muted">:</span>
                  <span className="text-indigo-600">~</span>
                  <span className="text-ink-muted">$ </span>
                  <span className="text-ink font-semibold">cat about.yml</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="pl-2 space-y-1 text-ink-body"
                >
                  <div><span className="text-violet-600">name</span><span className="text-ink-muted">:</span> <span className="text-amber-600">Ujwal Pachghare</span></div>
                  <div><span className="text-violet-600">role</span><span className="text-ink-muted">:</span> <span className="text-amber-600">DevOps &amp; Cloud Engineer</span></div>
                  <div><span className="text-violet-600">company</span><span className="text-ink-muted">:</span> <span className="text-amber-600">Digiflux Technologies</span></div>
                  <div><span className="text-violet-600">location</span><span className="text-ink-muted">:</span> <span className="text-amber-600">Vadodara, India</span></div>
                  <div><span className="text-violet-600">experience</span><span className="text-ink-muted">:</span> <span className="text-green-600">2+ years</span></div>
                  <div>
                    <span className="text-violet-600">focus</span><span className="text-ink-muted">:</span>{' '}
                    <span className="text-ink-muted">[</span><span className="text-orange-500">K8s, AWS, CI/CD, SRE</span><span className="text-ink-muted">]</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="pt-1"
                >
                  <span className="text-green-600 font-semibold">ujwal@devops</span>
                  <span className="text-ink-muted">:</span>
                  <span className="text-indigo-600">~</span>
                  <span className="text-ink-muted">$ </span>
                  <span className="text-ink font-semibold">kubectl get nodes</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="pl-2 space-y-1"
                >
                  <div className="text-ink-muted text-xs">NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS&nbsp;&nbsp;&nbsp;ROLES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AGE</div>
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                    className="text-ink-body text-xs"
                  >
                    prod-cluster-1&nbsp;&nbsp;<span className="text-green-600">Ready</span>&nbsp;&nbsp;&nbsp;control-plane&nbsp;&nbsp;14m
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.25 }}
                    className="text-ink-body text-xs"
                  >
                    prod-cluster-2&nbsp;&nbsp;<span className="text-green-600">Ready</span>&nbsp;&nbsp;&nbsp;control-plane&nbsp;&nbsp;9m
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                  className="pt-1"
                >
                  <span className="text-green-600 font-semibold">ujwal@devops</span>
                  <span className="text-ink-muted">:</span>
                  <span className="text-indigo-600">~</span>
                  <span className="text-ink-muted">$ </span>
                  <motion.span
                    className="inline-block w-2 h-4 bg-indigo-600 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Stats grid — count-up */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard value={2} suffix="+" label="Years of Experience" delay={0} />
              <StatCard value={15} suffix="+" label="Projects Shipped" delay={0.1} />
              <StatCard value={4} suffix="+" label="Client Projects" delay={0.2} />
              <StatCard value={6000} suffix="$+/yr" label="AWS Cost Savings" delay={0.3} />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="mailto:ujwal5ghare@gmail.com"
                whileHover={{ y: -2, boxShadow: '0 14px 28px -12px rgba(88,58,203,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-500 text-white text-sm font-semibold rounded-full shadow-md shadow-indigo-500/25"
              >
                <Mail className="w-4 h-4" /> Send Email
              </motion.a>
              <motion.a
                href="https://canva.link/363qu7m58fy6eax"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 border-2 border-ink/15 text-ink text-sm font-semibold rounded-full hover:border-violet-400 hover:text-violet-600 transition-colors"
              >
                <Download className="w-4 h-4" /> Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* ---- Right: story + domain expertise ---- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: easeEntrance }}
            className="space-y-10"
          >
            <div className="space-y-5 text-ink-body leading-relaxed">
              <p className="text-lg text-ink">
                I have over{' '}
                <strong className="text-indigo-600">2+ years of experience</strong> working with
                software companies, focusing on software delivery, maintenance, and production
                environments. My work involves continuous improvement and automating the entire
                SDLC using the latest DevOps tools and techniques.
              </p>
              <p>
                I help organizations{' '}
                <strong className="text-ink">improve the quality of their SDLC</strong>, reduce
                software development and operational costs, and enhance feedback and monitoring
                — all backed by real project implementation.
              </p>
              <motion.blockquote
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: easeEntrance }}
                className="border-l-[3px] border-violet-400 pl-5 italic text-ink-muted"
              >
                &quot;Automate everything, monitor everything, and always be improving. Reliability
                is not a feature — it&apos;s the foundation.&quot;
              </motion.blockquote>
            </div>

            {/* Domain expertise */}
            <div>
              <h3 className="text-xs font-bold text-indigo-600 tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-indigo-400" /> Domain Expertise
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {domains.map((d, i) => (
                  <motion.div
                    key={d.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: easeEntrance }}
                    whileHover={{ y: -5, borderColor: '#A3A3EA', boxShadow: '0 16px 32px -16px rgba(88,58,203,0.3)' }}
                    className="flex items-start gap-4 p-4 bg-white border border-ink/10 rounded-2xl shadow-sm transition-colors"
                  >
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 flex-shrink-0"
                    >
                      <d.icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <p className="font-bold text-ink text-sm mb-0.5">{d.title}</p>
                      <p className="text-xs text-ink-muted">{d.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current role */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: easeEntrance }}
              className="relative flex items-start gap-4 p-5 bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{ background: 'radial-gradient(circle at 100% 0%, rgba(163,163,234,0.5), transparent 60%)' }}
              />
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full mt-2 animate-pulse flex-shrink-0" />
              <div className="relative">
                <p className="text-sm font-bold text-ink mb-1">Currently at Digiflux Technologies</p>
                <p className="text-sm text-ink-body leading-relaxed">
                  Working as <strong className="text-indigo-600">Associate Software Engineer</strong>,
                  overseeing Kubernetes environments for two production projects, driving SRE
                  functions, and implementing cost-saving AWS optimizations.
                </p>
              </div>
            </motion.div>

            <a
              href="#experience"
              onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-violet-600 font-bold transition-colors cursor-pointer group"
            >
              View full experience
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
