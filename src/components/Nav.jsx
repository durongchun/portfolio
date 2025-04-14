import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const highlightRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const activeLink = navRef.current.querySelector(".nav-link.active");
    if (activeLink && highlightRef.current) {
      const { offsetLeft, offsetWidth } = activeLink;
      highlightRef.current.style.left = `${offsetLeft}px`;
      highlightRef.current.style.width = `${offsetWidth}px`;
    }
  }, [location]);
  return (
    <nav className="nav">
      <div className="nav-left" ref={navRef}>
        <div className="nav-highlight" ref={highlightRef} />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          LD
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </div>

      <div className="nav-right">
        <div className="nav-right__resume">
          <NavLink to="/resume">RESUME</NavLink>
        </div>
        <div className="nav-right__email">
          <NavLink to="/email">Email</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
