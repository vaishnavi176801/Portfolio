import { Briefcase, Code, User } from "lucide-react";
import "../index.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="about-grid">
          {/* Left Text */}
          <div className="about-text">
            <h3>Passionate Full-Stack Developer</h3>

            <p>
              Pursuing a degree in Computer Science at Dalhousie University,
               I am passionate about building responsive, accessible, and
                high-performance web applications.
            </p>

            <p>
              I am particularly interested in
              the digitalization of companies, continuously learning 
              new technologies to help businesses modernize and innovate.
            </p>

            <div className="button-group">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a href="../../public/resume.pdf" target="_blank" className="download-cv">Download CV</a>
            </div>
          </div>

          <div className="card-grid">
            <div className="gradient-border card">
              <div className="card-content">
                <div className="card-icon">
                  <Code />
                </div>
                <div className="card-text">
                  <h4>Web And Android Development</h4>
                  <p>Creating responsive websites and web applications with modern frameworks.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border card">
              <div className="card-content">
                <div className="card-icon">
                  <User />
                </div>
                <div className="card-text">
                  <h4>UI/UX Design</h4>
                  <p>Designing intuitive user interfaces and seamless user experiences with Figma.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border card">
              <div className="card-content">
                <div className="card-icon">
                  <Briefcase />
                </div>
                <div className="card-text">
                  <h4>Project Management</h4>
                  <p>Leading projects from conception to completion with SDLC and agile methodologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
