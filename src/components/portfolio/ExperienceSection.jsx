import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/useScrollReveal";

/* ─── Data (verified against CV) ────────────────────────── */
const experiences = [
  {
    id: "flutrr",
    company: "Flutrr",
    role: "Associate Software Engineer",
    period: "Oct 2024 – May 2026",
    location: "Kolkata, India",
    bullets: [
      "Architected and released Florra AI from scratch — Flutrr's proprietary agentic AI for dating — using LangChain, LangGraph, Node.js, Express.js, and MongoDB, driving a 20% increase in new user signups.",
      "Developed 20+ RESTful API endpoints for authentication, matchmaking, and messaging using Node.js and Express.js, optimizing backend performance and cutting average API latency by 18%.",
      "Served as Project Head for Homi.ai, directing technical planning, tech stack selection, and full-cycle product delivery, launching the platform 20% ahead of schedule.",
      "Spearheaded a 5-member cross-functional team spanning product, design, and engineering to deliver flutrr.com within a 2-week deadline.",
      "Owned development and upkeep of the company website and Admin Dashboard using React.js and Next.js, achieving 100% responsiveness and cross-platform compatibility, boosting user engagement by 30%.",
      "Established frontend testing protocols, code review workflows, CI/CD pipelines, and GitHub Actions, slashing release cycle time by 30% and lowering post-launch defect rates by 20%.",
    ],
    projects: [
      {
        name: "Florra AI",
        desc: "Agentic AI dating assistant — personalized matchmaking & conversation assistance built with LangChain and LangGraph.",
        tags: ["LangChain", "LangGraph", "Node.js", "MongoDB"],
      },
      {
        name: "Homi.ai",
        desc: "AI-powered marketing assistant for businesses — multi-channel content generation for Instagram, LinkedIn, blogs & email. Led as Project Head.",
        tags: ["OpenAI", "Next.js", "TypeScript", "Node.js"],
      },
      {
        name: "Flutrr Website",
        desc: "Official company website with cross-platform compatibility and 100% responsiveness. Delivered by a 5-member team in 2 weeks.",
        tags: ["React.js", "Next.js", "GitHub Actions"],
      },
      {
        name: "Match Discovery",
        desc: "Advanced profile discovery with AI-powered image search, real-time filtering, and personalized recommendations.",
        tags: ["React.js", "Elasticsearch", "REST APIs"],
      },
    ],
  },
  {
    id: "pst",
    company: "Passionate Solver Technologies",
    role: "Full Stack Web Intern",
    period: "Jun 2023 – Jul 2023",
    location: "Kolkata, India",
    bullets: [
      "Delivered a responsive analytics web application using Next.js, Apache ECharts, and Tailwind CSS, improving data visualization clarity by 25%.",
      "Designed reusable React.js UI components and applied frontend design patterns, eliminating code duplication and enhancing long-term maintainability by 15%.",
      "Participated in agile development cycles involving code reviews, testing, debugging, and technical documentation, lowering reported bug counts by 20% and achieving 100% on-time delivery.",
    ],
    projects: [
      {
        name: "Analytics Dashboard",
        desc: "Responsive analytics web application with interactive ECharts visualizations and a clean data-first UI.",
        tags: ["Next.js", "Apache ECharts", "Tailwind CSS"],
      },
    ],
  },
  {
    id: "abchi",
    company: "ABCHI Technologies Pvt. Ltd.",
    role: "React Native Intern",
    period: "Jan 2023 – Jun 2023",
    location: "Remote",
    bullets: [
      "Shipped 10+ React Native components for the Glodobaara platform, streamlining user workflows and cutting platform bounce rates by 20%.",
      "Optimized frontend-backend integration via REST API refactoring, increasing data handling efficiency and trimming average response time by 34%.",
      "Partnered with developers, designers, and QA engineers in an agile environment, accelerating feature release velocity by 15%.",
    ],
    projects: [
      {
        name: "Glodobaara",
        desc: "Accessibility-focused mobile platform for senior citizens — cross-platform React Native with optimized user journeys.",
        tags: ["React Native", "REST APIs", "Agile"],
      },
    ],
  },
];

