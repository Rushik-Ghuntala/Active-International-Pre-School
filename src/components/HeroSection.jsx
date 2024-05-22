import React from "react";
import logo1 from "../assets/logo2.png";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-16 sm:px-18 lg:px-32 p-2 h-auto">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-start text-start space-y-4 font-sedan">
          <div className="flex flex-wrap sm:flex-unwrap flex-row md:flex-col items-center sm:items-start gap-4">
            <p className="text-5xl lg:text-7xl xl:text-9xl font-bold animated-gradient">
              Active
            </p>
            <p className="text-5xl lg:text-5xl xl:text-7xl font-bold animated-gradient">
              International
            </p>
          </div>
          <p className="text-5xl lg:text-6xl xl:text-8xl font-bold animated-gradient">
            Pre School
          </p>

          {/* TAG LINE  */}
          <p className="text-xl lg:text-2xl font-medium font-platypi text-black">
            <q>We Create A Smart Generation</q>
          </p>

          {/* TODO: Enroll Now Button from Motion 3D */}
        </div>

        <img
          src={logo1}
          alt={"logo"}
          className="w-72 lg:w-96 xl:w-[26rem] h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
