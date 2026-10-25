"use client";

import ThemeToggle from "./components/ThemeToggle";
import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ThemeToggle />
      <HeroSection />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
