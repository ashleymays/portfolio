import "./ProjectImage.scss";

function ProjectImage(props) {
  return (
    <div className="project-image-container">
      <img alt={props.alt} src={props.src} className={props.className || ""} />
      <div className="project-image-cover" />
    </div>
  );
}

export default ProjectImage;
