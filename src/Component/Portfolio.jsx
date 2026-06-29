import React from "react";
import Footer from "./Footer";
import Btn from "./Btn";

const Portfolio = () => {
  return (
    <div className="w-full bg-[#F3F3F9]">
      {/* HERO */}
      <div className="px-6 xl:px-16 lg:px-5 pt-28 pb-16">
        <h2 className="text-xs lg:mt-8  font-bold bg-[#FFDCC6] text-black w-fit px-3 py-1 rounded">
          OUR PORTFOLIO
        </h2>

        <h1 className="text-4xl lg:text-5xl font-extrabold mt-6 text-[#002B5A]">
          Engineering Real-World Digital & Electrical Systems
        </h1>

        <p className="mt-5 text-gray-600 max-w-2xl text-lg">
          A collection of real projects showcasing smart automation, security
          systems, device solutions, and electrical infrastructure design.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="px-6 xl:px-16 lg:px-5 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project 1 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:scale-105 transition">
          <h2 className="text-xl font-bold text-[#002B5A]">
            Smart Home Automation System
          </h2>
          <p className="text-gray-600 mt-3">
            IoT-powered system for controlling lighting, security, and devices
            remotely with a responsive dashboard.
          </p>

          <div className="mt-5 flex gap-2 flex-wrap">
            <span className="text-xs bg-[#E6F0FF] px-3 py-1 rounded">
              React
            </span>
            <span className="text-xs bg-[#E6F0FF] px-3 py-1 rounded">
              Tailwind
            </span>
            <span className="text-xs bg-[#E6F0FF] px-3 py-1 rounded">API</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:scale-105 transition">
          <h2 className="text-xl font-bold text-[#002B5A]">
            CCTV Monitoring Dashboard
          </h2>
          <p className="text-gray-600 mt-3">
            Real-time monitoring interface with camera grid layout and location
            tracking system.
          </p>

          <div className="mt-5 flex gap-2 flex-wrap">
            <span className="text-xs bg-[#E6F0FF] px-3 py-1 rounded">
              React
            </span>
            <span className="text-xs bg-[#E6F0FF] px-3 py-1 rounded">
              Leaflet
            </span>
            <span className="text-xs bg-[#E6F0FF] px-3 py-1 rounded">
              UI Design
            </span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:scale-105 transition">
          <h2 className="text-xl font-bold text-[#002B5A]">
            Electrical Installation System
          </h2>
          <p className="text-gray-600 mt-3">
            Booking and request system for electrical installation and
            maintenance services.
          </p>

          <div className="mt-5 flex gap-2 flex-wrap">
            <span className="text-xs bg-[#E6F0FF] px-3 py-1 rounded">
              React
            </span>
            <span className="text-xs bg-[#E6F0FF] px-3 py-1 rounded">
              Forms
            </span>
            <span className="text-xs bg-[#E6F0FF] px-3 py-1 rounded">UX</span>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:scale-105 transition">
          <h2 className="text-xl font-bold text-[#002B5A]">
            Device Sales E-commerce UI
          </h2>
          <p className="text-gray-600 mt-3">
            Modern product catalog for laptops, smartphones, and accessories
            with filtering system.
          </p>

          <div className="mt-5 flex gap-2 flex-wrap">
            <span className="text-xs bg-[#E6F0FF] px-3 py-1 rounded">
              React
            </span>
            <span className="text-xs bg-[#E6F0FF] px-3 py-1 rounded">
              Tailwind
            </span>
            <span className="text-xs bg-[#E6F0FF] px-3 py-1 rounded">
              UI/UX
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 xl:px-16 lg:px-5 pb-20">
        <div className="bg-[#002B5A] text-white rounded-3xl p-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <h1 className="text-3xl font-bold">Want a project like this?</h1>
            <p className="text-[#A9C7FF] mt-3">
              Let’s build your system from scratch with modern engineering.
            </p>
          </div>

          <Btn
            text="Get Started"
            className="bg-[#FF8928] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
