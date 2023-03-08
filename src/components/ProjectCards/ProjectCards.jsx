import ProjectCard from "./ProjectCard/ProjectCard";
import Divider from "../Divider/Divider";
import projects from "../../constants/projects";

function ProjectCards() {
  return (
    <div className="anchor-link-container flex-col">
      {projects.map((project, index) => (
        <div key={project.endpoint}>
          <ProjectCard projectIndex={index} />
          <Divider />
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;
