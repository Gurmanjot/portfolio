import React from "react";
import { motion } from "framer-motion";
import { isMobile } from "../../utils/isMobile";

/**
 * SectionHeader
 * Consistent animated heading with subtle lamp/gradient effect bar.
 */
const SectionHeader = ({ title, subtitle, id }) => {
  return (
    <motion.div
      id={id}
      className="text-center mb-16 relative"
      initial={isMobile() ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 dark:from-purple-300 dark:via-pink-300 dark:to-purple-300">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-40 h-1 mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 rounded-full blur-sm opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 dark:from-purple-300 dark:via-pink-300 dark:to-purple-300 rounded-full" />
      </div>
    </motion.div>
  );
};

export default SectionHeader;
