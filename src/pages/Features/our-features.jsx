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
            <div className="flex justify-center w-full p-4 py-16  md:py-16  to-primary  ">
              <div className="2xl:max-w-[1600px] md:max-w-[1200px]">
                <div className="mx-auto w-full mb-[100px]  text-center">
                  <h2 className="font-display text-[30px]  lg:text-5xl md:text-5xl  font-[600]   text-primary  ">
                    Our Key Features
                  </h2>
                  <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                    <p className="md:text-lg text-sm text-gray-700 ">
                      Explore the innovative solutions and capabilities that
                      define our excellence
                    </p>
                  </div>
                </div>
                <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2  2xl:grid-cols-4 md:grid-cols-3">
                  {Features.map((data) => (
                    <div class="relative overflow-hidden rounded-lg  min-w-[300px] border bg-white/60 p-2">
                      {/* <img
                        src="https://img.icons8.com/?size=100&id=68406&format=png&color=1A1A1A"
                        className="h-[80px] ml-4  mb-[-30px] w-[100px]"
                        alt=""
                      /> */}
                      <div class="flex h-[180px]] flex-col justify-between rounded-md p-6">
                        <div class="space-y-2">
                          <h3 class="font-[600] text-lg text-primary">
                            {data.Title}
                          </h3>
                          <p class="text-sm text-muted-foreground break-words line-clamp-2 ">
                            {data.description}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {
                             total_data>12&&Features.length>0?
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
                               disabled={
                                 pagination.currentPage === pagination.numberOfPages
                               }
                               className="px-4 py-2 mx-2 border rounded-md disabled:opacity-50 bg-white hover:bg-primary hover:text-white"
                             >
                               Next
                             </button>
                           </div>
:null
                }
          
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
