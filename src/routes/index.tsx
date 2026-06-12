import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Database,
  Brain,
  Layers,
} from "lucide-react";
import { ChatBot } from "@/components/ChatBot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Preet Sawari Mandhwani — CS Student & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Preet Sawari Mandhwani — BS Computer Science at Sukkur IBA, MERN-stack developer and AI enthusiast based in Karachi, Pakistan.",
      },
    ],
  }),
  component: Index,
});

const PORTRAIT =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/017d69b7-3445-43c2-a6cd-2e890a8aac3c-preet-beta-vercel-app/assets/images/WhatsApp_20Image_202025-09-14_20at_2019_52_32_c319-1.jpg";

const TECH = [
  "JavaScript", "Python", "C++", "Java",
  "React", "Tailwind", "Node.js", "Express",
  "Django", "MongoDB", "MySQL",
  "PyTorch", "TensorFlow", "LangChain", "Git",
];

const PROJECTS = [
  {
    n: "01",
    title: "AI-Powered English Learning Platform",
    role: "Final Year Project · MERN · AI / NLP",
    blurb:
      "AI web app to improve English communication — translation, IELTS practice, role-based conversations and real-time AI feedback. Built on MERN with NLP pipelines.",
    href: "https://github.com/Preet411",
    tags: ["React", "Node", "MongoDB", "NLP"],
  },
  {
    n: "02",
    title: "RAG Assistant — AI Chatbot",
    role: "LLM · LangChain · Vector DB",
    blurb:
      "Retrieval-Augmented Generation chatbot trained on deep-learning and academic books — semantic search, quiz generation, concept explanations.",
    href: "https://github.com/Preet411",
    tags: ["LangChain", "RAG", "LLM", "Vector DB"],
  },
  {
    n: "03",
    title: "NoteSnap — Notes Management",
    role: "10Pearls Internship · MERN",
    blurb:
      "Full-stack notes app with JWT auth, CRUD, responsive UI and RESTful APIs. Tested with Jest / Mocha / Chai, monitored with SonarQube.",
    href: "https://github.com/Preet411",
    tags: ["MongoDB", "Express", "React", "Node"],
  },
  {
    n: "04",
    title: "Doctor Appointment Booking",
    role: "MERN Stack",
    blurb:
      "Doctor appointment scheduling platform with role-based access, secure REST APIs and a smooth booking experience.",
    href: "https://github.com/Preet411",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    n: "05",
    title: "AI Image Captioning System",
    role: "Python · TensorFlow · Keras",
    blurb:
      "CNN + LSTM pipeline that generates natural-language captions for unseen images, trained on image-caption datasets.",
    href: "https://github.com/Preet411",
    tags: ["TensorFlow", "CNN", "LSTM"],
  },
  {
    n: "06",
    title: "Restaurant Management System",
    role: "Java · MySQL · GUI",
    blurb:
      "Desktop system for restaurant operations — order management, billing and customer data — built with Java GUI, MySQL and data structures.",
    href: "https://github.com/Preet411",
    tags: ["Java", "MySQL", "DSA"],
  },
];

const CERTS = [
  "Introduction to MongoDB — MongoDB University",
  "Django Web Framework — Meta",
  "AI for Everyone — DeepLearning.AI",
  "Generative AI Fundamentals — Google Cloud",
  "Python for Data Science, AI & Development — IBM",
];

