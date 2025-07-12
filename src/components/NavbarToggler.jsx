import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavbarToggler() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`menu-toggler ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setOpen(!open)}>
          LD
        </NavLink>
        <NavLink to="/projects" onClick={() => setOpen(!open)}>
          Project
        </NavLink>
        <NavLink to="/about" onClick={() => setOpen(!open)}>
          About
        </NavLink>
        <NavLink to="/resume" onClick={() => setOpen(!open)}>
          Resume
        </NavLink>
        <NavLink to="/email" onClick={() => setOpen(!open)}>
          Email
        </NavLink>
      </div>
    </>
  );
}

export default NavbarToggler;
