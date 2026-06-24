import React, { useEffect, useState } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const HERO_TYPEWRITER_WORDS = [
  "AI Powered",
  "scalable",
  "end to end",
  "impactful",
  "innovative",
  "user focused",
];

function HeroTypewriter({ words, active = true }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!active) return;

    const currentWord = words[wordIndex];
    const typingSpeed = 85;
    const deletingSpeed = 130;
    const pauseMs = 1600;

    if (!isDeleting && text === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(pause);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const tick = setTimeout(() => {
      setText(
        isDeleting
          ? currentWord.slice(0, text.length - 1)
          : currentWord.slice(0, text.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(tick);
  }, [active, text, isDeleting, wordIndex, words]);

  return (
    <span className="hero-typewriter heading-accent" aria-live="polite">
      <span className="hero-typewriter-text">{text}</span>
    </span>
  );
}

const PORTRAIT_URL =
  "https://media.base44.com/images/public/user_6a2800d7ee8a93a3f1a9a4b0/0fc5fa449_IMG_9793JPG__1_-removebg-preview1.png";

const linkedinIcon = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const githubIcon = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 0 1 3.004-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
const emailIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 6L2 7" />
  </svg>
);

const socialLinks = [
  {
    label: "LinkedIn",
    icon: linkedinIcon,
    href: "https://www.linkedin.com/in/shreyankadutta/",
  },
  {
    label: "GitHub",
    icon: githubIcon,
    href: "https://github.com/Shreyanka20",
  },
  {
    label: "Email",
    icon: emailIcon,
    href: "mailto:shreyankadutta1209@gmail.com",
  },
];

export default function HeroSection() {
  const contentRef = useScrollReveal({ threshold: 0.15, rootMargin: "0px" });
  const portraitRef = useScrollReveal({ threshold: 0.1, rootMargin: "0px" });

  return (
    <section id="hero" className="relative w-full min-h-screen bg-white overflow-hidden pt-16">
      <div className="hero-blob absolute top-20 left-10 w-[500px] h-[500px] rounded-full bg-[#F5F3FF] opacity-60 blur-3xl pointer-events-none" />
      <div className="hero-blob hero-blob-2 absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EDE9FE] opacity-40 blur-3xl pointer-events-none" />

      <div className="relative section-container flex flex-col lg:flex-row items-center min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)]">
        <div
          ref={contentRef}
          className="hero-content w-full lg:w-[58%] flex flex-col justify-center py-12 sm:py-16 lg:py-0 z-10"
        >
          <p className="hero-eyebrow font-body text-[#7C3AED] text-sm font-medium tracking-widest uppercase mb-3">
            Hi, I&apos;m Shreyanka
          </p>

          <h1
            className="font-heading font-medium text-[#0F172A] leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
          >
            <span className="hero-line hero-line-1">
              <span>
                I build <HeroTypewriter words={HERO_TYPEWRITER_WORDS} />
              </span>
            </span>
            <span className="hero-line hero-line-2">
              <span>products that solve</span>
            </span>
            <span className="hero-line hero-line-3">
              <span className="heading-accent">real problems.</span>
            </span>
          </h1>

          <div className="hero-line-bar h-[3px] bg-[#7C3AED] rounded-full mb-8" />

          <p className="hero-desc font-body text-[#52525B] text-base leading-relaxed max-w-md mb-10">
            Software Engineer specializing in scalable web applications, AI
            solutions, and distributed systems. 2+ years building end-to-end
            products across web, mobile, and AI.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 mb-8 sm:mb-10">
            <a
              href="#projects"
              className="hero-cta hero-cta-1 inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#7C3AED] text-white text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(124,58,237,0.35)]"
            >
              View My Work
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://drive.google.com/file/d/1u3vFQjZSAOt0cjF4TyGf1tOfyCLMjJZh/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="hero-cta hero-cta-2 inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full border border-[#0F172A] text-[#0F172A] text-sm font-body font-semibold transition-all duration-300 hover:bg-[#F5F3FF] hover:border-[#7C3AED] hover:text-[#7C3AED]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-2 pb-4">
            <span className="hero-connect-label font-body text-[#52525B] text-xs tracking-wide mr-2">
              Let&apos;s connect
            </span>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                className="hero-social-link w-9 h-9 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#52525B] transition-all duration-300 hover:border-[#7C3AED] hover:text-[#7C3AED] hover:bg-[#F5F3FF] hover:-translate-y-0.5"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div
          ref={portraitRef}
          className="hero-portrait-wrap hidden lg:flex w-[42%] items-end justify-center relative self-end"
        >
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "8%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "520px",
              height: "520px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(233,213,255,0.55) 0%, rgba(245,243,255,0.25) 50%, transparent 75%)",
              filter: "blur(32px)",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "18%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(196,167,255,0.45) 0%, rgba(221,214,254,0.2) 55%, transparent 80%)",
              filter: "blur(18px)",
            }}
          />
          <img
            src={PORTRAIT_URL}
            alt="Shreyanka Dutta — Software Engineer"
            className="hero-portrait-img relative z-10 w-full max-w-[440px] object-contain object-bottom"
            style={{
              maskImage: "linear-gradient(to bottom, black 60%, transparent 98%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 98%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
