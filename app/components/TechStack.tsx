"use client";

import { motion } from "framer-motion";
import { 
  SiSpringboot, SiExpress, SiFastapi, SiDjango,
  SiAngular, SiReact, SiVuedotjs, SiRedux,
  SiFlutter, SiKotlin,
  SiJavascript, SiPython, SiTypescript,
  SiTailwindcss, SiNextdotjs, SiNodedotjs,
  SiGit, SiDocker, SiMongodb, SiPostgresql, SiMysql,
  SiGraphql, SiFirebase, SiRedis
} from "react-icons/si";
import { FaJava, FaTools } from "react-icons/fa";
import { RiMindMap, RiDatabase2Line } from "react-icons/ri";
import { TbApi, TbBrandReactNative } from "react-icons/tb";

const techCategories = [
  {
    title: "Backend Stack",
    icon: "⚙️",
    technologies: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    ]
  },
  {
    title: "Frontend Stack",
    icon: "🎨",
    technologies: [
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    title: "Mobile Stack",
    icon: "📱",
    technologies: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    ]
  },
  {
    title: "Languages",
    icon: "💻",
    technologies: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ]
  },
  {
    title: "State Management",
    icon: "🔄",
    technologies: [
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Zustand", icon: RiMindMap, color: "#E65100" },
      { name: "Context API", icon: SiReact, color: "#61DAFB" },
    ]
  },
  {
    title: "Database & Tools",
    icon: "🗄️",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: "🔧",
    technologies: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiFastapi, color: "#FF6C37" },
    ]
  }
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Tech Stack</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                // Continuous glow animation
                animate={{ 
                  boxShadow: [
                    "0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(139, 92, 246, 0.2)",
                    "0 0 20px rgba(6, 182, 212, 0.6), 0 0 30px rgba(139, 92, 246, 0.4)",
                    "0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(139, 92, 246, 0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                // Hover transition
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 0 40px rgba(6, 182, 212, 0.8), 0 0 60px rgba(139, 92, 246, 0.6)",
                  transition: { 
                    type: "spring", 
                    stiffness: 300,
                    damping: 20,
                    duration: 0.4 
                  }
                }}
                className="relative bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--muted))] 
                          rounded-2xl p-8 border-2 border-[hsl(var(--accent-glow)/0.3)] 
                          transition-all duration-300 shadow-lg overflow-hidden cursor-pointer"
              >
                {/* Animated border gradient flowing */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  animate={{ 
                    background: [
                      "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)",
                      "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)",
                      "linear-gradient(90deg, transparent, rgba(236,72,153,0.3), transparent)",
                      "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Inner glow on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent-glow)/0.05)] to-[hsl(var(--accent-secondary)/0.05)] 
                            opacity-0 transition-opacity duration-500"
                  whileHover={{ opacity: 1 }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.span 
                      className="text-3xl"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                    >
                      {category.icon}
                    </motion.span>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {category.technologies.map((tech, techIdx) => {
                      const IconComponent = tech.icon;
                      return (
                        <motion.div
                          key={techIdx}
                          whileHover={{ 
                            scale: 1.08, 
                            x: 8, 
                            y: -5,
                            transition: { type: "spring", stiffness: 400, duration: 0.3 }
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-[hsl(var(--background)/0.5)] 
                                    border border-[hsl(var(--border))] hover:border-cyan-500
                                    transition-all duration-300 group/tech cursor-pointer"
                        >
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                          >
                            <IconComponent className="w-6 h-6" style={{ color: tech.color }} />
                          </motion.div>
                          <span className="font-medium text-sm">{tech.name}</span>
                          <motion.div 
                            className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 
                                      transition-opacity"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            whileHover={{ opacity: 1 }}
                          />
                        </motion.div>
                      );
                    })}
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
