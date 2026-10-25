"use client";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiGithub, FiMail, FiArrowDown } from "react-icons/fi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ProfileImage from "./ProfileImage";

const ROLES = [
  "Full-Stack Engineer",
  "Mobile Developer",
  "API Architect",
  "REST API Design and Integration",
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      if (roleRef.current) roleRef.current.textContent = ROLES[0];
      return;
    }

    let roleIdx = 0, charIdx = 0, deleting = false, timeout: ReturnType<typeof setTimeout>;
    const type = () => {
      const word = ROLES[roleIdx];
      const el = roleRef.current;
      if (!el) return;
      if (!deleting) {
        el.textContent = word.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === word.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = word.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % ROLES.length;
        }
      }
      timeout = setTimeout(type, deleting ? 45 : 80);
    };
    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.4,
      a: Math.random() * 0.45 + 0.1,
    }));

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0;
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94,234,212,${p.a * 0.45})`;
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(94,234,212,${0.04 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, [prefersReducedMotion]);

  const socials = [
    { icon: <FiGithub size={17} />, href: "https://github.com/Kawawa12", label: "GitHub", external: true },
    { icon: <FaLinkedinIn size={17} />, href: "https://linkedin.com", label: "LinkedIn", external: true },
    { icon: <FaTwitter size={17} />, href: "https://twitter.com", label: "Twitter", external: true },
    { icon: <FiMail size={17} />, href: "mailto:jacksonkawawa31@gmail.com", label: "Email", external: false },
  ];

  return (
    <section id="about" aria-labelledby="hero-title" className="relative min-h-screen flex items-center overflow-hidden">
      <canvas aria-hidden="true" ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-55 z-0" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tag pill */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-glow)/0.2)] bg-[hsl(var(--accent-glow)/0.08)] px-3 py-1 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-glow))]" />
              <span className="font-mono text-[0.65rem] text-[hsl(var(--accent-glow))] tracking-wider">Available for opportunities</span>
            </div>

            {/* Animated scrolling name */}
            <div className="mb-4">
              <h1 id="hero-title" className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="gradient-text">JACKSON KAWAWA</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="mb-6 flex min-h-8 flex-wrap items-center gap-x-1.5">
              <span className="sr-only">Full-Stack Engineer, Mobile Developer, API Architect, and REST API Design and Integration</span>
              <span aria-hidden="true" className="font-mono text-sm text-gray-500 dark:text-gray-400">~/</span>
              <span aria-hidden="true" ref={roleRef} className="font-mono text-sm font-semibold gradient-text-cv sm:text-base" />
              {!prefersReducedMotion && <span aria-hidden="true" className="font-mono text-[hsl(var(--accent-glow))] text-base animate-pulse">▊</span>}
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
              I&apos;m a software engineer who builds <span className="font-semibold text-[hsl(var(--accent-glow))]">scalable REST APIs</span>, responsive web interfaces, and <span className="font-semibold text-[hsl(var(--accent-glow))]">cross-platform mobile apps</span> — from database design to deployment.
            </p>

            <div className="flex flex-wrap gap-3 mb-11">
              <a className="btn-primary" href="#projects">
                View My Work <span className="text-lg">→</span>
              </a>
              <a className="btn-ghost" href="#contact">
                Get in Touch
              </a>
            </div>

            <nav aria-label="Social and contact links" className="flex gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noreferrer" : undefined}
                  aria-label={s.external ? `${s.label} (opens in a new tab)` : s.label}
                  whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.1 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--surface)] border border-[hsl(var(--border))] text-gray-500 dark:text-gray-400 hover:border-[hsl(var(--accent-glow))] hover:text-[hsl(var(--accent-glow))] transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#skills"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { delay: 2, duration: 1.8, repeat: Infinity } }}
        aria-label="Scroll to skills"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 rounded p-2"
      >
        <span className="font-mono text-[0.6rem] tracking-widest text-gray-500 dark:text-gray-500">SCROLL</span>
        <FiArrowDown aria-hidden="true" size={13} className="text-gray-500 dark:text-gray-500" />
      </motion.a>
    </section>
  );
}
