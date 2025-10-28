/**
 * ------------------------------------------------------------
 * Component: Footer
 * Description:
 *   A responsive footer with 3 columns:
 *   - Branding / About text
 *   - Quick navigation links
 *   - Connect section with call to action
 * ------------------------------------------------------------
 */

import { Container, Row, Col } from "react-bootstrap";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-section mt-5">
      <Container>
        <Row className="gy-4">
          {/*  About / Branding  */}
          <Col md={4}>
            <h5 className="footer-title">Portfolio</h5>
            <p className="footer-text">
              Creating beautiful and functional digital experiences.
            </p>
          </Col>

          {/*  Quick Links  */}
          <Col md={4}>
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          {/*  Connect  */}
          <Col md={4}>
            <h5 className="footer-title">Connect</h5>
            <p className="footer-text">
              Let’s work together on your next project.
            </p>
           <a
              href="mailto:250365979@aston.ac.uk"
              className="btn btn-primary"
            >
              Contact Me
            </a>
          </Col>
        </Row>

        {/* Divider line */}
        <hr className="footer-divider" />

        {/* Copyright line */}
        <div className="text-center footer-bottom">
          © {new Date().getFullYear()} Karim. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
