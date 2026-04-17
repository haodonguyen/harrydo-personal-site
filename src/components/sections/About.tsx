'use client'

import { motion } from 'framer-motion'
import { personalInfo, testimonials } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Show only the first two testimonials as fact cards in the About sidebar
const factCards = testimonials.slice(0, 2)

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-14 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-14">
            <span className="text-[10px] text-accent font-mono tracking-widest uppercase">01 — About</span>
            <h2 className="text-3xl md:text-[40px] font-display font-extrabold text-white tracking-tight leading-none">
              Who I Am
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          {/* Content grid — 5:4 */}
          <div className="grid md:grid-cols-[5fr_4fr] gap-16 items-start">

            {/* Bio paragraphs */}
            <div className="space-y-6">
              {personalInfo.bioParagraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="font-serif italic text-[17px] text-text-muted leading-[1.85]"
                  style={{ fontWeight: 400 }}
                  dangerouslySetInnerHTML={{
                    __html: para
                      .replace(/SEEDSoft/g, '<strong class="text-white not-italic font-medium">SEEDSoft</strong>')
                      .replace(/Groove Technology/g, '<strong class="text-white not-italic font-medium">Groove Technology</strong>')
                      .replace(/Claude Code, Cursor, GitHub Copilot/g, '<strong class="text-white not-italic font-medium">Claude Code, Cursor, GitHub Copilot</strong>')
                      .replace(/Software Engineering graduate/g, '<strong class="text-white not-italic font-medium">Software Engineering graduate</strong>')
                      .replace(/graduate or junior engineering role/g, '<strong class="text-white not-italic font-medium">graduate or junior engineering role</strong>')
                      .replace(/writing code that actually gets used/g, '<strong class="text-white not-italic font-medium">writing code that actually gets used</strong>')
                      .replace(/LLM-powered features/g, '<strong class="text-white not-italic font-medium">LLM-powered features</strong>')
                      .replace(/Nx monorepo/g, '<span class="font-mono not-italic text-[13px] text-accent px-1.5 py-0.5" style="background:rgba(0,212,255,0.08)">Nx monorepo</span>')
                      .replace(/Apollo Federation/g, '<span class="font-mono not-italic text-[13px] text-accent px-1.5 py-0.5" style="background:rgba(0,212,255,0.08)">Apollo Federation</span>')
                  }}
                />
              ))}

              {/* Contact links */}
              <motion.div variants={fadeUp} className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-accent hover:underline"
                >
                  {personalInfo.email}
                </a>
                <span className="text-text-muted">·</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  LinkedIn
                </a>
              </motion.div>
            </div>

            {/* Fact cards — testimonial previews */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              {factCards.map((card, i) => (
                <div
                  key={card.name}
                  className="relative bg-surface border border-border p-6 overflow-hidden hover:border-white/10 transition-colors duration-200"
                >
                  {/* Top gradient accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: i === 0
                        ? 'linear-gradient(90deg, #00d4ff, transparent)'
                        : 'linear-gradient(90deg, #7c3aed, transparent)',
                    }}
                  />

                  <div
                    className="text-[9px] font-mono tracking-widest uppercase mb-3"
                    style={{ color: 'rgba(94,112,128,0.8)' }}
                  >
                    // {card.role}
                  </div>

                  <p className="font-serif italic text-sm text-text-muted leading-relaxed mb-4">
                    &ldquo;{card.quote.length > 160 ? card.quote.slice(0, 157) + '…' : card.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-extrabold flex-shrink-0"
                      style={
                        card.avatarStyle === 'cyan'
                          ? { background: 'linear-gradient(135deg, #00d4ff, #0096b3)', color: '#06080b' }
                          : { background: 'linear-gradient(135deg, #7c3aed, #9333ea)', color: '#fff' }
                      }
                    >
                      {card.initials}
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-white">{card.name}</p>
                      <p className="text-[10px] text-text-muted">{card.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
