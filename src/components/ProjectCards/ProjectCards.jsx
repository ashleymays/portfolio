import ProjectCard from "./ProjectCard/ProjectCard";
import Divider from "../Divider/Divider";
import projects from "../../constants/projects";
import "./ProjectCards.scss";

function ProjectCards() {
  return (
    <div className="project-cards-container min-height-75">
      {projects.map((project, index) => (
        <div key={project.endpoint}>
          <ProjectCard index={index} endpoint={project.endpoint} title={project.title} techStack={project.techStack} />
          <Divider />
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;
