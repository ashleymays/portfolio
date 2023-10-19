function Project({ title, techStack, description, image, links }) {
    return (
        <div className="project">
            <div className="project__image-wrapper">
                <img className="project__image" alt={image.alt} src={image.src} loading="lazy" />
            </div>
            <h2>
                <a target="_blank" rel="noreferrer" href={links.github}>
                    {title}.
                </a>
            </h2>
            <div className="project-details">
                <p>
                    <span className="project-details__subtitle">Tech Stack: </span>
                    {techStack}
                </p>
                <p>
                    <span className="project-details__subtitle">Description: </span>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Project;
