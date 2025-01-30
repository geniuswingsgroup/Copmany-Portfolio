import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Lang_swith = () => {

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "de", name: "German" },
  ];
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      changeLanguage(storedLanguage);
    }
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    const { t, i18n } = useTranslation();
  
  return (
    <div className="relative inline-block text-left">
      <div>
        <div
          onClick={toggleDropdown}
          className=
          {
            i18n.language==='de'?
            "Navbar-responsive:flex hidden ml-[-20px]  text-white items-center gap-2 text-[16px] cursor-pointer  mr-[-10px]   "
:
"Navbar-responsive:flex hidden  text-white items-center gap-2 text-[16px] cursor-pointer  mr-[-10px]   "

          }
          
          
          
          id="options-menu"
          aria-haspopup="true"
        >
          <span>
            
{
  t("Language")
}          </span> {/* Toggle text */}
          {/* Arrow Icon */}
          {isOpen ? (
            <svg
            className="small-screen:w-3 small-screen:h-3 w-1 h-1 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
              />
            </svg>
          ) : (
            <svg
            className="w-3 h-3 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          )}
        </div>
        <div
          onClick={toggleDropdown}
          className="Navbar-responsive:hidden flex  text-white items-center gap-2 md:text-[16px] small-screen:text-[14px] text-[12px]  cursor-pointer  mr-[-10px]   "
          id="options-menu"
          aria-haspopup="true"
        >
          <span>
            
          {i18n.language==="de"?'DE':i18n.language==="ar"?'AR':'EN'    }
          </span> {/* Toggle text */}
          {/* Arrow Icon */}
          {isOpen ? (
            <svg
            className="w-3 h-3 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
              />
            </svg>
          ) : (
            <svg
            className="w-3 h-3 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Dropdown menu, show/hide based on state */}
      {isOpen && (
        <div
          className="origin-top-right text-white border border-[#414040] cursor-pointer absolute right-0 mt-2 w-40 rounded shadow-md bg-[#2b2a2a] ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="" role="none">
            {/* Dropdown items */}
            {languages.map((lang) => (
              <div className="gap-[50px]" key={lang.code}>
                <div
                  className={
                    lang.code === i18n.language
                      ? "bg-primary  text-white gap-2 rounded  flex p-2   "
                      : " p-2  "
                  }
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsOpen(false); // Close dropdown after selection
                  }}
                >
                  <span className="ml-2 gap-3 text-white ">{lang.name}</span>
                  {/* Checkmark Icon for selected item */}
                  {lang.code === i18n.language && (
                    <svg
                      className=" h-5 w-5 text-white "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Lang_swith;
