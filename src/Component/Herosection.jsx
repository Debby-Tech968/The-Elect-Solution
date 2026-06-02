import React from "react";
import bgimage from "../assets/bgimage.png";
import computerImage from "../assets/computerimg.png";
import arrowicon from "../assets/arrowicon.png";
import Btn from "./Btn";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgimage})` }}
      className="min-h-screen bg-cover bg-center"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-24 gap-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-sm md:text-base font-bold text-[#964900]">
            PRECISION TECH ENGINEERING
          </h1>

          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-[72px] text-[#002B5A] leading-tight lg:leading-20 mt-4">
            Your One-Stop <br /> Tech Hub!
          </h2>

          <p className="text-base md:text-lg text-[#475569] mt-5">
            Experience architectural precision in digital engineering. From
            high-performance hardware to enterprise network solutions, we build
            the foundations of your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8  justify-center lg:justify-start">
            <Link to="/services">
              <Btn
                text="Explore Services"
                icon={arrowicon}
                className="bg-[#004182] text-white px-6 py-3 rounded-md"
              />
            </Link>

            <Link to="/portfolio">
              <Btn
                text="Our Portfolio"
                className="bg-white text-[#002B5A] px-6 py-3 rounded-md border border-[#002B5A]"
              />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full mt-15 mr-12 lg:w-1/2 flex justify-center">
          <img
            src={computerImage}
            alt="computer"
            className="w-full max-w-md lg:max-w-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
