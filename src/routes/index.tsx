import { createFileRoute } from "@tanstack/react-router";
import {
  User,
  Briefcase,
  Mail,
  Download,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Award,
  Code2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Preet Sawari — Frontend Developer & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Preet Sawari — CS student at Sukkur IBA, MERN-stack developer and AI enthusiast based in Karachi, Pakistan.",
      },
    ],
  }),
  component: Index,
});

const PORTRAIT =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/017d69b7-3445-43c2-a6cd-2e890a8aac3c-preet-beta-vercel-app/assets/images/WhatsApp_20Image_202025-09-14_20at_2019_52_32_c319-1.jpg";

const TECHS = [
  { label: "HTML5", color: "#E34F26" },
  { label: "CSS3", color: "#1572B6" },
  { label: "JavaScript", color: "#F7DF1E" },
  { label: "React", color: "#61DAFB" },
  { label: "Next.js", color: "#FFFFFF" },
  { label: "Tailwind", color: "#38BDF8" },
  { label: "Node.js", color: "#83CD29" },
  { label: "MongoDB", color: "#47A248" },
  { label: "Python", color: "#FFD43B" },
  { label: "TensorFlow", color: "#FF6F00" },
];

const PROJECTS = [
  {
    title: "Game Fusion",
    blurb:
      "Mobile platform for gamers to discover and share content with personalized experiences and community-driven interactions.",
    tags: ["React Native", "Firebase", "Redux", "Node.js"],
    href: "https://github.com/Preet411/GameFusion.git",
  },
  {
    title: "Doctor Appointment System",
    blurb:
      "Full-stack medical booking system with role-based access, real-time notifications and availability tracking.",
    tags: ["MERN", "Express", "JWT", "Cloudinary"],
    href: "https://github.com/Hammad-Zubari/Doctor-Appointment.git",
  },
  {
    title: "Women Safety App",
    blurb:
      "Real-time location tracking and emergency alerts — instant access to help and community safety networks.",
    tags: ["React Native", "Google Maps", "Socket.io", "Express"],
    href: "https://github.com/Preet411",
  },
];

