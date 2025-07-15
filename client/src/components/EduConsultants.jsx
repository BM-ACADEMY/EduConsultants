import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";


export default function EduConsultants() {
  const points = [
    "100+ Abroad Admissions Handled",
    "500+ Students Guided for Indian Colleges",
    "100% Transparent Process – No Hidden Charges",
    "MSME Certified | ABM GROUPS Division",
    "Serving Students Across Tamil Nadu, Kerala, AP, Maharashtra, Delhi & More",
    "Free Counseling Available via Call or WhatsApp",
  ];

  return (
    <section className="w-full px-4 py-16 bg-gradient-to-b from-black to-[#000000e1]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-300 mb-10"
        >
           Why Choose <span className="text-yellow-400">EduConsultants?</span>
        </motion.h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
              <span className="text-gray-700 text-base font-medium">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
