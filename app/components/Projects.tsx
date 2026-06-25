"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Spring Boot backend, React frontend, and Flutter mobile app",
    tech: ["Spring Boot", "React", "Flutter", "PostgreSQL"],
    stats: { stars: 128, forks: 34 },
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    title: "Task Management System",
    description: "Real-time task tracking with Express.js, Vue.js, and WebSocket integration",
    tech: ["Express.js", "Vue.js", "MongoDB", "Socket.io"],
    stats: { stars: 89, forks: 23 },
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    title: "Social Analytics Dashboard",
    description: "Data visualization dashboard using FastAPI and Angular with D3.js",
    tech: ["FastAPI", "Angular", "D3.js", "Redis"],
    stats: { stars: 156, forks: 42 },
    gradient: "from-blue-500 via-cyan-500 to-sky-500",
  },
  {
    title: "Mobile Banking App",
    description: "Cross-platform banking application with Zustand state management and biometric authentication",
    tech: ["React Native", "Node.js", "Express", "Zustand", "MongoDB"],
    stats: { stars: 234, forks: 67 },
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/30">
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
                // Continuous glow animation for the border
                animate={{ 
                  boxShadow: [
                    "0 0 15px rgba(6, 182, 212, 0.3), 0 0 25px rgba(139, 92, 246, 0.2)",
                    "0 0 25px rgba(6, 182, 212, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)",
                    "0 0 15px rgba(6, 182, 212, 0.3), 0 0 25px rgba(139, 92, 246, 0.2)"
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                // Smooth hover transition
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  boxShadow: "0 0 50px rgba(6, 182, 212, 0.9), 0 0 70px rgba(139, 92, 246, 0.7)",
                  transition: { 
                    type: "spring", 
                    stiffness: 300,
                    damping: 20,
                    duration: 0.5 
                  }
                }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 
                          transition-all duration-300 cursor-pointer group"
              >
                {/* GitHub-style header with smooth flowing gradient */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`}
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                  />
                  
                  {/* Overlay pattern - smooth transition on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-black/30 transition-all duration-500"
                    whileHover={{ opacity: 0.8 }}
                  />
                  
                  {/* Animated folder icon with smooth transitions */}
                  <motion.div 
                    className="absolute bottom-4 left-6 text-7xl opacity-90"
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, -5, 5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 360,
                      transition: { duration: 0.5, type: "spring" }
                    }}
                  >
                    <motion.div
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(255,255,255,0)",
                          "0 0 20px rgba(255,255,255,0.5)",
                          "0 0 0px rgba(255,255,255,0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      📁
                    </motion.div>
                  </motion.div>
                  
                  {/* GitHub-style stats badges */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.div 
                      className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs"
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FiStar className="w-3 h-3" />
                      <span>{project.stats.stars}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs"
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FiGitBranch className="w-3 h-3" />
                      <span>{project.stats.forks}</span>
                    </motion.div>
                  </div>
                </div>

                {/* GitHub-style content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 dark:text-white transition-all duration-300"
                      style={{ WebkitBackgroundClip: "text" }}
                      whileHover={{ 
                        scale: 1.02,
                        background: "linear-gradient(135deg, #06b6d4, #a78bfa)",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      <FiGithub className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </motion.div>
                  </div>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Tech stack tags - GitHub style */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIdx) => (
                      <motion.span
                        key={techIdx}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -3,
                          background: "linear-gradient(135deg, #06b6d4, #a78bfa)",
                          color: "white",
                          transition: { duration: 0.2, type: "spring" }
                        }}
                        className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 
                                 text-gray-700 dark:text-gray-300 font-mono cursor-pointer
                                 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* GitHub-style action buttons */}
                  <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 
                               hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" /> Code
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 
                               hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" /> Live Demo
                    </motion.a>
                  </div>
                </div>

                {/* Animated bottom border that grows on hover */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0.3 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                />
                
                {/* Shine effect on hover with smooth transition */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
