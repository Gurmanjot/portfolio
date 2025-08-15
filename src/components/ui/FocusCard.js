import React from "react";
import { motion } from "framer-motion";

/**
 * FocusCard
 * Slight tilt + scale on hover with inner glow.
 */
const FocusCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`relative group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-lg dark:hover:shadow-xl transition-shadow ${className}`}
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent dark:from-purple-400/15 dark:via-pink-400/15 dark:to-transparent" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default FocusCard;
