import type { SkillGroup, Experience, Project, Education, Certification, Testimonial } from '@/types'

export const personalInfo = {
  name: 'Harry Do',
  fullName: 'Nguyen Hao Do',
  title: 'Graduate Software Engineer',
  location: 'Melbourne, Victoria',
  email: 'nguyenhao.do@gmail.com',
  phone: '(+61) 423 437 069',
  linkedin: 'https://linkedin.com/in/nguyenhaodo',
  github: 'https://github.com/nguyenhaodo',
  bio: 'Software Engineering graduate (WAM 81/100, La Trobe High Achiever Scholar) with hands-on experience across AI-driven SaaS and enterprise HRMS systems. Proven ability to deliver production-ready features independently, with practical experience integrating LLM and AI-driven workflows into real-world applications. Strong problem-solver and fast learner, seeking graduate or junior software engineering roles across Australia.',
  shortBio: 'Building modern software with TypeScript, React & Node.js.',
  bioParagraphs: [
    "I'm a Software Engineering graduate based in Melbourne, and I care about one thing above all: writing code that actually gets used — production-grade, maintainable, and built with the user in mind.",
    "Over the past year I completed two internships in very different environments. At SEEDSoft, a lean AI startup in Sydney, I owned end-to-end features in a fast-moving codebase — learning to make good decisions fast. At Groove Technology, I navigated an enterprise-grade Nx monorepo with microservices, Apollo Federation, and multi-tenant architecture — learning what \"production-grade\" truly means.",
    "I integrate AI tooling — Claude Code, Cursor, GitHub Copilot — as a genuine part of my engineering workflow, not as a shortcut but as a force-multiplier. I've shipped LLM-powered features into real products, not just side projects.",
    "Looking for a graduate or junior engineering role where I can contribute from day one, keep learning fast, and build things that matter.",
  ],
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'GraphQL', 'RESTful APIs', 'JWT Auth', 'BullMQ', 'Prisma'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3)', 'Docker', 'GitHub Actions CI/CD', 'Vercel', 'Git'],
  },
  {
    category: 'AI & Tools',
    items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'OpenAI API', 'Prompt Engineering'],
  },
]

