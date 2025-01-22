import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();
  const [expanded, setExpanded] = useState(false); // Add state for navbar collapse control

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleNavClick = (link) => {
    setActiveLink(link);
    setExpanded(false); // Collapse the navbar after selecting a link
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded} // Control the expanded state
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <Container>
        {/* Left Aligned Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="/se_logo.png" // Replace with the path to your logo image
            alt="Singh Engineering Solutions Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Centered Title */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle collapse on click
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Navbar.Text
              className="text-light text-center font-weight-bold"
              style={{ fontSize: "1.25rem" }}
            >
              Singh Engineering Solutions Ltd
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>

        {/* Right Aligned Navigation Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleNavClick("/")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={activeLink === "/about" ? "active" : ""}
              onClick={() => handleNavClick("/about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className={activeLink === "/services" ? "active" : ""}
              onClick={() => handleNavClick("/services")}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className={activeLink === "/projects" ? "active" : ""}
              onClick={() => handleNavClick("/projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={activeLink === "/contact" ? "active" : ""}
              onClick={() => handleNavClick("/contact")}
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
