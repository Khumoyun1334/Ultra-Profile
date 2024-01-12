import { IoIosMenu } from "react-icons/io";
import React, { useEffect, useState } from "react";

import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300; // 20 o'rniga o'zgartiring
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div>
      <div
        className={`${
          scrolled ? "top-0" : " top-[-80px]"
        } "flex fixed  bg-white w-full h-[70px] z-50 transition-all duration-500 md:justify-between xl:gap-0 xl:justify-between  md:gap-0 flex xl:px-[180px]  items-center shadow-md lg:px-[50px] border md:px-[20px] "`}
      >
        <div className="flex items-start">
          <p className="text-[23px] md:text-[30px] font-semibold pl-[10px] md:pl-0 lg:pl-0 xl:pl-0">
            Ultra Profile
          </p>
        </div>
        <div className=" gap-[40px] md:gap-[30px] md:flex hidden ">
          <p className="font-semibold text-[13px] uppercase">Home</p>
          <p className="font-semibold text-[13px] uppercase">My Work</p>
          <p className="font-semibold text-[13px] uppercase">Portfolio</p>
          <p className="font-semibold text-[13px] uppercase">Resume</p>
          <p className="font-semibold text-[13px] uppercase">About</p>
          <p className="font-semibold text-[13px] uppercase">Contact</p>
        </div>
        <div className="md:hidden flex">
          <div
            className="duration-300 transition-all pl-[120px] md:pl-0 lg:pl-0 xl:pl-0"
            onClick={() => {
              setOpen(!open);
              setMenu(!menu);
            }}
          >
            {menu ? (
              <button>
                <IoIosMenu color="#D34B20" fontSize={"30px"} />
              </button>
            ) : (
              <button
                onClick={() => {
                  setMenu(false);
                }}
              >
                <IoIosMenu color="#D34B20" fontSize={"30px"} />
              </button>
            )}
          </div>
        </div>
        <div className="mt-[-40px]">
          <div
            className={`w-full   ${
              open ? "h-[200px]" : "h-0"
            } overflow-hidden bg-white top-0 mt-[48px] w-full left-0 z-50 absolute duration-300 transition-all flex flex-col items-center gap-5 `}
          >
            <p className="font-semibold font-mono uppercase">Home</p>
            <p className="font-semibold font-mono uppercase">My Work</p>
            <p className="font-semibold font-mono uppercase">Portfolio</p>
            <p className="font-semibold font-mono uppercase">Resume</p>
            <p className="font-semibold font-mono uppercase">About</p>
            <p className="font-semibold font-mono uppercase">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
