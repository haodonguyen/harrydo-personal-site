'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stats = [
  { value: '2', label: 'Internships' },
  { value: '81', label: 'WAM Score' },
  { value: '5+', label: 'Certifications' },
  { value: '2+', label: 'Projects Shipped' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Label */}
          <motion.p variants={fadeUp} className="text-accent text-sm font-mono font-medium mb-3 tracking-widest uppercase">
            About Me
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-12 max-w-2xl leading-tight"
          >
            Passionate engineer,<br />
            <span className="text-text-secondary">constant learner.</span>
          </motion.h2>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* Bio */}
            <motion.div variants={fadeUp} className="space-y-5">
              <p className="text-text-secondary text-base leading-loose">
                {personalInfo.bio}
              </p>
              <p className="text-text-secondary text-base leading-loose">
                Currently finishing my <span className="text-white font-medium">Bachelor of IT at La Trobe University</span> (WAM: 81/100), I have built experience across AI-driven startups and enterprise software companies. Actively seeking graduate and junior software engineering roles in Melbourne and beyond.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
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
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-surface border border-border"
                >
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-text-muted text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
