'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, social, contact } from '@/data';
import { Mail, MapPin, Github, Linkedin, Download, Send, CheckCircle2, ArrowUpRight, MessageCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, easeEntrance } from '@/lib/animations';
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
    { label: 'Resume', icon: <Download className="w-5 h-5" />, url: 'https://canva.link/363qu7m58fy6eax', sub: 'Download CV' },
  ];

  return (
    <section id="contact" className="py-24 lg:py-36 bg-cream relative overflow-hidden">
      <div className="blob top-1/4 -right-20 w-80 h-80 opacity-40 animate-blob-pulse" style={{ background: '#EFEDFB' }} />
      <div className="blob bottom-1/4 -left-16 w-72 h-72 opacity-40 animate-blob-pulse" style={{ background: '#FCE3D5', animationDelay: '2s' }} />

      <motion.div
        ref={ref}
        className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.p variants={fadeInUp} className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 tracking-[0.3em] uppercase mb-4">
          <span className="w-8 h-px bg-indigo-400" /> / Contact
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-tight mb-6"
        >
          Let&apos;s <span className="text-gradient-indigo">Connect</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-ink-body text-base mb-16 max-w-xl">
          Open to opportunities, collaborations, and interesting conversations.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl">
          {/* Left sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5, ease: easeEntrance }}
              className="bg-white border border-emerald-200 rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </div>
                <h3 className="font-bold text-ink text-sm">Currently Available</h3>
              </div>
              <p className="text-xs text-ink-muted">
                {contact.availability} · Responds within 24 hours
              </p>
            </motion.div>

            {/* Email + Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5, ease: easeEntrance }}
              className="bg-white border border-ink/10 rounded-2xl p-5 space-y-4 shadow-sm"
            >
              <motion.a
                href={`mailto:${contact.email}`}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 group"
              >
                <div className="p-2 bg-indigo-50 border border-indigo-100 rounded-xl">
                  <Mail className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <p className="text-[10px] text-ink-muted uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm text-ink group-hover:text-indigo-600 transition-colors font-semibold">
                    {contact.email}
                  </p>
                </div>
              </motion.a>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cream-light border border-ink/10 rounded-xl">
                  <MapPin className="w-4 h-4 text-ink-muted" />
                </div>
                <div>
                  <p className="text-[10px] text-ink-muted uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-sm text-ink font-semibold">{contact.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Connect links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5, ease: easeEntrance }}
              className="bg-white border border-ink/10 rounded-2xl p-5 shadow-sm"
            >
              <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Connect
              </h3>
              <div className="space-y-2">
                {connectLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={{ x: 4, backgroundColor: '#FAF6FF' }}
                    className="flex items-center justify-between p-3 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-cream-light border border-ink/10 text-ink-body group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors">
                        {link.icon}
                      </span>
                      <div>
                        <p className="text-sm text-ink group-hover:text-indigo-600 transition-colors font-semibold">{link.label}</p>
                        <p className="text-[11px] text-ink-muted">{link.sub}</p>
                      </div>
                    </div>
                    <motion.span
                      whileHover={{ x: 2 }}
                      className="text-ink-muted group-hover:text-indigo-600 transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6, ease: easeEntrance }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-ink/10 rounded-3xl p-8 shadow-lg shadow-indigo-500/5 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-indigo-50 opacity-70 pointer-events-none" />

              <h3 className="text-xl font-black text-ink mb-6">Send a Message</h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p className="text-sm text-emerald-700 font-semibold">Message sent! I&apos;ll get back to you soon.</p>
                </motion.div>
              )}
              {errorMsg && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
                  <p className="text-sm text-red-700">{errorMsg}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 relative">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-ink-body font-bold mb-2 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-cream-light border border-ink/10 text-ink text-sm placeholder-ink-muted focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-ink-body font-bold mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-cream-light border border-ink/10 text-ink text-sm placeholder-ink-muted focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-ink-body font-bold mb-2 uppercase tracking-wider">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-cream-light border border-ink/10 text-ink text-sm placeholder-ink-muted focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="Job Opportunity / Collaboration"
                  />
                </div>

                <div>
                  <label className="block text-xs text-ink-body font-bold mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-cream-light border border-ink/10 text-ink text-sm placeholder-ink-muted focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ y: -2, boxShadow: '0 16px 32px -12px rgba(88,58,203,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-700 hover:to-violet-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-full shadow-lg shadow-indigo-500/30 transition-colors"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center text-ink-muted">
                  Or email me directly at{' '}
                  <a href={`mailto:${contact.email}`} className="text-indigo-600 hover:underline font-semibold">
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
