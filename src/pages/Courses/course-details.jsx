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
        <div className="pt-[140px]">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <img
                  src={courseDetails ? courseDetails.image : ""}
                  alt="Course"
                  className="w-full h-auto rounded-lg shadow-md mb-4"
                  id="mainImage"
                />
              </div>

              <div className="w-full md:w-1/2 px-4">
                <h2 className="text-3xl font-bold mb-2">
                  {courseDetails ? courseDetails.name : ""}
                </h2>
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
                <p className="text-gray-700 mb-6 break-words">
                  {courseDetails
                    ? courseDetails.description
                    : "Loading course description..."}
                </p>

                <div className="mb-6">
                  <button
                    onClick={openModal}
                    className="bg-primary hover:bg-hover active:bg-active text-white px-4 py-2 rounded-md text-md font-medium"
                  >
                    Register Now
                  </button>
                </div>
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
