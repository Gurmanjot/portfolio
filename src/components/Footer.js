import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { isMobile } from "../utils/isMobile";
import { trackSocialClick, trackContactFormEvent } from "../utils/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/gurmanjot",
      color: "hover:text-gray-600",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/gurmanjot-singh-randhawa/",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      href: "mailto:randhawagurman@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Gurmanjot Singh Randhawa
            </h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Senior Frontend Developer passionate about creating exceptional
              user experiences and building scalable web applications.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-400 transition-colors duration-300 ${link.color}`}
                whileHover={isMobile() ? undefined : { scale: 1.15 }}
                whileTap={isMobile() ? undefined : { scale: 0.95 }}
                transition={{ duration: isMobile() ? 0 : 0.6 }}
                title={link.name}
                onClick={() => {
                  // Track social media clicks from footer
                  if (link.name === "Email") {
                    trackContactFormEvent("footer_email_click");
                  } else {
                    trackSocialClick(link.name, link.href);
                  }
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="border-t border-gray-700 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Gurmanjot Singh Randhawa. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center">
                Made with <FaHeart className="text-red-500 mx-1" /> using React
                & Tailwind CSS
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
