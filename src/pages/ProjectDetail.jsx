import React from "react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/portfolio/Navbar";
import { projectsData } from "../lib/projectsData";

/* ── Decorative Illustrations ── */
const OrbIllustration = () => (
  <svg viewBox="0 0 320 280" className="w-full h-full" fill="none">
    <defs>
      <radialGradient id="orb1" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.9" />
        <stop offset="60%" stopColor="#7C3AED" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.2" />
      </radialGradient>
      <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#EDE9FE" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
      </radialGradient>
      <filter id="orbBlur"><feGaussianBlur stdDeviation="8" /></filter>
    </defs>
    <ellipse cx="160" cy="240" rx="110" ry="22" fill="url(#orb2)" filter="url(#orbBlur)" />
    <circle cx="160" cy="130" r="88" fill="url(#orb1)" />
    <circle cx="160" cy="130" r="88" stroke="#C4B5FD" strokeWidth="1" strokeOpacity="0.3" fill="none" />
    <circle cx="160" cy="130" r="65" stroke="#DDD6FE" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />
    <circle cx="160" cy="130" r="40" fill="#EDE9FE" opacity="0.35" />
    <ellipse cx="140" cy="108" rx="20" ry="14" fill="white" opacity="0.18" transform="rotate(-30 140 108)" />
  </svg>
);

const BrainIllustration = () => (
  <svg viewBox="0 0 320 280" className="w-full h-full" fill="none">
    <defs>
      <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
      </radialGradient>
      <filter id="bf2"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <circle cx="160" cy="140" r="110" fill="url(#bgGlow)" />
    <circle cx="160" cy="140" r="90" stroke="#7C3AED" strokeWidth="0.6" strokeOpacity="0.3" fill="none" />
    <circle cx="160" cy="140" r="62" stroke="#A78BFA" strokeWidth="0.6" strokeOpacity="0.4" fill="none" />
    {[[160,68],[214,97],[224,140],[214,183],[160,212],[106,183],[96,140],[106,97],[180,118],[140,118],[180,162],[140,162]].map(([cx,cy],i)=>(
      <circle key={i} cx={cx} cy={cy} r="4" fill="#A78BFA" filter="url(#bf2)" />
    ))}
    {[[160,68,214,97],[214,97,224,140],[224,140,214,183],[214,183,160,212],[160,212,106,183],[106,183,96,140],[96,140,106,97],[106,97,160,68],[160,68,180,118],[160,68,140,118],[214,97,180,118],[106,97,140,118],[180,118,180,162],[140,118,140,162],[180,162,214,183],[140,162,106,183],[140,118,180,118],[140,162,180,162]].map(([x1,y1,x2,y2],i)=>(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7C3AED" strokeWidth="0.7" strokeOpacity="0.45" />
    ))}
  </svg>
);

const StackIllustration = () => (
  <svg viewBox="0 0 320 280" className="w-full h-full" fill="none">
    <defs>
      <linearGradient id="sl1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#EDE9FE"/><stop offset="100%" stopColor="#C4B5FD"/></linearGradient>
      <linearGradient id="sl2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#DDD6FE"/><stop offset="100%" stopColor="#A78BFA" stopOpacity="0.7"/></linearGradient>
      <linearGradient id="sl3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.8"/><stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5"/></linearGradient>
      <radialGradient id="sPlat" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#4C1D95" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="160" cy="262" rx="120" ry="18" fill="url(#sPlat)" />
    <polygon points="160,190 230,155 160,120 90,155" fill="url(#sl1)" stroke="#C4B5FD" strokeWidth="1"/>
    <polygon points="90,155 160,190 160,210 90,175" fill="#C4B5FD" stroke="#A78BFA" strokeWidth="0.8" opacity="0.65"/>
    <polygon points="160,190 230,155 230,175 160,210" fill="#A78BFA" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.55"/>
    <polygon points="160,148 218,116 160,84 102,116" fill="url(#sl2)" stroke="#C4B5FD" strokeWidth="1" opacity="0.9"/>
    <polygon points="102,116 160,148 160,166 102,134" fill="#C4B5FD" stroke="#A78BFA" strokeWidth="0.8" opacity="0.5"/>
    <polygon points="160,148 218,116 218,134 160,166" fill="#A78BFA" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.4"/>
    <polygon points="160,106 196,88 160,70 124,88" fill="url(#sl3)" stroke="#DDD6FE" strokeWidth="0.8" opacity="0.85"/>
    <polygon points="124,88 160,106 160,120 124,102" fill="#DDD6FE" stroke="#C4B5FD" strokeWidth="0.6" opacity="0.45"/>
    <polygon points="160,106 196,88 196,102 160,120" fill="#C4B5FD" stroke="#A78BFA" strokeWidth="0.6" opacity="0.38"/>
  </svg>
);

const illustrations = {
  orb: OrbIllustration,
  brain: BrainIllustration,
  stack: StackIllustration,
};

