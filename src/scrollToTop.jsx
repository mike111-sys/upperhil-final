import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",  // Smooth scroll to the top
    });
  }, [pathname]);  // Runs when the pathname changes (i.e., when you navigate)

  return null;  // This component doesn't render anything in the UI
};

export default ScrollToTop;
