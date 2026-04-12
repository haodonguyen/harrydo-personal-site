import type { SkillGroup, Experience, Project, Education, Certification } from '@/types'

export const personalInfo = {
  name: 'Harry Do',
  fullName: 'Nguyen Hao Do',
  title: 'Graduate Software Engineer',
  location: 'Melbourne, Victoria',
  email: 'nguyenhao.do@gmail.com',
  phone: '(+61) 423 437 069',
  linkedin: 'https://linkedin.com/in/nguyenhaodo',
  github: 'https://github.com/nguyenhaodo',
  bio: "I'm a Graduate Software Engineer based in Melbourne with a passion for building scalable, high-quality software. With hands-on internship experience in full-stack development — from AI-driven platforms to enterprise HRM systems — I bring strong TypeScript, React, and Node.js skills alongside a solid understanding of cloud infrastructure and modern DevOps practices. I thrive in collaborative environments and am always looking to push the boundaries of what's possible with technology.",
  shortBio: 'Building modern software with TypeScript, React & Node.js.',
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Scala'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'Redux', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'GraphQL', 'RESTful APIs', 'JWT Auth', 'BullMQ', 'Prisma'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'SQL', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, Route 53)', 'Docker', 'GitHub Actions CI/CD', 'Vercel', 'Firebase', 'Git'],
  },
  {
    category: 'AI & Tools',
    items: ['Claude Code', 'OpenAI API', 'GitHub Copilot', 'Cursor', 'Apollo Federation', 'Microservices'],
  },
]

export const experience: Experience[] = [
  {
    company: 'SEEDSoft',
    role: 'Software Engineer Intern',
    location: 'Sydney, NSW (Remote)',
    period: 'April 2025 – October 2025',
    points: [
      'Developed end-to-end full-stack features using TypeScript, React, and Node.js, supporting a scalable AI-driven platform',
      'Designed and implemented REST APIs and backend services, enabling high-performance and maintainable system architecture',
      'Built asynchronous processing pipelines (BullMQ, Redis) to improve system scalability and handle high-volume tasks',
      'Optimised application workflows and integrated LLM-powered features, enhancing user experience and platform capability',
    ],
  },
  {
    company: 'Groove Technology',
    role: 'Software Developer Intern',
    location: 'HCMC, Vietnam',
    period: 'December 2024 – March 2025',
    points: [
      'Contributed to a large-scale enterprise HRM system using microservices architecture and GraphQL (Apollo Federation)',
      'Developed backend services with TypeScript, Prisma, and PostgreSQL, supporting multi-tenant and scalable data models',
      'Collaborated with engineers and stakeholders to deliver high-quality enterprise features aligned with business needs',
      'Followed best practices in code quality, version control, and development workflows within an agile environment',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Expense Tracker Finance App',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    date: 'December 2025',
    description:
      'A full-stack web application enabling users to track expenses with secure authentication, persistent data storage, and a clean, intuitive UI.',
    points: [
      'Designed and built a full-stack web app with RESTful APIs and JWT-based authentication',
      'Implemented relational database schema design following clean code principles',
      'Deployed to production using GitHub Actions CI/CD pipelines and Vercel for automated builds',
    ],
    github: 'https://github.com/nguyenhaodo',
    demo: null,
    featured: true,
  },
  {
    title: 'Gesture-Based Image Manipulation',
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    date: 'January 2025',
    description:
      'A real-time gesture-controlled image manipulation system using computer vision and hand landmark detection — no hardware controller required.',
    points: [
      'Built real-time gesture recognition using MediaPipe hand landmark detection',
      'Implemented gesture-based crop, resize, brightness adjustment, and rotation via OpenCV',
    ],
    github: 'https://github.com/nguyenhaodo',
    demo: null,
    featured: false,
  },
]

export const education: Education[] = [
  {
    institution: 'La Trobe University',
    degree: 'Bachelor of Information Technology',
    major: 'Major in Software Engineering',
    year: 'July 2025',
    grade: 'WAM: 81 / 100',
    award: 'La Trobe High Achiever Scholarship (25%)',
  },
  {
    institution: 'Ton Duc Thang University',
    degree: 'Bachelor of Software Engineering',
    major: 'Major in Software Engineering',
    year: 'June 2023',
    grade: '',
    award: 'Fully funded scholarship (100%)',
  },
]

export const certifications: Certification[] = [
  { name: 'Claude Code in Action', year: '2026' },
  { name: 'AI Fundamentals', year: '2026' },
  { name: 'Microsoft AI Skills: Building Agents with Copilot Studio', year: '2025' },
  { name: 'Azure DevOps Foundation', year: '2024' },
  { name: 'Google Cloud Computing Foundation', year: '2024' },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
