
// import Ask from "@/app/src/ask";
// import AvatarOrb3D from "@/components/AvatarOrb3D";
// import { projects, experience, skills, links } from "../lib/data";

// const ArrowUpRight = () => <span aria-hidden="true">↗</span>;

// export default function Home() {
//   return (
//     <div className="min-h-screen overflow-hidden bg-[#070810] text-slate-100 selection:bg-cyan-400/30">
//       {/* Navigation */}
//       <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#070810]/80 backdrop-blur-xl">
//         <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
//           <a href="#top" className="text-xl font-bold tracking-tight">
//             iqra<span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">.dev</span>
//           </a>

//           <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
//             <a className="transition hover:text-cyan-300" href="#projects">Projects</a>
//             <a className="transition hover:text-cyan-300" href="#experience">Experience</a>
//             <a className="transition hover:text-cyan-300" href="#skills">Skills</a>
//             <a className="transition hover:text-cyan-300" href="#contact">Contact</a>
//           </nav>

//           <a
//             href="#contact"
//             className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-cyan-400/50 hover:bg-cyan-400/5"
//           >
//             Let's talk <span className="text-cyan-300">↗</span>
//           </a>
//         </div>
//       </header>

//       <main id="top" className="mx-auto max-w-7xl px-5 sm:px-8">
//         {/* Hero */}
//         <section className="grid min-h-[650px] items-center gap-8 border-b border-white/[0.07] py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
//           <div className="relative z-10">
//             <div className="mb-7 flex flex-wrap gap-2">
//               {["Karachi, Pakistan", "2+ years experience", "MS Data Science"].map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-1.5 text-xs text-slate-400"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>

//             <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
//               Full Stack Developer · AI Engineer
//             </p>

//             <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl xl:text-7xl">
//               Building things
//               <br />
//               for the{" "}
//               <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
//                 next wave.
//               </span>
//             </h1>

//             <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
//               I'm Iqra — a full stack developer exploring the intersection of
//               thoughtful design, intelligent systems, and AI-powered products.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <a
//                 href="#projects"
//                 className="group rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/15"
//               >
//                 Explore my work <span className="ml-2 transition group-hover:translate-x-1">→</span>
//               </a>

//               <a
//                 href={links.resume}
//                 download
//                 className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/35 hover:bg-white/5"
//               >
//                 Download résumé ↓
//               </a>
//             </div>

//             <div className="mt-12 flex items-center gap-3 text-xs text-slate-500">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
//               </span>
//               Open to full stack & AI opportunities
//             </div>
//           </div>

//           {/* Orb stage */}
//           <div className="relative flex min-w-0 flex-col items-center justify-center">
//             <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px] sm:h-96 sm:w-96" />

//             <div className="relative flex w-full items-center justify-center">
//               <div className="absolute right-2 top-8 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs text-slate-400 backdrop-blur-xl sm:right-8">
//                 <span className="mb-1 block text-cyan-300">CURRENTLY EXPLORING</span>
//                 RAG · AI agents · intelligent apps
//               </div>

//               {/* <AvatarOrb3D size={360} /> */}

//               <div className="absolute bottom-5 left-2 rounded-2xl border border-white/10 bg-[#0b0c18]/80 px-4 py-3 backdrop-blur-xl sm:bottom-8 sm:left-8">
//                 <p className="text-xs text-slate-500">A little about me</p>
//                 <p className="mt-1 text-sm font-medium">Curious by design.</p>
//               </div>
//             </div>

//             <div className="relative z-10 mt-1 w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/20 sm:p-5">
//               <div className="mb-3 flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium">Meet my AI assistant</p>
//                   <p className="mt-1 text-xs text-slate-500">
//                     Ask about my work, skills, or projects.
//                   </p>
//                 </div>
//                 <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-2.5 py-1 text-[10px] text-cyan-300">
//                   AI INTERFACE
//                 </span>
//               </div>
//               <Ask />
//             </div>
//           </div>
//         </section>

