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

      <div className="flex-col flex-align-end">
        {currentProject.images[0] && (
          <ProjectImage
            alt={currentProject.images[0].alt}
            src={currentProject.images[0].img}
            className="case-study-image__wide"
          />
        )}

        {currentProject.copy.overview && <p className="width-50">{currentProject.copy.overview}</p>}

        {currentProject.copy.problem && (
          <div className="width-50">
            <h3>Problem</h3>
            <p>{currentProject.copy.problem}</p>
          </div>
        )}

        {currentProject.copy.solution && (
          <div className="width-50">
            <h3>Solution</h3>
            <p>{currentProject.copy.solution}</p>
          </div>
        )}

        {currentProject.images[1] && (
          <ProjectImage
            alt={currentProject.images[1].alt}
            src={currentProject.images[1].img}
            className="case-study-image__wide"
          />
        )}

        {currentProject.copy.future && (
          <div className="width-50">
            <h3>Future</h3>
            <p>{currentProject.copy.future}</p>
          </div>
        )}

        {currentProject.links && (
          <div className="width-50 case-study-margins">
            <AnchorLinks links={currentProject.links} heading="h3" />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Work;
