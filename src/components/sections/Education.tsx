'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { education, certifications } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-accent text-sm font-mono font-medium mb-3 tracking-widest uppercase">
            Education & Certifications
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-14 leading-tight"
          >
            Academic background
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Education */}
            <motion.div variants={fadeUp}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                <GraduationCap size={16} className="text-accent" />
                Education
              </h3>
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl bg-surface border border-border hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-white font-semibold text-base">{edu.institution}</h4>
                      <span className="text-text-muted text-xs font-mono flex-shrink-0">{edu.year}</span>
                    </div>
                    <p className="text-text-secondary text-sm mb-1">{edu.degree}</p>
                    {edu.major && (
                      <p className="text-text-muted text-xs mb-2">{edu.major}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.grade && (
                        <span className="text-xs px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-medium">
                          {edu.grade}
                        </span>
                      )}
                      {edu.award && (
                        <span className="text-xs px-2.5 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 font-medium">
                          {edu.award}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeUp}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                <Award size={16} className="text-accent" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-surface border border-border hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{cert.name}</span>
                    </div>
                    <span className="text-text-muted text-xs font-mono flex-shrink-0 ml-4">{cert.year}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
