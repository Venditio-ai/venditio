"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqContent, brandColors, styleSettings, twClasses } from '@/config/content';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  toggleAccordion: (index: number) => void;
}

const FAQItem = ({ question, answer, index, isOpen, toggleAccordion }: FAQItemProps) => {
  return (
    <motion.div 
      className="border-b overflow-hidden"
      style={{ borderColor: `${brandColors.navyBlue}1a` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        style={{ 
          transition: `all ${styleSettings.transitionSpeed} ease-in-out`
        }}
        onClick={() => toggleAccordion(index)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium" style={{ color: brandColors.navyBlue }}>{question}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center w-6 h-6"
          style={{ color: brandColors.navyBlue }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 pb-5" style={{ color: `${brandColors.navyBlue}cc` }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ items from content configuration
  const faqItems = faqContent.items;

  return (
    <section id="faq" className="relative py-16 md:py-20" 
      style={{ 
        background: `linear-gradient(to bottom, ${brandColors.white}, ${brandColors.lightGray})` 
      }}>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brandColors.navyBlue }}>
            {faqContent.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `${brandColors.navyBlue}b3` }}>
            {faqContent.subtitle}
          </p>
        </motion.div>

        <div className="rounded-xl shadow-lg border overflow-hidden" style={{ 
          backgroundColor: brandColors.white,
          borderColor: `${brandColors.navyBlue}1a`,
          borderWidth: styleSettings.borderWidth,
          boxShadow: styleSettings.defaultShadow
        }}>
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
              isOpen={openIndex === index}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
