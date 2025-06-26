import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaMobile,
  FaGit,
  FaGithub,
  FaFigma,
  FaDatabase,
  FaRocket,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJest,
  SiGraphql,
  SiFirebase,
  SiJira,
  SiRedux,
  SiDatadog,
  SiSentry,
  SiBitrise,
  SiXcode,
  SiAndroidstudio,
  SiSlack,
} from "react-icons/si";
import { VscCopilot } from "react-icons/vsc";
import { TbCursorText } from "react-icons/tb";
import {
  MdDesignServices,
  MdOutlineWebAsset,
  MdOutlineSpeed,
} from "react-icons/md";
import { isMobile } from "../utils/isMobile";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "React Native", icon: <FaMobile /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML/CSS", icon: <FaHtml5 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Material UI", icon: <MdOutlineWebAsset /> },
        { name: "Design System", icon: <MdDesignServices /> },
      ],
    },

    {
      title: "Dev Tools",
      skills: [
        { name: "VSCode", icon: <FaCode /> },
        { name: "GitHub Copilot", icon: <VscCopilot /> },
        { name: "Cursor", icon: <TbCursorText /> },
        { name: "Xcode", icon: <SiXcode /> },
        { name: "Android Studio", icon: <SiAndroidstudio /> },
        { name: "Bitrise", icon: <SiBitrise /> },
        { name: "Git", icon: <FaGit /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
    {
      title: "Testing & Quality",
      skills: [
        { name: "Jest (Unit Test)", icon: <SiJest /> },
        { name: "React Testing Library", icon: <FaReact /> },
        { name: "E2E Testing", icon: <FaRocket /> },
        { name: "Sentry", icon: <SiSentry /> },
        { name: "Datadog", icon: <SiDatadog /> },
      ],
    },
    {
      title: "Design & Collaboration",
      skills: [
        { name: "Figma", icon: <FaFigma /> },
        { name: "Slack", icon: <SiSlack /> },
        { name: "Jira", icon: <SiJira /> },
      ],
    },
    {
      title: "Cloud & APIs",
      skills: [
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "REST/Ajax", icon: <FaDatabase /> },
        { name: "Frontend Performance", icon: <MdOutlineSpeed /> },
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
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={isMobile() ? undefined : { scale: 1.03 }}
              whileTap={isMobile() ? undefined : { scale: 0.97 }}
              transition={{ duration: isMobile() ? 0 : 0.6 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center w-24 mb-4"
                  >
                    <div className="text-purple-500 text-3xl mb-2">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-slate-700 text-center text-sm">
                      {skill.name}
                    </span>
                  </div>
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
