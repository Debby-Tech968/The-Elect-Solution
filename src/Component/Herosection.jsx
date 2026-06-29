import React from "react";
import bgimage from "../assets/bgimage.png";
import computerImage from "../assets/computerimg.png";
import arrowicon from "../assets/arrowicon.png";
import Btn from "./Btn";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

const Herosection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgimage})` }}
      className="bg-cover bg-center min-h-screen flex items-center pt-20"
    >
      <Wrapper>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-10 xl:px-10 md:py-16 lg:py-20">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-xs md:text-sm lg:text-base font-bold text-[#964900] tracking-wide">
              PRECISION TECH ENGINEERING
            </p>

            <h1 className="mt-4 font-extrabold text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] leading-tight text-[#002B5A]">
              Your One-Stop <br /> Tech Hub!
            </h1>

            <p className="mt-5 text-sm md:text-base lg:text-lg text-[#475569] max-w-xl mx-auto lg:mx-0">
              Experience architectural precision in digital engineering. From
              high-performance hardware to enterprise network solutions, we
              build the foundations of your success.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start items-center lg:items-start">
              <Link
                to="/services"
                className="w-full sm:w-auto flex justify-center"
              >
                <Btn
                  text="Explore Services"
                  icon={arrowicon}
                  className="w-full sm:w-auto flex items-center justify-center bg-[#004182] text-white px-6 py-3 rounded-md"
                />
              </Link>

              <Link
                to="/portfolio"
                className="w-full sm:w-auto flex justify-center"
              >
                <Btn
                  text="Our Portfolio"
                  className="w-full sm:w-auto flex items-center justify-center bg-white text-[#002B5A] px-6 py-3 rounded-md border border-[#002B5A]"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          {/* RIGHT IMAGE */}
          <div className="w-full xl:ml-0 -ml-10 lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
            <img
              src={computerImage}
              alt="computer"
              className="
      w-100
      sm:w-95
      md:w-115
      lg:w-130
      xl:w-150
      max-w-full
      h-auto
      object-contain
      mx-auto
    "
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Herosection;
