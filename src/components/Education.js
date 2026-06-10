import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeader from "./ui/SectionHeader";

const education = [
  {
    degree: "M.Sc. Information Technology",
    institution: "Lovely Professional University",
    period: "2021 – 2023",
    note: "Distance · Top 10% · 7.2 CGPA",
  },
  {
    degree: "B.Tech. Computer Science & Engineering",
    institution: "Chitkara University",
    period: "2016 – 2020",
    note: "Top 5% · 9.6 CGPA",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader eyebrow="// education" title="Education" />

        <div className="space-y-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5"
            >
              <div className="text-accent-500 text-xl shrink-0">
                <FaGraduationCap />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {edu.degree}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {edu.institution}
                </p>
              </div>
              <div className="text-right shrink-0">
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {edu.period}
                </div>
                <div className="font-mono text-xs text-accent-600 dark:text-accent-400 mt-0.5">
                  {edu.note}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
