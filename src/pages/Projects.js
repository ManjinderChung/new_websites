import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      text: "This is going to have information about Project One.",
      imageUrl: "path/to/image1.jpg", // replace with actual image paths
    },
    {
      title: "Project Two",
      text: "This is going to have information about Project Two.",
      imageUrl: "path/to/image2.jpg",
    },
    {
      title: "Project Three",
      text: "This is going to have information about Project Three.",
      imageUrl: "path/to/image3.jpg",
    },
  ];

  return (
    <Container>
      <h2 className="title">Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={project.imageUrl}
                alt={project.title}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
