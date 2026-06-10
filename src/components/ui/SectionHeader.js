import React from "react";
import { motion } from "framer-motion";

/**
 * SectionHeader
 * Mono eyebrow + clean title. Single accent, no gradients.
 */
const SectionHeader = ({ title, subtitle, id, eyebrow }) => {
  return (
    <motion.div
      id={id}
      className="mb-14 relative"
      initial={{ opacity: 1, y: 0 }}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs tracking-widest uppercase text-accent-600 dark:text-accent-400">
            {eyebrow}
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-slate-200 dark:bg-slate-800" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-slate-500 dark:text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
