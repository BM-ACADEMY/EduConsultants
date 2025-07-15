import React, { useState } from "react";
import {
  CheckCircle,
  Calendar,
  MessageSquareHeart,
  ClipboardPen,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import EnquiryModal from "./EnquiryForm"; // Make sure path is correct

const benefits = [
  "NMC/MCI Approved Universities",
  "English Medium | Indian-Friendly Campus",
  "Affordable Fees with 100% Guidance",
  "Indian Food, Hostel, & Student Community",
  "Visa + Flight + Local Support from Day One",
];

const universities = [
  "Kyrgyz State Medical Academy",
  "Osh State University",
  "Jalalabad State University",
  "International School of Medicine (ISM)",
];

export default function WhyAbroad() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="w-full px-6 py-16 bg-gradient-to-b from-black to-[#000000e1]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-300 mb-10"
        >
          🌍 Why Choose Abroad?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-500 w-6 h-6" />
              Key Benefits:
            </h3>
            <ul className="space-y-4 text-gray-800 text-base">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Universities */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-xl border border-indigo-100"
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Partner Universities
            </h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-800">
              {universities.map((uni, i) => (
                <li key={i}>{uni}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <div className="flex justify-center items-center gap-2 text-gray-300 text-base mb-6">
            <Calendar className="w-5 h-5" />
            <span>
              Now accepting pre-registrations for <strong>March–April 2026 intake</strong>
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition"
            >
              <ClipboardPen className="w-5 h-5" />
              Start Your Application
            </button>
            <button className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-medium shadow-sm hover:bg-gray-200 transition">
              <MessageSquareHeart className="w-5 h-5" />
              Talk to a Counselor
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal Render */}
      <EnquiryModal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
}
