'use client'

import { motion } from 'framer-motion'
import { education, certifications } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

// Map cert names to their issuers for display
const certIssuers: Record<string, string> = {
  'Google AI Professional Certificate': 'Google',
  'Claude Code in Action': 'Anthropic',
  'Microsoft AI Skills: Building Agents with Copilot Studio': 'Microsoft',
  'Azure DevOps Foundation': 'Microsoft / La Trobe',
  'Google Cloud Computing Foundation': 'Google',
}

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 md:px-14 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-14">
            <span className="text-[10px] text-accent font-mono tracking-widest uppercase flex-shrink-0">
              05 — Education
            </span>
            <h2 className="text-3xl md:text-[40px] font-display font-extrabold text-white tracking-tight leading-none">
              Academic Background
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          {/* Education cards */}
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6 mb-12">
            {education.map((edu, i) => (
              <div
                key={i}
                className="relative bg-surface border border-border p-8 overflow-hidden hover:border-white/10 transition-colors duration-200"
              >
                {/* Bottom-right glow */}
                <div
                  className="absolute bottom-[-40px] right-[-40px] w-[120px] h-[120px] pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06), transparent)' }}
                />

                <h3 className="font-display text-[17px] font-bold tracking-tight text-white mb-2">
                  {edu.institution}
                </h3>
                <p className="text-sm text-text-muted mb-5 leading-relaxed">
                  {edu.degree}<br />
                  {edu.major}
                </p>

                <div className="flex flex-col gap-2 mb-4">
                  {edu.award && (
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 w-fit border"
                      style={{
                        color: '#e8a44a',
                        borderColor: 'rgba(232,164,74,0.25)',
                        background: 'rgba(232,164,74,0.08)',
                      }}
                    >
                      ⭐ {edu.award}
                    </span>
                  )}
                  {edu.grade && (
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 w-fit border"
                      style={{
                        color: '#00d4ff',
                        borderColor: 'rgba(0,212,255,0.2)',
                        background: 'rgba(0,212,255,0.08)',
                      }}
                    >
                      {edu.grade}
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-text-muted tracking-wider">{edu.year}</p>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div variants={fadeUp}>
            <p className="text-[10px] text-text-muted tracking-[0.15em] uppercase mb-4">
              Licences &amp; Certifications
            </p>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
            >
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-surface px-5 py-4 flex flex-col gap-1.5 hover:bg-surface-2 transition-colors duration-200"
                >
                  <span className="text-[10px] text-accent tracking-widest uppercase">
                    {certIssuers[cert.name] ?? 'Certificate'}
                  </span>
                  <span className="text-[13px] text-white font-medium leading-snug">{cert.name}</span>
                  <span className="text-[10px] text-text-muted mt-0.5">{cert.year}</span>
                </div>
              ))}
              {/* "More on LinkedIn" cell */}
              <a
                href="https://linkedin.com/in/nguyenhaodo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-transparent px-5 py-4 text-[11px] text-text-muted hover:text-accent transition-colors duration-200 text-center"
                style={{ border: '1px dashed rgba(94,112,128,0.3)' }}
              >
                +8 more on LinkedIn ↗
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
