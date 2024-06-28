import { Link } from "react-router-dom";
import React from "react";
import { Container } from "react-bootstrap";
import "./Navbar.css"; // Custom CSS file for navbar

const NavBar = () => {
  return (
    <Container className="nav-container">
      <nav className="navBar">
        <Link to="/" className="nav-button">
          Home
        </Link>
        <Link to="/about" className="nav-button">
          About
        </Link>
        <Link to="/services" className="nav-button">
          Services
        </Link>
        <Link to="/projects" className="nav-button">
          Projects
        </Link>
        <Link to="/contact us" className="nav-button">
          Contact
        </Link>
      </nav>
    </Container>
  );
};

export default NavBar;
