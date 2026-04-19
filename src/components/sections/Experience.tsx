'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { experience } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-14 border-t border-border bg-surface">
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
              02 — Experience
            </span>
            <h2 className="text-3xl md:text-[40px] font-display font-extrabold text-white tracking-tight leading-none">
              Where I&apos;ve Worked
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          {/* Experience items */}
          <div>
            {experience.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 py-12 ${
                  i < experience.length - 1 ? 'border-b border-border' : ''
                } ${i === 0 ? 'pt-0' : ''}`}
              >
                {/* Left sidebar */}
                <div className="pt-1">
                  {/* Company logo box */}
                  <div
                    className="w-16 h-16 flex items-center justify-center font-display text-[13px] font-extrabold text-accent mb-4 border border-border transition-all duration-200 hover:border-accent hover:bg-surface-2"
                  >
                    {job.logo ? (
                      <Image
                        src={job.logo}
                        alt={job.company}
                        width={48}
                        height={48}
                        className="object-contain p-2"
                      />
                    ) : (
                      job.company.slice(0, 2).toUpperCase()
                    )}
                  </div>
                  <div className="text-[11px] text-text-muted leading-relaxed mb-1.5">
                    {job.period.split(' – ').map((line, j) => (
                      <span key={j} className="block">{line}</span>
                    ))}
                    {job.duration && (
                      <span className="block mt-0.5">{job.duration}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-text-muted">
                    <span>📍</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                {/* Right main */}
                <div>
                  <h3 className="text-[22px] font-display font-bold tracking-tight text-white mb-1 leading-tight">
                    {job.role}
                  </h3>
                  <div className="text-xs text-accent tracking-widest uppercase mb-1.5">{job.company}</div>
                  {job.companyDesc && (
                    <p className="font-serif italic text-[13px] text-text-muted leading-relaxed mb-5">
                      {job.companyDesc}
                    </p>
                  )}

                  {/* Bullets */}
                  <ul className="flex flex-col gap-3.5 mb-6">
                    {job.points.map((point, j) => (
                      <li key={j} className="text-sm text-text-muted leading-relaxed pl-5 relative [&_strong]:text-white [&_strong]:font-medium">
                        <span className="absolute left-0 top-[3px] text-accent text-[10px]">▸</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: point
                              .replace(/↓ ~40%/g, '<span class="inline-flex items-center gap-1 font-mono text-[12px] text-green-400 px-1.5 py-0.5 mx-0.5" style="background:rgba(52,211,153,0.07);border:1px solid rgba(52,211,153,0.2)">↓ ~40%</span>')
                              .replace(/↑ 3× throughput/g, '<span class="inline-flex items-center gap-1 font-mono text-[12px] text-green-400 px-1.5 py-0.5 mx-0.5" style="background:rgba(52,211,153,0.07);border:1px solid rgba(52,211,153,0.2)">↑ 3× throughput</span>')
                              .replace(/200\+ users/g, '<span class="inline-flex items-center gap-1 font-mono text-[12px] text-green-400 px-1.5 py-0.5 mx-0.5" style="background:rgba(52,211,153,0.07);border:1px solid rgba(52,211,153,0.2)">200+ users</span>')
                          }}
                        />
                      </li>
                    ))}
                  </ul>

                  {/* Stack tags */}
                  {job.stack && (
                    <div className="flex flex-wrap gap-2">
                      {job.stack.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] text-text-muted px-2.5 py-1 border border-border hover:border-white/15 hover:text-text-secondary transition-all duration-150 tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
