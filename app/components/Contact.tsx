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
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 transition-colors hover:border-[hsl(var(--accent-glow)/0.5)]"
              >
                <div className="rounded-full bg-[hsl(var(--accent-glow)/0.1)] p-3">
                  <FiMail className="h-5 w-5 text-[hsl(var(--accent-glow))]" />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--text-3))]">Email</p>
                  <p className="font-medium transition-colors group-hover:text-[hsl(var(--accent-glow))]">jacksonkawawa31@gmail.com</p>
                </div>
              </motion.a>
              
              {/* Phone Contact */}
              <motion.a 
                href="tel:+255764752364"
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 transition-colors hover:border-[hsl(var(--accent-glow)/0.5)]"
              >
                <div className="rounded-full bg-[hsl(var(--accent-glow)/0.1)] p-3">
                  <FiPhone className="h-5 w-5 text-[hsl(var(--accent-glow))]" />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--text-3))]">Phone / WhatsApp</p>
                  <p className="font-medium transition-colors group-hover:text-[hsl(var(--accent-glow))]">+255 764 752 364</p>
                </div>
              </motion.a>
              
              <motion.a
                href="tel:+255789746295"
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 transition-colors hover:border-[hsl(var(--accent-glow)/0.5)]"
              >
                <div className="rounded-full bg-[hsl(var(--accent-glow)/0.1)] p-3">
                  <FiPhone className="h-5 w-5 text-[hsl(var(--accent-glow))]" />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--text-3))]">Normal call</p>
                  <p className="font-medium transition-colors group-hover:text-[hsl(var(--accent-glow))]">+255 789 746 295</p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 transition-colors hover:border-[hsl(var(--accent-glow)/0.5)]"
              >
                <div className="rounded-full bg-[hsl(var(--accent-glow)/0.1)] p-3">
                  <FiMapPin className="h-5 w-5 text-[hsl(var(--accent-glow))]" />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--text-3))]">Location</p>
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
                type="text"
                required
                className="w-full rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-3 transition-colors focus:border-[hsl(var(--accent-glow))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-glow)/0.15)]"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <motion.input
                type="email"
                required
                className="w-full rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-3 transition-colors focus:border-[hsl(var(--accent-glow))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-glow)/0.15)]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <motion.textarea
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-3 transition-colors focus:border-[hsl(var(--accent-glow))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-glow)/0.15)]"
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
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full overflow-hidden rounded-xl bg-[hsl(var(--accent-glow))] py-4 font-semibold text-white transition-colors hover:bg-[hsl(var(--accent-secondary))] disabled:cursor-not-allowed disabled:opacity-50"
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
