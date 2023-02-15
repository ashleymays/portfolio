import { NavLink } from "react-router-dom";
import projects from "../../../constants/projects";
import "./ProjectCard.scss";

function ProjectCard(props) {
  const currentProject = projects[props.projectIndex];

  return (
    <div className="project-card flex-align-center flex-justify-space-btwn">
      <div>
        <NavLink to={`/work/${currentProject.endpoint}`}>
          <h2>{currentProject.title}</h2>
          <p>{currentProject.techStack}</p>
        </NavLink>
      </div>
    </div>
  );
}

export default ProjectCard;
