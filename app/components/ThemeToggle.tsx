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
      type="button"
      className="ml-auto rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-2 shadow-sm md:ml-0"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <FiMoon className="w-5 h-5 text-[hsl(var(--foreground))]" />
      ) : (
        <FiSun className="w-5 h-5 text-[hsl(var(--foreground))]" />
      )}
    </motion.button>
  );
}
