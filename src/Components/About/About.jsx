import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import college_pic from "../../assets/college-pic.jpeg"

const About = ({ setPlayState }) => {
  return (
    <>
    <div className="w-full min-h-screen bg-cover bg-center flex justify-center text-white" style={{
        backgroundImage: `linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7)), url(${college_pic})`,
      }}>
        <div className="mt-44">
       <p className="text-3xl  flex justify-center md:text-5xl">UPPERHILL COLLEGE OF PROFESSIONAL STUDIES</p>
       <p className="underline flex justify-center mt-14 text-2xl md:text-4xl">ABOUT US</p>
       <p className="text-xl md:text-2xl mt-4 ml-2">Our college provides a world-class education with diverse programs, 
        dedicated faculty, and cutting-edge facilities. 
        Join a vibrant community that nurtures innovation and personal growth. 
        Your journey to success begins with us. Enrich your mind, cultivate skills, 
        and embrace a future full of possibilities. Choose excellence.
        </p>
        <p className="underline flex justify-center mt-10 text-2xl md:text-4xl">MISSION</p>
        <p className="text-xl md:text-2xl mt-4 ml-2">To enable students evaluate options, make informed decisions,
           and grow through real-life experiences, valuing wisdom and pursuing knowledge and truth. 
           By doing so, they can also guide and mentor others on their own journeys of development.</p>
           <p className="underline flex justify-center mt-10 text-2xl md:text-4xl">CORE VALUES</p>
           <p className="text-base md:text-2xl mt-4 ml-2">MODESTY, ACCOUNTABILITY, CONFIDENCE, COLLABORATION, HARDWORK, PERSISTENCE, TEAM-WORK</p>
           <p className="underline flex justify-center mt-10 text-2xl md:text-4xl">VISION</p>
           <p className="text-xl md:text-2xl mt-4 ml-2 mb-12">To be an institution that fosters innovation, good judgement and provide steps into a future filled with opportunities.</p>
       </div>
       
    </div>
    </>
  );
};

export default About;
