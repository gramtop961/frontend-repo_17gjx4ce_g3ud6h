import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.12),transparent_40%)] pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="max-w-3xl text-slate-200">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.9, y: 0 }} transition={{ delay: 0.1 }} className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Portfolio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-2 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500">a Senior Laravel Developer</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 text-lg md:text-xl text-slate-300/90">
            7+ years crafting scalable backends, APIs, and platforms. I build robust PHP/Laravel systems and modern frontends with clean architecture and performance in mind.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex items-center gap-4">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-[0_0_30px_rgba(56,189,248,.25)] hover:shadow-[0_0_36px_rgba(217,70,239,.35)] transition">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-white/15 hover:border-white/30 text-slate-200/90 hover:text-white transition">Contact</a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-slate-400">
        <a href="#about" className="group inline-flex flex-col items-center">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <span className="mt-2 h-8 w-[2px] overflow-hidden rounded-full bg-white/10">
            <span className="block h-8 w-[2px] bg-gradient-to-b from-cyan-400 to-fuchsia-500 animate-[scrollDown_1.8s_ease-in-out_infinite]" />
          </span>
        </a>
      </div>

      <style>{`@keyframes scrollDown { 0% { transform: translateY(-100%); opacity: .2 } 50% { opacity: 1 } 100% { transform: translateY(100%); opacity: .2 } }`}</style>
    </section>
  )
}
