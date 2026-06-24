import React, { useState } from "react";
import { X, ExternalLink } from "lucide-react";

const allCerts = [
  {
    id: 1,
    name: "Full Stack Development",
    issuer: "PW (PhysicsWallah)",
    logo: "PW",
    logoColor: "#1a1a1a",
    logoBg: "#f0f0f0",
    date: "Issued Jan 2025",
    tags: ["Express.js", "React.js", "+10"],
    category: "Professional",
  },
  {
    id: 2,
    name: "Data & Analytics course for Fintech Industry on Cloud",
    issuer: "KFin Technologies Ltd.",
    logo: "K",
    logoColor: "#7C3AED",
    logoBg: "#F5F3FF",
    date: "Issued Jan 2025",
    tags: ["SQL", "Database Management", "+7"],
    category: "Professional",
  },
  {
    id: 3,
    name: "HackerRank Certification of Problem Solving (Intermediate)",
    issuer: "HackerRank",
    logo: "H",
    logoColor: "#fff",
    logoBg: "#2EC866",
    date: "Issued Sep 2022",
    tags: ["Problem Solving"],
    category: "HackerRank",
  },
  {
    id: 4,
    name: "HackerRank Basic React Certificate",
    issuer: "HackerRank",
    logo: "H",
    logoColor: "#fff",
    logoBg: "#2EC866",
    date: "Issued Sep 2022",
    tags: ["React.js", "Spring Framework", "+1"],
    category: "HackerRank",
  },
  {
    id: 5,
    name: "AWS Academy Graduate – AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services (AWS)",
    logo: "aws",
    logoColor: "#FF9900",
    logoBg: "#fff",
    date: "Issued Jun 2023",
    tags: ["Amazon S3"],
    category: "AWS",
  },
  {
    id: 6,
    name: "Certificate of Participation in Namma Yatri Open Mobility Challenge",
    issuer: "Unstop",
    logo: "U",
    logoColor: "#fff",
    logoBg: "#6D28D9",
    date: "Issued May 2023",
    tags: [],
    category: "Others",
  },
  {
    id: 7,
    name: "KIIT INTERNSHIP CAMP 2023",
    issuer: "KIIT – Kalinga Institute of Industrial Technology",
    logo: "K",
    logoColor: "#fff",
    logoBg: "#2EC866",
    date: "Issued Mar 2023",
    tags: ["Problem Analysis"],
    category: "Others",
  },
  {
    id: 8,
    name: "AWS Academy Graduate – Introduction to Cloud Semester 1",
    issuer: "Amazon Web Services (AWS)",
    logo: "aws",
    logoColor: "#FF9900",
    logoBg: "#fff",
    date: "Issued Apr 2023",
    tags: ["Problem Solving", "Problem Analysis"],
    category: "AWS",
  },
];

const categories = ["All", "AWS", "HackerRank", "Professional", "Others"];

function LogoBadge({ cert }) {
  if (cert.logo === "aws") {
    return (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: cert.logoBg, border: "1px solid #f0f0f0" }}>
        <svg viewBox="0 0 60 36" className="w-7 h-7">
          <text x="0" y="22" fontSize="18" fontWeight="700" fontFamily="Arial" fill="#FF9900">aws</text>
        </svg>
      </div>
    );
  }
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-body font-bold text-sm" style={{ background: cert.logoBg, color: cert.logoColor, border: "1px solid rgba(0,0,0,0.06)" }}>
      {cert.logo}
    </div>
  );
}

