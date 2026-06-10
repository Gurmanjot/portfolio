import React from "react";

/**
 * Metric — a single quantified achievement. Big accent number + mono label.
 */
const Metric = ({ value, label, className = "" }) => (
  <div className={`text-center ${className}`}>
    <div className="text-3xl md:text-4xl font-bold text-accent-600 dark:text-accent-400 tracking-tight">
      {value}
    </div>
    <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
      {label}
    </div>
  </div>
);

export default Metric;
