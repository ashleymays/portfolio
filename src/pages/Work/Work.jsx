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
            <p className='width-57'>
                {currentProject.copy.overview}
            </p>
            <p>
                {currentProject.techStack}
            </p>

            <img alt="" src="" className='width-100' />

            <h3>Background and Goals</h3>
            <p className='width-57'>
                {currentProject.copy.backgroundAndGoals}
            </p>

            <img alt="" src="" className='width-100' />

            <h3>Problems and Thought Process</h3>
            <p className='width-57'>
                {currentProject.copy.thoughtProcess}
            </p>

            <img alt="" src="" className='width-100' />

            <h3>Results</h3>
            <p className='width-57'>
                {currentProject.copy.results}
            </p>

            <h3>Future</h3>
            <p className='width-57'>
                {currentProject.copy.future}
            </p>
        </Layout>
    )
}

export default Work;