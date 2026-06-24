import React from "react";

/* ─── Illustrations ─── */

const BrainIllustration = () => (
  <svg viewBox="0 0 180 180" className="w-full h-full" fill="none">
    <defs>
      <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
      </radialGradient>
      <filter id="bf"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {/* Glow */}
    <circle cx="90" cy="90" r="75" fill="url(#brainGlow)" />
    {/* Orbit rings */}
    <circle cx="90" cy="90" r="60" stroke="#7C3AED" strokeWidth="0.6" strokeOpacity="0.3" fill="none" />
    <circle cx="90" cy="90" r="42" stroke="#A78BFA" strokeWidth="0.6" strokeOpacity="0.4" fill="none" />
    {/* Nodes */}
    {[[90,38],[132,62],[142,90],[132,118],[90,142],[48,118],[38,90],[48,62],[108,78],[72,78],[108,102],[72,102]].map(([cx,cy],i)=>(
      <circle key={i} cx={cx} cy={cy} r="3.5" fill="#A78BFA" filter="url(#bf)" />
    ))}
    {/* Connections */}
    {[[90,38,132,62],[132,62,142,90],[142,90,132,118],[132,118,90,142],[90,142,48,118],[48,118,38,90],[38,90,48,62],[48,62,90,38],[90,38,108,78],[90,38,72,78],[132,62,108,78],[48,62,72,78],[108,78,108,102],[72,78,72,102],[108,102,132,118],[72,102,48,118],[72,78,108,78],[72,102,108,102]].map(([x1,y1,x2,y2],i)=>(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7C3AED" strokeWidth="0.7" strokeOpacity="0.45" />
    ))}
    {/* Outer orbit dots */}
    {[0,72,144,216,288].map((deg,i)=>{
      const r=74, rad=(deg*Math.PI)/180;
      return <circle key={i} cx={90+r*Math.cos(rad)} cy={90+r*Math.sin(rad)} r="4" fill="none" stroke="#6D28D9" strokeWidth="1" strokeOpacity="0.5" />;
    })}
  </svg>
);

const GrowthCurve = () => (
  <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none" fill="none">
    <defs>
      <linearGradient id="gc" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.05" />
        <stop offset="55%" stopColor="#7C3AED" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#A78BFA" />
      </linearGradient>
      <linearGradient id="gf" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
      </linearGradient>
      <filter id="gg"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {[60,120,180,240].map(x=>(
      <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="#fff" strokeWidth="0.4" strokeOpacity="0.05"/>
    ))}
    <path d="M0 92 C50 88,90 80,130 67 C170 54,205 44,245 30 C268 22,285 15,300 10 L300 100 L0 100Z" fill="url(#gf)"/>
    <path d="M0 92 C50 88,90 80,130 67 C170 54,205 44,245 30 C268 22,285 15,300 10" stroke="url(#gc)" strokeWidth="2.5" filter="url(#gg)"/>
    <circle cx="300" cy="10" r="5" fill="#A78BFA" filter="url(#gg)">
      <animate attributeName="r" values="4;6.5;4" dur="2.5s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

const LightningIllustration = () => (
  <svg viewBox="0 0 160 160" className="w-full h-full" fill="none">
    <defs>
      <radialGradient id="lr" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.35"/>
        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
      </radialGradient>
      <filter id="lf"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {/* Speedometer arc */}
    <circle cx="112" cy="56" r="34" stroke="#DDD6FE" strokeWidth="1.5" fill="none" strokeOpacity="0.55"/>
    <path d="M112 22 A34 34 0 0 1 146 56" stroke="#A78BFA" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <line x1="112" y1="28" x2="112" y2="56" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="112" y1="56" x2="132" y2="65" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Lightning bolt */}
    <polygon points="62,12 36,75 62,75 44,148 98,60 70,60 90,12" fill="#A78BFA" opacity="0.9" filter="url(#lf)"/>
    <ellipse cx="65" cy="120" rx="30" ry="10" fill="url(#lr)"/>
  </svg>
);

