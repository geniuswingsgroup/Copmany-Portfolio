import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import brand from "../../assets/images/brand.png";
import Footer from "../../components/layouts/footer";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom"; // Import useParams for URL params
import Loader from "../Loader";
import Error404 from "../error404-page";

Modal.setAppElement("#root");

const CourseDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { courseId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    course: courseId,
    email: "",
    phone: "",
  });
  const [courses, setCourses] = useState([]);
  const [courseDetails, setCourseDetails] = useState(null); // Start with null
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Fetch all courses to populate the dropdown
    axios
      .get(`${apiUrl}/course`)
      .then((response) => {
        setCourses(response.data.data); // Assuming the API returns an array of courses
      })
      .catch(() => {
        setError("Failed to fetch courses.");
      });
  }, []);

  useEffect(() => {
    if (courseId) {
      // Fetch course details if courseId is available in the URL
      axios
        .get(`${apiUrl}/course/${courseId}`)
        .then((response) => {
          if (response.data.data) {
            setCourseDetails(response.data.data); // Set course details from API
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
  }, [courseId]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${apiUrl}/register`, formData);
      if (response.status === 201) {
        toast.success("Registration successful!");

        // Save the _id to localStorage
        const userId = response.data._id; // Adjust this based on your API response structure
        if (userId) {
          localStorage.setItem("registerId", response.data._id);
        }

        closeModal();
        setFormData({
          name: "",
          course: courseId,
          email: "",
          phone: "",
        });
      }
    } catch (err) {
      toast.error("Registration failed!");
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return <Error404 />;
  }

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />

      {isLoading ? (
        <Loader />
      ) : (
        <div className=" pt-[140px]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={courseDetails?courseDetails.image:null}
                alt="Product"
                className="w-full h-auto rounded-lg shadow-md mb-4"
                id="mainImage"
              />
         
            </div>
  
            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">Premium Wireless Headphones</h2>
              <div className="mb-4">
                  <div className="flex gap-4 items-center">
                    <span className="text-primary font-bold">
                      {courseDetails ? courseDetails.price : ""}
                    </span>
                    <div
                      className={
                        courseDetails?.Available
                          ? "bg-green-500 text-white px-2 rounded-md text-sm font-medium"
                          : "bg-red-500 text-white px-2 rounded-md text-sm font-medium"
                      }
                    >
                      {courseDetails?.Available ? "Available" : "Not Available"}
                    </div>
                  </div>
                </div>
             
              <p className="text-gray-700 mb-6">
                Experience premium sound quality and industry-leading noise cancellation with these wireless headphones.
                Perfect for music lovers and frequent travelers.
              </p>
  
              <div className="flex gap-1 items-center">
                <h3 className="text-lg font-semibold ">Lecturer :</h3>
                <div className="flex space-x-2">
                {courseDetails.user.name?courseDetails.user.name:null}
                </div>
              </div>
              <div className="flex gap-1 items-center mb-4">
                <h3 className="text-lg font-semibold ">Start Date :</h3>
                <div className="flex space-x-2">
                {courseDetails?courseDetails.TimeStart:null}
                </div>
              </div>
              <div className="flex space-x-4 mb-6">
                <button onClick={openModal} className="bg-primary flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-hover active:bg-active focus:outline-none ">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg> */}
                  Register
                </button>
                {/* <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  Wishlist
                </button> */}
              </div>
          
              {/* <div>
                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Industry-leading noise cancellation</li>
                  <li>30-hour battery life</li>
                  <li>Touch sensor controls</li>
                  <li>Speak-to-chat technology</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="bg-white px-6 py-4 w-[90%] max-w-lg rounded-md shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold mb-4">Register for the Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white w-full py-2 rounded-md font-medium"
          >
            {isLoading ? "Processing..." : "Register"}
          </button>
        </form>
      </Modal>
      <Footer />
    </div>
  );
};

export default CourseDetails;