import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Courses = ({ data }) => {
  const [itemsToShow, setItemsToShow] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      const is2xl = window.matchMedia("(min-width: 1536px)").matches;
      const is1280to1024 = window.matchMedia("(min-width: 1024px) and (max-width: 1280px)").matches;
      const isUnder568 = window.matchMedia("(max-width: 640px)").matches;
      
      setItemsToShow(is2xl ? 10 : is1280to1024 ? 9 : isUnder568 ? 4 : 8);
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
      <div className="flex justify-center w-full p-4 py-16 md:px-10 md:py-16 bg-gray-50 to-blue-100">
        <div className="mx-auto 2xl:max-w-[1600px] md:max-w-[1270px]">
          <div className="mx-auto w-full mb-[100px] text-center">
            <h2 className="font-display text-[30px] lg:text-5xl md:text-5xl font-[600] text-transparent bg-clip-text bg-primary">
              Courses
            </h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="md:text-lg text-sm text-gray-700">
                Gain valuable skills and knowledge through our comprehensive and
                engaging learning programs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 gap-8">
            {/* Product 1 */}

            {data.slice(0, itemsToShow).map((course) => (
              <Link
                key={course._id}
                to={`Course-detail/${course._id}`}
                className="relative bg-cover group w-full rounded-3xl border border-white bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
              >
                <img
                  className="rounded-2xl w-full object-cover"
                  src={course.image}
                  alt="Jacket image"
                />
                <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500  group-hover:bg-gray-50">
                  <div className="flex items-center justify-between ">
                    <h6 className="font-semibold text-base leading-7 line-clamp-2 text-black">
                      {course.name}
                    </h6>
                    <h6 className="font-semibold text-base leading-7 text-transparent bg-clip-text bg-primary text-right">
                      {course.price}
                    </h6>
                  </div>
            <div className="">

            {course.Available ? (
                    <p className="text-xs leading-5 text-green-500 ">
                      Available
                    </p>
                  ) : (
                    <p className="text-xs leading-5 text-red-500 ">
                      Not Available
                    </p>
                  )}
            </div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to={"/courses"}
            dir="rtl"
            className="mt-[20px] flex gap-1 items-center hover:text-primary"
          >
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
            <p>Show more</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Courses;
