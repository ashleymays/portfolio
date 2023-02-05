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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam provident, nulla molestiae fugiat ipsam sit esse corporis consequatur labore, rem dolore illo atque iusto adipisci vitae eveniet sed? Suscipit, quisquam.
            </p>
            <p>{currentProject.techStack}</p>
        </Layout>
    )
}

export default Work;