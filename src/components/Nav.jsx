import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    <div className="nav-left">
      <div>
        <NavLink to="/">LD</NavLink>
      </div>
      <div>
        <NavLink to="/projects">Projects</NavLink>
      </div>
      <div>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
    <div className="nav-right">
      <div>
        <NavLink to="/resume">RESUME</NavLink>
      </div>
      <div>
        <NavLink to="/email">Email</NavLink>
      </div>
    </div>
  </nav>
);

export default Nav;
