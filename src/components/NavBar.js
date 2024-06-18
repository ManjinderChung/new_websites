import { Link } from "react-router-dom";
import React from "react";
//created a NavBar to display on all pages
const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact us">Contact</Link>
      <Link to="/services">Services</Link>
    </nav>
  );
};

export default NavBar;
