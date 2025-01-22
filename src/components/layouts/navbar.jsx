import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import brand from "../../assets//images/Global-1-.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import TemporaryDrawer from "./sidebar";
import { cheak_auth } from "../../Redux/Actions/contact-us-action";

const Navbar = () => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  // Get the auth status and HTTP status code from Redux store
  const isAuthenticated = useSelector((state) => state.contact.auth_status);

  // Dispatch the check auth action on mount
  useEffect(() => {
    dispatch(cheak_auth());
  }, [dispatch]);
  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/About-us" },
    { title: "Courses", path: "/Courses" },
    { title: "Our Features", path: "/Our-Features" },
    { title: "Our  Projects", path: "/Our-Projects" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-2 Navbar-responsive:block">
      {/* <p  dir="rtl" className="mb-[-22px] text-[10px]">group</p> */}

      <Link to={"/"} className="flex lg:justify-start justify-center items-center gap-2 text-[#b29336]">
        <img
          src={brand}
          className="md:h-[57px] sm:mt-[-16px]  mt-[-13px] h-[40px]"
          alt="Message Shield"
        />
        <h2 className="md:text-[25px] text-[17px] md:mt-2  font-[500] text-text_color leading-[3.25rem]">
          Genius
          <span className="text-transparent bg-clip-text bg-primary">
            Wings
            
          </span>
          
        </h2>
        {/* <p className="text-text_color text-[12px] relative mt-[-30px] ml-[-48px]">group</p> */}

      </Link>
      
      {
        isAuthenticated==200?
        <div className="Navbar-responsive:hidden flex">
        <TemporaryDrawer/>

        </div>        : <div className="Navbar-responsive:hidden">
        <div>
          {["top"].map((anchor, idx) => (
            <div key={idx}>
              {" "}
              {/* Add a key here */}
              <Button
                onClick={toggleDrawer(anchor, true)}
                className="menu-btn text-gray-400 hover:text-gray-300"
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill=""
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#E4C24A"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </Button>
              <Drawer
                anchor={anchor}
                open={offcanvastate[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </div>
          ))}
        </div>
      </div>
      }
    </div>
  );

  const [offcanvastate, setOffcanvastateState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOffcanvastateState({ ...offcanvastate, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className=" h-screen bg-[#1E1E1E] p-[16px] pt-[20px] "
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
   <Link to={"/"} className="flex lg:justify-start justify-center items-center gap-2 text-[#b29336]">
        <img
          src={brand}
          className="md:h-[57px] sm:mt-[-16px]  mt-[-13px] h-[40px]"
          alt="Message Shield"
        />
        <h2 className="md:text-[25px] text-[17px] mt-2  font-[500] text-text_color leading-[3.25rem]">
          Genius
          <span className="text-transparent bg-clip-text bg-primary">
            Wings
          </span>
        </h2>
      </Link>
      <ul className="flex-1 justify-end w-full items-center space-y-6 ">
        {navigation.map((item, idx) => (
          <li
            key={item.path}
            className="text-black mt-[60px] hover:text-primary"
          >
            {" "}
            {/* Add key={item.path} */}
            <a
              href={item.path}
              className="flex border-b text-text_color pb-[20px] border-[#302f2f] justify-center hover:text-ptimary transition-all duration-700"
            >
              {item.title}
            </a>
          </li>
        ))}
        <li>
          <li className="pt-[30px]">
            <Link
              to={"/Contact-us"}
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium   bg-primary hover:bg-hover active:bg-active duration-150 rounded-full "
            >
              Contact Us
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
            </Link>
          </li>
        </li>
      </ul>
    </Box>
  );

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
      className=
      {
        isScrolled?
  "fixed w-full z-50 shadow-  backdrop-blur-lg  md:py-[8px] pt-[8px] "
  :
  "fixed w-full z-50 shadow-sm  md:py-[8px]  pt-[8px]"        
      }
      
    
    >
      <nav
        className={`md:text-sm transition-all duration-300 ease-in-out  ${
          isScrolled
            ? "z-20 top-0 inset-x-0   md:relative bg-blur bg-opacity-80 backdrop-blur-lg "
            : "md:bg-transparent  "
        }`}
      >
        <div className="gap-x-14 max-w-[1900px] mx-auto  items-center  px-4 Navbar-responsive:flex justify-between w-full Navbar-responsive:px-8">
          <Brand />

        {
          isAuthenticated==200?
          <div className="Navbar-responsive:flex hidden">
          <TemporaryDrawer/>

          </div>

          :
          <div
          className={`flex-1 w-full items-center mt-8 md:mt-0 Navbar-responsive:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="flex-1 justify-end w-full items-center space-y-6 Navbar-responsive:flex Navbar-responsive:space-x-6 Navbar-responsive:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className=" text-text_color text-[16px]  ">
                <Link
                  to={item.path}
                  className="block hover:text-primary transition-all duration-700"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={"/Contact-us"}
                className="flex text-[15px] items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-primary hover:bg-hover active:bg-active duration-150 rounded-full md:inline-flex"
              >
                Contact Us{" "}
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
              </Link>
            </li>
          </ul>
        </div>
        }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
