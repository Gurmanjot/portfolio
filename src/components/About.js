import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobile, FaUsers, FaRocket } from "react-icons/fa";
import { isMobile } from "../utils/isMobile";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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

  const highlights = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "React Specialist",
      description:
        "6+ years of React development with expertise in modern patterns and best practices",
    },
    {
      icon: <FaMobile className="text-3xl" />,
      title: "Cross-Platform",
      description:
        "React Native development for mobile apps with 80k+ active users",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Team Leadership",
      description:
        "Led frontend teams, mentored developers, and collaborated with stakeholders",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Performance Focus",
      description:
        "Optimized web vitals, improved Lighthouse scores, and enhanced user experience",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
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
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial={isMobile() ? "visible" : "hidden"}
            whileInView={isMobile() ? undefined : "visible"}
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-slate-900 mb-6"
            >
              Senior Frontend Developer
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed mb-6"
            >
              Front End Engineer with 6 years of experience specializing in
              React development. Extensive knowledge of JavaScript, proficiency
              in Git for version control, and expertise in building responsive
              and visually appealing user interfaces with HTML, CSS and React.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed mb-6"
            >
              Also well-versed in React Native for cross platform mobile app
              development. Collaborated with stakeholders to gather requirements
              and feedback for continuous improvement. Proven track record of
              collaborating effectively with teams using Jira, and adept at
              implementing GraphQL for efficient data fetching.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Skilled in writing unit tests with Jest to ensure code reliability
              and maintainability. Eager to contribute technical excellence and
              creativity to a dynamic development team.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-6">
              <a
                href="https://drive.google.com/file/d/13r0c4ZunhCs5XcLfCjsTx0VrCua0AvCs/view?usp=sharing"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
                target="_blank"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial={isMobile() ? "visible" : "hidden"}
            whileInView={isMobile() ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                whileHover={isMobile() ? undefined : { scale: 1.05 }}
                whileTap={isMobile() ? undefined : { scale: 0.97 }}
                transition={{ duration: isMobile() ? 0 : 0.6 }}
              >
                <div className="text-purple-500 mb-4">{highlight.icon}</div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-slate-600 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-4 text-center"
          >
            Key Achievements
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 text-center"
          >
            <div>
              <div className="text-3xl font-bold mb-2">80k+</div>
              <div className="text-purple-100">Active Mobile Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">90%+</div>
              <div className="text-purple-100">Test Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30%</div>
              <div className="text-purple-100">Performance Improvement</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
