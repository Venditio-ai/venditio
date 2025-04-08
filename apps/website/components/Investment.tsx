"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  investmentContent,
  brandColors,
  styleSettings,
  twClasses,
} from "@/config/content";

// Define the type for investment items
type InvestmentItem = {
  title: string;
  amount: string;
  description: string;
  investor: string;
  date: string;
}; // Import centralized configuration

interface InvestmentCardProps {
  title: string;
  amount: string;
  description: string;
  investor: string;
  date: string;
  index: number;
}

const InvestmentCard = ({
  title,
  amount,
  description,
  investor,
  date,
  index,
}: InvestmentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: styleSettings.hoverScale,
        boxShadow: styleSettings.hoverShadow,
        borderColor: brandColors.navyBlue,
      }}
      className={`${styleSettings.borderRadius} shadow-lg overflow-hidden border ${twClasses.borderWhite} hover:shadow-xl transition-shadow duration-300 flex flex-col h-full`}
      style={{
        backgroundColor: brandColors.white,
        boxShadow: styleSettings.defaultShadow,
        borderWidth: styleSettings.borderWidth,
        transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
      }}
    >
      <div
        className="p-6 border-b"
        style={{
          backgroundColor: `${brandColors.lightGray}`,
          borderColor: brandColors.navyBlue,
          borderWidth: styleSettings.borderWidth,
        }}
      >
        <h3
          className="font-bold text-xl mb-2"
          style={{ color: brandColors.navyBlue }}
        >
          {title}
        </h3>
        <div
          className="text-3xl font-bold"
          style={{ color: brandColors.navyBlue }}
        >
          {amount}
        </div>
      </div>
      <div className="p-6 flex-grow">
        <p className="mb-6" style={{ color: `${brandColors.navyBlue}cc` }}>
          {description}
        </p>
        <div className="mt-auto">
          <div
            className="text-sm font-medium"
            style={{ color: brandColors.navyBlue }}
          >
            {investor}
          </div>
          <div
            className="text-sm"
            style={{ color: `${brandColors.navyBlue}99` }}
          >
            {date}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Investment = () => {
  // Use configuration for content
  const { title, subtitle, resources } = investmentContent;
  // Cast the empty array to the correct type to satisfy TypeScript
  const investments = investmentContent.investments as InvestmentItem[];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      className="relative py-16 md:py-20"
      style={{
        background: `linear-gradient(to bottom, ${brandColors.white}, ${brandColors.lightGray})`,
      }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: brandColors.navyBlue }}
          >
            {title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: `${brandColors.navyBlue}cc` }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {investments.length > 0 ? (
            investments.map((investment, index) => (
              <InvestmentCard
                key={index}
                title={investment.title}
                amount={investment.amount}
                description={investment.description}
                investor={investment.investor}
                date={investment.date}
                index={index}
              />
            ))
          ) : (
            <p className="text-center w-full p-4">We are actively seeking investment opportunities. Please check our resources below.</p>
          )}
        </div> */}

        {/* Resources Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-6"
            style={{ color: brandColors.navyBlue }}
          >
            Resources
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2 mx-auto max-w-full overflow-hidden">
            {resources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                target="_blank"
                variants={itemVariants}
                className="inline-block px-6 py-3 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 font-medium"
                style={{
                  backgroundColor: brandColors.white,
                  borderColor: `${brandColors.navyBlue}33`,
                  borderWidth: styleSettings.borderWidth,
                  color: brandColors.navyBlue,
                  transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                }}
              >
                {resource.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Investment;