//         {/* Projects */}
//         <section id="projects" className="scroll-mt-24 border-b border-white/[0.07] py-20">
//           <SectionHeading
//             eyebrow="SELECTED WORK"
//             title="Things I've built."
//             description="A few projects where engineering meets real-world problems."
//           />

//           <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
//             {projects.map((p, index) => (
//               <article
//                 key={p.title}
//                 className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.045]"
//               >
//                 <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-500/[0.07] blur-3xl transition group-hover:bg-cyan-400/[0.12]" />

//                 <div className="relative mb-8 flex items-center justify-between">
//                   <span className="text-xs tracking-[0.2em] text-slate-500">
//                     PROJECT / {String(index + 1).padStart(2, "0")}
//                   </span>
//                   <span className="text-xl text-slate-500 transition group-hover:text-cyan-300">
//                     <ArrowUpRight />
//                   </span>
//                 </div>

//                 <h3 className="relative text-xl font-semibold tracking-tight">
//                   {p.title}
//                 </h3>
//                 <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
//                   {p.desc}
//                 </p>

//                 <div className="mt-6 flex flex-wrap gap-2">
//                   {p.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-md border border-white/[0.07] bg-white/[0.035] px-2.5 py-1 text-xs text-slate-400"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {(p.live || p.code) && (
//                   <div className="mt-6 flex gap-5 border-t border-white/[0.07] pt-5 text-sm">
//                     {p.live && (
//                       <a
//                         href={p.live}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="text-cyan-300 transition hover:text-cyan-200"
//                       >
//                         Live demo ↗
//                       </a>
//                     )}
//                     {p.code && (
//                       <a
//                         href={p.code}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="text-slate-400 transition hover:text-white"
//                       >
//                         Source code ↗
//                       </a>
//                     )}
//                   </div>
//                 )}
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* Experience */}
//         <section id="experience" className="scroll-mt-24 border-b border-white/[0.07] py-20">
//           <SectionHeading
//             eyebrow="THE JOURNEY"
//             title="Experience & growth."
//             description="The roles, teams, and challenges that have shaped my work."
//           />

//           <div className="mt-12 max-w-4xl">
//             {experience.map((e, index) => (
//               <article
//                 key={e.role + e.when}
//                 className="relative grid gap-3 border-l border-white/10 pb-10 pl-7 last:pb-0 sm:grid-cols-[180px_1fr] sm:gap-8 sm:pl-8"
//               >
//                 <span className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full bg-cyan-300 ring-4 ring-cyan-300/10" />

//                 <div className="text-sm text-slate-500">{e.when}</div>

//                 <div>
//                   <p className="text-lg font-medium">{e.role}</p>
//                   <p className="mt-1 text-sm text-cyan-300">{e.place}</p>
//                   <ul className="mt-4 space-y-2">
//                     {e.points.map((point) => (
//                       <li
//                         key={point}
//                         className="flex gap-3 text-sm leading-7 text-slate-400"
//                       >
//                         <span className="mt-0.5 text-cyan-400">↗</span>
//                         <span>{point}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* Skills */}
//         <section id="skills" className="scroll-mt-24 border-b border-white/[0.07] py-20">
//           <SectionHeading
//             eyebrow="MY TOOLKIT"
//             title="What I work with."
//             description="The technologies I use to turn ideas into working products."
//           />

//           <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//             {skills.map((skill, index) => (
//               <article
//                 key={skill.group}
//                 className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 transition hover:border-violet-400/30"
//               >
//                 <div className="mb-5 flex items-center gap-3">
//                   <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/[0.08] text-sm text-violet-300">
//                     0{index + 1}
//                   </span>
//                   <h3 className="font-medium">{skill.group}</h3>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {skill.items.map((item) => (
//                     <span
//                       key={item}
//                       className="rounded-lg bg-white/[0.05] px-2.5 py-1.5 text-xs text-slate-400"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* Contact */}
//         <section id="contact" className="scroll-mt-24 py-20">
//           <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.015] px-6 py-12 sm:px-12 sm:py-14">
//             <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-[90px]" />
//             <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-cyan-500/[0.08] blur-[90px]" />

