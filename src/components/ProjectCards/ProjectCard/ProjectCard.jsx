import { NavLink } from 'react-router-dom';
import './ProjectCard.scss';

function ProjectCard(props) {
    const addPrecedingZero = (index) => {
        return String(index + 1).padStart(2, '0');
    }

    console.log(props.index)

    return (
        <div key={props.title} className="project-margin flex-row flex-al-center">
            <p className='project-index'>
                {addPrecedingZero(props.index)}
            </p>
            <div>
                <NavLink to={`/work/${props.endpoint}`}>
                    <h2>{props.title}</h2>
                </NavLink>
                <p>{props.techStack}</p>
            </div>
        </div>
    )
}

export default ProjectCard;