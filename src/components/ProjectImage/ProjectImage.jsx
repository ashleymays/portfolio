import "./ProjectImage.scss";

function ProjectImage(props) {
  return (
    <div className={`project-image-container ${props.className || ""}`}>
      <img alt={props.alt} src={props.src} />
      <div className="project-image-cover" />
    </div>
  );
}

export default ProjectImage;
