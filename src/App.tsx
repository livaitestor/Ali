import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import aboutPhoto from '../img/about.jpg'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clapperboard,
  Clock3,
  Film,
  Instagram,
  Languages as LanguagesIcon,
  Linkedin,
  MapPin,
  Menu,
  Phone,
  Play,
  Send,
  Sparkles,
  X,
} from 'lucide-react'

const navItems = ['About', 'Skills', 'Experience', 'Languages', 'Contact']

const skills = [
  'Video Editing',
  'Graphic Design',
  'Multicamera Editing',
  'Social Media',
  'Adobe Photoshop',
  'After Effects',
  'Film Editing',
  'Video Color Grading',
  'Color Correction',
  'Adobe Premiere Pro',
  'Visual Content Creation',
  'Audio Editing',
  'Narration',
  'Motion Graphics',
  'Content Strategy',
  'Video Post-Production',
  'AI Tools for Creators',
]

const experiences = [
  {
    role: 'Freelance Video Editor',
    focus: 'YouTube Content',
    company: 'Self Employed',
    type: 'Freelance',
    date: 'May 2025 — Present',
    duration: '1 yr 3 mos',
    location: 'Tehran Province, Iran',
    mode: 'Remote',
    link: 'https://www.linkedin.com/company/33200573/',
    description:
      'Freelance Video Editor for YouTube creators, handling full post-production of long-form content including editing, pacing, storytelling, audio cleanup, color correction, and final delivery. Focused on maintaining consistent style, improving audience retention, and delivering high-quality videos optimized for platform performance.',
  },
  {
    role: 'Senior Video Editor',
    focus: 'Reality Show',
    company: 'Millionaires League',
    type: 'Contract',
    date: 'Oct 2025 — Jan 2026',
    duration: '4 mos',
    location: 'Tehran Province, Iran',
    mode: 'Hybrid',
    description:
      'Led post-production for a 21-episode reality show sponsored by LBank and Proobco, collaborating as one of two senior editors. Edited high-volume multi-camera footage while managing 13 isolated audio tracks per participant and delivering three episodes per week.',
    bullets: [
      'Multi-camera editing in Adobe Premiere Pro',
      'Advanced color correction in DaVinci Resolve',
      'Audio cleanup, synchronization, and narration integration',
      'Final delivery optimization for YouTube',
      'High-speed rough cuts across complex media structures',
    ],
  },
  {
    role: 'Video Editor',
    focus: 'Social Content',
    company: 'Rexer (رکسر)',
    type: 'Freelance',
    date: 'May 2024 — Apr 2025',
    duration: '1 yr',
    location: 'Tehran Province, Iran',
    mode: 'Remote',
    description:
      'Produced engaging Instagram and YouTube content focused on dogs, cats, and birds, combining educational and entertainment-driven storytelling. Continuously improved editing techniques to grow engagement and resonate with pet enthusiasts.',
  },
  {
    role: 'Content Producer',
    focus: 'Brand Growth',
    company: 'Mohammad Ghaderpanah',
    type: 'Freelance',
    date: 'Sep 2020 — Mar 2024',
    duration: '3 yrs 7 mos',
    location: 'Tehran Niavaran',
    mode: 'Hybrid',
    description:
      "Created more than 500 videos, graphics, and articles related to dog training and behavior over four years. Helped grow the company's social audience from 135K to 250K followers while significantly increasing engagement through strategic, high-quality content.",
  },
]

