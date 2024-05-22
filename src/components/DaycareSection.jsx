import React from "react";

const DaycareSection = () => {

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 p-8">
      <h2 className="text-4xl font-bold font-platypi text-white mb-4 text-center">
        Daycare
      </h2>
      <q className="text-lg font-semibold stroke-2 stroke-cyan-200 font-sedan leading-6 tracking-wide mb-6">
        A Mother's Heart, a Teacher's Touch
      </q>

      <div className="mb-6 text-center text-white">
        <ul className="flex flex-wrap sm:flex-unwrap justify-center gap-4">
          <li className="px-4 py-2 bg-white text-purple-600 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-purple-600 hover:text-white">
            Full Time Day Care
          </li>
          <li className="px-4 py-2 bg-white text-purple-600 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-purple-600 hover:text-white">
            After School Care
          </li>
          <li className="px-4 py-2 bg-white text-purple-600 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-purple-600 hover:text-white">
            Hourly Care
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* LEFT BOX  */}
        <div
          className={`w-full md:w-[26rem] h-60 m-4 p-10 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105`}
          style={{
            background: "linear-gradient(to bottom right, #f9ca24, #f0932b)",
          }}
        >
          <p className="text-xl font-platypi font-semibold mb-2 text-yellow-800">
            Full Day Care
          </p>
          <ul className="list-disc list-inside text-yellow-800 font-serif leading-relaxed">
            <li>9 Months to 5 years</li>
            <li>7:30 AM to 6:30 PM</li>
            <li>Nurturing Care & Learning Environment</li>
            <li>Advanced School Readiness Program for 3 to 5 Year Old</li>
          </ul>
        </div>
        {/* RIGHT BOX  */}
        <div
          className={`w-full md:w-[26rem] h-60 m-4 p-10 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 `}
          style={{
            background: "linear-gradient(to bottom right, #badc58, #2ecc71)",
          }}
        >
          <p className="text-xl font-platypi font-semibold mb-2 text-green-800">
            After School Care
          </p>
          <ul className="list-disc list-inside text-green-800 font-serif leading-relaxed">
            <li>Service for 5 to 12 Years</li>
            <li>School Pick Up</li>
            <li>Assistance For the School Homework</li>
            <li>Physical Activities & Games</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DaycareSection;
