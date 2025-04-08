"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  aboutUsContent,
  brandColors,
  styleSettings,
  twClasses,
} from "@/config/content";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imgSrc: string;
  linkedIn?: string;
  twitter?: string;
  delay: number;
}

const TeamMember = ({
  name,
  title,
  bio,
  imgSrc,
  linkedIn,
  twitter,
  delay,
}: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      className="rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition-shadow mx-auto max-w-md"
      style={{
        backgroundColor: brandColors.white,
        borderColor: `${brandColors.navyBlue}1a`,
        borderWidth: styleSettings.borderWidth,
        transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
      }}
    >
      <div className="aspect-w-1 aspect-h-1 w-full h-80 relative bg-gray-100 overflow-hidden">
        <Image
          src={imgSrc}
          alt={name}
          width={500}
          height={500}
          priority
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-10">
        <h3
          className="font-bold text-2xl mb-4"
          style={{ color: brandColors.navyBlue }}
        >
          {name}
        </h3>
        <p className="font-medium mb-6" style={{ color: brandColors.navyBlue }}>
          {title}
        </p>
        <p
          className="text-base mb-8"
          style={{ color: `${brandColors.navyBlue}b3` }}
        >
          {bio}
        </p>
        <div className="flex space-x-6">
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{
                color: brandColors.navyBlue,
                transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
              }}
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.064-.926-2.064-2.065 0-1.138.92-2.063 2.064-2.063 1.14 0 2.064.925 2.064 2.065 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{
                color: brandColors.navyBlue,
                transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
              }}
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const AboutUs = () => {
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

  // Map team members from content configuration and add delay
  const teamMembers = aboutUsContent.teamMembers.map((member, index) => ({
    ...member,
    delay: index * 0.1,
  }));

  return (
    <section
      id="about-us"
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
            {aboutUsContent.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: `${brandColors.navyBlue}b3` }}
          >
            {aboutUsContent.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0 max-w-full overflow-hidden">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              bio={member.bio}
              imgSrc={member.imgSrc}
              linkedIn={member.linkedIn}
              delay={member.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
