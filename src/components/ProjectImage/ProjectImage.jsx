import "./ProjectImage.scss";

function ProjectImage(props) {
  return (
    <div className={`${props.className || ""}`}>
      <img className="width-100" alt={props.alt} src={props.src} />
      <div className="project-image-cover" />
    </div>
  );
}

export default ProjectImage;
