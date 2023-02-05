import ProjectCard from './ProjectCard/ProjectCard';
import projects from '../../constants/projects';
import Divider from '../Divider/Divider';
import './ProjectCards.scss';

function ProjectCards() {
    return (
        <div className='project-cards-container min-height-80'>
            <h4>Selected Work</h4>
            <Divider />
            {
                projects.map((project) => 
                    <ProjectCard
                        endpoint={project.endpoint}
                        key={project.title}
                        title={project.title}
                        techStack={project.techStack}
                    />
                )
            }
        </div>
    )
}

export default ProjectCards;