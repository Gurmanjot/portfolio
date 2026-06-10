import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
  primary:
    "bg-accent-600 hover:bg-accent-500 text-white border border-accent-500/50 shadow-sm",
  outline:
    "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-accent-50/50 dark:hover:bg-accent-500/10",
  subtle:
    "bg-slate-100/70 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-white/10 border border-transparent",
};

const sizes = {
  md: "px-5 py-2.5 text-sm font-medium rounded-lg",
  lg: "px-6 py-3 text-base font-semibold rounded-lg",
};

const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  as = "button",
  ...rest
}) => {
  const Comp = as;
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Comp
        className={clsx(
          "inline-flex items-center gap-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60",
          variants[variant],
          sizes[size],
          className
        )}
        {...rest}
      >
        {children}
      </Comp>
    </motion.div>
  );
};

export default Button;
