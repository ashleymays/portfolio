import { NavLink } from "react-router-dom";
import projects from "../../../constants/projects";
import "./ProjectCard.scss";

function ProjectCard(props) {
  // const addPrecedingZero = (index) => String(index + 1).padStart(2, "0");
  const projectIndex = props.projectIndex;
  const currentProject = projects[projectIndex];

  return (
    <NavLink to={`/work/${currentProject.endpoint}`}>
      <div className="project-card flex-row flex-align-center">
        <div className="flex-row flex-align-center flex-justify-space-btwn">
          <div>
            <h2>{currentProject.title}</h2>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ProjectCard;
