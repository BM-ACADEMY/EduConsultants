// MBBSAbroad.jsx
import React, { useState } from "react";
import { PlaneTakeoff, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import EnquiryModal from "./EnquiryForm";

const destinations = [
  {
    country: "Kyrgyzstan",
    color: "bg-gradient-to-br from-[#ff8a8a] via-[#ff4e4e] to-[#ff0000]",
  },
  {
    country: "Georgia",
    color: "bg-gradient-to-br from-[#7f7fff] via-[#5050ff] to-[#2a2aff]",
  },
];



export default function MBBSAbroad() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="relative w-full px-6 py-16 bg-gradient-to-t from-black to-[#000000e1]  overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-4xl font-extrabold text-white mb-4"
        >
          🎓 MBBS Abroad – 2026 <span className="text-yellow-400">Intake Now Open</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-gray-300 mb-12 max-w-xl mx-auto"
        >
          Get globally recognized medical education in top countries like Kyrgyzstan and Georgia.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.country}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative p-6 rounded-3xl text-white shadow-2xl ${dest.color} backdrop-blur-md overflow-hidden flex flex-col justify-between`}
            >
              <div className="absolute right-4 top-4 opacity-20">
                <PlaneTakeoff className="w-24 h-24" />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">
                  {dest.country}
                </h3>
                <p className="text-sm text-white/90 mb-4">
                  Recognized Worldwide • Affordable Tuition
                </p>
                <button onClick={() => setShowModal(true)} className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-200 transition">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
            <EnquiryModal showModal={showModal} setShowModal={setShowModal} />

    </section>
  );
}
