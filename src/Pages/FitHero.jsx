import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pages.css";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const nav = useNavigate();
  return (
    <section className="hero-section w-100">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-content">
            <h1>Let's Work Together to Create Wonders with Us</h1>
            <p>
              A visionary creative, crafting captivating wonders through art and
              design. Adept at turning imagination into extraordinary reality.
            </p>
            <Button
              variant="primary"
              className="mr-2"
              onClick={() => {
                nav("/content");
              }}
            >
              Let's Talk
            </Button>
            <Button variant="secondary">Start Project</Button>
            <div className="stats mt-4">
              <div className="stat">
                <span>15+</span>
                <p>years experience</p>
              </div>
              <div className="stat">
                <span>26K</span>
                <p>projects success</p>
              </div>
              <div className="stat">
                <span>98%</span>
                <p>satisfied rate</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="pexels-cliff-booth-4056723.jpg"
              alt="Professional"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
