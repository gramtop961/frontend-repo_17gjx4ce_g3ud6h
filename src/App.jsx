import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Experience, Projects, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-10 text-center text-slate-500 border-t border-white/10 bg-slate-950">
        <p>© {new Date().getFullYear()} Senior Laravel Developer — 7+ years</p>
      </footer>
    </div>
  )
}

export default App
