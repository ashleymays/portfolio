import Divider from '../Divider/Divider';
import projectCard from '../../constants/projectCard';

function ProjectCard() {
    return (
        projectCard.map((project) => 
            <div key={project.title}>
                <h2>{project.title}</h2>
                <p>{project.techStack}</p>
                <Divider />
            </div>
        )
    )
}

export default ProjectCard;