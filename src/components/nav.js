import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  return (
    <div id="main">
      <div id="icon">Vijay D.</div>
      <div id="about">
        <NavLink to="/" className="navBar">
          Home
        </NavLink>
        <NavLink to="/ABOUT" className="navBar">
          About
        </NavLink>
        <NavLink to="/PROJECT" className="navBar">
          Projects
        </NavLink>
        <NavLink to="/RESUME" className="navBar">
          Resume
        </NavLink>
        <a href="https://www.google.com/" target="_blank" className="navBar">
          Blogs
        </a>
      </div>
    </div>
  );
};

export default Navbar;
