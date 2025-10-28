import "../styles/about.css";

export default function AboutMe() {
  return (
    <>
      {/* About header section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title--center">About Me</h2>
          <div className="title-underline" aria-hidden="true"></div>

          <p className="section-lead">
            I'm a passionate developer and designer with a love for creating
            meaningful digital experiences. With expertise in modern web
            technologies and a keen eye for design, I help bring ideas to life.
          </p>
        </div>
      </section>

      {/* Education section */}
      <section id="education">
        <div className="container">
          <h2 className="section-title">Education</h2>

          {/* Aston University */}
          <div className="edu-item">
            <h3>BSc (Hons) Computer Science – Aston University</h3>
            <p><strong>2025 – Present</strong></p>
            <p>
              Studying a broad range of computing fundamentals including
              Object-Oriented Programming (Java), Web Application Development,
              Database Design and Management (SQL), and Digital Systems. 
              The course focuses on practical application and problem-solving, 
              combining theory with real-world software development.
              <br /><br />
              Through coursework and projects, I’ve strengthened my skills in
              software engineering principles, algorithm design, and system
              development life cycles, while exploring modern frameworks such as
              React.js and Node.js.
            </p>
          </div>

          {/* Northcoders Bootcamp */}
          <div className="edu-item">
            <h3>Full-Stack Software Engineering Bootcamp – Northcoders</h3>
            <p><strong>2022 – 2023</strong></p>
            <p>
              Intensive 14-week program covering JavaScript, React, Node.js,
              Express, SQL, TDD, and Agile methodologies. 
              Completed multiple full-stack projects including a hotel booking system 
              and an e-commerce application.
            </p>
          </div>
        </div>
      </section>

      {/* Work experience section */}
      <section id="work-experience" className="section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>

          {/* Apple */}
          <div className="job-item">
            <h3>Apple — Retail Specialist</h3>
            <p><strong>09/2020 – Present</strong></p>
            <p>
              Delivered exceptional customer experiences and consistently ranked
              among top performers for AppleCare and business metrics.
              Mentored new starters, supported store operations, and developed
              strong communication and problem-solving skills.
            </p>
          </div>

          {/* Intelling LTD */}
          <div className="job-item">
            <h3>Intelling LTD — Customer Representative</h3>
            <p><strong>03/2020 – 08/2020</strong></p>
            <p>
              Managed customer retention for TalkTalk, ensuring effective issue
              resolution and building long-term client trust.
            </p>
          </div>
        </div>
      </section>

      {/* Technical skills section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>

          {/* Technical list */}
          <ul className="skills-list mb-5">
            <li><img src="/images/html.jpg" alt="HTML" /> HTML5 — Advanced</li>
            <li><img src="/images/css.png" alt="CSS" /> CSS3 — Advanced</li>
            <li><img src="/images/js.png" alt="JavaScript" /> JavaScript (ES6+) — Advanced</li>
            <li><img src="/images/react.svg" alt="React" /> React.js — Intermediate</li>
            <li><img src="/images/java.png" alt="Java" /> Java — Intermediate</li>
            <li><img src="/images/sql.png" alt="SQL" /> SQL/MySQL — Intermediate</li>
            <li><img src="/images/node.png" alt="Node.js" /> Node.js — Intermediate</li>
            <li><img src="/images/git.png" alt="Git" /> Git & GitHub — Intermediate</li>
            <li><img src="/images/ts.png" alt="TypeScript" /> TypeScript — Intermediate</li>
          </ul>

          {/* Soft skills and hobbies side by side */}
          <div className="row align-items-start gy-4">
            {/* Soft skills */}
            <div className="col-md-6">
              <h3 className="mt-4 section-title">Soft Skills</h3>
              <ul className="soft-skills-list">
                <li>Strong communication and teamwork</li>
                <li>Problem-solving and analytical thinking</li>
                <li>Adaptability and continuous learning</li>
              </ul>
            </div>

            {/* Hobbies */}
            <div className="col-md-6">
              <h3 className="mt-4 section-title">Hobbies</h3>
              <p className="hobbies">
                I enjoy going to the gym, reading, traveling, and exploring new
                technologies in my free time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social links section */}
      <section id="links" className="pb-5">
        <div className="container text-center">
          <div className="links-group">
            <a
              href="https://github.com/K-Othman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/git.png" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/karim-abdelghany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="mailto:250365979@aston.ac.uk"
              className="btn btn-primary"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
