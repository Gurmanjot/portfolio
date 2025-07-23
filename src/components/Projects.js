import React from "react";
import { motion } from "framer-motion";
import { isMobile } from "../utils/isMobile";
import { FaMobileAlt, FaGlobe } from "react-icons/fa";
import { trackProjectClick } from "../utils/analytics";

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
          ></motion.div>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, idx) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              onClick={() =>
                trackProjectClick(project.title, project.type, project.url)
              }
            >
              <div
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl transform hover:scale-110"
                tabIndex={0}
              >
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
                <div className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-200">
                  {project.title}
                </div>
                <p className="text-slate-600 mt-2 text-sm min-h-[48px]">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
