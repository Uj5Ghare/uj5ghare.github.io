'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, social } from '@/data';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { underlineWipe } from '@/lib/animations';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { href: social.github.url, icon: <Github className="w-4 h-4" />, label: 'GitHub' },
    { href: social.linkedin.url, icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
    { href: `mailto:${personalInfo.email}`, icon: <Mail className="w-4 h-4" />, label: 'Email' },
    {
      href: social.leetcode.url,
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
      label: 'Medium',
    },
  ];

  return (
    <footer className="relative bg-cream-light border-t border-ink/10 overflow-hidden">
      {/* Soft top blob */}
      <div className="absolute -top-20 right-1/4 w-72 h-72 rounded-full bg-indigo-100/60 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.03 }}
              className="text-2xl font-black text-ink mb-3 hover:text-indigo-600 transition-colors block"
            >
              {personalInfo.name}
            </motion.button>
            <p className="text-sm text-ink-body leading-relaxed max-w-xs">
              DevOps &amp; Cloud Engineer building reliable, scalable, and cost-efficient
              infrastructure on AWS and Kubernetes.
            </p>
            <div className="flex gap-2.5 mt-5">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1, borderColor: '#A3A3EA', color: '#583ACB' }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-white border border-ink/10 rounded-xl text-ink-body shadow-sm transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-ink-muted uppercase tracking-[0.3em] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {links.map((link, i) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.1, 1] }}
                    className="group inline-flex items-baseline gap-3 text-ink-body hover:text-indigo-600 transition-colors relative"
                  >
                    <span className="text-[10px] text-ink-muted/60 font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="relative">
                      {link.label}
                      <motion.span
                        className="absolute left-0 -bottom-0.5 h-[2px] bg-indigo-500 w-full"
                        variants={underlineWipe}
                        initial="rest"
                        whileHover="hover"
                      />
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold text-ink-muted uppercase tracking-[0.3em] mb-5">
              Connect
            </h3>
            <p className="text-sm text-ink-body leading-relaxed mb-3">
              Have a project in mind or want to talk DevOps?
              I&apos;m always open to a good conversation.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-500 text-white text-sm font-semibold rounded-full shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/40 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" /> {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ink-muted">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p className="inline-flex items-center gap-1.5">
              Built with <Heart className="w-3.5 h-3.5 text-violet-500 fill-violet-500" /> using Next.js &amp; TypeScript
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="p-2.5 bg-white border border-ink/10 rounded-xl text-ink-body hover:text-indigo-600 hover:border-indigo-200 shadow-sm transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
