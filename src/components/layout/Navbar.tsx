'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((l) => l.href.slice(1))
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/85 backdrop-blur-2xl border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-14 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 font-display text-base font-extrabold tracking-tight text-white">
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent"
            style={{ animation: 'blink 3s ease infinite' }}
          />
          Harry Do
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'text-[11px] font-medium tracking-widest uppercase transition-colors duration-200',
                  activeSection === link.href.slice(1)
                    ? 'text-accent'
                    : 'text-text-muted hover:text-white'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium tracking-widest uppercase px-[18px] py-[9px] border border-white/15 text-white hover:border-accent hover:text-accent transition-all duration-200"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-muted hover:text-white transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-border bg-surface/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-muted hover:text-accent transition-colors py-1 text-[11px] font-medium tracking-widest uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[11px] font-medium px-4 py-2.5 border border-white/15 text-white hover:border-accent hover:text-accent transition-all text-center tracking-widest uppercase"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes blink { 0%, 90%, 100% { opacity: 1 } 95% { opacity: 0 } }
      `}</style>
    </motion.nav>
  )
}
