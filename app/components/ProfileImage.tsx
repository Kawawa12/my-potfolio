"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function ProfileImage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new window.Image();
    img.src = "/kww.png";
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative flex justify-center items-center mb-8"
      >
        <div
          className="absolute w-52 h-52 rounded-full"
          style={{ border: "1px solid hsl(var(--accent-glow) / 0.35)" }}
        />
        
        <div
          className="absolute w-48 h-48 rounded-full"
          style={{
            background: "hsl(var(--accent-glow) / 0.08)",
            border: "1px solid hsl(var(--accent-glow) / 0.2)"
          }}
        />
        
        <div 
          className="absolute w-48 h-48 rounded-full"
          style={{
            border: "1px solid hsl(var(--border))"
          }}
        />
        
        {/* Profile image - slightly smaller */}
        <motion.div 
          className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-[hsl(var(--card))] shadow-xl bg-[hsl(var(--card))] cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsZoomed(true)}
        >
          {!imageError ? (
            <img 
              src="/kww.png" 
              alt="Jackson Kawawa"
              className={`w-full h-full object-center transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          ) : (
            // Fallback gradient with initials if image fails to load
            <div className="w-full h-full flex items-center justify-center bg-[hsl(var(--accent-glow))] text-white text-4xl font-bold">
              JK
            </div>
          )}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-[hsl(var(--accent-glow))] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Zoom hint overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">Tap to zoom</span>
          </div>
        </motion.div>
        
      </motion.div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="/kww.png" 
                alt="Jackson Kawawa - Full Size"
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
              
              {/* Close button */}
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-all hover:scale-110"
              >
                <FiX className="w-5 h-5" />
              </button>
              
              {/* Decorative rings in zoom view - reduced */}
              <div className="absolute inset-0 -z-10 rounded-2xl">
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    border: "1px solid hsl(var(--accent-glow) / 0.3)",
                    boxShadow: "0 0 30px hsl(var(--accent-glow) / 0.12)"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
