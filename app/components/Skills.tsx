"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Cpu, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-600",
    skills: ["Python", "SQL", "C/C++", "Java", "Git", "Linux", "Bash"]
  },
  {
    title: "ML & Deep Learning",
    icon: Cpu,
    color: "from-purple-500 to-pink-600",
    skills: ["XGBoost", "LightGBM", "PyTorch", "TensorFlow", "SHAP", "Optuna", "RandomForest", "SMOTE"]
  },
  {
    title: "Data Engineering & Analytics",
    icon: Database,
    color: "from-emerald-500 to-teal-600",
    skills: ["Pandas", "NumPy", "PCA", "Streamlit", "Power BI", "Tableau", "Feature Engineering"]
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    color: "from-orange-500 to-red-600",
    skills: ["AWS", "Azure", "Flask", "Edge Impulse", "Docker", "ML Pipeline", "Model Versioning"]
  },
  {
    title: "Advanced ML Techniques",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    skills: ["Gradient Boosting", "MMM", "Statistical Analysis", "A/B Testing", "Time Series", "Anomaly Detection"]
  },
  {
    title: "Blockchain & Security",
    icon: Code2,
    color: "from-indigo-500 to-blue-600",
    skills: ["Solidity", "Smart Contracts", "Network Security", "Cybersecurity", "Neptune.ai", "Experiment Tracking"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] -z-10" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-[128px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <span className="font-mono text-cyan-400 text-sm tracking-widest">EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            TECHNICAL SKILLS
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              &amp; PROFICIENCIES
            </span>
          </h2>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all hover:shadow-lg hover:shadow-white/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <motion.span 
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all cursor-default font-mono"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}