import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Testimonial from '@/components/sections/Testimonial'
import Projects from '@/components/sections/Projects'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import CustomCursor from '@/components/ui/CustomCursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Testimonial />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
