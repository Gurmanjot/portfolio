import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaLinkedin, FaStar } from "react-icons/fa";
import { isMobile } from "../utils/isMobile";
import SectionHeader from "./ui/SectionHeader";

const Recommendations = () => {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  // Actual LinkedIn recommendations data
  const recommendations = [
    {
      id: 1,
      name: "Pranjul Sharma",
      position: "Web Solutions Engineer",
      company: "Google",
      relationship: "Pranjul worked with Gurmanjot Singh on the same team",
      image:
        "https://ui-avatars.com/api/?name=Pranjul+Sharma&background=6366f1&color=fff&size=150&rounded=true&bold=true",
      text: "I highly recommend Gurmanjot! I had the pleasure of working alongside him at GeekyAnts on several projects, and I was consistently impressed by his expertise in both mobile and web development. Gurmanjot has a remarkable ability to translate complex requirements into elegant and efficient code. He's not only adept at building robust web applications but also excels in creating seamless and intuitive mobile experiences. What truly stands out is his collaborative spirit and willingness to share knowledge, which made our team incredibly productive. Any team would be lucky to have him!",
      rating: 5,
      date: "July 6, 2025",
    },
    {
      id: 2,
      name: "Pawan Verma",
      position: "Senior Frontend",
      company: "KodeKloud || Ex-Razorpay",
      relationship:
        "Pawan was senior to Gurmanjot Singh but didn't manage Gurmanjot Singh directly",
      image:
        "https://ui-avatars.com/api/?name=Pawan+Verma&background=ec4899&color=fff&size=150&rounded=true&bold=true",
      text: "I've had the pleasure of working closely with Gurmanjot Singh across two different companies, first at GeekyAnts and later at Razorpay, and in both organizations, Gurman stood out as someone I could always rely on for consistently high-quality work and a positive attitude. Gurman is a highly skilled frontend and mobile developer with deep expertise in React and React Native. What stands out most is his ability to quickly pick up new concepts and technologies, he's incredibly self-driven and proactive when it comes to learning and staying updated with the latest trends. He has a knack for writing clean, efficient code, and his attention to detail is exceptional. Whether he's working on an individual project or collaborating with a team, Gurman always delivers and brings out the best in those around him. He's a true team player, happy to share knowledge and help others, while also being able to take ownership and drive initiatives independently. I'm confident that Gurmanjot will be a valuable asset to any team he joins and I highly recommend him.",
      rating: 5,
      date: "July 3, 2025",
    },
    {
      id: 3,
      name: "Shubhnik Singh",
      position: "Frontend",
      company: "Razorpay",
      relationship:
        "Shubhnik was senior to Gurmanjot Singh but didn't manage Gurmanjot Singh directly",
      image:
        "https://ui-avatars.com/api/?name=Shubhnik+Singh&background=10b981&color=fff&size=150&rounded=true&bold=true",
      text: "I worked with Gurman on a team building a critical, merchant-facing mobile app at Razorpay. He's a quick learner who onboarded swiftly and made meaningful contributions to key features. Gurman regularly participated in product and design discussions, often suggesting thoughtful and practical solutions. He's a dependable teammate, and I can confidently say that his work is consistently of high quality.",
      rating: 5,
      date: "June 30, 2025",
    },
    {
      id: 4,
      name: "Aromal Anil",
      position: "SDE II",
      company: "Coursera | Ex - Razorpay, Entri",
      relationship: "Aromal worked with Gurmanjot Singh on the same team",
      image:
        "https://ui-avatars.com/api/?name=Aromal+Anil&background=f59e0b&color=fff&size=150&rounded=true&bold=true",
      text: "I had the pleasure of working closely with Gurmanjot on Razorpay's Affordability team, and I wholeheartedly recommend him. Gurmanjot is a quick learner who effortlessly adapts to new environments, making him a valuable asset to any team. His clear communication skills ensure seamless collaboration, and I thoroughly enjoyed working alongside him. Gurmanjot's dedication and talent make him an invaluable addition to any organization.",
      rating: 5,
      date: "February 20, 2024",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-sm ${
          index < rating
            ? "text-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section
      id="recommendations"
      className="py-20 bg-white dark:bg-slate-900/40 transition-colors"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Recommendations"
          subtitle="What colleagues and clients say about working with me"
        />

        <motion.div
          variants={containerVariants}
          initial={isMobile() ? "visible" : "hidden"}
          whileInView={isMobile() ? undefined : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recommendations.map((recommendation) => (
            <motion.div
              key={recommendation.id}
              variants={cardVariants}
              className="bg-slate-50/80 dark:bg-slate-800/60 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/60 dark:border-slate-700/60 relative group"
              whileHover={isMobile() ? undefined : { scale: 1.02 }}
              whileTap={isMobile() ? undefined : { scale: 0.98 }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-purple-500/20 dark:text-purple-400/20 group-hover:text-purple-500/40 dark:group-hover:text-purple-400/40 transition-colors">
                <FaQuoteLeft className="text-2xl" />
              </div>

              {/* Profile section */}
              <div className="flex items-center mb-4">
                <img
                  src={recommendation.image}
                  alt={recommendation.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-500/20"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-base">
                    {recommendation.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {recommendation.position}
                  </p>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-bold">
                    {recommendation.company}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex mr-2">
                  {renderStars(recommendation.rating)}
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {recommendation.date}
                </span>
              </div>

              {/* Relationship */}
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 italic">
                {recommendation.relationship}
              </p>

              {/* Recommendation text */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {recommendation.text}
              </p>

              {/* LinkedIn indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                  <FaLinkedin className="mr-1 text-blue-600" />
                  <span>LinkedIn Recommendation</span>
                </div>
              </div>

              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={isMobile() ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Want to see more recommendations?
          </p>
          <a
            href="https://www.linkedin.com/in/gurmanjot-singh-randhawa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 group"
          >
            <FaLinkedin className="mr-2 group-hover:scale-110 transition-transform" />
            View Full LinkedIn Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
