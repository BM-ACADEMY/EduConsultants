import React, { useEffect, useRef, useState } from "react";
import { X, GraduationCap, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdmissionModal() {
  const [showModal, setShowModal] = useState(false);
  const backdropRef = useRef(null);

  useEffect(() => {
    const openTimer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(openTimer);
  }, []);

  const closeModal = () => setShowModal(false);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          ref={backdropRef}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Border Container */}
            <div className="p-px bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl">
              <div className="bg-gradient-to-b from-[#4C0083] to-[#180047] rounded-[15px] py-12 md:py-16 text-center text-white">

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  aria-label="Close Modal"
                  className="absolute top-3 right-3 text-white hover:text-gray-200 transition"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Badge */}
                <div className="inline-flex items-center bg-white text-xs font-medium gap-2 px-3 py-1.5 rounded-full text-purple-700 shadow mb-4">
                  <GraduationCap className="w-4 h-4" />
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-semibold">
                    Admissions Open for 2026 | Apply Now
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-bold leading-snug px-4">
                  Your Career Starts with the Right Guidance
                </h2>

                {/* Description */}
                <p className="text-gray-200 mt-3 max-w-xl mx-auto px-4 text-sm md:text-base">
                  Whether you're dreaming of <strong>MBBS abroad</strong> or pursuing <strong>Arts, Science, or Engineering in India</strong>, we’ll help make it happen — affordably and transparently.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center px-4">
                  <button
                    onClick={() => window.open('tel:+911234567890')}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm px-5 py-2.5 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
                  >
                    <Phone className="w-4 h-4" />
                    Book Free Counseling
                  </button>

                  <button
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-5 py-2.5 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
                  >
                    <Mail className="w-4 h-4" />
                    Apply for 2026
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
