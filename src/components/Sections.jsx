import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-semibold text-white">About</motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-slate-300 leading-relaxed max-w-3xl">
          I’m a Senior Laravel Developer with 7+ years of experience delivering secure, scalable web platforms. I specialize in architecting RESTful APIs, modular monoliths, multi-tenant SaaS, and performance-first backends, with a focus on developer experience and maintainability.
        </motion.p>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = ['PHP', 'Laravel', 'HTML', 'CSS', 'Angular (12)', 'Node.js', 'MySQL', 'PostgreSQL', 'MongoDB']
  return (
    <section id="skills" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Skills</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 px-4 py-3 text-slate-200">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10" />
              <span className="relative z-10">{s}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const items = [
    { title: 'Senior Laravel Developer', company: 'Freelance / Agency', period: '2018 — Present', points: [
      'Designed and maintained multi-tenant Laravel SaaS with millions of monthly requests',
      'Led API-first builds integrating Angular frontends and mobile clients',
      'Optimized SQL queries, indexing, and caching strategies for 10x performance gains'
    ]},
    { title: 'Backend Engineer', company: 'Product Teams', period: '2016 — 2018', points: [
      'Built Laravel microservices integrating with Node.js workers and message queues',
      'Implemented CI/CD pipelines, test suites, and observability'
    ]}
  ]
  return (
    <section id="experience" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Experience</h2>
        <div className="mt-10 space-y-6">
          {items.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-fuchsia-500/0" />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-slate-300">{item.company}</p>
                  </div>
                  <span className="text-sm text-slate-400">{item.period}</span>
                </div>
                <ul className="mt-4 list-disc pl-5 text-slate-300 space-y-1">
                  {item.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const cards = [
    { title: 'SaaS Admin Platform', tech: ['Laravel', 'MySQL', 'Angular'], desc: 'Multi-tenant admin with RBAC, metrics, and billing.' },
    { title: 'Commerce API', tech: ['Laravel', 'PostgreSQL', 'Node.js'], desc: 'Headless commerce with webhook integrations.' },
    { title: 'Analytics Pipeline', tech: ['PHP', 'MongoDB'], desc: 'Event ingestion and reporting with dashboards.' },
  ]
  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Projects</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.a key={i} href="#contact" whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg">
              <div className="absolute -inset-20 bg-[radial-gradient(60px_circle_at_var(--x,50%)_var(--y,50%),rgba(56,189,248,0.15),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <h3 className="text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-slate-300">{c.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded border border-white/10 text-slate-300">{t}</span>
                ))}
              </div>
              <div className="mt-6 h-32 rounded-lg bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-white/10" />
            </motion.a>
          ))}
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `document.querySelectorAll('[href="#contact"]').forEach(card=>{card.addEventListener('mousemove', (e)=>{card.style.setProperty('--x', e.offsetX+'px');card.style.setProperty('--y', e.offsetY+'px');})})` }} />
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Contact</h2>
        <p className="mt-4 text-slate-300 max-w-2xl">Have a project in mind or need help scaling your platform? Let’s talk.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input placeholder="Name" className="px-4 py-3 rounded-md bg-slate-900/60 border border-white/10 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" />
          <input placeholder="Email" className="px-4 py-3 rounded-md bg-slate-900/60 border border-white/10 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" />
          <textarea placeholder="Tell me about your project" rows={4} className="sm:col-span-2 px-4 py-3 rounded-md bg-slate-900/60 border border-white/10 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" />
          <button className="sm:col-span-2 px-5 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white">Send Message</button>
        </form>
      </div>
    </section>
  )
}
