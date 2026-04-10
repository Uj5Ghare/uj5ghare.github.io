'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo, social } from '@/data';
import { Github, Linkedin, Mail, Download, ExternalLink, MapPin } from 'lucide-react';

const tickerItems = [
  '2+ Years Experience',
  '15+ Projects Shipped',
  '4+ Client Projects',
  '$6000+/yr AWS Savings',
  '3 Companies',
  '30+ Technologies',
  'Kubernetes at Scale',
  '3+ Certifications',
  'GitOps Practitioner',
  '5+ DevSecOps Tools',
];

const floatingTags = [
  { label: 'Kubernetes', color: 'text-blue-400 border-blue-500/30 bg-blue-500/5', x: '72%', y: '12%', delay: 0 },
  { label: 'AWS', color: 'text-orange-400 border-orange-500/30 bg-orange-500/5', x: '58%', y: '30%', delay: 0.4 },
  { label: 'Terraform', color: 'text-purple-400 border-purple-500/30 bg-purple-500/5', x: '80%', y: '55%', delay: 0.8 },
  { label: 'ArgoCD', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5', x: '62%', y: '72%', delay: 1.2 },
  { label: 'Docker', color: 'text-sky-400 border-sky-500/30 bg-sky-500/5', x: '88%', y: '78%', delay: 0.6 },
  { label: 'Prometheus', color: 'text-red-400 border-red-500/30 bg-red-500/5', x: '55%', y: '88%', delay: 1.0 },
];

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    interface Particle { x: number; y: number; vx: number; vy: number; r: number; a: number }
    const N = 55;
    const pts: Particle[] = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.4 + 0.4,
      a: Math.random() * 0.35 + 0.08,
    }));

    const MAX = 130;

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      });

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96,165,250,${(1 - d / MAX) * 0.12})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${p.a})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(tick);
    };

    tick();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

function MouseSpotlight() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
      style={{
        background: `radial-gradient(550px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.07), transparent 70%)`,
      }}
    />
  );
}

function TypingAnimation({ roles }: { roles: string[] }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const speed = isDeleting ? 40 : 90;

    const t = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-blue-400">{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="w-0.5 h-6 sm:h-7 bg-blue-400 inline-block"
      />
    </span>
  );
}

export function HeroEnhanced() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const doubled = [...tickerItems, ...tickerItems];

  return (
    <>
      <MouseSpotlight />

      <section id="home" className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex flex-col">
        {/* Particle network */}
        <div className="absolute inset-0 z-0">
          <ParticleField />
        </div>

        {/* Dot grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Animated glow blobs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.3, 1], x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />

        {/* Main content */}
        <div className="flex-1 flex items-center relative z-10">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-28 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left column */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-8 order-2 lg:order-1"
              >
                {/* Availability + Location */}
                <motion.div
                  className="flex flex-wrap items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                    <span className="text-sm text-[#888]">Available for opportunities</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-[#666]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Remote</span>
                  </div>
                </motion.div>

                {/* Name display */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  <h1 className="text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-[1.05] tracking-tighter uppercase whitespace-nowrap">
                    <span className="text-white">{personalInfo.name.split(' ')[0]}</span>
                    {' '}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {personalInfo.name.split(' ')[1]}
                    </span>
                  </h1>
                </motion.div>

                {/* Role */}
                <motion.div
                  className="text-xl sm:text-2xl font-medium text-[#888] min-h-[2rem]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <TypingAnimation roles={personalInfo.roles || ['DevOps Engineer']} />
                </motion.div>

                {/* Bio */}
                <motion.p
                  className="text-[#666] text-base leading-relaxed max-w-lg border-l-2 border-[#2a2a2a] pl-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {personalInfo.bio}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  className="flex flex-wrap gap-3 relative z-20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59,130,246,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => scrollToSection('projects')}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors cursor-pointer"
                    style={{ pointerEvents: 'auto' }}
                  >
                    View My Work
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center gap-2 px-6 py-3 border border-[#333] hover:border-blue-500/50 text-white font-medium rounded-lg transition-all cursor-pointer"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => window.open('https://canva.link/xf0iomrlfurnyq4', '_blank')}
                    className="flex items-center gap-2 px-6 py-3 border border-[#333] hover:border-[#555] text-[#888] hover:text-white font-medium rounded-lg transition-all cursor-pointer"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Download className="w-4 h-4" />
                    Resume
                  </motion.button>
                </motion.div>

                {/* Social icons */}
                <motion.div
                  className="flex items-center gap-3 relative z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      whileHover={{ scale: 1.2, y: -4, borderColor: 'rgba(96,165,250,0.6)' }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 rounded-lg bg-[#111] border border-[#2a2a2a] text-[#666] hover:text-white transition-all cursor-pointer"
                      style={{ pointerEvents: 'auto' }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right column — profile photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                className="flex justify-center lg:justify-end order-1 lg:order-2 relative"
              >
                {/* Floating tech tags */}
                {floatingTags.map((tag) => (
                  <motion.div
                    key={tag.label}
                    className={`absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-sm ${tag.color}`}
                    style={{ left: tag.x, top: tag.y }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{
                      opacity: [0, 1, 1, 0.8, 1],
                      y: [0, -6, 0, 6, 0],
                      scale: 1,
                    }}
                    transition={{
                      opacity: { delay: tag.delay + 1, duration: 0.5 },
                      y: { delay: tag.delay + 1.5, duration: 4 + tag.delay, repeat: Infinity, ease: 'easeInOut' },
                      scale: { delay: tag.delay + 1, duration: 0.4 },
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                    {tag.label}
                  </motion.div>
                ))}

                <div className="relative">
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute -inset-6 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Static ring */}
                  <div className="absolute -inset-4 rounded-full border border-[#2a2a2a]" />

                  {/* Rotating dashed ring */}
                  <motion.div
                    className="absolute -inset-8 rounded-full border border-dashed border-blue-500/25"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Reverse rotating ring */}
                  <motion.div
                    className="absolute -inset-14 rounded-full border border-dashed border-cyan-500/10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Photo */}
                  <motion.div
                    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-[#2a2a2a]"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/images/hero/profile.png"
                      alt="Ujwal Pachghare"
                      fill
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />
                  </motion.div>

                  {/* Floating stat badge — right */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(96,165,250,0.4)' }}
                    className="absolute -right-4 top-8 bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-center shadow-xl cursor-default"
                  >
                    <motion.div
                      className="text-2xl font-black text-blue-400"
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      2+
                    </motion.div>
                    <div className="text-xs text-[#666] font-medium">Years Exp.</div>
                  </motion.div>

                  {/* Floating stat badge — left */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(34,211,238,0.4)' }}
                    className="absolute -left-4 bottom-12 bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-center shadow-xl cursor-default"
                  >
                    <motion.div
                      className="text-2xl font-black text-cyan-400"
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      15+
                    </motion.div>
                    <div className="text-xs text-[#666] font-medium">Projects</div>
                  </motion.div>

                  {/* Floating badge — top left */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="absolute -left-2 top-6 bg-[#111] border border-green-500/20 rounded-xl px-3 py-2 shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400 font-medium">Open to Work</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scrolling ticker */}
        <div className="border-t border-[#1a1a1a] bg-[#080808] py-4 overflow-hidden relative z-10">
          <div className="ticker-track">
            {doubled.map((item, i) => (
              <div key={i} className="flex items-center gap-6 px-6 flex-shrink-0">
                <span className="text-sm font-medium text-[#555] whitespace-nowrap uppercase tracking-widest">
                  {item}
                </span>
                <span className="text-[#2a2a2a] text-lg">◆</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
