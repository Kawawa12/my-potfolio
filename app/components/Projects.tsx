"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Women Beauty Services API",
    description: "Spring Boot REST API for a beauty services project.",
    tech: ["Spring Boot", "Java", "REST API"],
    category: "Backend",
    href: "https://github.com/Kawawa12/Women-Beaut-Services-springboot",
  },
  {
    title: "Beauty Services Frontend",
    description: "React frontend for a beauty services project.",
    tech: ["React", "Redux"],
    category: "Frontend",
    href: "https://github.com/Kawawa12/Beaut-service-front-react-redux",
  },
  {
    title: "Angular + Spring Boot",
    description: "Full-stack application combining an Angular frontend with a Spring Boot backend.",
    tech: ["Angular", "Spring Boot", "Java"],
    category: "Full stack",
    href: "https://github.com/Kawawa12/angular-spring-boot",
  },
  {
    title: "Express.js Authentication",
    description: "Authentication project built with Express.js.",
    tech: ["Express.js", "Node.js", "REST API"],
    category: "Backend",
    href: "https://github.com/Kawawa12/expressjs-authentication",
  },
  {
    title: "Express.js E-commerce Backend",
    description: "E-commerce backend project built with Express.js.",
    tech: ["Express.js", "Node.js", "REST API"],
    category: "Backend",
    href: "https://github.com/Kawawa12/backend-express-ecommerce",
  },
  {
    title: "Flutter App UI",
    description: "Mobile app frontend and interface design built with Flutter.",
    tech: ["Flutter", "Dart", "Mobile"],
    category: "Mobile",
    href: "https://github.com/Kawawa12/flutter-app-front-design",
  },
  {
    title: "Microservices Basics",
    description: "A learning project exploring the basics of microservices.",
    tech: ["Microservices", "Learning"],
    category: "Currently learning",
    href: "https://github.com/Kawawa12/Microservice-basics",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--muted)/0.45)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Some of my recent work that demonstrates my technical capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative flex h-36 items-end overflow-hidden bg-gradient-to-br from-[hsl(var(--accent-glow)/0.12)] via-[hsl(var(--muted))] to-[hsl(var(--card))] p-6">
                  <span className="rounded-full border border-[hsl(var(--accent-glow)/0.2)] bg-[hsl(var(--card)/0.8)] px-3 py-1 text-xs font-medium text-[hsl(var(--accent-glow))]">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[hsl(var(--foreground))]">
                      {project.title}
                    </h3>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--muted))]">
                      <FiGithub className="h-4 w-4 text-[hsl(var(--text-3))]" />
                    </div>
                  </div>
                  
                  <p className="mb-4 text-sm leading-relaxed text-[hsl(var(--text-2))]">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="rounded-full bg-[hsl(var(--muted))] px-3 py-1 font-mono text-xs text-[hsl(var(--text-2))]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-[hsl(var(--border))]">
                    <motion.a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2 text-sm font-medium text-[hsl(var(--text-2))] hover:text-[hsl(var(--accent-glow))] transition-colors"
                    >
                      <FiGithub className="w-4 h-4" /> Code
                    </motion.a>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
