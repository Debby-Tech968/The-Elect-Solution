import React from "react";
import Footer from "./Footer";
import Btn from "./Btn";

const GetStarted = () => {
  return (
    <div className="w-full bg-[#F3F3F9]">
      {/* HERO SECTION */}
      <div className="px-6 xl:px-16 lg:px-5 pt-28 pb-10">
        <h2 className="text-xs lg:mt-10 font-bold bg-[#FFDCC6] text-black w-fit px-3 py-1 rounded">
          GET STARTED
        </h2>

        <h1 className="text-4xl lg:text-5xl font-extrabold mt-6 text-[#002B5A]">
          Tell Us What You Want to Build
        </h1>

        <p className="mt-5 text-gray-600 max-w-2xl text-lg">
          Our engineering team will respond within 24 hours with a tailored
          solution for your project needs.
        </p>
      </div>

      {/* FORM SECTION */}
      <div className="px-6 xl:px-16 lg:px-5 pb-20">
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
          <form
            action="https://formspree.io/f/xgoqlgvl"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Full Name */}
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="p-4 border rounded-lg outline-none focus:ring-2 focus:ring-[#002B5A]"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-4 border rounded-lg outline-none focus:ring-2 focus:ring-[#002B5A]"
              required
            />

            {/* Phone */}
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="p-4 border rounded-lg outline-none focus:ring-2 focus:ring-[#002B5A]"
              required
            />

            {/* Service */}
            <select
              name="service"
              className="p-4 border rounded-lg outline-none focus:ring-2 focus:ring-[#002B5A]"
              required
            >
              <option value="">Choose Service</option>
              <option value="Smart Automation">Smart Automation</option>
              <option value="CCTV System">CCTV System</option>
              <option value="Electrical Installation">
                Electrical Installation
              </option>
              <option value="Device Sales">Device Sales</option>
              <option value="Repairs">Repairs</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Project Description"
              className="p-4 border rounded-lg outline-none md:col-span-2 h-40 focus:ring-2 focus:ring-[#002B5A]"
              required
            ></textarea>

            {/* BUTTON + WHATSAPP */}
            <div className="md:col-span-2 flex justify-between items-center flex-wrap gap-4">
              {/* Submit Button */}
              <Btn
                text="Submit Request"
                type="submit"
                className="bg-[#FF8928] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
              />

              {/* WhatsApp */}
              <a
                href="https://wa.me/2347031539179?text=Hello%20The%20Elect%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                className="text-[#002B5A] font-semibold underline hover:text-[#FF8928] transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* TRUST SECTION */}
      <div className="px-6 xl:px-16 lg:px-5 pb-20">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition">
            <h2 className="font-bold text-[#002B5A]">Fast Response</h2>
            <p className="text-gray-600 mt-2">Reply within 24 hours</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition">
            <h2 className="font-bold text-[#002B5A]">Expert Engineers</h2>
            <p className="text-gray-600 mt-2">
              Professional technical solutions
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition">
            <h2 className="font-bold text-[#002B5A]">Secure Systems</h2>
            <p className="text-gray-600 mt-2">
              Reliable and scalable infrastructure
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GetStarted;
