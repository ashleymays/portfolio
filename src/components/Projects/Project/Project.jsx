function Project({ title, techStack, description, image, links }) {
    return (
        <div className="project">
            <img className="project__image" alt={image.alt} src={image.src} loading="lazy" />

            <div className="project-details">
                <a target="_blank" rel="noreferrer" href={links.github}>
                    <h3>{title} &#8599;</h3>
                </a>
                <p>{description}</p>
                <p>Made with: {techStack}</p>
            </div>
        </div>
    );
}

export default Project;
