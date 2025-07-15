import React from "react";
import { motion } from "framer-motion";
import { Plane, GraduationCap, Landmark, Globe } from "lucide-react";

const services = [
  {
    icon: <Plane className="w-10 h-10 text-red-500" />,
    title: "Study MBBS Abroad",
    description:
      "MBBS admissions in Kyrgyzstan & Georgia made simple since 2018.",
  },
  {
    icon: <Landmark className="w-10 h-10 text-red-500" />,
    title: "Top Colleges in India",
    description: "Assistance to join prestigious institutions across India.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-red-500" />,
    title: "Course & Stream Guidance",
    description: "Get personalized stream and career counseling from experts.",
  },
  {
    icon: <Globe className="w-10 h-10 text-red-500" />,
    title: "Visa & Travel Support",
    description: "End-to-end help with student visa and travel documentation.",
  },
];

const WhoWeAre = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-black to-[#000000e1] py-20 px-6 md:px-12 lg:px-24"
      id="about"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10 mix-blend-overlay"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-300 mb-10"
        >
          Who We <span className="text-yellow-400">Are</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          EduConsultants, a proud division of ABM GROUPS, Pondicherry, has been
          empowering students since 2018. We’ve guided hundreds from Tamil Nadu,
          Kerala, Karnataka, and North India to achieve their academic dreams
          with confidence.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-red-100"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.4 + index * 0.2,
              }}
            >
              <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