const languageItems = [
  { language: 'Persian', level: 'Native or bilingual', value: 100, code: 'FA' },
  { language: 'English', level: 'Professional working', value: 78, code: 'EN' },
  { language: 'Arabic', level: 'Elementary', value: 35, code: 'AR' },
  { language: 'Spanish', level: 'Elementary', value: 28, code: 'ES' },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function SectionReveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })
  return (
    <motion.div
      ref={ref}
      variants={reveal}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({
  number,
  eyebrow,
  title,
  copy,
}: {
  number: string
  eyebrow: string
  title: string
  copy?: string
}) {
  return (
    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="eyebrow mb-5">
          <span className="text-white/30">{number}</span>
          {eyebrow}
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
          {title}
        </h2>
      </div>
      {copy && <p className="max-w-md text-sm leading-7 text-white/45">{copy}</p>}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="section-shell flex h-[76px] items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" aria-label="Go to home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-teal/40 bg-teal/10 font-display text-xs font-bold tracking-tight text-teal transition group-hover:border-teal">
            AM
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-medium text-white/45 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-5 py-2.5 text-xs font-semibold text-[#65d7d8] transition hover:border-teal hover:bg-teal/20 sm:flex"
          >
            Let's talk <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/[0.06] bg-ink/95 lg:hidden"
          >
            <div className="section-shell flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/[0.05] py-4 font-display text-sm text-white/70 last:border-0"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <div className="absolute inset-0">
        <div className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-teal/[0.07] blur-[110px]" />
        <div className="absolute bottom-[8%] right-[8%] h-96 w-96 rounded-full bg-[#154658]/15 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
            backgroundSize: '76px 76px',
            maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
          }}
        />
      </div>

      <div className="section-shell relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.76fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            Open to select projects
          </div>
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Hello, I am
          </p>
          <h1 className="title-gradient max-w-4xl font-display text-[clamp(3.3rem,8vw,7.4rem)] font-semibold leading-[0.87] tracking-[-0.075em]">
            Ali Haji
            <br />
            Mazdarani.
          </h1>
          <div className="mt-7 flex min-h-10 items-center gap-3 font-display text-lg font-medium text-white/60 sm:text-2xl">
            <span className="h-px w-7 bg-teal" />
            <TypeAnimation
              sequence={[
                'Visual Content Specialist',
                1600,
                'Video Editor',
                1600,
                'Motion Graphics Artist',
                1600,
              ]}
              wrapper="span"
              speed={48}
              deletionSpeed={65}
              repeat={Infinity}
              className="teal-glow text-white"
            />
          </div>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/47 sm:text-lg">
            Senior Video Editor shaping raw footage into focused stories, expressive visuals, and
            content built to hold attention.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="group flex items-center gap-3 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_36px_rgba(0,142,143,0.25)] transition hover:bg-[#00a4a5]"
            >
              Explore my work
              <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
            </a>
            <a
              href="https://t.me/AliHajiMazdarani"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-white/60 transition hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
                <Play size={13} fill="currentColor" />
              </span>
              Start a conversation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative mx-auto hidden w-full max-w-[420px] lg:block"
        >
          <div className="absolute -inset-10 rounded-full border border-teal/10" />
          <div className="absolute -inset-4 rounded-full border border-white/[0.05]" />
          <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2rem] p-3">
            <img
              src={aboutPhoto}
              alt="Ali Haji Mazdarani working on a production set"
              className="h-full w-full rounded-[1.45rem] object-cover object-[49%_54%] grayscale-[0.12]"
            />
            <div className="absolute inset-3 rounded-[1.45rem] bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-teal">Current frame</p>
                  <p className="mt-1 font-display text-sm font-semibold text-white">On production</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 backdrop-blur">
                  <Clapperboard size={18} />
                </span>
              </div>
            </div>
          </div>
          <div className="glass absolute -right-14 top-16 rounded-2xl px-5 py-4">
            <p className="font-display text-2xl font-semibold text-white">6+</p>
            <p className="text-[10px] uppercase tracking-[0.17em] text-white/35">Years crafting</p>
          </div>
          <div className="glass absolute -bottom-7 -left-12 flex items-center gap-4 rounded-2xl px-5 py-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal/15 text-teal">
              <Film size={17} />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-white">500+ Projects</p>
              <p className="text-[10px] uppercase tracking-[0.14em] text-white/35">Edited & delivered</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/25 md:flex">
        Scroll to discover <ArrowDown size={12} />
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionReveal>
          <SectionHeading
            number="01"
            eyebrow="Behind the timeline"
            title="Story first. Always."
            copy="A precise eye for pace, detail, and the moments that make an audience feel something."
          />
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="group relative min-h-[520px] overflow-hidden rounded-[1.75rem]">
              <img
                src={aboutPhoto}
                alt="Ali Haji Mazdarani on a film production set"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal">
                  Film production set
                </p>
                <p className="max-w-xs font-display text-xl font-semibold leading-snug text-white">
                  Every great final cut starts with being present in the moment.
                </p>
              </div>
            </div>

            <div className="glass flex flex-col justify-between rounded-[1.75rem] p-7 sm:p-10 lg:p-12">
              <div className="space-y-6 text-[15px] leading-8 text-white/55 sm:text-base">
                <p>
                  My story began with a deep passion for the world of pixels. A place where I can
                  sit for hours as the main character of my own journey, tirelessly clicking away
                  and using my creativity to create things that leave an impact on my audience.
                </p>
                <p>
                  It’s been at least six years since I started working professionally in this field,
                  and today I’m active as a visual content specialist, focusing on international
                  collaborations.
                </p>
                <p>
                  This is my world—where I never get tired of working and never stop learning,
                  especially when it comes to AI.
                </p>
                <p className="font-display text-xl font-medium text-white">
                  Ready to collaborate with your brand!
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/[0.07] pt-8 sm:grid-cols-4">
                {[
                  ['Location', 'Tehran / Mashhad'],
                  ['Work mode', 'On-site / Hybrid'],
                  ['Type', 'Contract / Part-time'],
                  ['Status', 'Open to work'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">{label}</p>
                    <p className="mt-2 text-xs font-medium text-white/70">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

function Skills() {
  const [expanded, setExpanded] = useState(false)
  const visibleSkills = expanded ? skills : skills.slice(0, 10)

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-1/3 h-80 bg-teal/[0.025] blur-[100px]" />
      <div className="section-shell relative">
        <SectionReveal>
          <SectionHeading
            number="02"
            eyebrow="Creative toolkit"
            title="Built for every frame."
            copy="Technical depth meets visual instinct—a versatile post-production toolkit for modern content."
          />
          <div className="grid gap-6 lg:grid-cols-[0.68fr_1.32fr]">
            <div className="glass flex min-h-[390px] flex-col justify-between rounded-[1.75rem] p-8">
              <div>
                <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-teal/25 bg-teal/10 text-teal">
                  <Sparkles size={21} />
                </span>
                <p className="font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-white">
                  Ideas move fast.
                  <br />
                  My workflow does too.
                </p>
                <p className="mt-5 text-sm leading-7 text-white/42">
                  From first assembly to final grade, every stage is shaped by story, rhythm, and
                  platform performance.
                </p>
              </div>
              <div className="flex gap-2">
                {['Premiere', 'Resolve', 'After Effects'].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/[0.07] px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-white/35"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-[1.75rem] p-5 sm:p-8">
              <motion.div layout className="grid gap-3 sm:grid-cols-2">
                <AnimatePresence initial={false}>
                  {visibleSkills.map((skill, index) => (
                    <motion.div
                      layout
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28, delay: expanded && index > 9 ? (index - 10) * 0.025 : 0 }}
                      className="group flex items-center justify-between rounded-xl border border-white/[0.065] bg-white/[0.018] px-4 py-4 transition hover:border-teal/30 hover:bg-teal/[0.045]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.04] text-teal transition group-hover:bg-teal/15">
                          <Check size={13} strokeWidth={2.5} />
                        </span>
                        <span className="text-sm text-white/65 transition group-hover:text-white">
                          {skill}
                        </span>
                      </div>
                      <span className="font-display text-[9px] text-white/15">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-white/10 py-3.5 text-xs font-medium text-white/45 transition hover:border-teal/30 hover:text-white"
              >
                {expanded ? 'Show less' : `Show all ${skills.length} capabilities`}
                <ChevronDown
                  size={14}
                  className={`transition duration-300 ${expanded ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionReveal>
          <SectionHeading
            number="03"
            eyebrow="Selected experience"
            title="Six years in motion."
            copy="From high-volume reality formats to social-first storytelling, each role sharpened a different part of the craft."
          />
        </SectionReveal>
        <div className="relative mx-auto max-w-5xl">
          <div className="timeline-line absolute bottom-0 left-[19px] top-0 w-px md:left-1/2" />
          {experiences.map((experience, index) => (
            <SectionReveal key={`${experience.company}-${experience.role}`} className="relative mb-8 last:mb-0">
              <div
                className={`grid md:grid-cols-2 md:gap-16 ${
                  index % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'
                }`}
              >
                <div className="ml-12 md:ml-0">
                  <div className="glass group rounded-[1.5rem] p-6 transition duration-300 hover:border-teal/25 sm:p-8">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <span className="rounded-full border border-teal/20 bg-teal/[0.07] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#4bc8c9]">
                        {experience.focus}
                      </span>
                      <span className="font-display text-[10px] text-white/20">
                        0{experiences.length - index}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                      {experience.role}
                    </h3>
                    <p className="mt-2 text-sm text-white/50">
                      {experience.company} <span className="text-white/20">·</span> {experience.type}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-white/30">
                      <span className="flex items-center gap-1.5">
                        <Clock3 size={12} /> {experience.date} · {experience.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} /> {experience.location} · {experience.mode}
                      </span>
                    </div>
                    <p className="mt-6 text-sm leading-7 text-white/43">{experience.description}</p>
                    {experience.bullets && (
                      <ul className="mt-5 space-y-2">
                        {experience.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-xs leading-5 text-white/38">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {experience.link && (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-teal transition hover:text-[#65d7d8]"
                      >
                        View company <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>
              <span className="absolute left-[12px] top-9 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-teal bg-ink shadow-[0_0_18px_rgba(0,142,143,.7)] md:left-1/2 md:-translate-x-1/2">
                <span className="h-1 w-1 rounded-full bg-teal" />
              </span>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Languages() {
  return (
    <section id="languages" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionReveal>
          <SectionHeading
            number="04"
            eyebrow="Communication"
            title="Across cultures."
            copy="Language adds nuance to every collaboration and opens the door to stories beyond borders."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {languageItems.map((item, index) => (
              <motion.article
                key={item.language}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="glass group rounded-[1.5rem] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] font-display text-xs font-bold text-teal">
                    {item.code}
                  </span>
                  <LanguagesIcon size={16} className="text-white/15 transition group-hover:text-teal" />
                </div>
                <h3 className="mt-8 font-display text-xl font-semibold text-white">{item.language}</h3>
                <p className="mt-2 min-h-9 text-xs leading-5 text-white/35">{item.level} proficiency</p>
                <div className="mt-6 flex gap-1">
                  {[20, 40, 60, 80, 100].map((point) => (
                    <span
                      key={point}
                      className={`h-1 flex-1 rounded-full ${
                        point <= item.value ? 'bg-teal shadow-[0_0_8px_rgba(0,142,143,.4)]' : 'bg-white/[0.07]'
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-3 text-right font-display text-[9px] uppercase tracking-[0.14em] text-white/20">
                  Level 0{Math.ceil(item.value / 20)}
                </p>
                <span className="sr-only">Language card {index + 1}</span>
              </motion.article>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-teal/20 bg-[#091316] px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal/15 blur-[100px]" />
            <div className="absolute bottom-0 left-1/3 h-28 w-96 bg-teal/[0.06] blur-[80px]" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
            <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="eyebrow mb-6">05 · Start a project</p>
                <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl">
                  Have footage?
                  <br />
                  <span className="text-teal teal-glow">Let's make it matter.</span>
                </h2>
                <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                  Whether it is a long-form series, a social campaign, or a story still taking shape,
                  I am ready to turn the raw material into something audiences remember.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="tel:+989214329289"
                  className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 transition hover:border-teal/35 hover:bg-teal/[0.06]"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                      <Phone size={17} />
                    </span>
                    <span>
                      <span className="block text-[9px] uppercase tracking-[0.16em] text-white/25">
                        Phone
                      </span>
                      <span className="mt-1 block text-sm text-white/70">+98 921 432 9289</span>
                    </span>
                  </span>
                  <ArrowUpRight size={16} className="text-white/20 transition group-hover:text-teal" />
                </a>
                <a
                  href="https://t.me/AliHajiMazdarani"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 transition hover:border-teal/35 hover:bg-teal/[0.06]"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                      <Send size={17} />
                    </span>
                    <span>
                      <span className="block text-[9px] uppercase tracking-[0.16em] text-white/25">
                        Telegram
                      </span>
                      <span className="mt-1 block text-sm text-white/70">@AliHajiMazdarani</span>
                    </span>
                  </span>
                  <ArrowUpRight size={16} className="text-white/20 transition group-hover:text-teal" />
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-9">
      <div className="section-shell flex flex-col items-center justify-between gap-7 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-white">Ali Haji Mazdarani</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/25">
            Senior Video Editor
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/alihaji.mzd/',
              icon: <Instagram size={16} />,
            },
            {
              label: 'Telegram',
              href: 'https://t.me/AliHajiMazdarani',
              icon: <Send size={16} />,
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/alihajimzd/',
              icon: <Linkedin size={16} />,
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/35 transition hover:border-teal/40 hover:bg-teal/10 hover:text-teal"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-[10px] uppercase tracking-[0.15em] text-white/20">
          © {new Date().getFullYear()} · Crafted frame by frame
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
