'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data';
import { Download, ChevronDown, Briefcase } from 'lucide-react';
import { easeEntrance, durIn } from '@/lib/animations';

export function Experience() {
  const [expanded, setExpanded] = useState<string | null>(experiences[0]?.id ?? null);
  const [filter, setFilter] = useState<'all' | 'full-time' | 'internship' | 'training'>('all');

  const filteredExperiences = filter === 'all'
    ? experiences
    : experiences.filter(exp => exp.type === filter);

  return (
    <section
      id="experience"
      className="relative py-24 lg:py-36 bg-cream overflow-hidden"
    >
      {/* decorative blob (consistent with other light sections) */}
      <div className="blob top-1/4 -right-16 w-72 h-72 opacity-40 animate-blob-pulse" style={{ background: '#EFEDFB' }} />
      <div className="blob bottom-1/4 -left-12 w-64 h-64 opacity-40 animate-blob-pulse" style={{ background: '#FCE3D5', animationDelay: '1.5s' }} />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: 0.5, duration: durIn, ease: easeEntrance }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.5, ease: easeEntrance }}
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 tracking-[0.3em] uppercase mb-4"
        >
          <span className="w-8 h-px bg-indigo-400" /> / Career
        </motion.p>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6, ease: easeEntrance }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-tight"
          >
            Work <span className="text-gradient-indigo">Experience</span>
          </motion.h2>
          <motion.a
            href="https://canva.link/363qu7m58fy6eax"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5, ease: easeEntrance }}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-700 hover:to-violet-600 text-white text-sm font-bold rounded-full shadow-lg shadow-indigo-500/30 self-start sm:self-auto"
          >
            <Download className="w-4 h-4" /> Download CV
          </motion.a>
        </div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="text-ink-body text-base mb-10 max-w-2xl"
        >
          2+ years of impact in DevOps, Cloud Engineering, and Site Reliability Engineering.
        </motion.p>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5, ease: easeEntrance }}
          className="flex flex-wrap gap-2 mb-14"
        >
          {(['all', 'full-time', 'internship', 'training'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 capitalize cursor-pointer ${
                filter === f
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                  : 'bg-white text-indigo-600 border border-indigo-100 hover:bg-indigo-50 hover:text-indigo-700'
              }`}
            >
              {f === 'all' ? 'All' : f.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
            </button>
          ))}
        </motion.div>

        {/* Experience list */}
        <div className="space-y-4">
          {filteredExperiences.map((exp, i) => {
            const isOpen = expanded === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.75 + i * 0.12, duration: durIn, ease: easeEntrance }}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-white border-indigo-200 shadow-lg shadow-indigo-500/10'
                    : 'bg-white border-ink/10 hover:bg-indigo-50/50 hover:border-indigo-200'
                }`}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : exp.id)}
                  className="w-full text-left px-6 py-6 flex items-start gap-5 sm:gap-8 cursor-pointer"
                >
                  {/* Icon tile */}
                  <div className={`p-2.5 rounded-xl flex-shrink-0 transition-colors ${isOpen ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'}`}>
                    <Briefcase className="w-5 h-5" />
                  </div>

                  {/* Year range */}
                  <div className="hidden sm:block flex-shrink-0 w-28 text-xs text-ink-muted font-mono pt-1 leading-relaxed">
                    {exp.duration.split('–').map((part, j) => (
                      <span key={j} className="block">{part.trim()}</span>
                    ))}
                  </div>

                  {/* Main */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className={`text-xl sm:text-2xl font-black leading-tight mb-1 transition-colors ${isOpen ? 'text-ink' : 'text-ink'}`}>
                          {exp.role}
                        </h3>
                        <p className="text-ink-body text-sm font-medium">
                          {exp.company}
                          <span className="mx-2 text-ink/30">·</span>
                          <span className="text-ink-muted">{exp.location}</span>
                          <span className="mx-2 text-ink/30">·</span>
                          <span className="capitalize text-ink-muted sm:hidden">{exp.type.replace('-', ' ')}</span>
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex-shrink-0 mt-1"
                      >
                        <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-indigo-600' : 'text-ink-muted'}`} />
                      </motion.div>
                    </div>

                    {/* Expanded */}
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: easeEntrance }}
                      className="overflow-hidden"
                    >
                      {isOpen && (
                        <div className="pt-5 space-y-4">
                          {exp.description && exp.description.length > 0 && (
                            <ul className="space-y-2.5">
                              {exp.description.map((point: string, j: number) => (
                                <motion.li
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: j * 0.06, duration: 0.4 }}
                                  className="flex items-start gap-2.5 text-sm text-ink-body"
                                >
                                  <span className="text-indigo-600 mt-1 flex-shrink-0">▹</span>
                                  <span>{point}</span>
                                </motion.li>
                              ))}
                            </ul>
                          )}
                          {exp.technologies && exp.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {exp.technologies.map((tech: string) => (
                                <span
                                  key={tech}
                                  className="text-xs text-indigo-700 border border-indigo-200 bg-indigo-50 rounded-full px-3 py-1"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.9, duration: 0.6, ease: easeEntrance }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { value: '3', label: 'Professional Positions' },
            { value: '3', label: 'Companies' },
            { value: '2+', label: 'Years Experience' },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white border border-ink/10 rounded-2xl p-7 text-center shadow-sm"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.1, type: 'spring', damping: 15, stiffness: 200 }}
                className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 mb-2"
              >
                {s.value}
              </motion.div>
              <div className="text-xs text-ink-muted font-semibold uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
