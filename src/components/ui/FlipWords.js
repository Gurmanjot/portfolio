import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * FlipWords
 * Cycles through an array of words with a vertical flip animation.
 * Lightweight adaptation inspired by Aceternity UI's flip text pattern.
 */
const FlipWords = ({
  words = [],
  interval = 2500,
  className = "",
  pauseOnHover = true,
}) => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (words.length <= 1) return;
    if (pauseOnHover && hovered) return;
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearTimeout(timerRef.current);
  }, [index, hovered, words, interval, pauseOnHover]);

  return (
    <span
      className={`inline-block relative h-[1.1em] overflow-hidden align-baseline ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", rotateX: -90, opacity: 0 }}
          animate={{ y: "0%", rotateX: 0, opacity: 1 }}
          exit={{ y: "-100%", rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-300 dark:to-pink-300 font-bold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default FlipWords;
