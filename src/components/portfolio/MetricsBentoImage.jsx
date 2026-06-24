import React, { useEffect, useState } from "react";
import { TrendingUp, Zap, Rocket, Code2 } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/useScrollReveal";

const DOUBLE_S_PATH =
  "M 16 182 C 48 182, 58 152, 88 146 C 118 140, 132 172, 162 164 C 192 156, 206 114, 238 106 C 270 98, 284 136, 314 126 C 344 116, 358 68, 384 30";

function useCountUp(end, active, { duration = 1400, decimals = 0, delay = 0 } = {}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }

    let frame = 0;
    let start = 0;
    let timeoutId;

    const animate = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Number((eased * end).toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    timeoutId = window.setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(frame);
    };
  }, [active, end, duration, decimals, delay]);

  return value;
}

function IconBadge({ children, dark = false, iconClass = "" }) {
  return (
    <div
      className={`metrics-icon-pop metrics-icon-badge w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
        dark ? "bg-white/10 border border-white/10" : "bg-[#F5F3FF] border border-[#EDE9FE]"
      }`}
    >
      <span className={iconClass}>{children}</span>
    </div>
  );
}

function GrowthChart() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[58%] pointer-events-none overflow-hidden rounded-b-3xl">
      <div
        className="metrics-dark-glow absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-24 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.35) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="growthLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#C4B5FD" />
          </linearGradient>
          <linearGradient id="growthArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
          <filter id="growthGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={`v-${i}`}
            x1={40 + i * 64}
            y1="24"
            x2={40 + i * 64}
            y2="200"
            stroke="white"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={`h-${i}`}
            x1="24"
            y1={60 + i * 44}
            x2="376"
            y2={60 + i * 44}
            stroke="white"
            strokeOpacity="0.05"
            strokeWidth="1"
          />
        ))}
        <path
          d={`${DOUBLE_S_PATH} L 384 200 L 16 200 Z`}
          fill="url(#growthArea)"
          className="metrics-curve-area"
          style={{ opacity: 0 }}
        />
        <path
          d={DOUBLE_S_PATH}
          pathLength="1"
          stroke="url(#growthLine)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="metrics-curve-line"
          style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
          filter="url(#growthGlow)"
        />
        <circle className="metrics-curve-ring" cx="384" cy="30" fill="none" stroke="#C4B5FD" strokeWidth="1.5" />
        <circle className="metrics-curve-dot" cx="384" cy="30" r="5" fill="#C4B5FD" filter="url(#growthGlow)" />
        <circle cx="384" cy="30" r="2.5" fill="white" />
      </svg>
    </div>
  );
}

function IsometricCube() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[52%] pointer-events-none overflow-hidden rounded-b-3xl">
      <svg viewBox="0 0 320 200" className="w-full h-full" preserveAspectRatio="xMidYMax meet" fill="none">
        <defs>
          <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <filter id="cubeGlow">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#7C3AED" floodOpacity="0.35" />
          </filter>
        </defs>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={`grid-${i}`}
            x1={24 + i * 42}
            y1="120"
            x2={84 + i * 42}
            y2="185"
            stroke="#DDD6FE"
            strokeOpacity="0.55"
            strokeWidth="1"
          />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={`grid-h-${i}`}
            x1="24"
            y1={120 + i * 22}
            x2="320"
            y2={120 + i * 22}
            stroke="#DDD6FE"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
        ))}
        <g className="metrics-cube-wire">
          <polygon
            points="72,58 160,18 248,58 160,98"
            stroke="#C4B5FD"
            strokeWidth="1.2"
            strokeOpacity="0.55"
            fill="none"
          />
          <polygon
            points="72,58 72,138 160,178 160,98"
            stroke="#C4B5FD"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            fill="none"
          />
          <polygon
            points="248,58 248,138 160,178 160,98"
            stroke="#C4B5FD"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            fill="none"
          />
        </g>
        <g className="metrics-cube-body" filter="url(#cubeGlow)">
          <polygon points="160,42 228,82 160,122 92,82" fill="url(#cubeTop)" />
          <polygon points="92,82 160,122 160,178 92,138" fill="url(#cubeLeft)" opacity="0.92" />
          <polygon points="160,122 228,82 228,138 160,178" fill="url(#cubeRight)" opacity="0.88" />
        </g>
      </svg>
    </div>
  );
}

