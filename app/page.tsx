import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen relative">
        <HeroSection />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
