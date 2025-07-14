import React from "react";
import {
  GraduationCap,
  Landmark,
  CheckCircle,
  MapPin,
  School,
  ScrollText,
  Users,
  BadgePercent,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CollegeAdmissionSupport() {
  return (
    <section className="w-full px-4 py-12 bg-gradient-to-t from-black to-[#000000e1]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-center text-gray-300 mb-10 flex items-center justify-center gap-3"
          >
            <GraduationCap className="w-8 h-8 text-gray-300" />
            <span>College Admission Support – Pan India</span>
          </motion.h2>
          <p className="text-xl text-gray-400 font-medium">
            Simplify Your UG & PG Admissions Journey
          </p>
          <p className="text-base text-gray-400 max-w-3xl mx-auto">
            Secure your spot in premier colleges across Tamil Nadu, Karnataka,
            Maharashtra, Kerala, Andhra Pradesh, and beyond with expert
            guidance.
          </p>
        </div>

        {/* Courses We Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center gap-3">
              <ScrollText className="w-6 h-6 text-indigo-600" />
              Supported Courses
            </h3>
            <ul className="grid grid-cols-1 gap-4 text-gray-700">
              {[
                "B.Com / BBA / B.Sc / BCA",
                "B.E / B.Tech / M.Tech",
                "Nursing / Paramedical / Pharmacy",
                "MBA / MCA / M.Sc / M.Com",
              ].map((course, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-indigo-500 w-5 h-5" />
                  <span className="text-lg">{course}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-indigo-600" />
              Our Services
            </h3>
            <ul className="space-y-4 text-gray-700">
              {[
                "Career & Stream Counseling",
                "College Recommendation (Budget & Marks)",
                "Spot Admission for Select Colleges",
                "Hostel / PG Arrangements",
                "Scholarship Guidance (Where Available)",
              ].map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-indigo-500 w-5 h-5" />
                  <span className="text-lg">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Note */}
        <div className="text-center bg-indigo-100 rounded-xl py-6 px-4">
          <p className="text-xl text-indigo-800 font-semibold flex justify-center items-center gap-3">
            <MapPin className="w-6 h-6 text-indigo-600" />
            Your Path to the Right Course and College Starts Here
          </p>
        </div>
      </div>
    </section>
  );
}
