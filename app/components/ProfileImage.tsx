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
        {/* Outer glowing ring - reduced size */}
        <motion.div
          animate={{ 
            rotate: 360,
            boxShadow: [
              "0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(139, 92, 246, 0.3)",
              "0 0 30px rgba(6, 182, 212, 0.7), 0 0 50px rgba(139, 92, 246, 0.5)",
              "0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(139, 92, 246, 0.3)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute w-52 h-52 rounded-full"
          style={{ border: "1.5px solid rgba(6, 182, 212, 0.3)" }}
        />
        
        {/* Middle gradient ring - reduced */}
        <motion.div
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-48 h-48 rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
            border: "1px solid rgba(6, 182, 212, 0.3)"
          }}
        />
        
        {/* Inner ring - thin border reduced */}
        <div 
          className="absolute w-48 h-48 rounded-full"
          style={{
            border: "1px solid rgba(139, 92, 246, 0.2)",
            boxShadow: "0 0 15px rgba(6, 182, 212, 0.15)"
          }}
        />
        
        {/* Profile image - slightly smaller */}
        <motion.div 
          className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/80 dark:border-gray-900 shadow-2xl bg-white cursor-pointer"
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
            <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
              JK
            </div>
          )}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Zoom hint overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">Tap to zoom</span>
          </div>
        </motion.div>
        
        {/* Decorative dots around profile - adjusted for smaller rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -z-10 w-60 h-60"
        >
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-cyan-500 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 36}deg) translate(0, -115px)`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.15,
                repeat: Infinity,
              }}
            />
          ))}
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
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    border: "1px solid rgba(6, 182, 212, 0.3)",
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)"
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
