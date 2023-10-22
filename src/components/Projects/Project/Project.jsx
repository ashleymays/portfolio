function Project({ title, techStack, description, image, links }) {
    return (
        <div className="project">
            <img className="project__image" alt={image.alt} src={image.src} />

            <div>
                <a className="project-link" target="_blank" rel="noreferrer" href={links.github}>
                    <h2>{title} &#8599;</h2>
                </a>
                <p className="project-detail">{description}</p>
                <p className="project-detail">Made with: {techStack}</p>
            </div>
        </div>
    );
}

export default Project;
