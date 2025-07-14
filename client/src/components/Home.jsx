import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  MapPin,
  Plane,
  BookOpen,
  GraduationCap,
  Backpack,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeNavbar = () => setMenuOpen(false);
  const openNavbar = () => setMenuOpen(true);

  // Animation variants
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center bg-black text-white text-sm pb-16 pt-16 min-h-[90vh] bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-4.svg')] bg-center bg-cover font-poppins overflow-hidden">
      {/* Floating Animated Icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-[10%] left-[5%] opacity-40"
          animate={{ x: [0, 20, 0], y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Plane className="w-8 h-8 text-grey-600" />
        </motion.div>
        <motion.div
          className="absolute top-[20%] left-[90%] opacity-20"
          animate={{ x: [0, 20, 0], y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Backpack className="w-8 h-8 text-grey-600" />
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] right-[10%] opacity-30"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <BookOpen className="w-10 h-10 text-grey-600" />
        </motion.div>

        <motion.div
          className="absolute top-[40%] left-[80%] opacity-20"
          animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <GraduationCap className="w-9 h-9 text-grey-600" />
        </motion.div>

        {/* NEW ICON: Backpack - Left Middle */}
        <motion.div
          className="absolute top-[50%] left-[5%] opacity-30"
          animate={{ y: [0, -10, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Backpack className="w-9 h-9 text-grey-600" />
        </motion.div>

        {/* NEW ICON: Globe - Bottom Left */}
        <motion.div
          className="absolute bottom-[10%] left-[10%] opacity-20"
          animate={{ y: [0, 12, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <Globe className="w-10 h-10 text-grey-600" />
        </motion.div>
      </div>

      {/* Navbar */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="show"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 border-b border-white/25 bg-black/70 backdrop-blur md:px-16 lg:px-24 xl:px-32 w-full"
      >
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            ABM
          </span>
          <span className="text-2xl font-bold text-yellow-400 tracking-tight">
            GROUPS
          </span>
        </a>

        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-slate-300">
            <a href="#">Products</a>
          </li>
          <li className="hover:text-slate-300">
            <a href="#">Customer Stories</a>
          </li>
          <li className="hover:text-slate-300">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-slate-300">
            <a href="#">Docs</a>
          </li>
        </ul>

        <button
          onClick={openNavbar}
          className={`md:hidden z-50 transition-opacity ${
            menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Menu className="w-7 h-7" />
        </button>
      </motion.nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={closeNavbar}
        />
      )}

      {/* Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs z-50 bg-black/90 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeNavbar}
            className="text-white hover:text-gray-300"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
        <ul className="flex flex-col items-start gap-6 px-6 py-4 text-lg font-medium">
          <li onClick={closeNavbar}>
            <a href="#" className="hover:text-slate-300">
              Products
            </a>
          </li>
          <li onClick={closeNavbar}>
            <a href="#" className="hover:text-slate-300">
              Customer Stories
            </a>
          </li>
          <li onClick={closeNavbar}>
            <a href="#" className="hover:text-slate-300">
              Pricing
            </a>
          </li>
          <li onClick={closeNavbar}>
            <a href="#" className="hover:text-slate-300">
              Docs
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4"
        variants={textContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h1
          variants={textItem}
          className="text-4xl md:text-6xl font-semibold max-w-3xl bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text"
        >
          Edsion uConsultants – Study Abroad & College AdmisExperts
        </motion.h1>

        <motion.p
          variants={textItem}
          className="text-slate-300 md:text-base mt-3 max-w-md"
        >
          Helping You Join the Right College – In India or Abroad
        </motion.p>

        <motion.p
          variants={textItem}
          className="text-slate-400 mt-2 text-sm md:text-base flex items-center justify-center gap-2"
        >
          <MapPin className="w-5 h-5 text-yellow-400" />
          Headquartered in Pondicherry | Supporting Students Across India
        </motion.p>

        <motion.div
          variants={textItem}
          className="flex items-center gap-3 mt-8 text-sm"
        >
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 transition rounded-full font-semibold">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white/10 border border-white/15 rounded-full px-6 py-3 text-white hover:bg-white/20 transition">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
