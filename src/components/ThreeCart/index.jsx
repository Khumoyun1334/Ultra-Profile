import { AiOutlineDashboard } from "react-icons/ai";
import { MdFlashOn } from "react-icons/md";
import { HiOutlineLink } from "react-icons/hi";
import React from "react";

function ThreeCart() {
  return (
    <div>
      <div>
        <div className="flex gap-3 text-[60px] px-[20px] xl:px-[270px] mt-[140px] md:px-[30px] lg:px-[100px]">
          <span className="font-extralight">MY </span>
          <span className="font-bold">WORK</span>
        </div>

        <div className="md:grid md:grid-cols-3 grid grid-cols-1 xl:px-[180px] gap-7 mt-[30px] md:px-[30px] px-[20px]">
          <div className="border border-black py-[80px] px-[45px]">
            <div className="flex justify-center">
              <HiOutlineLink size={"60px"} color="gray" />
            </div>
            <div>
              <p className="text-[#eb5424] text-[20px] font-bold text-center mt-12">
                MOBILE UX
              </p>
              <p className="text-center mt-[80px] text-[16px] text-[#606060]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna.
              </p>
            </div>
          </div>
          <div className="border border-black py-[80px] px-[45px]">
            <div className="flex justify-center">
              <MdFlashOn size={"60px"} color="gray" />
            </div>
            <div>
              <p className="text-[#eb5424] text-[20px] font-bold text-center mt-12">
                WEB DESIGN
              </p>
              <p className="text-center md:mt-[80px] text-[16px] text-[#606060]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna.
              </p>
            </div>
          </div>
          <div className="border border-black py-[80px] px-[45px]">
            <div className="flex justify-center">
              <AiOutlineDashboard size={"60px"} color="gray" />
            </div>
            <div>
              <p className="text-[#eb5424] text-[20px] font-bold text-center mt-12">
                HTML TEMPLATES
              </p>
              <p className="text-center mt-[80px] text-[16px] text-[#606060]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeCart;
