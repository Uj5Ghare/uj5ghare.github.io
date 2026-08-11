'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '@/data';
import { Github, ExternalLink, TrendingUp, FolderGit2 } from 'lucide-react';
import { fadeInUp, staggerContainer, easeEntrance, durIn } from '@/lib/animations';

export function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 lg:py-36 bg-white relative overflow-hidden">
      <div className="blob top-32 right-[5%] w-72 h-72 opacity-30 animate-blob-pulse" style={{ background: '#FCE3D5' }} />
      <div className="blob bottom-24 left-[4%] w-64 h-64 opacity-30 animate-blob-pulse" style={{ background: '#EFEDFB', animationDelay: '2.5s' }} />

      <motion.div
        className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.p variants={fadeInUp} className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 tracking-[0.3em] uppercase mb-4">
          <span className="w-8 h-px bg-indigo-400" /> / Portfolio Projects
        </motion.p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-6">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-tight"
          >
            Selected <span className="text-gradient-indigo">Work</span>
          </motion.h2>
          <motion.a
            variants={fadeInUp}
            href="https://github.com/Uj5Ghare"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 px-5 py-2.5 border-2 border-ink/15 text-ink text-sm font-semibold rounded-full hover:border-indigo-400 hover:text-indigo-600 transition-colors self-start sm:self-auto group"
          >
            <Github className="w-4 h-4" />
            View GitHub
            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>

        <motion.p variants={fadeInUp} className="text-ink-body text-base mb-10 max-w-2xl">
          A showcase of production DevOps, Cloud, and infrastructure automation projects.
        </motion.p>

        {/* Filter */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                filter === category.id ? 'text-white' : 'bg-white border border-ink/10 text-ink-muted hover:text-ink hover:border-ink/25'
              }`}
            >
              {filter === category.id && (
                <motion.span
                  layoutId="projects-pill"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full shadow-md shadow-indigo-500/25"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: durIn, ease: easeEntrance }}
                whileHover={{ y: -8, boxShadow: '0 28px 56px -24px rgba(88,58,203,0.4)' }}
                className="group bg-cream-light border border-ink/10 rounded-2xl p-6 shadow-sm hover:border-indigo-200 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                {/* hover wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-transparent to-violet-50/0 group-hover:from-indigo-50 group-hover:to-violet-50/60 transition-all duration-500 pointer-events-none" />

                {/* Top row */}
                <div className="relative flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${getCategoryStyle(project.category)}`}>
                      {getCategoryLabel(project.category)}
                    </span>
                    <span className="p-1.5 rounded-lg bg-white border border-ink/10 text-ink-muted group-hover:text-indigo-600 transition-colors">
                      <FolderGit2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  {project.featured && (
                    <motion.span
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', damping: 12, stiffness: 220, delay: 0.2 }}
                      className="text-xs font-bold text-amber-600 border border-amber-200 bg-amber-50 px-2.5 py-1 rounded-full"
                    >
                      ★ Featured
                    </motion.span>
                  )}
                </div>

                {/* Title */}
                <h3 className="relative font-black text-ink text-lg mb-2 group-hover:text-indigo-700 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="relative text-sm text-ink-body leading-relaxed mb-5 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="relative grid grid-cols-3 gap-2 mb-4">
                    {project.metrics.slice(0, 3).map((metric, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08 }}
                        className="bg-white border border-ink/10 rounded-xl p-2.5"
                      >
                        <div className="flex items-center gap-1 mb-0.5">
                          <TrendingUp className="w-3 h-3 text-indigo-500" />
                          <span className="text-[10px] text-ink-muted">{metric.label}</span>
                        </div>
                        <div className="text-xs font-bold text-ink">{metric.value}</div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Tech badges */}
                <div className="relative flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.06 }}
                      className="text-[11px] text-ink-muted border border-ink/10 bg-white rounded-full px-2 py-0.5 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[11px] text-ink-muted border border-ink/5 rounded-full px-2 py-0.5">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="relative flex gap-2 mt-auto pt-3 border-t border-ink/10">
                  {project.github && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-ink-body hover:text-white border border-ink/15 hover:border-transparent rounded-xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-500 transition-all flex-1 justify-center"
                    >
                      <Github className="w-3.5 h-3.5" /> Code
                    </motion.button>
                  )}
                  {project.demo && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => window.open(project.demo, '_blank')}
                      className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-indigo-600 hover:text-white border border-indigo-200 hover:border-transparent rounded-xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-500 transition-all flex-1 justify-center"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Demo
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-ink-muted mb-4">No projects in this category.</p>
            <button
              onClick={() => setFilter('all')}
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-500 text-white text-sm font-semibold rounded-full shadow-md shadow-indigo-500/25"
            >
              View All
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}

function getCategoryStyle(category: string): string {
  const styles: Record<string, string> = {
    production: 'bg-emerald-50 border-emerald-300 text-emerald-700',
    devops: 'bg-indigo-50 border-indigo-300 text-indigo-700',
    web: 'bg-cyan-50 border-cyan-300 text-cyan-700',
  };
  return styles[category] || 'bg-cream-light border-ink/15 text-ink-muted';
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    production: '🏭 Production',
    devops: '⚙️ DevOps / Cloud',
    web: '🌐 Web Dev',
  };
  return labels[category] || category;
}
