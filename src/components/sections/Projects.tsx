'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-14">
            <span className="text-[10px] text-accent font-mono tracking-widest uppercase flex-shrink-0">
              03 — Projects
            </span>
            <h2 className="text-3xl md:text-[40px] font-display font-extrabold text-white tracking-tight leading-none">
              Things I&apos;ve Built
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          {/* Featured project */}
          {featured && (
            <motion.div variants={fadeUp} className="mb-8">
              <div className="group relative p-8 md:p-10 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 glow-blue">
                {/* Featured tag */}
                <span className="inline-block text-xs font-mono text-accent border border-accent/30 bg-accent/10 px-3 py-1 rounded-full mb-6">
                  Featured Project
                </span>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-3">{featured.title}</h3>
                    <p className="text-text-secondary text-base leading-relaxed mb-5">
                      {featured.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {featured.points.map((p, i) => (
                        <li key={i} className="flex gap-3 text-text-muted text-sm">
                          <span className="text-accent flex-shrink-0">—</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-text-muted text-xs font-mono mb-5">{featured.date}</p>
                  </div>

                  <div className="space-y-4">
                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {featured.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 border border-border text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      {featured.github && (
                        <a
                          href={featured.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors px-4 py-2 rounded-lg bg-white/5 border border-border hover:border-white/20"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                      {featured.demo && (
                        <a
                          href={featured.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-white transition-colors px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group p-6 rounded-xl bg-surface border border-border hover:border-white/10 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg leading-snug">{project.title}</h3>
                  <span className="text-text-muted text-xs font-mono ml-4 flex-shrink-0">{project.date}</span>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-border text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-text-secondary hover:text-white transition-colors"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-accent hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
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
