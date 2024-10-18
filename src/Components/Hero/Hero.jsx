import React from "react";
import arrow_icon from "../../assets/dark-arrow.png";
import heroImage from "../../assets/heroo.jpg"; // Ensure the hero image is imported correctly
import { Link } from "react-router-dom";
import "./Programs.css";
import program_1 from "../../assets/program-7.jpg";
import program_2 from "../../assets/program-8.jpg";
import program_3 from "../../assets/program-9.jpg";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import edu from "../../assets/edu_1.png"
import edu_2 from "../../assets/edu_2.jpg"
import edu_3 from "../../assets/edu_3.jpg"
import cap from "../../assets/grad-cap.jpg"
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import "./Hero.css" 

const Hero = () => {
  return (
    <>
    <div
  id="hero"
  className="w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white fade-in-bg"
  style={{
    backgroundImage: `linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7)), url(${heroImage})`,
  }}
>

      <div className="text-center max-w-2xl animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">
          {" "}
          {/* Adjusted sizes for responsiveness */}
          UPPERHILL COLLEGE OF PROFESSIONAL STUDIES
        </h1>
        <p className="max-w-xl mx-auto my-4 text-base md:text-lg">
          {" "}
          {/* Adjusted sizes for responsiveness */}
          Our innovative, cutting-edge curriculum is designed to empower
          students with the knowledge, abilities, and practical experience they
          need to excel in the fast-paced area of education.
        </p>
        <div className="flex justify-center">
          {" "}
          {/* Centering the button */}
          <ScrollLink
  to="programs-section"  // ID of the target section
  smooth={true}
  offset={-89}  // Offset for scrolling (e.g., header height)
  duration={500} // Scroll duration in milliseconds
  className="flex items-center"
>
  <button className="bg-blue-700 text-white px-6 py-3 rounded-full flex items-center transition duration-300 hover:bg-blue-800">
    Explore more
    <FaLongArrowAltRight className="ml-2" size={20}/>
  </button>
</ScrollLink>
        </div>
        </div>
      </div>
      <p className="flex justify-center mt-24 font-bold text-2xl" id="programs-section">OUR PROGRAMS</p>
      <p className="flex justify-center text-xl -mb-11">What We Offer</p>
      <div className="programs">
        <div className="program">
          <img src={program_1} alt="" />
          <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Artisan</p>
          </div>
        </div>
        <div className="program">
          <img src={program_2} alt="" />
          <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Certificate</p>
          </div>
        </div>
        <div className="program">
          <img src={program_3} alt="" />
          <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Diploma</p>
          </div>
        </div>
      </div>
      <div className="ml-0 mr-0 md:ml-28 md:mr-28">
      <p className="flex justify-center mt-24 font-bold text-2xl">OUR COLLEGE</p>
      <p className="flex justify-center text-center text-xl mt-3">Discover your potential at Upperhill College! Enhance your learning with 
        engaging courses, experienced faculty, and an energetic campus environment. 
        Become part of a community of innovators and visionaries. Your path to success starts here!</p>
        </div>
        <div className=" flex justify-center flex-col gap-3 mt-7 sm:flex-row">
  {/* First Image with Hover Effect */}
  <div className="relative group w-full md:w-80 h-auto">
    <img src={edu} alt="" className="h-72 w-full rounded-3xl md:w-auto" />
    <p className="absolute inset-0 flex justify-center items-center text-orange-200 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    Unlock your creative potential and perfect your craft with the Artisan Course at Upperhill College. Immerse yourself in hands-on training, sharpen your skills, and reveal the artist within. Become part of a thriving community of creators, where passion blends with expertise.
     Begin your journey into the world of artisanal mastery today!
    </p>
  </div>
  
  {/* Second Image with Hover Effect */}
  <div className="relative group md:w-80 md:h-auto">
    <img src={edu_2} alt="" className="h-72 w-full md:w-auto rounded-3xl" />
    <p className="absolute inset-0 flex justify-center items-center text-orange-200 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    Boost your career opportunities with our specialized certificate course at Upperhill College. This program equips you with the practical skills that are highly sought after in today's job market. Led by industry professionals, it offers a quick pathway to success. 
    Secure your future and distinguish yourself in your field with our thorough and career-driven certificate program.
    </p>
  </div>

  {/* Third Image with Hover Effect */}
  <div className="relative group h-auto w-full md:w-72">
    <img src={edu_3} alt="" className=" rounded-3xl h-80 w-full md:h-72 md:w-auto" />
    <p className="absolute inset-0 flex justify-center items-center text-orange-200 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    Advance your career with a Diploma from our college. Acquire in-depth expertise, practical skills, and valuable industry knowledge.
  Open the door to success in your chosen field. Your path to professional achievement starts today!
    </p>
  </div>
</div>
<div className="mt-36 flex justify-center mb-9">
  <img src={cap} alt="" className="w-4/5 h-72 opacity-40"/>
  <p className="absolute mt-28 text-xl font-extrabold sm:text-4xl">Enroll for our various courses</p>
  <Link to="/programmes" className="absolute bg-blue-500 text-white px-6 py-3 rounded-full flex mt-40 items-center transition duration-300 hover:bg-blue-800 sm:mt-44">View Courses</Link>
</div>
      </>
  );
};

export default Hero;
