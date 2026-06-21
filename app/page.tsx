"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Trophy,
  X,
} from "lucide-react";

type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  impact: string;
  tags: string[];
  images: string[];
  url?: string;
  featured?: boolean;
};

const work: Project[] = [
  {
    title: "Florra AI",
    eyebrow: "Agentic AI · Flutrr",
    summary:
      "A context-aware dating assistant that combines conversational intelligence with personalized matchmaking.",
    impact: "+20% new user signups",
    tags: ["LangChain", "LangGraph", "Node.js", "MongoDB"],
    images: ["/images/florra/florra1.jpeg", "/images/florra/florra2.jpeg", "/images/florra/florra3.jpeg"],
    featured: true,
  },
  {
    title: "Homi AI",
    eyebrow: "AI Marketing Platform · Project Head",
    summary:
      "A multi-channel marketing copilot for campaigns across social, blogs, email, and business content.",
    impact: "Shipped 20% ahead of schedule",
    tags: ["React", "Express", "AI Workflows", "System Design"],
    images: ["/images/homi/homi_1_HD(1).webp", "/images/homi/homi_2_HD.webp", "/images/homi/homi_3_HD.webp"],
    featured: true,
  },
  {
    title: "Intelligent Match Discovery",
    eyebrow: "Search Experience · Flutrr",
    summary:
      "Advanced preference and image-based discovery with dynamic filters and real-time recommendations.",
    impact: "Lower-friction profile discovery",
    tags: ["React", "Visual Search", "REST APIs"],
    images: ["/images/searchui/search1.webp", "/images/searchui/search2.webp"],
  },
  {
    title: "Flutrr.com",
    eyebrow: "Official Website · Team Lead",
    summary:
      "The company's responsive, performance-led marketing platform, delivered with a five-person team.",
    impact: "+30% user engagement",
    tags: ["Next.js", "SEO", "Performance"],
    images: ["/images/website/website1.jpeg", "/images/website/website2.webp", "/images/website/website3.webp"],
  },
  {
    title: "Glodobaara",
    eyebrow: "Accessible Mobile Product · ABCHI",
    summary:
      "A senior-friendly mobile experience with accessible journeys and optimized API interactions.",
    impact: "34% faster API response time",
    tags: ["React Native", "Accessibility", "APIs"],
    images: [
      "/images/glodobbara/glodobaara_1_HD.webp",
      "/images/glodobbara/glodobaara_2_HD.webp",
      "/images/glodobbara/glodobaara_3_HD.webp",
    ],
  },
  {
    title: "Analytics Platform",
    eyebrow: "Data Visualization · Passionate Solver",
    summary:
      "A responsive analytics product built around reusable UI architecture and clearer data storytelling.",
    impact: "+25% visualization clarity",
    tags: ["Next.js", "Apache ECharts", "Tailwind"],
    images: [
      "/images/passionate/passionate_1_HD(1).webp",
      "/images/passionate/passionate_2_HD(1).webp",
      "/images/passionate/passionate_3_HD(1).webp",
    ],
  },
];

