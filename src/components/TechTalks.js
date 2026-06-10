import React from "react";
import { motion } from "framer-motion";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { isMobile } from "../utils/isMobile";
import SectionHeader from "./ui/SectionHeader";

const talks = [
  {
    title: "Bridging React Native & Swift",
    venue: "React Native Bangalore",
    date: "Oct 2020",
    description:
      "Technical session on bridging React Native with Swift and building native iOS modules for React Native applications.",
    link: "https://www.youtube.com/watch?v=0e_Qgzap9FQ",
  },
];

const TechTalks = () => {
  return (
    <section
      id="talks"
      className="py-24 bg-white dark:bg-slate-900/30 transition-colors"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader eyebrow="// speaking" title="Tech Talks" />

        <div className="space-y-4">
          {talks.map((talk) => (
            <motion.div
              key={talk.title}
              initial={isMobile() ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5"
            >
              <div className="mt-1 text-accent-500 text-xl shrink-0">
                <FaMicrophone />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    {talk.title}
                  </h3>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {talk.venue} · {talk.date}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {talk.description}
                </p>
                {talk.link && (
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-accent-600 dark:text-accent-400 hover:underline"
                  >
                    <FaYoutube className="text-red-500 text-sm" /> Watch the talk
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTalks;
