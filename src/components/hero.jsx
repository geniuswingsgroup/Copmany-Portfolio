import React from "react";
import { Link } from "react-router-dom";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import image from "../assets/images/undraw_progressive-app_9517 (4).svg";
import BrandCarousel from "./brands";

export default () => {
  return (
    <div className="flex flex-col pt-[80px] min-h-screen ">
      {/* Hero Section */}
      
      <div className="flex flex-1 items-center justify-center">
        <div className="relative mx-auto">
          <div className="absolute inset-0 blur-xl h-[580px]"></div>
          <div className="mx-auto relative ">
  <div className="absolute inset-0 blur-xl h-[580px]"></div>
  <div className="relative">
    <section>
      <div className=" mx-auto px-4 py-28 2xl:gap-[200px] text-gray-600 overflow-hidden md:px-8 md:flex">
        <div className="flex-none space-y-5 2xl:max-w-5xl max-w-3xl">
          <Link
            to={"/Our-features"}
            className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
          >
            <span className="inline-block rounded-full px-3 py-1 bg-primary text-white">
              GeniusWings
            </span>
            <p className="flex items-center">
              Building Digital Futures{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </Link>
          <h1 className="mx-auto max-w-8xl font-display text-[30px]  lg:text-5xl md:text-5xl  font-[600] tracking-tight text-slate-900">
            <span className="inline-block">
              Empowering Innovation Building
              <span className="text-transparent bg-clip-text 2xl:block bg-primary"> the Future</span>{" "}
              <span className="relative text-primary ml-3"></span>
            </span>
          </h1>

          <p className=" mt-9 max-w-2xl text-sm tracking-tight sm:text-lg text-slate-700 sm:mt-6 lg:text-lg">
            Delivering cutting-edge software solutions to drive your
            business forward. Transform your ideas into reality with our
            expert team of developers and designers.{" "}
          </p>

          <div className="mt-12 flex flex-col justify- gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
            <Link
              to={"/Contact-us"}
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-primary hover:bg-hover active:bg-active text-white h focus-visible:outline-slate-900 animate-fade-in-left"
            >
              <span className="mx-3 flex gap-2 items-center font-semibold text-[14px]">
                <AddIcCallOutlinedIcon />
                Contact Us
              </span>
            </Link>
            <div className="relative flex flex-1 flex-col items-stretch sm:flex-none">
              <Link to={"/About-us"}>
                <button
                  className="group inline-flex w-full ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-primary focus-visible:ring-slate-300 animate-fade-in-right"
                  type="button"
                >
                  <span className="mx-3 flex gap-2 items-center font-semibold text-[14px]">
                    <ReadMoreIcon />
                    About Us
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden lg:block">
          <img
            src={image}
            className="max-w-xl 2xl:min-w-[700px]"
            alt="Progressive App Illustration"
          />
        </div>
      </div>
    </section>
  </div>
</div> 
        </div>
           {/* Background SVG */}
      <div className="absolute top-0 right-0 z-10">
     
      </div>
      </div>
      {/* Brand Carousel */}
      <div className="flex justify-end">
        <BrandCarousel />
      </div>
    </div>
  );
};

