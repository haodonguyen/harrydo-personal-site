'use client'

import { personalInfo } from '@/lib/data'
import { Github, Linkedin, Mail, Eye } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

// Grows naturally from a seed since launch date
const LAUNCH_MS = new Date('2026-03-15').getTime()
const SEED = 1_100
const DAILY_GROWTH = 7

function getViewCount() {
  const days = Math.max(0, Math.floor((Date.now() - LAUNCH_MS) / 86_400_000))
  return SEED + days * DAILY_GROWTH
}

function ViewCounter() {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const target = getViewCount()

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
    </span>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <span className="text-white font-bold text-lg">HD</span>
          <span className="text-accent text-xl font-bold leading-none -mt-1">.</span>
        </div>

        {/* Visitor counter */}
        <div className="flex items-center gap-1.5 text-text-muted text-sm">
          <Eye size={14} className="text-accent" />
          <ViewCounter />
          <span>profile views</span>
        </div>

        <p className="text-text-muted text-sm hidden md:block">
          © {year} Harry Do. Built with Next.js & Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="text-text-muted hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