const RocketIllustration = () => (
  <svg viewBox="0 0 160 170" className="w-full h-full" fill="none">
    <defs>
      <radialGradient id="rg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="rb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C4B5FD"/>
        <stop offset="100%" stopColor="#7C3AED"/>
      </linearGradient>
      <filter id="rf"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {/* Glow base */}
    <ellipse cx="80" cy="155" rx="42" ry="12" fill="url(#rg)"/>
    {/* Exhaust trails */}
    <path d="M65 130 C61 140,57 150,54 162" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
    <path d="M80 136 C80 148,80 156,80 166" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.65"/>
    <path d="M95 130 C99 140,103 150,106 162" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
    {/* Body */}
    <ellipse cx="80" cy="90" rx="16" ry="36" fill="url(#rb)" filter="url(#rf)"/>
    {/* Nose cone */}
    <path d="M80 40 L64 72 L96 72 Z" fill="#8B5CF6"/>
    {/* Fins */}
    <path d="M64 116 L50 136 L64 126 Z" fill="#7C3AED" opacity="0.8"/>
    <path d="M96 116 L110 136 L96 126 Z" fill="#7C3AED" opacity="0.8"/>
    {/* Window */}
    <circle cx="80" cy="88" r="9" fill="#EDE9FE" opacity="0.95"/>
    <circle cx="80" cy="88" r="5.5" fill="#7C3AED" opacity="0.55"/>
  </svg>
);

const StackIllustration = () => (
  <svg viewBox="0 0 160 145" className="w-full h-full" fill="none">
    <defs>
      <linearGradient id="s1t" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#EDE9FE"/><stop offset="100%" stopColor="#C4B5FD"/></linearGradient>
      <linearGradient id="s2t" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#DDD6FE"/><stop offset="100%" stopColor="#A78BFA" stopOpacity="0.7"/></linearGradient>
      <linearGradient id="s3t" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.8"/><stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5"/></linearGradient>
    </defs>
    {/* Layer 3 (bottom) */}
    <polygon points="80,100 126,76 80,52 34,76" fill="url(#s1t)" stroke="#C4B5FD" strokeWidth="1"/>
    <polygon points="34,76 80,100 80,120 34,96" fill="#C4B5FD" stroke="#A78BFA" strokeWidth="0.8" opacity="0.65"/>
    <polygon points="80,100 126,76 126,96 80,120" fill="#A78BFA" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.55"/>
    {/* Layer 2 (middle) */}
    <polygon points="80,70 118,50 80,30 42,50" fill="url(#s2t)" stroke="#C4B5FD" strokeWidth="1" opacity="0.9"/>
    <polygon points="42,50 80,70 80,88 42,68" fill="#C4B5FD" stroke="#A78BFA" strokeWidth="0.8" opacity="0.5"/>
    <polygon points="80,70 118,50 118,68 80,88" fill="#A78BFA" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.4"/>
    {/* Layer 1 (top) */}
    <polygon points="80,42 108,28 80,14 52,28" fill="url(#s3t)" stroke="#DDD6FE" strokeWidth="0.8" opacity="0.85"/>
    <polygon points="52,28 80,42 80,56 52,42" fill="#DDD6FE" stroke="#C4B5FD" strokeWidth="0.6" opacity="0.45"/>
    <polygon points="80,42 108,28 108,42 80,56" fill="#C4B5FD" stroke="#A78BFA" strokeWidth="0.6" opacity="0.38"/>
  </svg>
);

