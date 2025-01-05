import React, { useEffect, useState } from "react";
import image from "../assets/images/about-us.jpg";
import second_image from "../assets/images/about-us1.jpg";
import ghaith from "../assets/images/ghaith.jpg";
import Mohammed from "../assets/images/Mohammed hamza.jpg";
import Alan from "../assets/images/alan.jpg";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";

const Our_team = ({ data }) => {
  const [teamMembers, setTeamMembers] = useState(data || []); // Default to empty array if no data passed
  const token = Cookies.get("authToken");

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(
        `http://145.223.118.232:9000/api/v1/ourteam`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTeamMembers(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch team members.");
    }
  };

  useEffect(() => {
    if (!data) {
      fetchTeamMembers(); // Fetch only if data is not passed as a prop
    }
  }, [data]);

  return (
    <section id="team" className="p-4 flex items-center justify-center">
      <div className="mx-auto 2xl:max-w-[1800px] md:max-w-[1270px] sm:px-6 lg:px-8">
        <section className="py-[50px]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full mb-[100px] text-center">
              <h2 className="font-display text-[30px] lg:text-5xl md:text-5xl font-[600] text-primary">
                Meet Our Team
              </h2>
              <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p className="md:text-lg text-sm text-gray-700">
                  Bringing innovation and expertise together to achieve
                  remarkable results
                </p>
              </div>
            </div>

            <div className="flex justify-center w-full">
              <div className="grid justify-center grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 lg:gap-[130px] md:gap-[100px] gap-[50px]  mx-auto">
                {/* Render team members only if teamMembers is an array */}
                {Array.isArray(teamMembers) && teamMembers.length > 0 ? (
                  teamMembers.map((data, index) => (
                    <Link
                      to={`team-details/${data._id}`}
                      className="block group md:col-span-2 lg:col-span-1"
                      key={index}
                    >
                      <div className="relative mb-6">
                        <img
                          src={data.image} // Use appropriate dynamic image path if needed
                          alt={data.name}
                          className="w-40 h-40 p-1 rounded-full mx-auto transition-all duration-500 object-contain border border-gray-100 border-solid border-transparent group-hover:border-primary"
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-primary">
                        {data.name}
                      </h4>
                      <div className="flex flex-col items-center gap-3">
                        <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                          {data.PartInTeam}
                        </span>
                        <div className="flex gap-1 items-center text-primary">
                          <p className="text-sm">Show Profile</p>
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
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>No team members available.</p> // Display a fallback message if no team members exist
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Our_team;
