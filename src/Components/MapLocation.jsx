import React from 'react';

const MapLocation = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-green-400 min-h-screen fade-in-bg">
      <p className="mt-36 text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 text-center text-green-700 mb-3">
        UPPERHILL COLLEGE OF PROFESSIONAL STUDIES
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.506452187474!2d36.433027173497194!3d-0.7163898352657276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182917ee4fdd9f73%3A0x8d55b84c61bc1bd!2sLuxor%20Towers!5e0!3m2!1sen!2ske!4v1729260175307!5m2!1sen!2ske"
        className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 h-64 sm:h-80 md:h-96 lg:h-[600px] mt-10 mb-10"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapLocation;
