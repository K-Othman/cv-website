/**
 * ------------------------------------------------------------
 * Component: Home (Hero Section)
 * Description:
 *   - The introductory "hero" section displayed at the top of the website.
 *   - Includes a welcome badge, headline, subtext, and two CTA (Call-To-Action) buttons.
 *   - Uses Bootstrap utility classes for layout and spacing.
 * ------------------------------------------------------------
 */

import "../styles/home.css";

const Home = () => {
  return (
    /**
     * ------------------------------------------------------------
     * Hero Section Layout
     * ------------------------------------------------------------
     * - Contains:
     *   1. Welcome badge
     *   2. Hero headline with gradient text
     *   3. Descriptive paragraph
     *   4. Two action buttons (Portfolio + Contact)
     */
    <section
      id="home"
      className="hero-section d-flex align-items-center justify-content-left text-left"
    >
      <div className="container">
        {/* --- Welcome badge --- */}
        <span className="intro-badge">Welcome to my portfolio</span>

        {/* --- Hero headline --- */}
        <h1 className="hero-title">
          Hi, I'm a <span className="gradient-text">Creative Developer</span>
        </h1>

        {/* --- Subtext paragraph --- */}
        <p className="hero-subtext">
          I craft beautiful digital experiences that combine elegant design
          with powerful functionality. Let's bring your vision to life.
        </p>

        {/* --- Call-to-action buttons --- */}
        <div className="hero-buttons">
          <a href="#portfolio" className="btn btn-primary me-3">
            View My Work →
          </a>
          <a href="#contact" className="btn btn-outline-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
