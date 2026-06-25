"use client";

import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      // Using EmailJS or a backend service to send emails
      // For now, we'll create a mailto link that opens email client
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:jacksonkawawa31@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              
              {/* Email Contact */}
              <motion.a 
                href="mailto:jacksonkawawa31@gmail.com"
                animate={{ 
                  boxShadow: [
                    "0 0 10px rgba(6, 182, 212, 0.3)",
                    "0 0 20px rgba(139, 92, 246, 0.5)",
                    "0 0 10px rgba(6, 182, 212, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 
                         border-2 border-cyan-500/50 transition-all cursor-pointer group"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  <FiMail className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-medium group-hover:text-cyan-500 transition-colors">jacksonkawawa31@gmail.com</p>
                </div>
              </motion.a>
              
              {/* Phone Contact */}
              <motion.a 
                href="tel:+255764752364"
                animate={{ 
                  boxShadow: [
                    "0 0 10px rgba(139, 92, 246, 0.3)",
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                    "0 0 10px rgba(139, 92, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 
                         border-2 border-purple-500/50 transition-all cursor-pointer group"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <FiPhone className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone / WhatsApp</p>
                  <p className="font-medium group-hover:text-purple-500 transition-colors">+255 764 752 364</p>
                </div>
              </motion.a>
              
              {/* Location */}
              <motion.div 
                animate={{ 
                  boxShadow: [
                    "0 0 10px rgba(236, 72, 153, 0.3)",
                    "0 0 20px rgba(139, 92, 246, 0.5)",
                    "0 0 10px rgba(236, 72, 153, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 
                         border-2 border-pink-500/50 transition-all cursor-pointer"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20">
                  <FiMapPin className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium">Tanzania</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 
                         focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 
                         focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 
                         focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: [
                  "0 0 10px rgba(6, 182, 212, 0.5)",
                  "0 0 20px rgba(139, 92, 246, 0.7)",
                  "0 0 10px rgba(6, 182, 212, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="group relative w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
                       text-white font-semibold overflow-hidden cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  "Sending..."
                ) : isSubmitted ? (
                  "Sent! ✓"
                ) : (
                  <>
                    Send Message
                    <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>
            
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
              Messages will open in your email client. I'll respond within 24 hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
