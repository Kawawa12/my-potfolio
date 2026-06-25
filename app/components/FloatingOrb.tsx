"use client";

import { useEffect, useRef } from "react";

export default function FloatingOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      orbRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div
        ref={orbRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] 
                   rounded-full bg-gradient-to-r from-[hsl(var(--accent-glow)/0.15)] to-[hsl(var(--accent-secondary)/0.1)]
                   blur-3xl transition-transform duration-300 ease-out"
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[hsl(var(--accent-glow)/0.08)] to-transparent blur-2xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[hsl(var(--accent-secondary)/0.08)] to-transparent blur-2xl" />
    </div>
  );
}
