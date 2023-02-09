import { NavLink } from "react-router-dom";
import "./ProjectCard.scss";

function ProjectCard(props) {
  const addPrecedingZero = (index) => String(index + 1).padStart(2, "0");

  return (
    <NavLink to={`/work/${props.endpoint}`}>
      <div className="project-spacing flex-row flex-al-center">
        <p className="project-index">{`${addPrecedingZero(props.index)}.`}</p>
        <div>
          <h2>{props.title}</h2>
          <p>{props.techStack}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default ProjectCard;
