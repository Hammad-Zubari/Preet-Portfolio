import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Code2,
  Brain,
  Server,
  ArrowUpRight,
  MapPin,
  Phone,
  BadgeCheck,
  Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Preet Sawari Mandhwani — Python Engineer & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Preet Sawari Mandhwani — Junior Python Engineer, MERN-stack developer and AI builder based in Karachi, Pakistan.",
      },
    ],
  }),
  component: Index,
});

const PORTRAIT =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/017d69b7-3445-43c2-a6cd-2e890a8aac3c-preet-beta-vercel-app/assets/images/WhatsApp_20Image_202025-09-14_20at_2019_52_32_c319-1.jpg";

const STACK = [
  "Python", "Django", "FastAPI", "Flask", "LangChain", "PyTorch",
  "TensorFlow", "Keras", "YOLO", "OpenCV", "React", "Node.js",
  "Express", "MongoDB", "MySQL", "Tailwind", "JWT", "REST", "Git", "Agile",
];

const PROJECTS = [
  {
    title: "AI-Powered English Learning",
    tag: "Final Year Project",
    blurb:
      "Full-stack AI app with NLP pipelines for grammar correction, IELTS assessment & role-based conversation simulation.",
    stack: ["Python", "NLP", "MERN", "REST"],
    accent: "coral",
    href: "https://github.com/Preet411",
  },
  {
    title: "Legal Chatbot",
    tag: "RAG · LLM",
    blurb:
      "Context-aware legal Q&A built with LangChain + RAG. Flask APIs and semantic vector search over legal documents.",
    stack: ["LangChain", "Flask", "FAISS", "LLM"],
    accent: "violet",
    href: "https://github.com/Preet411",
  },
  {
    title: "RAG Course Assistant",
    tag: "Education AI",
    blurb:
      "Retrieval-Augmented assistant trained on deep-learning books — semantic search, quiz generation & grounded answers.",
    stack: ["LangChain", "Vector DB", "Python"],
    accent: "amber",
    href: "https://github.com/Preet411",
  },
  {
    title: "Object Detection + Context",
    tag: "Computer Vision",
    blurb:
      "Real-time YOLO/CNN object detection on the COCO dataset with contextual scene description generation.",
    stack: ["YOLO", "OpenCV", "CNN"],
    accent: "coral",
    href: "https://github.com/Preet411",
  },
  {
    title: "Image Captioning System",
    tag: "Deep Learning",
    blurb:
      "End-to-end CNN + LSTM pipeline that generates natural-language captions for unseen images.",
    stack: ["TensorFlow", "Keras", "CNN", "LSTM"],
    accent: "violet",
    href: "https://github.com/Preet411",
  },
  {
    title: "Doctor Appointment System",
    tag: "MERN Stack",
    blurb:
      "Full-stack medical booking platform with role-based access, secure auth and availability tracking.",
    stack: ["MongoDB", "Express", "React", "Node"],
    accent: "amber",
    href: "https://github.com/Hammad-Zubari/Doctor-Appointment.git",
  },
];

const CERTS = [
  "Python for Data Science, AI & Development — IBM",
  "Django Web Framework — Meta",
  "Introduction to MongoDB — MongoDB University",
  "AI for Everyone — DeepLearning.AI",
  "Generative AI Fundamentals — Google Cloud / Udacity",
];

const accentMap: Record<string, string> = {
  coral: "from-[color-mix(in_oklch,var(--coral)_55%,transparent)] to-transparent",
  violet: "from-[color-mix(in_oklch,var(--violet)_55%,transparent)] to-transparent",
  amber: "from-[color-mix(in_oklch,var(--amber)_55%,transparent)] to-transparent",
};