/* ── 3D Tech Icons (large, for cards) ── */
const TechIcon3D = ({ name, color }) => {
  const icons = {
    "React": (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <radialGradient id="rg_react" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#88EEFF"/>
            <stop offset="100%" stopColor="#61DAFB"/>
          </radialGradient>
          <filter id="rf_react"><feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#61DAFB" floodOpacity="0.4"/></filter>
        </defs>
        <circle cx="24" cy="24" r="4.5" fill="url(#rg_react)" filter="url(#rf_react)"/>
        <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" strokeWidth="2.2" fill="none" filter="url(#rf_react)"/>
        <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" strokeWidth="2.2" fill="none" transform="rotate(60 24 24)" filter="url(#rf_react)"/>
        <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" strokeWidth="2.2" fill="none" transform="rotate(120 24 24)" filter="url(#rf_react)"/>
      </svg>
    ),
    "React Native": (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <radialGradient id="rg_rn" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#88EEFF"/>
            <stop offset="100%" stopColor="#61DAFB"/>
          </radialGradient>
          <filter id="rf_rn"><feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#61DAFB" floodOpacity="0.4"/></filter>
        </defs>
        <circle cx="24" cy="24" r="4.5" fill="url(#rg_rn)" filter="url(#rf_rn)"/>
        <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" strokeWidth="2.2" fill="none" filter="url(#rf_rn)"/>
        <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" strokeWidth="2.2" fill="none" transform="rotate(60 24 24)" filter="url(#rf_rn)"/>
        <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" strokeWidth="2.2" fill="none" transform="rotate(120 24 24)" filter="url(#rf_rn)"/>
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <radialGradient id="rg_next" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#555"/>
            <stop offset="100%" stopColor="#000"/>
          </radialGradient>
          <filter id="rf_next"><feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.3"/></filter>
        </defs>
        <circle cx="24" cy="24" r="20" fill="url(#rg_next)" filter="url(#rf_next)"/>
        <circle cx="17" cy="17" r="3" fill="white" opacity="0.15" />
        <path d="M18 32V18l16 20H18z" fill="white" opacity="0.95"/>
        <path d="M28 18v14" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <linearGradient id="rg_node" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6CC24A"/>
            <stop offset="100%" stopColor="#339933"/>
          </linearGradient>
          <filter id="rf_node"><feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#339933" floodOpacity="0.4"/></filter>
        </defs>
        <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" fill="url(#rg_node)" filter="url(#rf_node)"/>
        <path d="M24 4L6 14l18 10 18-10L24 4z" fill="#6CC24A" opacity="0.5"/>
        <text x="24" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">node</text>
      </svg>
    ),
    "MongoDB": (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <linearGradient id="rg_mongo" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6DC85A"/>
            <stop offset="100%" stopColor="#3FA037"/>
          </linearGradient>
          <filter id="rf_mongo"><feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#47A248" floodOpacity="0.45"/></filter>
        </defs>
        <path d="M24 4C16 12 12 18 12 25a12 12 0 0024 0C36 18 32 12 24 4z" fill="url(#rg_mongo)" filter="url(#rf_mongo)"/>
        <ellipse cx="20" cy="14" rx="4" ry="3" fill="white" opacity="0.2" transform="rotate(-20 20 14)"/>
        <line x1="24" y1="36" x2="24" y2="44" stroke="#47A248" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    "TypeScript": (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <linearGradient id="rg_ts" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5B9BD5"/>
            <stop offset="100%" stopColor="#3178C6"/>
          </linearGradient>
          <filter id="rf_ts"><feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#3178C6" floodOpacity="0.4"/></filter>
        </defs>
        <rect x="4" y="4" width="40" height="40" rx="6" fill="url(#rg_ts)" filter="url(#rf_ts)"/>
        <rect x="4" y="4" width="40" height="12" rx="6" fill="white" opacity="0.12"/>
        <text x="24" y="30" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="sans-serif">TS</text>
      </svg>
    ),
    "Redux": (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <linearGradient id="rg_redux" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9B6FD4"/>
            <stop offset="100%" stopColor="#764ABC"/>
          </linearGradient>
          <filter id="rf_redux"><feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#764ABC" floodOpacity="0.45"/></filter>
        </defs>
        <path d="M30 10c4 2 7 6 7 11a10 10 0 01-3 7" stroke="url(#rg_redux)" strokeWidth="3.5" fill="none" strokeLinecap="round" filter="url(#rf_redux)"/>
        <path d="M18 10c-4 2-7 6-7 11a10 10 0 003 7" stroke="url(#rg_redux)" strokeWidth="3.5" fill="none" strokeLinecap="round" filter="url(#rf_redux)"/>
        <path d="M14 34c2 4 6 7 10 7s8-3 10-7" stroke="url(#rg_redux)" strokeWidth="3.5" fill="none" strokeLinecap="round" filter="url(#rf_redux)"/>
        <circle cx="24" cy="24" r="4" fill="url(#rg_redux)" filter="url(#rf_redux)"/>
      </svg>
    ),
    "Stripe": (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <linearGradient id="rg_stripe" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B83FF"/>
            <stop offset="100%" stopColor="#635BFF"/>
          </linearGradient>
          <filter id="rf_stripe"><feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#635BFF" floodOpacity="0.45"/></filter>
        </defs>
        <rect x="4" y="4" width="40" height="40" rx="8" fill="url(#rg_stripe)" filter="url(#rf_stripe)"/>
        <rect x="4" y="4" width="40" height="12" rx="8" fill="white" opacity="0.12"/>
        <path d="M27 19c-2.5 0-4 1-4 2.5 0 1.8 1.5 2.4 3.2 3 2.5.8 5.3 1.8 5.3 5.3 0 3.8-3 5.7-7 5.7-2 0-4-.5-5.5-1.3v-3.2c1.5.9 3.5 1.5 5.5 1.5 2.3 0 3.5-.8 3.5-2.2 0-1.7-1.5-2.3-3.3-3-2.4-.8-5.2-1.8-5.2-5.2 0-3.4 2.7-5.3 6.5-5.3 1.7 0 3.3.3 4.7.9v3.1c-1.2-.6-2.8-1-4.7-1z" fill="white"/>
      </svg>
    ),
    "AWS": (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <linearGradient id="rg_aws" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB74D"/>
            <stop offset="100%" stopColor="#FF9900"/>
          </linearGradient>
          <filter id="rf_aws"><feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#FF9900" floodOpacity="0.4"/></filter>
        </defs>
        <text x="24" y="22" textAnchor="middle" fill="url(#rg_aws)" fontSize="11" fontWeight="bold" fontFamily="sans-serif" filter="url(#rf_aws)">AWS</text>
        <path d="M8 30 Q24 38 40 30" stroke="url(#rg_aws)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#rf_aws)"/>
        <path d="M36 27l4 3-2 4" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 27l-4 3 2 4" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "AWS S3": (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <linearGradient id="rg_s3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB74D"/>
            <stop offset="100%" stopColor="#FF9900"/>
          </linearGradient>
          <filter id="rf_s3"><feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#FF9900" floodOpacity="0.4"/></filter>
        </defs>
        <polygon points="24,6 40,15 40,33 24,42 8,33 8,15" fill="url(#rg_s3)" filter="url(#rf_s3)"/>
        <polygon points="24,6 40,15 24,24 8,15" fill="#FFB74D" opacity="0.5"/>
        <polygon points="8,15 24,24 24,42 8,33" fill="#E68900" opacity="0.6"/>
        <text x="24" y="29" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">S3</text>
      </svg>
    ),
    "OpenAI": (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <radialGradient id="rg_oai" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C4B5FD"/>
            <stop offset="100%" stopColor="#7C3AED"/>
          </radialGradient>
          <filter id="rf_oai"><feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#7C3AED" floodOpacity="0.4"/></filter>
        </defs>
        <circle cx="24" cy="24" r="18" fill="url(#rg_oai)" filter="url(#rf_oai)"/>
        <circle cx="24" cy="24" r="6" fill="white" opacity="0.9"/>
        <circle cx="24" cy="24" r="3" fill="url(#rg_oai)"/>
      </svg>
    ),
    "Supabase": (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <linearGradient id="rg_supa" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3ECF8E"/>
            <stop offset="100%" stopColor="#249361"/>
          </linearGradient>
          <filter id="rf_supa"><feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#3ECF8E" floodOpacity="0.4"/></filter>
        </defs>
        <path d="M24 6 L8 42 h12 l4-14 8 14h12 L24 6z" fill="url(#rg_supa)" filter="url(#rf_supa)"/>
      </svg>
    ),
  };
  return icons[name] || (
    <span className="text-2xl font-bold" style={{ color }}>{name.slice(0, 2)}</span>
  );
};

/* ── Tech icon SVGs ── */
const TechIcon = ({ name, color, bg }) => {
  const icons = {
    "React": (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
    "React Native": (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 9H11z"/>
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#339933">
        <path d="M12 1.85L3 6.57v10.86L12 22.15l9-4.72V6.57L12 1.85zm0 2.3l6.5 3.42-2.5 1.3-4-2.1-4 2.1-2.5-1.3L12 4.15zm-7 4.93l2.5 1.3v4.72l-2.5-1.3V9.08zm7 8.77l-4.5-2.36V11l4.5 2.36v4.49zm1 0v-4.49L17 11v4.49L13 17.85zm4.5-6.77l-2.5 1.3V7.65l2.5-1.3v4.73z"/>
      </svg>
    ),
    "MongoDB": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#47A248">
        <path d="M12.3 2C9.4 5.7 7.5 9.1 7.5 12.5a4.8 4.8 0 009.6 0C17.1 9 15 5.5 12.3 2z"/>
        <path d="M12 18v4" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "TypeScript": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        <path d="M3 3h18v18H3V3zm10 10.5v-1h-4V14h1.5v5H12v-5h1.5v-0.5H13zm2.5-1.5h2.5v1H17V17h1l.5 2h-1.5L16.5 17H16v2h-1.5v-7H15z"/>
      </svg>
    ),
    "Redux": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#764ABC">
        <path d="M16.6 15.5c.5-1.5.3-3.2-.6-4.5l-3.8-6.4c-.2-.4-.8-.4-1 0L7.4 11c-.9 1.3-1.1 3-.6 4.5H3v2h18v-2h-4.4zm-4.6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
      </svg>
    ),
    "Stripe": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#635BFF">
        <path d="M13.5 7c-2.2 0-3.5 1-3.5 2.5 0 1.8 1.4 2.4 2.9 2.9 1.3.4 1.9.7 1.9 1.4 0 .8-.7 1.2-1.9 1.2-1.4 0-2.8-.6-3.7-1.3v2.5c.9.5 2.2.8 3.7.8 2.4 0 3.9-1.1 3.9-2.9 0-1.7-1.3-2.4-2.9-2.9-1.2-.4-1.9-.7-1.9-1.4 0-.7.6-1.1 1.7-1.1 1.1 0 2.3.4 3.1 1V7.5c-.8-.3-1.9-.5-3.3-.5z"/>
      </svg>
    ),
    "AWS": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF9900">
        <path d="M6.8 10c0 .3.03.5.09.7.06.18.14.37.26.58.04.06.06.13.06.18 0 .08-.05.16-.15.24l-.5.34a.38.38 0 01-.21.07c-.08 0-.16-.04-.24-.11a2.47 2.47 0 01-.29-.38 6.18 6.18 0 01-.25-.49C4.91 11.62 4.13 12 3.19 12c-.67 0-1.2-.19-1.6-.57-.39-.38-.59-.89-.59-1.53 0-.68.24-1.23.73-1.64.49-.42 1.13-.62 1.95-.62.27 0 .55.02.85.06.29.04.6.1.92.18v-.58c0-.61-.13-1.03-.38-1.28-.26-.25-.69-.37-1.3-.37-.28 0-.57.03-.86.1-.3.07-.58.16-.86.27a2.29 2.29 0 01-.28.1.49.49 0 01-.13.02c-.11 0-.17-.08-.17-.25v-.39c0-.13.02-.22.06-.28a.6.6 0 01.22-.17c.28-.14.61-.26 1-.36a4.84 4.84 0 011.25-.15c.95 0 1.64.22 2.09.65.44.43.66 1.08.66 1.96V10zm-3.24 1.21c.26 0 .53-.05.82-.14.29-.1.54-.27.76-.51.13-.15.22-.32.27-.51.05-.2.08-.42.08-.7v-.33a6.66 6.66 0 00-.74-.14 6.02 6.02 0 00-.75-.05c-.53 0-.93.1-1.19.32-.26.21-.39.52-.39.92 0 .37.1.65.3.84.19.2.47.3.84.3zm6.41.86c-.14 0-.24-.02-.3-.08-.06-.05-.12-.16-.17-.31L7.6 5.55a1.4 1.4 0 01-.07-.32c0-.13.06-.2.19-.2h.78c.15 0 .26.02.31.08.07.05.11.16.16.31l1.34 5.28 1.25-5.28c.04-.16.09-.26.15-.31a.55.55 0 01.32-.08h.64c.15 0 .26.02.32.08.06.05.12.16.15.31l1.26 5.35 1.38-5.35c.05-.16.1-.26.16-.31a.52.52 0 01.31-.08h.74c.13 0 .2.06.2.2 0 .04-.01.08-.02.13a1.14 1.14 0 01-.06.2l-1.92 6.17c-.05.16-.1.26-.17.31a.51.51 0 01-.3.08h-.69c-.15 0-.26-.02-.32-.08-.06-.06-.12-.16-.15-.32l-1.24-5.15-1.23 5.14c-.04.16-.09.26-.15.32-.07.06-.18.08-.32.08z"/>
      </svg>
    ),
    "AWS S3": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF9900">
        <path d="M12 3L4 7v10l8 4 8-4V7l-8-4zm0 2.2l5.5 2.8-5.5 2.8L6.5 8 12 5.2zM5 9.5l6 3v6l-6-3v-6zm8 9v-6l6-3v6l-6 3z"/>
      </svg>
    ),
    "OpenAI": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#A78BFA">
        <path d="M22.28 9.28a5.76 5.76 0 00-.49-4.73 5.83 5.83 0 00-6.27-2.8A5.76 5.76 0 0011.2 0a5.83 5.83 0 00-5.56 4.04 5.76 5.76 0 00-3.84 2.8 5.83 5.83 0 00.72 6.84 5.76 5.76 0 00.49 4.73 5.83 5.83 0 006.27 2.8A5.76 5.76 0 0012.8 24a5.83 5.83 0 005.57-4.04 5.76 5.76 0 003.83-2.8 5.83 5.83 0 00-.72-6.88zM12.8 22.4a4.32 4.32 0 01-2.77-1 .08.08 0 01.04-.01l4.6-2.66a.75.75 0 00.38-.65V12.5l1.94 1.12v5.38a4.34 4.34 0 01-4.19 3.4zM3.2 18.28a4.32 4.32 0 01-.52-2.9l.04.02 4.6 2.66a.75.75 0 00.75 0l5.62-3.25v2.24l-4.66 2.69a4.34 4.34 0 01-5.83-1.46zm-.84-9.56a4.32 4.32 0 012.25-1.9v5.47a.75.75 0 00.38.65l5.62 3.25-1.94 1.12-4.6-2.66a4.34 4.34 0 01-1.7-5.93zM19.6 13.5l-5.62-3.25 1.94-1.12 4.6 2.65a4.34 4.34 0 01-.67 7.83v-5.47a.75.75 0 00-.25-.64zm1.93-2.9l-.04-.02-4.6-2.66a.75.75 0 00-.75 0L10.52 11.2V8.96l4.66-2.69a4.34 4.34 0 016.35 4.33zM9.44 12.5l-1.94-1.12V5.99a4.34 4.34 0 017.12-3.33l-.04.02-4.6 2.66a.75.75 0 00-.38.65L9.44 12.5zm1.05-2.26l2.5-1.44 2.5 1.44v2.88l-2.5 1.44-2.5-1.44V10.24z"/>
      </svg>
    ),
  };
  return icons[name] || (
    <span className="text-xs font-bold" style={{ color }}>{name.slice(0, 2)}</span>
  );
};

/* ── Mini growth curve for impact card ── */
const MiniGrowthCurve = () => (
  <svg viewBox="0 0 300 80" className="w-full h-full" preserveAspectRatio="none" fill="none">
    <defs>
      <linearGradient id="mgc" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="mgf" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M0 72 C60 68,100 58,150 44 C200 30,240 20,300 8 L300 80 L0 80Z" fill="url(#mgf)"/>
    <path d="M0 72 C60 68,100 58,150 44 C200 30,240 20,300 8" stroke="url(#mgc)" strokeWidth="2"/>
  </svg>
);

const detailSubtitles = {
  "01": "What problem existed, why it mattered, and what was broken.",
  "02": "Technologies, features, constraints, performance & team requirements.",
  "03": "What exactly I did and the impact of my work.",
  "04": "Metrics, results and business outcomes.",
};

/* ── Project detail row ── */
function DetailRow({ number, title, content }) {
  return (
    <div className="project-detail-row flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6 py-5 sm:py-6 border-b border-[#F1F0FF] last:border-0">
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-shrink-0">
        <div className="flex flex-col items-center flex-shrink-0 w-5">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(167,139,250,0.18)", boxShadow: "0 0 12px 4px rgba(124,58,237,0.35)" }}
          >
            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
            </div>
          </div>
        </div>
        <span className="font-body text-[#7C3AED] text-sm font-semibold flex-shrink-0 w-7">{number}</span>
        <span className="detail-title-col font-body font-semibold text-[#0F172A] text-base lg:w-[180px]">{title}</span>
      </div>
      <div className="detail-divider hidden lg:block w-[1px] self-stretch bg-[#EDE9FE] flex-shrink-0" />
      <div className="flex-1 min-w-0 pl-8 lg:pl-0">
        <p className="font-body text-[#71717A] text-sm leading-relaxed mb-2">{detailSubtitles[number]}</p>
        <p className="font-body text-[#0F172A] text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(
    (p) => p.projectName.toLowerCase().replace(/\s+/g, "-") === id
  ) || projectsData[0];

  const heroImageOffset =
    project.projectName === "Glodobaara"
      ? "lg:ml-20"
      : project.projectName === "Homi AI"
        ? "lg:-mt-[60px] lg:ml-24"
        : "lg:-mt-[60px] lg:ml-[164px]";

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <div className="section-container max-w-6xl pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20">

        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-body text-[#71717A] hover:text-[#7C3AED] transition-colors duration-200 mb-6 sm:mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* ── HERO ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-10 mb-10 sm:mb-16">
          {/* Left: text */}
          <div className="w-full lg:w-[38%] xl:w-[26%] flex flex-col justify-center order-1">
            <h1
              className="font-heading font-medium text-[#0F172A] leading-tight mb-3"
              style={{ fontSize: "clamp(2rem, 8vw, 4.5rem)" }}
            >
              {project.projectName}
            </h1>
            <span className="inline-block px-3 py-1 rounded text-xs font-body font-medium text-[#7C3AED] border border-[#DDD6FE] bg-[#F5F3FF] mb-4 sm:mb-5 w-fit">
              {project.category}
            </span>
            <p className="font-body text-[#52525B] text-sm sm:text-base leading-relaxed mb-6 sm:mb-7 max-w-md lg:max-w-xs">
              {project.description}
            </p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 w-fit text-sm sm:text-base font-body font-medium text-[#7C3AED] transition-all duration-300 hover:opacity-70"
            >
              <span className="w-7 h-7 rounded-full border border-[#7C3AED] flex items-center justify-center flex-shrink-0">
                <ArrowUpRight className="w-4 h-4 text-[#7C3AED]" />
              </span>
              View Live
            </a>
          </div>

          {/* Right: hero image */}
          <div className={`w-full lg:w-[62%] xl:w-[68%] relative order-2 ${heroImageOffset}`}>
            {project.projectName !== "Homi AI" && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at ${project.glowPosition || "center"}, rgba(124,58,237,0.22) 0%, rgba(167,139,250,0.12) 45%, transparent 75%)`,
                  filter: "blur(28px)",
                  transform: "scale(1.1)",
                  zIndex: 0,
                }}
              />
            )}
            <img
              src={project.heroImage}
              alt={project.projectName}
              className={`block relative w-full mx-auto lg:mx-0 ${project.projectName === "Homi AI" ? "max-w-[92%] lg:max-w-[86%]" : "max-w-full"}`}
              style={{ zIndex: 1 }}
            />
          </div>
        </div>

        {/* ── DETAIL SECTIONS ── */}
        <div
          className="rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10"
          style={{ border: "1px solid #EDE9FE", background: "white", boxShadow: "0 2px 16px -4px rgba(124,58,237,0.07)" }}
        >
          <div className="relative">
            <div
              className="hidden sm:block absolute top-0 bottom-0 pointer-events-none"
              style={{ left: 8.5, width: 1, background: "linear-gradient(to bottom, transparent 0%, #A78BFA 6%, #A78BFA 94%, transparent 100%)", opacity: 0.5 }}
            />
            <DetailRow number="01" title="The Challenge" content={project.challenge} />
            <DetailRow number="02" title="Scope & Requirements" content={project.scope} />
            <DetailRow number="03" title="My Contributions" content={project.contributions} />
            <DetailRow number="04" title="Impact" content={project.impact} />
          </div>
        </div>

        {/* ── METRIC CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {/* My Role */}
          <div
            className="rounded-2xl p-5 sm:p-6 flex flex-col relative overflow-hidden min-h-[200px] sm:min-h-[220px]"
            style={{ border: "1px solid #EDE9FE", background: "white", boxShadow: "0 2px 16px -4px rgba(124,58,237,0.07)" }}
          >
            <p className="font-body text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-4">My Role</p>
            <div className="h-10 flex items-center mb-4">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="iconGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C4B5FD"/>
                    <stop offset="100%" stopColor="#7C3AED"/>
                  </linearGradient>
                  <filter id="iconShadow1"><feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#7C3AED" floodOpacity="0.35"/></filter>
                </defs>
                <circle cx="16" cy="11" r="5" fill="url(#iconGrad1)" filter="url(#iconShadow1)"/>
                <ellipse cx="16" cy="11" rx="3" ry="2" fill="white" opacity="0.25" transform="translate(0 -2)"/>
                <path d="M6 27c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="url(#iconGrad1)" strokeWidth="2.2" strokeLinecap="round" fill="none" filter="url(#iconShadow1)"/>
              </svg>
            </div>
            <p className="font-heading font-bold text-[#0F172A] text-xl leading-tight mb-2">{project.role}</p>
            <p className="font-body text-[#71717A] text-xs leading-relaxed">{project.roleDescription}</p>
            {/* Wave pattern — Card 1: gentle single wave rising on right */}
            <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none">
              <svg viewBox="0 0 400 80" className="w-full h-full" preserveAspectRatio="none" fill="none">
                <path d="M0 75 C100 72, 200 68, 280 52 C330 42, 370 38, 400 34 L400 80 L0 80 Z" fill="#EDE9FE" opacity="0.5"/>
                <path d="M0 80 C120 76, 230 72, 320 60 C360 53, 385 48, 400 45 L400 80 L0 80 Z" fill="#EDE9FE" opacity="0.3"/>
              </svg>
            </div>
          </div>

          {/* Impact */}
          <div
            className="rounded-2xl p-5 sm:p-6 flex flex-col relative overflow-hidden min-h-[200px] sm:min-h-[220px]"
            style={{ border: "1px solid #EDE9FE", background: "white", boxShadow: "0 2px 16px -4px rgba(124,58,237,0.07)" }}
          >
            <p className="font-body text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-4">Impact</p>
            <div className="h-10 flex items-center mb-4">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="iconGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A78BFA"/>
                    <stop offset="100%" stopColor="#6D28D9"/>
                  </linearGradient>
                  <filter id="iconShadow2"><feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#7C3AED" floodOpacity="0.35"/></filter>
                </defs>
                <polyline points="4,22 10,15 15,18 24,9" stroke="url(#iconGrad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#iconShadow2)"/>
                <polyline points="19,9 24,9 24,14" stroke="url(#iconGrad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#iconShadow2)"/>
                <circle cx="24" cy="9" r="2.5" fill="#C4B5FD" opacity="0.6"/>
              </svg>
            </div>
            <p className="font-heading font-bold text-[#0F172A] leading-none mb-2" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
              {project.impactMetric}
            </p>
            <p className="font-body text-[#71717A] text-xs leading-relaxed">{project.impactDescription}</p>
            {/* Wave pattern — Card 2: rising growth curve left to right */}
            <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none">
              <svg viewBox="0 0 400 80" className="w-full h-full" preserveAspectRatio="none" fill="none">
                <path d="M0 78 C50 76, 100 72, 160 62 C220 50, 280 35, 340 20 C365 13, 385 8, 400 5 L400 80 L0 80 Z" fill="#EDE9FE" opacity="0.55"/>
                <path d="M0 80 C60 78, 130 75, 200 66 C260 57, 320 44, 380 28 C390 24, 396 21, 400 19 L400 80 L0 80 Z" fill="#EDE9FE" opacity="0.3"/>
              </svg>
            </div>
          </div>

          {/* Contribution */}
          <div
            className="rounded-2xl p-5 sm:p-6 flex flex-col relative overflow-hidden min-h-[200px] sm:min-h-[220px] sm:col-span-2 lg:col-span-1"
            style={{ border: "1px solid #EDE9FE", background: "white", boxShadow: "0 2px 16px -4px rgba(124,58,237,0.07)" }}
          >
            <p className="font-body text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-4">Contribution</p>
            <div className="h-10 flex items-center mb-4">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="iconGrad3t" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C4B5FD"/>
                    <stop offset="100%" stopColor="#7C3AED"/>
                  </linearGradient>
                  <linearGradient id="iconGrad3s" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C3AED"/>
                    <stop offset="100%" stopColor="#4C1D95"/>
                  </linearGradient>
                  <filter id="iconShadow3"><feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#7C3AED" floodOpacity="0.4"/></filter>
                </defs>
                <rect x="7" y="15" width="18" height="13" rx="3" fill="url(#iconGrad3t)" filter="url(#iconShadow3)"/>
                <rect x="7" y="15" width="18" height="5" rx="3" fill="white" opacity="0.18"/>
                <path d="M11 15V11a5 5 0 0110 0v4" stroke="url(#iconGrad3s)" strokeWidth="2.5" strokeLinecap="round" fill="none" filter="url(#iconShadow3)"/>
                <circle cx="16" cy="21" r="2" fill="white" opacity="0.4"/>
                <rect x="15" y="22" width="2" height="3" rx="1" fill="white" opacity="0.35"/>
              </svg>
            </div>
            <p className="font-heading font-bold text-[#0F172A] text-xl leading-tight mb-2">{project.contributionSummary}</p>
            <p className="font-body text-[#71717A] text-xs leading-relaxed">{project.contributionDescription}</p>
            {/* Wave pattern — Card 3: broad layered waves with darker filled right corner */}
            <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
              <svg viewBox="0 0 400 96" className="w-full h-full" preserveAspectRatio="none" fill="none">
                {/* Back wave — lighter, broader */}
                <path d="M0 60 C80 48, 160 70, 240 50 C300 36, 350 30, 400 22 L400 96 L0 96 Z" fill="#EDE9FE" opacity="0.45"/>
                {/* Front wave — slightly darker, peaks on right */}
                <path d="M0 75 C60 65, 140 80, 220 65 C290 50, 350 44, 400 36 L400 96 L0 96 Z" fill="#DDD6FE" opacity="0.5"/>
                {/* Right corner accent — the distinctive darker filled blob */}
                <path d="M260 96 C290 70, 340 55, 400 48 L400 96 Z" fill="#C4B5FD" opacity="0.35"/>
              </svg>
            </div>
          </div>
        </div>

        {/* ── TECH STACK + KEY HIGHLIGHTS + ILLUSTRATION ── */}
        <div className="flex flex-col gap-5 mb-8 sm:mb-10">
          {/* Tech Stack — full width */}
          <div
            className="rounded-2xl p-4 sm:p-6"
            style={{ border: "1px solid #EDE9FE", background: "white", boxShadow: "0 2px 16px -4px rgba(124,58,237,0.07)" }}
          >
            <p className="font-body text-[#7C3AED] text-xs font-semibold tracking-widest uppercase mb-3">Tech Stack</p>
            <div className="w-6 h-[2px] bg-[#7C3AED] rounded-full mb-4 sm:mb-5" />
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-start">
              {project.techStack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2">
                  <div
                    className="flex items-center justify-center w-[72px] h-[80px] sm:w-[88px] sm:h-[100px] rounded-[14px] bg-white border border-[#EDE9FE]"
                    style={{ boxShadow: "0 4px 16px 0 rgba(124,58,237,0.10), 0 1px 4px rgba(124,58,237,0.06)" }}
                  >
                    <TechIcon3D name={tech.name} color={tech.color} />
                  </div>
                  <span className="font-body text-[#71717A] text-[10px] sm:text-xs text-center leading-tight max-w-[72px] sm:max-w-[88px]">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights + Illustration */}
          <div
            className="rounded-2xl p-4 sm:p-6 relative overflow-hidden"
            style={{ border: "1px solid #EDE9FE", background: "white", boxShadow: "0 2px 16px -4px rgba(124,58,237,0.07)" }}
          >
            <p className="font-body text-[#7C3AED] text-xs font-semibold tracking-widest uppercase mb-3">Key Highlights</p>
            <div className="w-6 h-[2px] bg-[#7C3AED] rounded-full mb-4 sm:mb-5" />

            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-4">
              <ul className="relative flex-1 z-10 pl-0.5 min-w-0">
                {/* Vertical connector line */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: "7px",
                    top: "12px",
                    bottom: "12px",
                    width: "1px",
                    background: "linear-gradient(to bottom, #EDE9FE, #F5F3FF)",
                  }}
                />
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-4 mb-6 last:mb-0 relative">
                    <span
                      className="flex-shrink-0 rounded-full z-10"
                      style={{ width: "9px", height: "9px", marginTop: "6px", flexShrink: 0, background: "#7C3AED", opacity: 0.7 }}
                    />
                    <span className="font-body text-[#71717A] text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* 3D Orb Illustration — hidden on small screens */}
              <div className="hidden lg:flex flex-shrink-0 items-center justify-center w-[160px]">
                <svg viewBox="0 0 160 200" className="w-full" fill="none">
                  <defs>
                    <radialGradient id="orbMain" cx="42%" cy="35%" r="58%">
                      <stop offset="0%" stopColor="#C4B5FD"/>
                      <stop offset="45%" stopColor="#8B5CF6"/>
                      <stop offset="100%" stopColor="#5B21B6"/>
                    </radialGradient>
                    <radialGradient id="orbSheen" cx="35%" cy="28%" r="40%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.55"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="platTop" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#DDD6FE"/>
                      <stop offset="100%" stopColor="#C4B5FD"/>
                    </radialGradient>
                    <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.18"/>
                      <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
                    </radialGradient>
                    <filter id="orbBlur"><feGaussianBlur stdDeviation="5"/></filter>
                    <filter id="orbGlow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#7C3AED" floodOpacity="0.35"/></filter>
                  </defs>

                  {/* Shadow under platform */}
                  <ellipse cx="80" cy="192" rx="55" ry="8" fill="url(#shadowGrad)" filter="url(#orbBlur)"/>

                  {/* Platform — 3 stacked discs */}
                  {/* Bottom disc */}
                  <ellipse cx="80" cy="178" rx="52" ry="10" fill="#DDD6FE" opacity="0.6"/>
                  <ellipse cx="80" cy="172" rx="52" ry="10" fill="#EDE9FE"/>
                  <ellipse cx="80" cy="172" rx="52" ry="10" fill="url(#platTop)" opacity="0.5"/>

                  {/* Middle disc */}
                  <ellipse cx="80" cy="162" rx="40" ry="8" fill="#DDD6FE" opacity="0.7"/>
                  <ellipse cx="80" cy="157" rx="40" ry="8" fill="#EDE9FE"/>
                  <ellipse cx="80" cy="157" rx="40" ry="8" fill="url(#platTop)" opacity="0.6"/>

                  {/* Top disc */}
                  <ellipse cx="80" cy="148" rx="27" ry="6" fill="#C4B5FD" opacity="0.8"/>
                  <ellipse cx="80" cy="144" rx="27" ry="6" fill="#DDD6FE"/>

                  {/* Orbit rings */}
                  <ellipse cx="80" cy="90" rx="68" ry="18" stroke="#A78BFA" strokeWidth="0.8" strokeOpacity="0.35" fill="none"/>
                  <ellipse cx="80" cy="90" rx="56" ry="14" stroke="#C4B5FD" strokeWidth="0.6" strokeOpacity="0.3" fill="none" transform="rotate(-15 80 90)"/>

                  {/* Orbit dots */}
                  <circle cx="148" cy="90" r="3" fill="#A78BFA" opacity="0.6"/>
                  <circle cx="12" cy="90" r="2" fill="#C4B5FD" opacity="0.4"/>
                  <circle cx="110" cy="76" r="2" fill="#DDD6FE" opacity="0.7"/>

                  {/* Main orb */}
                  <circle cx="80" cy="78" r="38" fill="url(#orbMain)" filter="url(#orbGlow)"/>
                  {/* Sheen highlight */}
                  <circle cx="80" cy="78" r="38" fill="url(#orbSheen)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6 px-5 sm:px-8 md:px-10 py-6 sm:py-0 sm:min-h-[120px] rounded-[20px] border border-[#EDE9FE] bg-white"
          style={{ boxShadow: "0 4px 24px -8px rgba(124,58,237,0.08)" }}
        >
          <div className="flex items-start sm:items-center gap-4 sm:gap-5 min-w-0">
            <div className="w-10 h-10 rounded-full bg-[#F5F3FF] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#7C3AED]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="font-heading font-medium text-[#0F172A] text-lg sm:text-xl leading-tight">Interested in building something impactful?</p>
              <p className="font-body text-[#71717A] text-sm mt-0.5">I'm always open to discussing new opportunities and ideas.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0F172A] text-white text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(15,23,42,0.35)] w-full sm:w-auto flex-shrink-0"
          >
            Let's Connect
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}