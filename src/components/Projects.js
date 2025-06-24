import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MPL: Rummy, Real Money Games",
    url: "https://apps.apple.com/in/app/rummy-real-money-games-mpl/id1447849626",
    description:
      "India's leading online gaming platform for real money games like Rummy and Fantasy Cricket, trusted by millions of users.",
    type: "Mobile App",
  },
  {
    title: "Razorpay Payments for Business (iOS)",
    url: "https://apps.apple.com/in/app/razorpay-accept-payments-now/id1497250144",
    description:
      "Official Razorpay app for businesses to accept payments, track sales, and manage refunds on the go.",
    type: "Mobile App",
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
  {
    title: "Razorpay Web Platform",
    url: "https://razorpay.com/",
    description:
      "Comprehensive payment gateway and business banking platform powering online payments for millions of Indian businesses.",
    type: "Web App",
  },
  {
    title: "Jisr HR Web Platform",
    url: "https://www.jisr.net/en",
    description:
      "Cloud-based HR and payroll management solution for businesses in the MENA region.",
    type: "Web App",
  },
];

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
          initial="hidden"
          whileInView="visible"
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-2 text-xs text-purple-500 font-semibold uppercase tracking-wider">
                {project.type}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-slate-900 hover:text-purple-600 transition-colors duration-200"
              >
                {project.title}
              </a>
              <p className="text-slate-600 mt-2 text-sm">
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
