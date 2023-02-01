import Layout from "../layout/Layout";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Contact from "../components/Contact/Contact";

function Home() {
    return (
        <Layout>
            <h1>Heading Here <br /> or Something</h1>
            <ProjectCard />
            <Contact />
        </Layout>
    )
}

export default Home;