// import ProjectImage from "../../components/ProjectImage/ProjectImage";
import Layout from "../../layout/Layout";
import Divider from "../../components/Divider/Divider";
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

  return (
    <Layout>
      <div className="flex-col flex-justify-space-btwn heading-margin">
        <h1>{currentProject.title}</h1>
      </div>

      <div className="case-study__features">
        <div className="case-study__feature width-100">
          <Divider />
          <h5>TECHNOLOGIES</h5>
          <p>{currentProject.techStack}</p>
        </div>

        <div className="case-study__feature width-100">
          <Divider />
          <h5>URLS</h5>
          {currentProject.links.map((link) => (
            <div key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                <p>{link.title}</p>
              </a>
              <br />
            </div>
          ))}
        </div>
      </div>

      <div className="box" />
      {/* {currentProject.images[0] && (
        <ProjectImage
          alt={currentProject.images[0].alt}
          src={currentProject.images[0].img}
          className="case-study-image__wide"
        />
      )} */}

      <div className="case-study__texts">
        <div className="case-study__text">
          <h3>Problem</h3>
          <p className="width-50">{currentProject.copy.problem}</p>
        </div>
        <div className="case-study__text">
          <h3>Solution</h3>
          <p className="width-50">{currentProject.copy.solution}</p>
        </div>
      </div>
      {/* {currentProject.images[1] && (
          <ProjectImage
            alt={currentProject.images[1].alt}
            src={currentProject.images[1].img}
            className="case-study-image__wide"
          />
        )} */}
    </Layout>
  );
}

export default Work;
