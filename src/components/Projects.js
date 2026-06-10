import React from "react";
import { motion } from "framer-motion";
import { isMobile } from "../utils/isMobile";
import { FaMobileAlt, FaGlobe, FaExternalLinkAlt } from "react-icons/fa";
import { trackProjectClick } from "../utils/analytics";
import SectionHeader from "./ui/SectionHeader";
import CardSpotlight from "./ui/CardSpotlight";

const projects = [
  {
    title: "MPL: Rummy, Real Money Games",
    url: "https://apps.apple.com/in/app/rummy-real-money-games-mpl/id1447849626",
    description:
      "India's leading online gaming platform for real money games like Rummy and Fantasy Cricket, trusted by millions of users.",
    type: "Mobile App",
  },
  {
    title: "Razorpay Web Platform",
    url: "https://razorpay.com/",
    description:
      "Comprehensive payment gateway and business banking platform powering online payments for millions of Indian businesses.",
    type: "Web App",
  },
  {
    title: "Razorpay Payments for Business (iOS)",
    url: "https://apps.apple.com/in/app/razorpay-accept-payments-now/id1497250144",
    description:
      "Official Razorpay app for businesses to accept payments, track sales, and manage refunds on the go.",
    type: "Mobile App",
  },
  {
    title: "Jisr HR Web Platform",
    url: "https://www.jisr.net/en",
    description:
      "Cloud-based HR and payroll management solution for businesses in the MENA region.",
    type: "Web App",
  },
  {
    title: "Razorpay Payments for Business (Android)",
    url: "https://play.google.com/store/apps/details?id=com.razorpay.payments.app&hl=en_IN",
    description:
      "Android app for Razorpay merchants to manage payments, settlements, and business analytics.",
    type: "Mobile App",
  },
  {
    title: "Jisr HR (iOS)",
    url: "https://apps.apple.com/in/app/jisr-hr/id1129820762",
    description:
      "HR management app for employees and managers, offering payroll, attendance, and leave management features.",
    type: "Mobile App",
  },
  {
    title: "Jisr HR (Android)",
    url: "https://play.google.com/store/apps/details?id=ess.android&hl=en_CA",
    description:
      "Android version of Jisr HR for seamless HR operations and employee self-service.",
    type: "Mobile App",
  },
];

const typeIcon = (type) =>
  type === "Mobile App" ? (
    <FaMobileAlt className="text-accent-500 text-base" />
  ) : (
    <FaGlobe className="text-accent-500 text-base" />
  );

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  // itemVariants removed after refactor to SectionHeader + CardSpotlight

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900/40 transition-colors"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader
          eyebrow="// projects"
          title="Shipped products"
          subtitle="Live apps and platforms I've contributed to, used by millions."
        />
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group focus:outline-none rounded-xl focus-visible:ring-2 focus-visible:ring-accent-500/60"
              onClick={() =>
                trackProjectClick(project.title, project.type, project.url)
              }
            >
              <CardSpotlight className="h-full bg-white dark:bg-slate-900/60 p-5 border border-slate-200 dark:border-slate-800 group-hover:border-accent-400/70 dark:group-hover:border-accent-500/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  {typeIcon(project.type)}
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {project.type}
                  </span>
                  <FaExternalLinkAlt className="ml-auto text-slate-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {project.title}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardSpotlight>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