const projects: Project[] = [
  {
    title: "Rasoi",
    eyebrow: "Restaurant Operations, Reimagined",
    summary:
      "A complete dine-in operating system with four role-based dashboards, real-time order flow, billing, reviews, and owner analytics.",
    impact: "4 roles · 9-table schema · live sync",
    tags: ["Next.js 15", "Supabase", "PostgreSQL", "Zustand"],
    images: ["/images/resturant/image1.png", "/images/resturant/image2.png", "/images/resturant/image3.png"],
    url: "https://resturant-dashboard-green.vercel.app",
  },
  {
    title: "ChronoBook",
    eyebrow: "Scheduling Without the Back-and-Forth",
    summary:
      "A Calendly-style platform with a conflict-safe slot engine, public booking, video integrations, automated email, and an AI assistant.",
    impact: "Zero-signup booking · conflict detection",
    tags: ["React 19", "FastAPI", "MongoDB", "Gemini"],
    images: ["/images/chronobook/image1.png", "/images/chronobook/image2.png", "/images/chronobook/image3.png"],
    url: "https://slotbookingchronebook.vercel.app/",
  },
  {
    title: "Bloomloop",
    eyebrow: "Flowers That Live on Screen",
    summary:
      "A no-signup digital gifting experience with a bouquet builder, music, personal notes, freshness mechanics, and a public Bloom Wall.",
    impact: "Concept-to-production solo build",
    tags: ["Full Stack", "Event Analytics", "SEO", "Animations"],
    images: ["/images/bloomkeep/image1.png", "/images/bloomkeep/image2.png", "/images/bloomkeep/image3.png"],
    url: "https://bloomloop-brown.vercel.app/",
  },
];

const skills = [
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "AWS",
  "React Native",
  "LangChain",
  "LangGraph",
  "REST APIs",
  "System Design",
];

type Certification = {
  title: string;
  issuer: string;
  date?: string;
  category: "Cloud" | "Development" | "Data" | "Achievement";
  skills: string[];
  credentialId?: string;
};

const certifications: Certification[] = [
  {
    title: "Full Stack Development",
    issuer: "PW Skills · PhysicsWallah",
    date: "Jan 2025",
    category: "Development",
    skills: ["React.js", "Express.js", "Node.js", "MongoDB", "SQL", "JavaScript", "Deployment"],
  },
  {
    title: "Data & Analytics Course for Fintech Industry on Cloud",
    issuer: "KFin Technologies Ltd.",
    category: "Data",
    skills: ["SQL & Database Management", "Collaboration", "Cloud Analytics"],
  },
  {
    title: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "Jun 2023",
    category: "Cloud",
    skills: ["Amazon S3", "Cloud Architecture"],
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "May 2023",
    category: "Cloud",
    skills: ["AWS", "Amazon S3", "Cloud Foundations"],
  },
  {
    title: "AWS Academy Introduction to Cloud — Semester 1",
    issuer: "Amazon Web Services",
    date: "Apr 2023",
    category: "Cloud",
    skills: ["Problem Solving", "Problem Analysis"],
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "Sep 2022",
    category: "Achievement",
    skills: ["Problem Solving"],
  },
  {
    title: "React.js — Basic Certificate",
    issuer: "HackerRank",
    category: "Development",
    skills: ["React.js", "Spring Framework"],
  },
  {
    title: "Namma Yatri Open Mobility Challenge",
    issuer: "Unstop",
    date: "May 2023",
    category: "Achievement",
    skills: ["Mobility Tech", "Participation"],
  },
  {
    title: "KIIT Internship Camp 2023",
    issuer: "KIIT — Kalinga Institute of Industrial Technology",
    date: "Mar 2023",
    category: "Achievement",
    skills: ["Problem Analysis"],
  },
];

const certFilters: { label: string; value: "All" | Certification["category"] }[] = [
  { label: "All credentials", value: "All" },
  { label: "Cloud", value: "Cloud" },
  { label: "Development", value: "Development" },
  { label: "Data", value: "Data" },
  { label: "Achievement", value: "Achievement" },
];

const categoryIcon: Record<Certification["category"], typeof Cloud> = {
  Cloud: Cloud,
  Development: Code2,
  Data: Database,
  Achievement: Trophy,
};

const stats = [
  { value: 6, suffix: "+", label: "Products shipped" },
  { value: 20, prefix: "+", suffix: "%", label: "Avg. signup lift driven" },
  { value: 34, suffix: "%", label: "Faster API response shipped" },
  { value: certifications.length, suffix: "", label: "Certifications earned" },
];

