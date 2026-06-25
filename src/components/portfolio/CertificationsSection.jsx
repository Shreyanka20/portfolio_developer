import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import CertificationsModal from "./CertificationsModal";
import { useScrollReveal, useStaggerReveal } from "../../hooks/useScrollReveal";

/* ── Hero Emblem ── */
function CertEmblem() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 320, height: 300 }}>
      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full border border-[#DDD6FE] opacity-40" style={{ width: 280, height: 280 }} />
        <div className="absolute rounded-full border border-[#C4B5FD] opacity-30" style={{ width: 220, height: 220 }} />
        <div className="absolute rounded-full border border-[#A78BFA] opacity-20" style={{ width: 160, height: 160 }} />
      </div>
      {/* Ambient glow */}
      <div className="absolute w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)", filter: "blur(20px)" }} />
      {/* Central SVG badge */}
      <svg viewBox="0 0 160 160" className="relative z-10" style={{ width: 180, height: 180 }}>
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EDE9FE" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="shieldInner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.4" />
          </linearGradient>
          <filter id="emblemGlow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Hexagon outer */}
        <polygon points="80,10 135,42 135,106 80,138 25,106 25,42" fill="url(#shieldGrad)" stroke="#C4B5FD" strokeWidth="1.5" filter="url(#emblemGlow)" />
        {/* Hexagon inner */}
        <polygon points="80,28 118,50 118,94 80,116 42,94 42,50" fill="url(#shieldInner)" stroke="#A78BFA" strokeWidth="1" opacity="0.7" />
        {/* Check mark */}
        <path d="M62 76 l12 12 22-22" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Platform base glow */}
        <ellipse cx="80" cy="148" rx="40" ry="8" fill="#7C3AED" opacity="0.12" />
        {/* Floating particles */}
        <circle cx="25" cy="35" r="2" fill="#A78BFA" opacity="0.5" />
        <circle cx="138" cy="120" r="1.5" fill="#7C3AED" opacity="0.4" />
        <circle cx="140" cy="45" r="2.5" fill="#C4B5FD" opacity="0.5" />
        <circle cx="18" cy="100" r="1.5" fill="#A78BFA" opacity="0.35" />
      </svg>
      <style>{`
        @keyframes floatEmblem { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .emblem-float { animation: floatEmblem 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

/* ── Orbital 3D structure for dark card ── */
function OrbitalStructure() {
  return (
    <div className="flex items-center justify-center mt-6">
      <svg viewBox="0 0 200 160" className="w-48 h-36" fill="none">
        <defs>
          <radialGradient id="orb1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
          </radialGradient>
          <filter id="orbGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Platform rings stacked */}
        <ellipse cx="100" cy="130" rx="70" ry="14" fill="#7C3AED" opacity="0.15" filter="url(#orbGlow)" />
        <ellipse cx="100" cy="118" rx="55" ry="11" fill="#6D28D9" opacity="0.25" />
        <ellipse cx="100" cy="108" rx="42" ry="8" fill="#7C3AED" opacity="0.35" />
        <ellipse cx="100" cy="100" rx="30" ry="6" fill="#8B5CF6" opacity="0.45" />
        {/* Central orb */}
        <circle cx="100" cy="75" r="28" fill="url(#orb1)" filter="url(#orbGlow)" />
        <circle cx="100" cy="75" r="20" fill="#A78BFA" opacity="0.5" />
        <circle cx="100" cy="75" r="12" fill="#C4B5FD" opacity="0.6" />
        <circle cx="94" cy="68" r="4" fill="white" opacity="0.5" />
        {/* Orbital ring */}
        <ellipse cx="100" cy="75" rx="48" ry="16" stroke="#C4B5FD" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
        {/* Particles */}
        <circle cx="52" cy="75" r="2.5" fill="#A78BFA" opacity="0.7" />
        <circle cx="148" cy="75" r="2.5" fill="#A78BFA" opacity="0.7" />
        <circle cx="72" cy="40" r="1.5" fill="#C4B5FD" opacity="0.5" />
        <circle cx="130" cy="50" r="1.5" fill="#C4B5FD" opacity="0.5" />
      </svg>
    </div>
  );
}

/* ── Cube illustration ── */
function CubeIllustration() {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20 absolute bottom-5 right-5" fill="none">
      <defs>
        <linearGradient id="ct" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EDE9FE" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="cl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="cr" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <polygon points="50,15 80,32 50,49 20,32" fill="url(#ct)" stroke="#C4B5FD" strokeWidth="1" />
      <polygon points="20,32 50,49 50,75 20,58" fill="url(#cl)" stroke="#A78BFA" strokeWidth="1" />
      <polygon points="50,49 80,32 80,58 50,75" fill="url(#cr)" stroke="#7C3AED" strokeWidth="1" />
      <ellipse cx="50" cy="80" rx="22" ry="6" fill="#7C3AED" opacity="0.1" />
    </svg>
  );
}

/* ── Layered geometry for HackerRank card ── */
function LayeredGeometry() {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20 absolute bottom-5 right-5" fill="none">
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EDE9FE" />
          <stop offset="100%" stopColor="#DDD6FE" />
        </linearGradient>
      </defs>
      <rect x="15" y="60" width="70" height="12" rx="4" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="1" opacity="0.9" />
      <rect x="22" y="46" width="56" height="12" rx="4" fill="#DDD6FE" stroke="#C4B5FD" strokeWidth="1" opacity="0.8" />
      <rect x="29" y="32" width="42" height="12" rx="4" fill="#C4B5FD" stroke="#A78BFA" strokeWidth="1" opacity="0.7" />
      <ellipse cx="50" cy="78" rx="28" ry="5" fill="#7C3AED" opacity="0.08" />
    </svg>
  );
}

/* ── Credential icon for KFinTech card ── */
function CredentialIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20 absolute bottom-5 right-5" fill="none">
      <circle cx="50" cy="42" r="22" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="1.5" opacity="0.9" />
      <circle cx="50" cy="42" r="15" fill="#DDD6FE" stroke="#A78BFA" strokeWidth="1" opacity="0.8" />
      <path d="M42 42 l5 5 10-10" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="30" y="70" width="40" height="6" rx="3" fill="#C4B5FD" opacity="0.5" />
      <rect x="36" y="80" width="28" height="4" rx="2" fill="#C4B5FD" opacity="0.3" />
      <ellipse cx="50" cy="90" rx="22" ry="4" fill="#7C3AED" opacity="0.08" />
    </svg>
  );
}

/* ── Logo clusters for "more" card ── */
const logoItems = [
  { label: "PW", bg: "#1a1a1a", color: "#fff", isPW: true },
  { label: "un", bg: "#1B4F9C", color: "#fff", isUnstop: true },
  { label: "K", bg: "#2EC866", color: "#fff", isKiit: true },
  { label: "aws", bg: "#232F3E", color: "#FF9900", isAws: true },
  { label: "H", bg: "#2EC866", color: "#fff", isHR: true },
  { label: "K", bg: "#0D7FA3", color: "#fff", isKFin: true },
  { label: "aws", bg: "#232F3E", color: "#FF9900", isAws: true },
  { label: "+1", bg: "#F5F3FF", color: "#7C3AED" },
];

/* ── Small white cert card ── */
function CertCard({ count, title, logo, illustration, onClick }) {
  return (
    <div
      className="cert-card sr sr-bento bento-shine bento-float relative rounded-3xl p-6 bg-white border border-[#F3F0FF] overflow-hidden cursor-pointer bento-hover"
      onClick={onClick}
    >
      {/* Logo */}
      <div className="mb-4">{logo}</div>
      {/* Count */}
      <p className="font-heading font-medium text-[#7C3AED] mb-1" style={{ fontSize: "2rem", lineHeight: 1 }}>{count}</p>
      {/* Title */}
      <p className="font-body text-[#0F172A] text-sm font-semibold leading-snug mb-4 max-w-[55%]">{title}</p>
      {/* Arrow */}
      <button className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#52525B] transition-all duration-200 hover:border-[#7C3AED] hover:text-[#7C3AED] hover:bg-[#F5F3FF]">
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
      {/* Illustration */}
      {illustration}
    </div>
  );
}

/* ── AWS logo inline ── */
function AwsLogo() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#232F3E] w-fit">
      <svg viewBox="0 0 80 50" className="h-7 w-auto">
        <text x="0" y="34" fontSize="28" fontWeight="800" fontFamily="Arial, sans-serif" fill="#FF9900">aws</text>
        <path d="M62 43 Q70 39 78 43" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M75 41 l3 2 -1 3" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

/* ── HackerRank logo ── */
function HackerRankLogo() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1A1A1A] w-fit">
      <div className="w-8 h-8 rounded-md flex items-center justify-center bg-[#2EC866]">
        <span className="text-white font-black text-base font-body" style={{ fontFamily: "monospace" }}>H</span>
      </div>
      <span className="text-white font-bold text-xs font-body tracking-widest">HackerRank</span>
    </div>
  );
}

/* ── KFinTech logo ── */
function KFinLogo() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#E5E7EB] w-fit shadow-sm">
      <svg viewBox="0 0 32 32" className="w-7 h-7">
        <defs>
          <linearGradient id="kfin1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1A8FA0"/>
            <stop offset="100%" stopColor="#2EC4D6"/>
          </linearGradient>
          <linearGradient id="kfin2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A6FA0"/>
            <stop offset="100%" stopColor="#1A4FA0"/>
          </linearGradient>
        </defs>
        <polygon points="16,2 30,28 2,28" fill="url(#kfin1)"/>
        <polygon points="16,8 26,28 6,28" fill="url(#kfin2)" opacity="0.5"/>
        <polygon points="9,28 16,14 23,28" fill="white" opacity="0.15"/>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-black text-[#1A4FA0] text-xs tracking-widest font-body">KFINTECH</span>
        <span className="text-[#999] text-[8px] tracking-wider font-body">EXPERIENCE TRANSFORMATION</span>
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const titleRef = useScrollReveal();
  const gridRef = useStaggerReveal("cert-card");

  return (
    <>
      <section id="certifications" className="w-full bg-white py-16 md:py-24 lg:py-36">
        <div className="section-container">

          {/* Section header row */}
          <div ref={titleRef} className="sr flex items-start justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-body text-[#7C3AED] text-sm font-medium tracking-widest">04</span>
                <div className="line-expand w-8 h-[1px] bg-[#7C3AED]" />
              </div>
              <h2 className="font-heading font-medium text-[#0F172A] leading-none mb-4" style={{ fontSize: "clamp(3.5rem, 5.5vw, 5.5rem)" }}>
                Certifications{" "}
                <span className="heading-accent" style={{ fontSize: "0.6em" }}>✦</span>
              </h2>
              <p className="text-stagger text-stagger-1 font-body text-[#52525B] text-base leading-relaxed max-w-xs mb-6">
                Credentials that validate my skills,<br />commitment and continuous learning.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 font-body text-[#7C3AED] text-sm font-medium hover:gap-3 transition-all duration-200"
              >
                Explore all certifications
                <span className="w-7 h-7 rounded-full border border-[#C4B5FD] flex items-center justify-center hover:bg-[#F5F3FF] transition-colors duration-200">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

            {/* Hero emblem */}
            <div className="hidden lg:block">
              <div className="emblem-float">
                <CertEmblem />
              </div>
            </div>
          </div>

          {/* Bento grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

            {/* Card 01 — Dark feature card, spans 2 rows */}
            <div
              className="cert-card sr sr-bento bento-shine bento-float sr-d1 md:col-span-2 lg:col-span-1 lg:row-span-2 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden bento-hover min-h-[360px] md:min-h-[480px]"
              style={{
                background: "linear-gradient(145deg, #1E1040 0%, #0D0D14 100%)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              {/* Top icon */}
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-8">
                <svg className="w-5 h-5 text-[#A78BFA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M8 8h-2a2 2 0 0 0-2 2v1a5 5 0 0 0 10 0v-1a2 2 0 0 0-2-2h-2" />
                </svg>
              </div>

              <p className="font-heading font-medium text-white leading-none mb-2" style={{ fontSize: "3.5rem" }}>08</p>
              <p className="font-body text-[#C4B5FD] text-lg font-medium mb-4">Certifications</p>
              <div className="w-8 h-[2px] bg-[#7C3AED] rounded-full mb-4" />
              <p className="font-body text-[#C4B5FD] text-sm leading-relaxed">
                Across domains that power my journey.
              </p>

              <OrbitalStructure />

              {/* bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-16 rounded-b-3xl pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #0D0D14)" }} />
              {/* Ambient glow */}
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#7C3AED] opacity-10 blur-3xl pointer-events-none" />
            </div>

            {/* Card 02 — AWS */}
            <CertCard
              count="01"
              title="AWS Certifications"
              logo={<AwsLogo />}
              illustration={<CubeIllustration />}
            />

            {/* Card 03 — HackerRank */}
            <CertCard
              count="02"
              title="HackerRank Certifications"
              logo={<HackerRankLogo />}
              illustration={<LayeredGeometry />}
            />

            {/* Card 04 — KFinTech */}
            <CertCard
              count="03"
              title="Professional Certification"
              logo={<KFinLogo />}
              illustration={<CredentialIcon />}
            />

            {/* Card 05 — More certifications */}
            <div
              className="cert-card sr sr-bento bento-shine bento-float sr-d4 rounded-3xl p-6 bg-white border border-[#F3F0FF] cursor-pointer bento-hover flex flex-col justify-between"
              onClick={() => setModalOpen(true)}
            >
              <div className="grid grid-cols-4 gap-2">
                {logoItems.map((item, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold font-body border border-[#F3F0FF]"
                    style={{ background: item.bg, color: item.color }}
                  >
                    {item.isAws ? (
                      <svg viewBox="0 0 30 18" className="w-5 h-3">
                        <text x="0" y="14" fontSize="13" fontWeight="800" fontFamily="Arial" fill="#FF9900">aws</text>
                      </svg>
                    ) : item.isPW ? (
                      <svg viewBox="0 0 36 36" className="w-7 h-7">
                        <circle cx="18" cy="18" r="16" stroke="white" strokeWidth="1.5" fill="none"/>
                        <text x="18" y="15" textAnchor="middle" fontSize="10" fontWeight="800" fontFamily="serif" fill="white">P</text>
                        <text x="18" y="26" textAnchor="middle" fontSize="10" fontWeight="800" fontFamily="serif" fill="white">W</text>
                      </svg>
                    ) : item.isUnstop ? (
                      <svg viewBox="0 0 36 36" className="w-7 h-7">
                        <circle cx="18" cy="18" r="13" fill="#1B4F9C"/>
                        <text x="18" y="22" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="Arial" fill="white">un</text>
                      </svg>
                    ) : item.isKiit ? (
                      <svg viewBox="0 0 36 36" className="w-7 h-7">
                        <circle cx="18" cy="18" r="14" fill="#2EC866" stroke="#1ab855" strokeWidth="1"/>
                        <text x="18" y="23" textAnchor="middle" fontSize="11" fontWeight="800" fontFamily="monospace" fill="white">K</text>
                      </svg>
                    ) : item.isHR ? (
                      <div className="w-full h-full rounded-xl flex items-center justify-center bg-[#2EC866]">
                        <span className="text-white font-black text-sm" style={{ fontFamily: "monospace" }}>H</span>
                      </div>
                    ) : item.isKFin ? (
                      <svg viewBox="0 0 36 36" className="w-7 h-7">
                        <polygon points="18,4 32,30 4,30" fill="#2EC4D6"/>
                        <polygon points="18,10 28,30 8,30" fill="#1A6FA0" opacity="0.6"/>
                      </svg>
                    ) : item.label}
                  </div>
                ))}
              </div>
              <button className="font-body text-[#7C3AED] text-sm font-medium mt-4 text-left hover:underline">
                and more...
              </button>
            </div>

          </div>
        </div>
      </section>

      {modalOpen && <CertificationsModal onClose={() => setModalOpen(false)} />}

      <style>{`
        @keyframes floatEmblem { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .emblem-float { animation: floatEmblem 4s ease-in-out infinite; }
      `}</style>
    </>
  );
}