/* ─── Project mini-card ──────────────────────────────────── */
function ProjectMiniCard({ project, delay }) {
  return (
    <div
      className="flex flex-col gap-2.5 p-4 rounded-xl border border-[#EDE9FE] bg-white/80 bento-hover bento-shine cursor-default"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="font-body font-semibold text-[#0F172A] text-sm">{project.name}</span>
      <p className="font-body text-[#71717A] text-xs leading-relaxed flex-1">{project.desc}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full bg-[#EDE9FE] text-[#7C3AED] text-[10px] font-body font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Single experience entry ────────────────────────────── */
function ExperienceEntry({ exp, index, isLast }) {
  const [open, setOpen] = useState(false);
  const revealRef = useScrollReveal();

  return (
    <div
      ref={revealRef}
      className={`sr sr-d${Math.min(index + 1, 4)} relative flex gap-6 md:gap-10`}
      style={{ paddingBottom: isLast ? 0 : "3.5rem" }}
    >
      {/* Timeline track */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 20 }}>
        {/* Node */}
        <div
          className="relative z-10 flex-shrink-0 transition-all duration-400"
          style={{ marginTop: "28px" }}
        >
          <div
            className="w-4 h-4 rounded-full border-2 transition-all duration-400"
            style={{
              borderColor: open ? "#7C3AED" : "#C4B5FD",
              background: open ? "#7C3AED" : "white",
              boxShadow: open ? "0 0 18px 4px rgba(124,58,237,0.40)" : "none",
            }}
          />
        </div>
        {/* Line below node */}
        {!isLast && (
          <div
            className="flex-1 w-[1px] mt-2"
            style={{
              background: open
                ? "linear-gradient(to bottom, #7C3AED, #DDD6FE)"
                : "linear-gradient(to bottom, #DDD6FE, transparent)",
              transition: "background 0.4s ease",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Header — clickable */}
        <button
          className="w-full text-left group"
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
        >
          <div
            className="flex items-start justify-between gap-4 px-5 py-5 rounded-2xl transition-all duration-300"
            style={{
              border: `1px solid ${open ? "#DDD6FE" : "#F3F0FF"}`,
              background: open
                ? "linear-gradient(135deg, #FAFAFE 0%, #F5F3FF 100%)"
                : "white",
              boxShadow: open
                ? "0 4px 24px -6px rgba(124,58,237,0.12)"
                : "0 1px 6px -2px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center flex-wrap gap-2 mb-1.5">
                <h3
                  className="font-heading font-medium text-[#0F172A] leading-tight"
                  style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)" }}
                >
                  {exp.company}
                </h3>
                <span className="text-[#A78BFA] text-sm">✦</span>
              </div>
              <p className="font-body text-[#7C3AED] text-sm font-medium mb-3">{exp.role}</p>
              <div className="flex items-center flex-wrap gap-4">
                <div className="flex items-center gap-1.5 text-[#71717A]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="font-body text-xs">{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#71717A]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="font-body text-xs">{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Toggle chevron */}
            <div
              className="w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300"
              style={{
                borderColor: open ? "#7C3AED" : "#E5E7EB",
                color: open ? "#7C3AED" : "#71717A",
                background: open ? "#F5F3FF" : "white",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </button>

        {/* Expandable panel */}
        <div className={`expand-panel ${open ? "open" : ""}`}>
          <div className="pt-4 pb-2 px-5">
            {/* Divider */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-[1px] bg-[#7C3AED]" />
              <span className="font-body text-[#7C3AED] text-xs font-semibold tracking-widest uppercase">
                Key Achievements
              </span>
            </div>

            {/* Bullets */}
            <ul className="space-y-3.5 mb-8">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0"
                    style={{ opacity: 0.7 + (i % 3) * 0.1 }}
                  />
                  <span className="font-body text-[#52525B] text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            {/* Projects */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-[1px] bg-[#7C3AED]" />
                <span className="font-body text-[#7C3AED] text-xs font-semibold tracking-widest uppercase">
                  Projects
                </span>
              </div>
              <div
                className={`grid gap-3 ${
                  exp.projects.length === 1
                    ? "grid-cols-1 max-w-sm"
                    : exp.projects.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {exp.projects.map((proj, i) => (
                  <ProjectMiniCard key={proj.name} project={proj} delay={i * 60} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────── */
export default function ExperienceSection() {
  const titleRef = useScrollReveal();

  return (
    <section id="experience" className="w-full bg-white pt-2 md:pt-6 pb-16 md:pb-24 relative overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute top-16 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-16 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(196,181,253,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="section-container max-w-4xl">
        {/* Section title */}
        <div ref={titleRef} className="sr flex flex-col items-center mb-12 md:mb-20">
          <h2
            className="font-heading font-medium text-[#0F172A] leading-none mb-4"
            style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
          >
            Work Experience
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-12 h-[1px] bg-[#DDD6FE]" />
            <span className="text-[#A78BFA] text-xs">✦</span>
            <div className="w-12 h-[1px] bg-[#DDD6FE]" />
          </div>
          <p className="text-stagger text-stagger-1 font-body text-[#71717A] text-sm mt-4 text-center">
            Click any role to see projects & highlights
          </p>
        </div>

        {/* Entries */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceEntry
              key={exp.id}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
