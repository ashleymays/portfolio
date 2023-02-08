import Layout from "../../layout/Layout";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
// import Contact from '../../components/Contact/Contact'
import "./Home.scss";

function Home() {
  return (
    <Layout>
      <h1 className="home-title">
        I&apos;m Ashley, <br />a web developer <br /> in California.
      </h1>
      <ProjectCards />
      {/* <Contact /> */}
    </Layout>
  );
}

export default Home;
