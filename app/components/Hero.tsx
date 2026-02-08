"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Download, Code2, Cpu, GitBranch, Zap, Database, BarChart3, Cloud, X } from "lucide-react";
import RobotFace from "./RobotFace";
import { useState } from "react";

export default function Hero() {
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "Data is the new oil, but only if refined properly. - Clive Humby",
    "In God we trust, all others must bring data. - W. Edwards Deming",
    "Data-driven decision making beats gut feeling every single time. - Jeff Bezos",
    "The goal of data science is to turn data into understanding and insight. - Hadley Wickham",
    "Without big data, you are blind and deaf in the middle of a freeway. - Geoffrey Moore",
    "Data scientist is someone who is better at statistics than any programmer, and better at programming than any statistician. - Josh Wills",
    "90% of the value from data science comes from good problem framing, not fancy algorithms. - Andriy Burkov",
    "If you torture the data long enough, it will confess to anything. - Ronald Coase",
    "The palest ink is better than the best memory. Apply this to data. - Chinese Proverb",
    "Machine learning is just statistics implemented badly. - Unknown",
    "Data is beautiful only when it tells you a story that matters. - Unknown",
    "Your data should drive your decisions, not your ego. - Unknown",
    "An approximate answer to the right problem is worth a good deal more than an exact answer to an approximate problem. - John Tukey",
    "The numbers have no way of speaking for themselves. We speak for them. - Unknown",
    "The best data scientists are lazy: they automate everything to avoid repeating work. - Unknown"
  ];

  const handleQuoteClick = () => {
    setCurrentQuote(Math.floor(Math.random() * quotes.length));
    setShowQuote(true);
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
      
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              M.S. Data Science &apos;25
            </span>
            <span className="flex items-center gap-1 text-neutral-400 text-xs font-mono">
              <MapPin size={12} />
              Fulda, Germany
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            SARANG
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              PRATAP
            </span>
            <span className="block text-white">CHAMOLA</span>
          </h1>
          
          <p className="text-xl text-neutral-400 mb-8 max-w-lg leading-relaxed">
            Master's student in Data Science at Hochschule Fulda building expertise in Machine Learning, LLM Architecture, and Agentic AI. 
            3+ years professional experience as Senior Analyst at Nielsen's Global Incubator Team deploying production ML models at scale. 
            Seeking internship and working student opportunities.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <Mail size={18} />
              Get In Touch
            </a>
            <a 
              href="/resume.pdf" 
              className="px-6 py-3 border border-white/20 hover:border-cyan-500 rounded-full transition-all flex items-center gap-2 hover:bg-cyan-500/10"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/SarangPratap" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/sarangpratap" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:chamola31@gmail.com" 
              className="p-3 rounded-full border border-white/10 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
        
        {/* Right content - Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          {/* Tech Stack Header */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/15 to-purple-500/15 border border-cyan-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Code2 size={24} className="text-cyan-400" />
              <h3 className="text-xs font-bold text-cyan-400 font-mono tracking-widest">CORE TECH</h3>
            </div>
            
            {/* Languages */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Code2 size={14} className="text-blue-400" />
                <span className="text-xs font-mono text-neutral-400">Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-2 py-1 rounded text-blue-300 font-mono text-xs border border-blue-400/50 bg-blue-500/20 hover:bg-blue-500/30 transition-all"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ML Frameworks */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Cpu size={14} className="text-purple-400" />
                <span className="text-xs font-mono text-neutral-400">ML Frameworks</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Scikit-learn", "XGBoost", "LightGBM", "PyTorch", "TensorFlow", "SHAP", "Optuna", "RandomForest", "SMOTE"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-2 py-1 rounded text-purple-300 font-mono text-xs border border-purple-400/50 bg-purple-500/20 hover:bg-purple-500/30 transition-all"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Database size={14} className="text-cyan-400" />
                <span className="text-xs font-mono text-neutral-400">Data & Analytics</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Pandas", "NumPy", "Power BI", "Tableau"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.55 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-2 py-1 rounded text-cyan-300 font-mono text-xs border border-cyan-400/50 bg-cyan-500/20 hover:bg-cyan-500/30 transition-all"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cloud & Deployment */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Cloud size={14} className="text-indigo-400" />
                <span className="text-xs font-mono text-neutral-400">Cloud & Deployment</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Azure", "Streamlit", "Flask", "Neptune.ai"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-2 py-1 rounded text-indigo-300 font-mono text-xs border border-indigo-400/50 bg-indigo-500/20 hover:bg-indigo-500/30 transition-all"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Version Control */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch size={14} className="text-orange-400" />
                <span className="text-xs font-mono text-neutral-400">Tools & VCS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.95 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-2 py-1 rounded text-orange-300 font-mono text-xs border border-orange-400/50 bg-orange-500/20 hover:bg-orange-500/30 transition-all"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Methodologies */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={14} className="text-emerald-400" />
                <span className="text-xs font-mono text-neutral-400">Methodologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["A/B Testing"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.05 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-2 py-1 rounded text-emerald-300 font-mono text-xs border border-emerald-400/50 bg-emerald-500/20 hover:bg-emerald-500/30 transition-all"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Sticky Floating RobotFace - Follows Scroll */}
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="pointer-events-auto cursor-pointer"
          onClick={handleQuoteClick}
        >
          <div className="w-40 h-40 backdrop-blur-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-3 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/30 group">
            <RobotFace />
            <div className="absolute -bottom-8 text-xs text-cyan-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Click for insight
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Quote Popup - Side Panel */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
            style={{ marginTop: "200px" }}
          >
            <motion.div
              className="backdrop-blur-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-2xl p-6 w-80"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-cyan-400">Data Wisdom</h3>
                <button
                  onClick={() => setShowQuote(false)}
                  className="p-1 hover:bg-white/10 rounded-full transition-all"
                >
                  <X size={16} className="text-neutral-400" />
                </button>
              </div>
              
              <p className="text-sm text-neutral-300 leading-relaxed mb-4 italic">
                "{quotes[currentQuote]}"
              </p>

              <div className="flex gap-2">
                <button
                  onClick={handleQuoteClick}
                  className="flex-1 px-3 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition-all font-semibold text-sm"
                >
                  Another
                </button>
                <button
                  onClick={() => setShowQuote(false)}
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-neutral-300 hover:bg-white/20 transition-all font-semibold text-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 font-mono text-xs"
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
}