import React, { useEffect } from "react";
import image from "../../assets/images/about-us.jpg";
import second_image from "../../assets/images/about-us1.jpg";
import Footer from "../../components/layouts/footer";
import { Helmet } from "react-helmet-async";

const About_us = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="pt-[100px]">
        <section className="w-full flex justify-center p-4 mx-auto py-10 ">
          {/* Title */}
          <div className="2xl:max-w-[1600px] md:max-w-[1270px]">
            <div className="mx-auto w-full mb-[100px] text-center">
              <h2 className="font-display text-[30px] lg:text-5xl md:text-5xl font-[600] text-transparent bg-clip-text bg-primary">
                About Us
              </h2>
              <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p className="md:text-lg text-sm text-gray-700">
                  Learn about our journey, our mission, and the values that
                  drive us to deliver innovative solutions
                </p>
              </div>
            </div>

            <section className=" ">
              <div className="container mx-auto">
                <div className="lg:flex lg:-mx-6">
                  <div className="lg:w-2/4 lg:px-6">
                    <img
                      className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                      src={second_image}
                      alt=""
                    />
                    <div>
                      <p className="mt-6 text-sm text-transparent bg-clip-text bg-primary uppercase">
                        GeniusWings Group
                      </p>

                      <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                        We create custom software solutions that drive growth,
                        enhance efficiency, and deliver results tailored to your
                        business needs.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 lg:w-2/4 lg:mt-0 lg:px-6">
                    <div>
                      <h3 className="text-transparent bg-clip-text bg-primary capitalize">
                        Innovative Solutions
                      </h3>
                      <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                        We transform your ideas into innovative software
                        solutions that help your business thrive in a
                        competitive market.
                      </p>
                    </div>

                    <hr className="my-6 border-gray-200 " />

                    <div>
                      <h3 className="text-transparent bg-clip-text bg-primary capitalize">
                        Expert Development Team
                      </h3>
                      <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                        Our team of skilled professionals builds high-quality,
                        custom software tailored to meet your unique business
                        requirements.
                      </p>
                    </div>

                    <hr className="my-6 border-gray-200 " />

                    <div>
                      <h3 className="text-transparent bg-clip-text bg-primary capitalize">
                        Client-Centered Approach
                      </h3>
                      <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                        We put your needs first, developing software that
                        addresses your specific challenges and drives your
                        business success.
                      </p>
                    </div>

                    <hr className="my-6 border-gray-200 " />

                    <div>
                      <h3 className="text-transparent bg-clip-text bg-primary capitalize">
                        Commitment to Excellence
                      </h3>
                      <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                        We are dedicated to delivering exceptional software
                        solutions with the highest standards of quality,
                        reliability, and efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About_us;
