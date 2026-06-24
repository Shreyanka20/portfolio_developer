import React from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, Globe } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../../hooks/useScrollReveal";

function OrbitalVisual() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[420px] mx-auto aspect-[420/380]">
      <div className="absolute rounded-full border border-[#DDD6FE] opacity-50" style={{ width: 340, height: 340 }} />
      <div className="absolute rounded-full border border-[#C4B5FD] opacity-30" style={{ width: 260, height: 260 }} />
      <div className="absolute rounded-full border border-[#A78BFA] opacity-20" style={{ width: 180, height: 180 }} />
      <div className="absolute rounded-full opacity-20" style={{ width: 380, height: 380, border: "1px dashed #A78BFA" }} />
      <div className="absolute w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.3) 0%, transparent 70%)", filter: "blur(24px)" }} />
      <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center shadow-[0_8px_32px_-8px_rgba(124,58,237,0.25)]">
        <svg className="w-10 h-10 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M12 2 L13.8 8.2 L20 10 L13.8 11.8 L12 18 L10.2 11.8 L4 10 L10.2 8.2 Z" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute z-10 w-12 h-12 rounded-full bg-white border border-[#EDE9FE] flex items-center justify-center shadow-sm" style={{ top: 32, left: "50%", transform: "translateX(-50%)" }}>
        <svg className="w-5 h-5 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
      <div className="absolute z-10 w-12 h-12 rounded-full bg-white border border-[#EDE9FE] flex items-center justify-center shadow-sm" style={{ right: 10, top: "38%" }}>
        <svg className="w-5 h-5 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      </div>
      <div className="absolute z-10 w-12 h-12 rounded-full bg-white border border-[#EDE9FE] flex items-center justify-center shadow-sm" style={{ bottom: 32, left: "50%", transform: "translateX(-50%)" }}>
        <Mail className="w-5 h-5 text-[#7C3AED]" />
      </div>
      <div className="absolute w-2 h-2 rounded-full bg-[#C4B5FD] opacity-60" style={{ top: "20%", right: "18%" }} />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-[#A78BFA] opacity-40" style={{ bottom: "28%", right: "14%" }} />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-[#DDD6FE] opacity-70" style={{ top: "55%", left: "10%" }} />
    </div>
  );
}

const CONTACT_EMAIL = "shreyankadutta1209@gmail.com";

const socialLinks = [
  { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/shreyankadutta/", label: "LinkedIn" },
  { icon: <Github className="w-4 h-4" />, href: "https://github.com/Shreyanka20", label: "GitHub" },
  { icon: <Mail className="w-4 h-4" />, href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
];

export default function ContactSection() {
  const heroRef = useScrollReveal();
  const panelRef = useStaggerReveal("contact-col");

  return (
    <section id="contact" className="w-full bg-white py-16 md:py-24">
      <div className="section-container">

        {/* Hero row */}
        <div ref={heroRef} className="sr flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-12 md:mb-16">
          <div className="w-full lg:max-w-[480px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-body text-[#7C3AED] text-sm font-medium tracking-widest">06</span>
              <div className="w-8 h-[1px] bg-[#7C3AED]" />
            </div>
            <h2
              className="font-heading font-medium text-[#0F172A] leading-tight mb-4"
              style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
            >
              Let's Work<br />Together{" "}
              <span className="heading-accent" style={{ fontSize: "0.55em" }}>✦</span>
            </h2>
            <div className="line-expand w-8 h-[3px] bg-[#7C3AED] rounded-full mb-6" />
            <p className="text-stagger text-stagger-1 font-body text-[#52525B] text-base leading-relaxed mb-8">
              I'm always open to discussing new opportunities,<br />
              exciting projects, or innovative ideas.<br />
              Let's build something amazing together!
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-body text-sm font-medium text-[#7C3AED] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(124,58,237,0.3)]"
              style={{ border: "1.5px solid #C4B5FD", background: "white" }}
            >
              <Send className="w-4 h-4" />
              Let's Connect
            </a>
          </div>
          <div className="hidden md:flex justify-center flex-1 w-full">
            <OrbitalVisual />
          </div>
        </div>

        {/* Bottom panel */}
        <div
          ref={panelRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl md:rounded-3xl overflow-hidden"
          style={{
            border: "1px solid #EDE9FE",
            background: "linear-gradient(135deg, #FAFAFE 0%, #F8F5FF 100%)",
            boxShadow: "0 4px 32px -8px rgba(124,58,237,0.08)",
          }}
        >
          {/* Col 1 */}
          <div className="contact-col sr sr-d1 p-6 md:p-10 border-b md:border-b-0 md:border-r border-[#EDE9FE]">
            <div className="w-11 h-11 rounded-xl bg-[#F0EBFF] flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 2 L13.8 8.2 L20 10 L13.8 11.8 L12 18 L10.2 11.8 L4 10 L10.2 8.2 Z" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              className="font-heading font-medium text-[#0F172A] leading-tight mb-4"
              style={{ fontSize: "1.5rem" }}
            >
              Great ideas start with<br />a simple conversation.
            </h3>
            <p className="font-body text-[#71717A] text-sm leading-relaxed">
              Whether you have a project in mind, a question,<br />
              or just want to connect — I'd love to hear from you.
            </p>
          </div>

          {/* Col 2 */}
          <div className="contact-col sr sr-d2 p-6 md:p-10 border-b md:border-b-0 lg:border-r border-[#EDE9FE] flex flex-col justify-center gap-6">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#F0EBFF] flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-[#7C3AED]" />
              </div>
              <div>
                <p className="font-body text-[#0F172A] text-sm font-semibold mb-0.5">Email</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-body text-[#71717A] text-sm hover:text-[#7C3AED] transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
            <div className="h-[1px] bg-[#EDE9FE]" />
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#F0EBFF] flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-[#7C3AED]" />
              </div>
              <div>
                <p className="font-body text-[#0F172A] text-sm font-semibold mb-0.5">Phone</p>
                <a href="tel:+917070371739" className="font-body text-[#71717A] text-sm hover:text-[#7C3AED] transition-colors">
                  +91 7070371739
                </a>
              </div>
            </div>
            <div className="h-[1px] bg-[#EDE9FE]" />
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#F0EBFF] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[#7C3AED]" />
              </div>
              <div>
                <p className="font-body text-[#0F172A] text-sm font-semibold mb-0.5">Location</p>
                <p className="font-body text-[#71717A] text-sm">Bangalore, India</p>
              </div>
            </div>
          </div>

          {/* Col 3 */}
          <div className="contact-col sr sr-d3 p-6 md:p-10 flex flex-col justify-center">
            <h3
              className="font-heading font-medium text-[#0F172A] leading-tight mb-4"
              style={{ fontSize: "1.5rem" }}
            >
              Let's create something<br />meaningful together.
            </h3>
            <div className="w-8 h-[2px] bg-[#7C3AED] rounded-full mb-6" />
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white border border-[#EDE9FE] flex items-center justify-center text-[#7C3AED] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_-4px_rgba(124,58,237,0.3)] hover:border-[#C4B5FD]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
