import React, { useEffect } from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

const Footer = () => {
  useEffect(() => {
    document.getElementById("year").textContent = new Date().getFullYear();
  }, []);

  return (
    <footer
      className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-black to-[#000000e1]"
      id="contact"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        {/* Left Column: Logo + About + Social */}
        <div className="flex-1 min-w-[200px] md:min-w-[250px]">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              ABM
            </span>
            <span className="text-2xl font-bold text-yellow-400 tracking-tight">
              GROUPS
            </span>
          </a>
          <p className="max-w-sm mt-6 text-gray-300 text-sm md:text-base">
            EduConsultants, a trusted division of ABM GROUPS, has guided 100s of
            students across India since 2018 in securing admissions to top
            institutions in India and abroad.
          </p>

          {/* Social Icons */}
          <div className="mt-6">
            <h3 className="font-semibold text-base text-gray-300 mb-3">
              Follow Us
            </h3>
            <ul className="flex gap-4 text-lg">
              <li>
                <a
                  href="https://www.instagram.com/bmacademypondy/"
                  target="_blank"
                >
                  <Instagram
                    size={20}
                    className="text-white hover:text-yellow-400 transition"
                  />
                </a>
              </li>
              <li>
                <a href="https://x.com/BMACADEMYPONDY" target="_blank">
                  <Twitter
                    size={20}
                    className="text-white hover:text-yellow-400 transition"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/BM-Academy/61566753898165/"
                  target="_blank"
                >
                  <Facebook
                    size={20}
                    className="text-white hover:text-yellow-400 transition"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@bmacademypondy"
                  target="_blank"
                >
                  <Youtube
                    size={20}
                    className="text-white hover:text-yellow-400 transition"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Quick Links + Contact Info */}
        <div className="flex flex-col md:flex-row justify-between w-full md:w-[65%] gap-6 md:gap-10">
          {/* Quick Links */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-semibold text-base text-gray-300 mb-3 md:mb-5">
              Quick Links
            </h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <a href="#home" className="hover:underline transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline transition">
                  About
                </a>
              </li>
              <li>
                <a href="#admission" className="hover:underline transition">
                  Admission
                </a>
              </li>
              <li>
                <a href="#review" className="hover:underline transition">
                  Review
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex-1 min-w-[220px]">
            <h3 className="font-semibold text-base text-gray-300 mb-3 md:mb-5">
              Contact Us
            </h3>
            <ul className="text-sm text-gray-400 space-y-3">
              <li className="group flex items-start gap-2">
                <MapPin
                  size={16}
                  className="text-white group-hover:text-yellow-400 transition mt-1"
                />
                <span className="group-hover:text-yellow-400 transition">
                  252, MG Road, Kottakuppam, Pondicherry – 605104
                </span>
              </li>

              <li className="group flex items-center gap-2">
                <Phone
                  size={16}
                  className="text-white group-hover:text-yellow-400 transition"
                />
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="group-hover:text-yellow-400 transition"
                >
                  +91 XXXXX XXXXX
                </a>
              </li>

              <li className="group flex items-center gap-2">
                <Mail
                  size={16}
                  className="text-white group-hover:text-yellow-400 transition"
                />
                <a
                  href="mailto:edu@abmgroups.org"
                  className="group-hover:text-yellow-400 transition"
                >
                  edu@abmgroups.org
                </a>
              </li>

              <li className="group flex items-center gap-2">
                <Globe
                  size={16}
                  className="text-white group-hover:text-yellow-400 transition"
                />
                <a
                  href="https://www.abmgroups.org/educonsultants"
                  target="_blank"
                  className="group-hover:text-yellow-400 transition"
                >
                  abmgroups.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        © <span id="year"></span>{" "}
        <a
          href="https://abmgroups.org/"
          target="_blank"
          className="hover:underline text-yellow-400"
        >
          ABM GROUPS
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
