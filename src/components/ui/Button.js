import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
  primary:
    "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40",
  outline:
    "border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/40",
  subtle:
    "bg-slate-100/60 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-white/10",
};

const sizes = {
  md: "px-5 py-2.5 text-sm font-medium rounded-xl",
  lg: "px-6 py-3 text-base font-semibold rounded-xl",
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
          "relative overflow-hidden transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/60",
          variants[variant],
          sizes[size],
          className
        )}
        {...rest}
      >
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500" />
        )}
      </Comp>
    </motion.div>
  );
};

export default Button;
