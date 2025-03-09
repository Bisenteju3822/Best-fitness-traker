import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../All.css/Fit.css";

const Foot = () => {
  return (
    <footer className="footer bg-light text-dark py-3">
      <Container fluid>
        <Row>
          <Col md={6}>
            <p>&copy; 2025 Your Website Name. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="#" className="text-muted">
              Privacy Policy
            </a>
            <span className="text-muted mx-2">|</span>
            <a href="#" className="text-muted">
              Terms of Use
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Foot;
