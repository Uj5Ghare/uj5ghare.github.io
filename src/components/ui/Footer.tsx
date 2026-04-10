'use client';

import React from 'react';
import { personalInfo, social } from '@/data';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060606] border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-black text-white mb-3 hover:text-blue-400 transition-colors block"
            >
              {personalInfo.name}
            </button>
            <p className="text-sm text-[#555] leading-relaxed max-w-xs">
              DevOps &amp; Cloud Engineer building reliable, scalable, and cost-efficient
              infrastructure on AWS and Kubernetes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-[#444] uppercase tracking-[0.3em] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About', href: '#about' },
                { label: 'Experience', href: '#experience' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#555] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold text-[#444] uppercase tracking-[0.3em] mb-5">
              Connect
            </h3>
            <div className="flex gap-3 mb-5">
              {[
                { href: social.github.url, icon: <Github className="w-4 h-4" />, label: 'GitHub' },
                { href: social.linkedin.url, icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: <Mail className="w-4 h-4" />, label: 'Email' },
                {
                  href: social.leetcode.url,
                  icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>,
                  label: 'Medium'
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2.5 bg-[#111] border border-[#2a2a2a] rounded-lg text-[#555] hover:text-white hover:border-[#444] transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-[#555]">
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-white transition-colors"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#444]">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p>Built with Next.js &amp; TypeScript</p>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#111] border border-[#2a2a2a] rounded-lg text-[#555] hover:text-white hover:border-[#444] transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