const CubeStackIllustration = () => (
  <svg viewBox="0 0 320 210" className="w-full h-full" fill="none">
    <defs>
      <linearGradient id="ct" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.85"/>
        <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.95"/>
      </linearGradient>
      <linearGradient id="cl" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5B21B6" stopOpacity="0.9"/>
        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.7"/>
      </linearGradient>
      <linearGradient id="cr" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.6"/>
      </linearGradient>
      <radialGradient id="cplat" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5"/>
        <stop offset="100%" stopColor="#4C1D95" stopOpacity="0"/>
      </radialGradient>
      <filter id="cglow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {/* Platform glow */}
    <ellipse cx="160" cy="188" rx="125" ry="20" fill="url(#cplat)"/>
    {/* Platform */}
    <polygon points="160,172 265,136 160,100 55,136" fill="#1A0633" stroke="#7C3AED" strokeWidth="0.8" strokeOpacity="0.6"/>
    <polygon points="55,136 160,172 160,192 55,156" fill="#130425" stroke="#6D28D9" strokeWidth="0.6"/>
    <polygon points="160,172 265,136 265,156 160,192" fill="#0F0320" stroke="#5B21B6" strokeWidth="0.6"/>
    {/* Main cube */}
    <polygon points="160,60 220,94 160,128 100,94" fill="url(#ct)" filter="url(#cglow)" stroke="#C4B5FD" strokeWidth="0.8" strokeOpacity="0.55"/>
    <polygon points="100,94 160,128 160,172 100,138" fill="url(#cl)" stroke="#A78BFA" strokeWidth="0.8" strokeOpacity="0.5"/>
    <polygon points="160,128 220,94 220,138 160,172" fill="url(#cr)" stroke="#8B5CF6" strokeWidth="0.8" strokeOpacity="0.5"/>
    {/* Inner grid lines on top face */}
    <line x1="160" y1="60" x2="160" y2="128" stroke="#C4B5FD" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.4"/>
    <line x1="100" y1="94" x2="220" y2="94" stroke="#C4B5FD" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.4"/>
    {/* Small cube left */}
    <polygon points="92,55 118,70 92,85 66,70" fill="#A78BFA" opacity="0.72" stroke="#C4B5FD" strokeWidth="0.6"/>
    <polygon points="66,70 92,85 92,105 66,90" fill="#7C3AED" opacity="0.55" stroke="#A78BFA" strokeWidth="0.5"/>
    <polygon points="92,85 118,70 118,90 92,105" fill="#6D28D9" opacity="0.5" stroke="#8B5CF6" strokeWidth="0.5"/>
    {/* Small cube right */}
    <polygon points="228,50 252,64 228,78 204,64" fill="#A78BFA" opacity="0.68" stroke="#C4B5FD" strokeWidth="0.6"/>
    <polygon points="204,64 228,78 228,96 204,82" fill="#7C3AED" opacity="0.5" stroke="#A78BFA" strokeWidth="0.5"/>
    <polygon points="228,78 252,64 252,82 228,96" fill="#6D28D9" opacity="0.45" stroke="#8B5CF6" strokeWidth="0.5"/>
    {/* Floating screens */}
    <rect x="42" y="24" width="36" height="24" rx="3" fill="#2A1052" stroke="#7C3AED" strokeWidth="0.8" strokeOpacity="0.65"/>
    <line x1="47" y1="32" x2="73" y2="32" stroke="#A78BFA" strokeWidth="1" strokeOpacity="0.5"/>
    <line x1="47" y1="38" x2="67" y2="38" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.4"/>
    <line x1="47" y1="44" x2="71" y2="44" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.35"/>
    <line x1="78" y1="36" x2="92" y2="55" stroke="#7C3AED" strokeWidth="0.6" strokeDasharray="3 3" strokeOpacity="0.45"/>
    <rect x="244" y="18" width="42" height="28" rx="3" fill="#2A1052" stroke="#7C3AED" strokeWidth="0.8" strokeOpacity="0.65"/>
    <line x1="249" y1="27" x2="281" y2="27" stroke="#A78BFA" strokeWidth="1" strokeOpacity="0.5"/>
    <line x1="249" y1="33" x2="274" y2="33" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.4"/>
    <line x1="249" y1="39" x2="278" y2="39" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.35"/>
    <line x1="244" y1="32" x2="228" y2="50" stroke="#7C3AED" strokeWidth="0.6" strokeDasharray="3 3" strokeOpacity="0.45"/>
  </svg>
);

