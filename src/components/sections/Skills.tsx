'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import { cn } from '@/lib/utils'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const categoryColors: Record<string, string> = {
  Languages: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  Frontend: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  'Backend & APIs': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  Databases: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  'Cloud & DevOps': 'bg-sky-500/10 text-sky-300 border-sky-500/20',
  'AI & Tools': 'bg-pink-500/10 text-pink-300 border-pink-500/20',
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-accent text-sm font-mono font-medium mb-3 tracking-widest uppercase">
            Technical Skills
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-12 leading-tight"
          >
            Tech I work with
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                variants={fadeUp}
                custom={i}
                className="p-6 rounded-xl bg-surface border border-border hover:border-white/10 transition-colors duration-200"
              >
                <h3 className="text-white font-semibold text-sm mb-4 tracking-wide">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={cn(
                        'text-xs px-2.5 py-1 rounded-md border font-medium',
                        categoryColors[group.category] ??
                          'bg-white/5 text-text-secondary border-border'
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
