import React from "react";
import { motion } from "framer-motion";

/**
 * FocusCard
 * Flat bordered surface. Accent border on hover, no tilt/gradient.
 */
const FocusCard = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative group bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 transition-colors hover:border-accent-400/70 dark:hover:border-accent-500/50 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default FocusCard;
