'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-light shadow-lg shadow-indigo-500/5'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Brand */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-3 group"
            aria-label="Home"
          >
            <motion.div
              className="relative w-9 h-9 rounded-xl overflow-hidden border border-indigo-200 shadow-sm"
              whileHover={{ scale: 1.08, rotate: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <Image
                src="/images/hero/profile.png"
                alt="Ujwal Pachghare"
                fill
                sizes="36px"
                className="object-cover"
              />
            </motion.div>
            <span className="text-base font-bold text-ink hidden sm:block tracking-wide">
              Ujwal Pachghare
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/60 border border-ink/10 rounded-full p-1 backdrop-blur-sm shadow-sm">
            {navItems.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer',
                    active ? 'text-white' : 'text-ink-body hover:text-ink'
                  )}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  style={{ pointerEvents: 'auto' }}
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
                </motion.button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-ink text-white text-sm font-semibold shadow-md shadow-ink/20 hover:shadow-lg hover:shadow-indigo-500/30 transition-all cursor-pointer"
            >
              Get in Touch
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-ink hover:bg-indigo-50 cursor-pointer transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden glass-light border-t border-ink/10"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    activeSection === item.href.slice(1)
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-500 text-white'
                      : 'text-ink-body hover:bg-indigo-50 hover:text-ink'
                  )}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => scrollToSection('#contact')}
                className="w-full px-4 py-3 rounded-xl bg-ink text-white font-semibold mt-2"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
