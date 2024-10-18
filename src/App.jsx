import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Programmes from "./Components/Programmes/Programmes";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./scrollToTop";  // Import the ScrollToTop component

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />  {/* Add ScrollToTop here */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/programmes' element={<Programmes />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