const PersonNetworkIllustration = () => (
  <svg viewBox="0 0 200 170" className="w-full h-full" fill="none">
    {/* Rings */}
    <circle cx="100" cy="85" r="62" stroke="#DDD6FE" strokeWidth="1" fill="none" strokeOpacity="0.7"/>
    <circle cx="100" cy="85" r="42" stroke="#EDE9FE" strokeWidth="1" fill="none" strokeOpacity="0.8"/>
    {/* Center person */}
    <circle cx="100" cy="72" r="12" fill="#C4B5FD" opacity="0.9"/>
    <path d="M78 100 Q100 92 122 100" stroke="#A78BFA" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Orbit persons */}
    {[[100,23],[150,62],[135,125],[65,125],[50,62]].map(([cx,cy],i)=>(
      <g key={i}>
        <circle cx={cx} cy={cy-4} r="7" fill="#A78BFA" opacity="0.62"/>
        <path d={`M${cx-9} ${cy+9} Q${cx} ${cy+4} ${cx+9} ${cy+9}`} stroke="#A78BFA" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.62"/>
        <line x1="100" y1="85" x2={cx} y2={cy} stroke="#DDD6FE" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.7"/>
      </g>
    ))}
  </svg>
);

/* ── Tech logos ── */
const TechLogos = () => (
  <div className="flex flex-wrap gap-1.5 mt-2">
    {/* React */}
    <div className="w-8 h-8 rounded-xl bg-[#1A0A2E] border border-[#2D1B69] flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-4 h-4">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    </div>
    {/* Next.js */}
    <div className="w-8 h-8 rounded-xl bg-[#1A0A2E] border border-[#2D1B69] flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 9H11z"/>
      </svg>
    </div>
    {/* TypeScript */}
    <div className="w-8 h-8 rounded-xl bg-[#3178C6] flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
        <path d="M3 3h18v18H3V3zm10 10.5v-1h-4V14h1.5v5H12v-5h1.5v-0.5H13zm2.5-1.5h2.5v1H17V17h1l.5 2h-1.5L16.5 17H16v2h-1.5v-7H15z"/>
      </svg>
    </div>
    {/* Node.js */}
    <div className="w-8 h-8 rounded-xl bg-[#1A0A2E] border border-[#2D1B69] flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#339933">
        <path d="M12 1.85L3 6.57v10.86L12 22.15l9-4.72V6.57L12 1.85zm0 2.3l6.5 3.42-2.5 1.3-4-2.1-4 2.1-2.5-1.3L12 4.15zm-7 4.93l2.5 1.3v4.72l-2.5-1.3V9.08zm7 8.77l-4.5-2.36V11l4.5 2.36v4.49zm1 0v-4.49L17 11v4.49L13 17.85zm4.5-6.77l-2.5 1.3V7.65l2.5-1.3v4.73z"/>
      </svg>
    </div>
    {/* MongoDB */}
    <div className="w-8 h-8 rounded-xl bg-[#1A0A2E] border border-[#2D1B69] flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#47A248">
        <path d="M12.3 2C9.4 5.7 7.5 9.1 7.5 12.5a4.8 4.8 0 009.6 0C17.1 9 15 5.5 12.3 2zm-.3 16v4"/>
        <path d="M12 18v4" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
    {/* AWS */}
    <div className="w-8 h-8 rounded-xl bg-[#232F3E] flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF9900">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.247-.486c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.15 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
      </svg>
    </div>
  </div>
);

