import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../assets/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-auto bg-red-300">
      <div className="w-11/12 mx-auto flex items-center justify-between ">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" width={150} height={100} />
          <div className="menu-item flex-wrap lg:flex-unwrap mx-8 xl:mx-20 items-center font-platypi font-medium gap-x-6 xl:gap-x-10 gap-y-2 hidden md:flex">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="menu-item cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="courses"
              smooth={true}
              duration={500}
              className="menu-item cursor-pointer"
            >
              Courses
            </Link>
            <Link
              to="daycare"
              smooth={true}
              duration={500}
              className="menu-item cursor-pointer"
            >
              Daycare
            </Link>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              className="menu-item cursor-pointer"
            >
              Gallery
            </Link>
            <Link
              to="facilities"
              smooth={true}
              duration={500}
              className="menu-item cursor-pointer"
            >
              Facilities
            </Link>
            <Link
              to="founder"
              smooth={true}
              duration={500}
              className="menu-item cursor-pointer"
            >
              Founder
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <FaBars className="text-3xl cursor-pointer" onClick={toggleMenu} />
        </div>
        <div
          className={`md:hidden fixed inset-0 bg-gray-800 z-50 transition-opacity ${
            isMenuOpen ? "opacity-75" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`md:hidden fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <img src={Logo} alt="Logo" className="" />
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="menu-item block text-[#555] font-bold text-2xl mt-4 cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="courses"
              smooth={true}
              duration={500}
              className="menu-item block text-[#555] font-bold text-2xl mt-4 cursor-pointer"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link
              to="Daycare"
              smooth={true}
              duration={500}
              className="menu-item block text-[#555] font-bold text-2xl mt-4 cursor-pointer"
              onClick={toggleMenu}
            >
              Daycare Services
            </Link>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              className="menu-item block text-[#555] font-bold text-2xl mt-4 cursor-pointer"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              to="facilities"
              smooth={true}
              duration={500}
              className="menu-item block text-[#555] font-bold text-2xl mt-4 cursor-pointer"
              onClick={toggleMenu}
            >
              Facilities
            </Link>
            <Link
              to="founder"
              smooth={true}
              duration={500}
              className="menu-item block text-[#555] font-bold text-2xl mt-4 cursor-pointer"
              onClick={toggleMenu}
            >
              Meet Our Founder
            </Link>
            <hr className="w-full h-[2px] bg-black my-2"></hr>
            <div>
              <p
                className="font-bold text-4xl"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #0e0f38, #3c3e76, #0e0f38)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Enroll Now
              </p>
              <a
                href="tel:+919824251601"
                className="text-2xl text-[#222] font-bold"
              >
                +91 98242 51601
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block min-w-[155px]">
          <p
            className="font-bold font-platypi text-2xl "
            style={{
              backgroundImage:
                "linear-gradient(45deg, #0e0f38, #3c3e76, #0e0f38)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Enroll Now
          </p>
          <a
            href="tel:+919824251601"
            className="text-lg font-sans text-[#222] font-bold"
          >
            +91 98242 51601
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
