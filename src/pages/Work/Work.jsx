import useHeadingAnimation from "../../hooks/useHeadingAnimation";
import Layout from "../../layout/Layout";
import projects from "../../constants/projects";
import "./Work.scss";

const getEndpoint = () => {
  const fullPath = window.location.pathname;
  const index = fullPath.lastIndexOf("/") + 1;
  return fullPath.slice(index);
};

function ProjectImage(props) {
  return <img alt={props.alt} src={props.src} className="width-100 project-image" />;
}

function Work() {
  const endpoint = getEndpoint();
  const currentProject = projects.find((project) => project.endpoint === endpoint);
  const currentProjectTitle = useHeadingAnimation(currentProject.title);

  return (
    <Layout>
      <h1 className="optional-heading-margin">{currentProjectTitle}</h1>
      <p className="width-50">{currentProject.copy.overview}</p>
      <p>{currentProject.techStack}</p>

      {currentProject.images[0] && (
        <ProjectImage alt={currentProject.images[0].alt} src={currentProject.images[0].img} />
      )}

      {currentProject.copy.backgroundAndGoals && (
        <>
          <h3>Background & Goals</h3>
          <p className="width-50">{currentProject.copy.backgroundAndGoals}</p>
        </>
      )}

      {currentProject.copy.thoughtProcess && (
        <>
          <h3>Problems & Thought Process</h3>
          <p className="width-50">{currentProject.copy.thoughtProcess}</p>
        </>
      )}

      {currentProject.images[1] && (
        <ProjectImage alt={currentProject.images[1].alt} src={currentProject.images[1].img} />
      )}

      {currentProject.copy.future && (
        <>
          <h3>Future</h3>
          <p className="width-50">{currentProject.copy.future}</p>
        </>
      )}
    </Layout>
  );
}

export default Work;
