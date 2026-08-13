'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { ArrowUpRight, TerminalSquare, Heart } from 'lucide-react';
import { easeEntrance } from '@/lib/animations';

function MagneticButton({ children, onClick }: { children?: React.ReactNode; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.5 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.5 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.35);
    y.set(dy * 0.35);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ x, y }}
      whileTap={{ scale: 0.95 }}
      className="group relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-600 text-white shadow-2xl shadow-indigo-600/40 cursor-pointer flex items-center justify-center"
    >
      <motion.span
        className="absolute inset-0 rounded-full border border-white/25"
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.15, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <span className="relative flex flex-col items-center gap-0.5 text-center px-4">
        <span className="text-sm font-bold uppercase tracking-widest">Say Hello</span>
        <span className="inline-flex items-center gap-1 text-[9px] text-white/70 uppercase tracking-widest">
          Open to work <Heart className="w-2.5 h-2.5 fill-rose-300 text-rose-300" />
        </span>
      </span>
      <motion.span
        className="absolute -right-1 -top-1 w-7 h-7 rounded-full bg-white text-indigo-700 flex items-center justify-center shadow-lg"
        whileHover={{ rotate: 45 }}
        transition={{ type: 'spring', stiffness: 300, damping: 12 }}
      >
        <ArrowUpRight className="w-3.5 h-3.5" />
      </motion.span>
    </motion.button>
  );
}

function TypingLine({ text }: { text: string }) {
  const [shown, setShown] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, 22);
    return () => clearInterval(t);
  }, [inView, text]);

  return (
    <div ref={ref} className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-ink-body">
      <TerminalSquare className="w-3.5 h-3.5 text-indigo-500" />
      <span className="text-indigo-600">$</span> {shown}
      <span className="inline-block w-2 h-4 bg-indigo-600 animate-pulse" />
    </div>
  );
}

export function Finale() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowX = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const glowY = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });

  const onGlowMove = (e: React.MouseEvent) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    glowX.set(e.clientX - rect.left - rect.width / 2);
    glowY.set(e.clientY - rect.top - rect.height / 2);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="finale"
      ref={sectionRef}
      onMouseMove={onGlowMove}
      className="relative py-14 lg:py-20 bg-ink overflow-hidden"
    >
      {/* Cursor-follow glow */}
      <motion.div
        className="absolute w-[28rem] h-[28rem] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: glowX,
          y: glowY,
          background:
            'radial-gradient(closest-side, rgba(115,99,249,0.35), rgba(115,99,249,0.1) 45%, transparent 70%)',
        }}
      />
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.5) 0%, transparent 35%),' +
            'radial-gradient(circle at 85% 80%, rgba(255,255,255,0.35) 0%, transparent 30%)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Rectangle band: wordmark left, CTA right */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 md:gap-8">
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs font-bold text-lavender tracking-[0.3em] uppercase mb-4"
            >
              <span className="w-8 h-px bg-lavender/50" /> Let&apos;s build something great
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.7, ease: easeEntrance }}
              className="display-lg font-black text-white select-none"
            >
              UJ5GHARE
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: easeEntrance }}
            className="flex justify-center"
          >
            <MagneticButton onClick={scrollToContact} />
          </motion.div>
        </div>

        {/* Bottom strip: igloo ascii ticker + terminal line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <span className="ascii-ticker text-[17px] leading-none select-none" aria-hidden="true" />
          <div className="flex justify-center sm:justify-end">
            <TypingLine text="ujwal@devops:~$ waiting_for_your_message --status=open" />
          </div>
          <p className="text-xs text-white/40 whitespace-nowrap text-center sm:text-right">
            © 2026 Ujwal Pachghare. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
