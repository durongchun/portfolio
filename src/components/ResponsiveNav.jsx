import { useState, useEffect } from "react";
import Nav from "./Nav"; // full desktop nav
import NavbarToggler from "./NavbarToggler"; // your hamburger menu component

function ResponsiveNav() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <NavbarToggler /> : <Nav />;
}

export default ResponsiveNav;
