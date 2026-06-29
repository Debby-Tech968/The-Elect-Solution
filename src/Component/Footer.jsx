import React from "react";
import instagramIcon from "../assets/instagram.png";
import whatsappIcon from "../assets/whatsapp.png";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`bg-[#002B5A] text-white px-6 xl:px-16 lg:px-5 py-20 ${className}`}
    >
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        {/* BRAND */}
        <div className="max-w-sm">
          <h2 className="text-2xl font-bold mb-4 tracking-wide">
            TheElect Solutions
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm">
            We design and deliver intelligent digital infrastructure that powers
            modern businesses with performance, security, and innovation.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 uppercase mb-4">
            Company
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 uppercase mb-4">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Laptop Sales</li>
            <li>IT Support</li>
            <li>Software Installation</li>
            <li>Network Solutions</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 uppercase mb-4">
            Contact
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Lagos, Nigeria <br />
            support@theelect.com <br />
            +234 800 000 0000
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">
          © 2026 TheElect Solutions. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/2347031539179"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-[#1f2937] transition"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/ugly_shii_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-[#1f2937] transition"
          >
            <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
