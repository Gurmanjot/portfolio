import React from "react";
import { motion } from "framer-motion";
import { isMobile } from "../utils/isMobile";
import SectionHeader from "./ui/SectionHeader";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile & Frontend",
      skills: [
        "React Native",
        "React",
        "TypeScript",
        "JavaScript",
        "Design System",
        "Native Modules",
      ],
    },
    {
      title: "Architecture & APIs",
      skills: [
        "REST",
        "GraphQL",
        "WebSockets",
        "Firebase",
        "Feature-based Architecture",
      ],
    },
    {
      title: "CI/CD & DevOps",
      skills: [
        "Bitrise",
        "Revopush (OTA)",
        "App Center",
        "App Store",
        "Play Store",
      ],
    },
    {
      title: "State Management",
      skills: ["Redux", "React Query", "Zustand"],
    },
    {
      title: "Testing & Quality",
      skills: [
        "Jest",
        "React Testing Library",
        "Detox (E2E)",
        "SonarQube",
        "Sentry",
        "Datadog",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Cursor",
        "Claude Code",
        "Git",
        "GitHub",
        "Figma",
        "Xcode",
        "Android Studio",
        "Jira",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-slate-900/30 transition-colors"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader
          eyebrow="// skills"
          title="Skills & technologies"
          subtitle="Core stack, tooling and engineering practices."
        />

        <motion.div
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 gap-x-10 gap-y-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent-600 dark:text-accent-400 mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-slate-500 dark:text-slate-400"
        >
          <span>Also: Performance optimization</span>
          <span>·</span>
          <span>Code reviews</span>
          <span>·</span>
          <span>Accessibility (WCAG)</span>
          <span>·</span>
          <span>i18n</span>
          <span>·</span>
          <span>Mentoring</span>
          <span>·</span>
          <span>Agile</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
