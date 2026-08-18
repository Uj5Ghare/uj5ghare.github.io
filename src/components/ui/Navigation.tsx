'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pendingScrollRef = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When menu finishes closing, perform any pending scroll
  const onMenuAnimationComplete = useCallback(() => {
    if (pendingScrollRef.current) {
      const href = pendingScrollRef.current;
      pendingScrollRef.current = null;
      const element = document.querySelector(href);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, []);

  const scrollToSection = useCallback((href: string) => {
    if (isMobileMenuOpen) {
      // Store target, close menu — scroll happens after exit animation completes
      pendingScrollRef.current = href;
      setIsMobileMenuOpen(false);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [isMobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-light shadow-lg shadow-indigo-500/5'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-3 group"
            aria-label="Home"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-indigo-200 shadow-sm">
              <Image
                src="/images/hero/profile.png"
                alt="Ujwal Pachghare"
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <span className="text-base font-bold text-ink hidden sm:block tracking-wide">
              Ujwal Pachghare
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/60 border border-ink/10 rounded-full p-1 backdrop-blur-sm shadow-sm">
            {navItems.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer',
                    active ? 'text-white' : 'text-ink-body hover:text-ink'
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full shadow-md shadow-indigo-500/30"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-5 py-2 rounded-full bg-ink text-white text-sm font-semibold shadow-md shadow-ink/20 hover:shadow-lg hover:shadow-indigo-500/30 transition-all cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-ink hover:bg-indigo-50 cursor-pointer transition-colors"
            onClick={() => {
              if (isMobileMenuOpen) {
                pendingScrollRef.current = null;
                setIsMobileMenuOpen(false);
              } else {
                setIsMobileMenuOpen(true);
              }
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — absolute positioned, no height animation, only opacity + translateY */}
      <div className="md:hidden relative">
        <div
          className={cn(
            'absolute left-0 right-0 glass-light border-t border-ink/10 transition-all duration-200 ease-out',
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          )}
          onTransitionEnd={() => {
            if (!isMobileMenuOpen) onMenuAnimationComplete();
          }}
        >
          <div className="px-4 py-4 sm:py-6 space-y-1 max-h-[70vh] overflow-y-auto overscroll-contain">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors',
                  activeSection === item.href.slice(1)
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-500 text-white'
                    : 'text-ink-body hover:bg-indigo-50 hover:text-ink'
                )}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full px-4 py-3 rounded-xl bg-ink text-white font-semibold mt-2"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
