"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {

  return (
    <section id="contact" className="py-12 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[128px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="font-mono text-cyan-400 text-sm tracking-widest">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            LET'S WORK
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              TOGETHER
            </span>
          </h2>
          <p className="text-neutral-400 mt-6 max-w-xl mx-auto">
            Master's student actively seeking internship and working student opportunities in Data Science,
            Machine Learning, and Analytics. Germany.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.a
            href="mailto:chamola31@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="font-bold mb-1">Email</h3>
            <p className="text-sm text-neutral-400 font-mono">chamola31@gmail.com</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold mb-1">Phone</h3>
            <p className="text-sm text-neutral-400 font-mono">+49 156 5517 131</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold mb-1">Location</h3>
            <p className="text-sm text-neutral-400 font-mono">Fulda, Germany</p>
            <p className="text-xs text-cyan-400 mt-1">Relocation Possible</p>
          </motion.div>
        </div>
          
        <p className="text-center text-sm text-neutral-500 font-mono mt-6">
          Open for Working Student & Internship Opportunities
        </p>
      </div>
    </section>
  );
}