export default function CertificationsModal({ onClose }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? allCerts : allCerts.filter(c => c.category === activeCategory);
  const counts = { All: allCerts.length, AWS: allCerts.filter(c=>c.category==="AWS").length, HackerRank: allCerts.filter(c=>c.category==="HackerRank").length, Professional: allCerts.filter(c=>c.category==="Professional").length, Others: allCerts.filter(c=>c.category==="Others").length };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "rgba(15,23,42,0.4)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl overflow-hidden flex flex-col"
        style={{ width: "72vw", maxWidth: "1100px", height: "78vh", boxShadow: "0 40px 120px -20px rgba(124,58,237,0.2), 0 8px 40px rgba(0,0,0,0.12)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex-shrink-0 px-10 pt-10 pb-6 border-b border-[#F3F0FF]">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#7C3AED]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
              </div>
              <h2 className="font-heading font-medium text-[#0F172A] mb-1" style={{ fontSize: "2.8rem", lineHeight: 1 }}>All Certifications</h2>
              <p className="font-body text-[#71717A] text-sm mt-2">A comprehensive list of my professional certifications and achievements.</p>

              {/* Filter pills */}
              <div className="flex items-center gap-2 mt-5 flex-wrap">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-4 py-1.5 rounded-full text-sm font-body font-medium transition-all duration-200"
                    style={{
                      background: activeCategory === cat ? "#7C3AED" : "#F5F3FF",
                      color: activeCategory === cat ? "#fff" : "#52525B",
                      border: activeCategory === cat ? "1px solid #7C3AED" : "1px solid #EDE9FE",
                    }}
                  >
                    {cat} {cat === "All" ? `(${counts.All})` : cat === "AWS" ? `(${counts.AWS})` : cat === "HackerRank" ? `(${counts.HackerRank})` : cat === "Professional" ? `(${counts.Professional})` : `(${counts.Others})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Hero cert visual */}
            <div className="flex-shrink-0 ml-8">
              <svg viewBox="0 0 180 160" className="w-40 h-36" fill="none">
                <defs>
                  <linearGradient id="mDoc" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EDE9FE" />
                    <stop offset="100%" stopColor="#DDD6FE" />
                  </linearGradient>
                </defs>
                <rect x="30" y="20" width="110" height="130" rx="12" fill="url(#mDoc)" stroke="#C4B5FD" strokeWidth="1.5" opacity="0.9" />
                <rect x="45" y="40" width="80" height="6" rx="3" fill="#A78BFA" opacity="0.5" />
                <rect x="45" y="54" width="60" height="4" rx="2" fill="#C4B5FD" opacity="0.4" />
                <rect x="45" y="64" width="70" height="4" rx="2" fill="#C4B5FD" opacity="0.3" />
                <circle cx="88" cy="110" r="22" fill="white" stroke="#C4B5FD" strokeWidth="1.5" opacity="0.9" />
                <circle cx="88" cy="110" r="16" fill="#F5F3FF" stroke="#A78BFA" strokeWidth="1" />
                <path d="M80 110l5 5 10-10" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <ellipse cx="88" cy="155" rx="40" ry="8" fill="#7C3AED" opacity="0.08" />
              </svg>
            </div>

            <button onClick={onClose} className="flex-shrink-0 w-9 h-9 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#71717A] hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-200 ml-4">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal body — scrollable */}
        <div className="flex-1 overflow-y-auto px-10 py-6">
          <div className="grid grid-cols-4 gap-4">
            {filtered.map(cert => (
              <div
                key={cert.id}
                className="rounded-2xl p-5 border border-[#F3F0FF] bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(124,58,237,0.12)] cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <LogoBadge cert={cert} />
                  <ExternalLink className="w-3.5 h-3.5 text-[#C4B5FD] group-hover:text-[#7C3AED] transition-colors duration-200 mt-1" />
                </div>
                <p className="font-body text-[#0F172A] text-sm font-semibold leading-snug mb-2">{cert.name}</p>
                <p className="font-body text-[#7C3AED] text-xs font-medium mb-1">{cert.issuer}</p>
                <p className="font-body text-[#A1A1AA] text-xs mb-3">{cert.date}</p>
                {cert.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {cert.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full bg-[#F5F3FF] text-[#7C3AED] text-xs font-body">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal footer */}
        <div className="flex-shrink-0 px-10 py-4 border-t border-[#F3F0FF] flex items-center justify-center">
          <a href="#" className="inline-flex items-center gap-2 font-body text-sm text-[#52525B] hover:text-[#7C3AED] transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
            View all on Credly
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}