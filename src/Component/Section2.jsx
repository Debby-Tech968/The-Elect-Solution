import React from "react";
import Card from "./Card";
import Btn from "./Btn";

import phoneicon from "../assets/phoneicon.png";
import arrowicon from "../assets/arrowicon.png";
import staricon from "../assets/staricon.png";
import monitoricon from "../assets/monitoricon.png";
import screwicon from "../assets/screwicon.png";
import ear from "../assets/ear.png";
import man from "../assets/man.png";
import Footer from "./Footer";

const Section2 = () => {
  const services = [
    {
      icon: monitoricon,
      title: "Laptop Sales",
      description:
        "High-performance workstations and laptops tailored for modern professionals and businesses.",
    },
    {
      icon: phoneicon,
      title: "Software Installation",
      description:
        "Fast, secure, and reliable installation of essential software and productivity tools.",
    },
    {
      icon: screwicon,
      title: "IT Support",
      description:
        "Professional technical support services designed to keep your systems running smoothly.",
    },
    {
      icon: staricon,
      title: "Network Solutions",
      description:
        "Secure and scalable networking infrastructure for growing businesses and teams.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* ================= HEADER + SERVICES ================= */}
      <div className="px-6 py-16 lg:px-20">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-14">
          <div>
            <p className="text-sm font-extrabold tracking-widest text-[#964900] uppercase mb-3">
              Our Expertise
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#002B5A] leading-tight">
              Our Precision Services
            </h1>
          </div>

          <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
            Engineered solutions tailored to the modern professional. We don't
            just sell technology — we architect your digital future with
            precision, performance, and innovation.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-bold text-[#002B5A] mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="flex items-center gap-2 mt-6 text-[#002B5A] font-semibold cursor-pointer group">
                <span>Learn More</span>

                <img
                  src={arrowicon}
                  alt="arrow"
                  className="w-4 h-4 group-hover:translate-x-1 transition"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* ================= TESTIMONIAL SECTION ================= */}
      <div className="bg-[#F4F5FA] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <img src={ear} alt="quote" className="w-12 h-12 mb-8" />

          <p className="text-2xl lg:text-3xl text-[#002B5A] font-medium leading-relaxed max-w-4xl">
            “TheElect Solutions didn’t just sell us hardware — they transformed
            our workflow with precision and technical mastery. Their networking
            solutions have completely changed how our global operations run.”
          </p>

          <div className="flex items-center gap-5 mt-12">
            <img
              src={man}
              alt="client"
              className="w-20 h-20 rounded-full object-cover"
            />

            <div className="text-left">
              <h3 className="text-lg font-bold text-[#002B5A]">John Doe</h3>

              <p className="text-gray-600">CEO, Tech Innovators Inc.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <div className="bg-[#F9F9FF] px-6 py-16 lg:px-20">
        <div className="bg-[#002B5A] rounded-[40px] p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-10 shadow-xl">
          {/* LEFT */}
          <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to upgrade your technology?
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Schedule a consultation with our digital architects today and
              discover how we can help transform your business with innovative
              technology solutions.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center">
            <Btn
              className="bg-[#FF8928] text-black py-4 px-8 rounded-lg font-bold hover:bg-[#e67e17] transition duration-300"
              text="Book a consultation"
            />

            <p className="text-sm text-gray-300 mt-4 tracking-wide">
              NO STRINGS ATTACHED
            </p>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default Section2;