export const experience: Experience[] = [
  {
    company: 'SEEDSoft',
    role: 'Software Engineer Intern',
    location: 'Sydney (Remote)',
    period: 'Apr 2025 – Oct 2025',
    duration: '· 7 months',
    companyDesc: 'AI-driven SaaS platform startup — small team, fast iteration, real ownership.',
    points: [
      'Diagnosed a task queue bottleneck and re-architected the pipeline using <strong>BullMQ and Redis</strong> — reducing processing latency by ↓ ~40% and enabling ↑ 3× throughput under peak load',
      'Integrated <strong>LLM-powered features and AI agents</strong> directly into the product, applying system design thinking to automate repetitive platform workflows — shipped to production, used by real users',
      'Developed <strong>full-stack features end-to-end</strong> using Next.js, TypeScript, and Tailwind within an Agile/Scrum environment, collaborating closely with product and design through structured SDLC practices',
      'Designed and maintained <strong>RESTful APIs and backend services</strong>, writing tests and enforcing clean code standards across the codebase',
    ],
    stack: ['TypeScript', 'Next.js', 'Node.js', 'BullMQ', 'Redis', 'LLM Integration', 'REST APIs', 'Agile'],
  },
  {
    company: 'Groove Technology',
    role: 'Software Developer Intern',
    location: 'Ho Chi Minh City',
    period: 'Dec 2024 – Mar 2025',
    duration: '· 4 months',
    companyDesc: 'Enterprise tech company building a production-grade HRMS for international clients — microservices, multi-tenant architecture, large-scale codebase.',
    points: [
      'Contributed to an enterprise HRMS serving 200+ users across a <strong>multi-tenant architecture</strong> — developed GraphQL queries via <strong>Apollo Federation gateway</strong> and reusable UI components for Employee Profiles, Leave Management, and RBAC workflows',
      'Built and optimised <strong>backend services using TypeScript, Prisma, and PostgreSQL</strong> — supporting complex enterprise data models with high performance, scalability, and integrity requirements',
      'Navigated a large-scale <strong>Nx monorepo</strong> with multiple microservices and shared libraries — ramped up and delivered <strong>production-ready GraphQL features independently within the first week</strong>',
      '<strong>Recognised by senior leadership</strong> for proactive problem-solving and effective contributions — referenced directly in a recommendation letter by the CEO',
    ],
    stack: ['GraphQL', 'Apollo Federation', 'TypeScript', 'Prisma', 'PostgreSQL', 'Nx Monorepo', 'React', 'Tailwind CSS'],
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
    title: 'Accessibility-Friendly Mobile App',
    stack: ['React Native', 'Firebase', 'Firestore', 'Cloud Messaging'],
    date: 'March 2025 – Present',
    description:
      'A cross-platform mobile application helping users find and contribute information about wheelchair-accessible locations and pathways.',
    points: [
      'Built cross-platform UI/UX using React Native targeting both iOS and Android from a single codebase',
      'Integrated Firebase services — Firestore for data storage, Authentication for user management, and Cloud Messaging for real-time updates on accessible locations',
      'Achieved full-stack mobile development capabilities by combining React Native frontend with a robust Firebase backend',
    ],
    github: 'https://github.com/nguyenhaodo',
    demo: null,
    featured: false,
  },
  {
    title: 'Gesture-Based Image Manipulation',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'Tkinter'],
    date: 'August 2024 – October 2024',
    description:
      'A gesture-controlled image manipulation desktop application using computer vision and hand landmark detection — no hardware controller required.',
    points: [
      'Designed gesture recognition pipeline with MediaPipe for real-time hand landmark detection and OpenCV for image processing operations',
      'Optimised low-latency response and accuracy by implementing neutral gesture-based termination for smoother transitions',
      'Managed project tasks in Jira and documented progress in Confluence, applying agile methodologies throughout development',
    ],
    github: 'https://github.com/nguyenhaodo',
    demo: null,
    featured: false,
  },
  {
    title: 'Groove Technology Website Clone',
    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    date: 'June 2024 – July 2024',
    description:
      'A pixel-accurate frontend replication of Groove Technology\'s website, showcasing component architecture, state management, and responsive design.',
    points: [
      'Replicated Groove Technology\'s website UI in React.js with accurate component architecture and responsive layouts',
      'Translated complex web design into clean JSX/CSS, implementing interactive UI elements and responsive behaviour',
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
    grade: 'GPA: 3.6 / 4.0',
    award: 'Fully funded scholarship (100%)',
  },
]

export const certifications: Certification[] = [
  { name: 'Google AI Professional Certificate', year: '2026' },
  { name: 'Claude Code in Action', year: '2026' },
  { name: 'Microsoft AI Skills: Building Agents with Copilot Studio', year: '2025' },
  { name: 'Azure DevOps Foundation', year: '2024' },
  { name: 'Google Cloud Computing Foundation', year: '2024' },
]

export const testimonials: Testimonial[] = [
  {
    quote: 'Harry is one of the most driven, diligent, and capable young people I have had the pleasure of knowing. He consistently delivered work well beyond his years of experience and exceeded all expectations. Just as importantly, he\'s curious, thoughtful, respectful, and easy to collaborate with. Any team would be lucky to have him.',
    name: 'Matt Long',
    role: 'CEO · Groove Technology',
    initials: 'ML',
    avatarStyle: 'cyan',
    href: 'https://groovetechnology.com',
  },
  {
    quote: 'Harry is one of the most promising junior engineers I\'ve worked with. He tackled GraphQL API development and React UI implementation with an impressive level of maturity. His technical foundation is solid, but his attitude and eagerness to learn are what truly set him apart. He will be a great addition to any engineering culture.',
    name: 'Thinh Vo',
    role: 'Software Engineer · Groove Technology',
    initials: 'TV',
    avatarStyle: 'violet',
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