function Index() {
  return (
    <div className="relative min-h-screen text-foreground grain">
      {/* NAV */}
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-6 pt-6">
          <nav className="glass rounded-full px-5 py-3 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid place-items-center w-8 h-8 rounded-full bg-gradient-to-br from-[var(--coral)] to-[var(--violet)] text-background mono font-bold text-sm">
                P
              </span>
              <span className="mono text-xs text-muted-foreground hidden sm:inline">
                preet.dev
              </span>
            </a>
            <ul className="flex items-center gap-1 text-sm">
              {[
                { href: "#work", label: "Work" },
                { href: "#about", label: "About" },
                { href: "#stack", label: "Stack" },
                { href: "#contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="px-3 py-1.5 rounded-full text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors mono text-xs uppercase tracking-wider"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:mandhwanipreet@gmail.com"
              className="hidden md:inline-flex items-center gap-1.5 mono text-xs uppercase tracking-wider px-4 py-1.5 rounded-full bg-foreground text-background hover:bg-[var(--coral)] transition-colors"
            >
              Hire me <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-20"
      >
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--coral)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--coral)]"></span>
              </span>
              <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Available · Summer 2026
              </p>
            </div>

            <h1 className="serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              I build <span className="gradient-text">intelligent</span>
              <br />
              software with{" "}
              <span className="italic">Python</span> &amp; <span className="italic">AI</span>.
            </h1>

            <p className="mt-7 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
              I&apos;m <span className="text-foreground font-medium">Preet Sawari Mandhwani</span> — a
              Junior Python Engineer &amp; CS graduate from{" "}
              <span className="text-foreground">Sukkur IBA University</span>. I
              ship Django/FastAPI backends, MERN apps and AI products powered by
              LangChain, RAG and deep learning.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--coral)] text-background mono text-xs uppercase tracking-wider hover:bg-[var(--amber)] transition-colors"
              >
                See my work <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Preet411"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-foreground/90 mono text-xs uppercase tracking-wider hover:border-[var(--coral)] hover:text-[var(--coral)] transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 mono text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Karachi, Pakistan
              </span>
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5 text-[var(--amber)]" /> CGPA 3.28
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" /> Ex-10Pearls Intern
              </span>
            </div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2 relative">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] float">
              <div className="absolute -inset-6 rounded-[40%] bg-gradient-to-br from-[var(--coral)] via-[var(--violet)] to-[var(--amber)] opacity-60 blur-2xl" />
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden glow-ring rotate-3">
                <img
                  src={PORTRAIT}
                  alt="Portrait of Preet Sawari Mandhwani"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 -rotate-6">
                <p className="mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Currently
                </p>
                <p className="text-sm font-medium">Building FYP · AI English</p>
              </div>
              <div className="absolute -top-3 -right-3 glass rounded-2xl px-4 py-3 rotate-6">
                <p className="mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Focus
                </p>
                <p className="text-sm font-medium">Python · LLMs · RAG</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/60 bg-background/40 backdrop-blur-sm py-5 overflow-hidden">
        <div className="marquee-track flex gap-10 whitespace-nowrap">
          {[...STACK, ...STACK].map((s, i) => (
            <span
              key={i}
              className="serif text-2xl md:text-3xl text-foreground/40 hover:text-foreground transition-colors"
            >
              {s} <span className="text-[var(--coral)]">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* WORK / PROJECTS */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <p className="section-num mb-3">01 — Selected Work</p>
            <h2 className="serif text-4xl md:text-5xl tracking-tight">
              Things I&apos;ve <span className="gradient-text italic">built</span>.
            </h2>
          </div>
          <a
            href="https://github.com/Preet411"
            target="_blank"
            rel="noreferrer"
            className="mono text-xs uppercase tracking-wider text-muted-foreground hover:text-[var(--coral)] inline-flex items-center gap-1.5"
          >
            All projects <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${accentMap[p.accent]} opacity-50 blur-2xl group-hover:opacity-90 transition-opacity`}
              />
              <div className="relative">
                <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {p.tag}
                </p>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <h3 className="serif text-2xl leading-tight">{p.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-[var(--coral)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                  {p.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="mono text-[10px] px-2 py-1 rounded-full bg-white/5 border border-border text-foreground/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT — BENTO */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="section-num mb-3">02 — About</p>
        <h2 className="serif text-4xl md:text-5xl tracking-tight mb-12">
          A quick <span className="gradient-text italic">introduction</span>.
        </h2>

        <div className="grid md:grid-cols-6 gap-4 auto-rows-[minmax(140px,auto)]">
          {/* Bio */}
          <div className="md:col-span-4 md:row-span-2 rounded-2xl border border-border bg-card p-7">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-[var(--coral)] mb-4">
              Bio
            </p>
            <p className="serif text-2xl md:text-3xl leading-snug">
              CS graduate from <span className="italic">Sukkur IBA</span>,
              shipping <span className="gradient-text">Python backends</span>{" "}
              and <span className="gradient-text">AI products</span> that feel
              fast, useful and human.
            </p>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              Recently completed an internship at{" "}
              <span className="text-foreground">10Pearls</span> building a
              full-stack notes app with Django + MERN, JWT auth and
              industry-grade testing (Jest, Mocha, SonarQube). Currently
              building my FYP — an AI-powered English learning platform.
            </p>
          </div>

          {/* CGPA */}
          <div className="md:col-span-2 rounded-2xl border border-border bg-gradient-to-br from-[color-mix(in_oklch,var(--coral)_25%,var(--card))] to-card p-6 flex flex-col justify-between">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
              CGPA
            </p>
            <p className="serif text-6xl">
              3.<span className="gradient-text">28</span>
            </p>
          </div>

          {/* Location */}
          <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Based in
            </p>
            <p className="serif text-2xl">Karachi, PK</p>
            <p className="mt-1 mono text-xs text-muted-foreground">
              UTC+5 · Open to remote
            </p>
          </div>

          {/* Experience */}
          <div className="md:col-span-3 rounded-2xl border border-border bg-card p-6">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Experience
            </p>
            <div className="flex items-start gap-3">
              <div className="grid place-items-center w-10 h-10 rounded-lg bg-[var(--coral)]/15 text-[var(--coral)] shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">MERN / Python Intern</h4>
                <p className="mono text-xs text-muted-foreground">
                  10Pearls · Sep – Dec 2025
                </p>
                <p className="text-sm text-foreground/70 mt-2">
                  Built NoteSnap with Django, React &amp; MongoDB. JWT auth,
                  RBAC, full test coverage, Agile sprints.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="md:col-span-3 rounded-2xl border border-border bg-card p-6">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Education
            </p>
            <div className="flex items-start gap-3">
              <div className="grid place-items-center w-10 h-10 rounded-lg bg-[var(--violet)]/15 text-[var(--violet)] shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">BS Computer Science</h4>
                <p className="mono text-xs text-muted-foreground">
                  Sukkur IBA University · 2022 – 2026
                </p>
                <p className="text-sm text-foreground/70 mt-2">
                  Focus on AI, web systems &amp; data structures. CGPA 3.28.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
        <p className="section-num mb-3">03 — Toolkit</p>
        <h2 className="serif text-4xl md:text-5xl tracking-tight mb-12">
          The <span className="gradient-text italic">tech</span> I reach for.
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              Icon: Server,
              title: "Backend",
              color: "var(--coral)",
              items: "Python · Django · DRF · FastAPI · Flask · Node · Express · REST · JWT",
            },
            {
              Icon: Brain,
              title: "AI / ML",
              color: "var(--violet)",
              items: "PyTorch · TensorFlow · Keras · LangChain · RAG · FAISS · YOLO · OpenCV · NLP",
            },
            {
              Icon: Code2,
              title: "Frontend & Data",
              color: "var(--amber)",
              items: "React · Tailwind · HTML5 · MongoDB · MySQL · Pandas · NumPy · Git",
            },
          ].map(({ Icon, title, items, color }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 hover:border-foreground/30 transition-colors"
            >
              <div
                className="grid place-items-center w-12 h-12 rounded-xl mb-5"
                style={{
                  background: `color-mix(in oklch, ${color} 18%, transparent)`,
                  color,
                }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="serif text-2xl mb-2">{title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {items}
              </p>
            </div>
          ))}
        </div>

        {/* Certs */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-7">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="w-4 h-4 text-[var(--amber)]" />
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Certifications
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {CERTS.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2.5 text-sm text-foreground/85"
              >
                <BadgeCheck className="w-4 h-4 text-[var(--coral)] mt-0.5 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative rounded-3xl overflow-hidden border border-border p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_oklch,var(--coral)_30%,transparent)] via-transparent to-[color-mix(in_oklch,var(--violet)_30%,transparent)]" />
          <div className="relative">
            <p className="section-num mb-4">04 — Contact</p>
            <h2 className="serif text-5xl md:text-7xl tracking-tight leading-[1]">
              Let&apos;s build
              <br />
              <span className="gradient-text italic">something good.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-foreground/75">
              Open to junior Python / full-stack / AI engineering roles &amp;
              freelance collaboration. Reach out — I reply fast.
            </p>

            <a
              href="mailto:mandhwanipreet@gmail.com"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-foreground text-background mono text-xs uppercase tracking-wider hover:bg-[var(--coral)] transition-colors"
            >
              mandhwanipreet@gmail.com <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/preet-sawari-mandhwani/" },
                { Icon: Github, label: "GitHub", href: "https://github.com/Preet411" },
                { Icon: Phone, label: "+92 315 037 4972", href: "tel:+923150374972" },
                { Icon: Mail, label: "Email", href: "mailto:mandhwanipreet@gmail.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass mono text-xs hover:text-[var(--coral)] transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between mono text-xs text-muted-foreground border-t border-border/60">
        <span>© {new Date().getFullYear()} Preet Sawari Mandhwani</span>
        <span>Crafted with Python energy ✦</span>
      </footer>
    </div>
  );
}
