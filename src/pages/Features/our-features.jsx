import React, { useEffect, useState } from "react";
import Footer from "../../components/layouts/footer";
import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader";

const All_features = () => {
  const [Features, setFeatures] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total_data, setTotal_data] = useState();

  const [pagination, setPagination] = useState({
    currentPage: 1,
    numberOfPages: 1,
  });
  const apiUrl = process.env.REACT_APP_API_URL;

  // Fetch courses from the API
  const fetchData = async (page = 1) => {
    setLoading(true); // Set loading state before fetching
    setError(null); // Reset error state before fetching
    try {
      const response = await fetch(`${apiUrl}/feature?page=${page}&limit=12`);

      // Check for successful response
      if (!response.ok) {
        throw new Error("Failed to fetch courses.");
      }

      const data = await response.json();
      setFeatures(data.data);
      setPagination(data.paginationResult);
      setTotal_data(data.results)

    } catch (err) {
      setError("Failed to load courses.");
    } finally {
      setLoading(false); // Set loading state to false after fetching
    }
  };
  useEffect(() => {
    fetchData(pagination.currentPage);
  }, [pagination.currentPage]);
  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= pagination.numberOfPages) {
      setPagination((prev) => ({ ...prev, currentPage: page }));
    }
  };
  return (
    <div className="flex flex-col justify-between min-h-screen">
    {loading ? (
      <Loader />
    ) : (
      <div>
        <div className="pt-[100px]">
          <div className="flex justify-center w-full p-4 py-16 md:py-16 ">
            <div className="2xl:max-w-[1600px] md:max-w-[1200px]">
              <div className="mx-auto w-full mb-[100px] text-center">
                <h2 className="font-display text-[30px] lg:text-5xl md:text-5xl font-[600] text-transparent bg-clip-text bg-primary">
                  Our Key Features
                </h2>
                <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                  <p className="md:text-lg text-sm text-gray-700">
                    Explore the innovative solutions and capabilities that define our excellence
                  </p>
                </div>
              </div>

              <div className="flex flex-col  min-w-[100%]">
                    <div className="grid  grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3  md:grid-cols-2 max-w-[1700px] gap-4 min-w-[100%]">
                      {Features.map((data) => {
                        return (
                          <div key={data._id} className="swiper-slide ">
                            <div
                              key={data._id}
                            >
                              {" "}
                              <div className="group bg-white flex justify-between flex-col sm:min-h-[275px] sm:max-h-[400px] min-h-[400px] border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-primary hover:shadow-md slide_active:border-indigo-600">
                                <div className="max-w-full">
                                  <div className="flex justify-between w-full items-center mb-3 gap-2 transition-all duration-500">
                                    <span className="text-transparent break-words max-w-full text-lg bg-clip-text bg-primary font-semibold">
                                      {data.Title}
                                    </span>{" "}
                                    {/* Name at the start */}
                                 
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
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-center my-[50px]">
                      {Features.length <= 0
                        ? " Were sorry, but it seems there is no data available at the moment. Please check back later or contact us if you believe this is an error"
                        : null}
                    </p>
                  </div>

              {total_data > 12 && Features.length > 0 ? (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                    disabled={pagination.currentPage === 1}
                    className="px-4 py-2 mx-2 border rounded-md disabled:opacity-50 bg-white hover:bg-primary hover:text-white"
                  >
                    Previous
                  </button>
                  <span className="flex items-center justify-center text-lg mx-2">
                    Page {pagination.currentPage} of {pagination.numberOfPages}
                  </span>
                  <button
                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                    disabled={pagination.currentPage === pagination.numberOfPages}
                    className="px-4 py-2 mx-2 border rounded-md disabled:opacity-50 bg-white hover:bg-primary hover:text-white"
                  >
                    Next
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )}
    <Footer />
  </div>
  );
};

export default All_features;
