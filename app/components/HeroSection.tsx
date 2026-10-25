"use client";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FiGithub, FiMail, FiArrowDown, FiArrowRight } from "react-icons/fi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ProfileImage from "./ProfileImage";

/* ------------------------------------------------------------------ */
/* Content – edit here, no need to touch the JSX below                 */
/* ------------------------------------------------------------------ */
const ROLES = [
  "Full-Stack Engineer",
  "Mobile Developer",
  "API Architect",
  "REST API Design & Integration",
];

// TODO: replace the LinkedIn and Twitter URLs with your real profile links.
// Right now they open the sites' home pages, which is a dead end for visitors.
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Kawawa12",
    icon: FiGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:jacksonkawawa31@gmail.com",
    icon: FiMail,
    external: false,
  },
];

/* ------------------------------------------------------------------ */
/* Shared styles                                                       */
/* ------------------------------------------------------------------ */
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent-glow))] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

/* One staggered entrance for the whole text column (the only "page-load" motion) */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // True only while the hero is on screen AND the browser tab is visible.
  // Both animations check this so they don't burn CPU/battery in the background.
  const activeRef = useRef(true);

  /* ---------- Pause animations when off-screen or tab hidden ---------- */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let inView = true;
    const update = () => {
      activeRef.current = inView && !document.hidden;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  /* ---------- Typewriter ---------- */
  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;

    // Reduced motion: show one static role, no typing.
    if (prefersReducedMotion) {
      el.textContent = ROLES[0];
      return;
    }

    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!activeRef.current) {
        timeout = setTimeout(tick, 400);
        return;
      }
      const word = ROLES[roleIdx];

      if (!deleting) {
        charIdx++;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) {
          deleting = true;
          timeout = setTimeout(tick, 1800); // hold the full word so it can be read
          return;
        }
      } else {
        charIdx--;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % ROLES.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 40 : 75);
    };

    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  /* ---------- Particle background ---------- */
  useEffect(() => {
    if (prefersReducedMotion) return;
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
    };
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const seed = () => {
      // Fewer particles on small screens: cleaner and lighter.
      const count = width < 640 ? 28 : 55;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.4,
        a: Math.random() * 0.45 + 0.1,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // crisp on retina, capped for speed
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (particles.length === 0) seed();
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    let id = 0;
    const draw = () => {
      id = requestAnimationFrame(draw);
      if (!activeRef.current) return;

      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94,234,212,${p.a * 0.45})`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y,
          );
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(94,234,212,${0.05 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };
    id = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <canvas
          ref={canvasRef}
          className="pointer-events-none h-full w-full opacity-55"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-28 sm:px-6 lg:pb-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---------------- Text column ---------------- */}
          <motion.div
            variants={container}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="show"
            className="text-center lg:text-left"
          >
            {/* Availability */}
            <motion.div
              variants={item}
              className="mb-6 flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[hsl(var(--accent-glow)/0.25)] bg-[hsl(var(--accent-glow)/0.08)] px-3.5 py-1.5">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  {!prefersReducedMotion && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--accent-glow))] opacity-60" />
                  )}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--accent-glow))]" />
                </span>
                <span className="text-sm font-medium text-[hsl(var(--accent-glow))]">
                  Open to new opportunities
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              id="hero-title"
              className="mb-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="block text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl">
                Hi, I&apos;m
              </span>
              <span className="gradient-text">Jackson Kawawa</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={item}
              className="mb-6 flex min-h-9 flex-wrap items-center justify-center gap-x-1 lg:justify-start"
            >
              <span className="sr-only">{ROLES.join(", ")}</span>
              <span
                aria-hidden="true"
                className="font-mono text-base text-gray-500 dark:text-gray-400 sm:text-lg"
              >
                ~/
              </span>
              <span
                aria-hidden="true"
                ref={roleRef}
                className="gradient-text-cv font-mono text-lg font-semibold sm:text-xl"
              />
              {!prefersReducedMotion && (
                <span
                  aria-hidden="true"
                  className="animate-pulse font-mono text-lg text-[hsl(var(--accent-glow))] sm:text-xl"
                >
                  ▊
                </span>
              )}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="mx-auto mb-9 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg lg:mx-0"
            >
              I build{" "}
              <span className="font-semibold text-[hsl(var(--accent-glow))]">
                scalable REST APIs
              </span>
              , responsive web apps, and{" "}
              <span className="font-semibold text-[hsl(var(--accent-glow))]">
                cross-platform mobile apps
              </span>
              , from database design to deployment.
            </motion.p>

            {/* Calls to action: one primary, one secondary */}
            <motion.div
              variants={item}
              className="mb-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                className={`btn-primary group justify-center ${focusRing}`}
                href="#projects"
              >
                View my projects
                <FiArrowRight
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </a>
              <a
                className={`btn-ghost justify-center ${focusRing}`}
                href="#contact"
              >
                Contact me
              </a>
            </motion.div>

            {/* Social links: icon + visible label, 44px touch targets */}
            <motion.nav variants={item} aria-label="Social and contact links">
              <ul className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
                {SOCIALS.map(({ label, href, icon: Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      aria-label={
                        external
                          ? `${label} (opens in a new tab)`
                          : `Send an ${label.toLowerCase()}`
                      }
                      className={`inline-flex h-11 items-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[var(--surface)] px-3.5 text-sm font-medium text-gray-600 transition-colors hover:border-[hsl(var(--accent-glow))] hover:text-[hsl(var(--accent-glow))] dark:text-gray-300 motion-reduce:transition-none ${focusRing}`}
                    >
                      <Icon aria-hidden="true" size={16} />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>

          {/* ---------------- Profile image ---------------- */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[18rem] sm:max-w-sm lg:max-w-none">
              <ProfileImage />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue: hidden on short screens where it would overlap content */}
      <motion.a
        href="#skills"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={
          prefersReducedMotion ? undefined : { opacity: 1, y: [0, 6, 0] }
        }
        transition={{
          opacity: { delay: 1.5 },
          y: { delay: 2, duration: 1.8, repeat: 3 }, // bounces a few times, then rests
        }}
        aria-label="Scroll to skills"
        className={`absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 rounded-lg p-2 text-gray-600 hover:text-[hsl(var(--accent-glow))] dark:text-gray-400 md:flex [@media(max-height:700px)]:hidden ${focusRing}`}
      >
        <span className="text-xs font-medium">Skills</span>
        <FiArrowDown aria-hidden="true" size={14} />
      </motion.a>
    </section>
  );
}
