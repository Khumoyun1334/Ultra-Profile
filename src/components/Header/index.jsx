import React from "react";

function Header() {
  return (
    <section id="home">
      <div id="Home">
        <section id="home" className="templatemo-home">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-1"></div>
              <div className="col-md-8 col-sm-10">
                <h1 className="tm-home-title">
                  <strong className="font-bold">John White</strong>
                </h1>
                <h2 className="tm-home-subtitle text-[30px]">
                  Creative Director
                </h2>
                <div className="px-[10px] text-center">
                  I am a professional <strong>UX Designer</strong> and{" "}
                  <strong>Front-End Developer</strong> creating modern and
                  responsive designs for <br />
                  <strong>Web</strong> and <strong>Mobile</strong>. Let us work
                  together. Thank you.
                </div>
                <button href="#work" className=" tm-view-more-btn mt-5">
                  Let's Begin
                </button>
              </div>
              <div className="col-md-2 col-sm-1"></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Header;
