import Divider from '../../Divider/Divider';

function ProjectCard(props) {
    return (
        <div key={props.title}>
            <h2>{props.title}</h2>
            <p>{props.techStack}</p>
            <Divider additionalClassName="add-divider-margins" />
        </div>
    )
}

export default ProjectCard;