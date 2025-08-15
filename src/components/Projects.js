import React from "react";
import { motion } from "framer-motion";
import { isMobile } from "../utils/isMobile";
import { FaMobileAlt, FaGlobe } from "react-icons/fa";
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
    <FaMobileAlt className="text-purple-500 text-lg mr-1" />
  ) : (
    <FaGlobe className="text-blue-500 text-lg mr-1" />
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
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Projects"
          subtitle="Select shipped products & platforms"
        />
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              className="block group focus:outline-none"
              onClick={() =>
                trackProjectClick(project.title, project.type, project.url)
              }
            >
              <CardSpotlight className="bg-gradient-to-br from-slate-50/90 to-white/90 dark:from-slate-800/70 dark:to-slate-800/30 p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer focus:ring-2 focus:ring-purple-500/60 dark:focus:ring-pink-500/60 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur">
                <div className="flex items-center mb-2">
                  {typeIcon(project.type)}
                  <span
                    className={`ml-2 px-2 py-1 text-xs rounded-full font-semibold tracking-wide ${
                      project.type === "Mobile App"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {project.type}
                  </span>
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-pink-400 transition-colors duration-200">
                  {project.title}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm min-h-[48px] leading-relaxed">
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