function StatCard({
  icon,
  value,
  title,
  subtitle,
  dark = false,
  chart,
  tall = false,
  compactValue = false,
  animate = false,
  countUp,
  iconClass = "",
  delay = 0,
}) {
  const numeric = countUp?.end;
  const counted = useCountUp(numeric ?? 0, animate && numeric != null, {
    duration: 1400,
    decimals: countUp?.decimals ?? 0,
    delay,
  });

  const displayValue =
    numeric != null ? `${counted}${countUp.suffix ?? ""}` : value;

  return (
    <div
      className={`metrics-stat-card relative flex flex-col h-full overflow-hidden rounded-3xl p-5 sm:p-6 bento-shine ${
        tall ? "min-h-[220px] md:min-h-[300px]" : "min-h-[168px]"
      } ${dark ? "metrics-stat-dark" : ""} ${
        dark
          ? "border border-[#2E1064]/60 text-white"
          : "bg-white border border-[#EDE9FE] shadow-[0_4px_24px_-8px_rgba(124,58,237,0.08)]"
      }`}
      style={
        dark
          ? {
              background:
                "linear-gradient(145deg, #1a0f2e 0%, #12081f 45%, #0c0616 100%)",
              boxShadow: "0 8px 32px -8px rgba(76,29,149,0.45)",
            }
          : undefined
      }
    >
      <IconBadge dark={dark} iconClass={iconClass}>
        {icon}
      </IconBadge>
      <div className={`relative z-10 mt-4 ${chart ? "" : "flex-1"}`}>
        <p
          className={`metrics-value-glow font-heading font-semibold leading-tight mb-2 ${
            compactValue ? "text-xl sm:text-2xl" : ""
          }`}
          style={
            compactValue
              ? { color: dark ? "#C4B5FD" : "#7C3AED" }
              : {
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  color: dark ? "#C4B5FD" : "#7C3AED",
                }
          }
        >
          {displayValue}
        </p>
        <p className={`font-body font-semibold text-sm sm:text-base ${dark ? "text-white" : "text-[#0F172A]"}`}>
          {title}
        </p>
        <p className={`font-body text-xs sm:text-sm mt-0.5 ${dark ? "text-white/50" : "text-[#71717A]"}`}>
          {subtitle}
        </p>
      </div>
      {chart}
    </div>
  );
}

export default function MetricsBentoImage() {
  const outerRef = useScrollReveal({ threshold: 0.08 });
  const gridRef = useStaggerReveal("metrics-card", { threshold: 0.12 });
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setGridVisible(true);
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [gridRef]);

  return (
    <section
      id="metrics-bento"
      className="w-full bg-white pt-10 md:pt-16 pb-0 flex justify-center px-4 sm:px-6 md:px-8"
    >
      <div
        ref={outerRef}
        className="sr sr-scale w-full max-w-4xl"
        style={{
          transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4"
        >
          <div className="metrics-card sm:row-span-2 md:row-span-2">
            <StatCard
              dark
              tall
              animate={gridVisible}
              delay={80}
              countUp={{ end: 20, suffix: "%" }}
              icon={<TrendingUp className="w-5 h-5 text-[#A78BFA]" />}
              value="20%"
              title="User Growth"
              subtitle="Delivered"
              chart={<GrowthChart />}
            />
          </div>

          <div className="metrics-card md:col-start-2 md:row-start-1">
            <StatCard
              animate={gridVisible}
              delay={200}
              countUp={{ end: 45, suffix: "%" }}
              iconClass="metrics-icon-zap"
              icon={<Zap className="w-5 h-5 text-[#7C3AED]" />}
              value="45%"
              title="API Performance"
              subtitle="Improvement"
            />
          </div>

          <div className="metrics-card md:col-start-2 md:row-start-2">
            <StatCard
              animate={gridVisible}
              delay={320}
              countUp={{ end: 5, suffix: "+" }}
              iconClass="metrics-icon-rocket"
              icon={<Rocket className="w-5 h-5 text-[#7C3AED]" />}
              value="5+"
              title="Production"
              subtitle="Applications Built"
            />
          </div>

          <div className="metrics-card sm:col-span-2 md:col-span-1 md:col-start-3 md:row-start-1 md:row-span-2">
            <StatCard
              tall
              compactValue
              animate={gridVisible}
              delay={440}
              icon={<Code2 className="w-5 h-5 text-[#7C3AED]" />}
              value="Full Stack + AI"
              title="Modern Development"
              subtitle="Expertise"
              chart={<IsometricCube />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