function SectionLabel({ id, num, title }: { id?: string; num: string; title: string }) {
  return (
    <div id={id} className="mb-8 scroll-mt-24">
      <p className="section-label text-sm md:text-base">
        {num} - {title}
      </p>
      <div className="section-divider mt-3" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-md border border-mint/40 text-mint mono font-bold">
              P
            </span>
            <span className="hidden sm:inline mono text-sm text-muted-foreground">
              preet.dev
            </span>
          </a>
          <ul className="flex items-center gap-1 sm:gap-2 text-sm">
            {[
              { href: "#about", label: "About", Icon: User },
              { href: "#portfolio", label: "Portfolio", Icon: Briefcase },
              { href: "#contact", label: "Contact", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:text-mint hover:bg-secondary/60 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline uppercase tracking-wider text-xs">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hello, I&apos;m
            </h1>
            <h2 className="mt-2 text-4xl md:text-6xl font-extrabold text-mint">
              Preet Sawari
            </h2>
            <p className="mt-3 text-2xl md:text-3xl font-semibold text-foreground/90">
              CS @ Sukkur IBA University
            </p>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Frontend Developer & AI Enthusiast building modern, scalable web
              applications.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-md border border-mint/60 text-mint hover:bg-mint hover:text-primary-foreground transition-colors mono text-sm uppercase tracking-wider"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          <div className="order-1 md:order-2 relative mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="blob" />
            <img
              src={PORTRAIT}
              alt="Portrait of Preet Sawari"
              className="relative z-10 w-full h-full object-cover object-center rounded-full ring-1 ring-mint/30 shadow-2xl"
              loading="eager"
            />
          </div>
        </div>

        {/* Tech row */}
        <div className="mt-16">
          <p className="mono text-sm text-muted-foreground mb-5">
            Technologies I work with:
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {TECHS.map((t) => (
              <span
                key={t.label}
                className="mono text-xs px-3 py-2 rounded-md bg-secondary/60 border border-border hover:border-mint/50 transition-colors"
                style={{ color: t.color }}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionLabel id="about" num="01" title="About Me" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-foreground/90 leading-relaxed">
            <p>
              Hello, I&apos;m <span className="text-mint">Preet Sawari</span>, a
              dedicated Computer Science student at Sukkur IBA University 🎓
            </p>
            <p>
              I specialize in building modern, scalable web applications and
              exploring the frontiers of Artificial Intelligence 💡
            </p>
            <p>
              My journey in tech is driven by a passion for solving complex
              problems and creating seamless user experiences 👩‍💻
            </p>
            <p>
              Whether it&apos;s crafting responsive frontends or training deep
              learning models, I strive for excellence and innovation in every
              line of code 🌟
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="mono text-xs text-muted-foreground">Current CGPA</p>
              <p className="text-3xl font-bold text-mint mt-1">3.23</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="mono text-xs text-muted-foreground">Major Projects</p>
              <p className="text-3xl font-bold text-mint mt-1">5+</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="mono text-xs text-muted-foreground">Based in</p>
              <p className="text-lg font-semibold mt-1">Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionLabel id="portfolio" num="02" title="Portfolio" />

        {/* Toolkit */}
        <div className="mb-14">
          <p className="section-label text-xs mb-3">02.01 - Technical Toolkit</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                Icon: Code2,
                title: "Frontend",
                items: "HTML5 · CSS3 · JavaScript · React · Next.js · Tailwind",
              },
              {
                Icon: Code2,
                title: "Backend",
                items:
                  "Node.js · Express · MongoDB · REST · Firebase · Appwrite",
              },
              {
                Icon: Code2,
                title: "AI / ML",
                items:
                  "Python · Deep Learning · NLP · Transformers · PyTorch · TensorFlow",
              },
            ].map(({ Icon, title, items }) => (
              <div
                key={title}
                className="rounded-lg border border-border bg-card p-5 hover:border-mint/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-mint">
                  <Icon className="w-4 h-4" />
                  <h4 className="font-semibold">{title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {items}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-14">
          <p className="section-label text-xs mb-3">02.02 - Featured Projects</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-lg border border-border bg-card p-6 hover:border-mint/50 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start justify-between">
                  <h4 className="text-lg font-semibold group-hover:text-mint">
                    {p.title}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-mint" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="mono text-[11px] px-2 py-1 rounded bg-secondary/70 text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <a
            href="https://github.com/Preet411"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 mono text-sm text-mint hover:underline"
          >
            View more on GitHub <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Education */}
        <div className="mb-14">
          <p className="section-label text-xs mb-3">02.03 - Education</p>
          <div className="rounded-lg border border-border bg-card p-6 flex items-start gap-4">
            <div className="grid place-items-center w-12 h-12 rounded-md bg-mint/10 text-mint shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold">
                BS in Computer Science — Sukkur IBA University
              </h4>
              <p className="mono text-xs text-muted-foreground mt-1">
                Sukkur, Pakistan · CGPA 3.23
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Focused on modern web development, data structures, and machine
                learning. Active contributor to student projects and tech
                community.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <p className="section-label text-xs mb-3">02.04 - Highlights</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              "5+ shipped full-stack projects",
              "Active open-source contributor",
              "Passionate about AI & DL research",
            ].map((h) => (
              <div
                key={h}
                className="rounded-lg border border-border bg-card p-5 flex items-start gap-3"
              >
                <Award className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/90">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionLabel id="contact" num="03" title="Contact" />
        <div className="rounded-xl border border-border bg-card p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold">Let&apos;s collaborate</h3>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            I&apos;m currently looking for new opportunities and would love to
            hear about your project. Open for full-time roles and freelance
            work.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <a
              href="mailto:mandhwanipreet@gmail.com"
              className="group rounded-lg border border-border p-5 hover:border-mint/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-mint">
                <Mail className="w-4 h-4" />
                <p className="mono text-xs uppercase tracking-wider">Email</p>
              </div>
              <p className="mt-2 text-sm group-hover:text-mint break-all">
                mandhwanipreet@gmail.com
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/preet-sawari-mandhwani/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg border border-border p-5 hover:border-mint/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-mint">
                <Linkedin className="w-4 h-4" />
                <p className="mono text-xs uppercase tracking-wider">LinkedIn</p>
              </div>
              <p className="mt-2 text-sm group-hover:text-mint">
                Preet Sawari Mandhwani
              </p>
            </a>
            <a
              href="https://github.com/Preet411"
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg border border-border p-5 hover:border-mint/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-mint">
                <Github className="w-4 h-4" />
                <p className="mono text-xs uppercase tracking-wider">GitHub</p>
              </div>
              <p className="mt-2 text-sm group-hover:text-mint">@Preet411</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-center mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Preet Sawari · Built with care.
      </footer>
    </div>
  );
}
