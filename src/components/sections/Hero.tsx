'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { personalInfo, stats, social } from '@/data';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { 
  fadeInUp, 
  fadeInDown, 
  staggerContainer, 
  staggerItem,
  scaleIn 
} from '@/lib/animations';
import { useScrollAnimation, useCountAnimation } from '@/lib/hooks';

export function Hero() {
  const { ref, inView } = useScrollAnimation({ triggerOnce: true, threshold: 0.05 });
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-orange-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        initial="visible"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div 
            className="flex justify-center"
            variants={fadeInDown}
          >
            <Badge variant="secondary" size="lg" className="animate-bounce">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </Badge>
          </motion.div>

          {/* Name & Title */}
          <motion.div className="space-y-4" variants={staggerItem}>
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight"
              variants={fadeInUp}
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                {personalInfo.name}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700"
              variants={fadeInUp}
            >
              {personalInfo.title} @ {personalInfo.company}
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center justify-center gap-3 text-lg sm:text-xl text-slate-600"
              variants={fadeInUp}
            >
              <span>⚽ Footballer</span>
              <span className="hidden sm:inline">•</span>
              <span>📊 Data Scientist</span>
              <span className="hidden sm:inline">•</span>
              <span>🚀 Problem Solver</span>
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.p 
            className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed"
            variants={fadeInUp}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8"
            variants={staggerContainer}
          >
            {[
              { label: 'Experience', value: stats.experience, icon: '💼' },
              { label: 'Projects', value: stats.projects, icon: '🚀' },
              { label: 'Publications', value: stats.publications, icon: '📚' },
              { label: 'CGPA', value: stats.cgpa, icon: '🎓' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-blue-200 group cursor-pointer"
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-3xl mb-2"
                  whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 10 : -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollToSection('projects')}
                rightIcon={<ExternalLink className="w-5 h-5" />}
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                leftIcon={<Mail className="w-5 h-5" />}
              >
                Get in Touch
              </Button>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => window.open('https://canva.link/xf0iomrlfurnyq4', '_blank')}
                leftIcon={<Download className="w-5 h-5" />}
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center justify-center gap-4 pt-8"
            variants={staggerContainer}
          >
            {[
              { icon: <Github className="w-6 h-6" />, url: social.github.url, label: 'GitHub' },
              { icon: <Linkedin className="w-6 h-6" />, url: social.linkedin.url, label: 'LinkedIn' },
              { 
                icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.766-1.649-7.974.632L5.304 8.16l-3.853 4.126c-.184.198-.35.417-.495.652a5.266 5.266 0 0 0-.653 1.379 5.376 5.376 0 0 0-.233 1.64 5.527 5.527 0 0 0 .062 1.062c.058.362.153.72.282 1.068.13.348.296.682.495 1l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019" /></svg>,
                url: social.leetcode.url, 
                label: 'LeetCode' 
              },
              { icon: <Mail className="w-6 h-6" />, url: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white shadow-md border-2 border-slate-100 hover:border-blue-300 text-slate-700 hover:text-blue-600 transition-colors"
                aria-label={link.label}
                variants={scaleIn}
                whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="pt-12"
            variants={fadeInUp}
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Scroll to about section"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
