import React, { useEffect, useState } from "react";
import web from "../assets/images/web.png";
import sestym from "../assets/images/system.png";
import { Link } from "react-router-dom";

const Our_features = ({ data }) => {
  const [itemsToShow, setItemsToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const is2xl = window.matchMedia("(min-width: 1536px)").matches;
      setItemsToShow(is2xl ? 8 : 6);
    };

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
     <div className="flex justify-center w-full p-4 py-16 md:py-16 bg-gray-50 to-blue-100">
  <div className="2xl:max-w-[1600px] md:max-w-[1200px]">
    <div className="mx-auto w-full mb-[100px] text-center">
      <h2 className="font-display text-[30px] lg:text-5xl md:text-5xl font-[600] text-primary">
        Our Key Features
      </h2>
      <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
        <p className="md:text-lg text-sm text-gray-700">
          Explore the innovative solutions and capabilities that define our excellence
        </p>
      </div>
    </div>
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3">
      {data.slice(0, itemsToShow).map((item, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg min-w-[300px] border bg-white/60 p-2">
          <h3 className="px-6 mb-[-20px] mt-2 text-primary text-4xl font-extrabold font-manrope leading-normal break-words">
            {index + 1}
          </h3>
          <div className="flex mb-[-10px] flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h3 className="font-[600] break-words text-lg text-primary">
                {item.Title}
              </h3>
              <p className="text-sm text-muted-foreground break-words line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <Link to={"/Our-features"} dir="rtl" className="mt-5 flex gap-1 items-center hover:text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        />
      </svg>
      <p>Show more</p>
    </Link>
  </div>
</div>

    </>
  );
};

export default Our_features;
