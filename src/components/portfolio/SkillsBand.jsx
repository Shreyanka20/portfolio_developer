import React from "react";

/* --- Monochrome SVG skill icons (defined first) --- */

const reactIcon = (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
    <circle cx="24" cy="24" r="4" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(120 24 24)" />
  </svg>
);

const nextIcon = (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
    <text x="2" y="34" fontSize="22" fontWeight="800" fontFamily="Inter, sans-serif">N</text>
    <text x="20" y="34" fontSize="13" fontWeight="400" fontFamily="Inter, sans-serif">ext</text>
  </svg>
);

const nodeIcon = (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
    <path d="M24 4L6 14v20l18 10 18-10V14L24 4zm0 4.5L38 16v16L24 39.5 10 32V16L24 8.5z" opacity=".15" />
    <text x="11" y="30" fontSize="14" fontWeight="700" fontFamily="monospace" fill="currentColor">JS</text>
  </svg>
);

const tsIcon = (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <rect x="4" y="4" width="40" height="40" rx="6" fill="currentColor" opacity="0.12" />
    <text x="10" y="33" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif" fill="currentColor">TS</text>
  </svg>
);

const pythonIcon = (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
    <path d="M24 4C13 4 14 9 14 9v5h10v2H10s-7-.7-7 10 6 10.5 6 10.5h4v-5s-.3-6 6-6h10s6 .4 6-5.5V9S36 4 24 4zm-5 3.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6z" opacity=".7" />
    <path d="M24 44c11 0 10-5 10-5v-5H24v-2h14s7 .7 7-10-6-10.5-6-10.5h-4v5s.3 6-6 6H19s-6-.4-6 5.5V39s-1 5 11 5zm5-3.5a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6z" opacity=".4" />
  </svg>
);

const pgIcon = (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
    <ellipse cx="24" cy="14" rx="16" ry="7" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M8 14v20c0 3.9 7.2 7 16 7s16-3.1 16-7V14" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M8 24c0 3.9 7.2 7 16 7s16-3.1 16-7" fill="none" stroke="currentColor" strokeWidth="2" opacity=".4" />
  </svg>
);

const awsIcon = (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
    <text x="3" y="32" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">aws</text>
  </svg>
);

const dockerIcon = (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor" opacity=".8">
    <rect x="6" y="22" width="6" height="5" rx="1" />
    <rect x="14" y="22" width="6" height="5" rx="1" />
    <rect x="22" y="22" width="6" height="5" rx="1" />
    <rect x="14" y="15" width="6" height="5" rx="1" />
    <rect x="22" y="15" width="6" height="5" rx="1" />
    <rect x="30" y="22" width="6" height="5" rx="1" />
    <rect x="22" y="8" width="6" height="5" rx="1" />
    <path d="M2 28c3 8 10 12 22 12 14 0 20-8 22-16H2z" opacity=".15" />
  </svg>
);

const graphqlIcon = (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
    <polygon points="24,6 40,16 40,32 24,42 8,32 8,16" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="6" r="3" />
    <circle cx="40" cy="16" r="3" />
    <circle cx="40" cy="32" r="3" />
    <circle cx="24" cy="42" r="3" />
    <circle cx="8" cy="32" r="3" />
    <circle cx="8" cy="16" r="3" />
  </svg>
);

const tailwindIcon = (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
    <path d="M14 18c2-6 6-9 12-9 9 0 10 6.75 14.5 7.5C44 17.25 47 15 48 11c-2 6-6 9-12 9-9 0-10-6.75-14.5-7.5C18 11.75 15 14 14 18z" opacity=".7" />
    <path d="M0 30c2-6 6-9 12-9 9 0 10 6.75 14.5 7.5C30 29.25 33 27 34 23c-2 6-6 9-12 9-9 0-10-6.75-14.5-7.5C4 23.75 1 26 0 30z" opacity=".5" />
  </svg>
);

const redisIcon = (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
    <path d="M44 26l-20 10L4 26v-6l20 10 20-10v6z" opacity=".3" />
    <path d="M44 20l-20 10L4 20v-6l20 10 20-10v6z" opacity=".5" />
    <path d="M44 14L24 24 4 14l20-10 20 10z" opacity=".7" />
  </svg>
);

const gitIcon = (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
    <path d="M46.2 22.1L25.9 1.8a2.6 2.6 0 0 0-3.7 0l-4.2 4.2 5.3 5.3a3.1 3.1 0 0 1 3.9 4l5.1 5.1a3.1 3.1 0 1 1-1.9 1.8l-4.8-4.8v12.6a3.1 3.1 0 1 1-2.5-.3V17.8a3.1 3.1 0 0 1-1.7-4.1L16 8.4 1.8 22.6a2.6 2.6 0 0 0 0 3.7L22.1 46.6a2.6 2.6 0 0 0 3.7 0L46.2 25.8a2.6 2.6 0 0 0 0-3.7z" opacity=".6" />
  </svg>
);

const skills = [
  { name: "React.js", icon: reactIcon },
  { name: "Next.js", icon: nextIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "Python", icon: pythonIcon },
  { name: "PostgreSQL", icon: pgIcon },
  { name: "AWS", icon: awsIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "GraphQL", icon: graphqlIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Redis", icon: redisIcon },
  { name: "Git", icon: gitIcon },
];

export default function SkillsBand() {
  const track = [...skills, ...skills, ...skills];

  return (
    <section className="relative w-full bg-[#FAFAFE] border-t border-b border-[#EDE9FE]/60 py-14 overflow-hidden">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-40 z-10 bg-gradient-to-r from-[#FAFAFE] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 z-10 bg-gradient-to-l from-[#FAFAFE] to-transparent pointer-events-none" />

      <div
        className="flex items-center gap-24 animate-ticker"
        style={{ width: "max-content" }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
      >
        {track.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex flex-col items-center gap-3 shrink-0 group cursor-default"
          >
            <div className="w-14 h-14 flex items-center justify-center text-[#0F172A] transition-all duration-300 group-hover:text-[#7C3AED] group-hover:scale-110 group-hover:-translate-y-1">
              {skill.icon}
            </div>
            <span className="font-body text-sm font-semibold text-[#0F172A] tracking-wide transition-all duration-300 group-hover:text-[#7C3AED] whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-ticker {
          animation: ticker 50s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-ticker { animation-play-state: paused; }
        }
      `}</style>
    </section>
  );
}