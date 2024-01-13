import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div id="Con">
        <section id="contact" class="tm-contact">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="title">
                  Drop <strong className="font-bold">me a line</strong>
                </h2>
                <hr />
              </div>
              <div class="col-md-1 col-sm-1"></div>
              <div class="col-md-10 col-sm-10">
                <form action="#" method="post">
                  <div className="md:flex  block gap-6 justify-center">
                    <div class="col-md-6 col-sm-6 ">
                      <input
                        class="form-control lg:w-[400px] xl:w-[500px] sm:w-[420px] h-[35px] w-[300px] px-[20px]"
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <input
                        class="form-control lg:w-[400px] xl:w-[500px] md:w-[270px] h-[35px]  sm:w-[420px] px-[20px]  w-[300px] "
                        type="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <input
                    className="form-control lg:w-[824px]  xl:w-[1022px] md:w-[710px]   sm:w-[400px] px-[20px]  w-[300px]  h-[35px]"
                    type="text "
                    placeholder="Your Subject"
                  />

                  <textarea
                    className="form-control lg:w-[824px] md:w-[710px]  xl:w-[1022px]  sm:w-[400px]  w-[300px]  px-[20px]"
                    placeholder="Your Messege"
                    rows="6"
                  ></textarea>
                  <div class="col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8 flex justify-center">
                    <input
                      class="form-control  xl:px-[200px] md:w-[400px] sm:w-[400px] w-[265px] h-[40px] flex items-center justify-center"
                      type="submit"
                      value="SHOOT MESSAGE"
                    />
                  </div>
                </form>
              </div>
              <div class="col-md-1 col-sm-1"></div>
              <div class="col-md-12 col-sm-12">
                <p>
                  Copyright &copy; 2018 Ultra Profile . design:{" "}
                  <a
                    className="text-blue-600"
                    rel="nofollow noopener"
                    href="https://templatemo.com"
                  >
                    template mo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Contact;
