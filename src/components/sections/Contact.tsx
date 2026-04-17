'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const contactLinks = [
  { type: 'Email',    value: personalInfo.email,                    href: `mailto:${personalInfo.email}` },
  { type: 'LinkedIn', value: 'linkedin.com/in/nguyenhaodo',          href: personalInfo.linkedin },
  { type: 'GitHub',   value: 'github.com/nguyenhaodo',               href: personalInfo.github },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-14 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left — big heading */}
          <div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold leading-[0.9] mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '-3px' }}
            >
              <span className="block text-white">Let&apos;s</span>
              <span
                className="block"
                style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}
              >
                Build
              </span>
              <span className="block text-white">
                Something<span className="text-accent">.</span>
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-serif italic text-base text-text-muted leading-[1.7] mb-8 max-w-sm"
              style={{ fontWeight: 400 }}
            >
              I&apos;m actively looking for{' '}
              <strong className="text-white not-italic font-medium">graduate and junior software engineering</strong>{' '}
              roles across Australia. Whether you have a role, a project, or just want to talk tech — I&apos;d love to hear from you.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-[11px] text-green-400 px-3.5 py-2 border"
              style={{
                borderColor: 'rgba(52,211,153,0.2)',
                background: 'rgba(52,211,153,0.05)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available to start — Open to Australia-wide
            </motion.div>
          </div>

          {/* Right — link list */}
          <motion.div variants={fadeUp} className="flex flex-col gap-px bg-border">
            {contactLinks.map((item) => (
              <a
                key={item.type}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between px-5 py-4 bg-surface text-white hover:bg-surface-2 hover:pl-8 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-accent tracking-widest uppercase w-14 flex-shrink-0">
                    {item.type}
                  </span>
                  <span className="text-[13px] text-text-muted group-hover:text-white transition-colors">
                    {item.value}
                  </span>
                </div>
                <span className="text-text-muted group-hover:text-accent transition-colors text-sm">↗</span>
              </a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
