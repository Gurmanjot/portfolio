import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaArrowDown,
  FaFileAlt,
} from "react-icons/fa";
import { isMobile } from "../utils/isMobile";

const RESUME_URL =
  "https://drive.google.com/file/d/13r0c4ZunhCs5XcLfCjsTx0VrCua0AvCs/view?usp=sharing";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: 0, opacity: 1 },
  };

  const credentials = [
    "7+ yrs",
    "Ex-Razorpay",
    "Ex-GeekyAnts",
    "Greater Toronto Area 🇨🇦",
  ];

  return (
    <section className="min-h-screen flex items-center bg-slate-50 dark:bg-[#080c14] relative overflow-hidden">
      {/* Subtle accent glow, single hue */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-[28rem] h-[28rem] bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-accent-400/5 dark:bg-accent-400/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="container mx-auto px-6 py-24 relative z-10 max-w-4xl"
        variants={containerVariants}
        initial={isMobile() ? "visible" : "hidden"}
        animate="visible"
      >
        {/* Open to work pill */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to full-time opportunities
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-mono text-sm text-accent-600 dark:text-accent-400 mb-4"
        >
          Gurmanjot Singh Randhawa
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-5 leading-[1.1]"
        >
          Senior Mobile &amp; Frontend Engineer
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-mono text-sm md:text-base text-slate-500 dark:text-slate-400 mb-8"
        >
          React Native · React · TypeScript · iOS &amp; Android
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed"
        >
          7+ years building{" "}
          <span className="text-slate-900 dark:text-slate-100 font-semibold">
            scalable React Native &amp; React applications
          </span>{" "}
          for iOS, Android and web. Focused on mobile architecture, performance,
          CI/CD and shipping reliable products to{" "}
          <span className="text-accent-600 dark:text-accent-400 font-semibold">
            80,000+ users
          </span>
          .
        </motion.p>

        {/* Credibility row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-x-3 gap-y-2 mb-10 font-mono text-xs text-slate-500 dark:text-slate-400"
        >
          {credentials.map((c, i) => (
            <React.Fragment key={c}>
              {i > 0 && (
                <span className="text-slate-300 dark:text-slate-700">·</span>
              )}
              <span>{c}</span>
            </React.Fragment>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-600 hover:bg-accent-500 text-white font-semibold text-sm transition-colors shadow-sm"
          >
            <FaFileAlt /> View Résumé
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 font-semibold text-sm transition-colors"
          >
            Get in touch <FaArrowDown className="text-xs" />
          </a>
          <div className="flex items-center gap-1 ml-1">
            <a
              href="https://www.linkedin.com/in/gurmanjot-singh-randhawa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-lg text-slate-500 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/gurmanjot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-lg text-slate-500 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="mailto:randhawagurman@gmail.com"
              aria-label="Email"
              className="p-3 rounded-lg text-slate-500 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
