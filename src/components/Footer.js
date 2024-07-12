import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer-text">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Singh Engineering Solutions Ltd</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
