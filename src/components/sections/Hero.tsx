'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { personalInfo } from '@/lib/data'

const roles = ['Graduate Software Engineer', 'Full-Stack Developer', 'Junior Software Engineer']

function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]

    if (!deleting && displayed === current) {
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, displayed.length + 1))
      } else if (displayed.length === 0) {
        setDeleting(false)
        setRoleIndex((i) => (i + 1) % roles.length)
      } else {
        setDisplayed(displayed.slice(0, -1))
      }
    }, deleting ? 45 : 80)

    return () => clearTimeout(t)
  }, [displayed, deleting, roleIndex])

  return (
    <div className="text-accent text-xs font-mono font-medium mb-6 tracking-widest uppercase flex items-center gap-0.5 h-5">
      <span>{displayed}</span>
      <span className="inline-block w-[2px] h-3.5 bg-accent animate-pulse ml-0.5" aria-hidden />
    </div>
  )
}

const heroStats = [
  { value: '81', accent: '/100', label: 'WAM Score',       ctx: 'La Trobe · High Achiever Scholar' },
  { value: '2',  accent: '',     label: 'Internships',     ctx: 'AI SaaS + Enterprise tech' },
  { value: '7',  accent: '+',    label: 'Certifications',  ctx: 'Google · Anthropic · Microsoft' },
  { value: '1',  accent: 'yr',   label: 'Prod Experience', ctx: 'End-to-end · Shipped features' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-14 pt-20 pb-16 overflow-hidden"
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #06080b 100%)' }}
        />
      </div>

      {/* Scanlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.012) 2px, rgba(0,212,255,0.012) 4px)',
        }}
      />

      {/* Right glow orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-200px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* Status pill + location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-6 flex-wrap"
        >
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-green-400"
            style={{ border: '1px solid rgba(52,211,153,0.25)', background: 'rgba(52,211,153,0.05)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to work · Australia-wide
          </div>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TypewriterRole />
        </motion.div>

        {/* Name — split style */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display mb-8 leading-none"
          style={{ fontSize: 'clamp(64px, 10vw, 130px)', fontWeight: 800, letterSpacing: '-4px' }}
        >
          <span className="block text-white">Harry</span>
          <span
            className="block text-transparent transition-all duration-300 hover:[--stroke-color:rgba(0,212,255,0.5)]"
            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)' }}
          >
            Do.
          </span>
        </motion.h1>

        {/* Descriptor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex items-baseline gap-4 mb-10"
        >
          <div className="w-10 h-px bg-text-muted flex-shrink-0" />
          <p
            className="font-serif italic text-lg text-text-muted leading-relaxed max-w-lg"
            style={{ fontWeight: 400 }}
          >
            I build software that{' '}
            <em className="text-white not-italic font-medium">ships to production</em> —
            full-stack features, scalable backend systems, and{' '}
            <em className="text-white not-italic font-medium">AI-integrated workflows</em>{' '}
            that solve real problems.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap border border-border w-fit mb-12"
        >
          {heroStats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-4 flex flex-col gap-1 hover:bg-surface transition-colors duration-200 relative group ${
                i < heroStats.length - 1 ? 'border-r border-border' : ''
              }`}
            >
              {/* Cyan underline on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div
                className="text-2xl font-bold text-white leading-none font-display"
                style={{ letterSpacing: '-1px' }}
              >
                {s.value}
                <span className="text-accent">{s.accent}</span>
              </div>
              <div className="text-[10px] text-text-muted uppercase tracking-widest">{s.label}</div>
              <div className="text-[10px] text-text-muted/60">{s.ctx}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-background text-xs font-medium tracking-widest uppercase hover:shadow-[0_8px_32px_rgba(0,212,255,0.3)] hover:-translate-y-0.5 transition-all duration-200"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 text-white text-xs font-medium tracking-widest uppercase hover:border-accent/40 hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
          >
            Let&apos;s Talk
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 text-white text-xs font-medium tracking-widest uppercase hover:border-accent/40 hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
          >
            Resume ↗
          </a>
        </motion.div>

      </div>

      {/* Scroll hint — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-9 right-14 hidden md:flex items-center gap-3 text-[10px] text-text-muted tracking-widest uppercase"
      >
        <div className="w-10 h-px bg-text-muted/30 relative overflow-hidden">
          <div className="absolute top-0 h-full w-2/5 bg-accent animate-scan-right" />
        </div>
        scroll
      </motion.div>
    </section>
  )
}
