import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/layouts/footer";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  course_filter,
  course_get,
  course_search,
  gte_value,
  keyword_value,
  lte_value,
} from "../../Redux/Actions/Course-action";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import PaginationComponent from "./page";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;
const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [gteFilter, setGteFilter] = useState(0);
  const [lteFilter, setLteFilter] = useState(0);

  const Course_data = useSelector((state) => state.course.Course_data);

  const total_courses = useSelector((state) => state.course.total_data);

  //end filtering data
  useEffect(() => {
    setCourses(Course_data);
  }, [Course_data]);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(course_get());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const searchSubmit = async () => {
    setLoading(true);
    await dispatch(course_search(searchKeyword));
    setLoading(false);
    dispatch(keyword_value(searchKeyword));

    // Set loading to false after dispatch
  };

  const filterSubmit = async () => {
    setLoading(true);
    await dispatch(course_filter(gteFilter, lteFilter));
    setLoading(false);
    dispatch(gte_value(gteFilter));
    dispatch(lte_value(lteFilter));

    // Set loading to false after dispatch
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex flex-col justify-between">
          <div className="pt-[70px] mx-auto w-full main-freeLancer-container">
            <div className="w-full md:h-[250px] flex  flex-col justify-center bg-primary h-[180px] ">
              <div className="flex justify-center w-full  items-center">
                <div className="flex flex-col mx-[50px]  w-full items-center gap-4">
                  <h1 className="text-white font-[300] md:text-[22px] text-[18px] text-center">
                    Explore Our Comprehensive Courses
                  </h1>
                  <div className="searchbar ">
                    <form onSubmit={searchSubmit} className="searchbar-wrapper">
                      <div className="searchbar-left flex gap-2 px-[13px]">
                        <button
                          type="submit"
                          className="search-icon-wrapper pt-1"
                        >
                          <span className="search-icon searchbar-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                            </svg>
                          </span>
                        </button>
                        <div className="bg-gray-300  h-[20px]  w-[1px]"></div>
                      </div>

                      <div
                        onClick={toggleDropdown}
                        className="searchbar-center "
                      >
                        <div className="searchbar-input-spacer"></div>
                        <input
                          type="text"
                          className="searchbar-input main-freeLancer-container-text active:outline-none active:border-none active:ring-none focus:outline-none focus:border-none focus:ring-none input_add_freelancer"
                          maxLength="2048"
                          name="q"
                          autoCapitalize="off"
                          autoComplete="off"
                          title="Search"
                          role="combobox"
                          placeholder="search"
                          value={searchKeyword}
                          required
                          onChange={(e) => {
                            setSearchKeyword(e.target.value);
                          }}
                          style={{
                            outline: "none",
                            border: "none",
                            boxShadow: "none",
                          }}
                        />
                      </div>
                    </form>

                    {/* Dropdown div */}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full md:absolute justify-center z-10   w-ful ">
              {isDropdownOpen && (
                <div className=" freelance-filter mx-[16px]  border w-[600px]  max-h-[160px] overflow-hidden  md:mt-[-50px] mt-[10px]   rounded-xl bg-white">
                  {/* Add your dropdown content here */}
                  <div className=" flex  flex-end">
                    <div className="flex w-full flex-col  mx-[20px]">
                      {" "}
                      <div className="flex min-w-full my-[20px]    max-h-[100px] overflow-auto justify-center  gap-[30px]">
                        <div className="grid  w-full gap-6 mb-6 md:grid-cols-1">
                          <div>
                            <p className="">Price</p>
                            <hr className="mb-[20px] w-[95%] mt-1" />
                            <form
                              onSubmit={filterSubmit}
                              className="mt-6 flex items-center gap-3 max-w-[90%] mx-4"
                            >
                              form
                              <input
                                value={gteFilter}
                                className="block px-[20px] h-[40px] w-full text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                onChange={(e) => {
                                  setGteFilter(e.target.value);
                                }}
                                type="number"
                                name=""
                                id=""
                              />
                              to
                              <input
                                value={lteFilter}
                                className="block px-[20px] h-[40px] w-full text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                onChange={(e) => {
                                  setLteFilter(e.target.value);
                                }}
                                type="number"
                                name=""
                                id=""
                              />
                              <button className="bg-primary text-white px-3 py-2 ml-2 rounded-md">
                                filter
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              onClick={() => {
                setIsDropdownOpen(false);
              }}
              className="max-w-[1570px]   md:p-4 my:px-0 pt-4 freelance-div justify-center mx-auto "
            >
              <div className="flex justify-center min-w-[100%]  md:pt-[50px] px-4">
                <div className="main-freeLancer-container main-freeLancer-details-container min-w-[100%] flex justify-center gap-[40px]">
                  <div className="flex flex-col  min-w-[100%]">
                    <div className="grid  grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3  md:grid-cols-2 max-w-[1700px] gap-4 min-w-[100%]">
                      {courses.map((data) => {
                        return (
                          <div className="swiper-slide ">
                            <Link
                              to={`/Course-detail/${data._id}`}
                              key={data._id}
                            >
                              {" "}
                              <div className="group bg-white flex justify-between flex-col sm:min-h-[275px] sm:max-h-[400px] min-h-[400px] border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-primary hover:shadow-md slide_active:border-indigo-600">
                                <div className="max-w-full">
                                  <div className="flex justify-between w-full items-center mb-3 gap-2 transition-all duration-500">
                                    <span className="text-gray-900 font-semibold">
                                      {data.name}
                                    </span>{" "}
                                    {/* Name at the start */}
                                    <span className="text-amber-500 font-semibold">
                                      {data.price}
                                    </span>{" "}
                                    {/* Price at the end */}
                                  </div>
                                  <p className="text-[13px] overflow-hidden sm:min-h-[70px] min-h-[60px] sm:text-[15px] text-gray-600 line-clamp-3 break-words duration-500 mb-4">
                                    {data.description}
                                  </p>
                                </div>
                                <div className="flex items-center max-w-full gap-4 border-t border-solid border-gray-200 pt-4">
                                  <img
                                    className="h-[200px] w-full rounded-lg object-cover border border-gray-300"
                                    src={data.image}
                                    alt={`${data.name} avatar`}
                                  />
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-center my-[50px]">
                      {courses.length <= 0
                        ? " Were sorry, but it seems there is no data available at the moment. Please check back later or contact us if you believe this is an error"
                        : null}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {total_courses > 12 && courses.length > 0 ? (
            <div className="freelancer-pagination my-[30px]  flex justify-center   ">
              <PaginationComponent />
            </div>
          ) : null}

          <Footer />
        </div>
      )}
    </div>
  );
};

export default AllCourses;
