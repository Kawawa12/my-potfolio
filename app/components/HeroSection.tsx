"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiArrowDown } from "react-icons/fi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ProfileImage from "./ProfileImage";

const ROLES = [
  "Full-Stack Engineer",
  "Mobile Developer",
  "API Architect",
  "Open Source Builder",
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);

  // Typewriter effect
  useEffect(() => {
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
  }, []);

  // Particle canvas
  useEffect(() => {
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
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,211,238,${p.a})`;
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
            ctx.strokeStyle = `rgba(34,211,238,${0.07 * (1 - dist / 130)})`;
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
  }, []);

  const socials = [
    { icon: <FiGithub size={17} />, href: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedinIn size={17} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter size={17} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FiMail size={17} />, href: "mailto:jacksonkawawa31@gmail.com", label: "Email" },
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-55 z-0" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tag pill */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-7"
              animate={{ boxShadow: ["0 0 0px #22d3ee", "0 0 20px #22d3ee", "0 0 0px #22d3ee"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-[0.7rem] text-cyan-400 tracking-wider">Available for opportunities</span>
            </motion.div>

            {/* Animated scrolling name */}
            <div className="overflow-hidden mb-4">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter whitespace-nowrap"
                animate={{ 
                  x: ["0%", "-100%"],
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
              >
                <span className="gradient-text">JACKSON KAWAWA</span>
                <span className="gradient-text mx-8">✦</span>
                <span className="gradient-text">JACKSON KAWAWA</span>
                <span className="gradient-text mx-8">✦</span>
                <span className="gradient-text">JACKSON KAWAWA</span>
              </motion.h1>
            </div>

            {/* Typewriter */}
            <div className="h-8 flex items-center gap-1.5 mb-6">
              <span className="font-mono text-sm sm:text-base text-gray-500 dark:text-gray-400">~/</span>
              <span ref={roleRef} className="font-mono text-sm sm:text-base font-semibold gradient-text-cv" />
              <span className="font-mono text-cyan-400 text-base animate-pulse">▊</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
              I build <span className="text-cyan-500 font-semibold">scalable REST APIs</span>, 
              reactive UIs, and <span className="text-purple-500 font-semibold">cross-platform mobile apps</span> 
              — from database to deployment.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-11">
              <button
                className="btn-primary"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work <span className="text-lg">→</span>
              </button>
              <button
                className="btn-ghost"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </button>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--surface)] border border-[var(--border)] text-gray-500 dark:text-gray-400 hover:border-cyan-500 hover:text-cyan-500 hover:shadow-[0_0_14px_var(--cyan-glow)] transition-all"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { delay: 2, duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="font-mono text-[0.6rem] tracking-widest text-gray-500 dark:text-gray-500">SCROLL</span>
        <FiArrowDown size={13} className="text-gray-500 dark:text-gray-500" />
      </motion.div>
    </section>
  );
}
