import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../../assets/images/brand.png';
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/+96407730279390`);

};

  return (
    <div className='bg-gray-50'>
      <footer className="mx-auto 2xl:max-w-[1800px] md:max-w-[1270px] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
            <div className="col-span-full mb-10 md:mt-[-10px] lg:col-span-2 lg:mb-0">
            <Link to={"/"} className="flex lg:justify-start justify-center items-center gap-2 text-[#b29336]">
        <img
          src={brand}
          className="md:h-[57px] sm:mt-[-16px]  mt-[-13px] h-[40px]"
          alt="Message Shield"
        />
        <h2 className="md:text-[25px] text-[17px] mt-2  font-[500] text-gray-800 leading-[3.25rem]">
          Genius
          <span className="text-transparent bg-clip-text bg-[#b29336]">
            Wings
          </span>
        </h2>
      </Link>
              <div className="flex flex-col gap-9 mt-[50px]">
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <EmailOutlinedIcon style={{ color: '#b29336' }} />
                  info@genius-wings.com
                </li>
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <LocalPhoneOutlinedIcon style={{ color: "#b29336" }} />
                  +964 07730279390

                </li>
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <FmdGoodOutlinedIcon style={{ color: "#b29336" }} />
                  Kirkuk, Iraq
                </li>
              </div>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-7">Company</h4>
              <ul className="text-md transition-all duration-500">
                <li className="mb-6"><Link to={'/'} className="text-gray-600 hover:text-gray-900">Home</Link></li>
                <li className="mb-6"><Link to={'/Courses'} className="text-gray-600 hover:text-gray-900">Courses</Link></li>
                <li className="mb-6"><Link to={'/Our-Projects'} className="text-gray-600 hover:text-gray-900">Projects</Link></li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
              <ul className="text-md transition-all duration-500">
                <li className="mb-6"><Link to={'/About-us'} className="text-gray-600 hover:text-gray-900">About us</Link></li>
                <li className="mb-6"><Link to={'/Contact-us'} className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-7">Social Media</h4>
              <ul className="text-md transition-all duration-500">
                <li className="mb-6"><a target='blank' href='https://www.instagram.com/gwg2025?igsh=eHV3NTgycjZ1NWV2' className="text-gray-600 hover:text-gray-900">Instagram</a></li>
                <li className="mb-6"><Link target='blank'   onClick={handleWhatsAppClick}  className="text-gray-600 hover:text-gray-900">WhatsApp</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-7 border-t flex bg-[#b29336] justify-center border-gray-200">
        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
          <span className="text-sm text-white">©<a href="https://pagedone.io/">GeniusWing Group</a> 2024, All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
