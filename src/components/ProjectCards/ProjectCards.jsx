import ProjectCard from './ProjectCard/ProjectCard';
import projectCards from '../../constants/projectCards';

function ProjectCards() {
    return (
        projectCards.map((projectCard) => 
            <ProjectCard
                title={projectCard.title}
                techStack={projectCard.techStack}
            />
        )
    )
}

export default ProjectCards;