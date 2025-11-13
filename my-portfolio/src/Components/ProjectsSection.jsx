import { ArrowRight, ExternalLink, Github } from "lucide-react";
import "../index.css";

const projects = [
  {
    id: 1,
    title: "QuickCash",
    description: "Quick Cash is a mobile app connecting local employers with people seeking small paid jobs",
    image: "/projects/project1.png",
    tags: ["Java", "Andoird Studio", "Firebase"],
    demoUrl: "https://github.com/vaishnavi176801/QuickCash",
    githubUrl: "https://github.com/vaishnavi176801/QuickCash",
  },
  {
    id: 2,
    title: "BrewBuzz",
    description:
      "BrewBuzz is a modern coffee shop website where users can browse, learn about the café, log in, and contact the team directly.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "CSS", "Firebase"],
    demoUrl: "https://github.com/vaishnavi176801/BrewBuzz",
    githubUrl: "https://github.com/vaishnavi176801/BrewBuzz",
  },
  {
    id: 3,
    title: "The Semantic Jason Parser",
    description:
      " It provides abstract syntax tree if semantically correct jason provided",
    image: "/projects/project3.png",
    tags: ["Python", "Lex and Yacc"],
    demoUrl: "https://github.com/vaishnavi176801/Jason-Parser",
    githubUrl: "https://github.com/vaishnavi176801/Jason-Parser",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="projects-subtitle">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="p-6">
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-links">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/vaishnavi176801"
            target="_blank"
            rel="noreferrer"
            className="cosmic-button"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
