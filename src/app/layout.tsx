import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Harry Do — Graduate Software Engineer',
  description:
    'Portfolio of Harry Do, a Graduate Software Engineer based in Melbourne, Victoria. Specialising in full-stack development with TypeScript, React, Node.js, and cloud technologies.',
  keywords: ['Harry Do', 'Software Engineer', 'Melbourne', 'TypeScript', 'React', 'Next.js', 'Portfolio'],
  openGraph: {
    title: 'Harry Do — Graduate Software Engineer',
    description: 'Graduate Software Engineer based in Melbourne. TypeScript · React · Node.js · Cloud.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-white antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
