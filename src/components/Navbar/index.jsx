import { IoIosMenu } from "react-icons/io";
import React, { useEffect, useState } from "react";

import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

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

  const [activeItem, setActiveItem] = useState("about");

  return (
    <div>
      <div
        className={`${
          scrolled ? "top-0" : " top-[-80px]"
        } "flex fixed  bg-white w-full h-[70px] justify-between z-50 transition-all duration-500 md:justify-between xl:gap-0  md:gap-0 flex  xl:px-[175px]  items-center shadow-md lg:px-[50px] border md:px-[20px] "`}
      >
        <div className="flex justify-between w-full">
          <div className="flex ">
            <p className="text-[23px] md:text-[30px] font-semibold pl-[10px] md:pl-0 lg:pl-0 xl:pl-0">
              Ultra Profile
            </p>
          </div>
          <div className=" gap-[40px]  md:gap-[30px] md:flex hidden ">
            <Link
              className="font-semibold mt-1 text-[13px] uppercase hover:text-[#eb5424] cursor-pointer"
              activeClass="active"
              spy
              to="home"
            >
              Home
            </Link>
            <Link
              className="font-semibold mt-1 text-[13px] uppercase  hover:text-[#eb5424] cursor-pointer"
              activeClass="active"
              spy
              to="mywork"
            >
              MyWork
            </Link>
            <Link
              className="font-semibold mt-1 text-[13px] uppercase hover:text-[#eb5424] cursor-pointer "
              activeClass="active"
              spy
              to="port"
            >
              Portfiolo
            </Link>
            <Link
              className="font-semibold mt-1 text-[13px] uppercase  hover:text-[#eb5424] cursor-pointer"
              activeClass="active"
              spy
              to="res"
            >
              Resume
            </Link>
            <Link
              className="font-semibold mt-1 text-[13px] uppercase  hover:text-[#eb5424] cursor-pointer"
              activeClass="active"
              spy
              to="about"
            >
              ABOUT
            </Link>
            <Link
              className="font-semibold mt-1 text-[13px] uppercase  hover:text-[#eb5424] cursor-pointer"
              activeClass="active"
              spy
              to="contact"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="md:hidden flex mr-[20px]">
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
              open ? "h-[240px]" : "h-0"
            } overflow-hidden bg-white top-0 mt-[70px] w-full left-0 z-50 absolute duration-300 transition-all flex flex-col items-start  gap-5 `}
          >
            <Link
              className="font-semibold mt-1 text-[13px] uppercase hover:text-[#eb5424] cursor-pointer ml-[15px]"
              activeClass="active"
              spy
              to="home"
            >
              Home
            </Link>
            <Link
              className="font-semibold mt-1 text-[13px] uppercase  hover:text-[#eb5424] cursor-pointer ml-[15px]"
              activeClass="active"
              spy
              to="mywork"
            >
              MyWork
            </Link>
            <Link
              className="font-semibold mt-1 text-[13px] uppercase hover:text-[#eb5424] cursor-pointer  ml-[15px]"
              activeClass="active"
              spy
              to="port"
            >
              Portfiolo
            </Link>
            <Link
              className="font-semibold mt-1 text-[13px] uppercase  hover:text-[#eb5424] cursor-pointer ml-[15px]"
              activeClass="active"
              spy
              to="res"
            >
              Resume
            </Link>
            <Link
              className="font-semibold mt-1 text-[13px] uppercase  hover:text-[#eb5424] cursor-pointer ml-[15px]"
              activeClass="active"
              spy
              to="about"
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
