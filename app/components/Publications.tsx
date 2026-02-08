"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, FileText } from "lucide-react";

const publications = [
  {
    title: "Features Tell a Tale: Multi-Method Feature Analysis in Smart Contract Security",
    conference: "Blockchain Security Research",
    date: "2025",
    description: "Analysis of 111,897 Solidity contracts using three feature importance algorithms (Gini, XGBoost, SHAP) to identify which features contribute to predicting smart contract vulnerabilities. Found that contracts with complex architecture are 27% more likely to have vulnerabilities, providing interpretability insights for blockchain security.",
    tags: ["Smart Contracts", "Blockchain Security", "Feature Analysis", "XGBoost", "SHAP"],
    icon: FileText,
    color: "from-blue-500 to-cyan-600",
    pdf: "/Features_Tell_a_Tale.pdf",
    arXiv: "#"
  },
  {
    title: "Bankruptcy Prediction in Poland: Application of Data Science in Finance",
    conference: "Financial Data Science",
    date: "2025",
    description: "Classification system predicting corporate bankruptcy using 64 financial ratios from Polish companies. Addresses severe class imbalance through advanced sampling techniques and achieves 94% F1-score, demonstrating the application of machine learning to financial risk assessment.",
    tags: ["Bankruptcy Prediction", "Classification", "Financial Data", "Python", "XGBoost"],
    icon: FileText,
    color: "from-green-500 to-emerald-600",
    pdf: "/Bankruptcy_Prediction_Report.pdf",
    arXiv: "#"
  }
];

export default function Articles() {
  return (
    <section id="articles" className="py-12 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="font-mono text-cyan-400 text-sm tracking-widest">RESEARCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            ARTICLES &
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              RESEARCH
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-6 max-w-3xl">
          {publications.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${paper.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <paper.icon size={28} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {paper.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-neutral-400">
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {paper.conference}
                    </span>
                    <span>•</span>
                    <span>{paper.date}</span>
                  </div>
                  
                  <p className="text-neutral-400 mb-4 leading-relaxed">
                    {paper.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full border border-cyan-500/30 text-cyan-300 bg-cyan-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={paper.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors hover:underline font-semibold"
                    >
                      <FileText size={16} />
                      Read PDF
                    </a>
                    {paper.arXiv !== "#" && (
                      <a 
                        href={paper.arXiv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors hover:underline"
                      >
                        <ExternalLink size={16} />
                        arXiv
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
