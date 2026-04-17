'use client'

import { personalInfo } from '@/lib/data'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background px-6 md:px-14 py-7 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="font-display text-base font-extrabold text-white tracking-tight">
        HD<span className="text-accent">.</span>
      </a>

      <span className="text-[10px] text-text-muted tracking-widest uppercase hidden md:block">
        © {year} Harry Do · Melbourne, Australia
      </span>

      <span className="text-[10px] text-text-muted tracking-widest uppercase hidden md:block">
        Built with Next.js + Tailwind
      </span>

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
    </footer>
  )
}
