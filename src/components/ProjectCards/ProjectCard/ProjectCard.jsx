import { NavLink } from 'react-router-dom';
import Divider from '../../Divider/Divider';

function ProjectCard(props) {
    return (
        <div key={props.title}>
            <NavLink to={`/work/${props.endpoint}`}>
                <h2>{props.title}</h2>
            </NavLink>
            <p>{props.techStack}</p>
            <Divider additionalClassName="add-divider-margins" />
        </div>
    )
}

export default ProjectCard;