import ProjectCard from './ProjectCard/ProjectCard';
import projectCards from '../../constants/projectCards';
import Divider from '../Divider/Divider';

function ProjectCards() {
    return (
        <section>
            <h4>Selected Work</h4>
            <Divider />
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