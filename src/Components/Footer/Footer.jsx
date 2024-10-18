import React from "react"; 
import logo from "../../assets/school_logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-auto max-w-5xl w-full py-8 text-sm">
      
      {/* Main container for responsiveness */}
      <div className="flex flex-col sm:flex-row w-full">
        
        {/* First Column - Logo and College Info */}
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <img src={logo} alt="Upperhill College Logo" className="w-auto h-40 mb-4 mx-auto sm:mx-0"/>
          <p className="font-bold text-lg text-amber-500 text-center sm:text-left ">UPPERHILL COLLEGE OF PROFESSIONAL STUDIES</p>
          <p className="font-bold text-base text-center sm:text-left">Where bright future unlocks!</p>
          <p className=" text-center sm:text-left">Nakuru, Kenyatta Avenue</p>
        </div>

        {/* Second Section - Two Columns on Small Screens */}
        <div className="w-full sm:w-1/2">
          <div className="grid grid-cols-2 gap-8 w-full">
            
            {/* Contact Info and Social Media */}
            <div>
              <p className="font-bold underline">Contact</p>
              <p className="mt-3">Email: upperhillcollege@gmail.com</p>
              <p className="mt-1">Phone: +254742957520</p>
              <p className="font-bold mt-5 underline">Follow Us</p>
              <div className="flex space-x-2 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-blue-600 size-5 hover:text-blue-800 transition-colors duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="text-blue-400 size-5 hover:text-blue-600 transition-colors duration-300" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-pink-600 size-5 hover:text-pink-800 transition-colors duration-300" />
                </a>
              </div>
            </div>
            
            {/* About */}
            <div>
              <p className="font-bold underline">About</p>
             <Link to="/about-us"> <p className="mt-4 hover:underline cursor-pointer">About Us</p></Link>
             <Link to="/location"><p className="mt-2 cursor-pointer hover:underline">Map Location</p></Link> 
              <Link to="/contact-us"><p className="mt-2 cursor-pointer hover:underline">Contact Us</p></Link>
              <p className="mt-2">Terms & Conditions</p>
            </div>

            {/* Courses */}
            <div>
              <p className="font-bold underline">Courses</p>
              <p className="mt-4">Diploma</p>
              <p className="mt-2">Certificate</p>
              <p className="mt-2">Artisan</p>
              <p className="mt-2">Short Courses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8">
        <hr className="border-t border-gray-300" />
        <p className="text-center font-medium text-gray-700 mt-4">Developed by <a className="hover:text-blue-400" href="https://mikechege.xyz">Michael Chege</a></p>
      </div>
    </div>
  );
};

export default Footer;
