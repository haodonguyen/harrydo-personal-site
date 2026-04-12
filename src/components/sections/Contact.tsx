'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/nguyenhaodo',
    href: personalInfo.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/nguyenhaodo',
    href: personalInfo.github,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-accent text-sm font-mono font-medium mb-3 tracking-widest uppercase">
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Get in touch
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-text-secondary text-base md:text-lg max-w-xl mb-12 leading-relaxed"
          >
            I&apos;m actively looking for graduate and junior software engineering opportunities. Whether you have a role, a project, or just want to say hello — my inbox is open.
          </motion.p>

          {/* Contact cards */}
          <motion.div
            variants={fadeUp}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-5 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-200 flex flex-col gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <item.icon size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-text-muted text-xs mb-0.5">{item.label}</p>
                  <p className="text-white text-sm font-medium group-hover:text-accent transition-colors truncate">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Location note */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-text-muted text-sm"
          >
            <MapPin size={14} />
            <span>Based in {personalInfo.location} — open to remote roles.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
