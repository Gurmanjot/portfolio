import React from "react";
import clsx from "clsx";

/**
 * Tag — mono pill for tech keywords / labels.
 */
const Tag = ({ children, className = "", accent = false }) => (
  <span
    className={clsx(
      "inline-flex items-center font-mono text-xs px-2.5 py-1 rounded-md border",
      accent
        ? "border-accent-400/40 text-accent-700 dark:text-accent-300 bg-accent-50/60 dark:bg-accent-500/10"
        : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50",
      className
    )}
  >
    {children}
  </span>
);

export default Tag;
