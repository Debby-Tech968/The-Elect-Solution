import React from 'react'
import imagecontainer from "../assets/Container2.png";
import burrimage from "../assets/Burr.png";
import Card from './Card';
import imageair from "../assets/Iconair.png";
import background1 from "../assets/Background1.png";
import background2 from "../assets/Background2.png";
import background3 from "../assets/Background3.png";
import Btn from './Btn';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <div className="relative w-full min-h-screen">
        {/* BACKGROUND IMAGE */}
        <img
          src={imagecontainer}
          alt="Container2"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="px-6 xl:px-16 lg:px-5 w-full max-w-5xl">
            {/* TAG */}
            <h2 className="text-xs md:text-sm font-bold bg-[#FFDCC6] text-black w-fit px-3 py-1 rounded">
              ENGINEERING EXCELLENCE
            </h2>

            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mt-6 text-white leading-tight">
              Architecting the <span className="text-amber-500">Future</span>
              <br className="hidden md:block" />
              of Digital Infrastructure
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl">
              From high-performance hardware to intelligent security
              infrastructure, we design the systems that power your future.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-16 xl:px-16 lg:px-5 flex flex-col lg:flex-row gap-25 lg:gap-20 items-center">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={burrimage}
            alt="Burr"
            className="w-full max-w-sm md:max-w-md lg:max-w-full h-auto object-cover shadow-xl rounded-lg"
          />
        </div>

        {/* TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
          <h2 className="text-sm font-bold text-[#964900]">WHO WE ARE</h2>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002B5A] mt-4 leading-tight">
            A legacy of structural integrity <br className="hidden lg:block" />
            in a digital world.
          </h1>

          <p className="text-[#424750] text-base md:text-lg mt-5 leading-relaxed">
            Founded on the principles of architectural rigor, TheElect Solutions
            doesn't just build software; we engineer resilient ecosystems. We
            bridge the gap between abstract innovation and concrete technical
            execution.
          </p>

          <p className="text-[#424750] text-base md:text-lg mt-6 leading-relaxed">
            Our team consists of veteran systems architects and visionary
            engineers who believe that every line of code is a structural
            element in a larger masterpiece.
          </p>
        </div>
      </div>
      
      
      <div className="bg-[#F3F3F9] w-full py-16 px-6  lg:px-5 xl:px-16">
        {/* MISSION / VISION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* MISSION CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">
            <img src={imageair} alt="mission" className="w-10 mb-4" />

            <h1 className="text-2xl font-bold text-[#002B5A]">Our Mission</h1>

            <p className="text-gray-600 mt-4 leading-relaxed">
              To empower global enterprises through fault-tolerant, scalable,
              and architecturally superior digital solutions that redefine
              industry standards.
            </p>

            <hr className="w-16 mt-6 border-[#FF8928]" />
          </div>

          {/* VISION CARD */}
          <div className="bg-[#002B5A] p-8 rounded-3xl shadow-lg hover:scale-105 transition">
            <h1 className="text-2xl font-bold text-white">Our Vision</h1>

            <p className="text-[#A9C7FF] mt-4 leading-relaxed">
              To become the definitive global authority in digital architecture,
              where precision engineering meets boundless creativity.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <div className="bg-[#E2E2E8] p-8 text-center rounded-lg shadow hover:scale-105 transition">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002B5A]">
              99%
            </h1>
            <p className="text-sm font-bold text-[#964900] mt-2">
              UPTIME INTEGRITY
            </p>
          </div>

          <div className="bg-[#E2E2E8] p-8 text-center rounded-lg shadow hover:scale-105 transition">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002B5A]">
              500+
            </h1>
            <p className="text-sm font-bold text-[#964900] mt-2">
              ARCHITECTED SYSTEMS
            </p>
          </div>

          <div className="bg-[#E2E2E8] p-8 text-center rounded-lg shadow hover:scale-105 transition">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002B5A]">
              24/7
            </h1>
            <p className="text-sm font-bold text-[#964900] mt-2">
              ELITE SUPPORT
            </p>
          </div>
        </div>
      </div>
      


      <div className="px-6 py-16 xl:px-16 lg:px-5">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-[#964900] font-semibold tracking-widest text-xs md:text-sm">
            THE CORE TEAM
          </h2>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002B5A] mt-3">
            Meet the Experts
          </h1>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* CARD 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img
              src={background1}
              alt="Marcus Thorne"
              className="w-full h-64 sm:h-72 lg:h-80 object-cover"
            />

            <div className="p-6">
              <h1 className="text-[#002B5A] font-bold text-xl md:text-2xl">
                Marcus Thorne
              </h1>

              <h2 className="text-xs md:text-sm text-[#964900] font-semibold mt-2">
                CHIEF SYSTEMS ARCHITECT
              </h2>

              <p className="text-sm md:text-base text-[#424750] mt-4 leading-relaxed">
                20+ years of experience in distributed systems and
                infrastructure resilience.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img
              src={background2}
              alt="Elena Rodriguez"
              className="w-full h-64 sm:h-72 lg:h-80 object-cover"
            />

            <div className="p-6">
              <h1 className="text-[#002B5A] font-bold text-xl md:text-2xl">
                Elena Rodriguez
              </h1>

              <h2 className="text-xs md:text-sm text-[#964900] font-semibold mt-2">
                HEAD OF DIGITAL STRATEGY
              </h2>

              <p className="text-sm md:text-base text-[#424750] mt-4 leading-relaxed">
                Visionary leader specializing in digital transformation and
                cloud-native ecosystems.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <img
              src={background3}
              alt="Julian Vance"
              className="w-full h-64 sm:h-72 lg:h-80 object-cover"
            />

            <div className="p-6">
              <h1 className="text-[#002B5A] font-bold text-xl md:text-2xl">
                Julian Vance
              </h1>

              <h2 className="text-xs md:text-sm text-[#964900] font-semibold mt-2">
                LEAD SECURITY ENGINEER
              </h2>

              <p className="text-sm md:text-base text-[#424750] mt-4 leading-relaxed">
                Expert in cryptographic protocols and high-security
                architectural frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
      


      <div className="bg-[#F3F3F9] w-full py-16 px-6 lg:px-5 xl:px-16">
        {/* MISSION / VISION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* MISSION CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">
            <img src={imageair} alt="mission" className="w-10 mb-4" />

            <h1 className="text-2xl font-bold text-[#002B5A]">Our Mission</h1>

            <p className="text-gray-600 mt-4 leading-relaxed">
              To empower global enterprises through fault-tolerant, scalable,
              and architecturally superior digital solutions that redefine
              industry standards.
            </p>

            <hr className="w-16 mt-6 border-[#FF8928]" />
          </div>

          {/* VISION CARD */}
          <div className="bg-[#002B5A] p-8 rounded-3xl shadow-lg hover:scale-105 transition">
            <h1 className="text-2xl font-bold text-white">Our Vision</h1>

            <p className="text-[#A9C7FF] mt-4 leading-relaxed">
              To become the definitive global authority in digital architecture,
              where precision engineering meets boundless creativity.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <div className="bg-[#E2E2E8] p-8 text-center rounded-lg shadow hover:scale-105 transition">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002B5A]">
              99%
            </h1>
            <p className="text-sm font-bold text-[#964900] mt-2">
              UPTIME INTEGRITY
            </p>
          </div>

          <div className="bg-[#E2E2E8] p-8 text-center rounded-lg shadow hover:scale-105 transition">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002B5A]">
              500+
            </h1>
            <p className="text-sm font-bold text-[#964900] mt-2">
              ARCHITECTED SYSTEMS
            </p>
          </div>

          <div className="bg-[#E2E2E8] p-8 text-center rounded-lg shadow hover:scale-105 transition">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002B5A]">
              24/7
            </h1>
            <p className="text-sm font-bold text-[#964900] mt-2">
              ELITE SUPPORT
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About