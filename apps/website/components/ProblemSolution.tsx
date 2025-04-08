"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  problemSolutionContent,
  brandColors,
  styleSettings,
  twClasses,
} from "@/config/content";

const ProblemSolution: React.FC = () => {
  const { problem, solution } = problemSolutionContent;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="problem-solution"
      className="py-20"
      ref={sectionRef}
      style={{ backgroundColor: brandColors.white }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Problem Section */}
          <motion.div
            className={`p-8 ${styleSettings.borderRadius} border ${twClasses.borderWhite} shadow-sm hover:shadow-md transition-shadow duration-300`}
            style={{
              backgroundColor: brandColors.white,
              boxShadow: styleSettings.defaultShadow,
            }}
            variants={cardVariants}
          >
            <h2 className="text-3xl font-bold text-venditio-navy mb-4 text-left">
              {problem.title}
            </h2>
            <p className="text-venditio-navy/80 mb-8 text-left">{problem.description}</p>

            <motion.div className="space-y-6" variants={containerVariants}>
              {problem.points.map((point, index) => (
                <motion.div
                  key={`problem-${index}`}
                  className="flex items-start"
                  variants={itemVariants}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-venditio-blue/20 text-venditio-navy w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="font-semibold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-venditio-navy text-left">
                      {point.title}
                    </h3>
                    <p className="text-venditio-navy/70 text-left">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            className={`p-8 ${styleSettings.borderRadius} shadow-lg text-white hover:shadow-xl transition-shadow duration-300`}
            style={{
              backgroundColor: brandColors.navyBlue,
              boxShadow: styleSettings.deepShadow,
            }}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-left">{solution.title}</h2>
            <p className="text-white/90 mb-8 text-left">{solution.description}</p>

            <motion.div className="space-y-6" variants={containerVariants}>
              {solution.points.map((point, index) => (
                <motion.div
                  key={`solution-${index}`}
                  className="flex items-start"
                  variants={itemVariants}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-white/20 text-white w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="font-semibold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-left">{point.title}</h3>
                    <p className="text-white/80 text-left">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