/* ---------------------------------- helpers ---------------------------------- */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" }}
      animate={inView ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start: number | null = null;
    const duration = 1300;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ---------------------------------- nav ---------------------------------- */

function NavAvatar({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="nav-avatar" aria-hidden={failed}>
      {!failed && <img src={src} alt={alt} onError={() => setFailed(true)} />}
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["home", "work", "projects", "credentials", "contact"];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const close = () => {
      if (window.innerWidth > 767) setOpen(false);
    };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label="Primary navigation">
        <a href="#home" className="monogram" aria-label="Shreyanka Dutta home">
          <NavAvatar src="/images/Hero/hero.webp" alt="" />
          SD<span>.</span>
        </a>
        <div className="nav-links">
          {links.map((link, index) => (
            <a href={`#${link}`} key={link}>
              <span>0{index + 1}</span> {link}
            </a>
          ))}
          <a href="/resume.pdf" download className="nav-resume">
            Résumé <ArrowDownRight size={14} />
          </a>
        </div>
        <button
          type="button"
          className="menu-button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <Menu />
        </button>
      </nav>

      <button
        type="button"
        className={`nav-backdrop ${open ? "open" : ""}`}
        aria-label="Close menu"
        onClick={() => setOpen(false)}
        tabIndex={open ? 0 : -1}
      />

      <aside id="mobile-nav" className={`nav-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="nav-drawer-head">
          <a href="#home" className="monogram" onClick={() => setOpen(false)} aria-label="Shreyanka Dutta home">
            <NavAvatar src="/images/Hero/hero.webp" alt="" />
            SD<span>.</span>
          </a>
          <button type="button" className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>
        <nav className="nav-drawer-links" aria-label="Mobile navigation">
          {links.map((link) => (
            <a href={`#${link}`} onClick={() => setOpen(false)} key={link}>
              {link}
            </a>
          ))}
        </nav>
        <a href="/resume.pdf" download className="button button-primary nav-drawer-cta" onClick={() => setOpen(false)}>
          Download résumé <ArrowDownRight size={16} />
        </a>
      </aside>
    </header>
  );
}

/* ---------------------------------- hero ---------------------------------- */

