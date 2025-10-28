import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/portfolio.css";

// Project data array (each object represents one project)
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "/images/ecommerce.png",
    description:
      "A full-featured online store with shopping cart and payment integration. Built with modern web technologies for performance and user experience.",
    tags: ["React", "Tailwind", "TypeScript", "Stripe"],
    live: "https://k-shopping.vercel.app/",
    code: "https://github.com/K-Othman/K-Shopping",
  },
  {
    id: 2,
    title: "Gem Hotel",
    image: "/images/hotel.png",
    description:
      "A responsive hotel website, built using React and TypeScript. Showcases modern design and user-friendly interface.",
    tags: ["React", "CSS", "TypeScript"],
    live: "https://the-gem-hotel.vercel.app/",
    code: "https://github.com/K-Othman/The-Gem-Hotel",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    description:
      "My personal portfolio website to showcase my skills, and experience as a developer.",
    tags: ["React", "Tailwind"],
    live: "https://www.karimabdelghany.dev/",
    code: "https://github.com/K-Othman/Personal-website",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="hero-section">
      <Container>
        {/* Section header */}
        <div className="text-center mb-5">
          <h2 className="section-title--center">Portfolio</h2>
          <div className="title-underline" aria-hidden="true"></div>
          <p className="section-lead">
            A showcase of my latest projects and creative work. Each project represents
            a unique challenge and solution.
          </p>
        </div>

        {/* Projects grid */}
        <Row className="g-4">
          {projects.map((p) => (
            <Col key={p.id} md={6} lg={4} className="project">
              <Card className="project-card h-100 shadow-sm">
                
                {/* Project image */}
                <div className="image-wrap">
                  <Card.Img src={p.image} alt={`${p.title} screenshot`} />
                </div>

                {/* Project content */}
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text className="text-muted">{p.description}</Card.Text>

                  {/* Tech tags */}
                  <div className="tag-row mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="d-flex gap-2">
                    {/* Live demo button */}
                    <Button
                      as="a"
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow-1 project-buttons"
                    >
                      <img src="/images/view.png" alt="View icon" className="view live" /> 
                      View Live
                    </Button>

                    {/* Source code button */}
                    <Button
                      as="a"
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow-1 project-buttons"
                    >
                      <img src="/images/git.png" alt="GitHub icon" className="github" /> 
                      Source Code
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
