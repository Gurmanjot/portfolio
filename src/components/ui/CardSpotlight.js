import React, { useRef } from "react";
import { motion } from "framer-motion";

/**
 * CardSpotlight
 * Radial gradient spotlight follows pointer. Lightweight adaptation.
 */
const CardSpotlight = ({ className = "", children }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--spot-x", `${x}px`);
    el.style.setProperty("--spot-y", `${y}px`);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      className={`relative rounded-xl overflow-hidden group ${className}`}
      initial={{ opacity: 1, y: 0 }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(400px circle at var(--spot-x,50%) var(--spot-y,50%), rgba(59,130,246,0.12), transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 ring-1 ring-slate-900/5 dark:ring-white/5 rounded-xl pointer-events-none" />
    </motion.div>
  );
};

export default CardSpotlight;
