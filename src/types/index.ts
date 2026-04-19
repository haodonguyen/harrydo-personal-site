export interface SkillGroup {
  category: string
  items: string[]
}

export interface Experience {
  company: string
  role: string
  location: string
  period: string
  duration?: string
  logo?: string
  companyDesc?: string
  points: string[]
  stack?: string[]
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
  avatarStyle: 'cyan' | 'violet'
  href?: string
}

export interface Project {
  title: string
  stack: string[]
  date: string
  description: string
  points: string[]
  github: string | null
  demo: string | null
  featured: boolean
}

export interface Education {
  institution: string
  degree: string
  major: string
  year: string
  grade: string
  award: string
}

export interface Certification {
  name: string
  year: string
}
