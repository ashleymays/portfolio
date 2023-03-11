import ProjectCards from "../../components/ProjectCards/ProjectCards";
import Contact from "../../components/Contact/Contact";
import Divider from "../../components/Divider/Divider";
import Layout from "../../layout/Layout";
import "./Home.scss";

function Home() {
  return (
    <Layout>
      <h1 className="home__title">
        <span>software</span>
        <span className="home__title__second-line flex-row flex-align-center">
          <span>developer</span>
          <p className="home__subtitle">making exceptional digital experiences and enjoying every minute of it.</p>
        </span>
      </h1>
      <h4>Selected Work</h4>
      <Divider />
      <ProjectCards />
      <Contact />
    </Layout>
  );
}

export default Home;
