import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Services = () => {
  const services = [
    {
      title: "Decommissioning and Planning Management",
      text: "This is going to have information about this service",
      imageUrl: "path/to/image1.jpg", // replace with actual image paths
    },
    {
      title: "Environmental Impact",
      text: "This is going to have information about this service",
      imageUrl: "path/to/image2.jpg",
    },
    {
      title: "Regulatory Compliance",
      text: "This is going to have information about this service",
      imageUrl: "path/to/image3.jpg",
    },
    {
      title: "Risk Management",
      text: "This is going to have information about this service",
      imageUrl: "path/to/image4.jpg",
    },
    {
      title: "Consultancy Services",
      text: "This is going to have information about this service",
      imageUrl: "path/to/image5.jpg",
    },
  ];

  return (
    <Container>
      <h2 className="title">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={service.imageUrl}
                alt={service.title}
              />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
