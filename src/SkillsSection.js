import React from "react";
import { motion } from "framer-motion";

const SkillsSection = ({ skillsSectionRef }) => {
  const skills = [
    "React",
    "React Native",
    "JavaScript",
    "HTML",
    "CSS",
    "GraphQL",
    "Jest",
    "Svelte",
    "Material Ui",
    "Git",
    "Jira",
    "ES6+",
    "Hooks",
    "Bitrise",
    "Redux",
    "TypeScript",
    "React Testing Library",
  ];

  return (
    <div
      ref={skillsSectionRef}
      className="relative isolate px-6 pt-14 lg:px-8 justify-center items-center flex flex-col"
    >
      <h1 className="w-full text-2xl sm:text-4xl font-bold mb-10 text-center text-white">
        Frontend Skills / Tech Stack
      </h1>
      <div className="flex flex-row flex-wrap mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="m-4 p-3 rounded shadow-lg bg-white text-center"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-xl text-slate-700 font-semibold">{skill}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
