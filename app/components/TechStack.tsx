"use client";

import { motion } from "framer-motion";
import { 
  SiSpringboot, SiExpress, SiFastapi, SiDjango,
  SiAngular, SiReact, SiVuedotjs, SiRedux,
  SiFlutter,
  SiJavascript, SiPython, SiTypescript,
  SiTailwindcss, SiNextdotjs, SiNodedotjs,
  SiGit, SiDocker, SiMongodb, SiPostgresql, SiMysql
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiMindMap } from "react-icons/ri";

const techCategories = [
  {
    title: "Backend Stack",
    icon: "⚙️",
    technologies: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: "Node.js", icon: SiNodedotjs },
    ]
  },
  {
    title: "Frontend Stack",
    icon: "🎨",
    technologies: [
      { name: "Angular", icon: SiAngular },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ]
  },
  {
    title: "Mobile Stack",
    icon: "📱",
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "React Native", icon: SiReact },
      { name: "Java", icon: FaJava },
    ]
  },
  {
    title: "Languages",
    icon: "💻",
    technologies: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
    ]
  },
  {
    title: "State Management",
    icon: "🔄",
    technologies: [
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Zustand", icon: RiMindMap },
      { name: "Context API", icon: SiReact },
    ]
  },
  {
    title: "Database & Tools",
    icon: "🗄️",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: "🔧",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiFastapi },
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
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl opacity-70">
                      {category.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {category.technologies.map((tech, techIdx) => {
                      const IconComponent = tech.icon;
                      return (
                        <motion.div
                          key={techIdx}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.18 }}
                          className="flex items-center gap-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-3 transition-colors hover:border-[hsl(var(--accent-glow)/0.5)]"
                        >
                          <IconComponent className="h-5 w-5 text-[hsl(var(--accent-glow))]" />
                          <span className="font-medium text-sm">{tech.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
