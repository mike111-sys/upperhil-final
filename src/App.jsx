import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Programmes from "./Components/Programmes/Programmes";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./scrollToTop";  // Import the ScrollToTop component
import MapLocation from "./Components/MapLocation";
import StudentsPortal from "./Components/StudentsPortal/StudentsPortal";  // Import the StudentsPortal component

// Layout component to conditionally render Navbar and Footer
const Layout = ({ children }) => {
  const location = useLocation();

  // Define the path where Navbar and Footer should be hidden
  const hideNavbarFooterRoutes = ['/students-portal'];

  // Check if the current path matches any in the hideNavbarFooterRoutes array
  const shouldHide = hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      {children}
      {!shouldHide && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/programmes' element={<Programmes />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/location' element={<MapLocation />} />
          <Route path='/students-portal' element={<StudentsPortal />} />  {/* New route for StudentsPortal */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
