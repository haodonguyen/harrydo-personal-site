'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Testimonial() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-2xl border border-border bg-surface p-8 md:p-12 overflow-hidden"
        >
          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-accent" />

          {/* Large decorative quote mark */}
          <span
            className="absolute top-4 right-8 text-[8rem] leading-none font-serif text-accent/10 select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <div className="relative">
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-white/90 italic leading-relaxed font-light mb-8">
              &ldquo;Harry is a resourceful problem solver&hellip; exceptionally well-rounded for
              someone at the start of his career and would make him a welcome and valuable
              contributor in any workplace environment.&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              {/* Initials avatar */}
              <div className="w-11 h-11 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <span className="text-accent text-sm font-semibold tracking-wide">ML</span>
              </div>

              <div>
                <p className="text-white font-semibold text-sm">Matt Long</p>
                <p className="text-text-muted text-sm">
                  Chief Executive Officer&nbsp;&mdash;&nbsp;
                  <a
                    href="https://groovetechnology.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    Groove Technology
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
