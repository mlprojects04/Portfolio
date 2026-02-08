"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="font-mono text-cyan-400 text-sm tracking-widest">ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            TURNING DATA INTO
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              ACTIONABLE INSIGHTS
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-neutral-400 leading-relaxed"
          >
            <p>
              I'm a Master's student in Data Science at Hochschule Fulda with 3+ years of professional experience 
              as a Senior Analyst in Nielsen's Global Incubator Team. My expertise spans Machine Learning (XGBoost, LightGBM, RandomForest), Statisical Analysis,
              generative AI, and building production-grade analytical solutions using Python, Streamlit, and cloud platforms.
            </p>
            <p>
              At Nielsen/Circana, I developed and deployed ML models processing complex, large-scale datasets. 
              We delivered insights that drove strategic decisions for top-tier clients across APAC and EMEA, including YouTube, Meta using Nielsen's Marketing mix modeling (MMM).
              I led the "Metrics That Matter" study leveraging Gradient Boosted Trees to extract actionable business insights, 
              and created analytics dashboards for stakeholders across YouTube and Meta. Additionally, I designed 
              synthetic KPIs using PCA for performance measurement.
            </p>
            <p>
              Currently advancing my expertise in LLM Architecture and Agentic AI systems. With hands-on experience across APAC 
              and EMEA markets, strong foundation in machine learning fundamentals, and active involvement in research, I'm seeking 
              internship and working student opportunities in Data Science and Machine Learning. Highly adaptable to new technologies, 
              cloud platforms (AWS, Azure), and emerging ML frameworks.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">3+</p>
                <p className="text-xs text-neutral-400 mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-400">15+</p>
                <p className="text-xs text-neutral-400 mt-1">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-400">100%</p>
                <p className="text-xs text-neutral-400 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">M.S. Data Science</h3>
                  <p className="text-neutral-400">Hochschule Fulda University</p>
                  <p className="text-cyan-400 font-mono text-sm mt-1">2025 - Present</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">B.Tech Computer Science</h3>
                  <p className="text-neutral-400">DIT University, India</p>
                  <p className="text-purple-400 font-mono text-sm mt-1">GPA: 7.72 | 2017 - 2021</p>
                </div>
              </div>
            </div>

            {/* Achievement */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Hackathon Achievement</h3>
                  <p className="text-neutral-400">8th place in ML regression challenge on HackerEarth</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}