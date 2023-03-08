import { NavLink } from "react-router-dom";
import projects from "../../../constants/projects";
import "./ProjectCard.scss";

function ProjectCard(props) {
  const currentProject = projects[props.projectIndex];

  return (
    <NavLink to={`/work/${currentProject.endpoint}`}>
      <div className="project-card flex-col">
        <h2>{currentProject.title}</h2>
        <p className="project-card__overview">{currentProject.copy.overview}</p>
      </div>
    </NavLink>
  );
}

export default ProjectCard;
