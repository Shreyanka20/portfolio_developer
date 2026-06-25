import React from "react";
import { Rocket, Code2, Users, BookOpen, Star } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/useScrollReveal";

const pillars = [
  { icon: <Rocket className="w-5 h-5 text-[#7C3AED]" />, title: "Impact Driven", desc: "I focus on building solutions that create real, measurable value." },
  { icon: <Code2 className="w-5 h-5 text-[#7C3AED]" />, title: "Clean & Scalable", desc: "I write maintainable code with clean architecture that scales effortlessly." },
  { icon: <Users className="w-5 h-5 text-[#7C3AED]" />, title: "Collaborative", desc: "I thrive in teams and believe the best ideas are built together." },
  { icon: <BookOpen className="w-5 h-5 text-[#7C3AED]" />, title: "Always Learning", desc: "I stay curious, evolving every day across design, engineering, and AI." },
];

export default function AboutSection() {
  const titleRef = useScrollReveal();
  const bioRef = useScrollReveal();
  const pillarsRef = useStaggerReveal("pillar-card");

  return (
    <section id="about" className="w-full bg-white py-16 md:py-24">
      <div className="section-container">

        {/* Header */}
        <div ref={titleRef} className="sr mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-body text-[#7C3AED] text-sm font-medium tracking-widest">05</span>
            <div className="w-8 h-[1px] bg-[#7C3AED]" />
          </div>
          <h2
            className="font-heading font-medium text-[#0F172A] leading-none mb-4"
            style={{ fontSize: "clamp(3.5rem, 5.5vw, 5.5rem)" }}
          >
            About Me{" "}
            <span className="heading-accent" style={{ fontSize: "0.55em" }}>✦</span>
          </h2>
          <div className="line-expand w-8 h-[3px] bg-[#7C3AED] rounded-full" />
        </div>

        {/* Bio card */}
        <div
          ref={bioRef}
          className="sr sr-d1 sr-bento bento-shine bento-float col-span-4 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-10 md:mb-14 bento-hover"
          style={{
            background: "linear-gradient(135deg, #FAFAFE 0%, #F5F3FF 100%)",
            border: "1px solid #EDE9FE",
          }}
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-[#EDE9FE]">
            <Star className="w-6 h-6 text-[#7C3AED]" />
          </div>
          <p className="text-stagger text-stagger-1 font-body text-[#0F172A] text-lg leading-relaxed flex-1">
            Some of the best products begin as undefined problems. That's where I do my best work.
            I enjoy working in fast-moving environments where ownership matters more than job titles.
            Over the past few years, I've built AI-powered products, full-stack platforms, and production-ready web applications,
            often taking ideas from early concepts to deployment while navigating evolving requirements, new technologies, and tight timelines.
            Whether I'm architecting backend systems, integrating AI workflows, or refining frontend experiences,
            I focus on building software that is scalable, reliable, and genuinely useful.
            I believe the best engineers aren't just fast learners—they know how to apply what they learn to solve meaningful problems.
          </p>
        </div>

        {/* Four pillars */}
        <div className="relative mb-16">
          <div className="absolute top-7 left-0 right-0 h-[1px] bg-[#DDD6FE] hidden sm:block" />
          <div ref={pillarsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`pillar-card sr sr-bento bento-float sr-d${i + 1} flex flex-col items-center text-center gap-3 cursor-default`}
              >
                <div className="relative w-14 h-14 rounded-full bg-[#F5F3FF] flex items-center justify-center mb-1 z-10 transition-all duration-300 hover:bg-[#EDE9FE] hover:shadow-[0_8px_24px_-6px_rgba(124,58,237,0.2)] hover:-translate-y-1">
                  {p.icon}
                </div>
                <p className="font-body text-[#0F172A] text-sm font-semibold">{p.title}</p>
                <p className="font-body text-[#71717A] text-sm leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C4B5FD]" />
          <span className="text-[#7C3AED] text-lg">✦</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#C4B5FD]" />
        </div>
      </div>
    </section>
  );
}
