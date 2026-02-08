"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, TrendingUp, FileCode, Activity } from "lucide-react";

const projects = [
  {
    title: "F1 Insight Hub",
    description: "Comprehensive Formula 1 analytics platform analyzing race statistics, driver performance, and historical trends. Interactive dashboards visualizing championship standings, pit stop strategies, and race outcomes with predictive models.",
    impact: "50+ Metrics",
    tags: ["Python", "Data Analytics", "Racing", "Visualization"],
    icon: Activity,
    color: "from-red-500 to-yellow-600",
    github: "https://github.com/SarangPratap/F1-Insight-Hub",
    demo: "#"
  },
  {
    title: "Real-Time Embedded AI System",
    description: "Deployed on-device image classification on ESP32-CAM with 3s inference interval. Built live MJPEG streaming dashboard and data acquisition pipeline for real-time waste classification monitoring.",
    impact: "3s Inference Time",
    tags: ["ESP32", "Edge Impulse", "Flask", "Python"],
    icon: Cpu,
    color: "from-emerald-500 to-teal-600",
    github: "https://github.com/SarangPratap/Waste_Classification",
    demo: "#"
  },
  {
    title: "Polish Bankruptcy Prediction",
    description: "Classification system predicting corporate bankruptcy using 64 financial ratios. Mitigated severe class imbalance using SMOTE and RandomOverSampler, achieving 94% F1-score on test set.",
    impact: "94% F1-Score",
    tags: ["Python", "Scikit-learn", "XGBoost", "SMOTE"],
    icon: TrendingUp,
    color: "from-purple-500 to-pink-600",
    github: "https://github.com/SarangPratap/Bankruptcy_Prediction_in-poland",
    demo: "#"
  },
  {
    title: "Automated MLOps Pipeline",
    description: "Integrated Optuna and Neptune to automate hyperparameter logging and model versioning for LightGBM models. Created reproducible pipelines reducing manual tuning effort by 40% and improving experiment tracking.",
    impact: "40% Time Saved",
    tags: ["Optuna", "Neptune.ai", "LightGBM", "MLOps"],
    icon: FileCode,
    color: "from-orange-500 to-red-600",
    github: "https://github.com/SarangPratap/Lightgbm.neptune",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="font-mono text-cyan-400 text-sm tracking-widest">PROJECTS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            FEATURED
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              WORK
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <project.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-neutral-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.impact && (
                <div className="mb-4 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                  <p className="text-sm font-semibold text-cyan-300">📊 Impact: {project.impact}</p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors hover:underline"
                >
                  <Github size={16} />
                  View Code
                </a>
                {project.demo !== "#" && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors hover:underline"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}