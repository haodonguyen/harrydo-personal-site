'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'
import { Briefcase, MapPin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-accent text-sm font-mono font-medium mb-3 tracking-widest uppercase">
            Work Experience
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-14 leading-tight"
          >
            Where I&apos;ve worked
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {experience.map((job, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Dot */}
                  <div className="absolute left-[-4px] md:left-[20px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background" />

                  {/* Card */}
                  <div className="p-6 md:p-8 rounded-xl bg-surface border border-border hover:border-white/10 transition-colors duration-200">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} className="text-accent flex-shrink-0" />
                          <span className="text-accent text-sm font-medium">{job.company}</span>
                        </div>
                        <h3 className="text-white font-semibold text-lg">{job.role}</h3>
                        <div className="flex items-center gap-1.5 mt-1 text-text-muted text-sm">
                          <MapPin size={12} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <span className="text-text-muted text-sm font-mono whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2.5">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                          <span className="text-accent flex-shrink-0 mt-0.5">—</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
