import Layout from '../../layout/Layout'
import AnchorLinks from '../../components/AnchorLinks/AnchorLinks'
import projects from '../../constants/projects'

const getEndpoint = () => {
  const fullPath = window.location.pathname
  const index = fullPath.lastIndexOf('/') + 1
  return fullPath.slice(index)
}

function Work () {
  const endpoint = getEndpoint()
  const currentProject = projects.find(
    (project) => project.endpoint === endpoint
  )

  return (
    <Layout>
      <h1>{currentProject.title}</h1>
      <p className="width-50">{currentProject.copy.overview}</p>
      <p>{currentProject.techStack}</p>

      {currentProject.images[0] && (
        <img
          alt={currentProject.images[0].alt}
          src={currentProject.images[0].src}
          className="width-100"
        />
      )}

      {currentProject.copy.backgroundAndGoals && (
        <>
          <h3>Background and Goals</h3>
          <p className="width-50">{currentProject.copy.backgroundAndGoals}</p>
        </>
      )}

      {currentProject.copy.thoughtProcess && (
        <>
          <h3>Problems and Thought Process</h3>
          <p className="width-50">{currentProject.copy.thoughtProcess}</p>
        </>
      )}

      {currentProject.images[1] && (
        <img
          alt={currentProject.images[1].alt}
          src={currentProject.images[1].src}
          className="width-100"
        />
      )}

      {currentProject.copy.future && (
        <>
          <h3>Future</h3>
          <p className="width-50">{currentProject.copy.future}</p>
        </>
      )}

      <AnchorLinks links={currentProject.links} />
    </Layout>
  )
}

export default Work
