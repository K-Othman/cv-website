/**
 * ------------------------------------------------------------
 * Component: Header (Navigation Bar)
 * Description:
 *   - A responsive navigation bar built with React-Bootstrap.
 *   - Contains links to Home, Portfolio, and Contact sections.
 *   - Smoothly scrolls to sections when clicked.
 *   - Changes background color when the user scrolls down.
 * ------------------------------------------------------------
 */

import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/navbar.css";

export default function Header() {
  /**
   * ------------------------------------------------------------
   * State: scrolled
   * ------------------------------------------------------------
   * Tracks whether the page has been scrolled more than 50px.
   * Used to apply a CSS class that changes the navbar background.
   */
  const [scrolled, setScrolled] = useState(false);

  /**
   * ------------------------------------------------------------
   * useEffect: Add scroll event listener
   * ------------------------------------------------------------
   * Listens for the window scroll position.
   * When scrollY > 50, setScrolled becomes true, applying the
   * "scrolled" class to the Navbar.
   *
   * The cleanup function removes the event listener when the
   * component unmounts, preventing memory leaks.
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * ------------------------------------------------------------
   * Function: handleScrollTo
   * ------------------------------------------------------------
   * Smoothly scrolls to a given section on the page.
   * Prevents default anchor behavior and uses scrollIntoView
   * for a smoother, modern scrolling experience.
   *
   * @param {Event} e - Click event
   * @param {string} id - Section ID
   * ------------------------------------------------------------
   */
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /**
   * ------------------------------------------------------------
   * Render Navbar
   * ------------------------------------------------------------
   * Uses Bootstrap classes for layout and responsiveness:
   * - fixed="top": keeps navbar at top while scrolling
   * - expand="md": collapses into a hamburger on smaller screens
   * - className applies custom and conditional styling
   */
  return (
    <Navbar
      expand="md"
      fixed="top"
      className={`custom-navbar py-3 ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        {/*  Logo */}
        <Navbar.Brand
          href="#home"
          className="gradient-text fw-bold fs-3"
          onClick={(e) => handleScrollTo(e, "#home")}
        >
          Karim
        </Navbar.Brand>

        {/* Responsive hamburger menu (for mobile view) */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Navigation links */}
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav>
            {/* Home link */}
            <Nav.Link
              href="#home"
              className="nav-custom"
              onClick={(e) => handleScrollTo(e, "#home")}
            >
              Home
            </Nav.Link>

            {/* Portfolio link */}
            <Nav.Link
              href="#portfolio"
              className="nav-custom"
              onClick={(e) => handleScrollTo(e, "#portfolio")}
            >
              Portfolio
            </Nav.Link>

            {/* Contact link */}
            <Nav.Link
              href="#contact-me"
              className="nav-custom"
              onClick={(e) => handleScrollTo(e, "#contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
