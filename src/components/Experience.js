import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { isMobile } from "../utils/isMobile";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "JISR",
      period: "03/2024 - Present",
      location: "Remote (Ontario, Canada)",
      achievements: [
        [
          { text: "Led the frontend development and integration of in-house " },
          { text: "AI chatbot", highlight: true },
          { text: " for both Mobile (React-Native) and Website (React)." },
        ],

        [
          {
            text: "Revamped the entire UI",
            highlight: true,
          },
          {
            text: " of the app's home screen to optimize user engagement and visual consistency, directly impacting over ",
          },
          { text: "80,000 users", highlight: true },
          { text: "." },
        ],
        [
          {
            text: "Took initiative to build an ",
          },
          {
            text: "In-App development tool for mobile builds",
            highlight: true,
          },
          {
            text: ", enabling non-technical team members (e.g. Product Managers, Designers) to easily access network logs, view application logs, and switch between different environments without requiring new builds. This significantly ",
          },
          { text: "streamlined testing workflows", highlight: true },
          { text: " and " },
          { text: "improved collaboration", highlight: true },
          { text: "." },
        ],

        [
          {
            text: "Integrated ",
          },
          {
            text: "Bitrise ",
            highlight: true,
          },
          {
            text: "to fully automate the mobile app release process to the ",
          },
          { text: "IOS App Store ", highlight: true },
          { text: "and " },
          { text: "Google Play Store", highlight: true },
          {
            text: ". Furthermore, automated the creation of test builds, which previously required manual effort. This saved a lot of developer bandwidth.",
          },
        ],
        [
          { text: "Led the initiative to " },
          { text: "reduce the number of API calls", highlight: true },
          {
            text: " on mobile homepage to ",
          },
          {
            text: "avoid load on backend ",
            highlight: true,
          },
          {
            text: "and ",
          },
          {
            text: "prevent down time",
            highlight: true,
          },
          { text: "." },
        ],
        [
          {
            text: "Collaborated with Designers and Product managers for multiple product features on web such as employee expense tracking, announcements, employee request creation flow etc where I was responsible for ",
            highlight: false,
          },
          {
            text: "task estimation",
            highlight: true,
          },
          {
            text: ", ",
            highlight: false,
          },
          {
            text: " development",
            highlight: true,
          },
          {
            text: ",",
            highlight: false,
          },
          {
            text: " release ",
            highlight: true,
          },

          {
            text: "and ",
            highlight: false,
          },
          {
            text: "monitoring post release",
            highlight: true,
          },
          { text: "." },
        ],

        [
          { text: "Improved website performance by optimizing " },
          { text: "web vitals", highlight: true },
          { text: ", resulting in a " },
          { text: "higher Lighthouse score", highlight: true },
          { text: " and faster page loads." },
        ],
        [
          {
            text: "Added a ",
          },
          {
            text: "biometric authentication",
            highlight: true,
          },
          {
            text: " check to authorise the user before accessing the app which is currently used by ",
          },
          { text: "50k+ users", highlight: true },
          { text: "." },
        ],
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Razorpay",
      period: "09/2021 - 03/2024",
      location: "Bangalore, India",
      achievements: [
        [
          {
            text: "Refactored the React route logic for Razorpay dashboard, ",
          },
          {
            text: "reducing customer drop-off rate ",
            highlight: true,
          },
          {
            text: "by ",
          },
          { text: "30%", highlight: true },
          { text: " and improving user retention." },
        ],
        [
          {
            text: "Contributed to multiple ",
          },
          {
            text: "responsive Frontend Dashboards ",
            highlight: true,
          },
          {
            text: "built using React.JS, Javascript, HTML and CSS",
          },
        ],
        [
          {
            text: "Wrote comprehensive test cases using ",
          },
          {
            text: "Jest",
            highlight: true,
          },
          {
            text: ", increasing unit test coverage to over ",
          },
          { text: "90%", highlight: true },
          { text: " and ensuring robust code quality." },
        ],
        [
          {
            text: "Worked on Razorpay's ",
          },
          {
            text: "Payment Checkout feature ",
            highlight: true,
          },
          {
            text: "enabling merchants to accept payments from their customers",
          },
        ],
        [
          {
            text: "Developed Payment Gateway Mobile app using ",
          },
          {
            text: "React-Native",
            highlight: true,
          },
          {
            text: ", enabling merchants to track payments & get detailed insights",
          },
        ],
        [
          {
            text: "Developed mobile-specific login flow which boosted the ",
          },
          {
            text: "conversion rate",
            highlight: true,
          },
          {
            text: " for logging in by ",
          },
          { text: "90%", highlight: true },
          { text: "." },
        ],
        [
          {
            text: "Received ",
          },
          {
            text: "Spot Award",
            highlight: true,
            link: "https://drive.google.com/file/d/19xLEQW3oGU-iOzdCGQR8YTvup-33KqQ0/view?usp=sharing",
          },
          {
            text: " ",
          },
          {
            text: "for onboarding quickly and contributing to login feature and increasing unit testing coverage ",
          },
        ],
      ],
    },
    {
      title: "Software Engineer",
      company: "GeekyAnts India Pvt Ltd",
      period: "06/2020 - 09/2021",
      location: "Bangalore, India",
      achievements: [
        [
          {
            text: "Built a comprehensive ",
          },
          {
            text: "Design-System",
            highlight: true,
          },
          {
            text: ", reducing development time by ",
          },
          { text: "30%", highlight: true },
          { text: " and adopted by " },
          { text: "40+ developers", highlight: true },
          { text: "." },
        ],
        [
          { text: "Worked on an " },
          { text: "eSports gaming app", highlight: true },
          { text: " with daily user base of " },
          { text: "50,000+", highlight: true },
          { text: "." },
        ],
        [
          {
            text: "Responsible for ",
          },
          {
            text: "complete UI refactor ",
            highlight: true,
          },
          {
            text: "of app in iOS for international launch",
          },
          { text: "." },
        ],
        [
          { text: "Improved app's " },
          { text: "crash free percentage ", highlight: true },
          { text: "to " },
          { text: "99%", highlight: true },
          { text: " through rigorous QA and bug fixing." },
        ],
        [
          {
            text: "Gave a ",
          },
          {
            text: "Tech talk",
            highlight: true,
            link: "https://www.youtube.com/watch?v=0e_Qgzap9FQ",
          },
          {
            text: " at ",
          },
          {
            text: "React Native Bangalore ",
            highlight: true,
          },
          {
            text: "(Topic: Bridging between React-Native and Swift)",
          },
        ],
      ],
    },
    {
      title: "Trainee Software Engineer",
      company: "GeekyAnts India Pvt",
      period: "02/2019 - 05/2020",
      location: "Bangalore, India",
      achievements: [
        [
          {
            text: "Developed multiple UI screens",
            highlight: true,
          },
          {
            text: " and a promotional fundraiser section for a medical and social causes app, increasing donor engagement.",
          },
        ],
        [
          {
            text: "Worked on a ",
          },
          {
            text: "Fundraiser app ",
            highlight: true,
          },
          {
            text: "built using ",
          },
          {
            text: "React-Native ",
            highlight: true,
          },
          {
            text: " that raises funds online for medical and social causes",
          },
        ],
        [
          {
            text: "Participated in ",
          },
          {
            text: "Agile development processes",
            highlight: true,
          },
          {
            text: ", attending sprint planning and review meetings",
          },
        ],
      ],
    },
  ];

  // After the experiences array is defined, ensure each achievement line ends with a period
  experiences.forEach((exp) => {
    exp.achievements.forEach((achievement) => {
      if (Array.isArray(achievement) && achievement.length > 0) {
        const last = achievement[achievement.length - 1];
        if (typeof last.text === "string" && !last.text.trim().endsWith(".")) {
          last.text = last.text.trim() + ".";
        }
      }
    });
  });

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
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
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
          {/* Timeline line: thin, centered, minimal */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 z-0"></div>

          <motion.div
            variants={containerVariants}
            initial={isMobile() ? "visible" : "hidden"}
            whileInView={isMobile() ? undefined : "visible"}
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
                whileHover={isMobile() ? undefined : { scale: 1.03 }}
                whileTap={isMobile() ? undefined : { scale: 0.97 }}
                transition={{ duration: isMobile() ? 0 : 0.6 }}
              >
                {/* Content */}
                <div
                  className={`w-full mx-auto z-10 md:w-10/12 md:mx-0 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-100 border border-gray-100">
                    <div className="flex items-center gap-2 text-purple-500 mb-2">
                      <FaBriefcase />
                      <span className="text-base font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-4 text-slate-600 mb-4">
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-base" />
                        <span className="text-base">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendar className="text-base" />
                        <span className="text-base">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => {
                        // Support: array of segments (new), object (old), or string (old)
                        if (Array.isArray(achievement)) {
                          return (
                            <li
                              key={idx}
                              className="text-slate-600 text-base flex items-start gap-2"
                            >
                              <span className="text-purple-500">•</span>
                              <span>
                                {achievement.map((segment, segIdx) => {
                                  if (segment.link) {
                                    return (
                                      <a
                                        key={segIdx}
                                        href={segment.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`underline hover:text-blue-600 transition-colors ${
                                          segment.highlight
                                            ? "font-bold text-blue-600"
                                            : ""
                                        }`}
                                      >
                                        {segment.text}
                                      </a>
                                    );
                                  } else {
                                    return (
                                      <span
                                        key={segIdx}
                                        className={
                                          segment.highlight
                                            ? "font-bold text-pink-600"
                                            : ""
                                        }
                                      >
                                        {segment.text}
                                      </span>
                                    );
                                  }
                                })}
                              </span>
                            </li>
                          );
                        } else if (typeof achievement === "object") {
                          // fallback for old object format
                          const { text, highlight } = achievement;
                          return (
                            <li
                              key={idx}
                              className={`text-slate-600 text-base flex items-start gap-2 ${
                                highlight ? "font-bold text-pink-600" : ""
                              }`}
                            >
                              <span
                                className={`text-purple-500 mt-1 ${
                                  highlight ? "text-pink-600" : ""
                                }`}
                              >
                                •
                              </span>
                              <span>{text}</span>
                            </li>
                          );
                        } else {
                          // fallback for plain string
                          return (
                            <li
                              key={idx}
                              className="text-slate-600 text-base flex items-start gap-2"
                            >
                              <span className="text-purple-500 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          );
                        }
                      })}
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
