import { useEffect } from "react";
import anime from "animejs";
import "./ProjectImage.scss";

function ProjectImage(props) {
  useEffect(() => {
    anime({
      targets: ".project-image-cover",
      duration: 1700,
      height: ["100%", 0],
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <div className="project-image-container">
      <img alt={props.alt} src={props.src} className={props.className || ""} />
      <div className="project-image-cover" />
    </div>
  );
}

export default ProjectImage;
