import Divider from '../Divider/Divider';
import projectCard from '../../constants/projectCard';
import './ProjectCard.scss';

function ProjectCard() {
    return (
        projectCard.map((project) => 
            <div>
                <h2>{project.title}</h2>
                <p>{project.techStack}</p>
                <Divider />
            </div>
        )
    )
}

export default ProjectCard;