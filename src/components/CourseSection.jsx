import React from "react";
import daycare from "../assets/daycare.png";
import playgroup from "../assets/playgroup.png";
import nursery from "../assets/nursery.png";
import junior from "../assets/junior.png";
import senior from "../assets/senior.png";

const CourseSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Courses
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* DAYCARE */}
          <div className="flex flex-col items-center w-44 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <img src={daycare} alt={"daycare"} height={220} width={220} />
            <div className="w-32 h-10 mt-3 bg-[#ff5757] text-white text-sm font-medium flex items-center justify-center rounded-full">
              1-12 YEARS
            </div>
            <p className="text-xl font-bold font-platypi text-[#5271ff] mt-2">
              Daycare
            </p>
          </div>

          {/* PLAYGROUP */}
          <div className="flex flex-col items-center w-44 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <img src={playgroup} alt={"playgroup"} height={220} width={220} />
            <div className="w-32 h-10 mt-3 bg-[#ff66c4] text-white text-sm font-medium flex items-center justify-center rounded-full">
              1.5-3 YEARS
            </div>
            <p className="text-xl font-bold font-platypi text-[#5271ff] mt-2">
              Playgroup
            </p>
          </div>

          {/* NURSERY */}
          <div className="flex flex-col items-center w-44 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <img src={nursery} alt={"nursery"} height={220} width={220} />
            <div className="w-32 h-10 mt-3 bg-[#cb6ce6] text-white text-sm font-medium flex items-center justify-center rounded-full">
              2.5-4 YEARS
            </div>
            <p className="text-xl font-bold font-platypi text-[#5271ff] mt-2">
              Nursery
            </p>
          </div>

          {/* JUNIOR */}
          <div className="flex flex-col items-center w-44 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <img src={junior} alt={"junior"} height={220} width={220} />
            <div className="w-32 h-10 mt-3 bg-[#8c52ff] text-white text-sm font-medium flex items-center justify-center rounded-full">
              3.5-5 YEARS
            </div>
            <p className="text-xl font-bold font-platypi text-[#5271ff] mt-2">
              Junior
            </p>
          </div>

          {/* SENIOR */}
          <div className="flex flex-col items-center w-44 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <img src={senior} alt={"senior"} height={220} width={220} />
            <div className="w-32 h-10 mt-3 bg-[#5e17eb] text-white text-sm font-medium flex items-center justify-center rounded-full">
              3.5-5 YEARS
            </div>
            <p className="text-xl font-bold font-platypi text-[#5271ff] mt-2">
              Senior
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
