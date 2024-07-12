import React from "react";
import { Card, Container } from "react-bootstrap";
import "./Logo.css"; // Import the CSS file

const HomeImages = () => {
  return (
    <Container>
      <div className="image-gallery">
        <Card>
          <Card.Img src="https://via.placeholder.com/350" alt="Placeholder 1" />
        </Card>
        <Card>
          <Card.Img src="https://via.placeholder.com/350" alt="Placeholder 2" />
        </Card>
        <Card>
          <Card.Img src="https://via.placeholder.com/350" alt="Placeholder 3" />
        </Card>
      </div>
    </Container>
  );
};

export default HomeImages;
