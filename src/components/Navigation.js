import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { isMobile } from "../utils/isMobile";
import { trackNavigation } from "../utils/analytics";
import ThemeToggle from "./ui/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Recommendations", href: "#recommendations" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href, sectionName) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Track navigation click
      trackNavigation(sectionName);
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-4 inset-x-0 z-50 flex justify-center`}
      initial={{ y: isMobile() ? 0 : -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`mx-4 md:mx-8 flex-1 max-w-6xl rounded-2xl border backdrop-blur-md px-4 md:px-6 py-2.5 shadow-sm transition-colors ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/70 border-white/50 dark:border-slate-700/60 shadow-lg"
            : "bg-white/40 dark:bg-slate-900/50 border-white/40 dark:border-slate-700/40"
        } `}
      >
        <div className="flex items-center justify-between gap-4">
          <motion.button
            whileHover={isMobile() ? undefined : { scale: 1.05 }}
            className="text-lg md:text-xl font-extrabold tracking-tight text-slate-800 dark:text-white"
            onClick={() => scrollToSection("#home", "Home")}
          >
            GS
          </motion.button>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.name)}
                className="relative text-sm font-medium text-black dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                whileHover={isMobile() ? undefined : { y: -2 }}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isMobile() ? 0 : index * 0.05 + 0.15 }}
              >
                {item.name}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <motion.button
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={isMobile() ? undefined : { scale: 0.92 }}
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden mx-4 mt-3 rounded-2xl border border-white/50 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl overflow-hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.name)}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
