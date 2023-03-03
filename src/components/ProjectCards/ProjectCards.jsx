import ProjectCard from "./ProjectCard/ProjectCard";
import projects from "../../constants/projects";
import "./ProjectCards.scss";

function ProjectCards() {
  return (
    <div className="project-cards-container flex-col">
      {projects.map((project, index) => (
        <div key={project.endpoint}>
          <ProjectCard projectIndex={index} />
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;
