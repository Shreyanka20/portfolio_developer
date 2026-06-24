import React from "react";
import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";
import SkillsBand from "../components/portfolio/SkillsBand";
import MetricsBentoImage from "../components/portfolio/MetricsBentoImage";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import CertificationsSection from "../components/portfolio/CertificationsSection";
import ContactSection from "../components/portfolio/ContactSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import AboutSection from "../components/portfolio/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SkillsBand />
      <MetricsBentoImage />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <AboutSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}