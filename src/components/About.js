import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaServer,
  FaRocket,
  FaUsers,
  FaFileAlt,
} from "react-icons/fa";
import { isMobile } from "../utils/isMobile";
import SectionHeader from "./ui/SectionHeader";
import Metric from "./ui/Metric";

const RESUME_URL =
  "https://drive.google.com/file/d/13r0c4ZunhCs5XcLfCjsTx0VrCua0AvCs/view?usp=sharing";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: 0, opacity: 1 },
  };

  const metrics = [
    { value: "7+", label: "Years experience" },
    { value: "80k+", label: "Users secured" },
    { value: "90%", label: "Test coverage" },
    { value: "99%", label: "Crash-free sessions" },
  ];

  const highlights = [
    {
      icon: <FaMobileAlt />,
      title: "Cross-Platform Mobile",
      description:
        "React Native apps for iOS & Android with native module integrations and platform-specific debugging.",
    },
    {
      icon: <FaServer />,
      title: "Architecture & APIs",
      description:
        "Modular, feature-based architecture with REST, GraphQL, WebSockets and shared TypeScript contracts.",
    },
    {
      icon: <FaRocket />,
      title: "CI/CD & Performance",
      description:
        "Automated release pipelines with Bitrise, OTA updates, and web-vitals / bundle optimization.",
    },
    {
      icon: <FaUsers />,
      title: "Mentoring & Collaboration",
      description:
        "Mentored developers, owned estimation & releases, and partnered closely with product and design.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader eyebrow="// about" title="About me" />

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            className="lg:col-span-3"
            variants={containerVariants}
            initial={isMobile() ? "visible" : "hidden"}
            whileInView={isMobile() ? undefined : "visible"}
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-5"
            >
              I'm a Senior Mobile &amp; Frontend Engineer with{" "}
              <span className="text-slate-900 dark:text-slate-100 font-semibold">
                7+ years
              </span>{" "}
              building scalable React Native applications for iOS and Android,
              alongside React on the web. I care about mobile architecture,
              performance optimization, CI/CD, and shipping reliable products in
              fast-paced Agile teams.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-5"
            >
              I've worked across fintech (Razorpay), HR tech (JISR), and gaming
              (GeekyAnts) — defining API contracts with backend teams, building
              reusable component systems, and tightening reliability through
              testing with Jest, RTL and Detox.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-7"
            >
              I lean on AI-assisted development with{" "}
              <span className="text-slate-900 dark:text-slate-100 font-semibold">
                Cursor and Claude Code
              </span>{" "}
              to accelerate delivery while maintaining production-grade
              engineering standards.
            </motion.p>
            <motion.a
              variants={itemVariants}
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-600 hover:bg-accent-500 text-white font-semibold text-sm transition-colors"
            >
              <FaFileAlt /> View résumé
            </motion.a>
          </motion.div>

          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-4 content-start"
            variants={containerVariants}
            initial={isMobile() ? "visible" : "hidden"}
            whileInView={isMobile() ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
          >
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={itemVariants}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-6 px-3"
              >
                <Metric value={m.value} label={m.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 mt-12"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={itemVariants}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:border-accent-400/70 dark:hover:border-accent-500/50 transition-colors"
            >
              <div className="text-accent-500 text-2xl mb-3">{h.icon}</div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1.5">
                {h.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {h.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