export default function MetricsBento() {
  return (
    <section id="metrics-bento" className="w-full bg-white py-5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-2" style={{ gridTemplateColumns: "1fr 1fr 1.35fr" }}>

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-2">

            {/* Project Leadership — white */}
            <div className="rounded-2xl bg-white border border-[#EEEBFF] p-4 flex flex-col" style={{ minHeight: "120px" }}>
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-2">
                  <div className="flex gap-1 mb-2.5">
                    <svg className="w-4 h-4 text-[#A78BFA]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <circle cx="9" cy="7" r="3"/><path d="M3 21v-2a6 6 0 016-6h2"/>
                      <circle cx="17" cy="7" r="3"/><path d="M21 21v-2a6 6 0 00-6-6h-1"/>
                    </svg>
                    <svg className="w-4 h-4 text-[#C4B5FD]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <circle cx="9" cy="7" r="3"/><path d="M3 21v-2a6 6 0 016-6h2"/>
                      <circle cx="17" cy="7" r="3"/><path d="M21 21v-2a6 6 0 00-6-6h-1"/>
                    </svg>
                  </div>
                  <h3 className="font-body font-bold text-[#0F172A] text-[15px] mb-1.5">Project Leadership</h3>
                  <div className="w-6 h-[2px] bg-[#7C3AED] rounded-full mb-2" />
                  <p className="font-body text-[#71717A] text-xs leading-relaxed">
                    Led cross-functional teams and delivered products ahead of schedule.
                  </p>
                </div>
                <div className="w-[72px] h-[72px] flex-shrink-0">
                  <PersonNetworkIllustration />
                </div>
              </div>
            </div>

            {/* AI Product Builder — dark */}
            <div className="rounded-2xl p-4 flex flex-col relative overflow-hidden"
              style={{ background: "linear-gradient(160deg,#0D0D18 0%,#110826 60%,#0D0D18 100%)", minHeight: "145px" }}>
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-[#A78BFA]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M9.5 2a4.5 4.5 0 014.376 3.428A3.5 3.5 0 0117 8.5c0 .17-.012.338-.036.503A4 4 0 0118 12a4 4 0 01-1.5 3.122V17a2 2 0 01-2 2H9a2 2 0 01-2-2v-2.122A4 4 0 016 12a4 4 0 011.036-2.694A3.502 3.502 0 017 8.5a3.5 3.5 0 013.124-3.472A4.493 4.493 0 019.5 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="9" x2="12" y2="15" strokeLinecap="round" strokeOpacity="0.6"/>
                  <line x1="9.5" y1="12" x2="14.5" y2="12" strokeLinecap="round" strokeOpacity="0.6"/>
                </svg>
              </div>
              <h3 className="font-body font-bold text-white text-[15px] mb-1.5">AI Product Builder</h3>
              <div className="w-6 h-[2px] bg-[#7C3AED] rounded-full mb-2" />
              <p className="font-body text-[#8B7BB5] text-xs leading-relaxed">
                Built Flutrr AI and led development of Homi AI from concept to launch.
              </p>
              <div className="absolute right-[-6px] bottom-[-6px] w-[105px] h-[105px] opacity-75">
                <BrainIllustration />
              </div>
            </div>

            {/* 20%+ User Growth — dark */}
            <div className="rounded-2xl p-4 flex flex-col relative overflow-hidden flex-1"
              style={{ background: "linear-gradient(160deg,#0D0D18 0%,#110826 60%,#0D0D18 100%)" }}>
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center mb-2.5">
                <svg className="w-3.5 h-3.5 text-[#A78BFA]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="3 17 8 12 13 15 21 7" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="17 7 21 7 21 11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-heading font-semibold text-[#A78BFA] leading-none mb-1" style={{ fontSize: "clamp(2rem,3.2vw,2.8rem)" }}>
                20%+
              </p>
              <p className="font-body text-white text-[13px] font-semibold mb-1.5">User Growth</p>
              <p className="font-body text-[#8B7BB5] text-xs leading-relaxed">
                Delivered through AI-powered products and scalable web applications.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none">
                <GrowthCurve />
              </div>
            </div>
          </div>

          {/* ── CENTER COLUMN ── */}
          <div className="flex flex-col gap-2">

            {/* 45% API Performance — white */}
            <div className="rounded-2xl bg-white border border-[#EEEBFF] p-4 flex flex-col" style={{ minHeight: "165px" }}>
              <div className="flex justify-between items-start mb-2">
                <div className="w-8 h-8 rounded-xl bg-[#F0EEFF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#7C3AED]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div className="w-[100px] h-[88px] -mt-2 -mr-2">
                  <LightningIllustration />
                </div>
              </div>
              <p className="font-heading font-semibold text-[#7C3AED] leading-none mb-1" style={{ fontSize: "clamp(2rem,3.2vw,2.6rem)" }}>
                45%
              </p>
              <p className="font-body text-[#0F172A] text-[13px] font-bold mb-1">API Performance Improvement</p>
              <div className="w-6 h-[2px] bg-[#7C3AED] rounded-full my-2" />
              <p className="font-body text-[#71717A] text-xs leading-relaxed">
                Optimized frontend-backend communication and response times.
              </p>
            </div>

            {/* 5+ Production Apps — white */}
            <div className="rounded-2xl bg-white border border-[#EEEBFF] p-4 flex flex-col" style={{ minHeight: "130px" }}>
              <div className="flex justify-between items-start mb-2">
                <div className="w-8 h-8 rounded-xl bg-[#F0EEFF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2C8.5 2 5.5 5 5.5 8.5c0 2.5 1.5 4.7 3.5 5.8V17h2v3l3-3v-2.7c2-1.1 3.5-3.3 3.5-5.8C17.5 5 14.5 2 12 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="w-[95px] h-[88px] -mt-2 -mr-2">
                  <RocketIllustration />
                </div>
              </div>
              <p className="font-heading font-semibold text-[#0F172A] leading-none mb-1" style={{ fontSize: "clamp(2rem,3.2vw,2.6rem)" }}>
                5+
              </p>
              <p className="font-body text-[#0F172A] text-[13px] font-bold mb-1">Production Applications</p>
              <div className="w-6 h-[2px] bg-[#7C3AED] rounded-full my-2" />
              <p className="font-body text-[#71717A] text-xs leading-relaxed">
                Built and launched across Web, Mobile, AI, and Analytics platforms.
              </p>
            </div>

            {/* Scalable Systems — white */}
            <div className="rounded-2xl bg-white border border-[#EEEBFF] p-4 flex flex-col" style={{ minHeight: "105px" }}>
              <div className="flex justify-between items-start mb-2">
                <div className="w-8 h-8 rounded-xl bg-[#F0EEFF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="22" x2="12" y2="15.5" strokeLinecap="round"/>
                    <line x1="22" y1="8.5" x2="12" y2="15.5" strokeLinecap="round"/>
                    <line x1="2" y1="8.5" x2="12" y2="15.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="w-[88px] h-[72px] -mt-1 -mr-1">
                  <StackIllustration />
                </div>
              </div>
              <p className="font-body text-[#0F172A] text-[13px] font-bold mb-1">Scalable Systems</p>
              <div className="w-6 h-[2px] bg-[#7C3AED] rounded-full my-1.5" />
              <p className="font-body text-[#71717A] text-xs leading-relaxed">
                Modern architectures focused on performance, maintainability, and growth.
              </p>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-2">

            {/* Full Stack + AI — dark, tall */}
            <div className="rounded-2xl p-5 flex flex-col relative overflow-hidden flex-1"
              style={{ background: "linear-gradient(160deg,#0D0D18 0%,#110826 55%,#0A0614 100%)", minHeight: "290px" }}>
              <div>
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-[#A78BFA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="14" y1="4" x2="10" y2="20" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="font-heading font-bold text-[#7C3AED] leading-tight mb-2" style={{ fontSize: "clamp(1.4rem,2vw,1.85rem)" }}>
                  Full Stack + AI
                </p>
                <div className="w-6 h-[2px] bg-[#7C3AED] rounded-full mb-3" />
                <p className="font-body text-[#8B7BB5] text-xs leading-relaxed max-w-[220px]">
                  End-to-end development expertise powered by AI to build intelligent, scalable, and future-ready solutions.
                </p>
              </div>
              <div className="flex-1 flex items-end justify-center mt-3">
                <div className="w-full" style={{ minHeight: "170px" }}>
                  <CubeStackIllustration />
                </div>
              </div>
            </div>

            {/* Tech Stack — white */}
            <div className="rounded-2xl p-4 flex flex-col bg-white border border-[#EEEBFF]">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#F0EEFF] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" rx="1.5"/>
                    <rect x="14" y="3" width="7" height="7" rx="1.5"/>
                    <rect x="3" y="14" width="7" height="7" rx="1.5"/>
                    <rect x="14" y="14" width="7" height="7" rx="1.5"/>
                  </svg>
                </div>
                <h3 className="font-body font-bold text-[#0F172A] text-[13px]">Tech Stack</h3>
              </div>
              <p className="font-body text-[#71717A] text-xs mb-0.5">React.js • Next.js • TypeScript</p>
              <p className="font-body text-[#71717A] text-xs">Node.js • MongoDB • AWS</p>
              <TechLogos />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}