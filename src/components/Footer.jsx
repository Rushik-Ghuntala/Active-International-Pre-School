import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex flex-col sm:flex-row items-center">
          <img src={logo} alt="Logo" className="h-auto w-48 sm:w-40" />
          <div className="ml-4 mb-4">
            <p className="font-bold text-2xl font-platypi tracking-wider">
              Active International Pre School
            </p>
            <p className="text-md font-sedan tracking-wider">
              We Create A Smart Generations
            </p>
          </div>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://m.facebook.com/people/Active-International-Pre-School/61556019027174/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/active_international_preschool/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="w-10/12 mx-auto text-center md:text-left mt-6">
        <div className="text-start">
          <p className="font-bold text-lg mb-2 font-platypi">Branches:</p>
          <div className="flex flex-col space-y-2">
            <div className=" bg-emerald-500 text-black p-4 rounded-lg">
              <p className="font-semibold font-platypi">Head Office:</p>
              <p className="font-serif">Ug-75, Raj Harmony, Ugat Canal Rd,</p>
              <p className="font-serif">Prabhudarshan Society, Adajan,</p>
              <p className="font-serif">Surat, Gujarat 395005</p>
            </div>
            <div className=" bg-sky-500 text-black p-4 rounded-lg">
              <p className="font-semibold font-platypi">Second Branch:</p>
              <p className="font-serif">Amroli, New Kosad Road,</p>
              <p className="font-serif">Surat, Gujarat 394107</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 Active International Pre School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
