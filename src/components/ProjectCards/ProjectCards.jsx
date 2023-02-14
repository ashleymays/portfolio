import ProjectCard from "./ProjectCard/ProjectCard";
// import Divider from "../Divider/Divider";
import projects from "../../constants/projects";
import "./ProjectCards.scss";

function ProjectCards() {
  return (
    <div className="project-cards-container">
      {projects.map((project, index) => (
        <div key={project.endpoint}>
          <ProjectCard projectIndex={index} />
          {/* {index !== projects.length - 1 && <Divider />} */}
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;
