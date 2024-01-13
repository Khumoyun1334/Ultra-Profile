import React, { useState } from "react";
// import "./style.css";
import QAsos from "../../images/portfolio-img1.jpg";
import QAsos2 from "../../images/portfolio-img2.jpg";
import QAsos3 from "../../images/portfolio-img3.jpg";
import QAsos4 from "../../images/portfolio-img4.jpg";
import QAsos5 from "../../images/portfolio-img5.jpg";
import QAsos6 from "../../images/portfolio-img6.jpg";
import QAsos7 from "../../images/portfolio-img7.jpg";
import QAsos8 from "../../images/portfolio-img8.jpg";
import CartStyle from "./CartStyle";

const data = [
  {
    img: QAsos,
    status: "Html",
  },
  {
    img: QAsos2,
    status: "Html",
  },
  {
    img: QAsos3,
    status: "Html",
  },
  {
    img: QAsos4,
    status: "Photo",
  },
  {
    img: QAsos5,
    status: "Photo",
  },
  {
    img: QAsos6,
    status: "Word",
  },
  {
    img: QAsos7,
    status: "Word",
  },
  {
    img: QAsos8,
    status: "Mobile",
  },
];

function Filtr() {
  const [fillter, setFillter] = useState("All");
  return (
    <section id="port">
      <div className="bg-[#F8F8F8] mt-[100px]" id="Prt">
        <div>
          <div className="flex gap-4 justify-center text-[30px]  pt-[100px]">
            <span>MY</span>
            <span className="font-bold">PORTFOLIO</span>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid md:grid-cols-5 xl:px-[420px] lg:px-[210px] md:px-[100px] justify-center gap-[30px] mt-[50px]">
          <button
            className={`${
              fillter === "All"
                ? "bg-[#EA5424] text-white p-2 px-4"
                : "bg-[#F8F8F8] text-gray-500 "
            } ''`}
            onClick={() => {
              setFillter("All");
            }}
          >
            All
          </button>
          <button
            className={`${
              fillter === "Html"
                ? "bg-[#EA5424] text-white p-2 px-4"
                : "bg-[#F8F8F8] text-gray-500"
            } ""`}
            onClick={() => {
              setFillter("Html");
            }}
          >
            Html
          </button>
          <button
            className={`${
              fillter === "Photo"
                ? "bg-[#EA5424] text-white p-2 px-4"
                : "bg-[#F8F8F8] text-gray-500"
            } ""`}
            onClick={() => {
              setFillter("Photo");
            }}
          >
            PhotoShop
          </button>
          <div className="w-full flex ml-[59px] md:ml-0 lg:ml-0 xl:ml-0 gap-9">
            <button
              className={`${
                fillter === "Word"
                  ? "bg-[#EA5424] text-white p-2 px-4 w-[120px]"
                  : "bg-[#F8F8F8] text-gray-500 "
              } ''`}
              onClick={() => {
                setFillter("Word");
              }}
            >
              WordPress
            </button>
            <button
              className={`${
                fillter === "Mobile"
                  ? "bg-[#EA5424] text-white p-2 px-4"
                  : "bg-[#F8F8F8] text-gray-500 "
              } ''`}
              onClick={() => {
                setFillter("Mobile");
              }}
            >
              Mobile
            </button>
          </div>
        </div>
        <div className="md:grid md:grid-cols-4 mt-8 grid grid-cols-1" id="Prt">
          {data
            .filter((elem) => {
              if (fillter === "All") {
                return elem;
              } else {
                return elem.status === fillter;
              }
            })
            .map((item) => (
              <CartStyle key={item.id} img={item.img} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Filtr;
