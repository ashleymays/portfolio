import ProjectCard from './ProjectCard/ProjectCard';
import projectCards from '../../constants/projectCards';

function ProjectCards() {
    return (
        <section>
            {
                projectCards.map((projectCard) => 
                    <ProjectCard
                        key={projectCard.title}
                        title={projectCard.title}
                        techStack={projectCard.techStack}
                    />
                )
            }
        </section>
    )
}

export default ProjectCards;