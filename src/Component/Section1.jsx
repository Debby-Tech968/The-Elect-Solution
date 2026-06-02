import React from "react";
import Card from "./Card";

const Section1 = () => {
  return (
    <div className="bg-[#F3F3F9] w-full py-10">
      <div className="flex gap-6 justify-center flex-wrap">
        {/* CARD 1 (combined content) */}
        <Card className="bg-[#002B5A] text-white p-6 rounded-3xl w-149 shadow-lg">
          <h1 className="text-xl font-bold text-white">Precision at Scale</h1>
          <p className="text-[#A9C7FF]">
            Delivering excellence across diverse technological <br /> landscapes
            for a decade.
          </p>

          <h1 className="text-3xl font-bold mt-6 text-white">10k+</h1>
          <p className="text-sm text-[#A9C7FF]">Successful Projects</p>
        </Card>

        {/* CARD 2 */}
        <Card className="bg-white text-black p-6 rounded-3xl w-64 shadow-md text-center">
          <h1 className="text-[48px] font-extrabold text-[#964900] mt-4">
            99%
          </h1>
          <p className="text-[14px] mt-2 text-[#424750] font-bold">UPTIME RATE</p>
        </Card>

        {/* CARD 3 */}
        <Card className="bg-[#FF8928] text-white p-6 rounded-3xl w-64 shadow-lg text-center">
          <h1 className="text-[48px] font-extrabold text-[#642F00] mt-4">
            24/7
          </h1>
          <p className="text-sm mt-2 text-[#642F00]">Support Response</p>
        </Card>
      </div>
    </div>
  );
};

export default Section1;
