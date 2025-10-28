/**
 * ------------------------------------------------------------
 * Component: ContactSection
 * Description:
 *  - Displays the "Contact Me" section of the portfolio.
 *  - Contains a left info card (email, phone) and a right-hand form.
 *  - When the form is valid, shows a summary modal with entered data.
 * ------------------------------------------------------------
 */

import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import ContactForm from "./ContactForm";
import "../styles/contact.css";

const ASTON_EMAIL = "250365979@aston.ac.uk"

export default function ContactSection() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  // Called by ContactForm when validation passes
  const handleValidSubmit = (formData) => {
    setData(formData);
    setShow(true);
  };

  return (
    <section id="contact" className="my-5">
      <Container>
        {/* Title + lead */}
        <div className="text-center mb-4">
          <h2 className="section-title--center">Get In Touch</h2>
          <div className="title-underline" aria-hidden="true"></div>
          <p className="section-lead my-5">
            Have a project in mind? Let’s discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <Row className="g-4">
          {/* Info card (left) */}
          <Col lg={4}>
            <Card className="info-card shadow-sm">
              <Card.Body>
                <h5 className="fw-bold mb-4">Contact Information</h5>

                <div className="info-row">
                  <div className="info-icon">✉️</div>
                  <div>
                    <div className="info-label">Email</div>
                    <a href={`mailto:${ASTON_EMAIL}`} className="info-link">{ASTON_EMAIL}</a>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon">📞</div>
                  <div>
                    <div className="info-label">Phone</div>
                    <div className="text-muted">+44 783 367 4230</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Form */}
          <Col lg={8}>
            <ContactForm onValidSubmit={handleValidSubmit} />
          </Col>
        </Row>
      </Container>

      {/* Summary Modal  */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>To:</strong> {ASTON_EMAIL}</p>
          <hr />
          {/* Display the user’s submitted data dynamically */}
          {data && (
            <>
              <p><strong>First Name:</strong> {data.firstName}</p>
              <p><strong>Project Description:</strong><br />{data.projectDescription}</p>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Confirm Email:</strong> {data.confirmEmail}</p>
              <p><strong>Phone:</strong> {data.phone}</p>
              <p><strong>Preferred Contact:</strong> {data.preferredContact}</p>
              <p><strong>Project Start Date:</strong> {data.projectDate}</p>
              <p><strong>Project Duration:</strong> {data.duration}</p>
            </>
          )}
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
