import { BsPinterest } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from "react";

function Compony() {
  return (
    <div>
      <section id="social" class="tm-social">
        <div class="">
          <div class="md:grid md:grid-cols-3 grid grid-cols-1">
            <div
              class="col-md-4 col-sm-4 wow rotateInUpLeft w-full xl:w-full"
              data-wow-delay="0.3s"
            >
              <div class="media facebook">
                <div className="lg:flex flex xl:flex md:block gap-5">
                  <div class="bg-white w-[70px] h-[70px] rounded-lg flex justify-center items-center ">
                    <CgFacebook size={"30px"} color="gray" />
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading tm-social-title text-white text-[18px]">
                      Pin me on
                    </h4>
                    <h3 className="text-white mt-4 text-[24px]">
                      Social Facebook
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-4 wow rotateInUpLeft w-full xl:w-full"
              data-wow-delay="0.6s"
            >
              <div className="media twitter">
                <div className="lg:flex flex xl:flex md:block gap-5">
                  <div className="bg-white w-[70px] h-[70px] rounded-lg flex justify-center items-center ">
                    <AiOutlineTwitter size={"30px"} color="gray" />
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading tm-social-title text-white text-[18px]">
                      Pin me on
                    </h4>
                    <h3 className="text-white mt-4 text-[24px]">
                      Social Twitter
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-4 wow rotateInUpLeft w-full xl:w-full"
              data-wow-delay="0.9s"
            >
              <div className="media pinterest">
                <div className="lg:flex flex xl:flex md:block gap-5">
                  <div className="bg-white w-[70px] h-[70px] rounded-lg flex justify-center items-center ">
                    <BsPinterest size={"30px"} color="gray" />
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading tm-social-title text-white text-[18px]">
                      Pin me on
                    </h4>
                    <h3 className="text-white mt-4 text-[24px]">
                      Social Pinterest
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Compony;
