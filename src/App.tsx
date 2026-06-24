import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import EmailLink from './components/EmailLink'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-dvh bg-navy text-slate-muted">
      <Navbar />
      <SocialLinks />
      <EmailLink />

      <main className="mx-auto min-h-dvh w-full max-w-400 px-6.25 sm:px-12.5 lg:px-25 xl:px-37.5">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
