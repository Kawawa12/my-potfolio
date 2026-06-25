"use client";

import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-[hsl(var(--card))] 
                 border border-[hsl(var(--border))] shadow-lg backdrop-blur-sm"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className="w-5 h-5 text-[hsl(var(--foreground))]" />
      ) : (
        <FiSun className="w-5 h-5 text-[hsl(var(--foreground))]" />
      )}
    </motion.button>
  );
}
