import Layout from '../../layout/Layout';
import projects from '../../constants/projects';

const getEndpoint = () => {
    const fullPath = window.location.pathname;
    const index = fullPath.lastIndexOf('/') + 1;
    return fullPath.slice(index);
}

function Work() {
    const endpoint = getEndpoint();
    const currentProject = projects.find((project) => project.endpoint === endpoint);

    return (
        <Layout>
            <h1>{currentProject.title}</h1>
            <p className='width-75'>
            </p>
            <p>
                {currentProject.techStack}
            </p>

            <img alt="" src="" className='width-100' />

            <h3>Background and Goals</h3>
            <p className='width-75'>
                {currentProject.copy.backgroundAndGoals}
            </p>

            <img alt="" src="" className='width-100' />
            <img alt="" src="" className='width-100' />

            <h3>Problems and Thought Process</h3>
            <p className='width-75'>
                {currentProject.copy.thoughtProcess}
            </p>

            <h3>Future</h3>
            <p className='width-75'>
                {currentProject.copy.future}
            </p>
        </Layout>
    )
}

export default Work;