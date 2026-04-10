'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useScrollAnimation } from '@/lib/hooks';

export function Experience() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 });
  const [expanded, setExpanded] = useState<string | null>(experiences[0]?.id ?? null);
  const [filter, setFilter] = useState<'all' | 'full-time' | 'internship' | 'training'>('all');

  const filteredExperiences = filter === 'all'
    ? experiences
    : experiences.filter(exp => exp.type === filter);

  return (
    <section id="experience" className="py-24 lg:py-36 bg-[#0a0a0a]">
      <motion.div
        ref={ref}
        className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.p
          variants={fadeInUp}
          className="text-xs font-semibold text-[#555] tracking-[0.3em] uppercase mb-4"
        >
          / Career
        </motion.p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-6">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            Work <span className="text-blue-400">Experience</span>
          </motion.h2>
          <motion.a
            variants={fadeInUp}
            href="https://canva.link/xf0iomrlfurnyq4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#333] hover:border-[#555] text-[#888] hover:text-white text-sm font-medium rounded-lg transition-all self-start sm:self-auto"
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.a>
        </div>

        <motion.p
          variants={fadeInUp}
          className="text-[#555] text-base mb-12 max-w-2xl"
        >
          2+ years of impact in DevOps, Cloud Engineering, and Site Reliability Engineering.
        </motion.p>

        {/* Filter */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-14">
          {(['all', 'full-time', 'internship', 'training'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all capitalize ${
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#111] border border-[#2a2a2a] text-[#666] hover:text-white hover:border-[#444]'
              }`}
            >
              {f === 'all' ? 'All' : f.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
            </button>
          ))}
        </motion.div>

        {/* Experience list — large text style */}
        <div className="space-y-0 divide-y divide-[#1a1a1a]">
          {filteredExperiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                className="w-full text-left py-8 flex items-start gap-6 hover:bg-[#0e0e0e] transition-colors px-2 rounded-lg -mx-2"
              >
                {/* Year range */}
                <div className="flex-shrink-0 w-28 text-xs text-[#444] font-mono pt-1.5 leading-relaxed">
                  {exp.duration.split('–').join('\n–\n').split('\n').map((line, j) => (
                    <span key={j} className="block">{line}</span>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white group-hover:text-blue-400 transition-colors leading-tight mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-[#555] text-sm font-medium">
                        {exp.company}
                        <span className="mx-2 text-[#333]">·</span>
                        <span className="text-[#444]">{exp.location}</span>
                        {exp.type && (
                          <>
                            <span className="mx-2 text-[#333]">·</span>
                            <span className="capitalize text-[#444]">{exp.type.replace('-', ' ')}</span>
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      {expanded === exp.id
                        ? <ChevronUp className="w-5 h-5 text-[#444]" />
                        : <ChevronDown className="w-5 h-5 text-[#444]" />}
                    </div>
                  </div>

                  {/* Expanded details */}
                  <motion.div
                    initial={false}
                    animate={{ height: expanded === exp.id ? 'auto' : 0, opacity: expanded === exp.id ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    {expanded === exp.id && (
                      <div className="pt-5 space-y-4">
                        {exp.description && exp.description.length > 0 && (
                          <ul className="space-y-2">
                            {exp.description.map((point: string, j: number) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-[#666]">
                                <span className="text-blue-500 mt-1 flex-shrink-0">▹</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {exp.technologies.map((tech: string) => (
                              <span
                                key={tech}
                                className="text-xs text-[#555] border border-[#222] rounded px-2.5 py-1"
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
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { value: '3', label: 'Professional Positions' },
            { value: '3', label: 'Companies' },
            { value: '2+', label: 'Years Experience' },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-black text-blue-400 mb-2">{s.value}</div>
              <div className="text-xs text-[#555] font-medium uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
