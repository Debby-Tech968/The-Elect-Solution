import React from "react";
import image from "../assets/mixer.png";
import Btn from "./Btn";
import imageicon from "../assets/earphone.png";
import arrowicon from "../assets/arrowicon.png";
import Backgroundimage from "../assets/Background.png";
import earthimage from "../assets/earth.png"
import imageBox from "../assets/Box.png"
import imageBox2 from "../assets/Box2.png"
import Footer from "./Footer";

const Services = () => {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <div className="w-full min-h-screen bg-[#F3F3F9] pt-28 px-6 xl:px-16 lg:px-5 flex items-center">
        <div className="max-w-4xl">
          <h2 className="text-[12px] font-bold bg-[#FFDCC6] text-black w-fit px-3 py-1 rounded">
            ENGINEERING EXCELLENCE
          </h2>

          <h1 className="text-4xl lg:text-[60px] font-extrabold mt-6 text-[#002B5A] leading-tight">
            Architectural Precision in Digital Solutions.
          </h1>

          <p className="max-w-2xl mt-6 text-gray-600 text-lg leading-relaxed">
            From high-performance hardware to intelligent security
            infrastructure, we design the systems that power your future.
          </p>
        </div>
      </div>

      {/* ================= SERVICE SECTION ================= */}
      <div className="bg-white py-20 px-6 xl:px-16 lg:px-5">
        {/* WRAPPER */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* CARD 1 */}
          <div
            className="flex-2 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-lg rounded-2xl p-10 bg-white hover:scale-105
      transition-all
      duration-300"
          >
            {/* TEXT */}
            <div>
              <h2 className="text-xs font-bold bg-[#FFDCC6] text-black w-fit px-3 py-1 rounded">
                PREMIUM HARDWARE
              </h2>

              <h1 className="text-3xl lg:text-4xl font-extrabold text-[#002B5A] mt-4">
                Laptop & Smartphone Sales
              </h1>

              <p className="text-gray-600 mt-5 max-w-lg">
                Experience uncompromised performance with our curated selection
                of high-end workstations and next-gen mobile devices built for
                speed.
              </p>
              <div className="flex gap-4 mt-8 flex-wrap">
                {/* SHOP NOW BUTTON */}
                <Btn
                  text="Shop Now"
                  className=" bg-[#FF8928] text-white px-7 py-3 rounded font-semibold shadow-md hover:bg-[#e67615] hover:scale-105 transition-all  duration-300 "
                />

                {/* VIEW CATALOG BUTTON */}
                <Btn
                  text="View Catalog"
                  icon={arrowicon}
                  className="
      border-2
      border-[#004080]
      text-[#004080]
      px-7
      py-3
      rounded
      font-semibold
      hover:bg-[#004080]
      hover:text-white
      hover:scale-105
      transition-all
      duration-300"
                />
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={image}
                alt="hardware"
                className="w-full max-w-sm object-contain"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex-1 bg-[#F3F3F9] lg:mt-20 xl:mt-0 h-86 rounded-2xl p-10 flex flex-col justify-between shadow-md hover:scale-105 transition-all duration-300">
            <div>
              <img src={imageicon} alt="" className="w-12 mb-6" />

              <h1 className="text-2xl font-bold text-[#002B5A]">
                Genuine Accessories
              </h1>

              <p className="text-gray-600 mt-4">
                High-quality accessories designed to help your devices perform
                at their peak.
              </p>
            </div>

            <div className="mt-8">
              <Btn text="Explore Accessories" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= CARD 3 SECTION ================= */}

      <div className="py-20 px-6 xl:px-16 lg:px-5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* ========= LEFT CARD ========= */}
          <div
            className="flex-1 bg-[#002B5A] rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300
      "
          >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={Backgroundimage}
                alt="CCTV Monitoring"
                className=" object-cover hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* TEXT */}
            <div className="mt-8">
              <h1 className="text-white text-3xl font-extrabold">
                CCTV & Monitoring
              </h1>

              <p className="text-gray-300 leading-relaxed mt-5">
                24/7 intelligent surveillance systems engineered for maximum
                protection, real-time monitoring, and seamless remote
                accessibility.
              </p>

              {/* BUTTON */}
              <div className="mt-8">
                <Btn
                  text="Secure Your Space"
                  className="bg-[#FF8928] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#e67718] hover:scale-105   transition-all   duration-300"
                />
              </div>
            </div>
          </div>

          {/* ========= RIGHT CARD ========= */}
          <div
            className="
        flex-[1.5]
        lg:h-100
        xl:h-80
        h-80
        bg-white
        rounded-3xl
        p-8
        shadow-xl
        flex
        flex-col
        lg:flex-row
        items-center
        gap-10
        hover:-translate-y-2
        transition-all
        duration-300
      "
          >
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={earthimage}
                alt="Automation "
                className="h-90 object-contain"
              />
            </div>

            {/* TEXT */}
            <div>
              <h1 className="text-4xl font-extrabold text-[#002B5A] leading-tight">
                Smart Automation Systems
              </h1>

              <p className="text-gray-600 leading-relaxed mt-5">
                Bespoke IoT ecosystems engineered to synchronize your
                environment with your lifestyle — intelligent, seamless, and
                fully connected.
              </p>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#FF8928]"></div>
                  <p className="text-[#002B5A] font-semibold">
                    Intelligent Lighting Control
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#FF8928]"></div>
                  <p className="text-[#002B5A] font-semibold">
                    Voice-Integrated Ecosystems
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* <div className="w-3 h-3 rounded-full bg-[#FF8928]"></div> */}
                  {/* <p className="text-[#002B5A] font-semibold">
                    Automated Climate & Security
                  </p> */}
                </div>
              </div>

              {/* BUTTON */}
              {/* <div className="mt-10">
                <Btn
                  text="Explore Automation"
                  className="
              bg-[#002B5A]
              text-white
              px-7
              py-3
              rounded-full
              font-semibold
              hover:bg-[#001938]
              hover:scale-105
              transition-all
              duration-300
            "
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-15">
        {/* ================= Card 1 ================= */}
        <div className="flex-1 bg-[#F3F3F9] p-8 rounded-2xl shadow-md border-l-4 border-[#002B5A] hover:scale-105 transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold text-[#002B5A]">
              Expert Repairs
            </h1>
            <img src={imageBox} alt="repairs icon" />
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Component-level precision repairs for smartphones, laptops, and
            technical gear. We restore functionality with factory-grade parts.
          </p>

          <Btn text="Book a diagnostic" />
        </div>

        {/* ================= Card 2 ================= */}
        <div className="flex-1 bg-[#F3F3F9] p-8  rounded-2xl shadow-md border-l-4 border-[#0A7A3D] hover:scale-105 transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold text-[#0A7A3D]">
              Electrical Installation
            </h1>
            <img src={imageBox2} alt="installation icon" />
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Industrial and residential electrical engineering. Certified
            installations that meet the highest safety standards.
          </p>

          <Btn text="Request installation" />
        </div>
      </div>

      <div className="px-6 xl:px-16 lg:px-5 py-12">
        <div className="bg-[#002B5A] max-w-7xl mx-auto rounded-3xl px-6 py-10 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-10 text-white shadow-xl hover:-translate-y-2 transition-all duration-300">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Need a custom <br /> technical plan?
            </h1>

            <p className="text-base lg:text-lg text-[#A9C7FF] mt-4 leading-relaxed max-w-2xl">
              Our engineers are ready to architect your bespoke digital or
              electrical infrastructure. Let's build your vision.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:items-center md:justify-center sm:flex-row gap-4 w-full xl:w-auto">
            <Btn
              text="Get a consultant"
              className="bg-[#FF8928] flex justify-center text-black px-8 py-4 rounded-lg text-center hover:scale-105 transition-all duration-300"
            />

            <Btn
              text="Contact Us"
              className="bg-[#004182] flex justify-center text-white px-8 py-4 rounded-lg border border-[#004182] text-center hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <Footer className="mt-0 lg:mt-10" />
    </div>
  );
};

export default Services;
