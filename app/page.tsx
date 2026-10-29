import {
  ArrowRight, Brain, Briefcase, Download, HeartPulse, Layers, Mail,
  MapPin, PawPrint, Radio, ScanLine, Smartphone, GraduationCap,
} from "lucide-react";
import HeroOrb from "@/components/HeroOrb";
import ChatWidget from "@/components/ChatWidget";
import ContactForm from "@/components/ContactForm";
import { projects, experience, skills, links } from "../lib/data";

const projectIcons = [Brain, Briefcase, HeartPulse, ScanLine, Smartphone, PawPrint];
const tileGradients = [
  "from-cyan-400 to-blue-500",
  "from-violet-500 to-blue-500",
  "from-violet-500 to-fuchsia-500",
  "from-cyan-400 to-violet-500",
  "from-blue-500 to-violet-500",
  "from-cyan-400 to-emerald-400",
];

const wrap = "mx-auto max-w-6xl px-5 sm:px-8";

const marqueeItems = [
  "Next.js", "React Native", "Node.js", "PostgreSQL",
  "Socket.IO", "RAG & agents", "TypeScript",
];

const whatIDo = [
  {
    icon: Layers,
    title: "Full stack web apps",
    desc: "Role-based platforms for hospitals, doctors and patients, built with secure auth and clean workflows.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    icon: Radio,
    title: "Real-time systems",
    desc: "Live queues, meetings and task assignment that update the moment something changes.",
    tags: ["Socket.IO", "Event-driven design", "DICOM imaging"],
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    desc: "Whole apps owned end to end: UI, backend, Singpass login, subscriptions and Google Play release.",
    tags: ["React Native", "AWS", "Push notifications"],
  },
  {
    icon: Brain,
    title: "AI products",
    desc: "Document Q&A with citations and chained agents that turn a job description into a tailored application.",
    tags: ["RAG", "pgvector", "Multi-agent pipelines"],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060814] text-slate-100 selection:bg-cyan-400/30">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_at_75%_20%,rgba(99,102,241,0.18),transparent_60%)]" />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#060814]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="text-xl font-bold tracking-tight">
            Iqra<span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">.Rafiq</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-cyan-300" href="#projects">Projects</a>
            <a className="transition hover:text-cyan-300" href="#experience">Experience</a>
            <a className="transition hover:text-cyan-300" href="#skills">Skills</a>
            <a className="transition hover:text-cyan-300" href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-cyan-400/50 hover:bg-cyan-400/5">
            Let&apos;s talk <span className="text-cyan-300">↗</span>
          </a>
        </div>
      </header>

      <main id="top" className="relative">
        {/* Hero */}
        <div className={wrap}>
          <section className="grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div>
              <div className="mb-8 flex flex-wrap gap-2.5">
                {/* {[
                  { icon: MapPin, text: "Karachi, Pakistan" },
                  { icon: GraduationCap, text: "MS Data Science (in progress)" },
                ].map(({ icon: Icon, text }) => ( */}
                  <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-300">
                   A LITTLE CURIOSITY. A LOT OF POSSIBILITY
                  </span>
                {/* ))} */}
              </div>

              <h1 className="text-5xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-6xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Iqra.</span>
                <br />
                I build full stack and AI products.
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
                Full stack developer with production experience in healthcare platforms,
                real-time systems and mobile apps, now building AI-powered products with
                RAG and agents.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/20">
                  <ArrowRight size={16} /> View projects
                </a>
                <a href={links.resume} download className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium transition hover:border-white/35 hover:bg-white/5">
                  <Download size={16} /> Download resume
                </a>
              </div>
            </div>

            <HeroOrb />
          </section>
        </div>

        {/* Marquee */}
        <Marquee />

        <div className={wrap}>
          {/* What I do */}
          <section id="what" className="scroll-mt-24 border-b border-white/[0.07] py-16">
            <Heading eyebrow="WHAT I DO" title="From the interface to the database" />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {whatIDo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tileGradients[i % tileGradients.length]}`}>
                      <Icon size={22} className="text-white" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{item.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{t}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* About */}
          <section id="about" className="scroll-mt-24 border-b border-white/[0.07] py-16">
            <Heading eyebrow="ABOUT" title="A bit about me" />
            <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
              <p className="text-base leading-8 text-slate-400">
                I&apos;m a full stack developer from Karachi who built her foundations in healthcare
                software: secure, real-time systems used by hospitals, doctors and patients. I enjoy
                turning complicated workflows into products people actually find easy to use. Lately
                I&apos;ve been going deeper into AI, building RAG apps and agent pipelines alongside my
                Master&apos;s in Data Science.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="font-mono text-[11px] tracking-[0.2em] text-cyan-300">CURRENTLY EXPLORING</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["RAG", "AI agents", "Voice interfaces", "Real-time systems"].map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects (short descriptions, no links) */}
          <section id="projects" className="scroll-mt-24 border-b border-white/[0.07] py-16">
            <Heading eyebrow="SELECTED WORK" title="Projects" />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => {
                const Icon = projectIcons[i % projectIcons.length];
                return (
                  <article key={p.title} className="group relative flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 transition duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tileGradients[i % tileGradients.length]}`}>
                      <Icon size={22} className="text-white" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-7 text-slate-400">{p.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{t}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="scroll-mt-24 border-b border-white/[0.07] py-16">
            <Heading eyebrow="MY JOURNEY" title="Experience" />
            <div className="mt-8 max-w-4xl">
              {experience.map((e, i) => (
                <article key={e.role + e.when} className="relative grid gap-2 border-l border-white/10 pb-10 pl-7 last:pb-0 sm:grid-cols-[190px_1fr] sm:gap-8">
                  <span className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full ${i === 0 ? "bg-cyan-400 shadow-[0_0_14px_#22d3ee]" : "bg-violet-400 shadow-[0_0_14px_#a78bfa]"}`} />
                  <p className="text-sm text-slate-400">{e.when}</p>
                  <div>
                    <p className="text-lg font-semibold">{e.role}</p>
                    <p className="text-sm text-slate-400">{e.place}</p>
                    <ul className="mt-3 space-y-1.5">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5 text-sm leading-7 text-slate-400">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="scroll-mt-24 border-b border-white/[0.07] py-16">
            <Heading eyebrow="SKILLS" title="What I work with" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s) => (
                <article key={s.group} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-5 transition hover:border-violet-400/40">
                  <h3 className="font-medium">{s.group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span key={it} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{it}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24 py-16">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] px-7 py-10 sm:px-12">
              <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-500/15 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-[90px]" />
              <div className="relative grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.3em] text-slate-400">GET IN TOUCH</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight">Let&apos;s talk</h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                    Open to full stack and AI engineering roles. Send a message here, or email me directly.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={`mailto:${links.email}`} className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.03]">
                      <Mail size={16} /> {links.email}
                    </a>
                    {links.github && <a href={links.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm transition hover:bg-white/5">GitHub</a>}
                    {links.linkedin && <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm transition hover:bg-white/5">LinkedIn</a>}
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 Iqra Rafiq</span>
          <span>Build · Learn · Grow <span className="text-violet-400">♡</span></span>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}

function Marquee() {
  const group = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item) => (
        <li key={item} className="flex items-center gap-10 whitespace-nowrap text-2xl font-medium tracking-tight text-slate-300 sm:text-3xl">
          {item}
          <span className="h-2 w-2 rotate-45 rounded-[2px] bg-cyan-400" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee overflow-hidden border-y border-white/[0.07] bg-white/[0.02] py-5" aria-label="Technologies I work with">
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}

function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="flex items-center gap-4 text-[11px] font-semibold tracking-[0.3em] text-slate-400">
        {eyebrow}
        <span className="h-px w-24 bg-gradient-to-r from-white/25 to-transparent" />
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}
