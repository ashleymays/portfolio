import useHeadingAnimation from "../../hooks/useHeadingAnimation";
import ProjectImage from "../../components/ProjectImage/ProjectImage";
import AnchorLinks from "../../components/AnchorLinks/AnchorLinks";
import Layout from "../../layout/Layout";
import projects from "../../constants/projects";
import "./Work.scss";

function Work() {
  const getEndpoint = () => {
    // eslint-disable-next-line no-undef
    const fullPath = window.location.pathname;
    const index = fullPath.lastIndexOf("/") + 1;
    return fullPath.slice(index);
  };

  const endpoint = getEndpoint();
  const currentProject = projects.find((project) => project.endpoint === endpoint);
  const currentProjectTitle = useHeadingAnimation(currentProject.title);

  return (
    <Layout>
      <h1 className="optional-heading-margin">{currentProjectTitle}</h1>

      <p className="width-55">{currentProject.copy.overview}</p>

      <div className="flex-col flex-align-end">
        {currentProject.images[0] && (
          <ProjectImage
            alt={currentProject.images[0].alt}
            src={currentProject.images[0].img}
            className="case-study-image"
          />
        )}

        {currentProject.copy.backgroundAndGoals && (
          <div className="width-55">
            <h3>Background & Goals</h3>
            <p>{currentProject.copy.backgroundAndGoals}</p>
          </div>
        )}

        {currentProject.copy.thoughtProcess && (
          <div className="width-55">
            <h3>Problems & Thought Process</h3>
            <p>{currentProject.copy.thoughtProcess}</p>
          </div>
        )}

        {currentProject.images[1] && (
          <ProjectImage
            alt={currentProject.images[1].alt}
            src={currentProject.images[1].img}
            className="case-study-image"
          />
        )}

        {currentProject.copy.future && (
          <div className="width-55">
            <h3>Future</h3>
            <p>{currentProject.copy.future}</p>
          </div>
        )}

        {currentProject.links && (
          <div className="width-55 case-study-margins">
            <AnchorLinks links={currentProject.links} heading="h3" />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Work;
