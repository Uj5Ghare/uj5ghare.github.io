'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, social, contact } from '@/data';
import { Mail, MapPin, Github, Linkedin, Download, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { useScrollAnimation } from '@/lib/hooks';

export function Contact() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const connectLinks = [
    { label: 'GitHub', icon: <Github className="w-5 h-5" />, url: social.github.url, sub: social.github.username },
    { label: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: social.linkedin.url, sub: social.linkedin.username },
    {
      label: 'Medium',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>,
      url: social.leetcode.url,
      sub: social.leetcode.username,
    },
    { label: 'Resume', icon: <Download className="w-5 h-5" />, url: 'https://canva.link/xf0iomrlfurnyq4', sub: 'Download CV' },
  ];

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        ref={ref}
        className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.p
          variants={fadeInUp}
          className="text-xs font-semibold text-[#555] tracking-[0.3em] uppercase mb-4"
        >
          / Contact
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
        >
          Let&apos;s <span className="text-blue-400">Connect</span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-[#555] text-base mb-16 max-w-xl"
        >
          Open to opportunities, collaborations, and interesting conversations.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl">
          {/* Left sidebar */}
          <motion.div variants={staggerItem} className="lg:col-span-2 space-y-6">
            {/* Availability */}
            <div className="bg-[#111] border border-green-500/20 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <h3 className="font-bold text-white text-sm">Currently Available</h3>
              </div>
              <p className="text-xs text-[#666]">
                {contact.availability} · Responds within 24 hours
              </p>
            </div>

            {/* Email + Location */}
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 group"
              >
                <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] text-[#555] uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm text-[#888] group-hover:text-white transition-colors font-medium">
                    {contact.email}
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg">
                  <MapPin className="w-4 h-4 text-[#555]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#555] uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-sm text-[#888] font-medium">{contact.location}</p>
                </div>
              </div>
            </div>

            {/* Connect links */}
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5">
              <h3 className="text-xs font-semibold text-[#555] uppercase tracking-wider mb-4">Connect</h3>
              <div className="space-y-2">
                {connectLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#555] group-hover:text-white transition-colors">{link.icon}</span>
                      <div>
                        <p className="text-sm text-[#888] group-hover:text-white transition-colors font-medium">{link.label}</p>
                        <p className="text-[11px] text-[#444]">{link.sub}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#333] group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={staggerItem} className="lg:col-span-3">
            <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-400">Message sent! I&apos;ll get back to you soon.</p>
                </div>
              )}
              {errorMsg && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-sm text-red-400">{errorMsg}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-[#555] font-medium mb-2 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0e0e0e] border border-[#2a2a2a] text-white text-sm placeholder-[#444] focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#555] font-medium mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0e0e0e] border border-[#2a2a2a] text-white text-sm placeholder-[#444] focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#555] font-medium mb-2 uppercase tracking-wider">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0e0e0e] border border-[#2a2a2a] text-white text-sm placeholder-[#444] focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all"
                    placeholder="Job Opportunity / Collaboration"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#555] font-medium mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-[#0e0e0e] border border-[#2a2a2a] text-white text-sm placeholder-[#444] focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-[#444]">
                  Or email me directly at{' '}
                  <a href={`mailto:${contact.email}`} className="text-blue-400 hover:underline">
                    {contact.email}
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
