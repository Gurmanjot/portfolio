import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "randhawagurman@gmail.com",
      link: "mailto:randhawagurman@gmail.com",
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Brampton, Ontario, Canada",
      link: null,
    },
    {
      icon: <FaLinkedin />,
      title: "Linkedin",
      value: "https://www.linkedin.com/in/gurmanjot-singh-randhawa/",
      link: "https://www.linkedin.com/in/gurmanjot-singh-randhawa/",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "gurmanjot.github.io/portfolio/",
      link: "https://gurmanjot.github.io/portfolio/",
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
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
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8"
            >
              Let's Connect
            </motion.h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: window.innerWidth < 768 ? 0.3 : 0.6 }}
                >
                  <div className="text-purple-400 text-xl">{info.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6"
            >
              <h4 className="text-white font-bold text-lg mb-3">
                Available for:
              </h4>
              <ul className="text-purple-100 space-y-2">
                <li>• Full-time opportunities</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Side: Illustration and Message */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              {/* Modern SVG Illustration */}
              <svg
                width="220"
                height="220"
                viewBox="0 0 220 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="110" cy="110" r="100" fill="url(#paint0_linear)" />
                <ellipse
                  cx="110"
                  cy="150"
                  rx="60"
                  ry="20"
                  fill="#fff"
                  fillOpacity="0.15"
                />
                <circle cx="110" cy="90" r="45" fill="#fff" fillOpacity="0.9" />
                <circle cx="110" cy="90" r="30" fill="url(#paint1_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="10"
                    y1="10"
                    x2="210"
                    y2="210"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#a78bfa" />
                    <stop offset="1" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="80"
                    y1="60"
                    x2="140"
                    y2="120"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#a78bfa" />
                    <stop offset="1" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-4 text-center"
            >
              Let's Connect!
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 text-center max-w-xs"
            >
              Feel free to reach out via email or connect with me on LinkedIn or
              GitHub. I look forward to hearing from you!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
