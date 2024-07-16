import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./Navbar.css"; // Custom CSS file for navbar

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/se_logo.png" // Replace with the path to your logo image
            alt="Logo"
            height="30" // Adjust the height as needed
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => setActiveLink("/")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={activeLink === "/about" ? "active" : ""}
              onClick={() => setActiveLink("/about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className={activeLink === "/services" ? "active" : ""}
              onClick={() => setActiveLink("/services")}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className={activeLink === "/projects" ? "active" : ""}
              onClick={() => setActiveLink("/projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={activeLink === "/contact" ? "active" : ""}
              onClick={() => setActiveLink("/contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
