import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "JISR",
      period: "03/2024 - Present",
      location: "Remote",
      achievements: [
        "Led frontend development and integration of in-house AI chatbot for both Website(React) and Mobile(React-Native)",
        "Collaborated with Designers and Product managers for multiple product features on web such as employee expense tracking, announcements, employee request creation flow",
        "Improved website performance by optimizing web vitals, resulting in a higher Lighthouse score and faster page loads",
        "Built an in-app development tool for mobile builds, enabling non-technical team members to easily access network logs and switch environments",
        "Integrated Bitrise to fully automate the mobile app release process to iOS App Store and Google Play Store",
        "Added biometric authentication check used by 80k+ users",
        "Revamped the entire user interface of the app's home screen to optimize user engagement",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Razorpay",
      period: "09/2021 - 03/2024",
      location: "Bangalore, India",
      achievements: [
        "Contributed to multiple responsive frontend dashboards built using React.JS, Javascript, HTML and CSS",
        "Refactored the react route logic for Razorpay dashboard which reduced the customer drop off rate by 30%",
        "Wrote multiple test cases using Jest testing framework, increasing unit test coverage to more than 90%",
        "Worked on Razorpay's checkout feature enabling merchants to accept payments from their customers",
        "Developed Payment Gateway Mobile app using React-Native, enabling merchants to track payments & get detailed insights",
        "Developed mobile-specific login flow which boosted the conversion rate for logging in by 90%",
        "Received spot award for onboarding quickly and contributing to login feature and increasing unit testing coverage",
      ],
    },
    {
      title: "Software Engineer",
      company: "GeekyAnts India Pvt Ltd",
      period: "06/2020 - 09/2021",
      location: "Bangalore, India",
      achievements: [
        "Built a comprehensive design-system/library in React which reduced development time by 30%",
        "This library is now used by 40+ React developers within the team",
        "Worked on an eSports gaming app with daily user base of 50,000",
        "Responsible for complete UI refactor of app in iOS for international launch",
        "Improved app's crash free percentage to 99%",
        "Gave a tech talk at React Native Bangalore (Topic: Bridging between React-Native and Swift)",
      ],
    },
    {
      title: "Trainee Software Engineer",
      company: "GeekyAnts India Pvt",
      period: "02/2019 - 05/2020",
      location: "Bangalore, India",
      achievements: [
        "Worked on a Fundraiser app that raises funds online for medical and social causes",
        "Developed multiple UI screens and promotional fundraiser section",
        "Participated in agile development processes, attending sprint planning and review meetings",
      ],
    },
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white">
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
            Experience
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: window.innerWidth < 768 ? 0.3 : 0.6 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center gap-2 text-purple-500 mb-2">
                      <FaBriefcase />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-4 text-slate-600 mb-4">
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-sm" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendar className="text-sm" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-slate-600 text-sm flex items-start gap-2"
                        >
                          <span className="text-purple-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
