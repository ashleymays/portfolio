import { useEffect } from "react";
import anime from "animejs";
import "./ProjectImage.scss";

function ProjectImage(props) {
  useEffect(() => {
    anime({
      targets: ".image-cover",
      duration: 5000,
      height: ["100%", 0],
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <div className="image-container">
      <img alt={props.alt} src={props.src} className="project-image" />
      <div className="image-cover" />
    </div>
  );
}

export default ProjectImage;
