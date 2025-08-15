import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaTrophy, FaCalendar } from "react-icons/fa";
import { isMobile } from "../utils/isMobile";
import SectionHeader from "./ui/SectionHeader";
import FocusCard from "./ui/FocusCard";

const Education = () => {
  const education = [
    {
      degree: "Master of Science",
      field: "Information Technology",
      institution: "Lovely Professional University",
      type: "Distance Education",
      period: "12/2021 - 02/2023",
      gpa: "7.2 CGPA",
      achievement: "Among top 10%",
      icon: <FaGraduationCap />,
    },
    {
      degree: "Bachelor of Technology",
      field: "Computer Sciences & Engineering",
      institution: "Chitkara University",
      type: "Full-time",
      period: "08/2016 - 06/2020",
      gpa: "9.6 CGPA",
      achievement: "Among top 5%",
      icon: <FaGraduationCap />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-slate-900/40 transition-colors"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Education"
          subtitle="Academic foundation & continuous learning"
        />

        <motion.div
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FocusCard className="p-8 bg-white/90 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-purple-500 text-3xl">{edu.icon}</div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                      <FaCalendar />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {edu.degree}
                </h3>

                <h4 className="text-xl text-purple-600 dark:text-pink-400 font-semibold mb-3">
                  {edu.field}
                </h4>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <span className="font-medium">Institution:</span>
                    <span>{edu.institution}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <span className="font-medium">Type:</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm">
                      {edu.type}
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Academic Performance</span>
                    <FaTrophy className="text-yellow-300" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{edu.gpa}</div>
                  <div className="text-purple-100 text-sm">
                    {edu.achievement}
                  </div>
                </div>
              </FocusCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Continuous Learning
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I believe in continuous learning and staying updated with the
              latest technologies and best practices. My educational background
              in Computer Science combined with 6+ years of practical experience
              has given me a strong foundation in software development
              principles and modern web technologies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
