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
import SectionHeader from "./ui/SectionHeader";
import InfiniteMovingItems from "./ui/InfiniteMovingItems";
import FocusCard from "./ui/FocusCard";

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

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-900 relative"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Core stack, tooling & practices"
        />
        <div className="mb-10 rounded-full border border-slate-200 dark:border-slate-700 overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-slate-800/40">
          <InfiniteMovingItems
            items={skillCategories.flatMap((c) =>
              c.skills.map((s) => ({ label: s.name, icon: s.icon }))
            )}
            speed="slow"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <FocusCard>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center w-24 mb-4"
                    >
                      <div className="text-purple-500 dark:text-purple-400 text-3xl mb-2">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-slate-700 dark:text-slate-300 text-center text-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </FocusCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-2xl p-8 text-white"
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
              <div className="text-purple-100 dark:text-purple-200">
                Web Vitals, Lighthouse, Optimization
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Accessibility</div>
              <div className="text-purple-100 dark:text-purple-200">
                ARIA Standards, WCAG Guidelines
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Problem Solving</div>
              <div className="text-purple-100 dark:text-purple-200">
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
