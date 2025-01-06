import React, { useEffect, useState } from "react";
import Footer from "../../components/layouts/footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error404 from "../error404-page";
import Loader from "../Loader";

const TeamDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (id) {
      // Fetch course details if courseId is available in the URL
      axios
        .get(`${apiUrl}/ourteam/${id}`)
        .then((response) => {
          if (response.data.data) {
            setDetails(response.data.data); // Set course details from API
          } else {
            setError("Course not found.");
          }
        })
        .catch(() => {
          setError("Failed to fetch course details.");
        })
        .finally(() => {
          setIsLoading(false); // Set loading state to false when data fetching is complete
        });
    }
  }, [id]);

  const handlePhoneClick = () => {
    window.open(`tel:+964${ details.user.phon_number}`);
  };

  const handleEmailClick = () => {
    window.open(`mailto:${details.user.email}`);
  };

  if (error) {
    return <Error404 />;
  }

  if (isLoading) {
    return <Loader />; // Show loader only when loading is true
  }

  if (!details) {
    return <Error404 />; // Show error if details are not found
  }

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <section className="main-freeLancer-container relative pt-10 md:pt-40 mt-8 md:mt-[70px]">
          <div className="details-cover w-full absolute top-0 left-0 z-0 h-40 md:h-60 b"></div>

          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex items-center sm:justify-start relative z-10 mb-5">
              <img
                src={details.image}
                alt="user-avatar-image"
                className="border-4 border-solid border-white w-32 h-32 sm:w-40 sm:h-40 md:w-[200px] md:mt-0 mt-[60px] md:h-[200px] rounded-full"
              />
            </div>
           <div className="flex flex-col sm:flex-row sm:gap-5 item justify-between mb-5">
              <div className="sm:text-left">
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-1">
                  {details.name}
                </h3>
                <p className="text-gray-700 font-[500]">{details.job_title}</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 justify-between py-2 md:py-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePhoneClick}
                  className="py-2 px-4 sm:py-3 sm:px-5 rounded-full bg-primary text-white font-semibold text-sm sm:text-base shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-100 hover:bg-hover active:bg-active"
                >
                  Phone Number
                </button>
                <button
                  onClick={handleEmailClick}
                  className="py-2 px-4 sm:py-3 sm:px-5 rounded-full bg-gray-50 text-primary border font-semibold text-sm sm:text-base shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100"
                >
                  Email
                </button>
              </div>
            </div>

            <div className="mt-[50px] rounded-lg bg-white">
              <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div className="w-full flex lg:flex-row flex-col xs:flex-col gap-2 justify-center">
                  <div className="w-[90%]">
                    <dl className="text-gray-900">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-800 md:text-lg font-[600]">
                          Job Title
                        </dt>
                        <dd className="text-md font-[500]">
                          {details.job_title}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-800 font-[600] md:text-lg">
                          Role
                        </dt>
                        <dd className="text-md font-[500]">
                          {details.experience}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="w-full">
                    <dl className="text-gray-900">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-800 font-[600] md:text-lg">
                          Experience
                        </dt>
                        <dd className="text-md font-[500]">
                          {details.experience} Years
                        </dd>
                      </div>
              
                    </dl>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-[-10px] mb-[30px]">
                <dt className="mb-1 text-gray-800 font-[600] md:text-lg">
                  Description
                </dt>
                <dd className="text-md break-words font-[500]">{details.description}</dd>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TeamDetails;
