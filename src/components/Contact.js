import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
import { isMobile } from "../utils/isMobile";
import { trackContactFormEvent, trackSocialClick } from "../utils/analytics";

const RESUME_URL =
  "https://drive.google.com/file/d/13r0c4ZunhCs5XcLfCjsTx0VrCua0AvCs/view?usp=sharing";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "randhawagurman@gmail.com",
      link: "mailto:randhawagurman@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "in/gurmanjot-singh-randhawa",
      link: "https://www.linkedin.com/in/gurmanjot-singh-randhawa/",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/gurmanjot",
      link: "https://github.com/gurmanjot",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Greater Toronto Area, Canada",
      link: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: 0, opacity: 1 },
  };

  const handleClick = (title) => {
    if (title === "Email") trackContactFormEvent("email_click");
    else if (title === "LinkedIn")
      trackSocialClick("LinkedIn", "https://www.linkedin.com/in/gurmanjot-singh-randhawa/");
    else if (title === "GitHub")
      trackSocialClick("GitHub", "https://github.com/gurmanjot");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900/30 transition-colors"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.span
            variants={itemVariants}
            className="font-mono text-xs tracking-widest uppercase text-accent-600 dark:text-accent-400"
          >
            {"// contact"}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
          >
            Let's work together
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-3 text-slate-600 dark:text-slate-400 max-w-lg mx-auto"
          >
            Currently open to full-time opportunities. The fastest way to reach
            me is email or LinkedIn.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <a
              href="mailto:randhawagurman@gmail.com"
              onClick={() => handleClick("Email")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-600 hover:bg-accent-500 text-white font-semibold text-sm transition-colors"
            >
              <FaEnvelope /> Email me
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 font-semibold text-sm transition-colors"
            >
              <FaFileAlt /> View résumé
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid sm:grid-cols-2 gap-3"
        >
          {contactInfo.map((info) => {
            const inner = (
              <>
                <div className="text-accent-500 text-lg shrink-0">{info.icon}</div>
                <div className="min-w-0">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {info.title}
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-200 truncate">
                    {info.value}
                  </div>
                </div>
              </>
            );
            const base =
              "flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4 transition-colors";
            return info.link ? (
              <a
                key={info.title}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => handleClick(info.title)}
                className={`${base} hover:border-accent-400/70 dark:hover:border-accent-500/50`}
              >
                {inner}
              </a>
            ) : (
              <div key={info.title} className={base}>
                {inner}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