const SKILLS = [
  {
    Icon: Code2,
    title: "Languages",
    items: ["JavaScript", "Python", "C++", "Java"],
  },
  {
    Icon: Layers,
    title: "Frontend",
    items: ["React.js", "HTML5", "Tailwind CSS"],
  },
  {
    Icon: Database,
    title: "Backend & DB",
    items: ["Node.js", "Express.js", "Django", "MongoDB", "MySQL"],
  },
  {
    Icon: Brain,
    title: "AI / ML",
    items: ["PyTorch", "TensorFlow", "LangChain", "Pandas", "NumPy"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] as const } },
};

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="section-num">{num}.</span>
      <h2 className="text-2xl md:text-3xl font-medium tracking-tight">{label}</h2>
      <span className="flex-1 h-px bg-border" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen relative">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-background/70 backdrop-blur-md border-b border-border">
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-medium">
            <span className="mint mono">{"<"}</span>Preet
            <span className="mint mono">{"/>"}</span>
          </a>
          <ul className="hidden sm:flex items-center gap-6 text-sm mono">
            {[
              ["#about", "About"],
              ["#work", "Work"],
              ["#skills", "Skills"],
              ["#contact", "Contact"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="link-u text-foreground/80 hover:mint">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:mandhwanipreet@gmail.com"
            className="mono text-xs px-4 py-2 rounded-md border border-[var(--mint)] text-[var(--mint)] hover:bg-[var(--mint-soft)] transition-colors"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-16"
      >
        <div className="absolute inset-0 dotgrid opacity-30 pointer-events-none" />
        <div className="relative grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mono text-sm mint mb-5"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
            >
              <span className="mint">Preet Sawari</span>
              <br />
              <span className="text-foreground/85">Mandhwani.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mono text-sm text-muted-foreground mt-4"
            >
              CS @ Sukkur IBA University · Karachi, PK
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-6 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed"
            >
              I&apos;m a BS Computer Science student (graduating <span className="text-foreground">May 2026</span>) with hands-on experience in the{" "}
              <span className="mint">MERN stack</span> and a growing focus on{" "}
              <span className="mint">AI-powered applications</span>. I love building scalable, user-focused products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="mono text-sm inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--mint)] text-[var(--mint)] hover:bg-[var(--mint-soft)] transition-colors"
              >
                Check out my work <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Tech chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {TECH.map((t) => (
                <span
                  key={t}
                  className="mono text-[11px] px-2.5 py-1 rounded-md bg-secondary text-foreground/70 border border-border"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Portrait + blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:col-span-5 relative"
          >
            <div className="relative mx-auto w-60 h-72 sm:w-72 sm:h-80 md:w-full md:h-[420px]">
              <div className="blob" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-[var(--mint)]/40 z-10">
                <img
                  src={PORTRAIT}
                  alt="Portrait of Preet Sawari Mandhwani"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 z-20 bg-card border border-border rounded-xl px-4 py-2.5 shadow-lg">
                <p className="mono text-[10px] uppercase tracking-wider text-muted-foreground">CGPA</p>
                <p className="font-semibold mint">3.28 / 4.0</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border py-4 overflow-hidden bg-card/40">
        <div className="marquee-track flex gap-10 whitespace-nowrap mono text-sm">
          {[...TECH, ...TECH].map((s, i) => (
            <span key={i} className="text-foreground/50 flex items-center gap-10">
              {s} <span className="mint">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel num="01" label="About me" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-7 space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              I&apos;m a Computer Science candidate at{" "}
              <span className="mint">Sukkur IBA University</span>, graduating in May 2026.
              I specialize in MERN stack development and have a growing focus on AI-powered
              applications.
            </p>
            <p>
              Most recently I was a <span className="mint">MERN Stack Intern at 10Pearls</span>{" "}
              (Sep – Dec 2025), where I built <em>NoteSnap</em> — a full-stack notes
              management app — implementing authentication, CRUD, responsive UI and REST APIs.
              I followed industry practices with Mocha, Chai, Jest, Pino Logger and SonarQube.
            </p>
            <p>
              I&apos;m currently developing an{" "}
              <span className="mint">AI-Powered English Learning Web Application</span>{" "}
              as my Final Year Project — combining MERN with NLP for interactive language
              practice. I love clean code, problem-solving and shipping things people use.
            </p>
          </div>

          <div className="md:col-span-5 space-y-3">
            {[
              { Icon: GraduationCap, k: "Education", v: "BS Computer Science", s: "Sukkur IBA · 2022 – 2026" },
              { Icon: Briefcase, k: "Experience", v: "MERN Intern @ 10Pearls", s: "Sep 2025 – Dec 2025" },
              { Icon: Award, k: "CGPA", v: "3.28 / 4.0", s: "Sukkur IBA University" },
              { Icon: MapPin, k: "Location", v: "Karachi, Pakistan", s: "Open to remote / hybrid" },
            ].map(({ Icon, k, v, s }) => (
              <div
                key={k}
                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/40 hover:border-[var(--mint)]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--mint-soft)] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 mint" />
                </div>
                <div className="flex-1">
                  <p className="mono text-[11px] uppercase tracking-wider text-muted-foreground">{k}</p>
                  <p className="font-medium mt-0.5">{v}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel num="02" label="Featured projects" />
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.n}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group block p-6 rounded-2xl border border-border bg-card/40 hover:border-[var(--mint)]/60 hover:bg-card transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="mono text-xs mint">{p.n}</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:mint group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-xl font-semibold group-hover:mint transition-colors">
                {p.title}
              </h3>
              <p className="mono text-[11px] uppercase tracking-wider text-muted-foreground mt-1.5">
                {p.role}
              </p>
              <p className="text-sm text-foreground/70 mt-3 leading-relaxed">{p.blurb}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="mono text-[10px] px-2 py-0.5 rounded bg-secondary text-foreground/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel num="03" label="Technical toolkit" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-border bg-card/40 hover:border-[var(--mint)]/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-[var(--mint-soft)] flex items-center justify-center mb-4">
                <b.Icon className="w-5 h-5 mint" />
              </div>
              <p className="font-semibold mb-3">{b.title}</p>
              <ul className="space-y-1.5">
                {b.items.map((it) => (
                  <li key={it} className="mono text-xs text-foreground/70 flex items-center gap-2">
                    <span className="mint">▸</span> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl border border-border bg-card/40"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 mint" />
            <p className="mono text-xs uppercase tracking-wider text-muted-foreground">
              Certifications
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {CERTS.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="mono mint pt-0.5">→</span>
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel num="04" label="Get in touch" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-10 items-start"
        >
          <div className="md:col-span-7">
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Let&apos;s build
              <br />
              <span className="mint">something good.</span>
            </h3>
            <p className="mt-5 text-foreground/70 max-w-md">
              Open to junior MERN / Python / AI engineering roles and freelance work.
              The fastest way to reach me is by email.
            </p>
            <a
              href="mailto:mandhwanipreet@gmail.com"
              className="mt-8 inline-flex items-center gap-2 text-lg link-u mint"
            >
              mandhwanipreet@gmail.com
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <ul className="md:col-span-5 space-y-3">
            {[
              { Icon: Linkedin, label: "LinkedIn", v: "preet-sawari-mandhwani", href: "https://www.linkedin.com/in/preet-sawari-mandhwani/" },
              { Icon: Github, label: "GitHub", v: "@Preet411", href: "https://github.com/Preet411" },
              { Icon: Phone, label: "Phone", v: "+92 315 037 4972", href: "tel:+923150374972" },
              { Icon: Mail, label: "Email", v: "mandhwanipreet@gmail.com", href: "mailto:mandhwanipreet@gmail.com" },
              { Icon: MapPin, label: "Location", v: "Karachi, Pakistan", href: "#" },
            ].map(({ Icon, label, v, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card/40 hover:border-[var(--mint)]/60 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-4 h-4 mint" />
                    <span className="mono text-xs uppercase tracking-wider text-muted-foreground">
                      {label}
                    </span>
                  </span>
                  <span className="text-sm group-hover:mint transition-colors">{v}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border mt-12">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-4">
          <p className="mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Preet Sawari Mandhwani · Built with care.
          </p>
          <p className="mono text-xs text-muted-foreground">
            <span className="mint">●</span> Available for opportunities
          </p>
        </div>
      </footer>

      {/* CHATBOT */}
      <ChatBot />
    </div>
  );
}
