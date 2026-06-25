import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = ["About", "Projects", "Experience", "Skills", "Contact"];
const CONTACT_EMAIL = "shreyankadutta1209@gmail.com";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const bentoSection = document.querySelector("#metrics-bento");
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (bentoSection) observer.observe(bentoSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 backdrop-blur-xl bg-white/70 border-b border-white/20 transition-transform duration-500 ease-in-out ${
          menuOpen ? "z-[70]" : "z-50"
        }`}
        style={{ transform: hidden && !menuOpen ? "translateY(-100%)" : "translateY(0)" }}
      >
        <div className="section-container flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 mr-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0F172A] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-body text-xs sm:text-sm font-semibold tracking-wide">SD</span>
            </div>
            <span className="font-body text-[#0F172A] font-semibold text-sm sm:text-base tracking-tight truncate">
              Shreyanka Dutta
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className="group relative px-3 xl:px-4 py-2 text-sm font-body font-medium text-[#52525B] transition-colors duration-300 hover:text-[#7C3AED]"
              >
                {link}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-1.5 ml-2 px-4 xl:px-5 py-2.5 rounded-full bg-[#7C3AED] text-white text-sm font-body font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(124,58,237,0.4)]"
            >
              Let&apos;s Connect
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden relative z-10 flex-shrink-0 min-w-11 min-h-11 w-11 h-11 flex items-center justify-center rounded-full border border-[#E5E7EB] text-[#0F172A] hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors touch-manipulation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <Menu className={`w-6 h-6 pointer-events-none ${menuOpen ? "hidden" : "block"}`} />
            <X className={`w-6 h-6 pointer-events-none ${menuOpen ? "block" : "hidden"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 w-full h-full bg-[#0F172A]/40 backdrop-blur-sm"
          onClick={closeMenu}
          aria-label="Close menu"
        />

        <aside
          className={`absolute top-0 left-0 h-full w-[min(320px,82vw)] bg-[#FAFAFA] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-5 py-5 border-b border-[#EDE9FE]">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center">
                <span className="text-white font-body text-sm font-semibold">SD</span>
              </div>
              <span className="font-body text-[#0F172A] font-semibold text-base">Shreyanka Dutta</span>
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="relative z-10 flex-shrink-0 min-w-11 min-h-11 w-11 h-11 flex items-center justify-center rounded-full border border-[#E5E7EB] text-[#0F172A] hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors touch-manipulation"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 pointer-events-none" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-5 py-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                onClick={closeMenu}
                className="font-body text-[#0F172A] text-lg font-medium py-3.5 border-b border-[#F1F0FF] hover:text-[#7C3AED] transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-5 pb-8 pt-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#7C3AED] text-white text-base font-body font-semibold transition-all duration-300 hover:bg-[#6D28D9] active:scale-[0.98]"
            >
              Let&apos;s Connect
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