//             <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
//               <div>
//                 <p className="text-xs font-semibold tracking-[0.3em] text-cyan-300">
//                   HAVE SOMETHING IN MIND?
//                 </p>
//                 <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
//                   Let's build something meaningful.
//                 </h2>
//                 <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
//                   Open to full stack development and AI engineering opportunities.
//                   Have an interesting problem? I'd love to hear about it.
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-3 md:justify-end">
//                 <a
//                   href={`mailto:${links.email}`}
//                   className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
//                 >
//                   Email me ↗
//                 </a>
//                 {links.github && (
//                   <a
//                     href={links.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="rounded-full border border-white/15 px-5 py-3 text-sm transition hover:bg-white/5"
//                   >
//                     GitHub ↗
//                   </a>
//                 )}
//                 {links.linkedin && (
//                   <a
//                     href={links.linkedin}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="rounded-full border border-white/15 px-5 py-3 text-sm transition hover:bg-white/5"
//                   >
//                     LinkedIn ↗
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="border-t border-white/[0.07]">
//         <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
//           <span>© {new Date().getFullYear()} Iqra Rafiq</span>
//           <span>Designed with curiosity. Built with code.</span>
//           <a href="#top" className="transition hover:text-cyan-300">
//             Back to top ↑
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// function SectionHeading({
//   eyebrow,
//   title,
//   description,
// }: {
//   eyebrow: string;
//   title: string;
//   description: string;
// }) {
//   return (
//     <div>
//       <p className="text-xs font-semibold tracking-[0.3em] text-cyan-300">
//         {eyebrow}
//       </p>
//       <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
//         {title}
//       </h2>
//       <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
//         {description}
//       </p>
//     </div>
//   );
// }

import {
  ArrowRight, ArrowUpRight, Brain, Briefcase, Download, HeartPulse, Mail,
  MapPin, PawPrint, ScanLine, Smartphone, GraduationCap, Code2,
} from "lucide-react";
import HeroOrb from "@/components/HeroOrb";
import ChatWidget from "@/components/ChatWidget";
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

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060814] text-slate-100 selection:bg-cyan-400/30">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_at_75%_20%,rgba(99,102,241,0.18),transparent_60%)]" />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#060814]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="text-xl font-bold tracking-tight">
            iqra<span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">.dev</span>
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

      <main id="top" className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Hero */}
        <section className="grid items-center gap-10 border-b border-white/[0.07] py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <div className="mb-8 flex flex-wrap gap-2.5">
              {[
                { icon: MapPin, text: "Karachi, Pakistan" },
                // { icon: Briefcase, text: "2+ years experience" },
                { icon: GraduationCap, text: "MS Data Science (in progress)" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-300">
                  <Icon size={14} className="text-cyan-300" /> {text}
                </span>
              ))}
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
        {/* Projects */}
        <section id="projects" className="scroll-mt-24 border-b border-white/[0.07] py-16">
          <Heading eyebrow="MY WORK" title="Projects" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => {
              const Icon = projectIcons[i % projectIcons.length];
              return (
                <article key={p.title} className="group relative flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
                  <div className="flex items-start justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tileGradients[i % tileGradients.length]}`}>
                      <Icon size={22} className="text-white" />
                    </span>
                    <ArrowUpRight size={18} className="text-slate-500 transition group-hover:text-cyan-300" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-slate-400">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{t}</span>
                    ))}
                  </div>
                  {(p.live || p.code) && (
                    <div className="mt-5 flex gap-5 text-sm">
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200"><ArrowUpRight size={14} /> Live demo</a>}
                      {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-violet-300 hover:text-violet-200"><Code2 size={14} /> Code</a>}
                    </div>
                  )}
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
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.3em] text-slate-400">GET IN TOUCH</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">Let&apos;s talk</h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                  Open to full stack and AI engineering roles. The fastest way to reach me is email.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${links.email}`} className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.03]">
                  <Mail size={16} /> {links.email}
                </a>
                {links.github && <a href={links.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm transition hover:bg-white/5">GitHub</a>}
                {links.linkedin && <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm transition hover:bg-white/5">LinkedIn</a>}
              </div>
            </div>
          </div>
        </section>
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