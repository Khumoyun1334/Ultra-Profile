import React from "react";

function MyProfile() {
  const now = 60;
  return (
    <div>
      <div>
        <section id="resume" class="tm-padding-top-bottom-100">
          <div class="container">
            <div class="row md:flex block justify-between gap-7 xl:px-[175px]  md:px-[30px] px-[10px]">
              <div class="col-md-6 col-sm-6 md:w-[50%] w-full">
                <h2 class="title">
                  My <strong className="font-bold">Profile</strong>
                </h2>
                <p className="text-[#606060]">
                  <span class="tm-info-label text-[#606060]">Name</span> John
                  White
                </p>
                <p className="mt-[14px] text-[#606060]">
                  <span class="tm-info-label">Birthday</span> December 24, 1996
                </p>
                <p className="mt-[14px] text-[#606060]">
                  <span class="tm-info-label">Address</span> Melbourne Victoria
                  3000 Australia
                </p>
                <p className="mt-[14px] text-[#606060]">
                  <span class="tm-info-label">Phone</span> +001 020 0340 | 009
                  080 0760
                </p>
                <p className="mt-[14px] text-[#606060]">
                  <span class="tm-info-label">Email</span> hello@company.com
                </p>
                <p className="mt-[14px] text-[#606060]">
                  <span class="tm-info-label">Website</span>{" "}
                  <a href="#" class="tm-red-text">
                    www.company.com
                  </a>
                </p>
              </div>
              <div class="col-md-6 col-sm-6 md:w-[50%] w-full">
                <h2 class="title">
                  <strong className="font-bold">Some</strong> Skills
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna
                  aliquam erat volutpat.
                </p>

                <div>
                  <div className="w-full mt-6">
                    <div className="flex justify-between px-5">
                      <p className="text-[12px] font-bold uppercase text-[#606060]">
                        Bootstrap
                      </p>
                      <p className="text-[12px] font-thin uppercase">100%</p>
                    </div>
                    <div className="w-full bg-[#eb5424] h-[3px] rounded-md mt-2">
                      <div></div>
                    </div>
                  </div>
                  <div className="w-full mt-8">
                    <div className="flex justify-between px-5">
                      <p className="text-[12px] font-bold uppercase text-[#606060]">
                        HTML5
                      </p>
                      <p className="text-[12px] font-thin uppercase">90%</p>
                    </div>
                    <div className="flex h-[3.5px] rounded-md">
                      <div className="bg-[#eb5424] w-[90%]"></div>
                      <div className="bg-white w-[10%] h-[1px] shadow-sm"></div>
                    </div>
                  </div>
                  <div className="w-full mt-8">
                    <div className="flex justify-between px-5">
                      <p className="text-[12px] font-bold uppercase text-[#606060]">
                        SEO
                      </p>
                      <p className="text-[12px] font-thin uppercase">80%</p>
                    </div>
                    <div className="flex h-[3.4px] rounded-md">
                      <div className="bg-[#eb5424] w-[80%]"></div>
                      <div className="bg-white w-[20%] h-[1px] shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyProfile;
