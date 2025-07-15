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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function CollegeAdmissionSupport() {
  return (
    <section className="w-full px-4 py-16 bg-gradient-to-t from-black to-[#000000e1] text-white" id="admission">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center space-y-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl font-extrabold flex justify-center items-center gap-3 text-white"
          >
            <GraduationCap className="w-8 h-8 text-indigo-400" />
            College Admission Support – Pan India
          </motion.h2>
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-lg md:text-xl text-gray-300"
          >
            Simplify Your UG & PG Admissions Journey
          </motion.p>
          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-base text-gray-400 max-w-3xl mx-auto"
          >
            Secure your spot in premier colleges across Tamil Nadu, Karnataka, Maharashtra, Kerala, Andhra Pradesh, and beyond — with expert guidance and transparent support.
          </motion.p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Supported Courses */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="bg-white text-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center gap-3">
              <ScrollText className="w-6 h-6 text-indigo-600" />
              Supported Courses
            </h3>
            <ul className="space-y-4">
              {[
                "B.Com / BBA / B.Sc / BCA",
                "B.E / B.Tech / M.Tech",
                "Nursing / Paramedical / Pharmacy",
                "MBA / MCA / M.Sc / M.Com",
              ].map((course, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <CheckCircle className="text-indigo-500 w-5 h-5" />
                  {course}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="bg-white text-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-indigo-600" />
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                "Career & Stream Counseling",
                "College Recommendation (Budget & Marks)",
                "Spot Admission for Select Colleges",
                "Hostel / PG Arrangements",
                "Scholarship Guidance (Where Available)",
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <CheckCircle className="text-indigo-500 w-5 h-5" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Call-to-Action */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="text-center bg-indigo-100 rounded-xl py-6 px-6 shadow-lg"
        >
          <p className="text-xl text-indigo-800 font-semibold flex justify-center items-center gap-3">
            <MapPin className="w-6 h-6 text-indigo-700" />
            Choose the right course, right college, and right path — with expert guidance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
