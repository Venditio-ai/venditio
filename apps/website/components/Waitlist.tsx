"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { supabase } from "../config/supabase";
import { brandColors, styleSettings, twClasses } from "@/config/content";

// Types for the form and Supabase responses
interface WaitlistFormData {
  full_name: string;
  email: string;
  industry: string;
  company: string;
  role: string;
}

const Waitlist: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<WaitlistFormData>({
    full_name: "",
    email: "",
    industry: "",
    company: "",
    role: "",
  });

  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Ref for section animation
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Industry options
  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Retail",
    "Marketing",
    "Real Estate",
    "Consulting",
    "Legal",
    "Non-profit",
    "Other",
  ];

  // Role options
  const roles = [
    "CEO",
    "CTO",
    "Sales Manager",
    "Marketing Manager",
    "Product Manager",
    "Customer Support",
    "Business Development",
    "Other",
  ];

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation - only full_name and email are required
    if (!formData.full_name || !formData.email) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Use the database function we created to bypass RLS
      const { data, error } = await supabase.rpc("add_waitlist_entry", {
        p_full_name: formData.full_name,
        p_email: formData.email,
        p_company: formData.company || null,
        p_role: formData.role || null,
        p_industry: formData.industry || null,
      });

      console.log("Waitlist submission response:", data);

      // Handle response from our custom function
      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      // Our function returns {success: boolean, data/message: ...}
      if (data && !data.success) {
        if (data.error_code === "23505") {
          setSubmitError(
            "This email is already on our waitlist. Thank you for your interest!"
          );
          return;
        }
        setSubmitError(
          data.message ||
            "There was an error submitting your information. Please try again."
        );
        return;
      }

      // Successful submission

      // Reset form and show success message
      setFormData({
        full_name: "",
        email: "",
        industry: "",
        company: "",
        role: "",
      });

      setSubmitSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting to waitlist:", error);
      setSubmitError(
        "There was an error submitting your information. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="py-20"
      style={{
        background: `linear-gradient(to bottom, ${brandColors.lightGray}, ${brandColors.white})`,
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: brandColors.navyBlue }}
          >
            Join Our Waitlist
          </h2>
          <p className="text-lg text-venditio-navy/70 max-w-2xl mx-auto">
            Be among the first to try Venditio AI when we launch. We'll notify
            you as soon as we're ready.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-venditio-navy mb-2">
                Thank You!
              </h3>
              <p className="text-venditio-navy/70">
                Your information has been submitted. We'll notify you when we
                launch!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-sm font-medium mb-1"
                  style={{ color: brandColors.navyBlue }}
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-transparent transition"
                  style={{
                    borderColor: brandColors.gray,
                    transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                  }}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                  style={{ color: brandColors.navyBlue }}
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-transparent transition"
                  style={{
                    borderColor: brandColors.gray,
                    transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                  }}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-1"
                  style={{ color: brandColors.navyBlue }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-transparent transition"
                  style={{
                    borderColor: brandColors.gray,
                    transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                  }}
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium mb-1"
                  style={{ color: brandColors.navyBlue }}
                >
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-transparent transition"
                  style={{
                    borderColor: brandColors.gray,
                    transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                  }}
                >
                  <option value="" disabled>
                    Select your industry
                  </option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium mb-1"
                  style={{ color: brandColors.navyBlue }}
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-transparent transition"
                  style={{
                    borderColor: brandColors.gray,
                    transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                  }}
                >
                  <option value="" disabled>
                    Select your role
                  </option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              {submitError && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {submitError}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-lg text-white font-medium hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  style={{
                    backgroundColor: brandColors.navyBlue,
                    transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                    boxShadow: styleSettings.defaultShadow,
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>
              </div>

              <p
                className="text-xs text-center mt-4"
                style={{ color: `${brandColors.navyBlue}99` }}
              >
                By joining our waitlist, you agree to receive updates about our
                product launch and related news.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;
