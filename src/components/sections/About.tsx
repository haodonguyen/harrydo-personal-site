'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { personalInfo } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stats = [
  { value: 2,   suffix: '',  label: 'Internships'      },
  { value: 81,  suffix: '',  label: 'WAM Score'         },
  { value: 200, suffix: '+', label: 'Users Served'      },
  { value: 40,  suffix: '%', label: 'Latency Reduced'   },
]

function CountUp({ to, suffix = '', duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * to))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

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
                  <p className="text-3xl font-bold text-white mb-1">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </p>
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
