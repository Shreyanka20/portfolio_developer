import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const projects = [
  {
    id: "01",
    name: "Florra AI",
    description: "Flutrr's proprietary agentic AI for dating — personalized matchmaking, conversation assistance, and real-time AI workflows.",
    imageUrl: "https://media.base44.com/images/public/6a2a6bb22076cf135bcee9e0/9520d11f1_ChatGPTImageJun23202609_52_25PM.png",
    layout: "image-left",
  },
  {
    id: "02",
    name: "Fluttr",
    description: "Flutrr's official web platform — responsive, marketing-focused, delivered by a 5-member team within a 2-week deadline.",
    imageUrl: "https://media.base44.com/images/public/6a2a6bb22076cf135bcee9e0/aa9f13e54_ChatGPTImageJun24202611_12_01AM.png",
    layout: "image-right",
  },
  {
    id: "03",
    name: "Glodobaara",
    description: "Accessibility-focused mobile platform for senior citizens — React Native with optimized user journeys and cross-platform performance.",
    imageUrl: "https://media.base44.com/images/public/6a2a6bb22076cf135bcee9e0/0a632d5a6_ChatGPTImageJun24202612_15_35PM.png",
    layout: "image-left",
  },
  {
    id: "04",
    name: "Homi AI",
    description: "AI-powered marketing assistant for businesses — multi-channel content generation for Instagram, LinkedIn, blogs and email campaigns.",
    imageUrl: "https://media.base44.com/images/public/6a2a6bb22076cf135bcee9e0/b4552813d_ChatGPTImageJun24202612_24_38PM.png",
    layout: "image-right",
  },
  {
    id: "05",
    name: "Rasoi",
    description: "Full-stack restaurant management system with 4 role-based dashboards, real-time order sync, and an owner analytics module.",
    imageUrl: "https://media.base44.com/images/public/6a2a6bb22076cf135bcee9e0/ea8d34db3_ChatGPTImageJun24202611_56_20AM.png",
    layout: "image-left",
  },
  {
    id: "06",
    name: "Bloomkeep",
    description: "Digital bouquet gifting platform — no-signup bouquet creation, personalized greeting cards, ambient music reveals, and a freshness-decay mechanic.",
    imageUrl: "https://media.base44.com/images/public/6a2a6bb22076cf135bcee9e0/524846cbb_ChatGPTImageJun24202612_04_40PM.png",
    layout: "image-right",
  },
];

function ProjectRow({ project, isLast }) {
  const navigate = useNavigate();
  const revealRef = useScrollReveal({ threshold: 0.08 });
  const isImageLeft = project.layout === "image-left";
  const slug = project.name.toLowerCase().replace(/\s+/g, "-");

  const imageBlock = (
    <div
      className={`w-full lg:w-[58%] relative group cursor-pointer order-2 ${isImageLeft ? "lg:order-1" : "lg:order-3"}`}
      onClick={() => navigate(`/projects/${slug}`)}
    >
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-16 rounded-full pointer-events-none transition-all duration-300 group-hover:opacity-80"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.22) 0%, transparent 75%)",
          filter: "blur(16px)",
        }}
      />
      <div
        className="relative transition-all duration-400 group-hover:-translate-y-2 group-hover:shadow-[0_32px_80px_-16px_rgba(124,58,237,0.28)]"
        style={{
          borderRadius: "20px",
          boxShadow: "0 8px 40px -8px rgba(124,58,237,0.18), 0 24px 64px -16px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)",
          transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease",
        }}
      >
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full block"
          style={{ borderRadius: "20px", objectFit: "contain" }}
        />
      </div>
    </div>
  );

  const contentBlock = (
    <div className={`w-full lg:w-[32%] flex flex-col justify-center order-1 ${isImageLeft ? "lg:order-3 lg:pl-4" : "lg:order-1 lg:pr-4"}`}>
      <p className="font-body text-[#7C3AED] text-sm font-medium tracking-widest mb-3">{project.id}</p>
      <h3
        className="font-heading font-medium text-[#0F172A] leading-tight mb-3"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.6rem)" }}
      >
        {project.name}
      </h3>
      <div className="w-8 h-[2px] bg-[#7C3AED] rounded-full mb-4" />
      <p className="font-body text-[#52525B] text-sm sm:text-base leading-relaxed mb-6 max-w-md lg:max-w-xs text-stagger text-stagger-2">
        {project.description}
      </p>
      <button
        onClick={() => navigate(`/projects/${slug}`)}
        className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#52525B] transition-all duration-300 hover:border-[#7C3AED] hover:text-[#7C3AED] hover:bg-[#F5F3FF] hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_rgba(124,58,237,0.28)]"
      >
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );

  const timelineDot = (
    <div className="hidden lg:flex w-[10%] flex-col items-center lg:order-2">
      <div
        className="w-3 h-3 rounded-full bg-[#7C3AED]"
        style={{ boxShadow: "0 0 12px rgba(124,58,237,0.5)" }}
      />
    </div>
  );

  const dirClass = isImageLeft ? "sr-left" : "sr-right";

  return (
    <div
      ref={revealRef}
      className={`${dirClass} flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-0 ${isLast ? "mb-0" : "mb-16 md:mb-24 lg:mb-40"}`}
    >
      {contentBlock}
      {timelineDot}
      {imageBlock}
    </div>
  );
}

export default function ProjectsSection() {
  const titleRef = useScrollReveal();

  return (
    <section id="projects" className="w-full bg-white pt-6 pb-4 md:pb-10 relative">
      <div className="section-container">
        <div ref={titleRef} className="sr mb-12 md:mb-20">
          <h2
            className="font-heading font-medium text-[#0F172A]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: 1 }}
          >
            Projects
          </h2>
          <div className="line-expand w-10 h-[3px] bg-[#7C3AED] rounded-full mt-4" />
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #DDD6FE 8%, #DDD6FE 92%, transparent 100%)",
            }}
          />
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              isLast={i === projects.length - 1}
            />
          ))}
        </div>

        <div
          className="sr mt-6 md:mt-14 hidden md:flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-6 sm:px-10 py-8 sm:py-0 sm:h-[120px] bento-hover"
          style={{
            borderRadius: "20px",
            border: "1px solid #EDE9FE",
            background: "white",
            boxShadow: "0 4px 24px -8px rgba(124,58,237,0.08)",
          }}
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-10 h-10 rounded-full bg-[#F5F3FF] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#7C3AED]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <div>
              <p className="font-heading font-medium text-[#0F172A] text-lg sm:text-xl leading-tight">
                Have a project in mind?
              </p>
              <p className="font-body text-[#71717A] text-sm mt-0.5">
                Let&apos;s build something amazing together.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#0F172A] text-white text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(15,23,42,0.35)] w-full sm:w-auto justify-center"
          >
            Let&apos;s Connect
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
