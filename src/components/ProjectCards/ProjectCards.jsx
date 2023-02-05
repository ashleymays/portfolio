import ProjectCard from './ProjectCard/ProjectCard';
import projectCards from '../../constants/projectCards';
import Divider from '../Divider/Divider';

function ProjectCards() {
    return (
        <div className='min-height-80'>
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
        </div>
    )
}

export default ProjectCards;