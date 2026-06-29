import React from "react";
import image from "../assets/imagecontact.png";
import icon from "../assets/Icon10.png";
import icon2 from "../assets/Icon11.png";
import icon3 from "../assets/Icon12.png";
import Locationmap from "./Locationmap";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="bg-[#004182] h-200 lg:pt-20">
      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-112.5 sm:h-137.5 md:h-162.5 lg:h-180">
          <img
            src={image}
            alt="contact"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Hero Text */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 xl:px-16 lg:px-5 z-10">
            <div className="bg-[#FF8928] text-black text-xs md:text-sm font-bold px-4 py-2 rounded-full w-fit">
              CONNECT WITH EXCELLENCE
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-semibold text-white leading-tight">
              Let's build your{" "}
              <span className="text-[#FF8928]">
                digital <br />
                future
              </span>
            </h1>

            <p className="mt-6 text-sm md:text-base lg:text-lg text-[#D6E3FF] max-w-2xl">
              Our structural approach to digital engineering ensures your vision
              is translated into high-performance reality. Reach out today to
              start your architectural journey.
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <div className="relative z-20 px-6 xl:px-16 lg:px-5 -mt-20 lg:-mt-28">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            {/* Contact Card */}
            <div className="bg-[#002B5A] text-white p-6 lg:p-12 rounded-lg w-full lg:w-112.5 min-h-125">
              <h1 className="text-[30px] font-semibold">Contact Information</h1>

              <p className="text-[#A9C7FF] text-[16px] mt-4">
                Ready to scale? Our team is standing by to provide technical
                specifications and project blueprints.
              </p>

              <div className="mt-10 flex items-start gap-4">
                <img src={icon} alt="" className="w-6 h-6" />
                <p>+1 (123) 456-7890</p>
              </div>

              <div className="mt-8 flex items-start gap-4">
                <img src={icon2} alt="" className="w-6 h-6" />
                <p>info@theelect.solutions</p>
              </div>

              <div className="mt-8 flex items-start gap-4">
                <img src={icon3} alt="" className="w-6 h-6" />
                <p>123 Digital Ave, Tech City, USA</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10 w-full lg:w-162">
              <h1 className="text-3xl font-semibold text-[#002B5A]">
                Send Us a Message
              </h1>

              <p className="text-gray-600 mt-3 mb-8">
                We usually respond within 24 business hours with a preliminary
                assessment.
              </p>

              <form
                action="https://formspree.io/f/xgoqlgvl"
                method="POST"
                className="space-y-6"
              >
                {/* First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#FF8928]"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#FF8928]"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#FF8928]"
                    required
                  />
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#FF8928]"
                  >
                    <option value="">Select a Service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Electrical Engineering">
                      Electrical Engineering
                    </option>
                    <option value="Digital Infrastructure">
                      Digital Infrastructure
                    </option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows="6"
                    placeholder="Tell us about your project requirements..."
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#FF8928]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#004182] hover:bg-[#002B5A] w-70 lg:w-150 text-white font-semibold px-8 py-4 rounded-lg transition"
                >
                  Initialize Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full mt-12">
        <Locationmap className="rounded-none shadow-none" />
      </section>

      <Footer className="" />
    </div>
  );
};

export default Contact;
