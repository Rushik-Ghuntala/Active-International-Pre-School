import React from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const SuperBar = () => {
  return (
    <div className="hidden xl:flex bg-secondary w-full h-8 text-white relative">
      <div className="w-50 bg-primary transform -skew-x-[35deg] p-2 absolute top-0 bottom-0 left-[-20px] w-[35%]">
        <div className="flex items-center gap-2"></div>
      </div>
      <div className="w-11/12 mx-auto flex items-center gap-x-16">
        <div className="flex items-center  gap-x-16 pr-64">
          <div className="relative z-10 flex items-center gap-x-2">
            <FaLocationDot />
            <p>Ug-75, Raj harmony, Ugat Canal Rd, Adajan, Surat</p>
          </div>
          <div className="relative z-10 flex items-center gap-x-2 text-black">
            <MdEmail />
            <p>activeinternationalschool@gmail.com</p>
          </div>
        </div>
        <div className="text-black flex items-center gap-6">
          <div className="flex items-center gap-2">
            <PiPhoneCallFill />
            <p>+91 98242 51601</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://m.facebook.com/people/Active-International-Pre-School/61556019027174/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} />
            </a>
            <a
              href="https://www.instagram.com/active_international_preschool/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* 
        <div className='w-11/12 mx-auto py-2'>
            <div className='flex items-center gap-8'>
                <div className='flex items-center gap-2'>
                    <PiPhoneCallFill/>
                    <p>+91 98242 51601</p>
                </div>
                <div className='flex items-center gap-2'>
                    <MdEmail/>
                    <p>activeinternationalschool@gmail.com</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaLocationDot/>
                    <p>Ug-75, Raj harmony, Ugat Canal Rd, Adajan, Surat 395005</p>
                </div>
            </div>

            <div>

            </div>
        </div> 
        */}
    </div>
  );
};

export default SuperBar;