function Hero() {
  return (
    <section id="home" className="hero shell">
      <div className="hero-copy">
        <motion.div className="availability" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <span className="pulse" /> Available for ambitious builds
        </motion.div>
        <h1 aria-label="I build ideas into products people remember">
          {[
            ["I build ideas into", "line-one"],
            ["products people", "line-two"],
            ["remember.", "line-three"],
          ].map(([line, klass], index) => (
            <span className={klass} key={line}>
              {line.split(" ").map((word, wordIndex) => (
                <motion.span
                  className="word"
                  key={word}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.12 + index * 0.12 + wordIndex * 0.045, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </span>
          ))}
        </h1>
        <motion.div className="hero-bottom" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <p>
            I&rsquo;m <strong>Shreyanka Dutta</strong>, a software engineer crafting scalable full-stack products and AI experiences from Bangalore.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              Explore my work <ArrowDownRight size={16} />
            </a>
            <a href="/resume.pdf" download className="button button-ghost">
              Download résumé
            </a>
          </div>
        </motion.div>

        <motion.div className="stat-strip" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }}>
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-value">
                <CountUp value={stat.value} suffix={stat.suffix} prefix={"prefix" in stat ? (stat.prefix as string) : ""} />
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------- project viewport ------------------------------- */

function ViewportImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <>
      {failed && (
        <div className="viewport-placeholder">
          <Code2 size={24} />
        </div>
      )}
      {!failed && <img src={src} alt={alt} onError={() => setFailed(true)} />}
    </>
  );
}

function ProjectViewport({ project, label }: { project: Project; label: string }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const images = project.images;

  useEffect(() => {
    if (hovered || images.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 3400);
    return () => clearInterval(id);
  }, [hovered, images.length]);

  return (
    <div className="viewport" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="viewport-bar">
        <span className="vb-label">{label}</span>
        <span className="vb-dots">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className="viewport-stage">
        {images.map((src, i) => (
          <div className={`viewport-frame ${i === index ? "active" : ""}`} key={src}>
            <ViewportImage src={src} alt={`${project.title} screen ${i + 1}`} />
          </div>
        ))}
        <div className="viewport-reticle" />
        {images.length > 1 && (
          <div className="viewport-dots">
            {images.map((src, i) => (
              <button
                key={src}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
                aria-label={`Show screen ${i + 1} of ${project.title}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------- work card ---------------------------------- */

function WorkCard({ project, index }: { project: Project; index: number }) {
  const fig = `FIG. 0${index + 1} — ${project.title}`;
  return (
    <Reveal className={`work-card ${project.featured ? "featured" : ""}`}>
      <ProjectViewport project={project} label={fig} />
      <div className="work-card-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="summary">{project.summary}</p>
        <div className="impact">{project.impact}</div>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ---------------------------------- certifications ---------------------------------- */

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const Icon = categoryIcon[cert.category];
  return (
    <Reveal className="cert-card" delay={(index % 3) * 0.06}>
      <div className="cert-card-top">
        <span className="cert-icon">
          <Icon size={16} />
        </span>
        {cert.date && <span className="cert-date">{cert.date}</span>}
      </div>
      <div>
        <h4>{cert.title}</h4>
        <p className="cert-issuer">{cert.issuer}</p>
      </div>
      <div className="cert-skills">
        {cert.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      {cert.credentialId && (
        <div className="cert-cred">
          <BadgeCheck size={12} /> {cert.credentialId}
        </div>
      )}
    </Reveal>
  );
}

function CertificationsSection() {
  const [filter, setFilter] = useState<"All" | Certification["category"]>("All");
  const visible = filter === "All" ? certifications : certifications.filter((c) => c.category === filter);

  return (
    <section id="credentials" className="cert-section shell">
      <Reveal className="section-heading compact-heading">
        <div>
          <div className="title-block">
            <span className="tb-tag">Sheet 05</span>
            <span>
              <span className="tb-dot" /> Credentials
            </span>
            <span>Rev 2026.06</span>
          </div>
          <h2>
            Verified on paper.
            <br />
            <em>Proven in production.</em>
          </h2>
        </div>
      </Reveal>
      <div className="cert-filters">
        {certFilters.map((f) => (
          <button key={f.value} className={filter === f.value ? "active" : ""} onClick={() => setFilter(f.value)}>
            {f.label}
          </button>
        ))}
      </div>
      <div className="cert-grid">
        {visible.map((cert, index) => (
          <CertCard cert={cert} index={index} key={cert.title} />
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- app ---------------------------------- */

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [cursor, setCursor] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const move = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main>
      <div className="blueprint-grid" aria-hidden />
      <motion.div className="progress" style={{ scaleX }} />
      <div className="cursor-glow" style={{ transform: `translate(${cursor.x - 230}px, ${cursor.y - 230}px)` }} />
      <Nav />
      <Hero />

      <div className="ticker" aria-label="Core technologies">
        <motion.div animate={{ x: [0, -1100] }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }}>
          {[...skills.slice(0, 9), ...skills.slice(0, 9)].map((skill, index) => (
            <span key={`${skill}-${index}`}>
              {skill} <b>✦</b>
            </span>
          ))}
        </motion.div>
      </div>

      <section id="work" className="section shell">
        <Reveal className="section-heading">
          <div>
            <div className="title-block">
              <span className="tb-tag">Sheet 02</span>
              <span>
                <span className="tb-dot" /> Selected work
              </span>
              <span>Rev 2026.06</span>
            </div>
            <h2>
              Built in the real world.
              <br />
              <em>Measured by impact.</em>
            </h2>
          </div>
          <p className="section-intro">
            From zero-to-one AI products to high-traffic customer experiences — work that balances systems thinking with an exacting eye for
            interaction.
          </p>
        </Reveal>
        <div className="work-grid">
          {work.map((project, index) => (
            <WorkCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="shell">
          <Reveal className="section-heading">
            <div>
              <div className="title-block">
                <span className="tb-tag">Sheet 03</span>
                <span>
                  <span className="tb-dot" /> Independent projects
                </span>
                <span>Rev 2026.06</span>
              </div>
              <h2>Curiosity, shipped.</h2>
            </div>
            <p className="section-intro">
              Self-directed products where I owned the messy middle — from the first data model to the final micro-interaction.
            </p>
          </Reveal>
          <div className="project-list">
            {projects.map((project, index) => (
              <Reveal className="personal-project" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div className="personal-copy">
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="impact">{project.impact}</div>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href={project.url} target="_blank" rel="noreferrer" className="live-link">
                    View live project <ArrowUpRight size={16} />
                  </a>
                </div>
                <ProjectViewport project={project} label={`FIG. 0${index + 1} — ${project.title}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell expertise">
        <Reveal className="section-heading compact-heading">
          <div>
            <div className="title-block">
              <span className="tb-tag">Sheet 04</span>
              <span>
                <span className="tb-dot" /> Toolkit &amp; foundations
              </span>
              <span>Rev 2026.06</span>
            </div>
            <h2>
              Broad stack.
              <br />
              <em>Sharp judgment.</em>
            </h2>
          </div>
        </Reveal>
        <div className="expertise-grid">
          <Reveal className="expertise-card skills-card">
            <div className="card-icon">
              <Code2 />
            </div>
            <p className="eyebrow">Core toolkit</p>
            <div className="skill-cloud">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
          <Reveal className="expertise-card experience-card" delay={0.08}>
            <div className="card-icon">
              <BriefcaseBusiness />
            </div>
            <p className="eyebrow">Experience</p>
            <div className="timeline-item">
              <span>2024—2026</span>
              <strong>Associate Software Engineer</strong>
              <small>Flutrr · Kolkata</small>
            </div>
            <div className="timeline-item">
              <span>2023</span>
              <strong>Full Stack Web Intern</strong>
              <small>Passionate Solver Technologies</small>
            </div>
            <div className="timeline-item">
              <span>2023</span>
              <strong>React Native Intern</strong>
              <small>ABCHI Technologies</small>
            </div>
          </Reveal>
          <Reveal className="expertise-card education-card" delay={0.16}>
            <div className="card-icon">
              <Award />
            </div>
            <p className="eyebrow">Education</p>
            <div className="degree">
              <strong>B.Tech, Computer Science</strong>
              <span>KIIT University · 2020—2024</span>
              <b>8.68 GPA</b>
            </div>
            <a href="#credentials" className="education-pointer">
              <BadgeCheck size={14} /> {certifications.length} certifications, verified below <ArrowDownRight size={14} />
            </a>
          </Reveal>
        </div>
      </section>

      <CertificationsSection />

      <section id="contact" className="contact-section">
        <div className="shell">
          <Reveal>
            <p className="kicker">Have something ambitious in mind?</p>
            <h2>
              Let&rsquo;s make it
              <br />
              <em>real.</em>
            </h2>
            <a className="contact-email" href="mailto:shreyankadutta1209@gmail.com">
              shreyankadutta1209@gmail.com <ArrowUpRight />
            </a>
          </Reveal>
          <div className="contact-bottom">
            <div className="location">
              <MapPin size={16} /> Bangalore, India
            </div>
            <div className="socials">
              <a href="https://www.linkedin.com/in/shreyanka-dutta-916a4620b/" target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/Shreyanka20" target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub
              </a>
              <a href="mailto:shreyankadutta1209@gmail.com">
                <Mail size={16} /> Email
              </a>
            </div>
            <p>Designed &amp; built with intent · © {new Date().getFullYear()}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
