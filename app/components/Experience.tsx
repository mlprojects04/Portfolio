"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Circana (Nielsen MMM Acquisition)",
    role: "Senior Analyst",
    period: "Oct 2022 - Sep 2025",
    location: "Remote / Bangalore, India",
    description: [
      "Led 'Metrics That Matter' study using Gradient Boosting models analyzing 50K+ demographic data points for Trade Desk, enabling $2M+ investment decisions with 15% ROI improvement",
      "Consulted for YouTube Ads team on MMM optimization, reducing marketing spend variance by 20% while maintaining ROI",
      "Developed Streamlit dashboard deployed to 20+ global stakeholders, automating 40 hours/month of manual analysis",
      "Created unified Brand Equity KPI using PCA integrating 3 data sources (search, survey, digital) for LVMH, improving measurement consistency by 35%",
      "Managed technical continuity during Nielsen-to-Circana migration, ensuring 100% uptime for 50+ client projects"
    ],
    color: "from-cyan-500 to-blue-600"
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst Trainee",
    period: "Mar 2021 - Aug 2022",
    location: "Pune, India",
    description: [
      "Implemented 150+ JUnit and Mockito test cases achieving 95% code coverage for microservices across 3 payment processing systems",
      "Developed Python-based automation scripts generating weekly performance reports for 25+ stakeholders, reducing manual effort by 12 hours/week",
      "Performed API testing in Postman identifying 40+ bugs in pre-production, improving QA velocity by 30%"
    ],
    color: "from-purple-500 to-pink-600"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-6 md:px-12 lg:px-24 bg-neutral-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="font-mono text-cyan-400 text-sm tracking-widest">EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            PROFESSIONAL
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              JOURNEY
            </span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-white/10 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-xs font-mono mb-3`}>
                    {exp.role}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                    {exp.company}
                  </h3>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-sm text-neutral-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-400">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}