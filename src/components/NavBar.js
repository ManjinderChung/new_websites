import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Navbar.css"; // Custom CSS file for navbar

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div>
      <div className="nav-container">
        <Container>
          <nav className="navBar">
            <Link
              to="/"
              className={`nav-button ${activeLink === "/" ? "active" : ""}`}
              onClick={() => setActiveLink("/")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-button ${
                activeLink === "/about" ? "active" : ""
              }`}
              onClick={() => setActiveLink("/about")}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`nav-button ${
                activeLink === "/services" ? "active" : ""
              }`}
              onClick={() => setActiveLink("/services")}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className={`nav-button ${
                activeLink === "/projects" ? "active" : ""
              }`}
              onClick={() => setActiveLink("/projects")}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`nav-button ${
                activeLink === "/contact" ? "active" : ""
              }`}
              onClick={() => setActiveLink("/contact")}
            >
              Contact
            </Link>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
