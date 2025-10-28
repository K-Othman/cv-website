/**
 * ContactForm.jsx
 * Child component responsible for:
 * - Rendering the form fields.
 * - Validating input (required by brief):
 *   - validateForm(): all fields present + logical checks
 *   - checkEmails(): email === confirmEmail (case-insensitive)
 *   - checkDate(): project date is ≥ 1 day in the future
 * - On valid submit: calls onValidSubmit(formData) from parent.
 */

import { useState } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

export default function ContactForm({ onValidSubmit }) {
  // Local form state
  const [form, setForm] = useState({
    firstName: "",
    projectDescription: "",
    email: "",
    confirmEmail: "",
    phone: "",
    preferredContact: "",
    projectDate: "",
    duration: "",
  });

  // Field-level error messages
  const [errors, setErrors] = useState({});

  /* ---------------------- Helpers ---------------------- */

  /** Check two emails match */
  function checkEmails(email, confirmEmail) {
    return email.trim().toLowerCase() === confirmEmail.trim().toLowerCase();
  }

  /** Ensure project date is at least 1 day in the future. */
  function checkDate(dateStr) {
    if (!dateStr) return false;
    const selectedDate = new Date(dateStr);
    const today = new Date();

    // Compare by date only (ignore time)
    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const differenceInDays = (selectedDate - today) / (1000 * 60 * 60 * 24);
    return differenceInDays >= 1;
  }

  /** Basic email format: something@something.com */
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  /**
   * Simple UK/international phone validation.
   * Accepts: 07123456789, +447123456789, 00447123456789.
   */
  function isValidPhone(phone) {
    const cleaned = phone.replace(/\s+/g, "");
    const ukPattern = /^(?:\+44|0|0044)\d{9,10}$/;
    return ukPattern.test(cleaned);
  }

  /**
   * Validate the entire form and return an object of { field: message }.
   * If the returned object is empty, the form is valid.
   */
  function validateForm(formData) {
    const e = {};

    // First Name
    if (!formData.firstName.trim()) {
      e.firstName = "Please enter your first name.";
    }

    // Project Description
    if (!formData.projectDescription.trim()) {
      e.projectDescription = "Please describe your project.";
    }

    // Email
    if (!formData.email.trim()) {
      e.email = "Please enter your email.";
    } else if (!isValidEmail(formData.email)) {
      e.email = "Please enter a valid email (e.g., name@email.com).";
    }

    // Confirm Email
    if (!formData.confirmEmail.trim()) {
      e.confirmEmail = "Please confirm your email.";
    } else if (!checkEmails(formData.email, formData.confirmEmail)) {
      e.confirmEmail = "Emails do not match.";
    }

    // Phone
    if (!formData.phone.trim()) {
      e.phone = "Please enter your phone number.";
    } else if (!isValidPhone(formData.phone)) {
      e.phone = "Please enter a valid phone number (e.g., +447123456789 or 07123456789).";
    }

    // Preferred Contact Method
    if (!formData.preferredContact) {
      e.preferredContact = "Please choose how you'd like to be contacted.";
    }

    // Project Start Date
    if (!formData.projectDate) {
      e.projectDate = "Please select a project start date.";
    } else if (!checkDate(formData.projectDate)) {
      e.projectDate = "Start date must be at least one day in the future.";
    }

    // Duration
    if (!formData.duration.trim()) {
      e.duration = "Please enter your project duration.";
    }

    return e;
  }

  /* --------------------------- Handlers --------------------------- */

  /** Update local state as the user types. */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /** Validate on submit. If valid, pass data to parent to show summary modal. */
  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validateForm(form);
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length === 0) {
      onValidSubmit(form); // parent handles the modal
    }
  };

  /* --------------------------- Render --------------------------- */

  return (
    <Card className="form-card shadow-sm">
      <Card.Header className="form-card__header">
        <h5 className="m-0 fw-bold">Send Me a Message</h5>
        <div className="small text-muted">
          Fill out the form below and I'll get back to you soon
        </div>
      </Card.Header>

      <Card.Body>
        <Form noValidate onSubmit={handleSubmit} className="form">
          {/* First Name */}
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              isInvalid={!!errors.firstName}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Project Description */}
          <Form.Group className="mb-3" controlId="projectDescription">
            <Form.Label>Project Description *</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="projectDescription"
              value={form.projectDescription}
              onChange={handleChange}
              isInvalid={!!errors.projectDescription}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.projectDescription}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email + Confirm Email */}
          <Row className="g-3">
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="confirmEmail">
                <Form.Label>Confirm Email *</Form.Label>
                <Form.Control
                  type="email"
                  name="confirmEmail"
                  value={form.confirmEmail}
                  onChange={handleChange}
                  isInvalid={!!errors.confirmEmail}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmEmail}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          {/* Phone */}
          <Form.Group className="my-3" controlId="phone">
            <Form.Label>Phone Number *</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="+44 7123 456 789"
              value={form.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Preferred Contact */}
          <Form.Group className="my-3" controlId="preferredContact">
            <Form.Label>Preferred Contact Method *</Form.Label>
            <Form.Select
              name="preferredContact"
              value={form.preferredContact}
              onChange={handleChange}
              isInvalid={!!errors.preferredContact}
              required
            >
              <option value="">Select contact method</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.preferredContact}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Project Date + Duration */}
          <Row className="g-3">
            <Col md={6}>
              <Form.Group controlId="projectDate">
                <Form.Label>Project Start Date *</Form.Label>
                <Form.Control
                  type="date"
                  name="projectDate"
                  value={form.projectDate}
                  onChange={handleChange}
                  isInvalid={!!errors.projectDate}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.projectDate}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="duration">
                <Form.Label>Project Duration *</Form.Label>
                <Form.Control
                  type="text"
                  name="duration"
                  placeholder="e.g., 2 weeks, 1 month"
                  value={form.duration}
                  onChange={handleChange}
                  isInvalid={!!errors.duration}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.duration}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          {/* Submit */}
          <div className="d-grid mt-4">
            <Button id="submit" type="submit" className="btn-gradient">
               Submit Enquiry
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
