'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo, social } from '@/data';
import {
  Github, Linkedin, Mail, Download, ExternalLink, MapPin,
  ArrowRight, Sparkles,
} from 'lucide-react';
import { easeEntrance, durOut } from '@/lib/animations';

const tickerItems = [
  '2+ Years Experience', '15+ Projects Shipped', '4+ Client Projects',
  '$6000+/yr AWS Savings', '3 Companies', '30+ Technologies',
  'Kubernetes at Scale', '3+ Certifications', 'GitOps Practitioner',
];

function TypingAnimation({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const speed = deleting ? 35 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else if (text.length > 0) {
        setText(current.slice(0, text.length - 1));
      } else {
        setDeleting(false);
        setIndex(i => i + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, roles]);

  return (
    <span className="inline-flex items-center gap-1.5">
      <motion.span
        className="inline-block w-1.5 h-6 sm:h-7 rounded-full bg-violet-500"
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <span className="text-violet-600 font-semibold">{text}</span>
    </span>
  );
}

function Blob({ className, color, delay }: { className: string; color: string; delay: number }) {
  return (
    <motion.div
      className={`blob ${className}`}
      style={{ background: color }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: easeEntrance, delay }}
    >
      <div className="w-full h-full animate-blob-pulse" style={{ animationDelay: `${delay}s` }} />
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  // Parallax on scroll — content exits up, panel drifts down slightly
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);

  const doubled = [...tickerItems, ...tickerItems];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex flex-col bg-cream"
    >
      {/* Warm gradient wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 85% 10%, rgba(163,163,234,0.25), transparent 70%),' +
            'radial-gradient(50% 45% at 10% 90%, rgba(252,227,213,0.55), transparent 70%)',
        }}
      />

      {/* Blobs — design.md §4.1 */}
      <Blob className="top-24 left-[8%] w-24 h-24 sm:w-40 sm:h-40 opacity-50" color="#FCE3D5" delay={0.2} />
      <Blob className="bottom-32 left-[30%] w-20 h-20 sm:w-28 sm:h-28 opacity-40" color="#A3A3EA" delay={0.7} />
      <Blob className="top-[22%] right-[36%] w-16 h-16 sm:w-24 sm:h-24 opacity-40" color="#EFEDFB" delay={1.1} />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="flex-1 flex items-center relative z-10"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center">

            {/* ---- Left column ---- */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
              className="space-y-5 sm:space-y-7 order-2 lg:order-1"
            >
              {/* Availability pill */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeEntrance } } }}
                className="flex flex-wrap items-center gap-3"
              >
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-ink/10 shadow-sm text-xs sm:text-sm font-medium text-ink-body">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Available for opportunities
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-ink-muted">
                  <MapPin className="w-3.5 h-3.5" /> Remote
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: durOut, ease: easeEntrance } } }}
                className="text-[clamp(2rem,6vw,5rem)] font-black leading-[1.02] tracking-tight text-ink"
              >
                {personalInfo.name.split(' ')[0]}{' '}
                <span className="text-gradient-indigo">{personalInfo.name.split(' ')[1]}</span>
              </motion.h1>

              {/* Role typing */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } } }}
                className="text-base sm:text-lg sm:text-2xl text-ink-body min-h-[1.5rem] sm:min-h-[2rem]"
              >
                <TypingAnimation roles={personalInfo.roles || ['DevOps Engineer']} />
              </motion.div>

              {/* Bio */}
              <motion.p
                variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeEntrance } } }}
                className="text-ink-body text-sm sm:text-base leading-relaxed max-w-lg border-l-[3px] border-violet-400 pl-4"
              >
                {personalInfo.bio}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeEntrance } } }}
                className="flex flex-wrap gap-2 sm:gap-3 relative z-20 pt-1"
              >
                <motion.button
                  whileHover={{ scale: 1.04, y: -2, boxShadow: '0 16px 32px -12px rgba(88,58,203,0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('projects')}
                  className="group flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-indigo-600 to-violet-500 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/30 cursor-pointer text-sm sm:text-base"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 border-2 border-ink/15 text-ink font-semibold rounded-full hover:border-violet-400 hover:text-violet-600 transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4" /> Get in Touch
                </motion.button>
                <motion.a
                  href="https://canva.link/363qu7m58fy6eax"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 border border-ink/10 bg-white text-ink-body font-semibold rounded-full hover:text-violet-600 hover:border-violet-300 transition-colors text-sm sm:text-base"
                >
                  <Download className="w-4 h-4" /> Resume
                </motion.a>
              </motion.div>

              {/* Socials */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
                className="flex items-center gap-3 relative z-20"
              >
                {[
                  { icon: <Github className="w-5 h-5" />, url: social.github.url, label: 'GitHub' },
                  { icon: <Linkedin className="w-5 h-5" />, url: social.linkedin.url, label: 'LinkedIn' },
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                      </svg>
                    ),
                    url: social.leetcode.url,
                    label: 'Medium',
                  },
                  { icon: <Mail className="w-5 h-5" />, url: `mailto:${personalInfo.email}`, label: 'Email' },
                ].map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    initial={{ opacity: 0, y: 12, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, type: 'spring', damping: 18, stiffness: 260 }}
                    whileHover={{ scale: 1.15, y: -4, rotate: 4, borderColor: '#A3A3EA' }}
                    whileTap={{ scale: 0.92 }}
                    className="p-2 sm:p-2.5 rounded-full bg-white border border-ink/10 text-ink-body hover:text-indigo-600 shadow-sm transition-colors cursor-pointer"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* ---- Right column: indigo panel + mockup card (design.md §4.1) ---- */}
            <motion.div
              style={{ y: panelY }}
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: easeEntrance, delay: 0.25 }}
              className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              {/* Glow behind panel */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-[2.5rem] blur-2xl"
                style={{
                  background: 'radial-gradient(closest-side, rgba(88,58,203,0.35), transparent 75%)',
                }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Indigo panel */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative w-[min(320px,82vw)] sm:w-[min(420px,88vw)] aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-600 shadow-2xl shadow-indigo-600/40 p-4 sm:p-6 lg:p-8 overflow-hidden"
              >
                {/* Panel inner texture */}
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 40%), linear-gradient(160deg, transparent 60%, rgba(0,0,0,0.25))',
                  }}
                />
                {/* Rotating decorative ring */}
                <motion.div
                  className="absolute -right-16 -top-16 w-48 h-48 rounded-full border border-white/15"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full border border-dashed border-white/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                />

                {/* Panel header chips */}
                <div className="relative flex items-center justify-between mb-4 sm:mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5" /> DevOps · SRE
                  </span>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300" />
                  </span>
                </div>

                {/* Mockup window card (design.md §5) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.7, type: 'spring', damping: 22, stiffness: 240 }}
                  className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  {/* Window title bar with traffic dots */}
                  <div className="flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 bg-cream-light border-b border-ink/10">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
                    <span className="ml-2 text-[10px] sm:text-[11px] text-ink-muted font-mono">ujwal@devops ~ kubectl</span>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-5 space-y-2 sm:space-y-3 font-mono text-[10px] sm:text-[11px] lg:text-[12px] leading-relaxed">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">❯</span>
                      <span className="text-ink-body">kubectl get deployments</span>
                    </div>
                    {['backend-api', 'web-app', 'worker'].map((app, i) => (
                      <motion.div
                        key={app}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.15 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cream"
                      >
                        <span className="text-indigo-600 font-semibold">{app}</span>
                        <span className="text-ink-muted flex-1 text-right">3/3</span>
                        <span className="px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">READY</span>
                      </motion.div>
                    ))}
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-green-600 font-bold">❯</span>
                      <span className="inline-block w-1.5 h-3.5 bg-indigo-600 align-middle animate-pulse" />
                    </div>
                  </div>
                </motion.div>

                {/* Bottom stat row */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="relative mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3"
                >
                  {[
                    { v: '2+', l: 'Years' },
                    { v: '15+', l: 'Projects' },
                    { v: '$6k', l: 'Saved /yr' },
                  ].map((s) => (
                    <motion.div
                      key={s.l}
                      whileHover={{ scale: 1.06 }}
                      className="bg-white/10 border border-white/15 rounded-lg sm:rounded-xl px-2 py-2 sm:px-3 sm:py-3 text-center backdrop-blur-sm"
                    >
                      <div className="text-base sm:text-xl font-black text-white">{s.v}</div>
                      <div className="text-[8px] sm:text-[10px] text-white/70 font-medium uppercase tracking-wider">{s.l}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Floating tech tags */}
              {[
                { label: 'Kubernetes', x: '-6%', y: '18%', delay: 1.6 },
                { label: 'AWS', x: '88%', y: '46%', delay: 1.8 },
                { label: 'ArgoCD', x: '-8%', y: '72%', delay: 2.0 },
                { label: 'Terraform', x: '86%', y: '86%', delay: 2.2 },
              ].map((tag) => (
                <motion.span
                  key={tag.label}
                  className="absolute hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-ink/10 text-xs font-bold text-indigo-700 shadow-lg shadow-indigo-500/10"
                  style={{ left: tag.x, top: tag.y }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 1, 1, 0.9, 1],
                    y: [0, -10, 0, -6, 0],
                    scale: 1,
                  }}
                  transition={{
                    opacity: { delay: tag.delay, duration: 0.6 },
                    y: { delay: tag.delay + 0.4, duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
                    scale: { delay: tag.delay, duration: 0.5 },
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  {tag.label}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scrolling ticker (design.md — marquee) */}
      <div className="relative z-10 border-t border-ink/10 bg-white/60 backdrop-blur-sm py-3 sm:py-4 overflow-hidden marquee-mask">
        <div className="animate-marquee flex whitespace-nowrap">
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-6 px-6 flex-shrink-0">
              <span className="text-sm font-semibold text-ink-body uppercase tracking-widest">
                {item}
              </span>
              <span className="text-indigo-300 text-base">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
