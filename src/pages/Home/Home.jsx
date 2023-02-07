import Layout from "../../layout/Layout";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import Contact from "../../components/Contact/Contact";
import Introduction from "../../components/Introduction/Introduction";

function Home() {
    return (
        <Layout>
            <h1>I'm Ashley, <br />a web developer.</h1>
            <Introduction />
            <ProjectCards />
            <Contact />
        </Layout>
    )
}

export default Home;