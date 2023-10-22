function Project({ title, techStack, description, image, links }) {
    return (
        <div className="project">
            <img className="project__image" alt={image.alt} src={image.src} />

            <div className="project-details">
                <a className="project-link" target="_blank" rel="noreferrer" href={links.github}>
                    <h2>{title} &#8599;</h2>
                </a>
                <p>{description}</p>
                <p>Made with: {techStack}</p>
            </div>
        </div>
    );
}

export default Project;
