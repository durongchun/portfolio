import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const highlightRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const highlight = highlightRef.current;
    const { pathname } = location;

    // Hide the highlight on /resume and /email
    if (pathname === "/resume" || pathname === "/email") {
      if (highlight) {
        highlight.style.opacity = "0";
        highlight.style.width = "0";
      }
      return;
    }

    // Show and move the highlight on other routes
    const activeLink = navRef.current?.querySelector(".nav-link.active");
    if (activeLink && highlight) {
      const { offsetLeft, offsetWidth } = activeLink;
      highlight.style.left = `${offsetLeft}px`;
      highlight.style.width = `${offsetWidth}px`;
      highlight.style.opacity = "1";
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
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            RESUME
          </NavLink>
        </div>
        <div className="nav-right__email">
          <NavLink
            to="/email"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Email
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
