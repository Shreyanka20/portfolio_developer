import React from "react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/useScrollReveal";

const skills = [
  {
    id: "languages",
    title: "Languages",
    description: "JavaScript, TypeScript,\nPython, SQL, C++, HTML5, CSS3",
    featured: true,
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <rect width="40" height="40" rx="10" fill="rgba(124,58,237,0.25)" />
        <text x="20" y="27" textAnchor="middle" fill="#C4B5FD" fontSize="15" fontWeight="bold" fontFamily="monospace">{"</>"}</text>
      </svg>
    ),
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "React.js, Next.js, Redux,\nTailwind CSS, Material UI",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <rect width="40" height="40" rx="10" fill="#EDE9FE" />
        <rect x="8" y="10" width="24" height="16" rx="2" stroke="#7C3AED" strokeWidth="1.8" fill="none"/>
        <path d="M14 30h12M20 26v4" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "backend",
    title: "Backend",
    description: "Node.js, Express.js, FastAPI,\nRESTful APIs, Microservices",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <rect width="40" height="40" rx="10" fill="#EDE9FE" />
        <rect x="8" y="14" width="24" height="5" rx="2.5" stroke="#7C3AED" strokeWidth="1.7" fill="none"/>
        <rect x="8" y="22" width="24" height="5" rx="2.5" stroke="#7C3AED" strokeWidth="1.7" fill="none"/>
        <circle cx="13" cy="16.5" r="1.2" fill="#7C3AED"/>
        <circle cx="13" cy="24.5" r="1.2" fill="#7C3AED"/>
      </svg>
    ),
  },
  {
    id: "databases",
    title: "Databases",
    description: "MongoDB, PostgreSQL,\nSupabase, Redis",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <rect width="40" height="40" rx="10" fill="#EDE9FE" />
        <ellipse cx="20" cy="13" rx="9" ry="4" stroke="#7C3AED" strokeWidth="1.7" fill="none"/>
        <path d="M11 13v7c0 2.2 4 4 9 4s9-1.8 9-4v-7" stroke="#7C3AED" strokeWidth="1.7" fill="none"/>
        <path d="M11 20v5c0 2.2 4 4 9 4s9-1.8 9-4v-5" stroke="#7C3AED" strokeWidth="1.7" fill="none"/>
      </svg>
    ),
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "AWS, Docker, GitHub Actions,\nVercel, Render, CI/CD",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <rect width="40" height="40" rx="10" fill="#EDE9FE" />
        <path d="M28 24a5 5 0 000-10 7 7 0 00-13.5 2A5 5 0 0012 26h16z" stroke="#7C3AED" strokeWidth="1.7" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "ai",
    title: "AI & LLM",
    description: "LangChain, LangGraph,\nOpenAI, Claude, Prompt Engineering",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <rect width="40" height="40" rx="10" fill="#EDE9FE" />
        <path d="M20 10 L20 14M20 26 L20 30M10 20 L14 20M26 20 L30 20M13 13 L16 16M24 24 L27 27M27 13 L24 16M16 24 L13 27" stroke="#7C3AED" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="4" stroke="#7C3AED" strokeWidth="1.7" fill="none"/>
      </svg>
    ),
  },
  {
    id: "tools",
    title: "Tools & Practices",
    description: "Git, GitHub, Cursor, JWT,\nElasticsearch, Agile, System Design",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <rect width="40" height="40" rx="10" fill="#EDE9FE" />
        <circle cx="16" cy="14" r="3" stroke="#7C3AED" strokeWidth="1.7" fill="none"/>
        <circle cx="16" cy="26" r="3" stroke="#7C3AED" strokeWidth="1.7" fill="none"/>
        <circle cx="26" cy="20" r="3" stroke="#7C3AED" strokeWidth="1.7" fill="none"/>
        <path d="M16 17v6M18.6 15.4L23.4 18.6M18.6 24.6L23.4 21.4" stroke="#7C3AED" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function SkillCard({ skill, className = "" }) {
  return (
    <div
      className={`sr-child sr sr-bento bento-shine bento-float rounded-2xl p-6 flex items-start gap-4 bento-hover ${className}`}
      style={{ border: "1px solid #EDE9FE", background: "white", boxShadow: "0 2px 16px -4px rgba(124,58,237,0.07)" }}
    >
      <div className="flex-shrink-0 mt-0.5">{skill.icon}</div>
      <div>
        <h3 className="font-body font-semibold text-[#0F172A] text-base mb-1">{skill.title}</h3>
        <p className="font-body text-[#71717A] text-base leading-relaxed whitespace-pre-line">{skill.description}</p>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const titleRef = useScrollReveal();
  const gridRef = useStaggerReveal("sr-child");

  return (
    <section id="skills" className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute top-16 right-16 pointer-events-none" style={{ opacity: 0.35 }}>
        {Array.from({ length: 6 }).map((_, row) => (
          <div key={row} className="flex gap-3 mb-3">
            {Array.from({ length: 8 }).map((_, col) => (
              <div key={col} className="w-1 h-1 rounded-full bg-[#C4B5FD]" />
            ))}
          </div>
        ))}
      </div>
      <div className="absolute top-20 right-52 pointer-events-none">
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
          <path d="M20 4 L22 18 L36 20 L22 22 L20 36 L18 22 L4 20 L18 18 Z" fill="#C4B5FD" opacity="0.7"/>
        </svg>
      </div>

      <div className="section-container max-w-6xl">
        {/* Header */}
        <div ref={titleRef} className="sr mb-12">
          <h2
            className="font-heading font-medium text-[#0F172A]"
            style={{ fontSize: "clamp(3rem, 5vw, 5rem)", lineHeight: 1 }}
          >
            Skills
          </h2>
          <div className="line-expand w-8 h-[3px] bg-[#7C3AED] rounded-full mt-3 mb-5" />
          <p className="text-stagger text-stagger-1 font-body text-[#71717A] text-sm leading-relaxed max-w-xs">
            Technologies and tools I use to build<br />scalable, AI-powered products.
          </p>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">

          {/* Featured Languages card */}
          <div
            className="sr-child sr sr-bento bento-shine bento-float sr-d1 lg:row-span-2 rounded-2xl p-6 md:p-7 flex flex-col justify-start gap-6 relative overflow-hidden bento-hover cursor-default min-h-[280px] lg:min-h-[340px]"
            style={{
              background: "linear-gradient(145deg, #1E1040 0%, #0D0820 100%)",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
          >
            {/* Fiber-optic lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 340" preserveAspectRatio="xMidYMid slice" fill="none">
              <defs>
                <radialGradient id="focalGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="1"/>
                  <stop offset="35%" stopColor="#C4B5FD" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
                </radialGradient>
              </defs>
              {Array.from({ length: 20 }).map((_, i) => {
                const t = i / 19;
                const x0 = 120 + t * 200;
                const cx1 = 80 + t * 100;
                const cy1 = 240 - t * 20;
                const cx2 = 200 + t * 30;
                const cy2 = 150 - t * 30;
                const opacity = 0.3 + t * 0.5;
                return (
                  <path key={i} d={`M${x0} 340 C${cx1} ${cy1} ${cx2} ${cy2} 290 90`}
                    stroke="#A78BFA" strokeWidth={0.6 + t * 0.5} strokeOpacity={opacity} fill="none"/>
                );
              })}
              <circle cx="290" cy="90" r="32" fill="url(#focalGlow)" opacity="0.2"/>
              <circle cx="290" cy="90" r="14" fill="url(#focalGlow)" opacity="0.4"/>
              <circle cx="290" cy="90" r="4.5" fill="white" opacity="1"/>
            </svg>

            <div className="relative z-10">
              <svg viewBox="0 0 44 44" className="w-11 h-11" fill="none">
                <rect width="44" height="44" rx="12" fill="rgba(124,58,237,0.3)" />
                <text x="22" y="30" textAnchor="middle" fill="#C4B5FD" fontSize="16" fontWeight="bold" fontFamily="monospace">{"</>"}</text>
              </svg>
            </div>
            <div className="relative z-10 mt-2">
              <h3 className="font-heading font-medium text-white text-3xl mb-2">Languages</h3>
              <p className="font-body text-[#A78BFA] text-base leading-relaxed">
                JavaScript, TypeScript,<br />Python, SQL, C++,<br />HTML5, CSS3
              </p>
            </div>
          </div>

          <SkillCard skill={skills[1]} className="sr-d2" />
          <SkillCard skill={skills[2]} className="sr-d3" />

          {/* Databases — spans 2 cols */}
          <div
            className="sr-child sr sr-bento bento-shine bento-float sr-d2 sm:col-span-2 lg:col-span-2 rounded-2xl p-5 md:p-6 flex items-start sm:items-center justify-start w-full relative overflow-hidden bento-hover cursor-default min-h-[140px]"
            style={{
              border: "1px solid #DDD6FE",
              background: "linear-gradient(120deg, #FAF8FF 0%, #F3EEFF 60%, #EDE9FE 100%)",
              boxShadow: "0 2px 24px -4px rgba(124,58,237,0.13)",
            }}
          >
            <div className="hidden md:block absolute right-32 top-1/2 -translate-y-1/2 pointer-events-none" style={{ width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.28) 0%, transparent 70%)", filter: "blur(18px)" }} />
            <div className="flex items-start sm:items-center gap-4 md:gap-5 relative z-10 pl-4 sm:pl-3 pr-4 w-full sm:w-auto sm:max-w-[70%] lg:max-w-[52%] text-left">
              <div className="flex-shrink-0">{skills[3].icon}</div>
              <div>
                <h3 className="font-body font-semibold text-[#0F172A] text-lg mb-1.5">Databases</h3>
                <p className="font-body text-[#71717A] text-base leading-relaxed">MongoDB, PostgreSQL, Supabase, Redis</p>
              </div>
            </div>
            {/* Floating DB illustration */}
            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" style={{ width: "220px", height: "180px" }}>
              <svg viewBox="0 0 220 180" className="absolute inset-0 w-full h-full" fill="none">
                <ellipse cx="110" cy="148" rx="100" ry="28" stroke="#C4B5FD" strokeWidth="1.2" strokeDasharray="5 6" strokeOpacity="0.55"/>
                <ellipse cx="110" cy="148" rx="74" ry="20" stroke="#DDD6FE" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.45"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center" style={{ animation: "dbFloat 3s ease-in-out infinite" }}>
                <svg viewBox="0 0 120 130" className="w-28 h-28" fill="none">
                  <defs>
                    <linearGradient id="discTop2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#F5F0FF"/><stop offset="100%" stopColor="#DDD6FE"/></linearGradient>
                    <linearGradient id="discSide2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#DDD6FE"/><stop offset="100%" stopColor="#A78BFA" stopOpacity="0.7"/></linearGradient>
                  </defs>
                  <rect x="18" y="90" width="84" height="18" fill="url(#discSide2)"/>
                  <ellipse cx="60" cy="108" rx="42" ry="12" fill="#C4B5FD" opacity="0.85"/>
                  <ellipse cx="60" cy="90" rx="42" ry="12" fill="url(#discTop2)"/>
                  <rect x="18" y="62" width="84" height="18" fill="url(#discSide2)" opacity="0.92"/>
                  <ellipse cx="60" cy="80" rx="42" ry="12" fill="#C4B5FD" opacity="0.8"/>
                  <ellipse cx="60" cy="62" rx="42" ry="12" fill="url(#discTop2)"/>
                  <rect x="18" y="34" width="84" height="18" fill="url(#discSide2)" opacity="0.85"/>
                  <ellipse cx="60" cy="52" rx="42" ry="12" fill="#C4B5FD" opacity="0.75"/>
                  <ellipse cx="60" cy="34" rx="42" ry="12" fill="url(#discTop2)"/>
                </svg>
              </div>
            </div>
            <style>{`@keyframes dbFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}`}</style>
          </div>

          <SkillCard skill={skills[4]} className="sr-d3" />
          <SkillCard skill={skills[5]} className="sr-d4" />
          <SkillCard skill={skills[6]} className="sr-d5" />

        </div>
      </div>
    </section>
  );
}
