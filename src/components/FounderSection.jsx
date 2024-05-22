import React from "react";
import founder from "../assets/MAIN_IMAGE.jpg";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
// import bg from '../assets/background.png';

const FounderSection = () => {
  return (
    <div
      className="py-20"
      //   style={{
      //     backgroundImage: `url(${bg})`,
      //     backgroundRepeat: 'repeat',
      //   }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Meet Our Founder
        </h2>
        <div className="w-8/12 mx-auto flex flex-col items-center">
          <img
            src={founder}
            alt="Founder"
            className="w-[100%] sm:w-[75%] md:w-[50%] h-auto rounded-3xl mb-6"
          />
          <h3 className="text-3xl text-center font-bold text-gray-800">
            Mr. Bhavik Ghuntala & Mrs. Madhavi Ghuntala
          </h3>
          <p className="text-xl text-gray-500 mb-4">Founder & CEO</p>
          <p className="text-center text-lg text-gray-600 leading-relaxed">
            Mr. Bhavik Ghuntala & Mrs. Madhavi Ghuntala has over 6 years of
            experience in early childhood education. Her passion for nurturing
            young minds and creating a safe, engaging environment for children
            has driven her to establish our institution. Under her leadership,
            we strive to provide the highest quality of care and education for
            children of all ages.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 flex flex-col space-y-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-[#ffefd5] p-8 rounded-lg shadow-lg">
          <div className="lg:w-1/2 order-2 lg:order-1 mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold text-[#ff69b4]">Our Vision</h2>
            <p className="text-lg text-gray-700 mt-4 text-justify">
              To provide a happy, caring, and stimulating environment where
              students recognize and achieve their fullest potential so that
              they can make their best contributions to society. To be committed
              to educational excellence for all and fulfill the aims that
              contribute to the cultural, social, and economic lives of our most
              valuable treasure: students.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={vision}
              alt="Vision"
              className="w-40 h-40 lg:w-60 lg:h-60 rounded-full shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:justify-between bg-[#e0ffff] p-8 rounded-lg shadow-lg">
          <div className="lg:w-1/2 order-2 lg:order-1 mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold text-[#20b2aa]">Our Mission</h2>
            <p className="text-lg text-gray-700 mt-4 text-justify">
              To impact education that enables students to apply the values,
              skills, and intellectual discipline they have acquired in their
              professional careers. We aspire that every student of Active
              imbibes the "I can do it" & "Nothing is impossible" attitude,
              which would lead to their goals being achieved and their dreams
              turning into realities.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-start">
            <img
              src={mission}
              alt="Mission"
              className="w-40 h-40 lg:w-60 lg:h-60 rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
