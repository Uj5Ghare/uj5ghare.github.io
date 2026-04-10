'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, projectCategories } from '@/data';
import { Github, ExternalLink, TrendingUp } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useScrollAnimation } from '@/lib/hooks';

export function Projects() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 });
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 lg:py-36 bg-[#060606]">
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
          / Portfolio Projects
        </motion.p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-6">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            Selected <span className="text-blue-400">Work</span>
          </motion.h2>
          <motion.a
            variants={fadeInUp}
            href="https://github.com/Uj5Ghare"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#333] hover:border-blue-500 text-[#888] hover:text-white text-sm font-medium rounded-lg transition-all self-start sm:self-auto group"
          >
            <Github className="w-4 h-4" />
            View GitHub
            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>

        <motion.p
          variants={fadeInUp}
          className="text-[#555] text-base mb-12 max-w-2xl"
        >
          A showcase of production DevOps, Cloud, and infrastructure automation projects.
        </motion.p>

        {/* Filter */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#111] border border-[#2a2a2a] text-[#666] hover:text-white hover:border-[#444]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.06 }}
              className="group bg-[#111] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#3a3a3a] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getCategoryStyle(project.category)}`}>
                  {getCategoryLabel(project.category)}
                </span>
                {project.featured && (
                  <span className="text-xs text-yellow-500/80 border border-yellow-500/20 bg-yellow-500/5 px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed mb-5 flex-grow line-clamp-3">
                {project.description}
              </p>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.metrics.slice(0, 4).map((metric: { label: string; value: string }, j: number) => (
                    <div key={j} className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-lg p-2.5">
                      <div className="flex items-center gap-1 mb-0.5">
                        <TrendingUp className="w-3 h-3 text-blue-500" />
                        <span className="text-[10px] text-[#555]">{metric.label}</span>
                      </div>
                      <div className="text-xs font-bold text-[#aaa]">{metric.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.slice(0, 5).map((tech: string) => (
                  <span key={tech} className="text-[11px] text-[#555] border border-[#222] rounded px-2 py-0.5">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="text-[11px] text-[#444] border border-[#1a1a1a] rounded px-2 py-0.5">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-auto pt-2 border-t border-[#1a1a1a]">
                {project.github && (
                  <button
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs text-[#666] hover:text-white border border-[#222] hover:border-[#444] rounded-lg transition-all flex-1 justify-center"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </button>
                )}
                {project.demo && (
                  <button
                    onClick={() => window.open(project.demo, '_blank')}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs text-[#666] hover:text-white border border-[#222] hover:border-[#444] rounded-lg transition-all flex-1 justify-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#555] mb-4">No projects in this category.</p>
            <button
              onClick={() => setFilter('all')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
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
    production: 'bg-green-500/10 border-green-500/30 text-green-400',
    devops: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    web: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  };
  return styles[category] || 'bg-[#1a1a1a] border-[#2a2a2a] text-[#666]';
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    production: '🏭 Production',
    devops: '⚙️ DevOps / Cloud',
    web: '🌐 Web Dev',
  };
  return labels[category] || category;
}
