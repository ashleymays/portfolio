import ProjectCard from './ProjectCard/ProjectCard';
import projects from '../../constants/projects';

function ProjectCards() {
    return (
        <div className='min-height-75'>
            {
                projects.map((project, index) =>
                    <ProjectCard
                        index={index}
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