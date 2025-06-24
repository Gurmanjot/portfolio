import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaMobile,
  FaGit,
  FaGithub,
  FaFigma,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJest,
  SiGraphql,
  SiFirebase,
  SiJira,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", icon: <FaReact />, level: 95 },
        { name: "React Native", icon: <FaMobile />, level: 90 },
        { name: "JavaScript", icon: <FaJs />, level: 95 },
        { name: "TypeScript", icon: <SiTypescript />, level: 85 },
        { name: "HTML/CSS", icon: <FaHtml5 />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 88 },
      ],
    },
    {
      title: "Testing & Quality",
      skills: [
        { name: "Jest", icon: <SiJest />, level: 90 },
        { name: "React Testing Library", icon: <FaReact />, level: 85 },
        { name: "E2E Testing", icon: <FaRocket />, level: 80 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGit />, level: 92 },
        { name: "GitHub", icon: <FaGithub />, level: 90 },
        { name: "Jira", icon: <SiJira />, level: 85 },
        { name: "Figma", icon: <FaFigma />, level: 80 },
        { name: "Firebase", icon: <SiFirebase />, level: 75 },
      ],
    },
    {
      title: "State Management & APIs",
      skills: [
        { name: "Redux", icon: <SiRedux />, level: 88 },
        { name: "GraphQL", icon: <SiGraphql />, level: 80 },
        { name: "REST APIs", icon: <FaDatabase />, level: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1, delay: 0.3 },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-purple-500 text-xl">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-slate-700">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-slate-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-6 text-center"
          >
            Additional Expertise
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Performance</div>
              <div className="text-purple-100">
                Web Vitals, Lighthouse, Optimization
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Accessibility</div>
              <div className="text-purple-100">
                ARIA Standards, WCAG Guidelines
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Problem Solving</div>
              <div className="text-purple-100">
                Debugging, Code Review, Architecture
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
