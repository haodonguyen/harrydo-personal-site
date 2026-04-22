'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Testimonial() {
  return (
    <section id="testimonials" className="py-28 px-6 md:px-14 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-14">
            <span className="text-[10px] text-accent font-mono tracking-widest uppercase flex-shrink-0">
              04 — Testimonials
            </span>
            <h2 className="text-3xl md:text-[40px] font-display font-extrabold text-white tracking-tight leading-none">
              What People Say
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          {/* Two-column grid */}
          <motion.div
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-px bg-border"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative bg-surface p-10 flex flex-col gap-5 overflow-hidden hover:bg-surface-2 transition-colors duration-200"
              >
                {/* Decorative large quote */}
                <span
                  className="absolute top-[-16px] right-6 font-display font-extrabold leading-none pointer-events-none select-none"
                  style={{ fontSize: '120px', color: 'rgba(0,212,255,0.04)' }}
                  aria-hidden
                >
                  &ldquo;
                </span>

                {/* Stars */}
                <div className="text-gold text-xs tracking-[3px]">★★★★★</div>

                {/* Quote */}
                <blockquote className="font-serif italic text-[15px] text-text-muted leading-[1.75] flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Footer */}
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div
                    className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-display text-[13px] font-extrabold"
                    style={
                      t.avatarStyle === 'cyan'
                        ? { background: 'linear-gradient(135deg, #00d4ff, #0096b3)', color: '#06080b' }
                        : t.avatarStyle === 'emerald'
                        ? { background: 'linear-gradient(135deg, #10b981, #059669)', color: '#fff' }
                        : t.avatarStyle === 'amber'
                        ? { background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#fff' }
                        : t.avatarStyle === 'rose'
                        ? { background: 'linear-gradient(135deg, #f43f5e, #e11d48)', color: '#fff' }
                        : { background: 'linear-gradient(135deg, #7c3aed, #9333ea)', color: '#fff' }
                    }
                  >
                    {t.initials}
                  </div>
                  <div className="flex-1">
                    <span className="block text-[13px] font-medium text-white">{t.name}</span>
                    <span className="block text-[11px] text-text-muted mt-0.5">
                      {t.href ? (
                        <a
                          href={t.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          {t.role}
                        </a>
                      ) : (
                        t.role
                      )}
                    </span>
                  </div>
                  <div className="text-[10px] text-green-400 flex items-center gap-1 tracking-wider">
                    <span>✓</span>
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
