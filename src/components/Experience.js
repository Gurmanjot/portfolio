import React from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { isMobile } from "../utils/isMobile";
import SectionHeader from "./ui/SectionHeader";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Mobile Developer",
      company: "JISR",
      period: "03/2024 - Present",
      location: "Remote (Ontario, Canada)",
      tags: [
        "React Native",
        "React",
        "TypeScript",
        "WebSockets",
        "Bitrise",
        "Redux",
        "React Query",
      ],
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
      tags: [
        "React Native",
        "React",
        "Jest",
        "TypeScript",
        "iOS",
        "Android",
      ],
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
          { text: "Optimized app startup and " },
          { text: "reduced load time by 2.5 seconds", highlight: true },
          {
            text: " through bundle optimization, rendering improvements and efficient API handling.",
          },
        ],
        [
          { text: "Mentored " },
          { text: "4 junior developers", highlight: true },
          {
            text: ", raising team productivity and code quality through React Native and TypeScript best practices.",
          },
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
      company: "GeekyAnts",
      period: "06/2020 - 09/2021",
      location: "Bangalore, India",
      tags: ["React Native", "Design System", "iOS", "Sentry", "Firebase"],
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
          { text: "Refactored the iOS UI of an " },
          { text: "eSports gaming app", highlight: true },
          { text: " serving " },
          { text: "130,000 daily active users", highlight: true },
          { text: ", improving maintainability and performance." },
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
          { text: "Increased " },
          { text: "crash-free sessions to 99%", highlight: true },
          { text: " by proactively fixing issues reported via Sentry and Firebase." },
        ],
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "GeekyAnts",
      period: "02/2019 - 05/2020",
      location: "Bangalore, India",
      tags: ["React Native", "React", "Reanimated", "Lottie"],
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
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const renderSegments = (achievement, idx) => {
    if (!Array.isArray(achievement)) {
      const text =
        typeof achievement === "object" ? achievement.text : achievement;
      return (
        <li
          key={idx}
          className="text-slate-600 dark:text-slate-400 text-[15px] flex items-start gap-2.5 leading-relaxed"
        >
          <span className="text-accent-500 mt-2 text-[6px]">●</span>
          <span>{text}</span>
        </li>
      );
    }
    return (
      <li
        key={idx}
        className="text-slate-600 dark:text-slate-400 text-[15px] flex items-start gap-2.5 leading-relaxed"
      >
        <span className="text-accent-500 mt-2 text-[6px]">●</span>
        <span>
          {achievement.map((segment, segIdx) => {
            if (segment.link) {
              return (
                <a
                  key={segIdx}
                  href={segment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium text-accent-600 dark:text-accent-400 hover:text-accent-500 transition-colors"
                >
                  {segment.text}
                </a>
              );
            }
            return (
              <span
                key={segIdx}
                className={
                  segment.highlight
                    ? "font-semibold text-slate-900 dark:text-slate-100"
                    : ""
                }
              >
                {segment.text}
              </span>
            );
          })}
        </span>
      </li>
    );
  };

  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-slate-900/30 transition-colors"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader
          eyebrow="// experience"
          title="Where I've worked"
          subtitle="7+ years shipping cross-platform products across fintech, HR and gaming."
        />

        <motion.div
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          className="relative pl-6 md:pl-8"
        >
          {/* Timeline rail */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Node */}
                <span className="absolute -left-[26px] md:-left-[34px] top-1.5 h-3 w-3 rounded-full bg-accent-500 ring-4 ring-white dark:ring-[#080c14]" />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {exp.title}
                  </h3>
                  <span className="text-accent-600 dark:text-accent-400 font-semibold">
                    @ {exp.company}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <FaCalendar className="text-[11px]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-[11px]" />
                    {exp.location}
                  </span>
                </div>

                {exp.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="space-y-2">
                  {exp.achievements.map((a, idx) => renderSegments(a, idx))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
