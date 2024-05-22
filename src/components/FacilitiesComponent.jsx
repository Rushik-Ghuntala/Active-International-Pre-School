import React from "react";
import drawingRoom from "../assets/drawingroom.png"; 
import musicRoom from "../assets/musicroom.png";
import computerLab from "../assets/computerlab.png";
import library from "../assets/library.png";
import smartClass from "../assets/smartclass.png";
import danceRoom from "../assets/danceroom.png";

const facilities = [
  { name: "Drawing Room", image: drawingRoom },
  { name: "Music Room", image: musicRoom },
  { name: "Computer Lab", image: computerLab },
  { name: "Library", image: library },
  { name: "Smart Class", image: smartClass },
  { name: "Dance Room", image: danceRoom },
];

const FacilitiesComponent = () => {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-pink-200 p-8 min-h-screen">
      <h2 className="text-4xl font-platypi font-extrabold text-white mb-8 text-center drop-shadow-md">
        Our Facilities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="relative p-4 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <p className="text-2xl font-bold text-center text-purple-700">
              {facility.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesComponent;
