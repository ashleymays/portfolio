import { NavLink } from 'react-router-dom';
import './ProjectCard.scss';

function ProjectCard(props) {
    return (
        <div key={props.title} className="add-margin">
            <NavLink to={`/work/${props.endpoint}`}>
                <h2>{props.title}</h2>
            </NavLink>
            <p>{props.techStack}</p>
        </div>
    )
}

export default ProjectCard;