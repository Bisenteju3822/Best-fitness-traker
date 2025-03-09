import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Pages.css";

const ContentSection = () => {
  return (
    <section id="content" className="content-section">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-content fadeInLeft">
            <h2>Innovative Solutions</h2>
            <p>
              We deliver innovative solutions to tackle complex challenges. Our
              team of experts leverages cutting-edge technology and creative
              strategies to drive success.
            </p>
          </Col>
          <Col md={6} className="text-center fadeInRight">
            <img
              src="pexels-zakaria-2827392.jpg"
              alt="Innovative Solutions"
              className="img-fluid rounded custom-img"
            />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} className="text-center fadeInLeft">
            <img
              src="pexels-pixabay-221210 (1).jpg"
              alt="Our Team"
              className="img-fluid rounded custom-img"
            />
          </Col>
          <Col md={6} className="text-content fadeInRight">
            <h2>Our Dedicated Team</h2>
            <p>
              Our dedicated team works tirelessly to ensure the highest quality
              of service. We believe in collaboration, innovation, and
              excellence to achieve our goals.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContentSection;
