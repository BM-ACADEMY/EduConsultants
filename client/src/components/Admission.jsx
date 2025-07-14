import React, { useEffect, useState } from "react";
import { X, GraduationCap, Target, Phone, Mail } from "lucide-react";

export default function Admissionmodal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Open after 3s on mount
    const openTimer = setTimeout(() => setShowModal(true), 3000);
    return () => {
      clearTimeout(openTimer);
    };
  }, []);

  const closeModal = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-xl overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-300 hover:text-gray-400"
              onClick={closeModal}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="max-w-5xl mx-auto p-px rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-500/30">
              <div className="flex flex-col items-center justify-center text-center py-12 md:py-16 rounded-[15px] bg-gradient-to-b from-[#4C0083] to-[#180047]">

                {/* Badge */}
                <div className="flex items-center justify-center bg-white px-3 py-1.5 shadow gap-2 rounded-full text-xs">
                  <GraduationCap className="w-4 h-4 text-purple-600" />
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-medium">
                    Admissions Open for 2026 | Apply Now
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl md:text-4xl font-semibold mt-4 leading-snug text-white flex items-center justify-center gap-2">
                  {/* <Target className="w-6 h-6 text-blue-500" /> */}
                Your Career Starts with the Right Guidance
                </h2>

                {/* Description */}
                <p className="text-gray-300 mt-3 max-w-xl px-4">
                  Whether you’re dreaming of <strong>MBBS abroad</strong> or planning to pursue <strong>Arts, Science, or Engineering in India</strong>, we are here to make it happen — affordably and transparently.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                  <button
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm px-5 py-2.5 rounded-xl font-medium hover:scale-105 active:scale-95 transition-all duration-300"
                    onClick={() => window.open('tel:+911234567890')}
                  >
                    <Phone className="w-4 h-4" />
                    Book Free Counseling
                  </button>
                  <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-5 py-2.5 rounded-xl font-medium hover:scale-105 active:scale-95 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                    Apply for 2026
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
